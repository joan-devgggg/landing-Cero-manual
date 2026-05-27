"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie_consent", "all")
    window.dispatchEvent(new Event("cookieConsent"))
    setVisible(false)
  }

  const essential = () => {
    localStorage.setItem("cookie_consent", "essential")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div
            className="p-5 rounded-2xl"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E0DBD4",
              boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Usamos cookies propias y de terceros (Meta Pixel) para analizar el tráfico y mejorar la experiencia.
              Puedes aceptar todas o usar solo las esenciales.{" "}
              <a
                href="/privacidad"
                className="underline"
                style={{ color: "#7D9B76" }}
              >
                Más info
              </a>
            </p>
            <div className="flex gap-3">
              <button
                onClick={essential}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #E0DBD4",
                  color: "#8A8580",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8C2BA")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E0DBD4")}
              >
                Solo esenciales
              </button>
              <button
                onClick={accept}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                style={{
                  backgroundColor: "#7D9B76",
                  color: "#ffffff",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6A8564")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7D9B76")}
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
