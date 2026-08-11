import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/coste-real-no-shows-clinica-dental"
const TITLE = "El coste real de los no-shows en tu clínica dental: cómo calcularlo | Cero Manual"
const DESCRIPTION =
  "Los no-shows en clínicas dentales cuestan más de lo que parece. Te explicamos cómo calcular tu pérdida real y qué puedes hacer para reducirla."
const HEADLINE =
  "El coste real de los no-shows en tu clínica dental (y cómo calcularlo con tus propios números)"

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
    q: "¿Cómo sé cuántos no-shows tiene realmente mi clínica dental?",
    a: "Lo más sencillo es revisar la agenda de los últimos dos o tres meses y contar cuántas citas se marcaron como \"no asistió\" o quedaron simplemente vacías sin aviso previo. Divide ese número entre el total de citas programadas en el mismo periodo y obtendrás tu porcentaje real. La mayoría de clínicas dentales en España se mueven entre el 12% y el 19%, así que si tu cifra está en ese rango o por encima, hay margen claro de mejora.",
  },
  {
    q: "¿El coste de un no-show es solo lo que se hubiera facturado en esa cita?",
    a: "No, esa es solo la parte más visible. Al coste directo de la cita perdida hay que sumar el tiempo del profesional y del equipo que queda sin uso, el coste fijo del sillón y la consulta durante ese hueco, y el efecto indirecto de no haber podido ofrecer ese hueco a otro paciente que sí habría asistido. Cuando se suman todos estos factores, la pérdida real suele ser bastante mayor que el precio del tratamiento que tocaba ese día.",
  },
  {
    q: "¿Cuánto puede llegar a perder al mes una clínica dental por no-shows?",
    a: "Depende del tamaño de la clínica, del número de sillones y del precio medio de las citas, pero en clínicas dentales de tamaño medio las estimaciones del sector hablan de pérdidas que pueden llegar hasta los 7.500€ al mes solo por huecos de agenda que se quedan vacíos sin aviso. En clínicas más pequeñas la cifra es menor, pero el impacto proporcional sobre la facturación mensual puede ser igual o más significativo.",
  },
  {
    q: "¿Realmente los recordatorios automáticos reducen tanto los no-shows?",
    a: "Sí, y la diferencia es medible. Los datos del sector indican que los recordatorios automáticos por WhatsApp pueden reducir los no-shows hasta en un 40%, gracias en parte a que la tasa de apertura de WhatsApp está entre el 95% y el 98%, muy por encima de un SMS o una llamada que no se contesta. Aplicado a las cifras anteriores, eso significa recuperar una parte muy relevante de esos huecos perdidos cada mes, sin cambiar nada más en la forma de trabajar de la clínica.",
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

export default function CosteRealNoShowsClinicaDentalArticlePage() {
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
            Un no-show —un paciente que no acude a su cita y no avisa— se suele archivar
            mentalmente como "mala suerte" o "cosas que pasan". El problema es que, cuando se
            repiten varias veces a la semana, dejan de ser una anécdota y se convierten en un
            agujero silencioso en la facturación que muchas clínicas dentales nunca llegan a
            cuantificar.
          </P>
          <P>
            En este artículo vas a aprender qué costes directos genera cada no-show, qué costes
            indirectos no se ven a simple vista pero también duelen, cómo calcular tu pérdida
            real con tus propios números, cuánto pierden de media las clínicas dentales en
            España, y qué puedes hacer para reducir ese coste ya desde el primer mes.
          </P>

          <H2>Qué costes directos genera un no-show en una clínica dental</H2>
          <P>
            El coste más evidente de un no-show es la facturación que se pierde por esa cita
            concreta: si un paciente no aparece a una revisión, una limpieza o un tratamiento de
            mayor importe, ese ingreso simplemente no se produce.
          </P>
          <P>
            Pero el hueco vacío también tiene un coste fijo asociado: el sillón, la consulta, el
            material preparado y, sobre todo, el tiempo del odontólogo y del auxiliar que estaban
            reservados para esa franja. Ese tiempo no se puede "guardar" para otro momento; se
            pierde igual que si la clínica hubiera estado cerrada esa hora.
          </P>
          <P>
            Con una tasa de no-shows que en clínicas dentales se mueve habitualmente entre el 12%
            y el 19% de las citas programadas, estos costes directos no son un caso aislado:
            ocurren todas las semanas, en mayor o menor medida, en prácticamente cualquier
            clínica que no tenga un sistema activo para evitarlo.
          </P>

          <H2>Qué costes indirectos no se ven pero también duelen</H2>
          <P>
            Más allá de la pérdida inmediata, cada no-show tiene un coste de oportunidad: ese
            hueco podría haber sido ocupado por otro paciente, ya fuera alguien en lista de
            espera o alguien que llamó pidiendo cita y al que se le dijo que no había
            disponibilidad próxima.
          </P>
          <P>
            También hay un coste de planificación. Cuando el equipo descubre el no-show en el
            momento —porque el paciente simplemente no llega—, ya es demasiado tarde para
            reorganizar la agenda de esa franja. El hueco se queda vacío y, además, genera tiempos
            muertos que afectan al resto del día.
          </P>
          <P>
            Por último, está el coste reputacional indirecto: si la clínica tiene que cancelar o
            retrasar citas de otros pacientes porque la agenda está "llena sobre el papel" pero en
            la práctica hay huecos vacíos por no-shows, la percepción de organización de la
            clínica se resiente.
          </P>

          <H2>Cómo calcular tu pérdida real por no-shows</H2>
          <P>
            Para tener una cifra realista, basta con un cálculo sencillo. Necesitas tres datos de
            los últimos dos o tres meses: el número total de citas programadas, el número de
            no-shows, y el precio medio de una cita (puedes usar la facturación total dividida
            entre el número de citas atendidas).
          </P>
          <P>
            La fórmula es: <strong>número de no-shows al mes × precio medio de la cita = pérdida
            directa mensual</strong>. Por ejemplo, una clínica con 25 citas diarias, 5 días a la
            semana, y una tasa de no-shows del 15%, tiene aproximadamente 18-19 no-shows a la
            semana. Si el precio medio de cita es de 70€, eso son más de 1.300€ a la semana, o más
            de 5.000€ al mes, solo en pérdida directa —sin contar el coste de oportunidad de no
            haber podido cubrir esos huecos con otros pacientes.
          </P>
          <P>
            Este número es el que conviene tener siempre presente, porque es el que justifica
            cualquier inversión en un sistema de recordatorios o confirmación automática: si esa
            inversión cuesta una fracción de lo que se pierde cada mes, el retorno es prácticamente
            inmediato.
          </P>

          <H2>Cuánto pierden de media las clínicas dentales en España</H2>
          <P>
            Aplicando este cálculo a clínicas dentales de tamaño medio en España —entre 1 y 3
            sillones, con una agenda razonablemente ocupada—, las estimaciones del sector apuntan
            a pérdidas que pueden llegar hasta los <strong>7.500€ al mes</strong> únicamente por
            no-shows no gestionados, sumando el coste directo y el coste de oportunidad de los
            huecos no recuperados.
          </P>
          <P>
            En clínicas más pequeñas, con una sola consulta, la cifra absoluta es menor, pero el
            porcentaje sobre la facturación total puede ser igual o más alto: cada no-show pesa
            proporcionalmente más cuando la agenda diaria tiene menos citas en total.
          </P>
          <P>
            En cualquiera de los dos casos, el patrón es el mismo: el coste de los no-shows no es
            un gasto fijo inevitable, sino una variable que depende directamente de si la clínica
            tiene o no un proceso activo para reducirlos.
          </P>

          <H2>Cómo reducir ese coste desde el primer mes</H2>
          <P>
            La palanca más rápida y con mejor retorno es el recordatorio automático antes de la
            cita. Según los datos del sector, los recordatorios automáticos por WhatsApp pueden
            reducir los no-shows hasta en un 40%, gracias a que la tasa de apertura de WhatsApp
            está entre el 95% y el 98% —muy por encima de un SMS que muchas veces ni se llega a
            leer.
          </P>
          <P>
            Aplicado a la cifra de pérdida real que has calculado en el apartado anterior, una
            reducción del 40% en los no-shows se traduce directamente en recuperar buena parte de
            ese importe cada mes, sin necesidad de captar un solo paciente nuevo: simplemente
            aprovechando mejor la agenda que ya tienes.
          </P>
          <P>
            Puedes ver con más detalle cómo se configura este tipo de sistema, qué mensajes
            funcionan mejor y en qué momentos enviarlos, en el artículo sobre{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              cómo reducir los no-shows en una clínica dental
            </InternalLink>
            . Calcular tu pérdida real es el primer paso; el segundo es poner en marcha el sistema
            que la reduce desde el primer mes, como se explica en{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              esa misma guía
            </InternalLink>
            .
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
              Haz el cálculo con los números de tu clínica
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Introduce tus citas al día, tu ticket medio y tus días de trabajo al mes, y verás
              en segundos cuánto te cuestan los no-shows de tu clínica.
            </p>
            <Link
              href="/calculadora-no-shows"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Calcular mi pérdida por no-shows →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
