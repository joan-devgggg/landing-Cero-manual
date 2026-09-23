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

const PATH = "/blog/como-reactivar-pacientes-inactivos-clinica"
const DATES = articleDates("como-reactivar-pacientes-inactivos-clinica")
const TITLE = "Reactivar pacientes inactivos: cómo hacerlo | Cero Manual"
const DESCRIPTION =
  "Cómo reactivar pacientes inactivos en tu clínica con mensajes automáticos por WhatsApp, sin llamarles uno por uno. Pide tu auditoría gratuita."
const ARTICLE_DESCRIPTION =
  "Cómo reactivar pacientes inactivos en una clínica: cómo identificarlos, qué mensaje enviarles por WhatsApp y cómo calcular lo que vale recuperarlos."
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
    publishedTime: DATES.publishedTime,
    modifiedTime: DATES.modifiedTime,
  },
}

const faqs = [
  {
    q: "¿Cómo sé qué pacientes están inactivos sin revisar la agenda uno por uno?",
    a: "No hace falta que lo hagas tú a mano. El historial de tu clínica llega al sistema conectándolo a tu programa de gestión, si lo permite, o a partir de una exportación de tu base de pacientes; con él se aplica un criterio de tiempo — por ejemplo, «no ha reservado en los últimos seis meses» — y sale la lista de personas que encajan. Es el mismo trabajo que harías mirando ficha por ficha, pero hecho de forma automática y sin que nadie tenga que dedicarle una tarde entera.",
  },
  {
    q: "¿No es invasivo escribir a alguien que dejó de venir hace tiempo?",
    a: "No, si el mensaje está bien planteado. Escribes a alguien que ya fue tu paciente y conoce tu clínica. Un mensaje cercano, con su nombre y una propuesta concreta, se recibe como un gesto de atención.",
  },
  {
    q: "¿Qué tipo de mensaje funciona mejor para reactivar a un paciente?",
    a: "Los que se sienten personales y ofrecen algo concreto: mencionar su última visita, proponer una revisión o una actualización de un tratamiento que ya conoce, y dejar la puerta abierta sin presionar. Lo que peor funciona son los mensajes genéricos de «te echamos de menos» enviados igual a toda la base de datos, porque se nota que son genéricos.",
  },
  {
    q: "¿Cuánto tiempo se tarda en ver resultados de una campaña de reactivación?",
    a: "Normalmente, los primeros resultados se ven en cuestión de días: las respuestas a un mensaje de WhatsApp suelen llegar rápido, porque el mensaje aparece en la misma aplicación donde la persona habla con los suyos. A partir de ahí, convertir esas respuestas en citas es un proceso natural, así que el efecto en tu agenda se nota sin esperar semanas.",
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
            Para reactivar a los pacientes inactivos de tu clínica, filtra tu historial por
            quién lleva meses sin reservar y escríbeles por WhatsApp con un mensaje personal:
            su nombre, su última visita y una propuesta concreta, como una revisión. Si el
            envío se automatiza, llega a toda la lista sin que nadie del equipo tenga que
            escribir uno por uno.
          </P>
          <P>
            Casi cualquier clínica tiene, guardada en su agenda o su historial, una lista de
            personas que un día fueron pacientes habituales y dejaron de venir. Nadie los dio
            de baja: un día no volvieron a reservar, y ahí se quedó la cosa. Esa lista es
            ingreso dormido.
          </P>

          <H2>¿Qué es un paciente inactivo y cuántos tienes sin saberlo?</H2>
          <P>
            Un paciente inactivo es alguien que fue cliente habitual de tu
            clínica y que, pasado un tiempo razonable — tres meses, seis, un año,
            dependiendo del tipo de tratamiento —, ha dejado de reservar sin que nadie se
            haya dado cuenta del todo.
          </P>
          <P>
            La mayoría de clínicas no tiene esta cifra a la vista. Vive enterrada en el
            historial, repartida entre cientos de fichas, sin que nadie se haya sentado a
            mirar quién dejó de venir y cuándo. Cuando se hace ese ejercicio, casi siempre
            aparece una cifra mayor de la esperada.
          </P>

          <H2>Por qué el email de reactivación no funciona</H2>
          <P>
            El email es la opción a la que casi todo el mundo recurre primero — y la que
            peor rinde. Un email de reactivación compite con todo lo demás que llega al
            correo, y es fácil que ni siquiera se abra: se queda esperando en{" "}
            <InternalLink href="/blog/emails-recordatorio-pacientes-clinica">
              una bandeja de entrada saturada de promociones
            </InternalLink>
            , o directamente acaba en la
            carpeta de spam sin que nadie llegue a verla.
          </P>
          <P>
            Y, aunque se abra, el formato no ayuda: un email de «te echamos de menos» suena
            a plantilla genérica enviada a toda la base de datos — porque, normalmente, lo
            es. No transmite la cercanía de quien recuerda quién eres y qué tratamiento te
            hiciste la última vez.
          </P>

          <H2>WhatsApp como canal de reactivación: por qué funciona</H2>
          <P>
            WhatsApp es la aplicación donde tus pacientes hablan a diario con su familia y
            sus amigos, y el mensaje de su clínica aparece entre esas conversaciones. La
            tienen a mano durante todo el día.
          </P>
          <P>
            Además, los{" "}
            <InternalLink href="/blog/inteligencia-artificial-clinicas-esteticas">
              mensajes de reactivación
            </InternalLink>{" "}
            pueden programarse y enviarse de forma automática, en el momento
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
            pasada — el tratamiento que se hizo la última vez, se siente como que alguien se
            ha acordado de ella.
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
            El primer mensaje sirve para reabrir la conversación. Un tono cercano, sin urgencias artificiales ni descuentos
            agresivos, consigue que la persona responda — y, a partir de ahí, lo normal es
            que la cita llegue sola, sin que nadie tenga que insistir.
          </P>

          <H2>Cuántos pacientes puedes recuperar y qué ingresos supone</H2>
          <P>
            El{" "}
            <InternalLink href="/blog/como-fidelizar-pacientes-clinica-estetica">
              valor de un cliente recurrente
            </InternalLink>{" "}
            en tu clínica sale de multiplicar tu ticket medio por las visitas que hace a lo
            largo de su relación con el centro — entre tratamientos, revisiones y todo lo que
            viene después de la primera visita. Cada paciente inactivo que se reactiva pone
            otra vez sobre la mesa, potencialmente, todo ese valor.
          </P>
          <P>
            Para que el efecto se note basta con recuperar a un puñado de pacientes al mes:
            personas que ya conocían tu clínica, confiaban en ella y solo necesitaban un
            empujón en el momento adecuado. Si quieres calcular esa cifra con tus propios números, en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            te ayudamos a verlo aplicado a tu clínica.
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
