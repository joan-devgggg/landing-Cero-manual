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

const SYSTEM_PROMPT = `Eres el asistente de demostración de Cero Manual, una agencia española de automatizaciones con IA para clínicas estéticas.

Tu objetivo es demostrar cómo funciona un agente de IA real en una clínica estética. Eres inteligente, cercano y directo. Hablas en español, con un tono profesional pero cálido — nunca robótico.

SOBRE CERO MANUAL:
- Automatizaciones con IA para clínicas estéticas en España
- Servicios: Chatbot WhatsApp, Panel de Control, Recordatorios, DMs Instagram, Agente FAQs Web
- Pack Esencial: 1.500€ setup + 299€/mes | Pack Profesional: 2.500€ setup + 380€/mes | Pack Total: 3.200€ setup + 449€/mes
- Sin permanencia, cancela con 30 días de aviso
- Contacto: WhatsApp +34 644 786 952 | Instagram @cero.manual
- Implementación en menos de 14 días

CÓMO COMPORTARTE:
- Responde preguntas sobre los servicios, precios, funcionamiento y dudas técnicas
- Si alguien quiere agendar una llamada o demo, dales el WhatsApp (+34 644 786 952) y diles que pregunten por Joan
- Si preguntan cosas sobre su clínica específica (tratamientos, precios propios, etc.) explícales que este es un agente demo de Cero Manual, y que el agente de su clínica estaría configurado con su información real
- Sé conciso. Máximo 3-4 frases por respuesta. Nada de listas largas salvo que sea necesario
- Usa algún emoji ocasionalmente pero no en exceso
- Si alguien pide "agendar una cita" para una clínica estética, muéstrales cómo funcionaría el flujo: pídeles el tratamiento que buscan, su nombre y preferencia de horario, y luego explícales que en una clínica real esto iría directo al calendario
- Nunca digas que eres Claude ni menciones Anthropic

RESTRICCIONES:
- No inventes datos que no tienes
- Si no sabes algo específico, di que lo consultarán en la llamada
- No hagas promesas de resultados garantizados`

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
      return NextResponse.json(
        { error: "Conversación demasiado larga." },
        { status: 400 }
      )
    }

    const validRoles = new Set(["user", "assistant"])
    for (const msg of messages) {
      if (
        typeof msg !== "object" ||
        msg === null ||
        !validRoles.has(msg.role) ||
        typeof msg.content !== "string" ||
        msg.content.length > 2000
      ) {
        return NextResponse.json({ error: "Formato incorrecto." }, { status: 400 })
      }
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "anthropic/claude-haiku-4.5",
        max_tokens: 400,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
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
