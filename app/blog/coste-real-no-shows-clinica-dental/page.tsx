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

const PATH = "/blog/coste-real-no-shows-clinica-dental"
const DATES = articleDates("coste-real-no-shows-clinica-dental")
const TITLE = "Coste real de los no-shows en clínica dental | Cero Manual"
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
    publishedTime: DATES.publishedTime,
    modifiedTime: DATES.modifiedTime,
  },
}

const faqs = [
  {
    q: "¿Cómo sé cuántos no-shows tiene realmente mi clínica dental?",
    a: "Lo más sencillo es revisar la agenda de los últimos dos o tres meses y contar cuántas citas se marcaron como \"no asistió\" o quedaron simplemente vacías sin aviso previo. Divide ese número entre el total de citas programadas en el mismo periodo y obtendrás tu porcentaje real. Ese dato vale más que cualquier media que leas por ahí, porque refleja a tus pacientes y tu forma de gestionar la agenda, y es el punto de partida para comprobar si lo que cambies funciona.",
  },
  {
    q: "¿El coste de un no-show es solo lo que se hubiera facturado en esa cita?",
    a: "No, esa es solo la parte más visible. Al coste directo de la cita perdida hay que sumar el tiempo del profesional y del equipo que queda sin uso, el coste fijo del sillón y la consulta durante ese hueco, y el efecto indirecto de no haber podido ofrecer ese hueco a otro paciente que sí habría asistido. Cuando se suman todos estos factores, la pérdida real suele ser bastante mayor que el precio del tratamiento que tocaba ese día.",
  },
  {
    q: "¿Cuánto puede llegar a perder al mes una clínica dental por no-shows?",
    a: "Depende del tamaño de la clínica, del número de sillones y del precio medio de las citas, así que una cifra general te dirá poco de tu caso. Lo fiable es hacer la cuenta: citas al día × días laborables del mes × tu tasa de no-shows × tu precio medio por cita. En clínicas más pequeñas el resultado es menor, pero el impacto proporcional sobre la facturación mensual puede ser igual o más significativo.",
  },
  {
    q: "¿Realmente los recordatorios automáticos reducen los no-shows?",
    a: "Atacan la causa más habitual, que es el olvido. Un recordatorio por WhatsApp llega a la aplicación que el paciente usa a diario y le pide que confirme o cambie la cita, así que muchas ausencias se convierten en avisos con margen para reaccionar, algo que no consigue un SMS, que no abre una conversación, o una llamada que no se contesta. Cuánto baja tu tasa depende de tus pacientes y de tu agenda: la forma de saberlo es medirla antes de empezar y volver a medirla unos meses después, con el mismo cálculo de este artículo.",
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
            real con tus propios números, de qué depende que esa cifra sea mayor o menor, y qué
            puedes hacer para reducirlo.
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
            Estos costes directos tampoco son un caso aislado: se repiten semana tras semana, en
            mayor o menor medida, en cualquier clínica que no tenga un sistema activo para
            evitarlo.
          </P>

          <H2>Qué costes indirectos no se ven pero también duelen</H2>
          <P>
            Más allá de la pérdida inmediata, cada no-show tiene un coste de oportunidad: ese
            hueco podría haber sido ocupado por otro paciente, ya fuera{" "}
            <InternalLink href="/blog/lista-espera-clinica-dental">
              alguien en lista de espera
            </InternalLink>{" "}
            o alguien que llamó pidiendo cita y al que se le dijo que no había
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
            directa mensual</strong>. Si no llevas la cuenta de los no-shows, puedes estimarlos
            así: citas al día × días laborables del mes × tu tasa de no-shows. Ese número,
            multiplicado por tu precio medio, es tu pérdida directa —sin contar todavía el coste
            de oportunidad de no haber podido cubrir esos huecos con otros pacientes.
          </P>
          <P>
            Este número es el que conviene tener siempre presente, porque es el que justifica
            cualquier inversión en un sistema de recordatorios o confirmación automática: si esa
            inversión cuesta una fracción de lo que se pierde cada mes, el retorno es prácticamente
            inmediato.
          </P>

          <H2>De qué depende cuánto pierde tu clínica dental</H2>
          <P>
            Una cifra media de pérdidas por no-shows sirve de poco, porque la cuenta cambia
            mucho de una clínica a otra: influyen el número de sillones, lo llena que esté la
            agenda, el tipo de tratamientos y su precio. Por eso conviene fiarse más del cálculo
            anterior, hecho con tus datos, que de cualquier estimación general.
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

          <H2>Cómo reducir ese coste</H2>
          <P>
            La palanca más rápida y con mejor retorno es el{" "}
            <InternalLink href="/blog/recordatorios-citas-whatsapp-clinica">
              recordatorio automático antes de la cita
            </InternalLink>
            . Por WhatsApp, el aviso llega a la aplicación que el paciente abre a lo largo del
            día y le pide que confirme o cambie la cita —algo que no consigue un SMS, que llega
            pero no abre una conversación en la que responder.
          </P>
          <P>
            Sobre la pérdida real que has calculado en el apartado anterior, cada no-show que se
            evita es una cita que vuelve a facturarse, sin necesidad de captar un solo paciente
            nuevo: simplemente aprovechando mejor la agenda que ya tienes.
          </P>
          <P>
            Puedes ver con más detalle cómo se configura este tipo de sistema, qué mensajes
            funcionan mejor y en qué momentos enviarlos, en el artículo sobre{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              cómo reducir los no-shows en una clínica dental
            </InternalLink>
            . Calcular tu pérdida real es el primer paso; el segundo es poner en marcha el sistema
            que la reduce, como se explica en{" "}
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
