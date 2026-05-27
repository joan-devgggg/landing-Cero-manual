"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    quote:
      "Mis clientes me dicen que el trato es muy bueno por WhatsApp. Lo que no saben es que a las 11 de la noche soy yo durmiendo y es el agente.",
    author: "Dra. P.R.",
    role: "Clínica estética · Barcelona",
    initials: "PR",
  },
  {
    quote:
      "Antes perdíamos leads todas las noches porque nadie podía responder. Ahora el agente agenda directamente y nosotros revisamos el calendario por la mañana con las citas ya confirmadas.",
    author: "Dra. M.G.",
    role: "Clínica de medicina estética · Madrid",
    initials: "MG",
  },
  {
    quote:
      "Los recordatorios automáticos nos han reducido los no-shows casi a cero. Solo con eso ya se paga el servicio en el primer mes.",
    author: "Directora",
    role: "Centro estético · Valencia",
    initials: "CE",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="py-14 md:py-28 px-6" ref={ref} style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px mb-10 md:mb-20" style={{ backgroundColor: "#E0DBD4" }} />

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
            Clientes
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
          >
            Clínicas que ya trabajan
            <br />
            <span style={{ fontStyle: "italic", color: "#7D9B76" }}>con Cero Manual</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
            >
              <div
                className="flex flex-col gap-5 p-7 rounded-2xl h-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0DBD4",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-4xl leading-none font-semibold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#7D9B76", opacity: 0.4 }}
                >
                  "
                </div>

                <p
                  className="text-base leading-relaxed flex-1"
                  style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid #E0DBD4" }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(125,155,118,0.12)",
                      border: "1px solid rgba(125,155,118,0.25)",
                      color: "#7D9B76",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.author}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
