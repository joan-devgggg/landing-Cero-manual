import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import H3 from "@/components/blog/H3"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/chatbot-whatsapp-para-clinicas-esteticas"
const DATES = articleDates("chatbot-whatsapp-para-clinicas-esteticas")
const TITLE = "Chatbot WhatsApp clínicas estéticas: qué es | Cero Manual"
const DESCRIPTION =
  "Qué es un chatbot de WhatsApp para clínicas estéticas, qué hace (consultas, citas, cualificar leads) y de qué depende su coste. Pide tu auditoría gratuita."
const ARTICLE_DESCRIPTION =
  "Qué es un chatbot de WhatsApp para clínicas estéticas, en qué se diferencia de responder a mano con WhatsApp Business, qué tareas cubre y de qué depende su coste."
const HEADLINE =
  "Chatbot de WhatsApp para clínicas estéticas: qué es y cómo funciona"

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
    q: "¿El chatbot puede agendar citas directamente, o solo responde preguntas?",
    a: "Puede hacer ambas cosas. Responde dudas sobre tratamientos, precios y disponibilidad — y, cuando la persona ya está decidida, agenda la cita en esa misma conversación, sobre un hueco que está libre. La persona termina la conversación con la cita ya puesta. Y si el hueco que pide no está libre, propone alternativas cercanas.",
  },
  {
    q: "¿Mis pacientes notarán que están hablando con un bot?",
    a: "Sí, y así debe ser: desde el 2 de agosto de 2026, el Reglamento europeo de IA obliga a informar de que se está hablando con una IA, así que el chatbot se presenta como asistente virtual de la clínica. Lo que sí notarán es que reciben una respuesta clara al momento. Se entrena con el tono y la información real de tu clínica, así que la conversación suena cercana y natural. A diferencia de un chatbot de menús, entiende lo que le escriben con sus propias palabras y responde en consecuencia. Y en el momento en que la consulta se sale de lo previsible o pide criterio clínico, pasa la conversación a una persona de tu equipo.",
  },
  {
    q: "¿Tengo que estar pendiente del WhatsApp para que funcione?",
    a: "No. El chatbot responde solo, a cualquier hora, y solo avisa a tu equipo cuando hace falta que intervenga una persona — por ejemplo, ante una consulta delicada o una situación que requiere trato humano. Tú sigues con tu día a día con normalidad.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando en mi clínica?",
    a: "En unos días. Se conecta al número de WhatsApp que ya usas y se configura con la información que ya tienes sobre tratamientos, precios y horarios. No tienes que preparar nada especial: en poco tiempo está respondiendo por ti. Lo que más suele condicionar el plazo es tener ordenada la información de partida — qué tratamientos ofreces, con qué precios orientativos y qué se responde a las dudas que más se repiten. Después de arrancar conviene revisar las primeras conversaciones reales y ajustar lo que haga falta, que es cuando el agente termina de sonar como tu clínica.",
  },
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: ARTICLE_DESCRIPTION,
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

