import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/resenas-google-clinicas-dentales"
const TITLE = "Reseñas Google clínica dental: cómo conseguirlas sin pedirlas una a una | Cero Manual"
const DESCRIPTION =
  "Las reseñas de Google son clave para captar nuevos pacientes. Te explicamos cómo conseguirlas de forma automática tras cada cita."
const HEADLINE =
  "Cómo conseguir más reseñas en Google para tu clínica dental (y que los nuevos pacientes te elijan)"

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
    q: "¿Por qué son tan importantes las reseñas de Google para una clínica dental?",
    a: "Porque son el primer filtro que aplica un paciente nuevo antes de decidir si llamar o no a una clínica. Se estima que alrededor del 70% de las decisiones de los pacientes a la hora de elegir clínica están influidas por las reseñas que encuentran online. Una clínica con pocas reseñas, o con una valoración media baja, parte con desventaja frente a otra con más opiniones y mejor puntuación, aunque ambas ofrezcan el mismo nivel de servicio.",
  },
  {
    q: "¿Por qué mis pacientes no dejan reseñas aunque salgan contentos de la consulta?",
    a: "Casi nunca es porque no quieran. Lo habitual es que, simplemente, nadie se lo pide en el momento adecuado, o se les pide de una forma que requiere demasiados pasos —buscar la clínica en Google, encontrar el botón de reseñas, escribir el texto—. Un paciente satisfecho tiene buena intención pero poca prioridad para hacerlo por iniciativa propia; si se le facilita el proceso justo después de la cita, la probabilidad de que deje la reseña aumenta mucho.",
  },
  {
    q: "¿Cuál es el mejor momento para pedir una reseña tras una cita dental?",
    a: "El momento óptimo está entre los 30 y los 60 minutos después de la cita, cuando el paciente todavía recuerda la experiencia con detalle y, si todo ha ido bien, sigue con la sensación positiva fresca. Pedirlo días después reduce mucho la tasa de respuesta, porque el recuerdo se diluye y la petición pasa a competir con el resto de notificaciones del día.",
  },
  {
    q: "¿Qué debo hacer si recibo una reseña negativa?",
    a: "Lo primero es responder siempre, de forma profesional y sin entrar en discusión pública sobre detalles clínicos. Agradecer el feedback, mostrar disposición a solucionar el problema y ofrecer un canal directo (teléfono o WhatsApp) para resolverlo fuera de la reseña suele ser suficiente. Una reseña negativa bien gestionada no solo no daña la reputación, sino que a menudo genera confianza en quienes la leen, porque demuestra que la clínica responde y se preocupa.",
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

export default function ResenasGoogleClinicasDentalesArticlePage() {
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
            Marketing para clínicas
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
            Cuando alguien busca un dentista cerca de casa, lo primero que mira no es la web de
            la clínica ni su catálogo de tratamientos: son las reseñas de Google. El número de
            opiniones y la valoración media son, para muchos pacientes nuevos, el factor que
            decide si entran a ver más información o si pasan directamente a la siguiente
            clínica de la lista.
          </P>
          <P>
            En este artículo vas a aprender por qué las reseñas de Google son tan importantes
            para una clínica dental, por qué tus pacientes contentos no las dejan aunque
            quisieran, cuál es el momento perfecto para pedirlas, cómo automatizar esa petición
            tras cada cita, y qué hacer cuando llega una reseña negativa.
          </P>

          <H2>Por qué las reseñas de Google son tan importantes para una clínica dental</H2>
          <P>
            Las reseñas de Google cumplen una función muy concreta: son la prueba social que un
            paciente nuevo necesita antes de confiar en una clínica que no conoce. Según las
            estimaciones del sector, alrededor del <strong>70% de las decisiones</strong> de los
            pacientes a la hora de elegir clínica están influidas, directa o indirectamente, por
            las reseñas que encuentran online.
          </P>
          <P>
            Además, el número y la frecuencia de las reseñas también afectan a la visibilidad de
            la clínica en el propio Google Maps y en las búsquedas locales. Una clínica con
            reseñas recientes y constantes suele aparecer mejor posicionada que una con pocas
            opiniones o con las últimas reseñas de hace años, incluso si ambas tienen una nota
            media similar.
          </P>
          <P>
            En resumen: las reseñas no son solo un "extra" de reputación, son uno de los canales
            de captación de pacientes nuevos más rentables que existen, porque no cuestan dinero
            por clic ni requieren gestionar campañas.
          </P>

          <H2>Por qué tus pacientes no dejan reseñas aunque estén contentos</H2>
          <P>
            La mayoría de las clínicas dentales tienen un alto porcentaje de pacientes
            satisfechos, pero eso casi nunca se refleja en el número de reseñas en Google. La
            razón no es la falta de satisfacción, sino la falta de fricción mínima: para dejar
            una reseña, el paciente tiene que buscar la clínica en Google, encontrar el sitio
            correcto, localizar el botón de reseñas y escribir un texto.
          </P>
          <P>
            Son varios pasos que, por sí solos, no parecen mucho, pero que en la práctica hacen
            que la mayoría de pacientes contentos simplemente no lleguen a completarlos, salvo que
            alguien se los facilite en el momento justo.
          </P>
          <P>
            A esto se suma que, salvo que algo haya ido especialmente mal, dejar una reseña no es
            algo que la mayoría de personas tengan en su lista de tareas pendientes. Es una acción
            que requiere un pequeño empujón externo para producirse.
          </P>

          <H2>El momento perfecto para pedir una reseña en una clínica dental</H2>
          <P>
            El momento ideal para pedir una reseña está entre los <strong>30 y los 60 minutos
            después de la cita</strong>. En ese rango, el paciente todavía tiene fresca la
            experiencia —la atención del equipo, la puntualidad, la explicación del tratamiento—
            y, si ha sido positiva, la sensación de satisfacción sigue activa.
          </P>
          <P>
            Pedirlo en el mismo momento de salir de la consulta puede resultar precipitado o
            incómodo, especialmente si el paciente todavía está bajo el efecto de la anestesia o
            con alguna molestia puntual. Pero esperar varios días tampoco funciona: el recuerdo se
            diluye, la petición llega entre decenas de notificaciones de otro tipo, y la tasa de
            respuesta cae drásticamente.
          </P>
          <P>
            Esa ventana de 30 a 60 minutos es, por tanto, el punto óptimo entre "todavía lo
            recuerda bien" y "ya no está pendiente de la clínica".
          </P>

          <H2>Cómo automatizar la petición de reseñas tras cada cita</H2>
          <P>
            La forma más eficaz de aprovechar esa ventana de tiempo es automatizar el envío de la
            petición de reseña por WhatsApp, justo después de que la cita quede marcada como
            completada en la agenda. Un mensaje sencillo, con un enlace directo al formulario de
            reseña de Google, agradeciendo la visita y pidiendo unos segundos para compartir su
            experiencia, es suficiente.
          </P>
          <P>
            La clave está en el canal: con una tasa de apertura de WhatsApp de entre el{" "}
            <strong>95% y el 98%</strong>, la probabilidad de que el paciente vea el mensaje en
            ese mismo momento es muy alta —mucho mayor que con un email o un SMS, que a menudo se
            quedan sin leer.
          </P>
          <P>
            Este mismo sistema automático que ya se utiliza para enviar recordatorios de citas y
            reducir no-shows puede aprovecharse para enviar, de forma programada, la petición de
            reseña tras cada cita completada —sin que nadie del equipo tenga que acordarse de
            hacerlo manualmente paciente por paciente.
          </P>

          <H2>Qué hacer con las reseñas negativas</H2>
          <P>
            Cuantas más reseñas reciba una clínica, antes o después aparecerá alguna negativa. Lo
            importante no es evitarlo a toda costa, sino saber gestionarlo: responder siempre, de
            forma profesional, agradeciendo el comentario y mostrando disposición a solucionar lo
            que haya ocurrido, sin entrar en detalles clínicos en una respuesta pública.
          </P>
          <P>
            Ofrecer un canal directo —un teléfono o un WhatsApp— para resolver el problema fuera
            de la reseña suele ser la mejor opción. Muchos pacientes que leen reseñas no esperan
            que una clínica tenga un 100% de opiniones perfectas; lo que valoran es ver que, ante
            un problema, la clínica responde y se hace cargo.
          </P>
          <P>
            Para profundizar en cómo construir un flujo completo de petición y gestión de
            reseñas, incluyendo ejemplos de mensajes y plantillas de respuesta, puedes consultar
            el artículo sobre{" "}
            <InternalLink href="/blog/como-conseguir-resenas-google-clinica-estetica">
              cómo conseguir reseñas en Google para una clínica estética
            </InternalLink>
            , cuyo proceso es directamente aplicable a una clínica dental. Automatizar esa{" "}
            <InternalLink href="/blog/como-conseguir-resenas-google-clinica-estetica">
              petición de reseñas
            </InternalLink>{" "}
            tras cada cita es, junto con los recordatorios automáticos, una de las mejoras más
            rentables que puede aplicar una clínica dental.
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
              ¿Quieres conseguir más reseñas sin esfuerzo extra?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Descubre cómo automatizar la petición de reseñas de Google tras cada cita con
              mensajes de WhatsApp.
            </p>
            <Link
              href="/blog/como-conseguir-resenas-google-clinica-estetica"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo conseguir reseñas →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
