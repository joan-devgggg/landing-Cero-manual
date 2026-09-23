"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export interface ServiceFAQItem {
  q: string
  a: string
}

export interface ServiceFAQProps {
  faqs: ServiceFAQItem[]
}

// Disclosure nativo: la respuesta es hija directa de <details>, así que va
// siempre en el HTML servido aunque el acordeón esté cerrado. No depende de
// estado de React, que era justo lo que la dejaba fuera del HTML: los crawlers
// de IA no ejecutan JS y Googlebot no hace clic.
function FAQItem({ faq }: { faq: ServiceFAQItem }) {
  return (
    <details className="faq-item" name="faq-servicio" style={{ borderBottom: "1px solid #E0DBD4" }}>
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

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

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
