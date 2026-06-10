"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const NO_SHOW_RATE = 0.15

export default function NoShowsCalculator() {
  const [citasDia, setCitasDia] = useState(20)
  const [ticketMedio, setTicketMedio] = useState<number | "">(100)
  const [diasLaborables, setDiasLaborables] = useState<number | "">(22)

  const noShowsMes = Math.round(citasDia * (Number(diasLaborables) || 0) * NO_SHOW_RATE)
  const perdidaMensual = noShowsMes * (Number(ticketMedio) || 0)
  const perdidaAnual = perdidaMensual * 12

  const formatEuro = (value: number) =>
    value.toLocaleString("es-ES", { maximumFractionDigits: 0 }) + " €"

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
      {/* Inputs */}
      <div
        className="rounded-2xl p-6 md:p-8 flex flex-col gap-8"
        style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DBD4" }}
      >
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <label
              htmlFor="citasDia"
              className="text-sm font-medium"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
            >
              Citas al día
            </label>
            <span
              className="text-lg font-semibold"
              style={{ color: "#7D9B76", fontFamily: "var(--font-playfair)" }}
            >
              {citasDia}
            </span>
          </div>
          <input
            id="citasDia"
            type="range"
            min={5}
            max={50}
            step={1}
            value={citasDia}
            onChange={(e) => setCitasDia(Number(e.target.value))}
            className="w-full accent-[#7D9B76]"
          />
          <div
            className="flex justify-between text-xs mt-1"
            style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
          >
            <span>5</span>
            <span>50</span>
          </div>
        </div>

        <div>
          <label
            htmlFor="ticketMedio"
            className="block text-sm font-medium mb-3"
            style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
          >
            Ticket medio por cita (€)
          </label>
          <input
            id="ticketMedio"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={ticketMedio}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, "")
              setTicketMedio(raw === "" ? "" : Number(raw))
            }}
            className="w-full rounded-xl px-4 py-3 text-base outline-none transition-colors duration-200"
            style={{
              border: "1px solid #E0DBD4",
              fontFamily: "var(--font-dm-sans)",
              color: "#1A1A1A",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#7D9B76")}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#E0DBD4"
              setTicketMedio((prev) => Math.min(500, Math.max(50, Number(prev) || 50)))
            }}
          />
        </div>

        <div>
          <label
            htmlFor="diasLaborables"
            className="block text-sm font-medium mb-3"
            style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
          >
            Días de trabajo al mes
          </label>
          <input
            id="diasLaborables"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={diasLaborables}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, "")
              setDiasLaborables(raw === "" ? "" : Number(raw))
            }}
            className="w-full rounded-xl px-4 py-3 text-base outline-none transition-colors duration-200"
            style={{
              border: "1px solid #E0DBD4",
              fontFamily: "var(--font-dm-sans)",
              color: "#1A1A1A",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#7D9B76")}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#E0DBD4"
              setDiasLaborables((prev) => Math.min(31, Math.max(1, Number(prev) || 1)))
            }}
          />
        </div>

        <p
          className="text-xs leading-relaxed"
          style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
        >
          Calculamos los no-shows estimados aplicando una tasa media del sector
          del 15% sobre el total de citas mensuales.
        </p>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "#B5B0AA", fontFamily: "var(--font-dm-sans)" }}
        >
          Fuente: tasa media de no-shows del 12-19% en clínicas privadas españolas
          según datos de Klinikare y Elsevier España (2024). Usamos el 15% como
          estimación conservadora.
        </p>
      </div>

      {/* Resultados */}
      <div
        className="rounded-2xl p-6 md:p-8 flex flex-col gap-6"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "#9BB594", fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
          >
            No-shows estimados al mes
          </p>
          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-playfair)" }}
          >
            {noShowsMes} citas
          </p>
        </div>

        <div className="h-px" style={{ backgroundColor: "#3A3A3A" }} />

        <div>
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "#9BB594", fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
          >
            Pérdida mensual estimada
          </p>
          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: "#7D9B76", fontFamily: "var(--font-playfair)" }}
          >
            {formatEuro(perdidaMensual)}
          </p>
        </div>

        <div className="h-px" style={{ backgroundColor: "#3A3A3A" }} />

        <div>
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "#9BB594", fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
          >
            Pérdida anual estimada
          </p>
          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: "#7D9B76", fontFamily: "var(--font-playfair)" }}
          >
            {formatEuro(perdidaAnual)}
          </p>
        </div>

        <div className="mt-2 pt-6" style={{ borderTop: "1px solid #3A3A3A" }}>
          <p
            className="text-sm md:text-base mb-4 leading-relaxed"
            style={{ color: "#F5F2EE", fontFamily: "var(--font-dm-sans)" }}
          >
            Reduce tus no-shows un 40% con recordatorios automáticos
          </p>
          <Link
            href="/recordatorios-automaticos-citas"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: "#7D9B76",
              color: "#ffffff",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#6A8564"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(125,155,118,0.35)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#7D9B76"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Descubrir cómo
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
