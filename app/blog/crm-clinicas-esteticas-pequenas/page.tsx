import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/crm-clinicas-esteticas-pequenas"
const TITLE = "CRM para clínicas estéticas pequeñas: qué necesitas realmente | Cero Manual"
const DESCRIPTION =
  "Una clínica estética pequeña no necesita un CRM complejo. Te explicamos qué funcionalidades son imprescindibles y cuál es el punto de entrada más fácil."
const HEADLINE =
  "CRM para clínicas estéticas pequeñas: qué necesitas realmente y por dónde empezar"

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
    publishedTime: "2026-06-12T00:00:00.000Z",
    modifiedTime: "2026-06-12T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Necesita un CRM una clínica estética pequeña con un solo profesional?",
    a: "Depende del volumen de consultas, no del tamaño del equipo. Si recibes menos de 15-20 consultas al mes y puedes responderlas todas el mismo día, probablemente un CRM completo sea más esfuerzo de mantenimiento del que aporta. Si recibes más consultas de las que puedes seguir de memoria, incluso una herramienta gratuita y sencilla evita que se pierdan leads sin que nadie se dé cuenta.",
  },
  {
    q: "¿Qué CRM gratuito es mejor para empezar?",
    a: "Para clínicas pequeñas, las opciones gratuitas más razonables son HubSpot CRM (plan gratuito) o Zoho Bigin, que permiten registrar contactos, ver el historial de conversaciones y crear recordatorios básicos sin coste. La clave no es elegir «el mejor» de la lista, sino el que el equipo realmente vaya a usar a diario — un CRM gratuito que nadie actualiza no aporta nada.",
  },
  {
    q: "¿Cuál es la diferencia entre un CRM y la automatización básica con IA?",
    a: "Un CRM organiza y registra la información de los leads, pero sigue dependiendo de que una persona la consulte y actúe. La automatización con IA — por ejemplo, un agente de WhatsApp que responde y cualifica leads — actúa directamente sin esperar a que alguien lo revise. Para una clínica pequeña, a veces la automatización resuelve el problema más urgente (no perder leads) sin necesidad de implantar todavía un CRM completo.",
  },
  {
    q: "¿Cuándo sabré que es momento de pasar a un CRM más completo?",
    a: "La señal más clara es cuando empiezas a perder de vista el estado de los leads: alguien pregunta «¿qué pasó con el cliente que llamó la semana pasada?» y nadie lo sabe con certeza. Otra señal es cuando el volumen de consultas supera lo que una persona puede gestionar manualmente sin errores — habitualmente, a partir de 25-30 consultas mensuales. En ese punto, el coste de un CRM más completo se amortiza rápido frente al coste de los leads perdidos.",
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
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
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

export default function CrmClinicasEsteticasPequenasArticlePage() {
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
            12 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Cuando una clínica estética pequeña empieza a buscar un CRM, lo más habitual es
            encontrarse con comparativas pensadas para cadenas con varios centros, equipos
            comerciales y miles de leads al mes. La mayoría de esas funcionalidades —
            asignación automática entre comerciales, paneles de previsión de ventas, gestión
            multi-sede — no aportan nada a una clínica con uno o dos profesionales.
          </P>
          <P>
            El resultado es que muchas clínicas pequeñas acaban descartando el CRM por
            completo, pensando que es «demasiado para lo que necesitan» — y siguen perdiendo
            leads por falta de seguimiento, que es justo el problema que un CRM, incluso uno
            muy sencillo, resuelve.
          </P>
          <P>
            En este artículo vas a aprender qué necesita realmente una clínica estética
            pequeña, qué errores son más habituales al elegir herramienta, qué opciones
            existen desde gratis hasta planes premium, cuándo tiene sentido crecer a algo más
            completo — y por qué, en muchos casos, el primer paso ni siquiera es un CRM.
          </P>

          <H2>Qué necesita realmente una clínica estética pequeña</H2>
          <P>
            Una clínica pequeña no necesita gestionar un embudo de ventas complejo. Necesita
            tres cosas muy concretas: saber quién ha contactado y por qué canal, no olvidarse
            de responder a nadie, y tener un registro mínimo de en qué punto está cada
            conversación.
          </P>
          <P>
            Eso es, en esencia, lo que cualquier CRM básico — incluso uno gratuito — ya
            ofrece. El problema no suele ser la falta de funcionalidades, sino que nadie en el
            equipo tiene el hábito de anotar esa información en ningún sitio, y todo queda
            disperso entre WhatsApp, Instagram y notas sueltas.
          </P>
          <P>
            Con un LTV medio de unos 3.000€ por cliente recurrente, el coste de no tener ese
            mínimo control no es solo «desorganización»: son leads reales que se quedan sin
            respuesta y que, sumados a lo largo de los meses, representan una cantidad de
            ingresos perdidos muy superior al coste de cualquier herramienta.
          </P>

          <H2>Los errores más comunes al elegir un CRM siendo pequeño</H2>
          <P>
            El error más frecuente es elegir un CRM por la cantidad de funcionalidades en
            lugar de por la facilidad de uso. Una clínica pequeña no va a usar el 80% de las
            funciones de un CRM «completo» — y cuanto más complejo es la herramienta, más
            probable es que el equipo deje de actualizarla a las pocas semanas.
          </P>
          <P>
            El segundo error es no tener en cuenta quién va a usar el CRM en el día a día. Si
            la persona que atiende WhatsApp no tiene tiempo (ni ganas) de abrir otra
            aplicación y registrar cada conversación manualmente, el CRM se queda vacío desde
            el primer mes, independientemente de lo bueno que sea sobre el papel.
          </P>
          <P>
            El tercer error es pensar que un CRM resuelve el problema de las consultas fuera
            de horario. En clínicas estéticas, alrededor del 40% de las consultas llegan
            cuando la clínica está cerrada — y un CRM, por sí solo, no responde a nadie. Solo
            organiza la información para cuando alguien la revise. Si el objetivo principal es
            no perder esos leads nocturnos, el CRM es solo media solución.
          </P>

          <H2>Opciones de CRM para clínicas pequeñas: desde gratis hasta premium</H2>
          <P>
            En el extremo gratuito, herramientas como HubSpot CRM o Zoho Bigin permiten
            registrar contactos, ver el historial de conversaciones de WhatsApp o email
            (con alguna integración) y configurar recordatorios simples de seguimiento. Para
            una clínica con un volumen moderado de consultas, esto puede ser más que
            suficiente durante mucho tiempo.
          </P>
          <P>
            En el rango intermedio (30-60€ al mes), aparecen planes con más automatizaciones:
            secuencias de seguimiento automático, plantillas de mensajes y mejor integración
            con canales de captación como Instagram o Meta Ads.
          </P>
          <P>
            En el extremo premium, las plataformas específicas para clínicas estéticas
            incluyen gestión de tratamientos, fichas de cliente más completas e integración
            con la agenda. Tienen sentido cuando la clínica ya gestiona un volumen de pacientes
            que justifica ese nivel de detalle — algo que se explica con más profundidad en el
            artículo sobre{" "}
            <InternalLink href="/blog/crm-para-clinicas-esteticas">
              CRM para clínicas estéticas
            </InternalLink>
            .
          </P>

          <H2>Cuándo crecer a un CRM más completo</H2>
          <P>
            La señal más clara para dar el salto no es el tamaño de la clínica, sino la
            cantidad de información que se está perdiendo. Si empiezas a notar que nadie
            recuerda en qué quedó una conversación de hace dos semanas, o que dos personas del
            equipo están haciendo seguimiento al mismo lead sin saberlo, es momento de pasar a
            algo más estructurado.
          </P>
          <P>
            Otra señal habitual es el crecimiento del volumen de consultas. Cuando se supera
            la barrera de las 25-30 consultas mensuales, el seguimiento manual empieza a
            fallar de forma sistemática — no por falta de organización del equipo, sino porque
            ya no es humanamente posible recordar el estado de cada conversación sin ayuda de
            una herramienta.
          </P>
          <P>
            En ese punto, el CRM más completo no es un lujo: es lo que permite seguir
            creciendo sin que la calidad del seguimiento empeore. El artículo sobre{" "}
            <InternalLink href="/blog/crm-para-clinicas-esteticas">
              CRM para clínicas estéticas
            </InternalLink>{" "}
            detalla qué funcionalidades conviene priorizar en ese momento.
          </P>

          <H2>La alternativa al CRM: empezar con automatización básica</H2>
          <P>
            Para muchas clínicas pequeñas, el problema más urgente no es la falta de un CRM,
            sino la falta de respuesta inmediata. El 80% de los leads que no reciben respuesta
            en los primeros cinco minutos terminan eligiendo otra clínica — y eso ocurre
            especialmente en el 40% de consultas que llegan fuera del horario de atención.
          </P>
          <P>
            Antes de invertir tiempo en implantar un CRM completo, puede tener más sentido
            resolver primero ese problema concreto con automatización: un agente que responda
            al instante, haga las preguntas básicas de cualificación y deje todo registrado
            para que el equipo lo revise por la mañana. Esto no sustituye a un CRM a largo
            plazo, pero evita la sangría de leads mientras la clínica decide qué herramienta
            necesita realmente.
          </P>
          <P>
            Con un LTV de 3.000€ por cliente recurrente, recuperar aunque sea uno o dos leads
            al mes que de otro modo se habrían perdido por falta de respuesta ya justifica el
            coste de esa automatización — y da tiempo a elegir el CRM adecuado sin prisas,
            cuando el volumen de consultas lo haga realmente necesario.
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
              ¿Tu clínica ya está lista para dar el salto a un CRM completo?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              En el artículo sobre{" "}
              <InternalLink href="/blog/crm-para-clinicas-esteticas">
                CRM para clínicas estéticas
              </InternalLink>{" "}
              explicamos qué funcionalidades priorizar y cómo combinarlo con automatización
              para que ningún lead se quede sin respuesta.
            </p>
            <Link
              href="/blog/crm-para-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver el CRM para clínicas →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
