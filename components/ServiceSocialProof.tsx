"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export interface ServiceTestimonialPlaceholder {
  placeholder: string
  role: string
  initials: string
}

export interface ServiceSocialProofProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  /** Línea de métrica destacada que sustenta la prueba social mientras llegan testimonios reales. */
  proofMetric: { value: string; desc: string; source: string }
  testimonials: ServiceTestimonialPlaceholder[]
}

export default function ServiceSocialProof({
  eyebrow = "Clientes",
  title,
  titleAccent,
  proofMetric,
  testimonials,
}: ServiceSocialProofProps) {
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
          className="mb-12 md:mb-16"
        >
          <p
            className="text-xs font-medium mb-4 tracking-widest uppercase"
            style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
          >
            {eyebrow}
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span style={{ fontStyle: "italic", color: "#7D9B76" }}>{titleAccent}</span>
              </>
            )}
          </h2>
        </motion.div>

        {/* Featured proof metric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-7 md:p-9 rounded-2xl mb-10"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DBD4" }}
        >
          <span
            className="text-5xl md:text-6xl font-semibold leading-none flex-shrink-0"
            style={{ fontFamily: "var(--font-playfair)", color: "#7D9B76" }}
          >
            {proofMetric.value}
          </span>
          <div>
            <p
              className="text-base md:text-lg leading-relaxed mb-2"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              {proofMetric.desc}
            </p>
            <p className="text-sm" style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}>
              {proofMetric.source}
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
            >
              <div
                className="flex flex-col gap-5 p-7 rounded-2xl h-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px dashed #E0DBD4",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="text-4xl leading-none font-semibold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#7D9B76", opacity: 0.4 }}
                >
                  &quot;
                </div>

                <p
                  className="text-base leading-relaxed flex-1 italic"
                  style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.placeholder}
                </p>

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
                      style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
                    >
                      [Testimonio real próximamente]
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#C0BAB3", fontFamily: "var(--font-dm-sans)" }}
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
