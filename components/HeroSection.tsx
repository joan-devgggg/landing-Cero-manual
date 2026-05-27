"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const metrics = [
  { value: "< 5 seg", label: "tiempo de respuesta" },
  { value: "24/7", label: "atención constante" },
  { value: "−40%", label: "no-shows desde el primer mes" },
]

export default function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6"
      style={{ backgroundColor: "#F5F2EE" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: "#7D9B76" }}
          />
          <span
            className="text-sm tracking-widest uppercase"
            style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
          >
            Automatización para clínicas estéticas
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
        >
          Tu clínica
          <br />
          estética,
          <br />
          <span style={{ color: "#7D9B76", fontStyle: "italic" }}>trabajando sola.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
        >
          Instalamos agentes de IA en WhatsApp que responden, cualifican y agendan citas
          automáticamente — mientras tú te dedicas a lo que sabes hacer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20"
        >
          <button
            onClick={() => handleNav("#cta")}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: "#7D9B76",
              color: "#ffffff",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#6A8564"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(125,155,118,0.35)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#7D9B76"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Agendar diagnóstico gratuito
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => handleNav("#como-funciona")}
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A1A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8580")}
          >
            Ver cómo funciona →
          </button>
        </motion.div>

        {/* Metrics — 3-col compact grid on all screen sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pt-6"
          style={{ borderTop: "1px solid #E0DBD4" }}
        >
          <div
            className="rounded-2xl grid grid-cols-3"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E0DBD4",
            }}
          >
            {metrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-2 py-4 md:px-6 md:py-5"
                style={{
                  borderRight: i < metrics.length - 1 ? "1px solid #E0DBD4" : "none",
                }}
              >
                <span
                  className="text-xl md:text-3xl font-semibold leading-none mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                >
                  {m.value}
                </span>
                <span
                  className="text-xs md:text-sm leading-snug"
                  style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
