import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/cuanto-cuesta-chatbot-whatsapp-clinica"
const TITLE = "¿Cuánto cuesta un chatbot de WhatsApp para clínicas? | Cero Manual"
const DESCRIPTION =
  "El precio de un chatbot de WhatsApp para clínicas varía según funcionalidades. Te explicamos qué factores influyen en el coste y cuándo se amortiza."
const HEADLINE = "¿Cuánto cuesta un chatbot de WhatsApp para clínicas? Guía de precios 2026"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://ceromanual.es${PATH}`,
    type: "article",
    publishedTime: "2026-06-13T00:00:00.000Z",
    modifiedTime: "2026-06-13T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Cuánto cuesta de media un chatbot de WhatsApp para una clínica?",
    a: "Depende mucho de lo que necesite tu clínica. Un bot básico de respuestas automáticas puede costar poco, pero apenas resuelve nada por su cuenta. Un agente IA capaz de responder dudas, agendar citas y cualificar leads suele moverse en un rango medio mensual, muy por debajo de lo que supone perder unas pocas citas al mes por no responder a tiempo.",
  },
  {
    q: "¿Hay coste de implementación además de la cuota mensual?",
    a: "En la mayoría de soluciones serias sí existe una configuración inicial, donde se conecta el chatbot a tu WhatsApp y se entrena con la información real de tu clínica: tratamientos, precios, horarios y tono. Es un paso puntual — a partir de ahí, el coste recurrente es la cuota mensual.",
  },
  {
    q: "¿Un chatbot barato puede salir más caro a largo plazo?",
    a: "Sí, y es algo que se ve con frecuencia. Una solución low-cost que solo contesta con menús rígidos o respuestas genéricas no agenda citas ni cualifica leads — sigue perdiendo las consultas que llegan fuera de horario. La diferencia de precio frente a un agente IA avanzado suele ser pequeña comparada con el valor de las citas que ese agente sí consigue cerrar.",
  },
  {
    q: "¿Cuánto tiempo tarda en notarse el retorno de la inversión?",
    a: "En la mayoría de clínicas, con que el chatbot recupere una o dos citas al mes que antes se perdían fuera de horario, ya cubre su coste. A partir de ahí, cada consulta adicional que convierte es retorno añadido — y, como funciona 24/7, ese efecto se mantiene mes tras mes sin esfuerzo extra por parte de tu equipo.",
  },
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Joan - Cero Manual",
  },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  publisher: {
    "@type": "Organization",
    name: "Cero Manual",
    logo: {
      "@type": "ImageObject",
      url: "https://ceromanual.es/logo.png",
    },
  },
  image: "https://ceromanual.es/logo.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://ceromanual.es${PATH}`,
  },
}

function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="underline decoration-1 underline-offset-2 transition-colors duration-150"
      style={{ color: "#7D9B76" }}
    >
      {children}
    </Link>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base leading-relaxed mb-4"
      style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
    >
      {children}
    </p>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-semibold leading-snug mt-16 mb-5"
      style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
    >
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-lg md:text-xl font-semibold leading-snug mt-10 mb-3"
      style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
    >
      {children}
    </h3>
  )
}

