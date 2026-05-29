"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error("Error al enviar el formulario.")
      }

      if (typeof window !== "undefined" && typeof (window as { fbq?: Function }).fbq === "function") {
        (window as { fbq?: Function }).fbq?.("track", "Lead")
      }

      setSubmitted(true)
    } catch {
      setError("Algo ha ido mal. Por favor, inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "12px",
    color: "#ffffff",
    fontFamily: "var(--font-dm-sans)",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.15s ease",
  }

  return (
    <section id="cta" className="py-14 md:py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden px-8 py-16"
          style={{ backgroundColor: "#7D9B76" }}
        >
          {/* Subtle texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-10"
            >
              <h2
                className="text-3xl md:text-4xl font-semibold leading-tight mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "#ffffff" }}
              >
                Agenda tu diagnóstico gratuito
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-dm-sans)" }}
              >
                20 minutos con un experto. Sin compromiso.
                <br />
                Te explicamos exactamente cómo lo implementaríamos en tu clínica.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} color="#ffffff" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "#ffffff" }}
                >
                  ¡Recibido! Nos ponemos en contacto hoy mismo.
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-dm-sans)" }}
                >
                  ¿Prefieres elegir tú el horario?
                </p>
                <a
                  href="https://cal.com/heduar-6u5ktu/reunion-1-cero.manual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#7D9B76",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Elegir horario en el calendario →
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Nombre */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p
                    className="text-sm text-center"
                    style={{ color: "rgba(255, 200, 200, 0.95)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-70"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#7D9B76",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor = "#F5F2EE"
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {loading ? "Enviando..." : (
                    <>
                      Agendar diagnóstico gratuito
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {/* Cal.com alternative */}
                <p
                  className="text-center text-sm mt-1"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-dm-sans)" }}
                >
                  ¿Prefieres elegir tú el horario?{" "}
                  <a
                    href="https://cal.com/heduar-6u5ktu/reunion-1-cero.manual"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium transition-opacity duration-150"
                    style={{ color: "#ffffff" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Accede al calendario →
                  </a>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
