import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import BlogSource from "@/components/BlogSource"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import H3 from "@/components/blog/H3"
import InternalLink from "@/components/blog/InternalLink"
import ExternalLink from "@/components/blog/ExternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/crm-para-clinicas-esteticas"
const DATES = articleDates("crm-para-clinicas-esteticas")
const TITLE = "CRM para clínicas estéticas: qué es y para qué | Cero Manual"
const DESCRIPTION =
  "Qué es un CRM para clínicas estéticas, para qué sirve, en qué se diferencia del software de citas y cuándo lo necesitas. Pide tu auditoría gratuita."
const ARTICLE_DESCRIPTION =
  "Qué es un CRM para clínicas estéticas, qué funciones debe tener, en qué se diferencia de un software de citas y qué añade la IA al seguimiento de leads."
const HEADLINE =
  "CRM para clínicas estéticas: qué es, para qué sirve y cuándo lo necesitas"

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
    q: "¿Necesito un CRM si ya tengo software de gestión de citas?",
    a: "Depende de si tu problema está en la agenda o en los leads. El software de citas resuelve lo que ocurre después de que el cliente ha reservado: confirmaciones, recordatorios, historial. El CRM resuelve lo que ocurre antes: capturar el lead, cualificarlo, hacer seguimiento si no ha respondido. Si recibes muchas consultas al mes por WhatsApp o formulario y no llevas un control ordenado, un CRM es lo que te falta para no depender de la memoria del equipo.",
  },
  {
    q: "¿Cuánto cuesta un CRM para una clínica estética?",
    a: "El rango es muy amplio, y lo sectorial no es necesariamente lo más caro: según los precios que publican en su web, consultados el 16 de septiembre de 2026, Flowww va de 59 a 249 €/mes por centro y Koibox de 0 a 55 €/mes según plan. En los CRM genéricos, como HubSpot, Zoho o Freshsales, compara con la tarifa vigente en su web. La trampa habitual es infraestimar el tiempo de configuración y adaptación: un CRM genérico barato puede costar más en horas de trabajo que uno especializado con onboarding incluido. Antes de elegir precio, define qué problema concreto quieres resolver.",
  },
  {
    q: "¿Puede un agente de IA reemplazar parte de lo que hace un CRM?",
    a: "En el tramo de captación y primer contacto, sí. Un agente de WhatsApp con IA puede hacer lo que más tiempo consume en un CRM básico: responder leads al instante, cualificarlos con preguntas clave, guardar la conversación y, si el lead está listo, agendarle la cita. Para clínicas sin CRM, es un punto de entrada más rápido y barato que implantar un CRM completo desde cero.",
  },
  {
    q: "¿Cuánto tarda en amortizarse un CRM en una clínica estética?",
    a: "Depende de tus números, así que empieza por medir: antes de implantar cualquier CRM, anota cuántos leads recibes al mes, cuántos acaban en cita y cuánto vale para tu clínica un paciente que vuelve. Después haz la cuenta: pacientes que el CRM te evita perder al mes, multiplicados por lo que vale cada uno, frente al coste anual de la herramienta. Ese cálculo, con tus datos, es el que te dice cuándo se amortiza.",
  },
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: ARTICLE_DESCRIPTION,
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

