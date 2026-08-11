import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"

const PATH = "/blog/lista-espera-clinica-dental"
const TITLE = "Cómo crear una lista de espera efectiva en tu clínica dental | Cero Manual"
const DESCRIPTION =
  "Una lista de espera bien gestionada convierte cancelaciones en citas nuevas automáticamente. Te explicamos cómo crearla y gestionarla sin esfuerzo."
const HEADLINE =
  "Cómo crear una lista de espera efectiva en tu clínica dental y no perder ni una cita"

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
    q: "¿Qué pacientes deberían estar en la lista de espera?",
    a: "Cualquiera que haya mostrado interés en adelantar su cita o que esté esperando una primera cita disponible. También son buenos candidatos los pacientes que escriben fuera de horario — hasta un 40% de las consultas de una clínica llegan así — y que pueden no haber encontrado hueco en la agenda inmediata.",
  },
  {
    q: "¿Cómo aviso a un paciente sin que parezca spam?",
    a: "La clave es que el mensaje suene a oportunidad, no a presión: «se ha liberado un hueco antes de lo previsto, ¿te interesa?». Si además puedes confirmarlo con una sola respuesta, el paciente lo percibe como un favor, no como una venta.",
  },
  {
    q: "¿Una lista de espera funciona igual en clínicas pequeñas y grandes?",
    a: "El principio es el mismo, pero el volumen cambia el método. En una clínica pequeña puede bastar con una lista ordenada por fecha de interés; en una clínica con más agenda, conviene automatizar el aviso porque los huecos se liberan y se ocupan mucho más rápido de lo que se puede gestionar a mano.",
  },
  {
    q: "¿Qué pasa si nadie de la lista responde a tiempo?",
    a: "Por eso conviene avisar a varios pacientes casi a la vez, no de uno en uno, y dejar claro que el hueco es para quien confirme primero. Así evitas que el espacio quede vacío mientras esperas la respuesta de una sola persona.",
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

export default function ListaEsperaClinicaDentalPage() {
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
            Cada vez que un paciente cancela su cita, pasa lo mismo en la mayoría de
            clínicas: el hueco se queda vacío hasta el día siguiente, o hasta que alguien lo
            note. Pero esa cancelación no tiene por qué ser una pérdida — puede ser una
            oportunidad para otro paciente que ya estaba esperando.
          </P>
          <P>
            Entre el 12% y el 19% de las citas de una clínica dental terminan en no-show o
            cancelación. Sin un sistema que reaccione a tiempo, todos esos huecos se pierden
            uno a uno, semana tras semana.
          </P>
          <P>
            En este artículo vas a ver qué es exactamente una lista de espera, cómo
            organizarla, cómo comunicarte con los pacientes que están en ella y cómo
            automatizar todo el proceso para que cada cancelación se convierta, casi
            siempre, en una cita nueva.
          </P>

          <H2>Qué es una lista de espera y para qué sirve en una clínica dental</H2>
          <P>
            Una lista de espera es, simplemente, un registro de pacientes que han mostrado
            interés en conseguir una cita antes de la fecha que tienen asignada — o que
            todavía no tienen una cita asignada y están esperando el primer hueco
            disponible.
          </P>
          <P>
            Su utilidad aparece en el momento exacto en que se libera un hueco: en lugar de
            que esa franja quede vacía hasta que alguien revise la agenda, ya tienes a quién
            ofrecérsela. El hueco se ocupa en minutos, no en días.
          </P>
          <P>
            Y hay una fuente de pacientes para esta lista que muchas clínicas no
            aprovechan: hasta un 40% de las consultas llegan fuera del horario de atención.
            Esas personas que escriben a las diez de la noche preguntando por
            disponibilidad son, muchas veces, las candidatas perfectas para entrar en la
            lista de espera — ya han mostrado interés, solo falta el hueco adecuado.
          </P>

          <H2>Cómo organizar tu lista de espera</H2>
          <P>
            No hace falta una herramienta compleja para empezar, pero sí conviene tener
            unos criterios claros desde el primer día:
          </P>
          <P>
            <strong>Qué tipo de hueco busca cada paciente.</strong> No es lo mismo alguien
            que acepta cualquier hora libre que alguien que solo puede venir por la tarde.
            Anotar esta preferencia evita ofrecer huecos que la persona no podrá aceptar.
          </P>
          <P>
            <strong>Con cuánta antelación puede acudir.</strong> Algunos pacientes pueden
            presentarse en una hora si se libera un hueco; otros necesitan al menos un día
            de margen. Saber esto te permite decidir a quién avisar primero según cuándo se
            libera la cita.
          </P>
          <P>
            <strong>Orden de prioridad.</strong> Lo habitual es respetar el orden de
            llegada, pero también puedes priorizar según el tipo de tratamiento o la
            urgencia que haya indicado el paciente.
          </P>
          <P>
            <strong>Fecha límite de validez.</strong> Una persona que lleva un mes en la
            lista sin que se le haya ofrecido nada probablemente ya haya resuelto su
            necesidad por otra vía. Revisar y depurar la lista periódicamente evita avisos a
            quien ya no los necesita.
          </P>

          <H2>Cómo comunicarte con los pacientes en espera</H2>
          <P>
            El tono con el que avisas a alguien de la lista de espera importa: debe sonar a
            oportunidad, no a hueco de relleno. Un mensaje como «se ha liberado una cita
            antes de lo previsto, ¿te interesa?» se percibe de forma muy distinta a «tenemos
            un hueco libre».
          </P>
          <P>
            Es importante también ser claro con los tiempos: indicar hasta cuándo está
            disponible ese hueco y pedir una respuesta concreta — «confírmanos en los
            próximos 30 minutos si quieres la cita» — para que el paciente entienda que debe
            actuar rápido, sin que suene a presión innecesaria.
          </P>
          <P>
            Y conviene avisar a más de una persona a la vez cuando el hueco es muy próximo
            en el tiempo. Si esperas la respuesta de un solo paciente antes de pasar al
            siguiente, es fácil que el hueco quede vacío de todas formas mientras esperas.
          </P>

          <H2>Automatizar la lista de espera para que funcione sola</H2>
          <P>
            Gestionar la lista de espera a mano funciona mientras el volumen es bajo. Pero
            en cuanto la clínica crece, revisar la lista, decidir a quién avisar y escribir
            el mensaje cada vez que se libera un hueco se convierte en una tarea más que
            nadie tiene tiempo de hacer bien — y los huecos vuelven a perderse, esta vez por
            falta de tiempo del equipo, no por falta de candidatos.
          </P>
          <P>
            Automatizar este proceso significa que, en cuanto se detecta una cancelación, el
            sistema identifica a los candidatos adecuados de la lista, les envía un mensaje
            por WhatsApp — el canal con un 95-98% de apertura — y gestiona las respuestas
            hasta que el hueco queda ocupado. Todo esto sin que nadie del equipo tenga que
            estar pendiente del móvil.
          </P>
          <P>
            Este enfoque va de la mano de los recordatorios automáticos: como explicamos en{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              cómo reducir los no-shows en tu clínica dental
            </InternalLink>
            , una lista de espera bien gestionada es una de las cinco estrategias que más
            impacto tienen, porque convierte cada cancelación inevitable en una cita nueva
            en lugar de en un hueco perdido.
          </P>
          <P>
            Cuando ambos sistemas trabajan juntos — recordatorios que reducen los no-shows y
            lista de espera que cubre las cancelaciones que aún ocurren — el resultado es
            una agenda que se autorregula prácticamente sola.
          </P>

          <H2>Cuántos huecos puedes recuperar al mes</H2>
          <P>
            Si tu clínica tiene una tasa de no-shows y cancelaciones del 12-19%, eso supone
            varios huecos vacíos cada semana — y, sumados a lo largo de un mes, una cantidad
            de citas que se podrían haber cubierto perfectamente con pacientes que ya
            estaban esperando.
          </P>
          <P>
            Con recordatorios automáticos bien planteados, esa tasa puede reducirse hasta un
            40%. Pero el porcentaje que queda — las cancelaciones que siempre van a existir,
            porque son parte normal de cualquier agenda — es exactamente lo que una lista de
            espera bien gestionada puede recuperar casi por completo.
          </P>
          <P>
            En la práctica, esto se traduce en que la mayoría de huecos que antes se quedaban
            vacíos hasta el día siguiente —o más— pasan a ocuparse en cuestión de minutos.
            Y eso, mes a mes, es agenda llena y facturación que antes simplemente se quedaba
            sobre la mesa. Si quieres ver el detalle completo de cómo combinar recordatorios
            y lista de espera, en{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              este artículo
            </InternalLink>{" "}
            tienes las cinco estrategias explicadas paso a paso.
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
              ¿Quieres que tu agenda se llene sola?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te explicamos cómo combinar recordatorios automáticos y lista de espera para
              dejar de perder citas por no-shows y cancelaciones.
            </p>
            <Link
              href="/blog/como-reducir-no-shows-clinica-dental"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo reducir los no-shows →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
