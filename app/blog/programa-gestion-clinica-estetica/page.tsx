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

const PATH = "/blog/programa-gestion-clinica-estetica"
const DATES = articleDates("programa-gestion-clinica-estetica")
const TITLE = "Programa de gestión para clínicas estéticas: cómo elegir el mejor | Cero Manual"
const DESCRIPTION =
  "Un buen programa de gestión para tu centro de estética ahorra horas cada semana. Te explicamos cómo elegirlo y qué evitar. Pide tu diagnóstico gratis."
const HEADLINE =
  "Programa de gestión para clínicas estéticas: cómo elegir el mejor y no arrepentirte"

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
    q: "¿Qué es un programa de gestión para clínicas estéticas?",
    a: "Es la herramienta que centraliza la operativa diaria de la clínica: agenda, ficha de paciente y tratamientos, facturación y, en muchos casos, gestión de bonos. A diferencia de un simple software de citas, cubre todo el ciclo del paciente, no solo el calendario.",
  },
  {
    q: "¿Cuánto cuesta un programa de gestión?",
    a: "El precio depende del número de usuarios y de las funcionalidades que incluya, y varía bastante entre proveedores. Antes de fijarte solo en el coste mensual, conviene calcular cuánto tiempo del equipo ahorra o cuántas citas perdidas evita, porque ahí está el retorno real.",
  },
  {
    q: "¿Puedo cambiar de programa sin perder mis datos?",
    a: "En la mayoría de casos sí, siempre que el nuevo programa permita importar historial de pacientes y citas. Es una de las preguntas que conviene hacer antes de contratar, porque no todos los proveedores facilitan la exportación de datos si decides irte más adelante.",
  },
  {
    q: "¿El programa de gestión incluye automatización con IA?",
    a: "La mayoría incluye automatizaciones básicas, como recordatorios programados o plantillas de mensajes, pero eso no es lo mismo que un agente con IA que mantenga una conversación y agende por su cuenta. Esa capa suele añadirse por encima, conectada al programa que ya usas.",
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

export default function ProgramaGestionClinicaEsteticaPage() {
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
            Elegir un programa de gestión para tu clínica estética no debería ser complicado, pero
            en la práctica lo es: hay decenas de opciones, todas prometen resolverlo todo, y muchas
            clínicas acaban contratando algo que a los pocos meses se queda a medias o que nadie
            en el equipo termina de usar bien.
          </P>
          <P>
            Elegir mal no es un error menor. Cuesta tiempo, porque migrar de un programa a otro se
            lleva semanas, y cuesta dinero, porque muchas clínicas terminan pagando por
            herramientas que se solapan o por funciones que nunca llegan a usar.
          </P>
          <P>
            En este artículo vas a ver la diferencia entre un programa de gestión y un simple
            software de citas, qué debe incluir uno bueno, los errores más comunes al elegir,
            qué preguntas hacer antes de contratar y cuándo el programa se queda corto y necesitas
            automatización.
          </P>

          <H2>Diferencia entre programa de gestión y software de citas</H2>
          <P>
            Un software de citas resuelve una cosa: el calendario. Organiza quién viene, cuándo y
            con quién. Un programa de gestión va más allá y cubre todo el ciclo del paciente —
            agenda, ficha de tratamientos, facturación y, en muchos casos, gestión de bonos y
            consentimientos informados.
          </P>
          <P>
            La confusión es habitual porque muchos proveedores llaman «programa de gestión» a
            herramientas que en realidad solo cubren la agenda. Antes de contratar, conviene tener
            claro si lo que necesitas es organizar citas o gestionar todo el negocio desde un
            mismo sitio, porque el precio y la complejidad cambian mucho entre una cosa y otra.
          </P>

          <H2>Qué debe incluir un buen programa de gestión para clínicas estéticas</H2>
          <P>
            Lo primero es la ficha de paciente y tratamientos: histórico, fotos de seguimiento y
            consentimientos, todo en un mismo registro. Lo segundo es la facturación integrada,
            para no depender de una herramienta aparte para cobrar o emitir tickets.
          </P>
          <P>
            Lo tercero es la gestión de bonos y sesiones, algo muy propio del sector estética y
            que un CRM genérico no suele cubrir bien. Y lo cuarto es una agenda multi-sala y
            multi-profesional con informes básicos de ocupación y facturación, para tomar
            decisiones sin tener que exportar datos a mano. Si quieres profundizar en qué otros
            criterios usar para no equivocarte, tienes una guía completa en{" "}
            <InternalLink href="/blog/mejor-software-gestion-clinica-estetica">
              mejor software de gestión para clínicas estéticas
            </InternalLink>
            .
          </P>

          <H2>Errores más comunes al elegir un programa de gestión</H2>
          <P>
            El primer error es elegir por la lista de funciones más larga, en lugar de por el
            problema real que quieres resolver. Un programa muy completo que tu equipo no usa bien
            es, en la práctica, peor que uno más sencillo que sí se aprovecha al 100%.
          </P>
          <P>
            El segundo error es no probarlo con el equipo antes de contratar: lo que parece
            intuitivo en una demo puede no serlo el primer día real de trabajo. El tercero es
            acumular herramientas que se solapan — un programa de gestión, más una app de
            reservas, más una hoja de cálculo aparte — en lugar de consolidar en un único sistema.
            Y el cuarto es ignorar la curva de adopción: si migrar lleva semanas, hay que
            planificarlo, no improvisarlo.
          </P>

          <H2>Preguntas que debes hacer antes de contratar</H2>
          <P>
            Antes de firmar, pregunta si el programa se integra con WhatsApp y con el calendario
            que ya usa el equipo, porque eso condiciona cuánto tendrás que cambiar tu forma de
            trabajar. Pregunta también cuánto tarda la puesta en marcha real, no la teórica, y qué
            pasa con tus datos si decides cambiar de proveedor más adelante.
          </P>
          <P>
            Por último, comprueba que el soporte esté en español y sea accesible cuando surge un
            problema el mismo día — es habitual que este punto se descuide en la decisión y acabe
            siendo el que más fricción genera en el día a día.
          </P>

          <H2>Cuándo el programa no es suficiente y necesitas automatización</H2>
          <P>
            Incluso con el mejor programa de gestión, hay un tipo de problema que ninguno resuelve
            por sí solo: las consultas que llegan fuera de horario. Hasta un{" "}
            <strong>40% de las consultas</strong> de una clínica llegan cuando no hay nadie para
            atenderlas, y si un lead no recibe respuesta en los primeros 5 minutos, la
            probabilidad de perderlo puede llegar al <strong>80%</strong>. Con un valor medio por
            paciente de alrededor de <strong>3.000€ de LTV</strong>, cada consulta sin responder
            tiene un coste real.
          </P>
          <P>
            El programa de gestión guarda el dato del paciente, pero no mantiene la conversación.
            Ahí es donde entra un agente con IA que atiende, resuelve dudas frecuentes y agenda la
            cita directamente sobre el programa que ya usas, conectándose con él en lugar de
            sustituirlo. Si quieres ver cómo asegurarte de que el programa base esté bien elegido
            antes de dar ese paso, revisa nuestra guía de{" "}
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
              ¿Ya tienes programa de gestión pero sigues perdiendo consultas?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Es el hueco que ningún programa de gestión cubre: nadie contesta cuando la
              consulta llega fuera de horario. El agente de WhatsApp se conecta por encima
              del programa que ya usas y atiende esa parte.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver el agente de WhatsApp →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
