import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import BlogSource from "@/components/BlogSource"

const PATH = "/blog/crm-para-clinicas-esteticas"
const TITLE = "CRM para clínicas estéticas: qué es y cuál necesitas | Cero Manual"
const DESCRIPTION =
  "Un CRM para clínicas estéticas centraliza leads, citas y seguimiento de pacientes. Te explicamos qué es, para qué sirve y cuándo lo necesitas."
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
    publishedTime: "2026-06-09T00:00:00.000Z",
    modifiedTime: "2026-08-08T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Necesito un CRM si ya tengo software de gestión de citas?",
    a: "Depende de si tu problema está en la agenda o en los leads. El software de citas resuelve lo que ocurre después de que el cliente ha reservado: confirmaciones, recordatorios, historial. El CRM resuelve lo que ocurre antes: capturar el lead, cualificarlo, hacer seguimiento si no ha respondido. Si recibes más de 20-30 consultas al mes por WhatsApp o formulario y no llevas un control ordenado, un CRM te evitará perder oportunidades que ahora ni siquiera sabes que estás perdiendo.",
  },
  {
    q: "¿Cuánto cuesta un CRM para una clínica estética?",
    a: "El rango es muy amplio. Hay soluciones desde 30-50€/mes (HubSpot gratuito, Zoho, Freshsales) hasta plataformas sectoriales específicas para clínicas que superan los 200€/mes. La trampa habitual es infraestimar el tiempo de configuración y adaptación: un CRM genérico barato puede costar más en horas de trabajo que uno especializado con onboarding incluido. Antes de elegir precio, define qué problema concreto quieres resolver.",
  },
  {
    q: "¿Puede un agente de IA reemplazar parte de lo que hace un CRM?",
    a: "En el tramo de captación y primer contacto, sí. Un agente de WhatsApp con IA puede hacer lo que más tiempo consume en un CRM básico: responder leads al instante, cualificarlos con preguntas clave, registrar la conversación y, si el lead está listo, agendar la cita directamente en el calendario. Para clínicas sin CRM, es un punto de entrada más rápido y barato que implantar un CRM completo desde cero.",
  },
  {
    q: "¿Cuánto tarda en amortizarse un CRM en una clínica estética?",
    a: "Si un cliente recurrente tiene un LTV de 3.000€ y tu CRM evita perder dos leads al mes que de otro modo habrían quedado sin respuesta, el retorno en el primer trimestre ya cubre el coste anual de la herramienta. La clave es medir: antes de implantar cualquier CRM, anota cuántos leads recibes al mes y cuántos acaban en cita. Ese dato es el punto de partida para calcular el impacto real.",
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
  datePublished: "2026-06-09",
  dateModified: "2026-08-08",
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-lg md:text-xl font-semibold leading-snug mt-10 mb-3"
      style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
    >
      {children}
    </h3>
  )
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
            La mayoría de clínicas estéticas gestionan sus leads de la misma forma: un
            mensaje de Instagram por aquí, una consulta de WhatsApp por allá, un email que
            llega mientras la recepcionista está con otro paciente, y una nota en la agenda
            que alguien apuntó a mano. No hay un sistema centralizado. No hay un registro
            de quién ha respondido y quién no. No hay forma de saber cuántos leads se pierden
            cada semana porque nadie hizo seguimiento a tiempo.
          </P>
          <P>
            El problema no es que el equipo trabaje mal — es que sin una herramienta que
            centralice esa información, perder leads es inevitable. El 80% de los leads que
            no reciben respuesta en los primeros cinco minutos acaban eligiendo otra clínica.
            Y eso ocurre especialmente de noche, cuando buena parte de las consultas llega
            fuera del horario de atención y nadie está disponible para contestar.
          </P>
          <BlogSource>MIT Lead Response Management Study</BlogSource>
          <P>
            En este artículo vas a entender qué es exactamente un CRM, en qué se diferencia
            de un software de gestión de citas, qué señales indican que tu clínica ya lo
            necesita, qué funcionalidades no pueden faltar — y cómo la IA puede multiplicar
            los resultados de cualquier CRM a partir del primer mes.
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
            primera cita. El segundo es la fidelización: gestionar el seguimiento de clientes
            que ya han venido, detectar quiénes llevan meses sin aparecer y lanzar campañas
            de reactivación antes de que se vayan definitivamente a la competencia.
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
            depende de que una persona concreta se acuerde. Si reconoces dos de las tres, el
            CRM ya no es una mejora opcional.
          </P>
          <P>
            No todas las clínicas lo necesitan desde el primer día — una consulta de un solo
            profesional con diez pacientes nuevos al mes se apaña con la agenda. El problema
            aparece cuando el volumen supera lo que cabe en la cabeza de alguien.
          </P>

          <H3>Recibes más consultas de las que puedes gestionar manualmente</H3>
          <P>
            Si recibes más de 20-30 consultas al mes por WhatsApp, formulario web o redes
            sociales, el seguimiento manual empieza a fallar. Alguien se olvida de responder
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
            Si cuando la recepcionista está de vacaciones el seguimiento de leads se para,
            tienes un problema de sistema, no de persona. Un CRM externaliza esa memoria
            al software — cualquier persona del equipo puede ver el estado de cada lead y
            continuar donde otro lo dejó.
          </P>

          <H2>Qué debe tener un CRM para clínicas estéticas</H2>
          <P>
            Tres funcionalidades son innegociables en este sector: integración con WhatsApp,
            pipelines diferenciados por tipo de tratamiento y automatización del seguimiento.
            Un CRM genérico puede funcionar, pero si le falta alguna de las tres acabarás
            cubriendo el hueco a mano.
          </P>
          <P>
            Aquí es donde se nota la diferencia entre un CRM sectorial y uno adaptado. Las
            plataformas españolas pensadas para clínicas — Flowww o Klinikare, por ejemplo —
            traen la ficha de paciente, el histórico de tratamientos y los consentimientos de
            serie; en un CRM genérico eso hay que construirlo con campos personalizados.
          </P>
          <P>
            La primera es la integración con WhatsApp. El canal principal de comunicación
            con pacientes en España es WhatsApp — y si el CRM no captura esas conversaciones
            o al menos las registra, pierdes la mitad de la información relevante.
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
            reactivación. Sin automatización, esas acciones dependen de que alguien las
            recuerde — y raramente ocurre.
          </P>

          <H2>CRM vs software de gestión de citas: cuál es la diferencia</H2>
          <P>
            La diferencia es el momento en que actúa cada uno: el software de citas resuelve lo
            que pasa <strong>después</strong> de que alguien ha reservado, y el CRM lo que pasa
            <strong> antes</strong>. Es la confusión más habitual — muchas clínicas creen que su
            herramienta de agenda ya cumple la función de un CRM, y no es así.
          </P>
          <P>
            El software de gestión de citas — Acuity, Calendly o una herramienta sectorial como
            ClinicCloud — se ocupa de confirmaciones automáticas, recordatorios, gestión del
            calendario e historial de visitas. Es una herramienta de operaciones, no de
            captación.
          </P>
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
                "10-30€/mes las opciones ligeras",
                "Desde 30-50€/mes los genéricos; más de 200€/mes los sectoriales",
                "Cuota mensual según volumen de conversaciones",
              ],
            ]}
          />

          <P>
            Las tres piezas son complementarias, no excluyentes. La combinación que mejor
            funciona es un CRM que gestione leads y seguimiento, conectado con un software de
            agenda que gestione las citas — de forma que cuando un lead pasa a paciente, la
            información fluya entre los dos sistemas sin tener que introducirla dos veces.
          </P>

          <H2>Cómo un CRM conectado con IA multiplica sus resultados</H2>
          <P>
            La IA convierte el CRM de registro pasivo en sistema que actúa: responde al lead en
            segundos, lo cualifica y deja la conversación anotada, sin esperar a que nadie se
            acuerde. Un CRM sin automatización es mejor que nada, pero sigue dependiendo de que
            una persona ejecute cada acción a mano.
          </P>
          <P>
            El caso más claro es el primer contacto. Cuando un lead llega fuera del horario de
            atención, un agente con IA puede responder en segundos, hacer las preguntas de
            cualificación básicas y registrar la conversación en el CRM para que el equipo lo
            encuentre todo listo cuando llegue por la mañana. Sin IA, ese lead espera hasta el
            día siguiente — y la probabilidad de perderlo llega al 80% pasados los primeros
            cinco minutos sin respuesta.
          </P>
          <P>
            El segundo momento crítico es el seguimiento. Un lead que no ha respondido al
            primer contacto no está necesariamente perdido — simplemente estaba ocupado,
            o no era el momento. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            puede enviar un mensaje de seguimiento automático a las 24 o 48 horas, con un
            tono natural, sin que el equipo tenga que acordarse de hacerlo.
          </P>
          <P>
            El resultado es que el CRM deja de ser un registro pasivo y se convierte en
            un sistema activo que trabaja para convertir leads mientras el equipo se ocupa
            de los pacientes que ya están en la clínica. Cada cliente recurrente tiene un
            LTV medio de unos 3.000€ — y evitar perder incluso dos leads al mes por falta
            de respuesta rápida cambia los números de forma significativa.
          </P>
          <BlogSource>SEME (Sociedad Española de Medicina Estética)</BlogSource>
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