export default function CrmClinicasArticlePage() {
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
            9 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            Un CRM para clínicas estéticas es la herramienta que reúne en un solo sitio a tus
            leads y pacientes, con el estado de cada uno. Sirve para convertir consultas en
            primeras citas y para que quien ya ha venido vuelva. Lo necesitas cuando recibes
            más consultas de las que puedes seguir a mano, o cuando el seguimiento depende de
            que una persona concreta se acuerde.
          </P>

          <H2>¿Qué es un CRM y para qué sirve en una clínica estética?</H2>
          <P>
            Un CRM es una herramienta que centraliza en un único lugar toda la información
            sobre tus leads y pacientes, y que en una clínica estética sirve para dos cosas:
            convertir consultas en primeras citas y conseguir que quien ya ha venido vuelva.
            Las siglas son de Customer Relationship Management, pero en la práctica es más
            sencillo que el nombre.
          </P>
          <P>
            Lo que guarda es quién ha contactado, desde qué canal, qué tratamiento le
            interesaba, cuándo fue su última cita, si alguien ha hecho seguimiento — y cuál es
            el estado actual de cada contacto.
          </P>
          <P>
            En una clínica estética, el CRM actúa principalmente en dos momentos. El primero
            es la captación: desde que un lead llega por primera vez hasta que reserva su
            primera cita. El segundo es la fidelización: gestionar el{" "}
            <InternalLink href="/blog/como-fidelizar-pacientes-clinica-estetica">
              seguimiento de clientes que ya han venido
            </InternalLink>
            , detectar quiénes llevan meses sin aparecer y lanzar campañas
            de reactivación.
          </P>
          <P>
            Sin un CRM, esa información vive en distintos sitios — el móvil de la
            recepcionista, la agenda, el email, los chats de WhatsApp — y nadie tiene una
            visión completa de qué está pasando con cada cliente.
          </P>

          <H2>Señales de que tu clínica necesita un CRM</H2>
          <P>
            Hay tres señales que indican que ya toca: recibes más consultas de las que puedes
            seguir a mano, no sabes qué porcentaje de leads acaba en cita, y el seguimiento
            depende de que una persona concreta se acuerde. Si reconoces dos de las tres, ya
            lo necesitas.
          </P>
          <P>
            No todas las clínicas lo necesitan desde el primer día —{" "}
            <InternalLink href="/blog/crm-clinicas-esteticas-pequenas">
              una consulta de un solo profesional
            </InternalLink>{" "}
            con diez pacientes nuevos al mes se apaña con la agenda. El problema
            aparece cuando el volumen supera lo que cabe en la cabeza de alguien.
          </P>

          <H3>Recibes más consultas de las que puedes gestionar manualmente</H3>
          <P>
            Cuando el volumen de consultas por WhatsApp, formulario web o redes sociales supera
            lo que puedes llevar de memoria, el seguimiento manual empieza a fallar. Alguien se olvida de responder
            a un lead, otro lead queda sin seguimiento después del primer contacto, y no hay
            forma de saber cuántas oportunidades se han perdido porque nunca quedan
            registradas.
          </P>

          <H3>No sabes cuántos leads convierten en cita</H3>
          <P>
            Si no puedes responder con un número concreto a la pregunta «¿qué porcentaje de
            consultas acaban en cita?», no tienes la información mínima para mejorar. Un CRM
            te da ese dato de forma automática — y te permite identificar en qué punto del
            proceso se pierden más leads.
          </P>

          <H3>El seguimiento depende de la memoria de una persona</H3>
          <P>
            Si cuando la recepcionista está de vacaciones el seguimiento de leads se para, lo
            que falta es un sistema. Un CRM guarda esa memoria en el software: cualquier
            persona del equipo puede ver el estado de cada lead y continuar donde otro lo dejó.
          </P>

          <H2>Qué debe tener un CRM para clínicas estéticas</H2>
          <P>
            Tres funcionalidades son innegociables en este sector: integración con WhatsApp,
            pipelines diferenciados por tipo de tratamiento y automatización del seguimiento.
            Un CRM genérico puede funcionar, pero si le falta alguna de las tres acabarás
            cubriendo el hueco a mano.
          </P>
          <P>
            Entre un CRM sectorial y uno adaptado hay una diferencia práctica: las{" "}
            <InternalLink href="/blog/software-gestion-clinicas-esteticas">
              plataformas españolas pensadas para clínicas
            </InternalLink>{" "}
            — Flowww, por ejemplo — traen de serie, según su web, la ficha de
            paciente, el historial clínico y la firma de consentimientos; en un CRM genérico eso
            hay que construirlo con campos personalizados.
          </P>
          <BlogSource>
            web oficial de{" "}
            <ExternalLink href="https://www.flowww.es/">Flowww</ExternalLink>,
            consultada el 16 de septiembre de 2026
          </BlogSource>
          <P>
            La primera es la integración con WhatsApp. El canal principal de comunicación
            con pacientes en España es WhatsApp — y si el CRM no captura esas conversaciones
            o al menos las registra, se te escapa justo la parte de la relación con el paciente
            que más se mueve.
          </P>
          <P>
            La segunda es la gestión de pipelines por tratamiento. No es lo mismo un lead
            interesado en depilación láser que uno que pregunta por tratamientos faciales:
            el ciclo de decisión, el ticket y el proceso de cualificación son distintos. Un
            buen CRM te permite crear flujos diferenciados por tipo de servicio.
          </P>
          <P>
            La tercera es la automatización de seguimiento. Si un lead no responde en 24
            horas, el sistema puede enviar automáticamente un mensaje de seguimiento. Si
            un cliente lleva tres meses sin visita, el CRM puede lanzar una campaña de
            reactivación.
          </P>

          <H2>CRM vs software de gestión de citas: cuál es la diferencia</H2>
          <P>
            La diferencia es el momento en que actúa cada uno: el software de citas resuelve lo
            que pasa <strong>después</strong> de que alguien ha reservado, y el CRM lo que pasa
            <strong> antes</strong>. Es la confusión más habitual: muchas clínicas creen que su
            herramienta de agenda ya cumple la función de un CRM.
          </P>
          <P>
            El software de gestión de citas — Acuity o Calendly, por ejemplo — se ocupa de la
            reserva, la gestión del calendario y los recordatorios automáticos. Es una
            herramienta de operaciones, no de captación.
          </P>
          <BlogSource>
            webs oficiales de{" "}
            <ExternalLink href="https://acuityscheduling.com/">Acuity</ExternalLink> y{" "}
            <ExternalLink href="https://calendly.com/es">Calendly</ExternalLink>, consultadas
            el 16 de septiembre de 2026
          </BlogSource>
          <P>
            El CRM captura el lead desde el canal en que llegó, lo cualifica, hace seguimiento
            si no ha respondido y lo mueve por el embudo hasta que reserva. Y después de la
            primera visita, gestiona la relación a largo plazo para que vuelva.
          </P>

          <BlogTable
            headers={[
              "",
              "Software de citas",
              "CRM",
              "Agente de IA en WhatsApp",
            ]}
            rows={[
              [
                "Qué resuelve",
                "La agenda: reservar, confirmar, recordar",
                "El embudo: captar, cualificar, hacer seguimiento y fidelizar",
                "La conversación: responder al instante y convertir la consulta en cita",
              ],
              [
                "Cuándo actúa",
                "Después de la reserva",
                "Antes de la reserva y después de la primera visita",
                "En el primer contacto, a cualquier hora",
              ],
              [
                "Fuera de horario",
                "Permite reservar online, pero no responde dudas",
                "Registra el lead, no lo atiende",
                "Responde y agenda sin que intervenga nadie",
              ],
              [
                "Precio orientativo",
                "Según la tarifa vigente de cada herramienta",
                "Sectoriales: Flowww, de 59 a 249 €/mes por centro; Koibox, de 0 a 55 €/mes según plan (precios publicados, consultados el 16/09/2026). Genéricos: según la tarifa vigente de cada uno",
                "Cuota mensual según volumen de conversaciones",
              ],
            ]}
          />
          <BlogSource>
            páginas de precios de{" "}
            <ExternalLink href="https://www.flowww.es/precios">Flowww</ExternalLink> y{" "}
            <ExternalLink href="https://koibox.cloud/pricing/">Koibox</ExternalLink>,
            consultadas el 16 de septiembre de 2026
          </BlogSource>

          <P>
            <InternalLink href="/blog/tecnologia-para-clinicas-esteticas">
              Las tres piezas son complementarias
            </InternalLink>
            . La combinación que mejor funciona es un CRM que gestione leads y seguimiento, conectado con un software de
            agenda que gestione las citas — de forma que cuando un lead pasa a paciente, la
            información fluya entre los dos sistemas sin tener que introducirla dos veces.
          </P>

          <H2>Qué añade la IA a lo que hace un CRM</H2>
          <P>
            La IA cubre lo que un CRM, por sí solo, no hace: responder al lead en segundos,
            cualificarlo y dejar la conversación anotada.
          </P>
          <P>
            El caso más claro es el primer contacto. Cuando un lead llega fuera del horario de
            atención, un agente con IA puede responder en segundos, hacer las preguntas de
            cualificación básicas y dejar la conversación guardada para que el equipo lo
            encuentre todo listo cuando llegue por la mañana. Sin IA, ese lead espera hasta el
            día siguiente, y en ese tiempo puede haber reservado en otra clínica.
          </P>
          <P>
            El segundo momento crítico es el seguimiento. Un lead que no ha respondido al
            primer contacto quizá solo estaba ocupado. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            puede enviarle un mensaje de seguimiento automático a las 24 o 48 horas, con un
            tono natural, mientras el equipo se ocupa de los pacientes que ya están en la
            clínica.
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
              ¿Tienes leads que no responden porque nadie llega a tiempo?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              El{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp para clínicas estéticas
              </InternalLink>{" "}
              responde en segundos, cualifica al lead y lo agenda sin que el equipo tenga
              que intervenir — con o sin CRM.
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
