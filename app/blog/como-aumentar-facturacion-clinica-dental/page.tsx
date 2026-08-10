import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import BlogSource from "@/components/BlogSource"

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
    modifiedTime: "2026-08-11T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿De verdad puedo aumentar la facturación sin captar pacientes nuevos?",
    a: "Sí, en la mayoría de clínicas dentales hay ingresos dormidos en su propia base de datos: pacientes que dejaron de venir, citas que se cancelan sin recolocar y revisiones que nunca se llegan a programar. Recuperar esos ingresos no requiere presupuesto de publicidad, solo un sistema que se encargue de contactar a esos pacientes en el momento adecuado. La ventaja frente a la captación es doble: son personas que ya confiaron en la clínica una vez, así que la conversación empieza mucho más adelantada, y el coste de contactarlas es prácticamente cero. Antes de subir la inversión en anuncios, merece la pena mirar cuántos pacientes llevan más de un año sin aparecer.",
  },
  {
    q: "¿Cuánto representa un paciente que deja de venir?",
    a: "Un paciente recurrente puede generar a lo largo de su relación con la clínica un valor aproximado de unos 3.000€, entre revisiones, limpiezas, tratamientos y posibles derivaciones a especialistas. Cuando ese paciente deja de venir sin que nadie lo note, ese valor se queda sobre la mesa, y recuperarlo es mucho más barato que conseguir un paciente nuevo desde cero. El problema es que esa pérdida no aparece en ningún informe: nadie da de baja a un paciente, simplemente deja de aparecer en la agenda. Por eso conviene revisar cada cierto tiempo el listado de última visita, que cualquier software de gestión dental permite sacar en unos clics.",
  },
  {
    q: "¿Cómo afectan los no-shows a la facturación?",
    a: "Entre el 12% y el 19% de las citas de una clínica dental terminan en no-show. Cada hueco que se queda vacío sin que se pueda recolocar es tiempo del equipo y del gabinete que no genera ingresos pero sí tiene un coste. En clínicas con bastante volumen de citas, esto puede suponer pérdidas de hasta 7.500€ al mes: la cuenta sale de 20 citas diarias × 22 días laborables × un 15% de no-shows × un ticket medio de unos 115€, así que conviene rehacerla con tus propios números. Es la pérdida más fácil de corregir de todas, porque no depende de captar a nadie nuevo — solo de que el paciente que ya reservó confirme o avise a tiempo.",
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
  dateModified: "2026-08-11",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
            10 de junio de 2026 · 8 min de lectura
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
            Buscar pacientes nuevos no siempre es la solución porque es la palanca más cara
            y la más lenta de las cuatro que tienes disponibles. Captar a alguien de cero
            cuesta publicidad, promociones de bienvenida y tiempo del equipo respondiendo
            consultas que muchas veces no acaban en cita — mientras que recuperar a quien ya
            confió en la clínica no cuesta prácticamente nada.
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
            ¿estoy aprovechando al máximo a los pacientes que ya tengo? Esta es la comparación
            entre las cuatro palancas, ordenadas por lo que cuesta activarlas:
          </P>

          <BlogTable
            headers={[
              "Palanca",
              "De dónde sale el ingreso",
              "Qué hace falta",
              "En cuánto se nota",
            ]}
            rows={[
              [
                "Reactivar pacientes inactivos",
                "Pacientes de tu base que llevan meses sin volver",
                "Un listado filtrado por última visita y un mensaje de recuperación",
                "Semanas: la respuesta llega en los primeros días de envío",
              ],
              [
                "Reducir no-shows",
                "Huecos de agenda ya vendidos que hoy se quedan vacíos",
                "Recordatorios automáticos y confirmación activa antes de la cita",
                "Inmediato: afecta a las citas de la semana que viene",
              ],
              [
                "Subir el ticket medio",
                "Tratamientos pendientes que nunca se llegan a proponer",
                "Seguimiento post-cita y presupuestos que no se quedan sin respuesta",
                "Meses: depende del ciclo de decisión de cada tratamiento",
              ],
              [
                "Captar pacientes nuevos",
                "Inversión en publicidad y visibilidad",
                "Presupuesto continuado y alguien que atienda cada consulta",
                "Meses, y el coste no para mientras quieras mantenerlo",
              ],
            ]}
          />

          <H2>Recupera los pacientes que dejaron de venir</H2>
          <P>
            Se recuperan filtrando tu base por fecha de última visita y contactando a quien
            lleve más de doce meses sin aparecer. Merece la pena porque un paciente
            recurrente —que viene a sus revisiones, limpiezas y tratamientos a lo largo de
            los años— puede llegar a representar un valor de vida de alrededor de 3.000€
            para la clínica.
          </P>
          <BlogSource>SEME (Sociedad Española de Medicina Estética)</BlogSource>
          <P>
            Cuando ese paciente deja de venir sin que nadie lo note, ese valor se queda
            congelado, esperando a que alguien retome el contacto.
          </P>
          <P>
            Ese filtro lo puede sacar cualquier software de gestión dental —ClinicCloud o
            Klinikare, por ejemplo, permiten listar pacientes por última cita en un par de
            clics—, así que el dato ya lo tienes. El problema es el paso siguiente:
            contactar con cada persona a mano es una tarea que requiere tiempo que el equipo
            casi nunca tiene. Con un sistema automático que detecta estos patrones y envía
            mensajes de recuperación por WhatsApp, ese trabajo se hace solo, sin que nadie
            tenga que revisar la agenda manualmente.
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
            Los no-shows se reducen con recordatorios automáticos y confirmación activa en
            los días previos a la cita. Es la palanca más rentable de todas porque entre el
            12% y el 19% de las citas de una clínica dental terminan sin que el paciente
            aparezca — y cada uno de esos huecos es tiempo de gabinete y de personal que no
            genera ingreso pero sí tiene un coste fijo asociado.
          </P>
          <BlogSource>
            tasa media de no-shows del 12-19% en clínicas privadas españolas.
          </BlogSource>
          <P>
            En clínicas con buen volumen de citas, esto puede suponer pérdidas de hasta
            7.500€ al mes. Sale de una cuenta sencilla — 20 citas al día × 22 días
            laborables × 15% de no-shows × un ticket medio de unos 115€ — así que la cifra
            cambia bastante según el tamaño de la clínica y el tipo de tratamiento.
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
            El ticket medio sube cuando cada visita termina con un mensaje de seguimiento
            que recuerda lo que quedó pendiente. Un paciente que viene a una revisión suele
            tener necesidades adicionales — un tratamiento aplazado, un presupuesto que
            nunca contestó, una siguiente fase que se quedó a medias — que no se plantean
            simplemente porque nadie vuelve sobre ellas.
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
            Se automatiza conectando tu software de gestión con WhatsApp, de forma que los
            mensajes salgan solos según el historial de cada paciente. Es la única manera de
            que estas estrategias se sostengan: si dependen de que alguien del equipo se
            acuerde cada día, casi nunca se ejecutan de forma constante — la agenda diaria
            siempre gana.
          </P>
          <P>
            El canal importa tanto como la automatización: en WhatsApp se lee entre el 95% y
            el 98% de los mensajes, frente al 20-25% de un email. Una vez configurado el
            sistema, los mensajes de recuperación, recordatorios y seguimientos se envían
            solos, según el historial y la situación de cada paciente, y el equipo solo entra
            en juego cuando alguien responde para reservar.
          </P>
          <BlogSource>
            tasas de apertura de referencia del sector para WhatsApp y email marketing.
          </BlogSource>
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
