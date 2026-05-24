"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Megaphone, Zap, CheckCircle, CalendarCheck } from "lucide-react"

const steps = [
  {
    icon: Megaphone,
    num: "01",
    title: "Lead llega",
    desc: "Anuncio en Meta, DM de Instagram o búsqueda en Google. El interés existe, solo necesita respuesta.",
  },
  {
    icon: Zap,
    num: "02",
    title: "IA responde",
    desc: "En segundos. Responde preguntas sobre el tratamiento, precio y disponibilidad con el tono de tu clínica.",
  },
  {
    icon: CheckCircle,
    num: "03",
    title: "Lead califica",
    desc: "El bot detecta si el lead es válido según tus criterios. Si no cumple, lo guía. Si cumple, avanza.",
  },
  {
    icon: CalendarCheck,
    num: "04",
    title: "Cita agendada",
    desc: "Directo en tu calendario. Tú recibes una notificación. El lead recibe confirmación automática.",
  },
]

export default function TimelineSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="como-funciona" className="py-28 px-6" ref={ref}>
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
            Cómo funciona
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            De lead a cita
            <br />
            <span style={{ color: "#BEFF00" }}>en menos de 5 minutos</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[19px] top-6 bottom-6 w-px origin-top"
            style={{ backgroundColor: "#1E1E1E" }}
          />

          {/* Animated neon line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[19px] top-6 w-px origin-top"
            style={{
              height: "calc(100% - 3rem)",
              background:
                "linear-gradient(180deg, #BEFF00 0%, rgba(190,255,0,0.1) 100%)",
            }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="flex gap-8 pb-12 last:pb-0"
                >
                  {/* Circle node */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
                      style={{
                        backgroundColor: "#0A0A0A",
                        border: "1.5px solid #BEFF00",
                        boxShadow: "0 0 16px rgba(190,255,0,0.25)",
                      }}
                    >
                      <Icon size={16} color="#BEFF00" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1.5 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-mono"
                        style={{
                          color: "#BEFF00",
                          fontFamily: "var(--font-jetbrains-mono)",
                          opacity: 0.6,
                        }}
                      >
                        {step.num}
                      </span>
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: "var(--font-syne)", color: "#F5F5F5" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: "#777777",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 p-6 rounded-2xl"
          style={{
            backgroundColor: "#111111",
            border: "1px solid #1E1E1E",
          }}
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: "#888888", fontFamily: "var(--font-dm-sans)" }}
          >
            Sin formularios. Sin esperas. Sin leads perdidos.{" "}
            <span style={{ color: "#F5F5F5" }}>
              Exactamente lo mismo que haría tu mejor recepcionista, pero a las
              3 de la mañana.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
