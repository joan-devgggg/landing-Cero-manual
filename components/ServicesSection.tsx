"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, LayoutDashboard, Bell, Smartphone, Globe } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    name: "Chatbot WhatsApp",
    desc: "Atiende, califica y agenda automáticamente — las 24h. Responde preguntas de tratamientos, filtra leads y manda la cita directo al calendario. Sin que muevas un dedo.",
    setup: "desde 1.200 €",
    monthly: "250 €/mes",
    badge: "MÁS VENDIDO",
    highlight: true,
  },
  {
    icon: LayoutDashboard,
    name: "Panel de Control",
    desc: "Gestiona todo desde un solo lugar. Habla con clientes, edita citas, activa/desactiva el bot cuando quieras tomar el hilo.",
    setup: "desde 1.500 €",
    monthly: "200 €/mes",
    badge: null,
    highlight: false,
  },
  {
    icon: Bell,
    name: "Recordatorios y Seguimiento",
    desc: "Reduce no-shows con recordatorios automáticos 24h y 2h antes. Reactiva pacientes inactivos. Pide reseñas después de cada cita.",
    setup: "500 €",
    monthly: "100 €/mes",
    badge: null,
    highlight: false,
  },
  {
    icon: Smartphone,
    name: "DMs Automáticos en Instagram",
    desc: "Responde mensajes de Instagram al instante. Detecta el tratamiento y lleva al lead hacia la reserva sin que nadie esté pendiente.",
    setup: "800 €",
    monthly: "150 €/mes",
    badge: null,
    highlight: false,
  },
  {
    icon: Globe,
    name: "Agente FAQs Web",
    desc: "Widget de chat en tu web que responde preguntas sobre precios y tratamientos. Convierte visitas frías en leads calientes.",
    setup: "600 €",
    monthly: "120 €/mes",
    badge: null,
    highlight: false,
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="servicios" className="py-28 px-6" ref={ref}>
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
            Servicios
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Lo que hace Cero Manual
            <br />
            <span style={{ color: "#BEFF00" }}>por tu clínica</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <div
                  className="relative flex flex-col gap-4 p-6 rounded-2xl h-full group transition-all duration-200"
                  style={{
                    backgroundColor: "#111111",
                    border: svc.highlight
                      ? "1px solid rgba(190,255,0,0.25)"
                      : "1px solid #1E1E1E",
                    boxShadow: svc.highlight
                      ? "0 0 30px rgba(190,255,0,0.06)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = svc.highlight
                      ? "rgba(190,255,0,0.4)"
                      : "#2A2A2A"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = svc.highlight
                      ? "rgba(190,255,0,0.25)"
                      : "#1E1E1E"
                  }}
                >
                  {/* Badge */}
                  {svc.badge && (
                    <div className="absolute top-4 right-4">
                      <span
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: "#BEFF00",
                          color: "#0A0A0A",
                          fontFamily: "var(--font-jetbrains-mono)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {svc.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: svc.highlight
                          ? "rgba(190,255,0,0.12)"
                          : "#1A1A1A",
                        border: svc.highlight
                          ? "1px solid rgba(190,255,0,0.2)"
                          : "1px solid #2A2A2A",
                      }}
                    >
                      <Icon
                        size={18}
                        color={svc.highlight ? "#BEFF00" : "#888888"}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{
                          fontFamily: "var(--font-syne)",
                          color: "#F5F5F5",
                        }}
                      >
                        {svc.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "#888888",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div
                    className="flex items-center gap-4 pt-4 mt-auto"
                    style={{ borderTop: "1px solid #1E1E1E" }}
                  >
                    <div>
                      <span
                        className="text-xs"
                        style={{
                          color: "#555555",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        Setup{" "}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: "#C0C0C0",
                          fontFamily: "var(--font-jetbrains-mono)",
                        }}
                      >
                        {svc.setup}
                      </span>
                    </div>
                    <span style={{ color: "#2A2A2A" }}>·</span>
                    <div>
                      <span
                        className="text-sm font-bold"
                        style={{
                          color: svc.highlight ? "#BEFF00" : "#F5F5F5",
                          fontFamily: "var(--font-jetbrains-mono)",
                        }}
                      >
                        {svc.monthly}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
