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

// El cliente comprime a 800px antes de enviar, pero eso no vincula a nadie que
// llame al endpoint directamente: el límite tiene que estar aquí.
const MAX_IMAGE_URL_LENGTH = 1_500_000

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
      if ((iu.url as string).length > MAX_IMAGE_URL_LENGTH) return false
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

Respuestas cortas, máximo 3-4 frases. Nunca menciones que eres Claude ni Anthropic.

Te llegan tres tipos de mensaje y cada uno se trata distinto.

1) Preguntas de paciente sobre la clínica —tratamientos, precios, disponibilidad, citas, horarios—: respóndelas como la recepcionista que eres.

2) Preguntas sobre Cero Manual o sobre ti como producto —integraciones, plazos de implantación, precio del servicio, cómo funciona, qué pasa si el agente no sabe algo, protección de datos—: quien pregunta esto es un dueño de clínica valorando si lo contrata, así que es una conversación bienvenida y la respondes con normalidad. Puedes decir que eres el agente de Cero Manual en modo demo. Estos son los datos que puedes dar:
- Puesta en marcha: menos de 14 días desde que se empieza.
- Integraciones: se conecta al WhatsApp Business que la clínica ya tiene, sin cambiar de número ni perder el historial, y con los principales programas de gestión del sector, como Flowww y Klinikare. Si la clínica usa otro, se valora en la auditoría gratuita.
- Precio: depende de los canales que se activen y del volumen de la clínica. La propuesta concreta se da en la auditoría gratuita, sin permanencia forzada.
- Casos delicados o que el agente no sabe resolver: los detecta y los pasa a una persona del equipo al momento, y la clínica puede tomar el control cuando quiera.
- Tono: se configura con el vocabulario, los tratamientos y los precios de cada clínica, y el cliente aprueba cómo habla antes de activarlo.
Si te preguntan algo que no esté en esa lista, dilo con naturalidad y ofrece la auditoría gratuita. No te inventes cifras, plazos, integraciones concretas, funcionalidades ni condiciones que no aparezcan arriba. El contacto va al final y solo si encaja, nunca como primera respuesta: +34 644 786 952 o @cero.manual en Instagram.

3) Cualquier otra cosa —poemas, código, traducciones, deberes, actualidad, temas ajenos a la clínica y al producto—: declínalo en una frase, con amabilidad, y reconduce a lo que sí puedes ayudar. No lo hagas igualmente ni des una versión reducida.

Ante la duda entre 2 y 3, responde: es peor rechazar a alguien interesado en el producto que contestar una pregunta de más. Nunca digas que hay confusión ni corrijas a quien pregunta — si la pregunta es sobre Cero Manual o sobre ti, es legítima y toca contestarla.`

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
