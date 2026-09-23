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

const PATH = "/blog/whatsapp-business-clinicas-esteticas"
const DATES = articleDates("whatsapp-business-clinicas-esteticas")
const TITLE = "WhatsApp Business para clínicas estéticas | Cero Manual"
const DESCRIPTION =
  "WhatsApp Business para clínicas estéticas: cómo configurarlo bien, qué límites tiene usarlo a mano y cuándo tiene sentido automatizarlo con IA."
const HEADLINE =
  "WhatsApp Business para clínicas estéticas: cómo configurarlo y cuándo automatizarlo"

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
    q: "¿Cuál es la diferencia entre WhatsApp Business app y WhatsApp Business API?",
    a: "La app de WhatsApp Business es gratuita y se instala en un móvil; admite dispositivos vinculados, así que varias personas pueden atender desde distintos equipos, pero todo lo que no sean respuestas rápidas y mensajes automáticos básicos sigue siendo manual: sirve para clínicas que reciben un volumen de mensajes manejable. La API no tiene interfaz propia, permite que varias personas — o un sistema automático — gestionen la conversación a la vez, y es la base sobre la que se construyen los chatbots y las respuestas automáticas.",
  },
  {
    q: "¿Por qué WhatsApp es tan importante para una clínica estética?",
    a: "Porque es donde están tus pacientes: escriben a su clínica igual que escriben a cualquiera, sin buscar un teléfono ni rellenar un formulario. Además, esos mensajes llegan también fuera del horario de la clínica, así que el canal tiene que estar atendido cuando la recepción está cerrada.",
  },
  {
    q: "¿Puedo seguir usando WhatsApp Business app si ya me funciona bien?",
    a: "Sí, sin problema, mientras el volumen de mensajes sea manejable y siempre haya alguien disponible para responder rápido, incluyendo fuera de horario. El momento de plantearse un cambio es cuando empiezas a notar que los mensajes se acumulan, las respuestas tardan o se os escapan consultas. En ese punto automatizar tiene sentido.",
  },
  {
    q: "¿Automatizar WhatsApp hace que las respuestas suenen robóticas?",
    a: "No tiene por qué. Un sistema bien configurado responde con el mismo tono que usaría tu recepción, resuelve las preguntas más habituales — precios, horarios, disponibilidad — y solo deriva a una persona cuando la conversación lo requiere de verdad. El asistente se presenta como tal, como exige el Reglamento europeo de IA, y lo que el paciente nota es que le contestan al momento.",
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

export default function WhatsAppBusinessClinicasEsteticasPage() {
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
            Gestión de clínicas
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
            11 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Para configurar WhatsApp Business en tu clínica estética, completa el perfil
            (horario, dirección y tratamientos con precios orientativos), activa los mensajes de
            bienvenida y de ausencia y guarda respuestas rápidas para las preguntas que más se
            repiten. Automatizarlo compensa cuando los mensajes se acumulan, las respuestas
            tardan o llegan consultas por la noche y el fin de semana que nadie puede atender.
          </P>
          <P>
            Por WhatsApp pasan casi todas las conversaciones con tus pacientes, desde precios
            hasta peticiones de cita, y atenderlo a mano obliga a alguien a{" "}
            <InternalLink href="/blog/clinica-estetica-por-whatsapp">
              estar pendiente del móvil constantemente
            </InternalLink>
            , también durante el tratamiento de un paciente.
          </P>

          <H2>Qué es WhatsApp Business y en qué se diferencia del WhatsApp normal</H2>
          <P>
            WhatsApp Business es la versión de WhatsApp pensada para negocios. Por fuera se
            parece mucho a la app normal, pero incorpora funciones específicas para
            atender clientes: un perfil con horarios, dirección y catálogo de servicios,
            mensajes de bienvenida y de ausencia automáticos, etiquetas para organizar
            conversaciones y respuestas rápidas para las preguntas que se repiten más.
          </P>
          <P>
            Frente a un WhatsApp personal, los pacientes ven un perfil profesional, con
            información clara sobre cuándo pueden esperar respuesta, y tu equipo gana
            herramientas básicas para no perder el hilo de cada conversación.
          </P>
          <P>
            Aun así, sigue siendo una app pensada para atender a mano. Admite dispositivos
            vinculados, así que varias personas del equipo pueden responder desde distintos
            equipos, pero su automatización se queda en mensajes de bienvenida, de ausencia y
            respuestas rápidas, y no se conecta con otros sistemas. Esa limitación se nota a
            medida que crece el volumen de mensajes.
          </P>

          <H2>Cómo configurar WhatsApp Business para tu clínica</H2>
          <P>
            Configurar bien WhatsApp Business no lleva mucho tiempo, pero marca la
            diferencia en cómo perciben tu clínica los pacientes que escriben por primera
            vez. Lo primero es completar el perfil: nombre de la clínica, dirección,
            horario de atención, categoría del negocio y, si es posible, un catálogo con
            los tratamientos principales y sus precios orientativos.
          </P>
          <P>
            Después conviene configurar el mensaje de bienvenida, que se envía
            automáticamente la primera vez que alguien escribe o tras un periodo sin
            actividad, y el mensaje de ausencia, que se activa fuera del horario de
            atención para que el paciente sepa cuándo recibirá respuesta.
          </P>
          <P>
            Por último, las respuestas rápidas son una de las funciones que más tiempo
            ahorran: te permiten guardar contestaciones ya escritas para las preguntas más
            habituales — precios, ubicación, disponibilidad — y enviarlas con un par de
            toques en lugar de escribirlas cada vez desde cero.
          </P>

          <H2>Las limitaciones de WhatsApp Business manual</H2>
          <P>
            Con poco volumen de mensajes, WhatsApp Business bien configurado es más que
            suficiente. El problema aparece cuando ese volumen crece: varias personas
            escribiendo a la vez, consultas que llegan por la noche o el fin de semana, y un
            equipo que tiene que responder a mano a todo, aunque lo haga desde varios
            dispositivos.
          </P>
          <P>
            Lo que más pesa es la velocidad: quien escribe a una clínica puede
            estar escribiendo también a otras, y la que contesta antes tiene ventaja. Por muy bien
            organizado que esté tu equipo, es prácticamente imposible contestar al momento
            las 24 horas del día con una sola persona pendiente del
            móvil.
          </P>

          <H2>Cuándo tiene sentido automatizar WhatsApp</H2>
          <P>
            <InternalLink href="/blog/chatbot-whatsapp-vs-recepcionista-clinica">
              Automatizar no significa sustituir a tu equipo
            </InternalLink>
            , sino cubrir los huecos que el
            equipo no puede cubrir: las noches, los fines de semana, los momentos en los
            que todo el mundo está con un paciente y nadie puede mirar el móvil.
          </P>
          <P>
            Tiene sentido dar el paso cuando empiezas a notar que los mensajes se
            acumulan, que las respuestas tardan más de lo que te gustaría o que se os han
            escapado consultas que podrían haber sido una cita. En ese punto, un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp con IA
            </InternalLink>{" "}
            puede responder al instante, resolver las preguntas más frecuentes, agendar
            citas y avisar a tu equipo solo cuando la conversación realmente lo requiere.
          </P>
          <P>
            Así el paciente recibe respuesta inmediata a cualquier hora y, cuando toca agendar
            o resolver algo más complejo, tu equipo lo encuentra todo listo para continuar.
          </P>

          <H2>WhatsApp Business API vs WhatsApp Business app</H2>
          <P>
            La app de WhatsApp Business es gratuita, funciona en el móvil y admite
            dispositivos vinculados para que varias personas atiendan, pero todo se responde a
            mano. Es perfecta para empezar y para clínicas con un volumen de
            mensajes manejable.
          </P>
          <P>
            La API de WhatsApp Business no tiene interfaz propia: permite conectar WhatsApp con otros sistemas — un CRM, un calendario,{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              un agente con inteligencia artificial
            </InternalLink>
            . Es la tecnología que hace posible que varias
            personas, o un sistema automático, gestionen conversaciones a la vez sin
            depender de un único móvil.
          </P>
          <P>
            Cuál te conviene depende del momento de tu clínica. Si te identificas con las limitaciones del apartado
            anterior, la API — combinada con un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp con IA
            </InternalLink>{" "}
            — es el siguiente paso natural.
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
              ¿Cuántos mensajes se te están escapando?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos cómo un{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp con IA
              </InternalLink>{" "}
              puede responder al instante las 24 horas del día y agendar citas sin que
              nadie de tu equipo tenga que estar pendiente del móvil.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero automatizar mi WhatsApp →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
