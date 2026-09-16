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
const TITLE = "Software de citas para clínicas estéticas | Cero Manual"
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
    a: "Los precios varían según el programa, el plan y el número de profesionales o centros: unos cobran por usuario y otros por centro, así que compara siempre la tarifa vigente en la web de cada proveedor. Lo relevante no es el precio en sí, sino lo que evita perder: si reduce no-shows o huecos en el calendario, calcula cuántas citas recuperadas al mes necesitas para cubrir la cuota.",
  },
  {
    q: "¿Puedo usar Google Calendar en vez de un software específico?",
    a: "Puedes, y muchas clínicas pequeñas empiezan así. El problema aparece cuando creces: varios profesionales, salas compartidas, confirmaciones manuales y ningún control sobre no-shows. Un software específico para clínicas trae preparado lo propio del sector —recordatorios y confirmaciones a pacientes, reserva online por tratamiento y visión conjunta de profesionales y salas—, que en un calendario de uso general tendrías que montar o resolver a mano.",
  },
  {
    q: "¿El software de citas ya evita los no-shows por sí solo?",
    a: "Ayuda, pero no los elimina. Un buen software envía recordatorios y permite confirmar o cancelar con un clic, lo que reduce las ausencias. Pero si el paciente no contesta o tiene una duda de última hora fuera de horario, alguien tiene que mantener esa conversación: algunos programas lo cubren en parte, y si el tuyo no, ahí es donde entra un agente con IA que la atienda por WhatsApp.",
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
            funcionalidades no pueden faltar, qué tipos vas a encontrar en España, dónde se queda
            corto el software tradicional y cuándo tiene sentido sumar
            automatización con IA.
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
            vez, algo que en una agenda de uso general tienes que resolver a mano.
          </P>

          <H2>Funcionalidades imprescindibles en un software de citas</H2>
          <P>
            Lo primero es un calendario que soporte varios profesionales y salas a la vez, con
            colores o vistas separadas para no mezclar la agenda de cada uno. Sin esto, cualquier
            clínica con más de una persona atendiendo acaba con solapamientos y confusión.
          </P>
          <P>
            Lo segundo, y quizás lo más rentable, es{" "}
            <InternalLink href="/blog/recordatorios-citas-whatsapp-clinica">
              la confirmación y el recordatorio automáticos
            </InternalLink>
            . Si nadie confirma la cita, que el paciente venga depende de que se acuerde; un
            recordatorio con antelación que pida respuesta le da la ocasión de confirmar o de
            avisar a tiempo si no puede venir.
          </P>
          <P>
            Lo tercero es la reserva online, para que el paciente pueda pedir cita sin llamar ni
            esperar a que alguien conteste. Y lo cuarto es la{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-estetica">
              gestión de no-shows y lista de espera
            </InternalLink>
            : que el sistema avise cuando alguien cancela para poder ofrecer ese hueco a
            otro paciente antes de que se quede vacío.
          </P>

          <H2>Qué tipos de software de citas hay en España</H2>
          <P>
            En el mercado español conviven dos tipos de soluciones. Por un lado, los{" "}
            <InternalLink href="/blog/software-gestion-clinicas-esteticas">
              softwares específicos del sector estética y salud
            </InternalLink>
            , que además de la agenda incluyen ficha de
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
            Un software de citas se centra en organizar lo que ya está agendado; lo que llega antes
            de convertirse en cita depende de lo que incluya cada programa. Y ahí está el reto,
            porque una parte de las consultas de una clínica llega fuera de horario — por la
            noche, en fin de semana o con la agenda ya llena.
          </P>
          <P>
            WhatsApp es hoy el canal donde los pacientes preguntan primero por precios,
            disponibilidad o dudas sobre un tratamiento. Algunos programas ya envían
            recordatorios o tienen asistentes por ese canal; otros no responden por WhatsApp ni
            escriben a los pacientes que dejan de venir. Revisa qué cubre el tuyo antes de
            añadir nada.
          </P>

          <H2>Cuándo complementar tu software de citas con IA</H2>
          <P>
            El momento de dar el siguiente paso llega cuando el cuello de botella ya no es la
            agenda, sino la falta de tiempo del equipo para responder todo lo que entra. Ahí es
            donde WhatsApp se vuelve clave: es el canal por el que muchos pacientes ya escriben a
            la clínica, y donde esperan que alguien les conteste.
          </P>
          <P>
            Un agente con IA puede atender esas conversaciones fuera de horario, resolver dudas
            frecuentes, dejar la cita reservada y pasar a una persona del equipo los casos que la
            necesitan. Si quieres ver qué debe tener ese software base antes
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
              Un aviso que nadie contesta no te dice si el paciente va a venir. Los
              recordatorios automáticos por WhatsApp piden confirmación y liberan el hueco si
              no puede venir.
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
