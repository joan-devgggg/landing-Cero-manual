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

const PATH = "/blog/automatizacion-clinicas-dentales"
const DATES = articleDates("automatizacion-clinicas-dentales")
const TITLE = "Automatización para clínicas dentales | Cero Manual"
const DESCRIPTION =
  "La automatización en clínicas dentales reduce no-shows, recupera pacientes inactivos y responde leads 24/7. Descubre por dónde empezar. Reserva tu auditoría."
const HEADLINE =
  "Automatización para clínicas dentales: qué puedes automatizar hoy y por dónde empezar"

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
    q: "¿Qué tareas de mi clínica dental puedo automatizar primero?",
    a: "Las que más impacto tienen y menos esfuerzo requieren: la confirmación de citas por WhatsApp y la respuesta a leads fuera de horario. La primera ataca las citas a las que el paciente no se presenta; la segunda, las consultas que llegan por la noche o en fin de semana. Las dos funcionan sobre el número de WhatsApp que la clínica ya tiene.",
  },
  {
    q: "¿La automatización sustituye a mi equipo de recepción?",
    a: "No, lo libera. La automatización se encarga de las tareas repetitivas — recordatorios, primeras respuestas, seguimientos — para que tu equipo dedique su tiempo a lo que requiere trato humano: los pacientes en consulta y los casos complejos. Las decisiones que no puede tomar un sistema siguen en manos del equipo.",
  },
  {
    q: "¿Qué necesito para empezar a automatizar mi clínica?",
    a: "Básicamente, el número de WhatsApp Business de la clínica y la información que ya tienes: tratamientos, horarios y política de citas. El agente se conecta a ese mismo número, responde a los pacientes, les agenda la cita —en tu programa de gestión si se deja conectar, o en un software a medida si no— y pasa a una persona del equipo los casos delicados. El cambio se nota en el día a día: menos llamadas repetitivas y menos huecos vacíos.",
  },
  {
    q: "¿Por dónde debería empezar si nunca he automatizado nada en mi clínica?",
    a: "Por una sola tarea. Empieza por la confirmación automática de citas o por la respuesta a leads fuera de horario — son las dos que más se notan en el día a día. Si tienes una base de pacientes inactivos sin trabajar, la reactivación también es un buen primer paso. Una vez que veas el impacto, añadir la siguiente tarea es mucho más sencillo.",
  },
  {
    q: "¿Es muy caro implementar IA en una clínica dental pequeña?",
    a: "No tanto como parece. Una clínica pequeña no necesita un desarrollo a medida ni un equipo técnico propio: hay sistemas ya preparados que se ponen en marcha sobre el WhatsApp de la clínica en menos de 14 días, con una cuota mensual como la de cualquier otra herramienta de gestión. Y al empezar por una sola tarea, la inversión inicial es pequeña y el retorno se ve pronto en los no-shows evitados y las consultas atendidas.",
  },
  {
    q: "¿Los pacientes notan que hablan con un sistema automatizado?",
    a: "Sí, porque el sistema se presenta como asistente virtual de la clínica: el Reglamento europeo de IA obliga a informar de que se está hablando con una IA. Lo que el paciente valora es recibir una respuesta rápida y útil. Lo habitual es que el sistema resuelva las consultas repetitivas (horarios, precios, disponibilidad) y que el paciente pueda pasar a una persona del equipo en cualquier momento si lo pide o si el caso lo requiere.",
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

export default function AutomatizacionClinicasDentalesArticlePage() {
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
            11 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            En una clínica dental puedes automatizar hoy cuatro tareas: la confirmación y el
            recordatorio de citas, la primera respuesta a quien escribe preguntando, la
            reactivación de pacientes inactivos y el seguimiento después del tratamiento. Si
            nunca has automatizado nada, empieza por una sola, la que más te esté costando
            ahora, y añade la siguiente cuando la primera ya funcione.
          </P>
          <P>
            Una clínica con una sola sede puede ponerlo en marcha en menos de 14 días, con
            herramientas de inteligencia artificial y sin contratar un equipo técnico. Lo que
            cuesta no hacerlo se ve en la agenda: citas a las que el paciente no se presenta y
            pacientes que dejaron de venir.
          </P>

          <H2>Qué aporta la inteligencia artificial a la automatización de tu clínica dental</H2>
          <P>
            La IA aporta una cosa concreta: que los mensajes automáticos dejen de ser fijos y
            entiendan lo que el paciente pregunta. Son varias funciones que se activan por
            separado, según lo que más falte en tu clínica.
          </P>
          <P>
            Las más habituales son responder preguntas frecuentes, gestionar la agenda
            (confirmaciones, recordatorios, huecos libres) y{" "}
            <InternalLink href="/blog/mejor-crm-clinicas-dentales">
              hacer seguimiento de pacientes
            </InternalLink>{" "}
            con recordatorios de revisión o campañas de reactivación.
          </P>
          <P>
            La diferencia con un sistema de respuestas cerradas se nota en cuanto el paciente
            escribe con sus palabras: «¿hacéis blanqueamientos?», «¿tenéis hueco esta
            semana?». En lugar de un menú de opciones, recibe una respuesta a lo que ha
            preguntado.
          </P>

          <H2>Qué tareas de una clínica dental se pueden automatizar</H2>
          <P>
            El diagnóstico y el trato con el paciente en consulta siguen siendo cosa de
            personas. Lo que se automatiza son las tareas repetitivas, las que se hacen igual
            cita tras cita:
          </P>
          <P>
            <strong>Confirmación y recordatorio de citas.</strong> El aviso antes de cada cita,
            con opción de confirmar, cancelar o reprogramar.
          </P>
          <P>
            <strong>Primera respuesta a leads.</strong> El mensaje que recibe alguien que
            escribe preguntando por precios, disponibilidad o un tratamiento, especialmente
            fuera del horario de la clínica.
          </P>
          <P>
            <strong>Reactivación de pacientes inactivos.</strong> El contacto con pacientes
            que no han vuelto en meses, para recordarles una revisión o una limpieza
            pendiente.
          </P>
          <P>
            <strong>Seguimiento post-tratamiento.</strong> El mensaje de cortesía después de
            un tratamiento, que también sirve para detectar problemas a tiempo y pedir
            reseñas.
          </P>
          <P>
            Las cuatro las hace hoy, probablemente, una persona de tu equipo a mano entre
            paciente y paciente. Un sistema puede hacerlas todos los días sin saltarse ninguna.
          </P>

          <H2>Automatizar la confirmación de citas</H2>
          <P>
            Es el punto de partida más habitual porque el impacto es rápido y se mide
            fácilmente. Un sistema de recordatorios envía un aviso por
            WhatsApp 24 horas antes de la cita y otro 2 horas antes, pidiendo confirmación
            activa.
          </P>
          <P>
            Frente a un recordatorio pasivo, cuando el paciente responde «sí» o confirma con
            un botón, ese aviso se convierte en un compromiso. Y si alguien no responde al
            primer aviso, sabes con antelación que ese hueco puede quedar vacío y tienes
            margen para actuar.
          </P>
          <P>
            WhatsApp es un canal que los pacientes miran a diario y, a diferencia del SMS,
            permite contestar en la misma conversación: por eso{" "}
            <InternalLink href="/blog/whatsapp-para-clinicas-dentales">
              WhatsApp para clínicas dentales
            </InternalLink>{" "}
            se ha convertido en el canal de referencia. Así se trabaja para{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              reducir los no-shows
            </InternalLink>{" "}
            sin que nadie de tu equipo tenga que hacer una llamada de recordatorio.
          </P>

          <H2>Automatizar la respuesta a leads fuera de horario</H2>
          <P>
            Muchas de las consultas de una clínica dental llegan fuera del horario de
            atención, por la noche o en fin de semana. Cada una de esas consultas es un paciente potencial que, si no
            recibe respuesta rápido, probablemente escriba al siguiente resultado de Google.
          </P>
          <P>
            Y no pasa solo de noche: muchas llegan en plena jornada, mientras el equipo está
            con un paciente y nadie puede coger el teléfono. Para esas llamadas existe también{" "}
            <InternalLink href="/blog/que-es-un-agente-de-voz-ia-para-clinicas">
              el agente de voz con IA para clínicas
            </InternalLink>
            .
          </P>
          <P>
            Un asistente automatizado por WhatsApp puede responder al instante: resolver
            preguntas frecuentes sobre precios, tratamientos y horarios, recoger los datos
            básicos del paciente, y dejar la consulta lista para que tu equipo la retome a
            primera hora — o incluso proponer una cita directamente en la agenda.
          </P>
          <P>
            Así funciona en la práctica el{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>
            .
          </P>

          <H2>Automatizar la reactivación de pacientes inactivos</H2>
          <P>
            Cada clínica dental tiene una base de pacientes que dejaron de venir porque la vida
            se interpuso entre ellos y su próxima revisión, y que podrían seguir viniendo a
            revisiones y tratamientos durante años.
          </P>
          <P>
            Reactivarlos uno por uno con llamadas es lento y, en la práctica, casi nunca se
            hace de forma sistemática. Un sistema automatizado, conectado a tu programa de
            gestión si lo permite o alimentado con una exportación de tu base de pacientes,
            puede identificar a los pacientes que llevan entre 6 y 12 meses sin cita y enviarles un mensaje por
            WhatsApp recordándoles que toca revisión, con la opción de agendar directamente
            desde el mensaje.
          </P>
          <P>
            Muchas veces basta con el recordatorio en sí, sin descuentos, porque el paciente
            simplemente se había olvidado.
          </P>

          <H2>Por dónde empezar si nunca has automatizado nada</H2>
          <P>
            Empieza por una sola tarea, la que más te esté costando ahora mismo, y deja que
            funcione unas semanas antes de añadir la siguiente.
          </P>
          <P>
            Si tu mayor problema son los huecos vacíos en la agenda, empieza por la
            confirmación de citas. Si lo que más te preocupa son las consultas que llegan
            por la noche o el fin de semana, empieza por la respuesta automática a esas consultas
            con el{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>
            . Y si tienes una base de pacientes inactivos sin trabajar, empieza por la
            reactivación. En los tres casos, el agente trabaja sobre el número de WhatsApp que
            la clínica ya tiene, así que tus pacientes siguen escribiendo donde siempre. Si
            todo pasa por el móvil de la clínica, aquí tienes cómo{" "}
            <InternalLink href="/blog/automatizar-whatsapp-clinica-dental">
              automatizar el WhatsApp de tu clínica dental
            </InternalLink>{" "}
            paso a paso.
          </P>
          <P>
            Cuando veas el primer resultado, el resto de tareas se añaden sobre la misma base,
            sin volver a empezar de cero.
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
              ¿Listo para automatizar tu primera tarea?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Empieza por la confirmación de citas, que es la que menos cuesta montar y la
              primera que se nota en la agenda. Los{" "}
              <InternalLink href="/recordatorios-automaticos-citas">
                recordatorios automáticos por WhatsApp
              </InternalLink>{" "}
              salen solos y gestionan la respuesta del paciente.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver los recordatorios automáticos →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
