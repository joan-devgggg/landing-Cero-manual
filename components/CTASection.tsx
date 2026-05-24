"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="cta" className="py-4 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden px-8 py-20 text-center"
          style={{ backgroundColor: "#BEFF00" }}
        >
          {/* Subtle texture / noise on the green */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.08) 25%, rgba(0,0,0,0.08) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.08) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.08) 25%, rgba(0,0,0,0.08) 26%, transparent 27%)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne)", color: "#0A0A0A" }}
            >
              ¿Lista para que tu clínica
              <br />
              trabaje mientras tú duermes?
            </h2>

            <p
              className="text-base md:text-lg mb-10 max-w-md mx-auto"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)", opacity: 0.7 }}
            >
              Llamada de 20 minutos. Sin compromiso.
              <br />
              Te explicamos exactamente cómo lo implementaríamos en tu caso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/34644786952?text=Hola%2C%20quiero%20agendar%20una%20llamada%20de%2020%20minutos%20con%20Cero%20Manual"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-base font-bold transition-all duration-200"
                style={{
                  backgroundColor: "#0A0A0A",
                  color: "#BEFF00",
                  fontFamily: "var(--font-syne)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#111111"
                  e.currentTarget.style.color = "#FFFFFF"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0A0A0A"
                  e.currentTarget.style.color = "#BEFF00"
                }}
              >
                Agendar llamada gratuita →
              </a>
            </div>

            <p
              className="mt-6 text-sm"
              style={{ color: "#0A0A0A", fontFamily: "var(--font-dm-sans)", opacity: 0.5 }}
            >
              +34 644 786 952 · @cero.manual
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
