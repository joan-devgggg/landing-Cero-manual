import Link from "next/link"
import type { Caso } from "@/lib/casos"

// Cabecera común de un caso: vuelta al índice, cliente, H1 y sector.
export default function CaseHeader({ caso }: { caso: Caso }) {
  return (
    <>
      <Link
        href="/casos"
        className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-150"
        style={{ color: "#8A8580" }}
      >
        ← Volver a casos
      </Link>
      <p
        className="text-xs font-medium mb-4 tracking-widest uppercase"
        style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
      >
        Caso de éxito · {caso.client}
      </p>
      <h1
        className="text-4xl md:text-5xl font-semibold leading-tight mb-5"
        style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
      >
        {caso.title}
      </h1>
      <p
        className="text-sm mb-16"
        style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
      >
        {caso.sector}
      </p>
    </>
  )
}
