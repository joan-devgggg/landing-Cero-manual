"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { serviceIconMap, type ServiceIconName } from "@/lib/service-icons"

export interface ServiceBenefit {
  icon: ServiceIconName
  title: string
  desc: string
}

export interface ServiceBenefitsProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  benefits: ServiceBenefit[]
}

export default function ServiceBenefits({
  eyebrow = "Beneficios",
  title,
  titleAccent,
  benefits,
}: ServiceBenefitsProps) {
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
          className="mb-10 md:mb-16"
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((b, i) => {
            const Icon = serviceIconMap[b.icon]
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <div
                  className="flex flex-col gap-3 p-5 rounded-2xl h-full transition-all duration-200"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E0DBD4",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"
                    e.currentTarget.style.borderColor = "#C8C2BA"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"
                    e.currentTarget.style.borderColor = "#E0DBD4"
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "#F5F2EE",
                      border: "1.5px solid #E0DBD4",
                    }}
                  >
                    <Icon size={20} color="#8A8580" strokeWidth={1.75} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="text-xl md:text-2xl font-bold leading-snug"
                      style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                    >
                      {b.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {b.desc}
                    </p>
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
