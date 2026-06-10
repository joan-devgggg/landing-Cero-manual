"use client"

import { Mic, PhoneOff } from "lucide-react"
import { motion } from "framer-motion"
import { useVapi } from "@/lib/hooks/useVapi"

export default function VoiceAgentCard() {
  const { status, start, stop } = useVapi()

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden h-full"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0DBD4",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ borderBottom: "1px solid #E0DBD4", backgroundColor: "#FAFAF8" }}
      >
        <div
          className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
          style={{ backgroundColor: "#7D9B76", color: "#ffffff" }}
        >
          <Mic size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold truncate"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#1A1A1A" }}
          >
            Agente de voz
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "#7D9B76" }} />
            <span className="text-xs" style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}>
              Disponible ahora
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10 gap-5">
        {status === "active" ? (
          <>
            <div className="relative flex items-center justify-center" style={{ width: 96, height: 96 }}>
              <motion.span
                className="absolute rounded-full"
                style={{ width: 96, height: 96, backgroundColor: "#7D9B76", opacity: 0.2 }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0, 0.25] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute rounded-full"
                style={{ width: 64, height: 64, backgroundColor: "#7D9B76" }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="text-sm" style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}>
              Llamada en curso…
            </p>
            <button
              onClick={stop}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200"
              style={{ backgroundColor: "#1A1A1A", color: "#ffffff", fontFamily: "var(--font-dm-sans)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3A3A3A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A1A1A")}
            >
              <PhoneOff size={16} />
              Colgar
            </button>
          </>
        ) : (
          <>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
            >
              Habla con el agente de voz como lo haría un paciente. Pregúntale por
              tratamientos, precios o disponibilidad.
            </p>
            <button
              onClick={start}
              disabled={status === "connecting"}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 disabled:opacity-70"
              style={{ backgroundColor: "#7D9B76", color: "#ffffff", fontFamily: "var(--font-dm-sans)" }}
              onMouseEnter={(e) => {
                if (status !== "connecting") e.currentTarget.style.backgroundColor = "#6A8564"
              }}
              onMouseLeave={(e) => {
                if (status !== "connecting") e.currentTarget.style.backgroundColor = "#7D9B76"
              }}
            >
              <Mic size={16} />
              {status === "connecting" ? "Conectando…" : "Probar agente de voz"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
