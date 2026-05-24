"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function UrgencySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono mb-8 tracking-widest uppercase"
          style={{ color: "#BEFF00", fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Por qué ahora
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-16"
          style={{ fontFamily: "var(--font-syne)", color: "#F5F5F5" }}
        >
          Cada minuto que tardas en responder,
          <br />
          <span style={{ color: "#888888" }}>pierdes el lead</span>
        </motion.h2>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative inline-block mb-12"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(190,255,0,0.08) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            className="relative px-12 py-10 rounded-3xl"
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(190,255,0,0.15)",
            }}
          >
            <div
              className="text-8xl md:text-9xl font-bold leading-none mb-2"
              style={{
                fontFamily: "var(--font-syne)",
                color: "#BEFF00",
                letterSpacing: "-0.04em",
                textShadow: "0 0 60px rgba(190,255,0,0.3)",
              }}
            >
              80%
            </div>
            <p
              className="text-base md:text-lg"
              style={{ color: "#888888", fontFamily: "var(--font-dm-sans)" }}
            >
              de probabilidad de perder un lead
              <br />
              si tardas más de 5 minutos en responder.
            </p>
            <p
              className="text-xs mt-3"
              style={{
                color: "#444444",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              — MIT Lead Response Management Study
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base mb-2"
          style={{ color: "#666666", fontFamily: "var(--font-dm-sans)" }}
        >
          Tu competencia ya está invirtiendo en Meta Ads.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="text-base mb-10"
          style={{ color: "#888888", fontFamily: "var(--font-dm-sans)" }}
        >
          Los leads llegan.{" "}
          <span style={{ color: "#F5F5F5" }}>
            La pregunta es quién los recoge primero.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.56 }}
        >
          <a
            href="https://wa.me/34644786952?text=Hola%2C%20quiero%20agendar%20una%20llamada%20con%20Cero%20Manual"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full text-base font-bold transition-all duration-200"
            style={{
              backgroundColor: "#BEFF00",
              color: "#0A0A0A",
              fontFamily: "var(--font-syne)",
              boxShadow: "0 0 30px rgba(190,255,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 50px rgba(190,255,0,0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(190,255,0,0.2)"
            }}
          >
            Agendar llamada gratuita de 20 minutos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
