"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "El agente está operativo en menos de 14 días desde que firmamos. El onboarding incluye configurar la base de conocimiento con tu información, tratamientos y precios.",
  },
  {
    q: "¿Los datos de mis contactos están seguros?",
    a: "Sí. Todo cumple con el RGPD. Los datos se almacenan en servidores europeos y nunca se comparten con terceros. Gestionamos los consentimientos digitales necesarios.",
  },
  {
    q: "¿Se integra con mi software de gestión?",
    a: "Trabajamos con los principales: Flowww, Klinikare, Treatwell, Koibox. Si usas otro, lo evaluamos en la llamada.",
  },
  {
    q: "¿Puedo desactivar el agente y atender yo manualmente?",
    a: "Sí. Tienes un switch on/off desde el Panel de Control. Puedes tomar el hilo en cualquier momento y el agente para.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No. Mes a mes. Cancelas con 30 días de aviso.",
  },
  {
    q: "¿El agente suena robótico?",
    a: "No. Lo configuramos con la voz y el tono de tu clínica. Pruébalo en la demo de arriba — ese es el nivel de conversación que entregamos.",
  },
]

function FAQItem({
  faq,
  open,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  open: boolean
  onToggle: () => void
}) {
  return (
    <div style={{ borderBottom: "1px solid #E0DBD4" }}>
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={onToggle}
      >
        <span
          className="text-base font-medium"
          style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
        >
          {faq.q}
        </span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: open ? "#7D9B76" : "transparent",
            border: open ? "none" : "1px solid #E0DBD4",
          }}
        >
          {open ? (
            <Minus size={12} color="#ffffff" strokeWidth={2.5} />
          ) : (
            <Plus size={12} color="#8A8580" strokeWidth={2.5} />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="text-sm leading-relaxed pb-5"
              style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 px-6" ref={ref} style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-3xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px mb-28" style={{ backgroundColor: "#E0DBD4" }} />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-xs font-medium mb-4 tracking-widest uppercase"
            style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
          >
            FAQ
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
          >
            Preguntas
            <br />
            <span style={{ fontStyle: "italic", color: "#7D9B76" }}>frecuentes</span>
          </h2>
        </motion.div>

        {/* Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ borderTop: "1px solid #E0DBD4" }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
