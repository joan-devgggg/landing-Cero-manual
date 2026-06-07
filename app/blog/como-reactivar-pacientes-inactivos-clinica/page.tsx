import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/como-reactivar-pacientes-inactivos-clinica"
const TITLE = "Cómo reactivar pacientes inactivos en tu clínica | Cero Manual"
const DESCRIPTION =
  "Tienes clientes que dejaron de venir. Te explicamos cómo reactivarlos con mensajes automáticos por WhatsApp y recuperar esos ingresos perdidos."
const HEADLINE = "Cómo reactivar pacientes inactivos en tu clínica (sin llamar uno por uno)"

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
    publishedTime: "2026-06-07T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Cómo sé qué pacientes están inactivos sin revisar la agenda uno por uno?",
    a: "No hace falta que lo hagas tú a mano. Se puede cruzar el historial de tu clínica con un criterio de tiempo — por ejemplo, «no ha reservado en los últimos seis meses» — y obtener automáticamente la lista de personas que encajan. Es el mismo trabajo que harías mirando ficha por ficha, pero hecho en segundos y sin que nadie tenga que dedicarle una tarde entera.",
  },
  {
    q: "¿No es invasivo escribir a alguien que dejó de venir hace tiempo?",
    a: "No, si el mensaje está bien planteado. No es un desconocido al que abordas de la nada: es alguien que ya fue tu paciente, que ya conoció tu clínica y que, en algún momento, decidió confiar en ella. Un mensaje cercano, con su nombre y una propuesta concreta, se recibe como un gesto de atención — no como una intrusión.",
  },
  {
    q: "¿Qué tipo de mensaje funciona mejor para reactivar a un paciente?",
    a: "Los que se sienten personales y ofrecen algo concreto: mencionar su última visita, proponer una revisión o una actualización de un tratamiento que ya conoce, y dejar la puerta abierta sin presionar. Lo que peor funciona son los mensajes genéricos de «te echamos de menos» enviados igual a toda la base de datos — porque se notan, y se ignoran.",
  },
  {
    q: "¿Cuánto tiempo se tarda en ver resultados de una campaña de reactivación?",
    a: "Normalmente, los primeros resultados se ven en cuestión de días: las respuestas a un mensaje de WhatsApp suelen llegar rápido, dado que se lee entre un 95% y un 98% de las veces. A partir de ahí, convertir esas respuestas en citas es un proceso natural — no hace falta esperar semanas para empezar a notar el efecto en tu agenda.",
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
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-lg md:text-xl font-semibold leading-snug mt-10 mb-3"
      style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
    >
      {children}
    </h3>
  )
}

