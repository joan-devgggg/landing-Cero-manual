import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import H3 from "@/components/blog/H3"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/agente-whatsapp-clinica-dental"
const DATES = articleDates("agente-whatsapp-clinica-dental")
const TITLE = "Agente de WhatsApp para clínicas dentales: qué es y cómo funciona | Cero Manual"
const DESCRIPTION =
  "Un agente de WhatsApp para clínicas dentales responde consultas, confirma citas y reduce no-shows 24/7. Descubre cómo funciona y cuánto cuesta."
const HEADLINE =
  "Agente de WhatsApp para clínicas dentales: qué es, qué hace y cómo implementarlo"

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
    q: "¿Un agente de WhatsApp puede confirmar y cancelar citas por su cuenta?",
    a: "Sí. El agente puede consultar la agenda en tiempo real, proponer huecos disponibles, confirmar la cita seleccionada por el paciente y gestionar cancelaciones o cambios de hora, todo dentro de la misma conversación de WhatsApp y sin que nadie del equipo tenga que intervenir manualmente.",
  },
  {
    q: "¿Qué pasa si un paciente pregunta algo que el agente no sabe responder?",
    a: "El agente está configurado para reconocer cuándo una consulta requiere criterio clínico o una respuesta personalizada — por ejemplo, dudas sobre un tratamiento concreto o una urgencia. En esos casos, deriva la conversación al equipo humano y deja un resumen del contexto para que la persona que retome la conversación no tenga que empezar de cero.",
  },
  {
    q: "¿Es compatible con el número de WhatsApp que ya usa la clínica?",
    a: "Sí, el agente se conecta a través de WhatsApp Business API, por lo que puede operar sobre el mismo número que ya utiliza la clínica para hablar con sus pacientes, sin necesidad de pedirles que escriban a un número nuevo ni de migrar el historial de conversaciones.",
  },
  {
    q: "¿Cuánto tiempo se tarda en tener el agente funcionando?",
    a: "La implementación suele tardar entre una y dos semanas. Ese tiempo se dedica a conectar la agenda y el WhatsApp Business de la clínica, definir los mensajes y el tono con el que el agente se dirige a los pacientes, y hacer pruebas antes de activarlo con tráfico real.",
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

export default function AgenteWhatsappClinicaDentalArticlePage() {
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
            13 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            WhatsApp se ha convertido en el canal principal de comunicación entre las clínicas
            dentales y sus pacientes. Con tasas de apertura de entre el 95% y el 98%, es donde
            los pacientes preguntan por precios, piden cita, confirman o cancelan, y resuelven
            dudas antes y después de un tratamiento.
          </P>
          <P>
            El problema es que, para que ese canal funcione, alguien tiene que estar pendiente
            de él en todo momento. Y eso no siempre es posible: alrededor del 40% de las
            consultas llegan fuera del horario de atención, y cuando un lead no recibe
            respuesta en los primeros cinco minutos, la probabilidad de perderlo frente a otra
            clínica es de hasta el 80%.
          </P>
          <P>
            En este artículo vas a aprender qué es exactamente un agente de WhatsApp para
            clínicas dentales, qué tareas puede asumir sin intervención humana, cómo funciona
            el proceso paso a paso, qué necesita tu clínica para implementarlo y cuánto cuesta
            en relación con lo que puede ahorrar y generar.
          </P>

          <H2>Qué es un agente de WhatsApp para clínicas dentales</H2>
          <P>
            Un agente de WhatsApp es un sistema basado en inteligencia artificial que mantiene
            conversaciones con los pacientes directamente desde el WhatsApp Business de la
            clínica, las 24 horas del día. A diferencia de un chatbot tradicional con
            respuestas predefinidas, entiende el lenguaje natural, mantiene el contexto de la
            conversación y puede consultar y modificar información real, como la disponibilidad
            de la agenda.
          </P>
          <P>
            Para el paciente, la experiencia es indistinguible de escribir a la clínica: manda
            un mensaje y recibe una respuesta inmediata, sin esperas y sin tener que repetir la
            información si la conversación continúa más adelante. Para la clínica, supone que
            ninguna consulta queda sin respuesta, sea la hora que sea.
          </P>

          <H2>Qué puede hacer el agente por tu clínica dental</H2>
          <P>
            El agente puede responder a las preguntas más habituales — precios orientativos,
            tratamientos disponibles, horarios, ubicación — de forma instantánea y consistente,
            sin que dependa de quién esté de guardia ese día.
          </P>
          <P>
            También puede gestionar la agenda de forma activa: proponer huecos disponibles,
            reservar una cita, modificarla o cancelarla a petición del paciente. Y puede enviar
            recordatorios automáticos antes de la cita, lo que ayuda directamente a reducir el
            porcentaje de no-shows, que en clínicas dentales se sitúa habitualmente entre el
            12% y el 19%.
          </P>
          <P>
            Por último, cualifica los leads que llegan por primera vez: identifica qué busca la
            persona, si tiene una urgencia y qué tratamiento le interesa, y deja esa información
            organizada para que el equipo pueda priorizar el seguimiento cuando sea necesario.
          </P>

          <H2>Cómo funciona paso a paso</H2>
          <P>
            Todo empieza cuando un paciente escribe al WhatsApp de la clínica, en cualquier
            momento del día. El agente recibe el mensaje, lo interpreta y responde de forma
            natural, igual que lo haría una persona del equipo de recepción.
          </P>
          <P>
            Si la consulta es sobre disponibilidad, el agente consulta la agenda en tiempo real
            y ofrece los próximos huecos libres. Si el paciente confirma uno, el agente reserva
            la cita directamente en el sistema de la clínica y envía la confirmación por
            WhatsApp.
          </P>
          <P>
            A medida que se acerca la fecha de la cita, el agente envía recordatorios
            automáticos y gestiona las respuestas: si el paciente confirma, queda registrado;
            si necesita cambiar la hora, el agente le ofrece nuevas opciones sin que nadie del
            equipo tenga que llamar o escribir manualmente.
          </P>
          <P>
            Si en algún momento la conversación requiere el criterio de una persona —una duda
            clínica concreta o una situación fuera de lo habitual—, el agente deriva la
            conversación al equipo con un resumen de lo hablado hasta ese momento.
          </P>

          <H2>Qué necesitas para implementarlo</H2>
          <P>
            Lo esencial es tener un número de WhatsApp Business activo, que es el canal por el
            que el agente se comunicará con los pacientes, y un sistema de agenda al que el
            agente pueda conectarse para consultar y modificar la disponibilidad en tiempo
            real.
          </P>
          <P>
            Antes de activarlo, se define junto con la clínica el tono de los mensajes, qué
            información puede dar el agente sobre precios y tratamientos, y en qué casos debe
            derivar la conversación a una persona. Esta configuración se ajusta durante las
            primeras semanas a partir de las conversaciones reales.
          </P>
          <P>
            Si tu clínica todavía no tiene un sistema claro para gestionar las citas que llegan
            por WhatsApp, puede ser útil ver antes cómo funciona el{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp con IA para clínicas dentales
            </InternalLink>
            , donde se detalla el proceso de puesta en marcha.
          </P>

          <H2>Cuánto cuesta y cuándo se amortiza</H2>
          <P>
            El coste de un agente de WhatsApp es una cuota mensual fija, muy por debajo del
            coste de contratar a una persona adicional para cubrir ese horario. La diferencia
            es que el agente no tiene horario: atiende también fuera de la jornada laboral, los
            fines de semana y en los momentos de mayor volumen de consultas.
          </P>
          <P>
            La amortización suele ser rápida. Si tenemos en cuenta que hasta un 80% de los
            leads que no reciben respuesta en cinco minutos se pierden, y que los recordatorios
            automáticos pueden reducir significativamente el porcentaje de no-shows —que de
            partida ronda entre el 12% y el 19%—, recuperar solo unos pocos pacientes al mes ya
            cubre el coste de la herramienta.
          </P>
          <P>
            Para ver el desglose completo —qué hace el agente con las urgencias fuera de
            horario, con los presupuestos que siguen abiertos y con el recall de revisiones—
            puedes consultar el{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>
            .
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
              ¿Y si lo ves montado sobre tu clínica?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Todo lo que acabas de leer, aplicado a una clínica dental: la urgencia de las
              once de la noche, el presupuesto de implantes que lleva tres semanas parado y la
              revisión que tocaba en marzo.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-dentales"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver el agente para clínicas dentales →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
