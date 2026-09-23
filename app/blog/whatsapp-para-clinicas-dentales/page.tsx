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

const PATH = "/blog/whatsapp-para-clinicas-dentales"
const DATES = articleDates("whatsapp-para-clinicas-dentales")
const TITLE = "WhatsApp para clínicas dentales: cómo usarlo | Cero Manual"
const DESCRIPTION =
  "Guía de WhatsApp para clínicas dentales: cómo usarlo para captar pacientes, confirmar citas y reactivar a los que llevan tiempo sin venir."
const HEADLINE = "WhatsApp para clínicas dentales: cómo usarlo para captar y retener más pacientes"

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
    q: "¿Por qué WhatsApp es mejor que el email para comunicarme con mis pacientes?",
    a: "Porque WhatsApp es una aplicación que los pacientes abren a diario y en la que están acostumbrados a contestar. Un recordatorio o una respuesta enviada por WhatsApp tiene muchas más probabilidades de ser vista —y vista a tiempo— que un correo, que a menudo se queda sin abrir durante días o acaba en spam.",
  },
  {
    q: "¿Puedo usar mi número de WhatsApp normal para la clínica?",
    a: "Puedes, pero a medida que crece el volumen de mensajes se vuelve difícil de gestionar desde un móvil personal. Lo habitual es pasar a WhatsApp Business, que permite respuestas rápidas, catálogos y mensajes automáticos básicos, y que es la base sobre la que se conecta un agente de WhatsApp más avanzado cuando el volumen lo justifica.",
  },
  {
    q: "¿Cómo evito que WhatsApp se convierta en una carga para mi equipo?",
    a: "Lo que carga al equipo es la cantidad de mensajes repetitivos: preguntas sobre precios, horarios, confirmaciones de cita. Automatizar esas respuestas —dejando que tu equipo se centre en las conversaciones que realmente requieren su criterio— es lo que evita que WhatsApp se convierta en una fuente constante de interrupciones.",
  },
  {
    q: "¿Es seguro automatizar WhatsApp para temas relacionados con la salud de los pacientes?",
    a: "Sí, siempre que la automatización se limite a información general —precios, horarios, confirmación y recordatorio de citas, disponibilidad— y no a datos clínicos sensibles. Cualquier consulta sobre el estado de salud del paciente debe derivarse siempre a tu equipo o al profesional correspondiente.",
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

export default function WhatsappParaClinicasDentalesArticlePage() {
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
            En una clínica dental, WhatsApp sirve para captar pacientes nuevos respondiendo
            rápido a su primer mensaje, para reducir no-shows con confirmaciones activas antes
            de cada cita y para reactivar a los pacientes que llevan tiempo sin venir. Cuando
            el volumen de mensajes desborda al equipo, esas tareas se pueden automatizar por
            partes.
          </P>
          <P>
            WhatsApp es donde los pacientes preguntan precios, confirman citas, piden cambios
            de horario y esperan que su clínica dental les responda. Cuando cada mensaje
            depende de que alguien del equipo lo lea, lo responda y lo siga, es fácil que
            algunos se queden sin contestar o que las confirmaciones de cita se hagan tarde.
          </P>

          <H2>Por qué WhatsApp encaja tan bien con los pacientes dentales</H2>
          <P>
            La razón es sencilla: es donde ya están. Es la aplicación que tienen abierta a lo
            largo del día, y un mensaje ahí se suele ver en minutos, mientras que un email
            puede esperar días. Para un paciente, escribir por WhatsApp es tan natural como escribirle a
            un amigo —y espera una respuesta con esa misma rapidez.
          </P>
          <P>
            Por eso en WhatsApp se resuelven muchas de las interacciones cotidianas de una
            clínica dental: preguntas sobre precios y tratamientos, confirmación de citas,
            cambios de horario y seguimiento después de una visita.
          </P>
          <P>
            Ese volumen de mensajes —especialmente si la clínica recibe{" "}
            <InternalLink href="/blog/automatizar-whatsapp-clinica-dental">
              consultas también por la noche o el fin de semana
            </InternalLink>
            — puede desbordar fácilmente a un equipo que también está atendiendo pacientes
            en consulta.
          </P>

          <H2>Cómo usar WhatsApp para captar pacientes nuevos</H2>
          <P>
            Cuando alguien encuentra tu clínica —por Google, por Instagram o por
            recomendación— y decide escribir, ese primer mensaje por WhatsApp es el momento
            más importante de todo el proceso de captación. Es la primera impresión real,
            más allá de la web o las reseñas.
          </P>
          <P>
            Una respuesta rápida y clara en ese primer mensaje —que resuelva la duda
            principal (precio, disponibilidad, ubicación) y proponga directamente un siguiente
            paso, como una cita o una valoración— es lo que convierte un contacto curioso en
            un paciente que reserva.
          </P>
          <P>
            Si esa primera respuesta tarda en llegar, es fácil que ese lead se enfríe o escriba
            a otra clínica. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>{" "}
            le responde al instante, a cualquier hora.
          </P>

          <H2>Confirmación de citas y reducción de no-shows por WhatsApp</H2>
          <P>
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              Las citas que no se presentan
            </InternalLink>{" "}
            son uno de los costes más silenciosos del día a día en una clínica dental: un
            hueco vacío en la agenda que ya no se puede recuperar.
          </P>
          <P>
            WhatsApp es el canal ideal para reducirlas porque permite una confirmación activa:
            un mensaje 24 horas antes de la cita y otro un par de horas antes, pidiendo que el
            paciente confirme, cancele o reprograme. A diferencia de un recordatorio pasivo,
            esto convierte el aviso en un compromiso explícito.
          </P>
          <P>
            Y si un paciente no responde o cancela, ese aviso temprano da a tu equipo margen
            para ofrecer ese hueco a otro paciente en lista de espera.
          </P>

          <H2>Reactivación de pacientes inactivos por WhatsApp</H2>
          <P>
            Toda clínica dental tiene pacientes que dejaron de venir porque la revisión o la
            limpieza pendiente se quedó en el olvido. Cada uno de esos pacientes ya confió
            en la clínica y, con el recordatorio adecuado, puede volver.
          </P>
          <P>
            <InternalLink href="/blog/como-reactivar-pacientes-inactivos-clinica">
              Un mensaje de WhatsApp bien planteado
            </InternalLink>{" "}
            —recordando que toca revisión, sin tono
            comercial agresivo, y con la opción de agendar directamente desde el chat— suele
            ser suficiente para que una parte de esos pacientes vuelva.
          </P>
          <P>
            Hecho a mano, paciente por paciente, casi nunca se hace de forma sistemática.
          </P>

          <H2>Cuándo automatizar WhatsApp en tu clínica dental</H2>
          <P>
            No es necesario automatizar todo de golpe: la{" "}
            <InternalLink href="/blog/automatizacion-clinicas-dentales">
              inteligencia artificial en tu clínica dental
            </InternalLink>{" "}
            puede entrar por partes. La señal más clara de que ha llegado el
            momento es cuando empiezas a notar que algunos mensajes tardan en contestarse, que
            las confirmaciones de cita se hacen de forma irregular, o que la reactivación de
            pacientes inactivos es algo que «algún día habría que hacer» pero nunca se hace.
          </P>
          <P>
            En ese punto, automatizar la primera respuesta, las confirmaciones de cita y la
            reactivación de pacientes con un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>{" "}
            no sustituye a tu equipo: libera su tiempo de las tareas repetitivas para que se
            dedique a lo que realmente necesita trato humano.
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
              ¿Listo para que las confirmaciones se envíen solas?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Los{" "}
              <InternalLink href="/recordatorios-automaticos-citas">
                recordatorios automáticos por WhatsApp
              </InternalLink>{" "}
              se envían en el momento exacto antes de cada cita y gestionan la respuesta del
              paciente,
              sin que nadie de tu equipo tenga que estar pendiente del móvil.
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
