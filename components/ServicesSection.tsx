"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, LayoutDashboard, Bell, Smartphone, Globe } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    name: "Agente WhatsApp 24/7",
    desc: "Responde, cualifica y agenda automáticamente. Las 24 horas. Habla con el tono de tu clínica, filtra leads y manda la cita directo al calendario.",
    benefit: "Tu mejor recepcionista, sin horario ni descanso",
    badge: "Más solicitado",
    highlight: true,
  },
  {
    icon: LayoutDashboard,
    name: "Panel de Control",
    desc: "Gestiona todo desde un solo lugar. Activa o desactiva el agente cuando quieras tomar el hilo tú directamente.",
    benefit: "Control total sin complejidad técnica",
    highlight: false,
  },
  {
    icon: Bell,
    name: "Recordatorios y Seguimiento",
    desc: "Recordatorios automáticos 24h y 2h antes de cada cita. Reactiva contactos inactivos. Pide reseñas en el momento exacto.",
    benefit: "Hasta −40% de no-shows desde el primer mes",
    highlight: false,
  },
  {
    icon: Smartphone,
    name: "DMs Automáticos Instagram",
    desc: "Responde mensajes de Instagram al instante. Detecta el tratamiento y lleva al lead hacia la reserva sin que nadie esté pendiente.",
    benefit: "Ningún mensaje sin respuesta",
    highlight: false,
  },
  {
    icon: Globe,
    name: "Agente FAQ Web",
    desc: "Widget de chat en tu web que responde preguntas sobre tratamientos y convierte visitas frías en leads calientes.",
    benefit: "Más leads del tráfico que ya tienes",
    highlight: false,
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="servicios" className="py-28 px-6" ref={ref} style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-6xl mx-auto">
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
            Servicios
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
          >
            Lo que hace Cero Manual
            <br />
            <span style={{ fontStyle: "italic", color: "#7D9B76" }}>por tu clínica</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  className="relative flex flex-col gap-5 p-7 rounded-2xl h-full transition-all duration-200"
                  style={{
                    backgroundColor: svc.highlight ? "#FFFFFF" : "#FFFFFF",
                    border: svc.highlight ? "1.5px solid #7D9B76" : "1px solid #E0DBD4",
                    boxShadow: svc.highlight
                      ? "0 4px 24px rgba(125,155,118,0.15)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = svc.highlight
                      ? "0 8px 40px rgba(125,155,118,0.2)"
                      : "0 4px 20px rgba(0,0,0,0.08)"
                    e.currentTarget.style.borderColor = svc.highlight ? "#6A8564" : "#C8C2BA"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = svc.highlight
                      ? "0 4px 24px rgba(125,155,118,0.15)"
                      : "0 2px 8px rgba(0,0,0,0.04)"
                    e.currentTarget.style.borderColor = svc.highlight ? "#7D9B76" : "#E0DBD4"
                  }}
                >
                  {/* Badge */}
                  {svc.badge && (
                    <div className="absolute top-5 right-5">
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "#7D9B76",
                          color: "#ffffff",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {svc.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: svc.highlight ? "rgba(125,155,118,0.12)" : "#F5F2EE",
                        border: `1px solid ${svc.highlight ? "rgba(125,155,118,0.3)" : "#E0DBD4"}`,
                      }}
                    >
                      <Icon size={20} color={svc.highlight ? "#7D9B76" : "#8A8580"} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                      >
                        {svc.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Benefit */}
                  <div
                    className="flex items-center gap-2 pt-4 mt-auto"
                    style={{ borderTop: "1px solid #E0DBD4" }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#7D9B76" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {svc.benefit}
                    </span>
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
