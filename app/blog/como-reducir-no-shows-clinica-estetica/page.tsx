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

const PATH = "/blog/como-reducir-no-shows-clinica-estetica"
const DATES = articleDates("como-reducir-no-shows-clinica-estetica")
const TITLE = "Cómo reducir los no-shows en tu clínica estética | Cero Manual"
const DESCRIPTION =
  "Los no-shows cuestan hasta 7.500€/mes a clínicas estéticas. Te explicamos cómo reducirlos con recordatorios automáticos desde el primer mes."
const HEADLINE = "Cómo reducir los no-shows en tu clínica estética y dejar de perder ingresos"

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
    q: "¿Cuánto dinero pierde realmente una clínica estética por los no-shows?",
    a: "Depende del ticket medio y del volumen de citas, pero en clínicas estéticas con tratamientos de 80€-300€ y una agenda con varias citas diarias, las pérdidas pueden llegar a los 7.500€ al mes solo en huecos que no se llenan a tiempo. A eso hay que sumarle el coste de oportunidad: ese hueco podría haberse ofrecido a otro paciente que sí quería venir.",
  },
  {
    q: "¿Por qué los pacientes de estética no avisan cuando no van a venir?",
    a: "En la mayoría de los casos no es mala intención: simplemente se olvidan, porque la cita se reservó hace semanas y no ha vuelto a aparecer en su cabeza hasta que ya es tarde. También influye que cancelar suele requerir llamar por teléfono, algo que mucha gente evita por pereza o por no «molestar» — así que, en lugar de avisar, simplemente no aparecen.",
  },
  {
    q: "¿Es suficiente con enviar un SMS o un email de recordatorio?",
    a: "No suele bastar. Los SMS y los emails tienen tasas de apertura mucho más bajas y, sobre todo, no generan ninguna acción — el paciente los lee (o no) y no hay forma sencilla de confirmar o cancelar desde ahí. WhatsApp, en cambio, se abre casi siempre y permite responder con un simple mensaje, lo que convierte el recordatorio en una confirmación activa.",
  },
  {
    q: "¿Cuánto tiempo tarda en notarse la reducción de no-shows?",
    a: "Normalmente desde el primer mes. En cuanto se activan los recordatorios automáticos por WhatsApp con confirmación, las clínicas suelen ver una reducción de alrededor del 40% en sus no-shows, porque los huecos que antes se quedaban vacíos sin previo aviso ahora se liberan con suficiente antelación para poder ofrecerlos a otro paciente.",
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

export default function ComoReducirNoShowsClinicaEsteticaArticlePage() {
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
            11 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            En cualquier negocio con agenda, los huecos que se quedan vacíos sin previo
            aviso duelen. Pero en una clínica estética duelen especialmente, porque el
            ticket medio suele ser alto: una sesión de tratamiento facial, depilación
            láser o medicina estética puede valer entre 80€ y 300€, y un hueco de una
            hora que no se llena no se recupera.
          </P>
          <P>
            Cuando esto pasa varias veces a la semana, las pérdidas se acumulan rápido —
            y muchas clínicas ni siquiera llevan la cuenta de cuánto les está costando
            realmente.
          </P>
          <P>
            En este artículo vamos a ver cuánto cuesta un no-show en una clínica
            estética, por qué pasa tan a menudo, y cómo un sistema de recordatorios
            automáticos por WhatsApp puede reducirlos de forma notable desde el primer
            mes.
          </P>

          <H2>¿Cuánto te cuesta un no-show en una clínica estética?</H2>
          <P>
            La tasa media de no-shows en clínicas estéticas se sitúa habitualmente entre
            el 12% y el 19% de las citas agendadas. Es decir, de cada diez citas que
            tienes en la agenda, una o dos pacientes no se presentan ni avisan.
          </P>
          <P>
            Si haces el cálculo con un ticket medio de tratamiento de estética, esa
            proporción puede traducirse en pérdidas de hasta 7.500€ al mes para una
            clínica con una agenda ocupada. Y eso sin contar el tiempo del personal que
            queda bloqueado esperando a un paciente que nunca llega, ni la oportunidad
            perdida de haber dado ese hueco a otra persona en lista de espera.
          </P>

          <H2>Por qué los pacientes de estética no avisan cuando no van a venir</H2>
          <P>
            La causa más habitual no es la mala fe, sino el olvido. Muchas citas de
            estética se reservan con semanas de antelación, y para cuando llega el día,
            la persona simplemente no se ha acordado — entre el trabajo, la rutina diaria
            y mil cosas más, esa cita ha quedado enterrada en el calendario.
          </P>
          <P>
            A esto se suma otro factor: cancelar suele requerir llamar por teléfono o
            escribir un mensaje explicando por qué no van a poder venir, algo que mucha
            gente prefiere evitar. Es más fácil simplemente no aparecer que tener esa
            conversación. El resultado es el mismo para la clínica: un hueco vacío y
            ningún aviso con el que reaccionar a tiempo.
          </P>

          <H2>La solución: confirmación activa por WhatsApp</H2>
          <P>
            La forma más efectiva de reducir los no-shows no es simplemente «recordar»
            la cita, sino pedir una confirmación activa — que el propio paciente
            responda diciendo que sí va a venir, o que avise con tiempo si no puede.
          </P>
          <P>
            WhatsApp es, con diferencia, el canal que mejor funciona para esto. Los
            mensajes de WhatsApp se abren entre un 95% y un 98% de las veces, frente a
            las tasas mucho más bajas de los SMS o los emails. Y al ser un canal
            conversacional, responder es tan fácil como escribir «sí» o «no puedo» — sin
            tener que llamar ni rellenar nada. En{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>{" "}
            puedes ver cómo funciona este sistema aplicado a una clínica.
          </P>

          <H2>Cómo implementar recordatorios automáticos en tu clínica</H2>
          <P>
            La implementación es más sencilla de lo que parece. Se conecta tu agenda
            (la que ya usas) con un sistema que envía automáticamente un recordatorio
            por WhatsApp un día o dos antes de la cita, pidiendo confirmación. Si el
            paciente confirma, no hace falta hacer nada más. Si avisa de que no puede
            venir, ese hueco queda libre con tiempo suficiente para ofrecerlo a otro
            paciente — por ejemplo, a alguien en lista de espera.
          </P>
          <P>
            Si además el paciente no responde en absoluto, el sistema puede enviar un
            segundo recordatorio más cercano a la fecha, reduciendo aún más el riesgo de
            que se quede en el limbo. Todo esto ocurre sin que nadie del equipo tenga que
            estar pendiente de enviar mensajes uno a uno. Puedes ver el detalle de cómo
            se configura en{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>
            .
          </P>

          <H2>Cuánto puedes recuperar desde el primer mes</H2>
          <P>
            Las clínicas que activan este tipo de recordatorios suelen ver una reducción
            de alrededor del 40% en sus no-shows ya en el primer mes. Si partías de una
            tasa del 15% y la bajas al 9%, sobre una agenda de 200 citas mensuales eso
            son unas 12 citas que antes se perdían y ahora se mantienen o se rellenan a
            tiempo.
          </P>
          <P>
            Con un ticket medio de 150€, esas 12 citas recuperadas representan
            aproximadamente 1.800€ al mes que antes se quedaban sobre la mesa — y eso
            sin necesidad de captar un solo paciente nuevo, simplemente aprovechando
            mejor la agenda que ya tienes.
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
              ¿Quieres dejar de perder ingresos por citas a las que nadie viene?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te ayudamos a montar un sistema de recordatorios automáticos por WhatsApp
              con confirmación activa, para que los huecos vacíos se reduzcan desde el
              primer mes sin añadir trabajo a tu equipo.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero reducir mis no-shows →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
