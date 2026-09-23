"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "¿Cuánto cuesta?",
    a: "Depende del plan y los canales que actives. En la auditoría gratuita te hacemos una propuesta personalizada sin sorpresas ni letra pequeña.",
  },
  {
    q: "¿El agente suena robótico?",
    a: "No. Lo configuramos con la voz y el tono de tu clínica. Pruébalo en la demo de arriba — ese es el nivel de conversación que entregamos.",
  },
  {
    q: "¿Qué pasa si el agente comete un error con un paciente?",
    a: "Tú siempre puedes tomar el control en cualquier momento. El agente está entrenado para escalar al humano cuando detecta una situación delicada, y tú recibes aviso inmediato.",
  },
  {
    q: "¿Funciona si no tengo muchos seguidores ni anuncios activos?",
    a: "Sí. El agente funciona con cualquier fuente de contacto — WhatsApp directo, Google, recomendaciones, o tu base de pacientes existente. No necesitas anuncios para empezar a ver resultados.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "El agente estándar está operativo en menos de 14 días desde que empezamos. El onboarding incluye configurar la base de conocimiento con tu información, tratamientos y precios. Si hace falta una integración con tu programa de gestión o un software a medida, el plazo se fija en la propuesta, según el alcance.",
  },
  {
    q: "¿Los datos de mis contactos están seguros?",
    a: "Sí. Tratamos los datos conforme al RGPD. Para dar el servicio trabajamos con proveedores —alojamiento, WhatsApp, modelos de IA y voz— que actúan como encargados del tratamiento, y algunos están fuera de la UE. La lista de encargados está en la política de privacidad.",
  },
  {
    q: "¿Se integra con mi software de gestión?",
    a: "Si tu programa lo permite, sí: el agente se puede integrar con Flowww, Koibox, ClinicCloud o Klinikare para que las citas entren en la agenda que ya usa tu equipo. Si el tuyo no encaja o no se deja conectar, construimos el software a medida con el agente dentro. Lo vemos en la auditoría gratuita.",
  },
  {
    q: "¿Puedo desactivar el agente y atender yo manualmente?",
    a: "Sí. Tienes un switch on/off desde el Panel de Control. Puedes tomar el hilo en cualquier momento y el agente para.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No. Mes a mes. Cancelas con 30 días de aviso.",
  },
]

// Disclosure nativo: la respuesta es hija directa de <details>, así que va
// siempre en el HTML servido aunque el acordeón esté cerrado. No depende de
// estado de React, que era justo lo que la dejaba fuera del HTML: los crawlers
// de IA no ejecutan JS y Googlebot no hace clic.
function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  return (
    <details className="faq-item" name="faq-home" style={{ borderBottom: "1px solid #E0DBD4" }}>
      <summary className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span
          className="text-base font-medium"
          style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
        >
          {faq.q}
        </span>
        <div className="faq-icon flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200">
          <Plus className="faq-icon-plus" size={12} color="#8A8580" strokeWidth={2.5} />
          <Minus className="faq-icon-minus" size={12} color="#ffffff" strokeWidth={2.5} />
        </div>
      </summary>

      <p
        className="faq-answer text-sm leading-relaxed pb-5"
        style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
      >
        {faq.a}
      </p>
    </details>
  )
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="faq" className="py-28 px-6" ref={ref} style={{ backgroundColor: "#F5F2EE" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
            Preguntas frecuentes
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
            <FAQItem key={i} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
