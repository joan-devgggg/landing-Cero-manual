"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ResultsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="resultados" className="py-14 md:py-28 px-6" ref={ref} style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px mb-10 md:mb-20" style={{ backgroundColor: "#E0DBD4" }} />

        <div className="text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium mb-8 tracking-widest uppercase"
            style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
          >
            Datos que importan
          </motion.p>

          {/* Big stat */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8"
          >
            <span
              className="text-[120px] md:text-[180px] font-semibold leading-none"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A", display: "block" }}
            >
              80%
            </span>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p
              className="text-xl md:text-2xl font-semibold mb-4 max-w-2xl mx-auto leading-snug"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              de probabilidad de perder un lead si tardas más de 5 minutos en responder
            </p>
            <p
              className="text-sm mb-12"
              style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
            >
              Fuente: MIT Lead Response Management Study
            </p>
          </motion.div>

          {/* Context */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto p-8 rounded-2xl text-left mb-20"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DBD4" }}
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Tu competencia ya está invirtiendo en Meta Ads. Los leads llegan.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                La pregunta es quién los recoge primero.
              </strong>
            </p>
          </motion.div>

          {/* Second stat — ROI español */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mb-6"
          >
            <span
              className="text-[80px] md:text-[140px] font-semibold leading-none"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A", display: "block" }}
            >
              3.000 €
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p
              className="text-xl md:text-2xl font-semibold mb-4 max-w-2xl mx-auto leading-snug"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              es el LTV medio de un paciente recurrente en clínica estética en España
            </p>
            <p
              className="text-base mb-4 max-w-xl mx-auto"
              style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
            >
              Recuperar 3 pacientes inactivos al mes con automatización = 9.000 €/mes adicionales.
            </p>
            <p
              className="text-sm"
              style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
            >
              Fuente: SEME (Sociedad Española de Medicina Estética)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