export default function ReactivarPacientesArticlePage() {
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
            7 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Casi cualquier clínica tiene, guardada en su agenda o su historial, una lista
            de personas que un día fueron pacientes habituales — y que, en algún momento,
            simplemente dejaron de venir. Nadie los dio de baja. Nadie decidió perderlos.
            Sencillamente, un día no volvieron a reservar, y ahí se quedó la cosa.
          </P>
          <P>
            Esa lista no es solo un dato curioso: es ingreso dormido. Cada persona de esa
            lista ya conoció tu clínica, ya confió en ella y ya pagó por un servicio — lo
            cual la sitúa a años luz de un desconocido al que tienes que convencer desde
            cero. El problema es que, para reactivarla, el canal que casi todo el mundo
            prueba primero — el email — apenas funciona.
          </P>
          <P>
            En este artículo vas a entender qué es exactamente un paciente inactivo y
            cuántos puedes tener sin saberlo, por qué el email de reactivación rinde tan
            poco, por qué WhatsApp es un canal mucho más eficaz para esto, cómo estructurar
            un mensaje que no parezca spam, y cuántos ingresos puede suponer recuperar solo
            a una parte de ellos.
          </P>

          <H2>¿Qué es un paciente inactivo y cuántos tienes sin saberlo?</H2>
          <P>
            Un paciente inactivo es, simplemente, alguien que fue cliente habitual de tu
            clínica y que, pasado un tiempo razonable — tres meses, seis, un año,
            dependiendo del tipo de tratamiento —, ha dejado de reservar sin que nadie se
            haya dado cuenta del todo.
          </P>
          <P>
            La mayoría de clínicas no tiene esta cifra a la vista. Vive enterrada en el
            historial, repartida entre cientos de fichas, sin que nadie se haya sentado a
            mirar quién dejó de venir y cuándo. Y, sin embargo, cuando se hace ese
            ejercicio, casi siempre aparece una cifra mayor de la esperada — y, con ella,
            una cantidad de ingresos que se está dejando de generar mes tras mes sin que
            nadie lo note.
          </P>

          <H2>Por qué el email de reactivación no funciona</H2>
          <P>
            El email es la opción a la que casi todo el mundo recurre primero — y la que
            peor rinde. Una campaña de reactivación por email tiene, de media, entre un 20%
            y un 25% de probabilidades de ser siquiera abierta. El resto se queda esperando
            en una bandeja de entrada saturada de promociones, o directamente acaba en la
            carpeta de spam sin que nadie llegue a verla.
          </P>
          <P>
            Y, aunque se abra, el formato no ayuda: un email de «te echamos de menos» suena
            a plantilla genérica enviada a toda la base de datos — porque, normalmente, lo
            es. No transmite la cercanía de quien recuerda quién eres y qué tratamiento te
            hiciste la última vez. Transmite, más bien, lo contrario.
          </P>

          <H2>WhatsApp como canal de reactivación: por qué funciona</H2>
          <P>
            Aquí el contraste es enorme: mientras el email se queda entre el 20% y el 25%
            de aperturas, los mensajes de WhatsApp se leen entre un 95% y un 98% de las
            veces — y, además, casi siempre en los primeros minutos. No es un canal que la
            gente revise «cuando tenga un rato»: es un canal que revisa varias veces por
            hora, casi por instinto.
          </P>
          <P>
            Y hay otra ventaja silenciosa: igual que ocurre con las consultas nuevas —
            donde casi un 40% llegan fuera del horario de la clínica —, los mensajes de
            reactivación pueden programarse y enviarse de forma automática, en el momento
            del día en que es más probable que se lean, sin que nadie de tu equipo tenga
            que sentarse a escribir uno por uno. Si quieres ver cómo se monta esto para tu
            clínica en concreto, en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            lo explicamos paso a paso.
          </P>

          <H2>Cómo estructurar un mensaje de reactivación que no parezca spam</H2>
          <H3>Personaliza con su nombre y su última visita</H3>
          <P>
            Un mensaje que empieza por el nombre de la persona y menciona — aunque sea de
            pasada — el tratamiento que se hizo la última vez, no se siente como
            publicidad: se siente como que alguien se ha acordado de ella. Esa diferencia,
            por sí sola, ya cambia cómo se recibe todo lo que viene después.
          </P>

          <H3>Ofrece algo concreto, no un genérico «te echamos de menos»</H3>
          <P>
            «Te echamos de menos» no da ningún motivo para responder. Una propuesta
            concreta — una revisión, una actualización de un tratamiento que ya conoce, una
            ventana de disponibilidad esta semana — sí lo da. Cuanto más fácil le pongas
            decir «sí, vamos a verlo», más probable es que lo diga.
          </P>

          <H3>Deja la puerta abierta sin presionar</H3>
          <P>
            El objetivo no es forzar una reserva en el primer mensaje, sino reabrir la
            conversación. Un tono cercano, sin urgencias artificiales ni descuentos
            agresivos, consigue que la persona responda — y, a partir de ahí, lo normal es
            que la cita llegue sola, sin que nadie tenga que insistir.
          </P>

          <H2>Cuántos pacientes puedes recuperar y qué ingresos supone</H2>
          <P>
            Aquí es donde conviene hacer números con calma. El valor de un cliente
            recurrente en una clínica suele rondar los 3.000€ a lo largo de su relación con
            el centro — entre tratamientos, revisiones y todo lo que viene después de la
            primera visita. Eso significa que cada paciente inactivo que se reactiva no es
            una cita suelta: es, potencialmente, esa cifra completa volviendo a estar sobre
            la mesa.
          </P>
          <P>
            Y no hace falta reactivar a cientos para que el efecto se note. Recuperar a un
            puñado de pacientes al mes — personas que ya conocían tu clínica, que ya
            confiaban en ella y que solo necesitaban un empujón en el momento adecuado —
            puede suponer varios miles de euros en ingresos que, hoy, simplemente no están
            entrando. Si quieres calcular esa cifra con tus propios números, en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            te ayudamos a verlo aplicado a tu clínica.
          </P>
          <P>
            La pregunta, en el fondo, no es si tienes pacientes inactivos — los tienes,
            prácticamente seguro —, sino cuánto tiempo más vas a dejar esos ingresos
            dormidos antes de hacer algo tan sencillo como escribirles.
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
              ¿Listo para recuperar a esos pacientes que dejaron de venir?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te ayudamos a ver, con los números reales de tu clínica, cuántos pacientes
              inactivos tienes y qué ingresos representan — y cómo un sistema de
              reactivación automática por WhatsApp puede traerlos de vuelta sin que tengas
              que escribir a nadie uno por uno.
            </p>
            <Link
              href="/reactivacion-pacientes-inactivos"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero reactivar a mis pacientes →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
