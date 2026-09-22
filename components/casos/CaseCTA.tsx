import Link from "next/link"

// CTA final de los casos. Lleva al formulario de la home (CTASection, id="cta").
export default function CaseCTA({ title, text }: { title: string; text: string }) {
  return (
    <div className="max-w-3xl mx-auto mt-20 pb-4">
      <div
        className="rounded-2xl p-10 md:p-12 text-center"
        style={{ backgroundColor: "#F0F4EF", border: "1px solid #7D9B76" }}
      >
        <h2
          className="text-2xl md:text-3xl font-semibold leading-snug mb-4"
          style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
        >
          {title}
        </h2>
        <p
          className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
        >
          {text}
        </p>
        <Link
          href="/#cta"
          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
          style={{ fontFamily: "var(--font-dm-sans)", color: "#ffffff" }}
        >
          Agendar auditoría gratuita →
        </Link>
      </div>
    </div>
  )
}
