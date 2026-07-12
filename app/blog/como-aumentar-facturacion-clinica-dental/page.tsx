import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/como-aumentar-facturacion-clinica-dental"
const TITLE = "Aumentar facturación clínica dental: 5 estrategias sin más pacientes | Cero Manual"
const DESCRIPTION =
  "Aumenta la facturación de tu clínica dental sin gastar más en publicidad. 5 estrategias probadas que puedes aplicar esta semana."
const HEADLINE =
  "Cómo aumentar la facturación de tu clínica dental sin necesidad de más pacientes"

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
    publishedTime: "2026-06-10T00:00:00.000Z",
    modifiedTime: "2026-06-10T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿De verdad puedo aumentar la facturación sin captar pacientes nuevos?",
    a: "Sí, en la mayoría de clínicas dentales hay ingresos dormidos en su propia base de datos: pacientes que dejaron de venir, citas que se cancelan sin recolocar y revisiones que nunca se llegan a programar. Recuperar esos ingresos no requiere presupuesto de publicidad, solo un sistema que se encargue de contactar a esos pacientes en el momento adecuado.",
  },
  {
    q: "¿Cuánto representa un paciente que deja de venir?",
    a: "Un paciente recurrente puede generar a lo largo de su relación con la clínica un valor aproximado de unos 3.000€, entre revisiones, limpiezas, tratamientos y posibles derivaciones a especialistas. Cuando ese paciente deja de venir sin que nadie lo note, ese valor se queda sobre la mesa, y recuperarlo es mucho más barato que conseguir un paciente nuevo desde cero.",
  },
  {
    q: "¿Cómo afectan los no-shows a la facturación?",
    a: "Entre el 12% y el 19% de las citas de una clínica dental terminan en no-show. Cada hueco que se queda vacío sin que se pueda recolocar es tiempo del equipo y del gabinete que no genera ingresos pero sí tiene un coste. En clínicas con bastante volumen de citas, esto puede suponer pérdidas de hasta 7.500€ al mes.",
  },
  {
    q: "¿Necesito contratar a alguien para gestionar todo esto?",
    a: "No. La clave está en automatizar los procesos: mensajes de recuperación para pacientes inactivos, confirmaciones activas para reducir no-shows y seguimientos post-cita para detectar nuevas necesidades. Una vez configurado, el sistema funciona solo por WhatsApp, el canal que más se lee, y tu equipo solo interviene cuando un paciente responde para reservar.",
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
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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

export default function AumentarFacturacionClinicaDentalArticlePage() {
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
            10 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Cuando una clínica dental quiere facturar más, la primera idea que suele venir a
            la cabeza es la misma: conseguir más pacientes nuevos. Más publicidad, más
            promociones, más inversión en captación. Pero antes de gastar un euro más en
            atraer a gente nueva, merece la pena mirar hacia dentro: la mayoría de clínicas
            tienen ingresos dormidos en su propia base de datos, esperando a que alguien los
            active.
          </P>
          <P>
            Pacientes que dejaron de venir, huecos de agenda que se quedan vacíos por
            cancelaciones de última hora, revisiones que nunca llegan a programarse... Todo
            eso es facturación que ya estaba al alcance de la clínica y que se está perdiendo
            sin que nadie se dé cuenta.
          </P>
          <P>
            En este artículo vas a ver varias estrategias para aumentar la facturación de tu
            clínica dental sin necesidad de más inversión en publicidad: recuperando
            pacientes inactivos, reduciendo no-shows, aumentando el ticket medio y
            automatizando todo para que funcione sin esfuerzo extra del equipo.
          </P>

          <H2>Por qué buscar nuevos pacientes no siempre es la solución</H2>
          <P>
            Captar un paciente nuevo tiene un coste: publicidad, promociones de bienvenida y
            tiempo del equipo respondiendo consultas que muchas veces no llegan a convertirse
            en cita. Es una inversión necesaria, pero no es la única palanca disponible — y
            muchas veces ni siquiera es la más rentable a corto plazo.
          </P>
          <P>
            Mientras tanto, en la propia base de datos de la clínica suele haber cientos de
            pacientes que en algún momento confiaron en el centro y que, por distintos
            motivos, dejaron de venir. Recuperar a esos pacientes es mucho más barato que
            captar a uno nuevo, porque ya conocen la clínica, ya confiaron en el equipo y
            solo hace falta darles un motivo y una forma fácil de volver.
          </P>
          <P>
            Por eso, antes de aumentar el presupuesto de captación, tiene sentido preguntarse:
            ¿estoy aprovechando al máximo a los pacientes que ya tengo?
          </P>

          <H2>Recupera los pacientes que dejaron de venir</H2>
          <P>
            Un paciente recurrente —que viene a sus revisiones, limpiezas y tratamientos a lo
            largo de los años— puede llegar a representar un valor de vida de alrededor de
            3.000€ para la clínica. Cuando ese paciente deja de venir sin que nadie lo note,
            ese valor se queda congelado, esperando a que alguien retome el contacto.
          </P>
          <P>
            El problema es que, hecho a mano, identificar quién lleva tiempo sin venir y
            contactar con cada persona es una tarea que requiere tiempo que el equipo casi
            nunca tiene. Con un sistema automático que detecta estos patrones y envía mensajes
            de recuperación por WhatsApp, ese trabajo se hace solo, sin que nadie tenga que
            revisar la agenda manualmente.
          </P>
          <P>
            Si quieres ver cómo funciona este proceso paso a paso, en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            te explicamos cómo se identifican estos pacientes y qué tipo de mensajes
            funcionan mejor para que vuelvan a reservar.
          </P>

          <H2>Reduce los no-shows que vacían tu agenda</H2>
          <P>
            Entre el 12% y el 19% de las citas de una clínica dental terminan en no-show. Cada
            uno de esos huecos representa tiempo de gabinete y de personal que no genera
            ningún ingreso, pero que sí tiene un coste fijo asociado. En clínicas con buen
            volumen de citas, esto puede suponer pérdidas de hasta 7.500€ al mes.
          </P>
          <P>
            Reducir los no-shows no requiere más pacientes, solo mejor gestión de los que ya
            tienes agendados: recordatorios automáticos en los días previos a la cita, y
            confirmación activa para detectar con antelación quién no va a poder venir y poder
            recolocar ese hueco con otro paciente que esté en lista de espera.
          </P>
          <P>
            Es una de las formas más directas de aumentar la facturación sin tocar el
            presupuesto de marketing: simplemente se trata de aprovechar mejor la agenda que
            ya existe.
          </P>

          <H2>Aumenta el ticket medio con seguimiento post-cita</H2>
          <P>
            Otra fuente de facturación que muchas clínicas dejan pasar es el seguimiento
            después de una cita. Un paciente que viene a una revisión puede tener necesidades
            adicionales — un tratamiento pendiente, una consulta estética, una recomendación
            de un especialista — que nunca se llegan a plantear porque no hay un seguimiento
            estructurado.
          </P>
          <P>
            Un mensaje de seguimiento tras la cita, preguntando cómo se encuentra el paciente
            y aprovechando para recordar tratamientos pendientes o próximas revisiones, no
            solo mejora la relación con el paciente: abre la puerta a que reserve servicios
            adicionales que de otra forma habrían quedado en el olvido.
          </P>
          <P>
            Este tipo de seguimiento, aplicado de forma sistemática a toda la base de
            pacientes, es exactamente lo que en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            ayudamos a poner en marcha: que cada paciente reciba el mensaje adecuado en el
            momento adecuado, sin que nadie del equipo tenga que acordarse de hacerlo.
          </P>

          <H2>Automatiza para que funcione sin esfuerzo del equipo</H2>
          <P>
            Todas estas estrategias —recuperar pacientes inactivos, reducir no-shows, hacer
            seguimiento post-cita— tienen algo en común: si dependen de que alguien del
            equipo se acuerde de hacerlas cada día, casi nunca se llevan a cabo de forma
            constante. La agenda diaria siempre gana.
          </P>
          <P>
            La solución es automatizarlas a través de WhatsApp, el canal donde se lee entre el
            95% y el 98% de los mensajes, frente al 20-25% de un email. Una vez configurado el
            sistema, los mensajes de recuperación, recordatorios y seguimientos se envían
            solos, según el historial y la situación de cada paciente, y el equipo solo entra
            en juego cuando alguien responde para reservar.
          </P>
          <P>
            El resultado es una clínica que aprovecha al máximo la base de pacientes que ya
            tiene, sin necesidad de aumentar el presupuesto de publicidad ni de sumar carga de
            trabajo extra al equipo.
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
              ¿Listo para recuperar los ingresos que ya tienes en tu base de pacientes?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tu propia base de pacientes, cuántos llevan tiempo sin volver
              y cuánto valor representan — y cómo un sistema automático de seguimiento y
              reactivación por WhatsApp puede traerlos de vuelta sin que nadie de tu equipo
              tenga que hacer una sola llamada.
            </p>
            <Link
              href="/reactivacion-pacientes-inactivos"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero aumentar mi facturación →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
