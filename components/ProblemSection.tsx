"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X } from "lucide-react"

const problems = [
  "Recibes consultas a las 11 de la noche y no puedes responder",
  "Tienes un 15-20% de no-shows cada semana",
  "Los leads de Meta se enfrían porque tardas en contestar",
  "Tu equipo no puede estar en todo a la vez",
  "Tienes pacientes inactivos que no han vuelto en meses",
]

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="problemas" className="py-28 px-6" ref={ref} style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px mb-28" style={{ backgroundColor: "#E0DBD4" }} />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs font-medium mb-4 tracking-widest uppercase"
            style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
          >
            El problema
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
          >
            Lo que está pasando en
            <br />
            tu clínica <span style={{ fontStyle: "italic", color: "#7D9B76" }}>ahora mismo</span>
          </h2>
        </motion.div>

        {/* Problem items */}
        <div className="flex flex-col gap-3 mb-12">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0DBD4",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "rgba(217,100,100,0.1)" }}
              >
                <X size={12} color="#D96464" strokeWidth={2.5} />
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
              >
                {p}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center py-8 px-6 rounded-2xl"
          style={{ backgroundColor: "#EDE9E3" }}
        >
          <p
            className="text-base md:text-lg"
            style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
          >
            No es un problema de tu clínica.
            {" "}
            <strong style={{ color: "#1A1A1A" }}>Es un problema de sistemas.</strong>
            {" "}
            <span style={{ color: "#7D9B76", fontWeight: 600 }}>Y tiene solución.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
