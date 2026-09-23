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

const PATH = "/blog/lista-espera-clinica-dental"
const DATES = articleDates("lista-espera-clinica-dental")
const TITLE = "Lista de espera para clínicas dentales | Cero Manual"
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
    publishedTime: DATES.publishedTime,
    modifiedTime: DATES.modifiedTime,
  },
}

const faqs = [
  {
    q: "¿Qué pacientes deberían estar en la lista de espera?",
    a: "Cualquiera que haya mostrado interés en adelantar su cita o que esté esperando una primera cita disponible. También son buenos candidatos los pacientes que escriben fuera de horario, cuando nadie puede darles cita en el momento, y que pueden no haber encontrado hueco en la agenda inmediata.",
  },
  {
    q: "¿Cómo aviso a un paciente sin que parezca spam?",
    a: "Haz que el mensaje suene a oportunidad: «se ha liberado un hueco antes de lo previsto, ¿te interesa?». Si además puede confirmarlo con una sola respuesta, el paciente lo percibe como un favor. Evita cualquier tono de venta o de presión.",
  },
  {
    q: "¿Una lista de espera funciona igual en clínicas pequeñas y grandes?",
    a: "El principio es el mismo, pero el volumen cambia el método. En una clínica pequeña puede bastar con una lista ordenada por fecha de interés; en una clínica con más agenda, conviene automatizar el aviso porque los huecos se liberan y se ocupan mucho más rápido de lo que se puede gestionar a mano.",
  },
  {
    q: "¿Qué pasa si nadie de la lista responde a tiempo?",
    a: "Para evitarlo, conviene avisar a varios pacientes casi a la vez y dejar claro que el hueco es para quien confirme primero. Así evitas que el espacio quede vacío mientras esperas la respuesta de una sola persona.",
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
            Para crear una lista de espera efectiva en tu clínica dental, apunta a los
            pacientes que quieren adelantar su cita o esperan el primer hueco libre, con el
            tipo de hueco que buscan, con cuánta antelación pueden acudir y un orden de
            prioridad. Cuando alguien cancela, avisas por WhatsApp a varios candidatos a la
            vez y el hueco es para quien confirma primero; si lo automatizas, pasa sin que
            nadie del equipo tenga que estar pendiente.
          </P>
          <P>
            Sin ese sistema, el hueco que deja una cancelación se queda vacío hasta el día
            siguiente, o hasta que alguien lo note. Entre no-shows y cancelaciones, cualquier
            clínica dental ve cómo se le caen citas cada semana, y{" "}
            <InternalLink href="/blog/coste-real-no-shows-clinica-dental">
              esos huecos se pierden uno a uno
            </InternalLink>
            .
          </P>

          <H2>Qué es una lista de espera y para qué sirve en una clínica dental</H2>
          <P>
            Una lista de espera es un registro de pacientes que han mostrado
            interés en conseguir una cita antes de la fecha que tienen asignada — o que
            todavía no tienen una cita asignada y están esperando el primer hueco
            disponible.
          </P>
          <P>
            Su utilidad aparece en el momento exacto en que se libera un hueco: en lugar de
            que esa franja quede vacía hasta que alguien revise la agenda, ya tienes a quién
            ofrecérsela.
          </P>
          <P>
            Otra fuente de pacientes para esta lista son los mensajes que llegan cuando la
            clínica ya ha cerrado. Quien escribe a las diez de la noche preguntando por
            disponibilidad ya ha mostrado interés, y puede entrar en la lista de espera
            hasta que aparezca el hueco adecuado.
          </P>

          <H2>Cómo organizar tu lista de espera</H2>
          <P>
            No hace falta una herramienta compleja para empezar, pero sí conviene tener
            unos criterios claros desde el primer día:
          </P>
          <P>
            <strong>Qué tipo de hueco busca cada paciente.</strong> Hay quien acepta
            cualquier hora libre y quien solo puede venir por la tarde.
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
            Sé claro también con los tiempos: indicar hasta cuándo está
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
            nadie tiene tiempo de hacer bien, y los huecos vuelven a perderse por falta de
            tiempo del equipo.
          </P>
          <P>
            Automatizar este proceso significa que, en cuanto se detecta una cancelación, el
            sistema identifica a los candidatos adecuados de la lista, les envía{" "}
            <InternalLink href="/blog/whatsapp-para-clinicas-dentales">
              un mensaje por WhatsApp
            </InternalLink>{" "}
            — la aplicación que el paciente tiene siempre a mano — y gestiona las respuestas
            hasta que el hueco queda ocupado. Todo esto sin que nadie del equipo tenga que
            estar pendiente del móvil.
          </P>
          <P>
            Este enfoque va de la mano de los recordatorios automáticos: como explicamos en{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              cómo reducir los no-shows en tu clínica dental
            </InternalLink>
            , una lista de espera bien gestionada es una de las cinco estrategias que más
            impacto tienen, porque convierte cada cancelación inevitable en una cita nueva.
          </P>

          <H2>Cuántos huecos puedes recuperar al mes</H2>
          <P>
            Para saber cuántos huecos se te escapan, suma los no-shows y las cancelaciones de
            un mes normal en tu agenda. Si salen varios por semana, a final de mes son unas
            cuantas citas que se podrían haber cubierto perfectamente con pacientes que ya
            estaban esperando.
          </P>
          <P>
            Los recordatorios automáticos bien planteados evitan una parte de esas ausencias.
            Las que quedan — las cancelaciones que siempre van a existir, porque son parte
            normal de cualquier agenda — son exactamente lo que una lista de espera bien
            gestionada puede recuperar.
          </P>
          <P>
            En la práctica, un hueco liberado puede ocuparse en cuestión de minutos. Si quieres ver el detalle completo de cómo combinar recordatorios
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
