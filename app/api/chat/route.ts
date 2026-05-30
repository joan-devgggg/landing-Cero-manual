import { NextRequest, NextResponse } from "next/server"

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

// In-memory rate limiter: 20 requests per IP per minute
const rateMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return false
  }
  if (entry.count >= 20) return true
  entry.count++
  return false
}

function validateContent(content: unknown): boolean {
  if (typeof content === "string") return content.length <= 2000
  if (!Array.isArray(content)) return false
  for (const part of content) {
    if (typeof part !== "object" || !part || typeof (part as Record<string, unknown>).type !== "string") return false
    const p = part as Record<string, unknown>
    if (p.type === "text") {
      if (typeof p.text !== "string" || (p.text as string).length > 2000) return false
    } else if (p.type === "image_url") {
      const iu = p.image_url as Record<string, unknown> | undefined
      if (!iu || typeof iu.url !== "string" || !(iu.url as string).startsWith("data:image/")) return false
    } else {
      return false
    }
  }
  return true
}

const SYSTEM_PROMPT = `Eres Sara, la asistente virtual de una clínica estética. Estás en modo demo para que los visitantes de Cero Manual vean cómo funcionaría un agente real en su clínica.

Habla de forma cálida, cercana y profesional — como una recepcionista real, no como un bot ni como una agencia. Nunca uses markdown, asteriscos, negritas ni formato especial. Escribe en texto plano siempre.

Puedes responder preguntas sobre tratamientos típicos de estética (bótox, ácido hialurónico, láser, depilación, hidratación facial...), dar precios orientativos, consultar disponibilidad ficticia y agendar citas de prueba.

Si te envían una imagen, descríbela o comenta lo que ves en el contexto de una clínica estética — por ejemplo si es una foto de piel, cara, zona corporal, etc. — y ofrece información de tratamientos relacionados.

Si alguien pregunta por los servicios o precios de Cero Manual, explícales brevemente que Cero Manual es la agencia que ha creado este agente, y que pueden agendar una llamada en el +34 644 786 952 o escribir a @cero.manual en Instagram.

Respuestas cortas, máximo 3-4 frases. Nunca menciones que eres Claude ni Anthropic.`

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas peticiones. Espera un momento e inténtalo de nuevo." },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()
    const { messages } = body

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Formato incorrecto." }, { status: 400 })
    }
    if (messages.length > 30) {
      return NextResponse.json({ error: "Conversación demasiado larga." }, { status: 400 })
    }

    const validRoles = new Set(["user", "assistant"])
    for (const msg of messages) {
      if (
        typeof msg !== "object" ||
        msg === null ||
        !validRoles.has(msg.role) ||
        !validateContent(msg.content)
      ) {
        return NextResponse.json({ error: "Formato incorrecto." }, { status: 400 })
      }
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "anthropic/claude-haiku-4.5",
        max_tokens: 400,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error("OpenRouter error:", err)
      return NextResponse.json(
        { error: "Error al procesar tu mensaje. Inténtalo de nuevo." },
        { status: 500 }
      )
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content ?? ""

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Error al procesar tu mensaje. Inténtalo de nuevo." },
      { status: 500 }
    )
  }
}
