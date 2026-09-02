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

const PATH = "/blog/software-gestion-citas-clinica-estetica"
const DATES = articleDates("software-gestion-citas-clinica-estetica")
const TITLE = "Software de gestión de citas para clínicas estéticas: guía 2026 | Cero Manual"
const DESCRIPTION =
  "¿Buscas un software de gestión de citas para tu clínica estética? Te explicamos qué necesitas, qué opciones existen y cuándo automatizar con IA."
const HEADLINE =
  "Software de gestión de citas para clínicas estéticas: qué necesitas realmente"

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
    q: "¿Qué diferencia hay entre un software de citas y un CRM?",
    a: "Un software de citas se centra en el calendario: quién viene, cuándo y con qué profesional. Un CRM va un paso más allá y guarda el histórico de cada paciente, sus tratamientos y, en muchos casos, la facturación. Muchas clínicas empiezan solo con citas y añaden el CRM cuando necesitan hacer seguimiento comercial, no solo organizar la agenda.",
  },
  {
    q: "¿Cuánto cuesta un software de gestión de citas?",
    a: "Los precios varían según el número de profesionales, salas y funcionalidades, pero suelen moverse en un rango asequible mensual por usuario. Lo relevante no es el precio en sí, sino lo que evita perder: si reduce no-shows o huecos en el calendario, se amortiza rápido con muy pocas citas recuperadas al mes.",
  },
  {
    q: "¿Puedo usar Google Calendar en vez de un software específico?",
    a: "Puedes, y muchas clínicas pequeñas empiezan así. El problema aparece cuando creces: varios profesionales, salas compartidas, confirmaciones manuales y ningún control sobre no-shows. Un software específico añade recordatorios automáticos, reserva online y visión conjunta de todo el equipo, cosas que un calendario genérico no resuelve bien.",
  },
  {
    q: "¿El software de citas ya evita los no-shows por sí solo?",
    a: "Ayuda, pero no los elimina. Un buen software envía recordatorios y permite confirmar o cancelar con un clic, lo que reduce las ausencias. Pero si el paciente no contesta o tiene una duda de última hora fuera de horario, el software no responde esa conversación — ahí es donde entra la automatización con IA por encima del software.",
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

export default function SoftwareGestionCitasClinicaEsteticaPage() {
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
            12 de julio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Si en tu clínica estética las citas se gestionan a mano — un cuaderno, una hoja de
            cálculo o el calendario de Google compartido entre varias personas — seguramente ya
            conoces el problema: huecos que aparecen sin explicación, confirmaciones que nadie
            hizo y pacientes que simplemente no aparecen el día de la cita.
          </P>
          <P>
            Un software de gestión de citas no es un lujo para clínicas grandes: es la base que
            evita que la agenda dependa de la memoria de una persona. El problema es que hay
            muchas opciones y no todas resuelven lo mismo.
          </P>
          <P>
            En este artículo vas a ver qué es exactamente un software de gestión de citas, qué
            funcionalidades no pueden faltar, cuáles son los más usados en clínicas estéticas en
            España, dónde se queda corto el software tradicional y cuándo tiene sentido añadir
            automatización con IA por encima.
          </P>

          <H2>Qué es un software de gestión de citas para clínicas estéticas</H2>
          <P>
            Un software de gestión de citas es la herramienta donde se organiza el calendario de
            la clínica: qué paciente viene, a qué hora, con qué profesional y en qué sala o
            cabina. Sustituye al cuaderno o la hoja de cálculo por un sistema centralizado que
            todo el equipo puede consultar y actualizar en tiempo real.
          </P>
          <P>
            No es lo mismo que un calendario genérico. Un software pensado para clínicas añade
            cosas específicas del sector: duración distinta según el tratamiento, bloqueo de
            salas o aparatos concretos, y visibilidad de la ocupación de cada profesional a la
            vez, algo que una agenda de uso general no contempla.
          </P>

          <H2>Funcionalidades imprescindibles en un software de citas</H2>
          <P>
            Lo primero es un calendario que soporte varios profesionales y salas a la vez, con
            colores o vistas separadas para no mezclar la agenda de cada uno. Sin esto, cualquier
            clínica con más de una persona atendiendo acaba con solapamientos y confusión.
          </P>
          <P>
            Lo segundo, y quizás lo más rentable, es la confirmación y el recordatorio
            automáticos. Las clínicas que no confirman la cita de alguna forma suelen registrar
            entre un <strong>12% y un 19% de no-shows</strong>, un porcentaje que baja de forma
            notable en cuanto se envía un recordatorio con antelación.
          </P>
          <P>
            Lo tercero es la reserva online, para que el paciente pueda pedir cita sin llamar ni
            esperar a que alguien conteste. Y lo cuarto es la gestión de no-shows y lista de
            espera: que el sistema avise cuando alguien cancela para poder ofrecer ese hueco a
            otro paciente antes de que se quede vacío.
          </P>

          <H2>Los más usados en clínicas estéticas en España</H2>
          <P>
            En el mercado español conviven dos tipos de soluciones. Por un lado, los softwares
            específicos del sector estética y salud, que además de la agenda incluyen ficha de
            tratamientos, fotos de seguimiento o gestión de bonos. Por otro, las herramientas de
            reserva online más ligeras, centradas sobre todo en que el paciente pueda pedir cita
            por su cuenta.
          </P>
          <P>
            Más que fijarte en un nombre concreto, lo útil es identificar qué necesitas: si tu
            prioridad es la ficha clínica y el seguimiento, un software específico de estética
            encaja mejor; si lo que buscas es simplemente ordenar la agenda, una herramienta de
            reserva más sencilla puede ser suficiente. Si quieres profundizar en qué criterios
            usar para elegir bien, tienes una guía completa en{" "}
            <InternalLink href="/blog/mejor-software-gestion-clinica-estetica">
              mejor software de gestión para clínicas estéticas
            </InternalLink>
            .
          </P>

          <H2>Limitaciones del software de citas tradicional</H2>
          <P>
            Por muy bueno que sea, un software de citas solo actúa dentro de su propio sistema:
            organiza lo que ya está agendado, pero no atiende lo que llega antes de convertirse en
            cita. Y ahí está el problema, porque hasta un <strong>40% de las consultas</strong> de
            una clínica llegan fuera de horario — por la noche, en fin de semana o con la agenda
            ya llena.
          </P>
          <P>
            Tampoco responde WhatsApp, que es hoy el canal donde los pacientes preguntan primero
            por precios, disponibilidad o dudas sobre un tratamiento. Y no hace seguimiento
            proactivo: si un paciente no vuelve, el software se limita a guardar el dato, pero
            nadie le escribe para recuperarlo.
          </P>

          <H2>Cuándo añadir automatización con IA a tu software de citas</H2>
          <P>
            El momento de dar el siguiente paso llega cuando el cuello de botella ya no es la
            agenda, sino la falta de tiempo del equipo para responder todo lo que entra. Ahí es
            donde WhatsApp se vuelve clave: es el canal con mayor tasa de apertura que existe,
            entre un <strong>95% y un 98%</strong>, muy por encima del email o las llamadas.
          </P>
          <P>
            Un agente con IA puede atender esas conversaciones fuera de horario, resolver dudas
            frecuentes y agendar la cita directamente sobre el mismo calendario que ya usas, sin
            sustituir tu software de citas. Si quieres ver qué debe tener ese software base antes
            de añadir esta capa y cómo elegir sin equivocarte, revisa nuestra guía de{" "}
            <InternalLink href="/blog/mejor-software-gestion-clinica-estetica">
              mejor software de gestión para clínicas estéticas
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
              ¿Ya tienes software de citas pero sigues perdiendo consultas?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Casi todos los software de citas envían un aviso, pero ninguno gestiona la
              respuesta del paciente. Los recordatorios automáticos por WhatsApp se conectan
              a la agenda que ya usas, piden confirmación y liberan el hueco si no puede venir.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver los recordatorios automáticos →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
