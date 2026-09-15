// Cita textual de un cliente. Solo para frases literales: lo que sea resumen nuestro va
// como prosa o en CaseCallout.
export default function CaseQuote({
  children,
  attribution,
}: {
  children: React.ReactNode
  attribution: string
}) {
  return (
    <figure className="my-10 pl-6 md:pl-8" style={{ borderLeft: "3px solid #7D9B76" }}>
      <blockquote
        className="text-2xl md:text-3xl leading-snug mb-4"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "#1A1A1A" }}
      >
        «{children}»
      </blockquote>
      <figcaption
        className="text-sm"
        style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
      >
        — {attribution}
      </figcaption>
    </figure>
  )
}
