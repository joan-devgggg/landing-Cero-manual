import Link from "next/link"
import { casos } from "@/lib/casos"

// Bloque de casos en la home. Server component, como ArticleLinks: los enlaces van en el
// HTML servido.
export default function CasosHomeLink() {
  return (
    <section className="py-14 md:py-28 px-6" style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-4xl mx-auto">
        <div className="w-full h-px mb-10 md:mb-20" style={{ backgroundColor: "#E0DBD4" }} />

        <p
          className="text-xs font-medium mb-4 tracking-widest uppercase"
          style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
        >
          Casos
        </p>
        <h2
          className="text-4xl md:text-5xl font-semibold leading-tight mb-10 md:mb-14"
          style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
        >
          Negocios reales,{" "}
          <span style={{ fontStyle: "italic", color: "#7D9B76" }}>problemas concretos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casos.map((caso) => (
            <Link
              key={caso.slug}
              href={`/casos/${caso.slug}`}
              className="block p-8 rounded-2xl border transition-colors duration-200 hover:border-[#7D9B76]"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E0DBD4" }}
            >
              <p
                className="text-xs mb-3"
                style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
              >
                {caso.client}
              </p>
              <p
                className="text-xl font-semibold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
              >
                {caso.title}
              </p>
              <span
                className="text-sm font-medium"
                style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
              >
                Leer caso →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/casos"
          className="inline-block mt-10 text-sm font-medium underline decoration-1 underline-offset-4"
          style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
        >
          Ver todos los casos →
        </Link>
      </div>
    </section>
  )
}
