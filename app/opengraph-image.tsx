import { ImageResponse } from "next/og"

export const alt = "Cero Manual — Tu clínica estética, trabajando sola"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#F5F2EE",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#7D9B76",
              display: "flex",
            }}
          />
          <span style={{ fontSize: "28px", color: "#1A1A1A", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Cero Manual
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "72px",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
          }}
        >
          <span>Tu clínica estética,</span>
          <span style={{ color: "#7D9B76", fontStyle: "italic" }}>trabajando sola.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: "30px",
            color: "#8A8580",
            maxWidth: "780px",
          }}
        >
          Agentes de IA en WhatsApp que responden, cualifican y agendan citas — 24/7, sin contratar a nadie más.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