export default function CuantoCuestaChatbotWhatsappClinicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="px-6 py-28" style={{ backgroundColor: "#F5F2EE" }}>
        <article className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-150"
            style={{ color: "#8A8580" }}
          >
            ← Volver al blog
          </Link>

          {/* Header */}
          <p
            className="text-xs font-medium mb-4 tracking-widest uppercase"
            style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
          >
            Automatización para clínicas
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
          >
            {HEADLINE}
          </h1>
          <p
            className="text-sm mb-16"
            style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
          >
            13 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            «¿Cuánto cuesta esto?» es, casi siempre, la primera pregunta que se hace el
            dueño de una clínica cuando le hablan de un chatbot de WhatsApp. Y es lógica:
            antes de plantearte incorporar cualquier herramienta nueva, quieres saber qué
            inversión supone y si realmente compensa.
          </P>
          <P>
            La respuesta corta es que depende — hay soluciones desde unos pocos euros al
            mes hasta agentes IA avanzados con un coste mensual mayor. Pero la pregunta
            que de verdad importa no es solo cuánto cuesta tenerlo, sino cuánto te está
            costando ya no tenerlo: entre un 12% y un 19% de las citas de una clínica
            terminan en no-show, y las pérdidas asociadas a una mala atención fuera de
            horario pueden llegar a los 7.500€ al mes.
          </P>
          <P>
            En este artículo vas a entender qué factores influyen en el precio de un
            chatbot de WhatsApp para tu clínica, qué rangos de precio puedes esperar según
            el tipo de solución, en qué se diferencia un chatbot básico de un agente IA
            avanzado, y cuándo empieza a amortizarse la inversión.
          </P>

          <H2>Qué factores determinan el precio de un chatbot para clínicas</H2>
          <P>
            No todos los chatbots de WhatsApp son iguales, y el precio refleja
            precisamente eso. Estos son los factores que más influyen a la hora de fijar
            el coste de una solución para tu clínica.
          </P>

          <H3>Capacidad de conversación: menús rígidos vs lenguaje natural</H3>
          <P>
            Hay soluciones que solo ofrecen menús tipo «responde 1 para precios, 2 para
            citas» — son las más económicas, pero también las que menos resuelven. Otras
            mantienen una conversación natural, entienden lo que pregunta cada paciente y
            responden en consecuencia, igual que lo haría alguien de tu recepción. Esta
            capacidad influye directamente en el precio.
          </P>

          <H3>Integración con tu agenda y calendario</H3>
          <P>
            Que el chatbot pueda consultar tu disponibilidad real y dejar la cita puesta
            directamente — sin pasar por un «te confirmamos en breve» — requiere una
            integración técnica con tu sistema de gestión o calendario. Esta función suele
            marcar una diferencia clara de precio frente a soluciones que solo recogen el
            contacto y lo derivan a una persona.
          </P>

          <H3>Personalización con la información de tu clínica</H3>
          <P>
            Un chatbot entrenado con tus tratamientos, precios orientativos, duración de
            sesiones y tono de comunicación —para que hable de tu clínica como lo haría tu
            equipo— requiere una configuración inicial más cuidada que un bot genérico con
            respuestas de manual. Ese trabajo de personalización también se refleja en el
            coste.
          </P>

          <H3>Volumen de conversaciones y soporte</H3>
          <P>
            Algunas soluciones cobran en función del número de conversaciones o mensajes
            gestionados al mes, mientras que otras ofrecen una cuota fija con volumen
            ilimitado. El nivel de soporte y mantenimiento —ajustes, mejoras continuas,
            resolución de incidencias— también forma parte del precio.
          </P>

          <H2>Rangos de precio según el tipo de solución</H2>
          <P>
            A grandes rasgos, en el mercado encontramos tres niveles de solución, cada uno
            con un rango de precio y un nivel de resultados muy distinto.
          </P>

          <H3>Bots de respuestas automáticas básicas</H3>
          <P>
            Son la opción más económica: mensajes predefinidos, menús de opciones y poco
            más. Su coste mensual suele ser bajo, pero su capacidad real de resolver
            consultas o agendar citas es muy limitada — en la práctica, siguen dejando la
            mayoría del trabajo en manos de tu equipo.
          </P>

          <H3>Chatbots intermedios con automatizaciones puntuales</H3>
          <P>
            Combinan respuestas automáticas con alguna automatización —como recordatorios
            de citas o derivación de leads— pero sin una conversación realmente natural ni
            integración completa con tu agenda. Su precio se sitúa en un rango medio, y
            suelen requerir más configuración manual por tu parte.
          </P>

          <H3>Agentes IA avanzados con agenda integrada</H3>
          <P>
            Son la solución más completa: conversación natural, respuestas personalizadas
            con la información real de tu clínica, agenda de citas integrada y
            cualificación de leads antes de pasarlos a tu equipo. Su coste mensual es
            mayor que el de un bot básico, pero también es el único tipo de solución
            pensado para recuperar de forma activa las consultas que hoy se están
            perdiendo. Si quieres ver cómo funciona en detalle, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              qué es un chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            lo explicamos paso a paso.
          </P>

          <H2>Chatbot básico vs agente IA avanzado: diferencias de precio y valor</H2>
          <P>
            La diferencia de precio entre un bot básico y un agente IA avanzado suele ser
            de unas pocas decenas de euros al mes. La diferencia de valor, en cambio, es
            mucho mayor.
          </P>
          <P>
            Un bot básico puede informar de tu horario o derivar a un número de teléfono,
            pero no resuelve la consulta ni agenda nada por sí mismo. Un agente IA
            avanzado responde dudas sobre tratamientos, precios y disponibilidad, y —
            cuando la persona ya está decidida— agenda la cita directamente, con el hueco
            real disponible en tu calendario.
          </P>
          <P>
            Y aquí entra el dato que de verdad importa: el LTV (valor de vida) de un
            paciente nuevo en una clínica suele rondar los 3.000€, contando tratamientos
            recurrentes y recomendaciones. Si un agente IA avanzado recupera, gracias a su
            disponibilidad 24/7, aunque sea una sola cita al mes que un bot básico habría
            dejado escapar, la diferencia de precio entre ambos queda completamente
            absorbida por ese único paciente.
          </P>

          <H2>Cuándo se amortiza la inversión</H2>
          <P>
            Para calcular cuándo se amortiza un chatbot de WhatsApp, hay que partir de dos
            datos: cuántas citas se están perdiendo hoy y cuánto vale cada una.
          </P>
          <P>
            Entre un 12% y un 19% de las citas programadas en una clínica terminan en
            no-show, y las pérdidas por una atención deficiente fuera de horario —
            consultas sin respuesta que terminan en otra clínica— pueden alcanzar los
            7.500€ al mes en clínicas con buen volumen de tráfico. Frente a esas cifras, la
            cuota mensual de un agente IA avanzado suele representar una fracción muy
            pequeña.
          </P>
          <P>
            Como WhatsApp es, además, el canal que más abren los pacientes —entre un 95%
            y un 98% de los mensajes se leen, frente al 20-25% de un email—, cada consulta
            que el chatbot resuelve y agenda por esa vía tiene muchas más probabilidades de
            convertirse en cita real. En la práctica, recuperar una o dos citas al mes que
            antes se perdían suele bastar para cubrir el coste del chatbot — y, a partir
            de ahí, todo lo que recupera es retorno neto.
          </P>

          <H2>Qué preguntar antes de contratar un chatbot para tu clínica</H2>
          <P>
            Antes de decidirte por una solución, conviene hacer las preguntas correctas —
            porque el precio que ves en la web no siempre refleja el coste total ni lo que
            realmente vas a obtener.
          </P>
          <P>
            ¿El precio incluye la configuración inicial y el entrenamiento con la
            información de mi clínica, o es un coste aparte? ¿Puede el chatbot consultar mi
            agenda real y dejar citas puestas, o solo recoge datos de contacto? ¿Qué pasa
            si una conversación requiere intervención humana —se escala correctamente, con
            el contexto recogido, o se pierde? ¿Hay límite de conversaciones al mes, o la
            cuota es fija independientemente del volumen?
          </P>
          <P>
            Si quieres ver cómo se responden estas preguntas en la práctica, con ejemplos
            reales aplicados a clínicas estéticas, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            tienes el detalle completo de qué hace y cómo se configura.
          </P>
        </article>

        <div className="mt-4">
          <ServiceFAQ faqs={faqs} />
        </div>

        {/* CTA final */}
        <div className="max-w-3xl mx-auto px-0 pb-4">
          <div
            className="rounded-2xl p-10 md:p-12 text-center"
            style={{ backgroundColor: "#F0F4EF", border: "1px solid #7D9B76" }}
          >
            <h2
              className="text-2xl md:text-3xl font-semibold leading-snug mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              ¿Quieres saber cuánto te está costando no tener un chatbot?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te mostramos, con tus propios números, cuántas consultas se enfrían cada mes
              por falta de respuesta — y qué presupuesto concreto tendría el agente de
              WhatsApp en tu clínica, sin letra pequeña ni permanencia.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Pedir presupuesto para mi clínica →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
