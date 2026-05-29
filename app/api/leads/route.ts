import { NextRequest, NextResponse } from "next/server"

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = "appk7MGmfyUjofEJE"
const AIRTABLE_TABLE = "WEB_LEADS"

export async function POST(req: NextRequest) {
  if (!AIRTABLE_API_KEY) {
    console.error("AIRTABLE_API_KEY not set")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  let body: { nombre?: string; telefono?: string; email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { nombre, telefono, email } = body

  if (
    typeof nombre !== "string" || nombre.trim().length === 0 ||
    typeof telefono !== "string" || telefono.trim().length === 0 ||
    typeof email !== "string" || email.trim().length === 0
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: nombre.trim(),
          Phone: telefono.trim(),
          Email: email.trim(),
          Status: "New",
          Source: "Web",
        },
      }),
    }
  )

  if (!response.ok) {
    const err = await response.text()
    console.error("Airtable error:", err)
    return NextResponse.json({ error: "Failed to save lead." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
