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

const PATH = "/blog/aumentar-ticket-medio-clinica-dental"
const DATES = articleDates("aumentar-ticket-medio-clinica-dental")
const TITLE = "Aumentar el ticket medio en clínica dental | Cero Manual"
const DESCRIPTION =
  "Cómo aumentar el ticket medio de tu clínica dental sin presionar al paciente: seguimiento de presupuestos y mensajes post-cita por WhatsApp."
const ARTICLE_DESCRIPTION =
  "Cómo subir el ticket medio de una clínica dental con los pacientes que ya tiene: seguimiento de presupuestos, mensajes después de la cita y el papel de WhatsApp."
const HEADLINE =
  "Cómo aumentar el ticket medio en tu clínica dental (sin presionar a tus pacientes)"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
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
    q: "¿Qué es exactamente el ticket medio en una clínica dental?",
    a: "El ticket medio es el importe promedio que genera cada cita o cada paciente en un periodo determinado. Se calcula dividiendo la facturación total entre el número de visitas. Aumentarlo no implica necesariamente subir precios: puede conseguirse ofreciendo tratamientos complementarios que el paciente ya necesitaba pero que nadie le había propuesto de forma clara y en el momento adecuado.",
  },
  {
    q: "¿Cómo puedo aumentar el ticket medio sin que los pacientes sientan que les estoy vendiendo?",
    a: "Depende del contexto y del momento. Informar a un paciente de que hay un tratamiento que puede mejorar su salud bucal justo después de una revisión, cuando la información sigue fresca, se percibe como asesoramiento. Lo mismo ocurre con el seguimiento post-cita: un mensaje de WhatsApp que recuerda una recomendación del dentista tiene mucho más recorrido que un email genérico días después.",
  },
  {
    q: "¿Cuánto puede aumentar el ticket medio con estas estrategias?",
    a: "Depende del punto de partida de cada clínica, y no hay una cifra que sirva para todas: lo razonable es anotar tu ticket medio antes de empezar y revisarlo al cabo de unos meses. Eso sí, como un paciente recurrente vuelve durante años, incluso un pequeño aumento en el ticket tiene un impacto significativo en la facturación total.",
  },
  {
    q: "¿El seguimiento por WhatsApp realmente funciona para proponer tratamientos?",
    a: "Sí, y la razón es el canal: WhatsApp es donde el paciente ya habla a diario, mientras que un email con una propuesta se queda a menudo sin abrir. Así la propuesta llega al paciente, que puede responder en el momento que le venga bien. El mensaje tiene que ser útil y personalizado: que haga referencia a algo que se habló en la consulta.",
  },
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: ARTICLE_DESCRIPTION,
  author: { "@type": "Person", name: "Joan - Cero Manual" },
  datePublished: DATES.published,
  dateModified: DATES.modified,
  publisher: {
    "@type": "Organization",
    name: "Cero Manual",
    logo: { "@type": "ImageObject", url: "https://ceromanual.es/logo.png" },
  },
  image: "https://ceromanual.es/logo.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://ceromanual.es${PATH}`,
  },
}

export default function AumentarTicketMedioClinicaDentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="px-6 py-28" style={{ backgroundColor: "#F5F2EE" }}>
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-150"
            style={{ color: "#8A8580" }}
          >
            ← Volver al blog
          </Link>

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
            14 de junio de 2026 · 6 min de lectura
          </p>

          <P>
            El ticket medio de una clínica dental se aumenta proponiendo a cada paciente el
            tratamiento que ya necesita en el momento en que está más receptivo, y haciendo
            seguimiento de lo que se habló en consulta, sobre todo de los presupuestos que se
            quedan sin respuesta. Es una palanca que actúa sobre los pacientes que ya tienes.
          </P>
          <P>
            Captar un paciente nuevo cuesta publicidad y consultas que no siempre acaban en
            cita; retener a uno que ya te conoce cuesta mucho menos. Por eso conviene revisar
            el ticket medio antes de invertir más en{" "}
            <InternalLink href="/blog/marketing-clinica-dental">
              publicidad o en campañas de captación
            </InternalLink>
            .
          </P>

          <H2>Qué es el ticket medio y por qué importa en una clínica dental</H2>
          <P>
            El ticket medio es el importe promedio que ingresa la clínica por cada cita o por
            cada paciente activo. Es uno de los indicadores más directos de la salud económica
            de una clínica porque mide cuánto valor se genera en cada contacto con el
            paciente.
          </P>
          <P>
            En una clínica dental, un paciente recurrente genera ingresos a lo largo de los
            años, contando revisiones periódicas, tratamientos de ortodoncia, implantes, blanqueamientos y
            otras intervenciones. Sin embargo, muchas clínicas no aprovechan ese potencial
            porque no tienen{" "}
            <InternalLink href="/blog/mejor-crm-clinicas-dentales">
              un sistema para detectar el momento adecuado
            </InternalLink>{" "}
            en que proponer cada
            tratamiento al paciente correcto.
          </P>

          <H2>Estrategias para aumentar el ticket medio sin ser invasivo</H2>
          <P>
            La diferencia entre presionar y asesorar está en el contexto y en el momento. Un
            dentista que al final de una revisión explica que hay una zona que conviene tratar
            antes de que empeore no está haciendo venta: está informando. El problema es que,
            en la vorágine del día a día, esas conversaciones se quedan en la consulta y no
            llegan a materializarse porque el paciente sale sin haber tomado una decisión.
          </P>
          <P>
            Algunas estrategias que funcionan sin resultar intrusivas:
          </P>
          <P>
            <strong>Propuestas en el momento de mayor receptividad.</strong> El paciente está
            más dispuesto a escuchar justo después de que el dentista le ha explicado su
            situación bucal. Ese es el mejor momento para presentar un presupuesto o agendar
            una segunda cita para un tratamiento adicional, no semanas después.
          </P>
          <P>
            <strong>Seguimiento con recordatorio de presupuesto pendiente.</strong> Muchos
            pacientes piden un presupuesto y luego no dan respuesta. Un recordatorio por
            WhatsApp dos o tres días después, amable y sin presión, recupera una parte
            significativa de esos presupuestos que de otro modo se quedan sin respuesta.
          </P>
          <P>
            <strong>Ofrecer tratamientos relacionados en revisiones de rutina.</strong> Una
            revisión es el momento ideal para detectar necesidades adicionales —blanqueamiento,
            revisión de empastes existentes, ortodoncia preventiva— y plantearlas de forma
            natural como parte del seguimiento del historial del paciente.
          </P>

          <H2>Cómo el seguimiento post-cita aumenta el ticket</H2>
          <P>
            Un paciente que sale de la consulta con un presupuesto en papel tiene pocas
            probabilidades de retomarlo por iniciativa propia; un paciente que recibe un
            mensaje de WhatsApp 24 horas después recordándole lo que se habló tiene muchas más
            posibilidades de dar el paso.
          </P>
          <P>
            El seguimiento post-cita también abre la puerta a proponer tratamientos que el
            dentista mencionó pero que quedaron en segundo plano. Por ejemplo, si durante una
            revisión se comentó que el blanqueamiento sería adecuado en unos meses, ese
            recordatorio puede programarse con antelación suficiente para que llegue cuando el
            paciente esté listo.
          </P>
          <P>
            Este tipo de seguimiento, cuando se automatiza, no requiere esfuerzo del equipo de
            la clínica y llega a todos los pacientes, también a aquellos a los que nadie se
            acuerda de llamar.
          </P>

          <H2>El papel de WhatsApp en el upsell de servicios dentales</H2>
          <P>
            WhatsApp es la aplicación que el paciente abre cada día para hablar con su gente,
            y un mensaje que llega ahí se ve mucho antes que un email. Por eso es el canal
            donde una propuesta tiene más opciones de leerse y de recibir respuesta.
          </P>
          <P>
            Una propuesta de tratamiento enviada por WhatsApp, en tono conversacional y
            haciendo referencia a lo que se habló en consulta, tiene muchas más posibilidades
            de recibir respuesta en el mismo día.
          </P>
          <P>
            WhatsApp también permite que el paciente responda en el momento que le viene bien
            —fuera del horario de la clínica si es necesario—, lo que elimina la fricción de
            tener que llamar durante el horario de atención. Muchos pacientes escriben al
            salir de trabajar o en fin de semana.
          </P>

          <H2>Cuánto puedes aumentar tu facturación con estas estrategias</H2>
          <P>
            El impacto de aumentar el ticket medio depende del volumen de pacientes activos y
            del punto de partida de la clínica. La cuenta es sencilla: pacientes activos al
            mes × ticket medio, antes y después del cambio.
          </P>
          <P>
            Un ejemplo con números inventados, solo para ilustrarlo: imagina una clínica con
            200 pacientes activos al mes y un ticket medio de 80 € que consigue subirlo a
            100 €. Pasaría de facturar 16.000 € a 20.000 € al mes. Ese salto vendría de recuperar presupuestos pendientes, proponer
            tratamientos complementarios y fidelizar a los pacientes existentes para que
            vuelvan con más frecuencia.
          </P>
          <P>
            Para ver cómo encaja esta estrategia dentro de un plan completo de crecimiento para
            tu clínica, puedes consultar la guía sobre{" "}
            <InternalLink href="/blog/como-aumentar-facturacion-clinica-dental">
              cómo aumentar la facturación de una clínica dental
            </InternalLink>
            , donde desarrollamos con más detalle las palancas disponibles. Aumentar el{" "}
            <InternalLink href="/blog/como-aumentar-facturacion-clinica-dental">
              ticket medio
            </InternalLink>{" "}
            es la más rápida de aplicar.
          </P>
        </article>

        <div className="mt-4">
          <ServiceFAQ faqs={faqs} />
        </div>

        <div className="max-w-3xl mx-auto px-0 pb-4">
          <div
            className="rounded-2xl p-10 md:p-12 text-center"
            style={{ backgroundColor: "#F0F4EF", border: "1px solid #7D9B76" }}
          >
            <h2
              className="text-2xl md:text-3xl font-semibold leading-snug mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              ¿Quieres aumentar tu facturación sin captar más pacientes?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Descubre todas las estrategias disponibles para hacer crecer tu clínica dental
              con los pacientes que ya tienes.
            </p>
            <Link
              href="/blog/como-aumentar-facturacion-clinica-dental"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#ffffff" }}
            >
              Ver cómo aumentar la facturación →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
