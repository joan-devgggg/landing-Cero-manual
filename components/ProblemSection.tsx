"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X } from "lucide-react"

const problems = [
  "Recibes consultas por WhatsApp a las 11 de la noche y no puedes responder",
  "Tienes un 15-20% de no-shows cada semana. Agenda vacía, tiempo perdido",
  "Los leads de tus anuncios en Meta se enfrían porque tardas en contestar",
  "Tu recepcionista no puede estar en todo a la vez",
  "Tienes cientos de pacientes inactivos que no han vuelto en meses",
]

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="problemas" className="py-28 px-6" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs font-mono mb-4 tracking-widest uppercase"
            style={{ color: "#BEFF00", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            El problema
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Lo que está pasando en
            <br />
            <span style={{ color: "#F5F5F5" }}>tu clínica ahora mismo</span>
          </h2>
        </motion.div>

        {/* Problem cards */}
        <div className="flex flex-col gap-3">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <div
                className="flex items-start gap-4 p-5 rounded-xl group transition-all duration-200"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #1E1E1E",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#2A2A2A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1E1E1E")
                }
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "rgba(255,60,60,0.12)" }}
                >
                  <X size={12} color="#FF3C3C" strokeWidth={2.5} />
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "#C0C0C0",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {p}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p
            className="text-lg"
            style={{ color: "#666666", fontFamily: "var(--font-dm-sans)" }}
          >
            No es un problema de tu clínica.
          </p>
          <p
            className="text-lg font-semibold mt-1"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-dm-sans)" }}
          >
            Es un problema de sistemas.{" "}
            <span style={{ color: "#BEFF00" }}>Y tiene solución.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
