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

const PATH = "/blog/gestionar-citas-clinica-estetica-whatsapp"
const DATES = articleDates("gestionar-citas-clinica-estetica-whatsapp")
const TITLE = "Cómo gestionar las citas de tu clínica estética desde WhatsApp | Cero Manual"
const DESCRIPTION =
  "Gestionar citas por WhatsApp es posible sin que el equipo esté pendiente del móvil. Te explicamos cómo automatizarlo para que funcione solo."
const HEADLINE =
  "Cómo gestionar las citas de tu clínica estética desde WhatsApp (sin que nadie esté pendiente del móvil)"

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
    q: "¿Es posible gestionar todas las citas solo por WhatsApp?",
    a: "Sí. Hoy en día WhatsApp puede ser el canal único de gestión de citas para una clínica estética: un sistema automatizado puede responder consultas, mostrar disponibilidad, confirmar la cita y enviar recordatorios, todo dentro de la misma conversación. La clínica solo recibe un aviso cuando hay que intervenir, por ejemplo si el paciente pide algo muy específico.",
  },
  {
    q: "¿Qué pasa si un paciente escribe fuera del horario de la clínica?",
    a: "Casi un 40% de las consultas que recibe una clínica llegan fuera del horario de atención. Sin automatización, esos mensajes se acumulan y se responden al día siguiente, cuando el paciente ya puede haber reservado en otra clínica. Con la gestión automatizada, el sistema responde al instante, a cualquier hora, y deja la conversación lista para que el equipo solo confirme los detalles si hace falta.",
  },
  {
    q: "¿Necesito cambiar de número de WhatsApp para automatizar la gestión de citas?",
    a: "No necesariamente. La automatización se puede integrar sobre el número de WhatsApp Business que la clínica ya utiliza, conectándolo con la agenda y el sistema de gestión. Así los pacientes siguen escribiendo al mismo número de siempre, sin notar ningún cambio salvo que ahora reciben respuesta inmediata.",
  },
  {
    q: "¿El equipo pierde el control de la agenda si se automatiza?",
    a: "Al contrario: el equipo gana visibilidad. Todas las citas que se agendan, modifican o cancelan por WhatsApp quedan reflejadas automáticamente en la agenda de la clínica, sin que nadie tenga que copiar datos a mano. El equipo deja de estar pendiente del móvil, pero mantiene el control total sobre lo que ocurre en la agenda.",
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

export default function GestionarCitasWhatsAppArticlePage() {
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
            10 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Si tuvieras que señalar el canal por el que más se comunican tus pacientes con la
            clínica, casi seguro que sería WhatsApp. Preguntan precios, piden cita, confirman
            o cancelan, preguntan si pueden cambiar el horario... y todo eso llega al mismo
            chat, mezclado, durante todo el día.
          </P>
          <P>
            El problema no es que los pacientes usen WhatsApp — eso es una ventaja. El
            problema es que, para que funcione como sistema de gestión de citas, alguien del
            equipo tiene que estar mirando el móvil constantemente: respondiendo, agendando a
            mano, recordando confirmar, avisando de cambios. Y eso, con la clínica llena, es
            casi imposible de sostener.
          </P>
          <P>
            En este artículo vas a ver por qué WhatsApp se ha convertido en la recepción real
            de tu clínica, qué problemas genera gestionarlo todo a mano, y cómo puedes
            automatizar la gestión de citas para que funcione sola, sin que nadie tenga que
            estar pendiente del móvil todo el día.
          </P>

          <H2>Por qué WhatsApp se ha convertido en la recepción de tu clínica</H2>
          <P>
            Hace unos años, la gestión de citas pasaba sobre todo por el teléfono: el paciente
            llamaba, alguien del equipo cogía el teléfono y agendaba la cita en el momento.
            Hoy esa dinámica ha cambiado por completo. La mayoría de pacientes prefieren
            escribir antes que llamar, y WhatsApp es, con diferencia, el canal que eligen.
          </P>
          <P>
            No es casualidad: los mensajes de WhatsApp se leen entre un 95% y un 98% de las
            veces, frente a porcentajes mucho más bajos en email o redes sociales. Para el
            paciente, escribir por WhatsApp es rápido, cómodo y no requiere esperar al
            horario de oficina. Para la clínica, sin embargo, eso significa que la "recepción"
            ya no tiene horario: los mensajes llegan a cualquier hora, todos los días.
          </P>
          <P>
            El resultado es que, sin darse cuenta, muchas clínicas han convertido WhatsApp en
            su principal canal de gestión de citas — pero siguen gestionándolo con los mismos
            recursos y el mismo tiempo que antes dedicaban al teléfono.
          </P>

          <H2>El problema de gestionar citas manualmente por WhatsApp</H2>
          <P>
            Cuando la gestión de citas por WhatsApp se hace a mano, cada mensaje que llega
            implica una serie de pasos: leer el mensaje, consultar la agenda, responder con la
            disponibilidad, esperar la confirmación del paciente, anotar la cita en el sistema
            y, más adelante, acordarse de enviar un recordatorio. Multiplica eso por decenas
            de conversaciones al día y es fácil que algo se quede a medias.
          </P>
          <P>
            Además, este tipo de gestión depende de que siempre haya alguien disponible para
            responder. Si la persona encargada está atendiendo a un paciente, en una reunión o
            simplemente fuera de horario, los mensajes se quedan sin respuesta. Y como hemos
            visto, un paciente que no recibe respuesta rápida tiende a buscar otra clínica.
          </P>
          <P>
            A esto se suma el riesgo de errores: citas duplicadas, horarios mal anotados,
            pacientes que confirman por un canal y se les agenda en otro... pequeños fallos
            que, sumados, generan huecos en la agenda y pacientes descontentos.
          </P>

          <H2>Qué puedes automatizar en la gestión de citas por WhatsApp</H2>
          <P>
            La buena noticia es que la mayor parte de este proceso se puede automatizar sin
            que el paciente note nada raro, salvo que recibe respuesta al instante. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            puede encargarse de responder las preguntas más frecuentes sobre tratamientos,
            precios y horarios, mostrar la disponibilidad real de la agenda, agendar la cita
            directamente y enviar la confirmación al paciente, todo dentro de la misma
            conversación de WhatsApp.
          </P>
          <P>
            También se pueden automatizar los recordatorios antes de la cita, las
            confirmaciones de asistencia, y la gestión de cambios o cancelaciones: si un
            paciente escribe para mover su cita, el sistema puede ofrecerle directamente los
            huecos disponibles y reagendar sin que nadie del equipo tenga que intervenir.
          </P>
          <P>
            Lo que no se automatiza son las conversaciones que realmente requieren criterio
            humano: dudas médicas complejas, situaciones especiales o pacientes que prefieren
            hablar con una persona. En esos casos, el sistema deriva la conversación al equipo
            de forma ordenada, con todo el contexto ya recogido.
          </P>

          <H2>Cómo funciona la automatización paso a paso</H2>
          <P>
            En la práctica, el proceso suele funcionar así: el paciente escribe por WhatsApp
            preguntando por un tratamiento o pidiendo cita. El sistema responde de inmediato,
            resuelve sus dudas básicas y le ofrece los huecos disponibles según la agenda real
            de la clínica.
          </P>
          <P>
            Cuando el paciente elige un horario, la cita queda reservada automáticamente en la
            agenda y el paciente recibe la confirmación por el mismo chat. Uno o dos días
            antes de la cita, el sistema envía un recordatorio automático y, si el paciente
            necesita cambiarla, puede hacerlo directamente desde la conversación.
          </P>
          <P>
            Si en algún momento la conversación requiere intervención del equipo —por ejemplo,
            una pregunta médica específica— el sistema avisa y traslada toda la información ya
            recogida, para que la persona del equipo no tenga que empezar la conversación de
            cero.
          </P>

          <H2>Cuánto tiempo libera tu equipo al automatizar WhatsApp</H2>
          <P>
            El impacto de automatizar la gestión de citas no se mide solo en agenda llena,
            sino también en el tiempo que el equipo deja de dedicar a tareas repetitivas. Cada
            mensaje que antes requería leer, consultar la agenda, responder y anotar a mano
            pasa a resolverse solo, en segundos.
          </P>
          <P>
            Esto es especialmente importante teniendo en cuenta que, como decíamos, alrededor
            de un 40% de las consultas llegan fuera del horario de la clínica, y que la
            probabilidad de perder un lead que no recibe respuesta en los primeros 5 minutos
            puede llegar al 80%. Automatizando la gestión por WhatsApp, esas consultas dejan
            de depender de que alguien esté disponible justo en ese momento.
          </P>
          <P>
            Si quieres ver cómo se aplicaría esto a la gestión diaria de tu clínica, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            te explicamos cómo se configura paso a paso y qué resultados puedes esperar desde
            el primer mes.
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
              ¿Quieres que tu agenda se gestione sola desde WhatsApp?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos cómo un agente de WhatsApp puede responder, agendar, confirmar y
              recordar las citas de tu clínica las 24 horas, sin que tu equipo tenga que estar
              pendiente del móvil.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero automatizar la gestión de citas →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
