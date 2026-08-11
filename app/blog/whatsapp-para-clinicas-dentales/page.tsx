import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"

const PATH = "/blog/whatsapp-para-clinicas-dentales"
const TITLE = "WhatsApp para clínicas dentales: cómo usarlo para captar y retener pacientes | Cero Manual"
const DESCRIPTION =
  "WhatsApp es el canal más usado por los pacientes dentales. Te explicamos cómo usarlo para captar, confirmar citas y reactivar pacientes inactivos."
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
    publishedTime: "2026-06-11T00:00:00.000Z",
    modifiedTime: "2026-06-11T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Por qué WhatsApp es mejor que el email para comunicarme con mis pacientes?",
    a: "Porque la tasa de apertura de WhatsApp es del 95-98%, frente al 20-25% del email. Un recordatorio o una respuesta enviada por WhatsApp tiene muchas más probabilidades de ser vista —y vista a tiempo— que un correo, que a menudo se queda sin abrir durante días o acaba en spam.",
  },
  {
    q: "¿Puedo usar mi número de WhatsApp normal para la clínica?",
    a: "Puedes, pero a medida que crece el volumen de mensajes se vuelve difícil de gestionar desde un móvil personal. La mayoría de clínicas dentales pasan a WhatsApp Business, que permite respuestas rápidas, catálogos y mensajes automáticos básicos, y que es la base sobre la que se conecta un agente de WhatsApp más avanzado cuando el volumen lo justifica.",
  },
  {
    q: "¿Cómo evito que WhatsApp se convierta en una carga para mi equipo?",
    a: "El problema no es WhatsApp en sí, sino la cantidad de mensajes repetitivos: preguntas sobre precios, horarios, confirmaciones de cita. Automatizar esas respuestas —dejando que tu equipo se centre en las conversaciones que realmente requieren su criterio— es lo que evita que WhatsApp se convierta en una fuente constante de interrupciones.",
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
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
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
            Si tuvieras que elegir un solo canal para comunicarte con tus pacientes, lo más
            probable es que ya lo estés usando: WhatsApp. Es donde los pacientes preguntan
            precios, confirman citas, piden cambios de horario y, cada vez más, donde esperan
            que su clínica dental les responda.
          </P>
          <P>
            El problema no es WhatsApp, sino la gestión manual. Cuando cada mensaje depende de
            que alguien del equipo lo lea, lo responda y lo siga, es fácil que algunos se
            queden sin contestar, que las confirmaciones de cita se hagan tarde o que los
            pacientes que llevan tiempo sin venir simplemente se olviden.
          </P>
          <P>
            En este artículo vas a ver por qué WhatsApp es el canal favorito de los pacientes
            dentales, cómo usarlo para captar pacientes nuevos, reducir no-shows y reactivar a
            los que dejaron de venir —y cuándo tiene sentido empezar a automatizar parte de esa
            gestión.
          </P>

          <H2>Por qué WhatsApp es el canal favorito de los pacientes dentales</H2>
          <P>
            La razón es sencilla: es donde ya están. WhatsApp tiene una tasa de apertura del
            95-98%, muy por encima del 20-25% del email, y los mensajes se leen en minutos, no
            en días. Para un paciente, escribir por WhatsApp es tan natural como escribirle a
            un amigo —y espera una respuesta con esa misma rapidez.
          </P>
          <P>
            Esto convierte a WhatsApp en el canal donde se resuelven la mayoría de las
            interacciones cotidianas de una clínica dental: preguntas sobre precios y
            tratamientos, confirmación de citas, cambios de horario y seguimiento después de
            una visita. Es, en la práctica, la centralita de la clínica.
          </P>
          <P>
            El reto es que ese volumen de mensajes —especialmente si la clínica recibe
            consultas también por la noche o el fin de semana, que representan hasta un 40% del
            total— puede desbordar fácilmente a un equipo que también está atendiendo
            pacientes en consulta.
          </P>

          <H2>Cómo usar WhatsApp para captar pacientes nuevos</H2>
          <P>
            Cuando alguien encuentra tu clínica —por Google, por Instagram o por
            recomendación— y decide escribir, ese primer mensaje por WhatsApp es el momento
            más importante de todo el proceso de captación. Es la primera impresión real,
            más allá de la web o las reseñas.
          </P>
          <P>
            Una respuesta rápida, clara y cercana en ese primer mensaje —que resuelva la duda
            principal (precio, disponibilidad, ubicación) y proponga directamente un siguiente
            paso, como una cita o una valoración— es lo que convierte un contacto curioso en
            un paciente que reserva.
          </P>
          <P>
            El problema es que, si esa primera respuesta tarda en llegar, la probabilidad de
            perder ese lead crece muy rápido —hasta un 80% si pasan más de 5 minutos sin
            respuesta—. Por eso un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>{" "}
            que responda al instante, a cualquier hora, puede marcar la diferencia entre captar
            ese paciente o que escriba a la siguiente clínica de la lista.
          </P>

          <H2>Confirmación de citas y reducción de no-shows por WhatsApp</H2>
          <P>
            Las citas que no se presentan —entre un 12% y un 19% del total en una clínica
            dental media— son uno de los costes más silenciosos del día a día: un hueco vacío
            en la agenda que ya no se puede recuperar.
          </P>
          <P>
            WhatsApp es el canal ideal para reducirlas porque permite una confirmación activa:
            un mensaje 24 horas antes de la cita y otro un par de horas antes, pidiendo que el
            paciente confirme, cancele o reprograme. A diferencia de un recordatorio pasivo,
            esto convierte el aviso en un compromiso explícito.
          </P>
          <P>
            Y si un paciente no responde o cancela, ese aviso temprano da a tu equipo margen
            para ofrecer ese hueco a otro paciente en lista de espera, en lugar de descubrir el
            hueco vacío cuando ya es demasiado tarde para llenarlo.
          </P>

          <H2>Reactivación de pacientes inactivos por WhatsApp</H2>
          <P>
            Toda clínica dental tiene una base de pacientes que, en algún momento, dejaron de
            venir. No porque estuvieran descontentos, sino porque la revisión o la limpieza
            pendiente simplemente se quedó en el olvido. Cada uno de esos pacientes representa,
            de media, un valor de vida (LTV) de unos 3.000€.
          </P>
          <P>
            Un mensaje de WhatsApp bien planteado —recordando que toca revisión, sin tono
            comercial agresivo, y con la opción de agendar directamente desde el chat— suele
            ser suficiente para que una parte de esos pacientes vuelva. No hace falta una
            campaña de descuentos: muchas veces basta con el recordatorio.
          </P>
          <P>
            Hacerlo de forma manual, paciente por paciente, es la razón por la que casi nunca
            se hace de forma sistemática. Pero es uno de los ingresos más fáciles de recuperar,
            porque ese paciente ya conoce tu clínica y ya confió en ella antes.
          </P>

          <H2>Cuándo automatizar WhatsApp en tu clínica dental</H2>
          <P>
            No es necesario automatizar todo de golpe. La señal más clara de que ha llegado el
            momento es cuando empiezas a notar que algunos mensajes tardan en contestarse, que
            las confirmaciones de cita se hacen de forma irregular, o que la reactivación de
            pacientes inactivos es algo que «algún día habría que hacer» pero nunca se hace.
          </P>
          <P>
            En ese punto, automatizar la primera respuesta, las confirmaciones de cita y la
            reactivación de pacientes con un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>{" "}
            no sustituye a tu equipo: libera su tiempo de las tareas repetitivas para que se
            dedique a lo que realmente necesita trato humano, mientras WhatsApp deja de ser una
            fuente de mensajes pendientes y se convierte en un canal que trabaja para la
            clínica las 24 horas.
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
              salen de tu agenda en el momento exacto y gestionan la respuesta del paciente,
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
