import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/mejor-crm-clinicas-dentales"
const TITLE = "Mejor CRM para clínicas dentales: guía completa 2026 | Cero Manual"
const DESCRIPTION =
  "¿Buscas el mejor CRM para tu clínica dental? Te explicamos qué funcionalidades necesitas y cómo elegir el que mejor se adapta a tu clínica."
const HEADLINE = "Mejor CRM para clínicas dentales: qué buscar y cómo elegir en 2026"

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
    q: "¿Cuál es el mejor CRM para una clínica dental pequeña?",
    a: "No existe un «mejor CRM» universal: depende del volumen de consultas y del presupuesto. Para clínicas que reciben menos de 30 consultas al mes, suele bastar con un CRM genérico gratuito o de bajo coste (HubSpot, Zoho) bien configurado. Para clínicas con varios gabinetes o alto volumen, conviene valorar plataformas sectoriales pensadas para clínicas dentales, que ya incluyen gestión de tratamientos y agenda integrada.",
  },
  {
    q: "¿Es mejor un CRM genérico o uno específico para clínicas dentales?",
    a: "Un CRM genérico es más barato y flexible, pero requiere más tiempo de configuración para adaptarlo a un flujo dental (presupuestos, tratamientos por fases, seguimiento de ortodoncia, etc.). Un CRM específico para clínicas viene con esos flujos ya construidos, lo que acelera la puesta en marcha, aunque suele tener un coste mensual más alto. La decisión depende de cuánto tiempo interno puedes dedicar a configurarlo.",
  },
  {
    q: "¿Qué diferencia hay entre un CRM y el software de gestión de la clínica?",
    a: "El software de gestión (agenda, historiales clínicos, facturación) resuelve la operativa una vez el paciente ya está dentro del sistema. El CRM se centra en lo anterior: captar el lead, cualificarlo y hacer seguimiento hasta que reserva su primera cita. Muchas clínicas dentales tienen un buen software de gestión pero ningún sistema que controle qué pasa con los leads que todavía no han venido.",
  },
  {
    q: "¿Cuánto tarda en amortizarse un CRM en una clínica dental?",
    a: "Si el LTV de un paciente recurrente ronda los 3.000€, evitar perder solo dos o tres leads al mes por falta de seguimiento ya cubre el coste anual de casi cualquier CRM del mercado. El cálculo más útil antes de elegir es: cuántas consultas recibes al mes, cuántas se convierten en cita y cuántas se pierden simplemente por no responder a tiempo.",
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

export default function MejorCrmClinicasDentalesArticlePage() {
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
            12 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Buscar «mejor CRM para clínica dental» en Google devuelve decenas de
            comparativas, rankings y artículos patrocinados que recomiendan herramientas muy
            distintas entre sí. El problema no es la falta de opciones — es que la mayoría de
            esas listas no explican qué criterios usar para decidir cuál tiene sentido para
            tu clínica en concreto.
          </P>
          <P>
            No es lo mismo una clínica unipersonal que recibe 15 consultas al mes que una con
            tres gabinetes y un equipo comercial dedicado a captación. El «mejor» CRM cambia
            según el tamaño, el volumen de leads y los procesos internos que ya tienes
            montados.
          </P>
          <P>
            En este artículo vas a aprender qué es exactamente un CRM dental, qué
            funcionalidades son realmente imprescindibles (y cuáles son solo extras de
            marketing), cómo elegir entre un CRM genérico y uno específico del sector, qué
            rango de precios manejar y cuándo conviene sumar automatización con IA para que
            el CRM trabaje solo.
          </P>

          <H2>Qué es un CRM para clínicas dentales y para qué sirve</H2>
          <P>
            Un CRM (Customer Relationship Management) es la herramienta que centraliza toda
            la información sobre tus leads y pacientes: de dónde llegaron, qué tratamiento
            les interesa, en qué punto del proceso están y quién ha hablado con ellos por
            última vez.
          </P>
          <P>
            En una clínica dental, esto es especialmente relevante porque el recorrido del
            paciente suele ser largo: una primera consulta informativa, un presupuesto, un
            tiempo de reflexión y, finalmente, la reserva del tratamiento. Sin un CRM, cada
            uno de esos pasos depende de que alguien del equipo recuerde hacer el seguimiento
            manualmente — y en la práctica, una parte de esos leads simplemente se pierde por
            el camino.
          </P>
          <P>
            El CRM no sustituye a la agenda ni al software de gestión clínica. Su función es
            anterior: asegurarse de que ningún lead se queda sin respuesta y que el equipo
            sabe en todo momento qué pacientes potenciales están «en proceso» y qué acción
            toca hacer con cada uno.
          </P>

          <H2>Funcionalidades imprescindibles en un CRM dental</H2>
          <P>
            No todas las funcionalidades que aparecen en la ficha de producto de un CRM son
            igual de relevantes para una clínica dental. Estas son las que marcan la
            diferencia real en el día a día.
          </P>

          <H3>Integración con WhatsApp</H3>
          <P>
            La mayoría de consultas de pacientes potenciales llegan por WhatsApp, ya sea
            desde anuncios, redes sociales o el boca a boca. Si el CRM no captura esas
            conversaciones — o al menos permite registrarlas fácilmente —, el equipo acaba
            gestionando dos sistemas en paralelo: el CRM por un lado y el móvil de WhatsApp
            por otro, lo que multiplica las posibilidades de que algo se quede sin responder.
          </P>

          <H3>Gestión de tratamientos por fases (pipelines)</H3>
          <P>
            Un lead que pregunta por una limpieza dental no tiene el mismo recorrido que uno
            que pregunta por un tratamiento de ortodoncia o un implante. El segundo caso
            implica presupuesto, valoración, posible financiación y varias visitas antes de
            empezar. Un buen CRM dental permite crear pipelines diferenciados por tipo de
            tratamiento, para que el equipo sepa en qué fase está cada paciente potencial y
            qué paso viene después.
          </P>

          <H3>Automatización de seguimiento</H3>
          <P>
            Si un lead pide información sobre un presupuesto y no responde en 48 horas, el
            CRM debería poder enviar un recordatorio automático sin que nadie tenga que
            acordarse. Esto es especialmente importante porque, según los datos del sector,
            la probabilidad de perder un lead que no recibe respuesta en los primeros 5
            minutos cae hasta un 80% — y ese margen de tiempo es casi imposible de cubrir solo
            con personas.
          </P>

          <H3>Visibilidad sobre leads fuera de horario</H3>
          <P>
            En clínicas dentales, alrededor del 40% de las consultas llegan fuera del horario
            de atención: por la noche, en fin de semana o durante festivos. Un CRM que no
            registra esas consultas hasta que alguien las revisa manualmente al día siguiente
            deja una ventana enorme para que el paciente potencial busque en otro sitio.
          </P>

          <H2>CRM genérico vs CRM específico para clínicas: cuál elegir</H2>
          <P>
            Esta es la decisión que más confusión genera. Los CRM genéricos — HubSpot, Zoho,
            Pipedrive, Freshsales — son herramientas potentes, con planes gratuitos o muy
            económicos, pero no vienen configurados para el flujo de una clínica dental. Hay
            que crear los pipelines, los campos personalizados y las automatizaciones desde
            cero.
          </P>
          <P>
            Los CRM específicos para clínicas dentales, en cambio, ya incluyen plantillas de
            tratamientos, integración con agendas clínicas y, en algunos casos, gestión de
            presupuestos y financiación. El coste suele ser más alto, pero el tiempo de puesta
            en marcha es mucho menor.
          </P>
          <P>
            La pregunta clave para decidir es: ¿tienes alguien en el equipo (o un proveedor
            externo) que pueda dedicar tiempo a configurar un CRM genérico? Si la respuesta es
            sí, un CRM genérico bien configurado puede ser más barato y flexible a largo
            plazo. Si la respuesta es no, un CRM específico del sector — aunque cueste más al
            mes — evita semanas de configuración que probablemente nunca llegarán a
            completarse.
          </P>
          <P>
            Para entender mejor qué tipo de CRM se adapta a clínicas similares, puede ser útil
            revisar cómo se plantea un{" "}
            <InternalLink href="/blog/crm-para-clinicas-esteticas">
              CRM para clínicas estéticas
            </InternalLink>
            , ya que el razonamiento sobre captación y seguimiento de leads es prácticamente
            el mismo en el sector dental.
          </P>

          <H2>Cuánto cuesta un CRM para clínicas dentales</H2>
          <P>
            Los precios varían enormemente según el tipo de CRM y el número de usuarios. Un
            CRM genérico en su plan gratuito o de entrada (HubSpot Starter, Zoho Bigin) puede
            costar entre 0€ y 30€ al mes para equipos pequeños. Las versiones intermedias de
            CRM genéricos con automatizaciones más avanzadas suelen estar entre 50€ y 100€ al
            mes.
          </P>
          <P>
            Los CRM específicos para clínicas dentales, con gestión de tratamientos y agenda
            integrada, suelen empezar en torno a 80-100€ al mes para una clínica pequeña y
            pueden superar los 200-300€ al mes en clínicas con varios gabinetes o licencias
            por profesional.
          </P>
          <P>
            El error más habitual es comparar solo el precio mensual sin tener en cuenta el
            coste de configuración. Un CRM genérico «barato» que nadie llega a configurar
            correctamente no genera ningún retorno — y en la práctica termina costando más que
            uno específico, aunque su precio de etiqueta sea menor.
          </P>

          <H2>Cuándo tiene sentido añadir automatización con IA al CRM</H2>
          <P>
            Un CRM, por sí solo, sigue siendo una herramienta pasiva: organiza la información,
            pero no actúa. La automatización con IA entra en juego precisamente en los
            momentos donde el equipo humano no puede estar disponible.
          </P>
          <P>
            El ejemplo más claro es el de las consultas fuera de horario. Si el 40% de las
            consultas llegan de noche o en fin de semana, y la probabilidad de perder un lead
            sin respuesta en 5 minutos es del 80%, cualquier CRM — por bueno que sea — pierde
            efectividad si nadie puede responder a esas horas.
          </P>
          <P>
            Un agente con IA conectado al CRM puede responder esas consultas al instante,
            hacer las preguntas de cualificación necesarias y registrar toda la conversación
            para que el equipo la encuentre lista al llegar por la mañana. El CRM deja de ser
            solo un archivo de leads y se convierte en un sistema que sigue trabajando
            mientras la clínica está cerrada.
          </P>
          <P>
            Si tu clínica todavía no tiene CRM, o tiene uno pero los leads fuera de horario se
            siguen perdiendo, puede ser más rentable empezar por la automatización del primer
            contacto y, a partir de ahí, decidir qué CRM necesitas realmente. En el artículo
            sobre{" "}
            <InternalLink href="/blog/crm-para-clinicas-esteticas">
              CRM para clínicas estéticas
            </InternalLink>{" "}
            se explica con más detalle cómo se combinan ambas piezas — y cómo, con un LTV
            medio de 3.000€ por cliente recurrente, evitar perder solo un par de leads al mes
            ya justifica la inversión.
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
              ¿No sabes por dónde empezar a elegir tu CRM?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              En el artículo sobre{" "}
              <InternalLink href="/blog/crm-para-clinicas-esteticas">
                CRM para clínicas estéticas
              </InternalLink>{" "}
              explicamos qué es, cuándo lo necesitas y cómo combinarlo con automatización para
              que ningún lead se quede sin respuesta.
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
