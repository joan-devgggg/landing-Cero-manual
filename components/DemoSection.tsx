"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ChatWidget from "./ChatWidget"

export default function DemoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="demo" className="py-28 px-6" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p
            className="text-xs font-mono mb-4 tracking-widest uppercase"
            style={{ color: "#BEFF00", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Demo interactiva
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Prueba cómo hablaría
            <br />
            <span style={{ color: "#BEFF00" }}>el agente de tu clínica</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-base leading-relaxed mb-12"
          style={{ color: "#666666", fontFamily: "var(--font-dm-sans)" }}
        >
          Este es un ejemplo real de cómo funciona. Pregúntale por tratamientos,
          precios, disponibilidad o pide una cita — responde como lo haría en tu
          clínica.
        </motion.p>

        {/* Chat */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChatWidget />
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p
            className="text-sm mb-4"
            style={{ color: "#555555", fontFamily: "var(--font-dm-sans)" }}
          >
            Este agente está configurado para Cero Manual. El tuyo hablaría con
            la voz de tu clínica, tus tratamientos y tus precios.
          </p>
          <a
            href="https://wa.me/34644786952?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Cero%20Manual"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
            style={{
              color: "#BEFF00",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#CEFF33")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "#BEFF00")}
          >
            Quiero uno para mi clínica →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
