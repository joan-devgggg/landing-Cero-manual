import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/meta-ads-para-clinicas-esteticas"
const TITLE = "Meta Ads para clínicas estéticas: guía completa | Cero Manual"
const DESCRIPTION =
  "Aprende a hacer Meta Ads para clínicas estéticas sin que Meta te bloquee. Copy permitido, segmentación, presupuesto y errores a evitar."
const HEADLINE =
  "Meta Ads para clínicas estéticas: cómo conseguir leads sin que Meta te bloquee"

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
    publishedTime: "2026-06-09T00:00:00.000Z",
    modifiedTime: "2026-06-09T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Cuánto presupuesto mínimo necesito para empezar con Meta Ads?",
    a: "Para tener datos suficientes y que el algoritmo aprenda, lo recomendable es partir de 300-500€ al mes los primeros 30 días. Con menos presupuesto, el volumen de impresiones es demasiado bajo para que Meta optimice bien la entrega — y los resultados que ves no son representativos. A partir del segundo mes, puedes escalar en función del CPL que hayas conseguido.",
  },
  {
    q: "¿Qué hago si Meta bloquea mi anuncio?",
    a: "Lo primero es revisar el copy y los creativos: la mayoría de bloqueos en clínicas estéticas vienen de palabras o imágenes que Meta interpreta como publicidad de salud con afirmaciones implícitas. Evita términos como «pacientes», «tratamientos», «antes y después» o cualquier frase que sugiera un resultado garantizado. Reformula el copy en torno a la experiencia y el cuidado personal, y vuelve a enviar el anuncio a revisión.",
  },
  {
    q: "¿Cuál es un CPL realista para clínicas estéticas con Meta Ads?",
    a: "Bien segmentado y con copy que no infringe las políticas, el coste por lead se mueve entre 15€ y 40€ dependiendo del servicio, la zona geográfica y la competencia local. Tratamientos de ticket alto como blanqueamiento, depilación láser o mesoterapia suelen tener CPL en la parte alta, pero también un margen mayor para amortizarlo. El objetivo no es el lead más barato, sino el lead que convierte.",
  },
  {
    q: "¿Necesito una landing page especial para mis anuncios?",
    a: "No es imprescindible tener una landing elaborada, pero sí necesitas algo que responda al lead en segundos. El 40% de las consultas de una clínica llegan fuera de horario — si tu anuncio funciona a las 10 de la noche y nadie contesta hasta el día siguiente, ese lead ya se ha enfriado. Un agente de WhatsApp que responda y cualifique de forma inmediata marca una diferencia enorme en la tasa de conversión.",
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
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
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

export default function MetaAdsArticlePage() {
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
            9 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            Meta Ads — Facebook e Instagram — es hoy el canal de pago más rentable para
            clínicas estéticas con presupuesto ajustado. Ningún otro canal te permite llegar
            a personas con interés activo en estética, dentro de un radio de 10 kilómetros de
            tu clínica, por un coste por lead de entre 15€ y 40€ cuando la campaña está bien
            configurada.
          </P>
          <P>
            El problema es que la mayoría de clínicas llegan a Meta Ads, invierten el primer
            presupuesto y obtienen uno de estos dos resultados: les bloquean el anuncio antes
            de que empiece a rodar, o lo lanzan y los leads no convierten porque nadie
            responde a tiempo. El 40% de las consultas llegan fuera del horario de atención
            — y un lead que espera más de cinco minutos tiene un 80% de probabilidades de no
            contestar cuando alguien le llame al día siguiente.
          </P>
          <P>
            En esta guía vas a ver por qué Meta Ads funciona especialmente bien para clínicas
            estéticas, cuál es el error que bloquea casi todos los anuncios, qué copy está
            permitido y cuál no, cómo segmentar correctamente — y qué esperar del presupuesto
            los primeros treinta días.
          </P>

          <H2>Por qué Meta Ads funciona especialmente bien para clínicas estéticas</H2>
          <P>
            La razón principal es la combinación de segmentación por interés y segmentación
            geográfica. Puedes llegar exactamente a personas que han mostrado interés en
            tratamientos estéticos, bienestar o cuidado personal — y limitarlo a quienes
            viven o trabajan a menos de diez kilómetros de tu clínica. Ningún buscador te
            da esa precisión geográfica con ese volumen de audiencia.
          </P>
          <P>
            El segundo motivo es el formato visual. Los tratamientos estéticos se venden con
            la vista: resultados, ambiente, sensación. Instagram y Facebook son el entorno
            natural para ese tipo de contenido — mucho más que un anuncio de texto en Google,
            donde compites directamente con el precio de otras clínicas.
          </P>
          <P>
            Y el tercero, que a menudo se pasa por alto: la intención de compra no tiene por
            qué ser activa para que el anuncio funcione. En Google, alguien busca porque ya
            quiere algo concreto. En Meta, puedes generar esa intención en alguien que
            todavía no había pensado en reservar — y que, al ver tu anuncio en el momento
            adecuado, decide dar el paso.
          </P>

          <H2>El error que bloquea a casi todas las clínicas: el copy prohibido</H2>
          <P>
            Meta tiene políticas estrictas sobre publicidad de salud, belleza y bienestar.
            Concretamente, prohíbe cualquier anuncio que implique — aunque sea de forma
            indirecta — que el usuario tiene un problema físico que el producto o servicio
            puede resolver.
          </P>
          <P>
            El problema es que muchas clínicas escriben el copy de sus anuncios exactamente
            como escribirían un folleto de consulta. Y lo que funciona en un folleto para
            quien ya ha entrado en la clínica no funciona en Meta — y suele acabar en
            rechazo del anuncio.
          </P>
          <P>
            Las palabras y frases que más frecuentemente causan bloqueos en clínicas
            estéticas son: «pacientes», «tratamiento médico», «antes y después», cualquier
            mención a una condición específica («manchas», «flacidez», «arrugas» en
            contextos que impliquen problema personal), y frases que prometan un resultado
            garantizado.
          </P>
          <P>
            El bloqueo no siempre es inmediato — a veces el anuncio se aprueba y se rechaza
            días después, cuando ya has empezado a invertir. Por eso conviene revisar el copy
            antes de lanzar, no después de que Meta te lo haya parado.
          </P>

          <H2>Qué copy SÍ está permitido (y qué no)</H2>
          <P>
            La regla general es hablar de la experiencia y del cuidado personal, no del
            problema ni del resultado garantizado. El copy que funciona — y que Meta aprueba
            — describe lo que ofreces en términos de servicio, bienestar y atención, no en
            términos de corrección de un defecto.
          </P>

          <H3>Copy que Meta aprueba</H3>
          <P>
            «Cuida tu piel con nuestros tratamientos personalizados» — habla de cuidado, no
            de problema. «Reserva tu sesión de hidratación facial» — descriptivo, sin
            implicar condición. «Descubre nuestros servicios de estética avanzada» — genérico
            y sin promesas de resultado. «Agenda tu consulta sin compromiso» — CTA directo
            sin afirmaciones de salud.
          </P>

          <H3>Copy que Meta rechaza</H3>
          <P>
            «¿Cansada de tus manchas? Tenemos la solución» — implica problema personal
            dirigido al usuario. «Elimina la flacidez en 3 sesiones» — promete resultado
            concreto. «Antes y después reales de nuestros tratamientos» — las imágenes de
            antes/después están explícitamente prohibidas en este tipo de anuncios. «Para
            pacientes con piel sensible» — el término «pacientes» activa los filtros de
            publicidad médica.
          </P>
          <P>
            La transición más sencilla es reescribir cada frase en positivo y en tercera
            persona del servicio, no en segunda persona del problema. En lugar de «¿tienes
            X?», di «ofrecemos Y».
          </P>

          <H2>Cómo segmentar para llegar a tu cliente ideal</H2>
          <P>
            Una buena segmentación reduce el coste por lead y aumenta la calidad de los
            contactos que recibes. Para clínicas estéticas, hay tres capas que funcionan bien
            en combinación:
          </P>
          <P>
            La primera es la segmentación geográfica. Limita la entrega a un radio de 5-15 km
            alrededor de tu clínica — o a los códigos postales de tu zona de captación. Una
            clínica en el centro de una ciudad no necesita llegar a toda la provincia; necesita
            llegar a las personas que pueden venir en coche o en transporte público en veinte
            minutos.
          </P>
          <P>
            La segunda es la segmentación por interés. Meta te permite seleccionar audiencias
            con interés en belleza, cuidado personal, bienestar y categorías relacionadas.
            Combinado con la geolocalización, filtra bien el volumen sin dejarte fuera a
            nadie relevante.
          </P>
          <P>
            La tercera — y la más potente cuando tienes algo de historial — es la audiencia
            lookalike. A partir de tu lista de clientes actuales o de quienes ya han
            interactuado con tu página, Meta construye una audiencia con características
            similares. El CPL suele ser más bajo y la tasa de conversión, más alta, porque
            estás llegando a personas que se parecen a quienes ya te han elegido.
          </P>

          <H2>Presupuesto mínimo y qué esperar los primeros 30 días</H2>
          <P>
            Meta necesita datos para optimizar la entrega. Con menos de 300-500€ al mes los
            primeros treinta días, el volumen de impresiones es demasiado bajo para que el
            algoritmo aprenda qué tipo de usuario convierte mejor — y los resultados que ves
            no son representativos de lo que podrías conseguir a pleno rendimiento.
          </P>
          <P>
            Los primeros días son los más caros: Meta está explorando la audiencia, todavía
            no sabe a quién mostrar el anuncio con más probabilidad de conversión. A medida
            que llegan datos — clics, formularios enviados, mensajes iniciados — el coste
            por resultado suele bajar.
          </P>
          <P>
            Un CPL realista para clínicas estéticas bien segmentadas se mueve entre 15€ y
            40€. Por debajo de 15€ o estás en una zona con muy poca competencia o el lead
            no está suficientemente cualificado. Por encima de 40€ conviene revisar la
            segmentación y el copy antes de escalar el presupuesto.
          </P>
          <P>
            Y aquí entra el punto más crítico que pocas clínicas tienen resuelto: captar el
            lead es solo la mitad del trabajo. El 40% de los leads que llegan fuera de
            horario necesitan respuesta inmediata — en segundos, no en horas. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            que responda y cualifique de forma automática puede doblar la tasa de conversión
            de tus campañas sin cambiar un euro de presupuesto.
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
              ¿Consigues leads con Meta Ads pero se enfrían antes de que puedas contestar?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              El{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp para clínicas estéticas
              </InternalLink>{" "}
              responde en segundos, aunque sean las diez de la noche — y convierte esos
              leads en citas antes de que se enfríen.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo funciona el agente →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
