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

const PATH = "/blog/como-conseguir-mas-citas-clinica-estetica"
const DATES = articleDates("como-conseguir-mas-citas-clinica-estetica")
const TITLE = "Cómo conseguir más citas en tu clínica estética | Cero Manual"
const DESCRIPTION =
  "Conseguir más citas no siempre significa más publicidad. Te explicamos 5 estrategias para llenar tu agenda aprovechando lo que ya tienes."
const HEADLINE =
  "Cómo conseguir más citas en tu clínica estética sin aumentar el presupuesto publicitario"

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
    q: "¿Cuánto tiempo se tarda en notar más citas con estas estrategias?",
    a: "Algunas medidas tienen efecto casi inmediato: responder más rápido a los leads que ya te están escribiendo puede traducirse en citas nuevas en la misma semana, porque simplemente estás dejando de perder oportunidades que ya tenías. Otras, como la reactivación de pacientes inactivos o la reducción de no-shows, suelen mostrar resultados claros en 4-6 semanas, una vez que los mensajes automáticos llevan un tiempo funcionando.",
  },
  {
    q: "¿De verdad puedo conseguir más citas sin aumentar el presupuesto de publicidad?",
    a: "Sí, y en la mayoría de clínicas es donde está el margen más rápido de mejorar. La publicidad genera leads nuevos, pero si una parte de los leads que ya recibes no obtienen respuesta a tiempo, o si los pacientes que ya te conocen no vuelven, estás dejando citas sobre la mesa sin que la falta de presupuesto tenga nada que ver. Aprovechar lo que ya tienes — leads actuales, pacientes inactivos, huecos por cancelación — siempre es más barato que captar un cliente nuevo desde cero.",
  },
  {
    q: "¿Qué estrategia da más resultado si solo puedo aplicar una?",
    a: "Responder más rápido a los leads que ya llegan. Es la que tiene el impacto más inmediato y la que más fácil es de automatizar: la probabilidad de perder un lead que no recibe respuesta en cinco minutos es del 80%, así que cada mejora en el tiempo de respuesta se traduce directamente en más citas, sin necesidad de generar ni un lead nuevo.",
  },
  {
    q: "¿Cómo sé si mi agenda está realmente llena o solo lo parece?",
    a: "Mira tres cosas: el porcentaje de huecos libres en los próximos 7-15 días, el porcentaje de no-shows y cancelaciones de última hora, y cuántos leads recibidos en el último mes no llegaron a convertirse en cita. Si los huecos libres son pocos pero los no-shows son altos, tu agenda «está llena» sobre el papel pero no en la práctica. Y si muchos leads no convierten, el problema no es de demanda sino de seguimiento.",
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

export default function ComoConseguirMasCitasArticlePage() {
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
            10 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Cuando una clínica estética siente que le faltan citas, la primera reacción
            casi siempre es la misma: invertir más en publicidad. Más anuncios, más
            alcance, más leads. Pero en muchos casos el problema no está en la cantidad de
            personas que llegan a la clínica — está en lo que pasa después, cuando esas
            personas ya han mostrado interés.
          </P>
          <P>
            Antes de aumentar el presupuesto publicitario, vale la pena revisar qué está
            pasando con los leads que ya tienes, con los pacientes que ya te conocen y con
            los huecos que se quedan vacíos en tu agenda. A menudo ahí hay más citas
            potenciales que las que conseguiría un anuncio nuevo.
          </P>
          <P>
            En este artículo vas a ver por qué tu agenda no está llena aunque recibas
            leads, cómo responder más rápido convierte más, cómo recuperar pacientes que
            dejaron de venir, cómo reducir los huecos por cancelaciones y no-shows, y cómo
            automatizar todo esto para que tu agenda se llene sola.
          </P>

          <H2>Por qué tu agenda no está llena (y no es por falta de publicidad)</H2>
          <P>
            Es habitual pensar que una agenda con huecos significa que faltan leads. Pero
            en la mayoría de clínicas, el problema no es la entrada — es la fuga. Leads
            que escriben y no reciben respuesta a tiempo, pacientes que vinieron una vez y
            nunca volvieron, citas que se cancelan a última hora y el hueco se queda vacío.
          </P>
          <P>
            Cada uno de estos puntos representa citas que ya estaban prácticamente
            conseguidas — y que se pierden por falta de seguimiento, no por falta de
            demanda. Antes de gastar más en atraer gente nueva, tiene sentido cerrar estas
            fugas: es más barato y más rápido que captar un cliente desde cero.
          </P>

          <H2>Responde más rápido y convierte más leads</H2>
          <P>
            La probabilidad de perder un lead que no recibe respuesta en los primeros
            cinco minutos es del 80%. Esto significa que, si alguien escribe a tu clínica
            interesado en un tratamiento y nadie responde hasta horas después — o al día
            siguiente —, lo más probable es que esa persona ya haya reservado en otra
            clínica que sí respondió a tiempo.
          </P>
          <P>
            Este es, con diferencia, el punto donde más citas se pierden sin que nadie se
            dé cuenta: no aparece como un «no» explícito, simplemente esa persona deja de
            responder. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            responde a cada mensaje en segundos, las 24 horas del día, y puede agendar la
            cita directamente — convirtiendo en citas reales leads que de otra forma se
            habrían enfriado.
          </P>

          <H2>Recupera pacientes que dejaron de venir</H2>
          <P>
            Cada clínica tiene una base de pacientes que vinieron una o varias veces y, en
            algún momento, dejaron de hacerlo. No porque estuvieran insatisfechos
            necesariamente, sino porque nadie volvió a contactar con ellos para recordarles
            que existías o para ofrecerles algo nuevo.
          </P>
          <P>
            Un cliente recurrente tiene un valor medio de unos 3.000€ a lo largo del
            tiempo. Reactivar a un solo paciente inactivo — con un mensaje sencillo,
            personalizado y bien programado — puede generar más ingresos que varios leads
            nuevos captados con publicidad, y a un coste mucho menor. Es, probablemente, la
            fuente de citas más infrautilizada en la mayoría de clínicas.
          </P>

          <H2>Reduce los huecos por cancelaciones y no-shows</H2>
          <P>
            Entre el 12% y el 19% de las citas de una clínica terminan en no-show o
            cancelación de última hora. Cada uno de esos huecos es una cita que ya estaba
            «conseguida» y que se pierde — y que, si no hay un sistema para cubrirla, se
            queda vacía sin generar ningún ingreso.
          </P>
          <P>
            Reducir esos huecos tiene un doble efecto: por un lado, confirmar las citas con
            antelación reduce directamente el número de no-shows. Por otro, cuando sí se
            produce una cancelación, avisar rápido a una lista de espera permite ocupar ese
            hueco con otro paciente en lugar de perderlo. Las dos cosas juntas pueden
            recuperar varias citas a la semana sin necesidad de un solo lead nuevo.
          </P>

          <H2>Automatiza para que tu agenda se llene sola</H2>
          <P>
            Lo que tienen en común estas tres fugas — leads sin respuesta, pacientes
            inactivos y huecos por cancelación — es que todas dependen de que alguien del
            equipo se acuerde de actuar en el momento justo. Y casi un 40% de las consultas
            de una clínica llegan fuera del horario de atención, cuando precisamente nadie
            está disponible para hacerlo.
          </P>
          <P>
            La forma más eficiente de cerrar estas fugas sin sumar trabajo al equipo es
            automatizarlas. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            responde cada lead al instante, hace seguimiento a quien no contestó, recuerda
            las citas para reducir no-shows y puede avisar a la lista de espera cuando se
            libera un hueco — todo sin que nadie tenga que estar pendiente del teléfono.
            El resultado es una agenda que se llena con lo que ya tenías, antes de plantear
            invertir un euro más en publicidad.
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
              ¿Quieres llenar tu agenda con lo que ya tienes, sin gastar más en publicidad?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              El{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp para clínicas estéticas
              </InternalLink>{" "}
              responde, hace seguimiento y agenda por ti — para que cada lead y cada hueco
              se convierta en una cita.
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
