"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import ChatWidget from "./ChatWidget"

const stats = [
  { value: "< 5 seg", label: "Tiempo de respuesta" },
  { value: "24/7", label: "Atención constante" },
  { value: "−80%", label: "Leads que se pierden" },
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle radial gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(190,255,0,0.035) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="flex">
              <span
                className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(190,255,0,0.08)",
                  border: "1px solid rgba(190,255,0,0.2)",
                  color: "#BEFF00",
                  fontFamily: "var(--font-jetbrains-mono)",
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#BEFF00" }}
                />
                AGENTE IA · CLÍNICAS ESTÉTICAS
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Tu clínica estética,
              <br />
              <span style={{ color: "#BEFF00" }}>atendida 24/7.</span>
              <br />
              <span style={{ color: "#F5F5F5" }}>Sin contratar</span>
              <br />
              <span style={{ color: "#666666" }}>a nadie más.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "#888888", fontFamily: "var(--font-dm-sans)" }}
            >
              Un agente de IA que responde por WhatsApp, agenda citas y
              reactiva pacientes mientras tú te dedicas a lo que sabes hacer.{" "}
              <span style={{ color: "#F5F5F5" }}>Pruébalo ahora mismo →</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection("cta")}
                className="px-8 py-4 rounded-full text-base font-bold transition-all duration-200"
                style={{
                  backgroundColor: "#BEFF00",
                  color: "#0A0A0A",
                  fontFamily: "var(--font-syne)",
                  boxShadow: "0 0 30px rgba(190,255,0,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#CEFF33"
                  e.currentTarget.style.boxShadow =
                    "0 0 50px rgba(190,255,0,0.35)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#BEFF00"
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(190,255,0,0.2)"
                }}
              >
                Agendar llamada gratis
              </button>

              <button
                onClick={() => scrollToSection("como-funciona")}
                className="flex items-center gap-2 px-6 py-4 text-base font-medium transition-colors duration-200"
                style={{
                  color: "#888888",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#F5F5F5")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#888888")
                }
              >
                Ver cómo funciona
                <ArrowDown size={16} />
              </button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              {...fadeUp(0.52)}
              className="flex gap-0 mt-4"
              style={{
                borderTop: "1px solid #1E1E1E",
                paddingTop: "1.5rem",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className="flex-1 flex flex-col gap-1 pr-6"
                  style={{
                    borderRight: i < stats.length - 1 ? "1px solid #1E1E1E" : "none",
                    paddingLeft: i > 0 ? "1.5rem" : 0,
                  }}
                >
                  <span
                    className="text-2xl font-bold stat-num"
                    style={{
                      color: "#BEFF00",
                      fontFamily: "var(--font-jetbrains-mono)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs leading-snug"
                    style={{
                      color: "#666666",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: chat widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="w-full max-w-sm mx-auto lg:max-w-none"
          >
            <ChatWidget compact />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "#333333" }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
