"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// PLACEHOLDER testimonials — replace with real client data when available
const testimonials = [
  {
    quote:
      "Antes perdíamos leads todas las noches porque nadie podía responder. Ahora el bot agenda directamente y nosotros revisamos el calendario por la mañana con las citas ya confirmadas.",
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
  {
    quote:
      "Mis pacientes me dicen que el trato es muy bueno por WhatsApp. Lo que no saben es que a las 11 de la noche soy yo durmiendo y es el bot.",
    author: "Dra. P.R.",
    role: "Clínica estética · Barcelona",
    initials: "PR",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">
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
            Clientes
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Clínicas que ya trabajan
            <br />
            <span style={{ color: "#BEFF00" }}>con Cero Manual</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
            >
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl h-full"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #1E1E1E",
                }}
              >
                {/* Quote marks */}
                <div
                  className="text-4xl leading-none font-bold"
                  style={{ color: "#BEFF00", fontFamily: "var(--font-syne)", opacity: 0.4 }}
                >
                  "
                </div>

                <p
                  className="text-base leading-relaxed flex-1"
                  style={{ color: "#C0C0C0", fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid #1E1E1E" }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid #2A2A2A",
                      color: "#BEFF00",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#F5F5F5", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.author}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#555555", fontFamily: "var(--font-dm-sans)" }}
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
