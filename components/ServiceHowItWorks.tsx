"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { serviceIconMap, type ServiceIconName } from "@/lib/service-icons"

export interface ServiceStep {
  icon: ServiceIconName
  num: string
  title: string
  desc: string
}

export interface ServiceHowItWorksProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  steps: ServiceStep[]
  closing: React.ReactNode
}

export default function ServiceHowItWorks({
  eyebrow = "Cómo funciona",
  title,
  titleAccent,
  steps,
  closing,
}: ServiceHowItWorksProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="como-funciona" className="py-14 md:py-28 px-6" ref={ref} style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-4xl mx-auto">
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-5 top-6 bottom-6 w-px origin-top"
            style={{ backgroundColor: "#E0DBD4" }}
          />
          {/* Animated sage line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-5 top-6 w-px origin-top"
            style={{
              height: "calc(100% - 3rem)",
              background: "linear-gradient(180deg, #7D9B76 0%, rgba(125,155,118,0.1) 100%)",
            }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = serviceIconMap[step.icon]
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
                        backgroundColor: "#FFFFFF",
                        border: "1.5px solid #7D9B76",
                        boxShadow: "0 0 0 4px rgba(125,155,118,0.12)",
                      }}
                    >
                      <Icon size={16} color="#7D9B76" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1.5 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-medium"
                        style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)", opacity: 0.7 }}
                      >
                        {step.num}
                      </span>
                      <h3
                        className="text-xl font-semibold"
                        style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 p-7 rounded-2xl"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DBD4" }}
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
          >
            {closing}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
