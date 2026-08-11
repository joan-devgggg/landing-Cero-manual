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

const PATH = "/blog/reducir-lista-espera-clinica-estetica"
const TITLE = "Cómo reducir la lista de espera en tu clínica estética | Cero Manual"
const DESCRIPTION =
  "Una lista de espera larga hace perder pacientes. Te explicamos cómo gestionarla mejor y convertir cancelaciones en citas nuevas automáticamente."
const HEADLINE = "Cómo reducir la lista de espera en tu clínica estética sin perder pacientes"

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
    q: "¿Una lista de espera larga es buena señal para una clínica estética?",
    a: "A corto plazo puede parecer una señal de éxito —hay demanda—, pero si esa lista no se gestiona activamente se convierte en un problema: los pacientes que esperan demasiado tiempo sin noticias acaban buscando otra clínica, y la lista deja de reflejar la demanda real porque incluye a personas que ya se han ido a otro sitio.",
  },
  {
    q: "¿Cómo se puede avisar a un paciente en lista de espera si se libera un hueco antes?",
    a: "Lo más eficaz es tener un sistema que, en cuanto se produce una cancelación, contacte automáticamente por WhatsApp a los pacientes en lista de espera compatibles con ese hueco, por orden de prioridad. El primero que confirme se queda con la cita, y el resto sigue en la lista para la siguiente disponibilidad.",
  },
  {
    q: "¿Qué hacer si varios pacientes en lista de espera quieren el mismo hueco?",
    a: "Conviene definir un criterio claro de antemano —normalmente, orden de llegada a la lista o urgencia del tratamiento— y comunicarlo igual para todos. Cuando el proceso es automático y consistente, los pacientes lo aceptan mejor que cuando perciben que la asignación depende de quién insiste más.",
  },
  {
    q: "¿La lista de espera ayuda a reducir los no-shows?",
    a: "De forma indirecta, sí. Si cada cancelación se cubre rápidamente con un paciente de la lista de espera, el hueco no se queda vacío y el impacto económico de un no-show —que en clínicas estéticas ronda el 12-19% de las citas— se reduce. Combinado con recordatorios automáticos antes de la cita, que pueden reducir los no-shows hasta un 40%, el efecto conjunto es notable.",
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

export default function ReducirListaEsperaClinicaEsteticaArticlePage() {
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
            13 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Una lista de espera larga suele verse como un problema "bueno": significa que hay
            demanda. Pero cuando esa lista se gestiona a mano, con notas sueltas o una hoja de
            cálculo que nadie revisa con frecuencia, deja de ser una ventaja y se convierte en
            pacientes que esperan sin saber nada, hasta que se cansan y reservan en otra
            clínica.
          </P>
          <P>
            El resultado es paradójico: la clínica tiene lista de espera y, al mismo tiempo,
            huecos libres en la agenda por cancelaciones que nadie ha cubierto a tiempo.
          </P>
          <P>
            En este artículo vas a aprender por qué una lista de espera mal gestionada hace
            perder pacientes, cómo organizarla de forma eficiente, cómo convertir cada
            cancelación en una cita nueva de forma automática, cómo comunicar los tiempos de
            espera sin que el paciente se desanime, y cómo automatizar todo este proceso.
          </P>

          <H2>Por qué una lista de espera larga es un problema</H2>
          <P>
            El problema no es tener pacientes esperando, sino lo que ocurre mientras esperan.
            Si nadie les da una estimación realista ni les avisa cuando se libera un hueco
            antes de tiempo, la sensación que se lleva el paciente es que la clínica no tiene
            el proceso bajo control —aunque internamente sí lo esté gestionando, simplemente de
            forma lenta.
          </P>
          <P>
            A esto se suma el efecto de las cancelaciones. Con una tasa de no-shows que en
            clínicas estéticas se mueve habitualmente entre el 12% y el 19%, cada semana se
            liberan huecos que, si no se cubren rápido, quedan vacíos. Mientras tanto, la lista
            de espera sigue creciendo con pacientes que podrían haber ocupado exactamente esos
            huecos.
          </P>
          <P>
            El coste real, por tanto, no es solo la insatisfacción de quien espera: es la
            combinación de agenda infrautilizada y pacientes que, cansados de esperar sin
            noticias, terminan reservando en otra clínica.
          </P>

          <H2>Cómo gestionar la lista de espera de forma eficiente</H2>
          <P>
            El primer paso es centralizar la lista en un único sitio, con la información mínima
            necesaria: nombre, contacto, tratamiento de interés y disponibilidad horaria del
            paciente. Si esta información está repartida entre WhatsApp, llamadas y notas en
            papel, ya es prácticamente imposible gestionarla con criterio.
          </P>
          <P>
            El segundo paso es ordenar la lista con un criterio claro —normalmente, orden de
            llegada— y aplicarlo de forma consistente. Esto evita conflictos y hace que el
            proceso sea predecible tanto para el equipo como para los pacientes.
          </P>
          <P>
            El tercer paso, y el que más diferencia marca, es la rapidez de respuesta cuando se
            libera un hueco. Una lista de espera bien organizada pero que se revisa una vez al
            día sigue perdiendo la mayoría de esas oportunidades, porque los huecos liberados
            por cancelación normalmente son para los próximos días, y el paciente que iba a
            ocuparlos necesita confirmar cuanto antes.
          </P>

          <H2>Convertir cancelaciones en citas nuevas automáticamente</H2>
          <P>
            La forma más eficaz de aprovechar cada cancelación es automatizar el aviso a la
            lista de espera. En el momento en que se cancela una cita, un sistema automático
            puede enviar un mensaje de WhatsApp a los pacientes de la lista que sean
            compatibles con ese hueco —por tratamiento y disponibilidad—, empezando por los
            primeros en la lista.
          </P>
          <P>
            Dado que la tasa de apertura de WhatsApp es de entre el 95% y el 98%, la
            probabilidad de que el mensaje llegue y se vea casi al instante es muy alta. El
            primer paciente que confirma se queda con la cita, y el sistema actualiza la lista
            automáticamente para el resto.
          </P>
          <P>
            Este mismo mecanismo de recordatorios automáticos por WhatsApp es el que se utiliza
            para reducir los no-shows desde el origen: según los datos del sector, puede
            reducirlos hasta en un 40%. Es decir, no solo ayuda a cubrir los huecos que ya se
            han liberado, sino que reduce el número de huecos que se liberan por sorpresa. Puedes
            ver cómo se aplica esto con más detalle en el artículo sobre{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>
            .
          </P>

          <H2>Cómo comunicar los tiempos de espera sin perder al paciente</H2>
          <P>
            Una de las causas más frecuentes de abandono no es la espera en sí, sino la falta
            de información. Un paciente que sabe que probablemente tendrá noticias en una o dos
            semanas espera con más paciencia que uno al que se le dijo "te avisamos" y no ha
            vuelto a saber nada desde entonces.
          </P>
          <P>
            Por eso conviene dar siempre una estimación realista al entrar en la lista, aunque
            sea aproximada, y mantener algún punto de contacto periódico —aunque solo sea para
            confirmar que sigue interesado y sigue disponible en las mismas franjas—. Esto
            también permite depurar la lista de personas que ya no están interesadas, lo que
            mejora la precisión de las siguientes asignaciones.
          </P>
          <P>
            Cuando se combina con avisos automáticos en cuanto hay un hueco disponible, la
            percepción del paciente cambia completamente: pasa de sentir que está "en una
            lista olvidada" a sentir que la clínica está activamente buscando cómo atenderle
            antes.
          </P>

          <H2>Automatiza la gestión de lista de espera</H2>
          <P>
            Todo lo anterior —centralizar la lista, ordenarla, avisar automáticamente ante
            cancelaciones y mantener informados a los pacientes— se puede gestionar con el
            mismo sistema de recordatorios y comunicación automática por WhatsApp que ya usan
            muchas clínicas para reducir no-shows.
          </P>
          <P>
            En lugar de tratar la lista de espera y los recordatorios de citas como dos
            procesos separados, tiene sentido unificarlos: el mismo sistema que avisa a un
            paciente de su cita puede avisar a otro de que se ha liberado un hueco antes. Así,
            cada cancelación se convierte automáticamente en una oportunidad para cubrir el
            hueco y reducir la lista de espera al mismo tiempo.
          </P>
          <P>
            En el artículo sobre{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>{" "}
            se explica cómo configurar este tipo de automatización paso a paso.
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
              ¿Quieres que cada cancelación se cubra sola?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Descubre cómo los recordatorios automáticos por WhatsApp ayudan a reducir
              no-shows y a avisar a tu lista de espera en cuanto se libera un hueco.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver recordatorios automáticos →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
