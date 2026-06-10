import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/software-gestion-clinicas-esteticas"
const TITLE = "Software de gestión para clínicas estéticas: qué necesitas realmente | Cero Manual"
const DESCRIPTION =
  "Hay miles de opciones de software para clínicas estéticas. Te explicamos qué necesitas realmente según el tamaño y momento de tu clínica."
const HEADLINE =
  "Software de gestión para clínicas estéticas: qué necesitas realmente y por dónde empezar"

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
    publishedTime: "2026-06-10T00:00:00.000Z",
    modifiedTime: "2026-06-10T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Qué software necesita una clínica estética pequeña que está empezando?",
    a: "Si la clínica está empezando, lo más importante es tener un sistema de citas online que evite confusiones de agenda y, si es posible, recordatorios automáticos para reducir las ausencias. No hace falta un CRM completo ni herramientas de automatización avanzada desde el primer día: lo prioritario es tener la agenda ordenada y accesible.",
  },
  {
    q: "¿Un CRM y un software de citas son lo mismo?",
    a: "No. El software de citas se centra en la agenda: reservar, confirmar y recordar visitas. Un CRM va un paso más allá y guarda el historial completo de cada paciente — tratamientos, comunicaciones, oportunidades de venta — para que la clínica pueda hacer seguimiento y fidelización. Muchas clínicas usan ambos a la vez, aunque a veces estén integrados en una misma herramienta.",
  },
  {
    q: "¿Cuántas herramientas de software necesita realmente una clínica?",
    a: "Depende del tamaño, pero la mayoría de clínicas estéticas funcionan bien con tres piezas: un sistema de agenda/citas, un canal de comunicación automatizado con pacientes (normalmente WhatsApp) y, opcionalmente, un CRM si el volumen de pacientes lo justifica. Más allá de eso, cada herramienta adicional debería resolver un problema concreto, no añadirse \"por si acaso\".",
  },
  {
    q: "¿Cuándo tiene sentido añadir automatización con inteligencia artificial?",
    a: "Tiene sentido cuando la clínica ya tiene la agenda y los procesos básicos ordenados, pero el equipo no da abasto respondiendo consultas o hace seguimiento de pacientes de forma irregular. En ese punto, añadir un agente de WhatsApp con IA permite responder consultas, agendar citas y hacer seguimiento sin sumar carga de trabajo al equipo ni contratar más personal.",
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
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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

export default function SoftwareGestionClinicasArticlePage() {
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
            10 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Si buscas "software para clínicas estéticas" en Google, te van a aparecer decenas
            de opciones: programas de gestión de citas, CRMs, plataformas de marketing,
            herramientas de facturación, chatbots, apps de fidelización... Cada una promete
            ser la solución definitiva, y es fácil acabar pagando por varias herramientas que
            apenas se usan.
          </P>
          <P>
            La realidad es que la mayoría de clínicas no necesitan "más software", sino el
            software adecuado para el momento en el que están. Una clínica que acaba de abrir
            tiene necesidades muy distintas a una que ya tiene varios profesionales y cientos
            de pacientes en su base de datos.
          </P>
          <P>
            En este artículo vas a ver qué tipos de software existen para una clínica
            estética, en qué se diferencian, por qué muchas clínicas acaban con más
            herramientas de las que necesitan, y qué tiene sentido según el tamaño y el
            momento de tu clínica.
          </P>

          <H2>Qué tipos de software usa una clínica estética</H2>
          <P>
            En general, el software que utiliza una clínica estética se puede agrupar en
            unas pocas categorías. Está el software de gestión de citas o agenda, que permite
            a los pacientes reservar, modificar o cancelar sus visitas, y a la clínica
            organizar los huecos de cada profesional.
          </P>
          <P>
            Está también el software de comunicación con pacientes, que incluye desde el
            WhatsApp Business básico hasta sistemas que automatizan respuestas y
            recordatorios. Por otro lado están los CRM, pensados para guardar el historial de
            cada paciente y gestionar el seguimiento comercial. Y, finalmente, hay
            herramientas más específicas: facturación, marketing, fidelización, encuestas de
            satisfacción, etc.
          </P>
          <P>
            No todas las clínicas necesitan todas estas piezas, ni necesitan tenerlas desde el
            primer día. La clave está en entender para qué sirve cada una y cuándo aporta
            valor real.
          </P>

          <H2>Software de citas vs CRM vs automatización: cuál es la diferencia</H2>
          <P>
            Estos tres términos se usan a menudo como si fueran sinónimos, pero resuelven
            problemas distintos. El software de citas se centra en la agenda: qué huecos hay
            disponibles, quién tiene cita y cuándo, y permite que el paciente reserve sin
            tener que llamar.
          </P>
          <P>
            Un CRM (Customer Relationship Management) va un paso más allá: guarda el historial
            de cada paciente — qué tratamientos se ha hecho, cuándo fue su última visita, qué
            presupuestos tiene pendientes — y ayuda a la clínica a hacer seguimiento comercial,
            por ejemplo para detectar pacientes que llevan tiempo sin venir.
          </P>
          <P>
            La automatización, por su parte, no es exactamente una "categoría" de software,
            sino una capa que se puede aplicar sobre la agenda, el CRM o la comunicación: por
            ejemplo, enviar recordatorios automáticos, responder consultas por WhatsApp sin
            intervención humana, o lanzar mensajes de seguimiento después de una cita. Muchas
            clínicas tienen agenda y CRM, pero siguen haciendo todo lo demás a mano.
          </P>

          <H2>Por qué muchas clínicas acaban con demasiadas herramientas</H2>
          <P>
            Es habitual que una clínica vaya incorporando software a medida que surgen
            problemas puntuales: un programa de citas porque la agenda en papel ya no daba
            más de sí, un CRM porque alguien lo recomendó, una herramienta de marketing porque
            la usaba otra clínica del sector... El resultado, con el tiempo, son varias
            suscripciones mensuales que no siempre se usan al máximo, y datos repartidos entre
            sistemas que no se hablan entre sí.
          </P>
          <P>
            Esto no solo supone un coste económico innecesario, sino también una carga
            operativa: el equipo tiene que entrar en varias plataformas distintas para hacer
            su trabajo, y la información de un paciente puede estar repartida entre la agenda,
            el CRM y el WhatsApp, sin que nadie tenga una visión completa.
          </P>
          <P>
            Antes de añadir una nueva herramienta, suele ser más útil revisar qué procesos
            están realmente cubriendo las herramientas actuales, y si el problema es de
            software o de cómo se está usando.
          </P>

          <H2>Qué necesitas según el tamaño de tu clínica</H2>
          <P>
            Para una clínica que está empezando, con uno o dos profesionales, lo prioritario
            suele ser tener un sistema de citas online sencillo que evite confusiones de
            agenda, y poco más. En esta fase, intentar implementar un CRM completo o varias
            herramientas de automatización suele ser más esfuerzo del que la clínica puede
            absorber.
          </P>
          <P>
            A medida que la clínica crece y empieza a acumular una base de pacientes amplia,
            entra en juego el valor de un CRM: cada paciente recurrente puede tener un valor a
            largo plazo (LTV) de unos 3.000€, y sin un sistema que recuerde cuándo tocaría su
            siguiente visita o revisión, esos ingresos se quedan sin capturar.
          </P>
          <P>
            En clínicas más grandes, con varios profesionales y un volumen alto de consultas
            diarias, es donde tiene más sentido sumar automatización: el equipo ya no puede
            atender manualmente todas las conversaciones, y automatizar la comunicación es lo
            que permite seguir creciendo sin saturar al personal.
          </P>

          <H2>Cuándo tiene sentido añadir automatización con IA</H2>
          <P>
            La automatización con inteligencia artificial empieza a aportar valor real cuando
            la clínica ya tiene la agenda y los procesos básicos ordenados, pero el volumen de
            mensajes y consultas supera lo que el equipo puede gestionar a mano. Es habitual
            que esto ocurra antes de lo que se piensa: basta con que un porcentaje relevante
            de las consultas — recordemos, alrededor de un 40% — lleguen fuera del horario de
            atención.
          </P>
          <P>
            En ese contexto, un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            puede responder consultas, agendar citas y hacer seguimiento de pacientes de
            forma automática, conectándose con la agenda y, si la clínica lo tiene, con el
            CRM. Esto es especialmente importante porque, como hemos visto, la probabilidad de
            perder un lead que no recibe respuesta en los primeros 5 minutos puede llegar al
            80%: ningún software de gestión por sí solo soluciona ese problema si no incluye
            una capa de respuesta inmediata.
          </P>
          <P>
            Si tu clínica ya tiene la agenda organizada pero notas que las consultas por
            WhatsApp se acumulan o se responden tarde, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            te explicamos cómo añadir esa capa de automatización sin sustituir el software que
            ya usas.
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
              ¿Quieres saber qué automatización le falta a tu clínica?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos cómo un agente de WhatsApp puede encargarse de responder consultas,
              agendar citas y hacer seguimiento de pacientes, integrado con el software que ya
              usa tu clínica.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero ver cómo funciona →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
