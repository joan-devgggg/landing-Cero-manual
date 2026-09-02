import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/agente-ia-recepcion-clinica"
const DATES = articleDates("agente-ia-recepcion-clinica")
const TITLE = "Agente IA para la recepción de tu clínica: qué es y cómo funciona | Cero Manual"
const DESCRIPTION =
  "Un agente IA en la recepción de tu clínica responde llamadas, agenda citas y atiende WhatsApp 24/7 sin contratar más personal."
const HEADLINE = "Agente IA para la recepción de tu clínica: qué es, qué hace y cuánto cuesta"

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
    publishedTime: DATES.publishedTime,
    modifiedTime: DATES.modifiedTime,
  },
}

const faqs = [
  {
    q: "¿Qué es exactamente un agente IA para la recepción de una clínica?",
    a: "Es un sistema que atiende llamadas, mensajes de WhatsApp y consultas desde la web de la clínica de forma automática, usando inteligencia artificial para entender lo que pide el paciente y responder de forma natural. Puede informar sobre tratamientos y precios, agendar y modificar citas, y resolver las dudas más frecuentes — todo sin que nadie del equipo tenga que estar al otro lado en ese momento.",
  },
  {
    q: "¿No suena robótico hablar con un agente IA en lugar de con una persona?",
    a: "Si está bien configurado, no. El agente se entrena con el tono, el vocabulario y la información concreta de tu clínica, y mantiene conversaciones naturales en español, entendiendo variaciones en cómo se formulan las preguntas. La mayoría de pacientes simplemente notan que les responden rápido y bien — no que están hablando con un sistema.",
  },
  {
    q: "¿Qué pasa si un paciente plantea algo que el agente no puede resolver?",
    a: "El agente está pensado para cubrir las consultas habituales — información, precios, disponibilidad, agendar o cambiar una cita — y para detectar cuándo una conversación necesita intervención humana, como una urgencia médica o una reclamación. En esos casos, deriva la conversación al equipo de la clínica con todo el contexto ya recogido, para que no haya que empezar de cero.",
  },
  {
    q: "¿Cuánto cuesta implementar un agente IA y cuánto tarda en estar funcionando?",
    a: "El coste es muy inferior al de contratar una persona adicional para recepción, y suele amortizarse rápido solo con las citas que antes se perdían por no responder a tiempo. La implementación no requiere cambiar de software de gestión: se conecta a la agenda y los canales que ya usa la clínica, y en cuestión de días puede estar atendiendo las primeras consultas.",
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
  datePublished: DATES.published,
  dateModified: DATES.modified,
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

export default function AgenteIaRecepcionClinicaArticlePage() {
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
            11 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Para muchas clínicas, la recepción es el cuello de botella del negocio.
            Mientras el equipo está atendiendo a un paciente, el teléfono suena, llegan
            mensajes de WhatsApp y nadie puede contestar. Y fuera del horario de
            atención, todas esas consultas simplemente se acumulan hasta el día
            siguiente — si es que alguien se acuerda de responderlas.
          </P>
          <P>
            El problema no es de actitud ni de esfuerzo: es que una persona no puede
            estar en dos sitios a la vez, y la recepción de una clínica necesita
            estarlo constantemente.
          </P>
          <P>
            En este artículo vamos a ver qué es un agente IA para la recepción de una
            clínica, qué tareas puede asumir, en qué se diferencia de tener una
            recepcionista humana, y cuánto cuesta ponerlo en marcha.
          </P>

          <H2>Qué es un agente IA para la recepción de una clínica</H2>
          <P>
            Un agente IA de recepción es un sistema que atiende las llamadas, los
            mensajes de WhatsApp y las consultas desde la web de tu clínica de forma
            automática, usando inteligencia artificial para entender lo que pide cada
            persona y responder de forma natural — como lo haría alguien del equipo,
            pero disponible las 24 horas.
          </P>
          <P>
            No se trata de un simple contestador con respuestas predefinidas. El agente
            entiende preguntas formuladas de muchas formas distintas, accede a la
            información real de la clínica (tratamientos, precios, disponibilidad) y
            puede mantener una conversación completa hasta resolver lo que el paciente
            necesita.
          </P>

          <H2>Qué tareas puede hacer un agente IA en recepción</H2>
          <P>
            En el día a día, un agente IA puede encargarse de buena parte de lo que
            hoy ocupa el tiempo de recepción: informar sobre tratamientos, precios y
            duración; comprobar disponibilidad y agendar una cita nueva; modificar o
            cancelar una cita existente; enviar confirmaciones y recordatorios; y
            responder a las preguntas que se repiten constantemente, como horarios,
            ubicación o qué incluye cada servicio.
          </P>
          <P>
            Cuando la consulta es más compleja — una urgencia médica, una reclamación,
            algo que requiere criterio humano — el agente lo detecta y deriva la
            conversación al equipo, con todo el contexto ya recogido para que no haya
            que empezar de cero.
          </P>

          <H2>Agente IA vs recepcionista humana: comparativa real</H2>
          <P>
            La diferencia más evidente es la disponibilidad. Una recepcionista humana
            trabaja un horario determinado, mientras que hasta un 40% de las consultas
            de pacientes llegan fuera de ese horario — por la noche, los fines de
            semana, durante la pausa del mediodía. Un agente IA está disponible en todos
            esos momentos.
          </P>
          <P>
            La velocidad de respuesta también marca una diferencia enorme: si un nuevo
            lead escribe preguntando por un tratamiento y no recibe respuesta en los
            primeros 5 minutos, la probabilidad de perder ese contacto puede llegar al
            80%. Un agente IA responde al instante, sea la hora que sea, lo que reduce
            drásticamente esa pérdida. En{" "}
            <InternalLink href="/agente-voz-ia-clinicas">
              agente de voz IA para clínicas
            </InternalLink>{" "}
            puedes ver cómo se aplica esto también a las llamadas telefónicas.
          </P>

          <H2>Cómo funciona en el día a día de una clínica</H2>
          <P>
            Imagina que son las 21:00 y alguien que ha visto un anuncio de tu clínica
            llama para preguntar por un tratamiento. El agente IA responde la llamada,
            explica en qué consiste el tratamiento y su precio orientativo, comprueba
            la disponibilidad de la agenda y, si la persona quiere, le reserva una cita
            para esa misma semana — todo en una sola conversación, sin que nadie del
            equipo tenga que intervenir.
          </P>
          <P>
            Al día siguiente, el equipo simplemente ve la nueva cita en la agenda, con
            el resumen de la conversación si lo necesita. Lo mismo ocurre con los
            mensajes de WhatsApp que llegan durante el fin de semana, o con las llamadas
            que se reciben mientras el equipo está con otro paciente.
          </P>

          <H2>Cuánto cuesta y cuándo se amortiza</H2>
          <P>
            El coste de un agente IA de recepción es muy inferior al de contratar a una
            persona adicional, y no implica gastos de nómina, vacaciones ni bajas. En la
            mayoría de los casos, se amortiza solo con las citas que antes se perdían
            por no responder a tiempo fuera de horario.
          </P>
          <P>
            Además, si se combina con recordatorios automáticos de confirmación, el
            beneficio se multiplica: recuerda que entre el 12% y el 19% de las citas en
            clínicas estéticas terminan en un no-show, así que un sistema que agenda
            bien desde el principio y confirma antes de la cita ataca el problema por
            los dos extremos. En{" "}
            <InternalLink href="/agente-voz-ia-clinicas">
              agente de voz IA para clínicas
            </InternalLink>{" "}
            te explicamos cómo se implementa en tu clínica y qué necesitas para
            empezar.
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
              ¿Quieres que tu clínica nunca pierda una llamada o un mensaje?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te ayudamos a poner en marcha un agente IA que atiende llamadas y WhatsApp
              24/7, agenda citas y responde a tus pacientes al instante — sin contratar
              más personal.
            </p>
            <Link
              href="/agente-voz-ia-clinicas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero un agente IA en mi recepción →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
