import { NextRequest, NextResponse } from "next/server"
import { createHash } from "crypto"

const PIXEL_ID = "823311757527223"

function sha256(value: string): string {
  return createHash("sha256").update(value.toLowerCase().trim()).digest("hex")
}

export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_ACCESS_TOKEN
  if (!token) {
    return NextResponse.json(
      { error: "META_CAPI_ACCESS_TOKEN no está configurado en las variables de entorno" },
      { status: 500 }
    )
  }

  let body: {
    eventName?: string
    eventId?: string
    email?: string
    phone?: string
    fbc?: string
    fbp?: string
    clientIpAddress?: string
    clientUserAgent?: string
    eventSourceUrl?: string
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Body JSON inválido" }, { status: 400 })
  }

  const {
    eventName,
    eventId,
    email,
    phone,
    fbc,
    fbp,
    clientIpAddress,
    clientUserAgent,
    eventSourceUrl,
  } = body

  const userData: Record<string, string> = {}
  if (email) userData.em = sha256(email)
  if (phone) userData.ph = sha256(phone)
  if (fbc) userData.fbc = fbc
  if (fbp) userData.fbp = fbp
  if (clientIpAddress) userData.client_ip_address = clientIpAddress
  if (clientUserAgent) userData.client_user_agent = clientUserAgent

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: eventSourceUrl,
        user_data: userData,
      },
    ],
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}))
      return NextResponse.json(
        { error: "Error en Meta CAPI", details: errorData },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Error de red al contactar Meta CAPI" }, { status: 500 })
  }
}
