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
const TITLE = "WhatsApp Business para clínicas estéticas: cómo sacarle partido | Cero Manual"
const DESCRIPTION =
  "WhatsApp Business es la herramienta más usada en clínicas estéticas. Te explicamos cómo configurarlo bien y cuándo automatizarlo."
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
    a: "La app de WhatsApp Business es gratuita, se instala en un móvil y la usa una persona a la vez: sirve para clínicas pequeñas que reciben pocos mensajes al día. La API no tiene interfaz propia, permite que varias personas — o un sistema automático — gestionen la conversación a la vez, y es la base sobre la que se construyen los chatbots y las respuestas automáticas.",
  },
  {
    q: "¿Por qué WhatsApp es tan importante para una clínica estética?",
    a: "Porque es donde están tus pacientes. Los mensajes de WhatsApp tienen una tasa de apertura del 95-98%, muy por encima de cualquier otro canal. Además, hasta un 40% de las consultas llegan fuera del horario de la clínica — y si alguien no recibe respuesta en los primeros 5 minutos, la probabilidad de perder ese lead puede llegar al 80%.",
  },
  {
    q: "¿Puedo seguir usando WhatsApp Business app si ya me funciona bien?",
    a: "Sí, sin problema, mientras el volumen de mensajes sea manejable y siempre haya alguien disponible para responder rápido, incluyendo fuera de horario. El momento de plantearse un cambio es cuando empiezas a notar que los mensajes se acumulan, las respuestas tardan o se os escapan consultas — ahí es donde automatizar empieza a tener sentido.",
  },
  {
    q: "¿Automatizar WhatsApp hace que las respuestas suenen robóticas?",
    a: "No tiene por qué. Un sistema bien configurado responde con el mismo tono que usaría tu recepción, resuelve las preguntas más habituales — precios, horarios, disponibilidad — y solo deriva a una persona cuando la conversación lo requiere de verdad. La mayoría de pacientes no nota la diferencia, solo nota que les contestan al momento.",
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
            Si hay un canal por el que pasan casi todas las conversaciones con tus
            pacientes, es WhatsApp. Preguntas sobre precios, peticiones de cita, dudas antes
            de un tratamiento, cambios de última hora — todo llega ahí, a cualquier hora del
            día.
          </P>
          <P>
            El problema es que ese mismo canal, que es una ventaja enorme, se convierte en
            una carga cuando alguien tiene que estar pendiente del móvil constantemente:
            durante el tratamiento de un paciente, fuera de horario, los fines de semana.
            Cada mensaje que tarda en contestarse es, potencialmente, una cita que se va a
            otra clínica.
          </P>
          <P>
            En este artículo vas a ver qué diferencia hay entre WhatsApp normal y WhatsApp
            Business, cómo configurarlo correctamente para tu clínica, dónde está el límite
            de lo que se puede gestionar a mano y cuándo tiene sentido dar el paso a
            automatizarlo.
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
            Para una clínica estética, esto supone una diferencia importante respecto a
            usar un WhatsApp personal: los pacientes ven un perfil profesional, con
            información clara sobre cuándo pueden esperar respuesta, y tu equipo gana
            herramientas básicas para no perder el hilo de cada conversación.
          </P>
          <P>
            Aun así, sigue siendo una app pensada para que la use una persona desde un
            único dispositivo. Esa es precisamente la limitación que, más adelante,
            empieza a notarse a medida que crece el volumen de mensajes.
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
            único dispositivo — y normalmente una única persona — intentando responder a
            todo.
          </P>
          <P>
            Hasta un 40% de las consultas de una clínica llegan fuera del horario habitual
            de atención. Si nadie puede responder en ese momento, esos mensajes se quedan
            en espera hasta el día siguiente — y para entonces, una parte de esos pacientes
            ya ha escrito a otra clínica.
          </P>
          <P>
            El dato que más debería preocupar es este: si un lead no recibe respuesta en
            los primeros 5 minutos, la probabilidad de perderlo puede llegar al 80%. Por
            muy bien organizado que esté tu equipo, es prácticamente imposible garantizar
            ese tiempo de respuesta las 24 horas del día con una sola persona pendiente del
            móvil.
          </P>

          <H2>Cuándo tiene sentido automatizar WhatsApp</H2>
          <P>
            Automatizar no significa sustituir a tu equipo, sino cubrir los huecos que el
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
            El objetivo no es que el paciente hable con un robot, sino que reciba una
            respuesta inmediata las 24 horas del día — y que, cuando llega el momento de
            agendar o resolver algo más complejo, todo esté ya listo para que tu equipo
            continúe sin fricción.
          </P>

          <H2>WhatsApp Business API vs WhatsApp Business app</H2>
          <P>
            La app de WhatsApp Business funciona en un móvil, la usa una persona a la vez y
            es gratuita. Es perfecta para empezar y para clínicas con un volumen de
            mensajes manejable.
          </P>
          <P>
            La API de WhatsApp Business es distinta: no tiene una interfaz propia, sino que
            permite conectar WhatsApp con otros sistemas — un CRM, un calendario, un agente
            con inteligencia artificial. Es la tecnología que hace posible que varias
            personas, o un sistema automático, gestionen conversaciones a la vez sin
            depender de un único móvil.
          </P>
          <P>
            La pregunta no es cuál es «mejor» en abstracto, sino cuál corresponde al
            momento de tu clínica. Si te identificas con las limitaciones del apartado
            anterior, la API — combinada con un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp con IA
            </InternalLink>{" "}
            — es el siguiente paso natural para dejar de perder pacientes por no llegar a
            tiempo a cada conversación.
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