export default function ChatbotWhatsappArticlePage() {
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
            7 de junio de 2026 · 9 min de lectura
          </p>

          {/* Intro */}
          <P>
            Un chatbot de WhatsApp para una clínica estética contesta a quien escribe, le
            resuelve las dudas sobre tratamientos y le agenda la cita en la misma conversación,
            a cualquier hora. Funciona sobre el número que ya usa tu clínica, con tu
            información, y pasa la conversación a tu equipo cuando hace falta una persona.
          </P>
          <P>
            Buena parte de las consultas que recibe una clínica estética llegan fuera de su
            horario de atención, por la noche o en fin de semana, y se quedan horas o días sin
            respuesta.{" "}
            <InternalLink href="/blog/clinica-estetica-por-whatsapp">
              WhatsApp es el canal
            </InternalLink>{" "}
            que tus pacientes ya usan a diario para hablar con cualquiera, también con su
            clínica; lo que falta es alguien disponible al otro lado para responder a tiempo.
          </P>

          <H2>¿Qué es un chatbot de WhatsApp para clínicas estéticas?</H2>
          <P>
            Un chatbot de WhatsApp para clínicas estéticas es un sistema que mantiene una
            conversación natural con quien escribe a tu clínica, resuelve sus dudas sobre
            tratamientos y precios, y agenda la cita — a cualquier hora y sin que intervenga
            nadie de tu equipo. No es un menú rígido de «responde 1 para precios, 2 para
            citas»: entiende lo que pregunta la persona y responde en consecuencia.
          </P>
          <P>
            En la práctica, hace{" "}
            <InternalLink href="/blog/chatbot-whatsapp-vs-recepcionista-clinica">
              lo que haría alguien de tu recepción
            </InternalLink>{" "}
            si tuviera el móvil en la
            mano en ese mismo instante, con la diferencia de que no se olvida de ningún
            mensaje y atiende varias conversaciones a la vez.
          </P>
          <P>
            Se configura con la información real de tu clínica: tratamientos, precios
            orientativos, duración de las sesiones, disponibilidad y el tono con el que
            quieres dirigirte a tus pacientes.
          </P>
          <P>
            Y, como con el teléfono, no hace falta cambiar de número: el chatbot se conecta
            al WhatsApp que ya usa tu clínica, así que para quien te escribe no cambia nada
            — salvo que, esta vez, recibe respuesta al momento, sea la hora que sea.
          </P>

          <H2>¿En qué se diferencia de responder manualmente por WhatsApp Business?</H2>
          <P>
            La diferencia está en quién responde y cuándo.{" "}
            <InternalLink href="/blog/whatsapp-business-clinicas-esteticas">
              Responder tú mismo desde WhatsApp Business
            </InternalLink>{" "}
            depende de que alguien de tu equipo esté disponible, con el móvil a mano, en el
            momento exacto en que llega el mensaje; el chatbot responde solo, al instante y
            las 24 horas. Fuera de horario o en mitad de un tratamiento con un paciente
            delante, los mensajes se acumulan.
          </P>
          <P>
            Y esa espera tiene coste: mientras espera, quien escribe puede encontrar otra
            clínica que sí le conteste.
          </P>
          <P>
            Conviene no confundir tres cosas que a menudo se meten en el mismo saco:
            responder a mano,{" "}
            <InternalLink href="/blog/mejor-chatbot-whatsapp-clinica-estetica">
              un chatbot de menús y un agente con IA
            </InternalLink>
            . Esta es la diferencia
            práctica:
          </P>

          <BlogTable
            headers={[
              "",
              "WhatsApp Business (manual)",
              "Chatbot de menús",
              "Agente con IA",
            ]}
            rows={[
              [
                "Quién responde",
                "Una persona de tu equipo",
                "Un árbol de opciones fijo",
                "Un agente entrenado con la información de tu clínica",
              ],
              [
                "Horario",
                "Solo cuando hay alguien disponible",
                "24/7, pero solo dentro del guion previsto",
                "24/7, también fines de semana y festivos",
              ],
              [
                "Preguntas abiertas",
                "Sí, sin límite",
                "No: obliga a elegir entre opciones numeradas",
                "Sí, entiende la consulta escrita con palabras propias",
              ],
              [
                "¿Agenda la cita?",
                "Sí, a mano y en horario de recepción",
                "Normalmente no: deriva a un formulario o a una llamada",
                "Sí, sobre huecos reales de la agenda",
              ],
              [
                "Coste",
                "Horas de tu equipo",
                "Suscripción mensual, según proveedor",
                "Cuota mensual, mayor que un bot de menús",
              ],
            ]}
          />

          <H2>Qué puede hacer el chatbot por tu clínica</H2>
          <P>
            Cuatro cosas, en concreto: resolver dudas sobre tratamientos, agendar la primera
            visita, cualificar al lead antes de pasarlo a tu equipo y escalar a una persona
            cuando la consulta lo pide.
          </P>

          <H3>Responde dudas sobre tratamientos al momento</H3>
          <P>
            Precios orientativos, duración, qué incluye cada sesión, si hace falta alguna
            preparación previa... Las preguntas que más se repiten antes de reservar las
            resuelve el chatbot en segundos, sin que la persona tenga que esperar a que
            alguien lea el mensaje.
          </P>

          <H3>Agenda la primera visita sin intervención humana</H3>
          <P>
            Cuando la persona ya está decidida, el chatbot le ofrece los huecos libres y le
            reserva la cita dentro del mismo chat, sin dejarla pendiente de un «te confirmamos
            en breve».
          </P>

          <H3>Cualifica al lead antes de pasarlo a tu equipo</H3>
          <P>
            Recoge qué tratamiento le interesa, qué busca conseguir y desde cuándo lo está
            pensando, para que alguien de tu equipo retome la conversación con todo el
            contexto. Eso pesa más cuando el lead llega de un anuncio de Meta o de un perfil
            en un marketplace como Booksy: viene sin contexto, y quien lo
            atiende necesita saber en dos líneas qué quiere esa persona. Si
            quieres ver cómo se aplicaría esto a tu clínica en concreto, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            te explicamos cómo funcionaría con tus tratamientos.
          </P>

          <H3>Escala a una persona cuando hace falta</H3>
          <P>
            Si detecta una consulta delicada, una reclamación o cualquier situación que
            requiere trato humano, pasa la conversación a tu equipo con todo
            el historial ya recogido, para que la persona no tenga que repetir nada.
          </P>

          <H2>¿Es complicado de configurar?</H2>
          <P>
            No: está funcionando en menos de 14 días desde que empezamos. Se conecta al número de WhatsApp
            que ya usa tu clínica y se entrena con la información que ya tienes —
            tratamientos, precios, horarios — sin que tengas que crear nada desde cero.
          </P>
          <P>
            Tampoco hay que formar a tu equipo en un sistema complejo: lo que le toca es
            retomar las conversaciones que el agente le pasa, con el historial ya recogido.
            Y, mientras se ajustan los últimos detalles, tú sigues atendiendo
            como siempre, sin interrupciones.
          </P>

          <H2>De qué depende el coste y qué retorno esperar</H2>
          <P>
            Un agente con IA en WhatsApp tiene una cuota mensual por encima de la de un bot de
            menús. Para saber si te compensa, haz la cuenta con tus números: cuántas consultas
            se quedan hoy sin respuesta a tiempo, cuántas de ellas acabarían en cita y cuánto
            vale para tu clínica un paciente que vuelve. Si el resultado supera la cuota, se
            paga solo.
          </P>
          <P>
            Así, la respuesta a
            «<InternalLink href="/blog/cuanto-cuesta-chatbot-whatsapp-clinica">¿cuánto cuesta tener un chatbot?</InternalLink>»
            sale de tus propias cifras: empieza por contar las consultas que te llegan fuera
            de horario y se quedan sin respuesta hasta el día siguiente.
          </P>
          <P>
            Una vez cubierta esa inversión, el sistema sigue generando reservas de fondo. Si quieres ver
            esa cuenta aplicada a tu clínica, con tus propios números, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            te explicamos cómo funciona el sistema y qué necesitas para ponerlo en marcha.
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
              ¿Listo para que tu clínica responda cada mensaje al instante?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántas consultas se te están
              enfriando cada mes por no recibir respuesta a tiempo — y cómo un chatbot de
              WhatsApp para tu clínica estética puede contestarlas todas, agendar citas y
              cualificar cada lead desde el primer mensaje.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero responder cada consulta →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
