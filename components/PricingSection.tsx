"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Pack Esencial",
    tagline: "Tu clínica siempre responde",
    features: ["Chatbot WhatsApp", "Recordatorios + Seguimiento + Reseñas"],
    setupOriginal: "1.700 €",
    setup: "1.500 €",
    monthly: "299 €",
    cta: "Empezar con Esencial",
    highlight: false,
  },
  {
    name: "Pack Profesional",
    tagline: "Tu clínica en automático",
    features: [
      "Chatbot WhatsApp",
      "Recordatorios + Seguimiento + Reseñas",
      "Panel de Control",
    ],
    setupOriginal: "3.200 €",
    setup: "2.500 €",
    monthly: "380 €",
    cta: "Empezar con Profesional",
    highlight: true,
    badge: "MÁS POPULAR",
  },
  {
    name: "Pack Total",
    tagline: "Tu clínica trabajando sola",
    features: [
      "Chatbot WhatsApp",
      "Recordatorios + Seguimiento + Reseñas",
      "Panel de Control",
      "DMs Automáticos en Instagram",
    ],
    setupOriginal: "4.000 €",
    setup: "3.200 €",
    monthly: "449 €",
    cta: "Empezar con Total",
    highlight: false,
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="precios" className="py-28 px-6" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p
            className="text-xs font-mono mb-4 tracking-widest uppercase"
            style={{ color: "#BEFF00", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Precios
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Sin sorpresas.
            <br />
            <span style={{ color: "#BEFF00" }}>Sin letra pequeña.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base mb-16"
          style={{ color: "#666666", fontFamily: "var(--font-dm-sans)" }}
        >
          Somos de las pocas agencias que publican precios. Porque creemos en
          la transparencia.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="relative flex flex-col"
            >
              <div
                className="relative flex flex-col gap-6 p-6 rounded-2xl h-full"
                style={{
                  backgroundColor: plan.highlight ? "#141414" : "#111111",
                  border: plan.highlight
                    ? "1px solid rgba(190,255,0,0.3)"
                    : "1px solid #1E1E1E",
                  boxShadow: plan.highlight
                    ? "0 0 40px rgba(190,255,0,0.08)"
                    : "none",
                  transform: plan.highlight ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="text-xs font-mono font-bold px-4 py-1.5 rounded-full"
                      style={{
                        backgroundColor: "#BEFF00",
                        color: "#0A0A0A",
                        fontFamily: "var(--font-jetbrains-mono)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-syne)", color: "#F5F5F5" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "#666666",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div
                  className="py-4"
                  style={{ borderTop: "1px solid #1E1E1E", borderBottom: "1px solid #1E1E1E" }}
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: plan.highlight ? "#BEFF00" : "#F5F5F5",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {plan.monthly}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: "#555555",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      /mes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm line-through"
                      style={{
                        color: "#444444",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      {plan.setupOriginal}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "#888888",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      setup → {plan.setup}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                        style={{
                          backgroundColor: plan.highlight
                            ? "rgba(190,255,0,0.15)"
                            : "#1A1A1A",
                        }}
                      >
                        <Check
                          size={10}
                          color={plan.highlight ? "#BEFF00" : "#666666"}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className="text-sm leading-snug"
                        style={{
                          color: "#C0C0C0",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/34644786952?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Cero%20Manual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 text-center text-sm font-bold rounded-xl transition-all duration-200"
                  style={
                    plan.highlight
                      ? {
                          backgroundColor: "#BEFF00",
                          color: "#0A0A0A",
                          fontFamily: "var(--font-syne)",
                          boxShadow: "0 0 20px rgba(190,255,0,0.2)",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: "#F5F5F5",
                          border: "1px solid #2A2A2A",
                          fontFamily: "var(--font-syne)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (plan.highlight) {
                      e.currentTarget.style.boxShadow =
                        "0 0 30px rgba(190,255,0,0.35)"
                    } else {
                      e.currentTarget.style.borderColor = "#BEFF00"
                      e.currentTarget.style.color = "#BEFF00"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlight) {
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(190,255,0,0.2)"
                    } else {
                      e.currentTarget.style.borderColor = "#2A2A2A"
                      e.currentTarget.style.color = "#F5F5F5"
                    }
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center text-sm"
          style={{ color: "#555555", fontFamily: "var(--font-dm-sans)" }}
        >
          ¿Tienes una necesidad diferente? Desarrollamos automatizaciones a
          medida. &nbsp;
          <span style={{ color: "#888888" }}>
            Sin permanencia. Cancela con 30 días de aviso.
          </span>
        </motion.p>
      </div>
    </section>
  )
}
