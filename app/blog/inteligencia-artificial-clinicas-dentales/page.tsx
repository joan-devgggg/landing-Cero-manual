import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"

const PATH = "/blog/inteligencia-artificial-clinicas-dentales"
const TITLE = "Inteligencia artificial para clínicas dentales: guía práctica | Cero Manual"
const DESCRIPTION =
  "La IA ya está transformando cómo las clínicas dentales gestionan citas, leads y pacientes. Descubre qué puedes automatizar hoy."
const HEADLINE = "Inteligencia artificial para clínicas dentales: qué puedes automatizar hoy"

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
    publishedTime: "2026-06-11T00:00:00.000Z",
    modifiedTime: "2026-06-11T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Es muy caro implementar IA en una clínica dental pequeña?",
    a: "No tanto como parece. La mayoría de clínicas no necesitan un desarrollo a medida ni un equipo técnico propio: existen sistemas ya preparados que se conectan a la agenda y al WhatsApp de la clínica en pocos días, con una cuota mensual similar a la de cualquier otra herramienta de gestión. La inversión suele recuperarse rápido solo con los no-shows que se evitan y los leads que dejan de perderse.",
  },
  {
    q: "¿La IA puede sustituir a la recepcionista de mi clínica?",
    a: "No es ese el objetivo, y normalmente no es lo que buscan las clínicas. La IA se encarga de las tareas repetitivas — responder preguntas frecuentes, confirmar citas, recuperar pacientes inactivos — para que la persona en recepción pueda dedicar su tiempo a lo que de verdad requiere trato humano: pacientes en consulta, casos complejos o situaciones delicadas.",
  },
  {
    q: "¿Los pacientes notan que están hablando con un sistema automatizado?",
    a: "Depende de cómo esté configurado, pero la experiencia suele ser positiva: lo que el paciente valora es obtener una respuesta rápida y útil, no necesariamente quién o qué se la da. Muchas clínicas combinan IA para las consultas habituales (horarios, precios, disponibilidad) con la opción de pasar a una persona del equipo en cualquier momento si el paciente lo pide.",
  },
  {
    q: "¿Cuánto tiempo se tarda en tener algo funcionando?",
    a: "Para los casos de uso más habituales — respuesta automática por WhatsApp, recordatorios de citas o recuperación de pacientes inactivos — suele bastar con una o dos semanas desde que se conecta la agenda y se define el tono de los mensajes. No hace falta esperar meses ni hacer un proyecto enorme para empezar a notar la diferencia.",
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
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
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

export default function InteligenciaArtificialClinicasDentalesArticlePage() {
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
            Automatización para clínicas
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
            11 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Hasta hace poco, hablar de inteligencia artificial en una clínica dental sonaba
            a algo lejano: tecnología de grandes cadenas, con presupuestos y equipos
            técnicos que una clínica independiente no tiene. Eso ha cambiado. Hoy existen
            herramientas de IA que se conectan directamente a la agenda y al WhatsApp de
            la clínica, sin necesidad de programadores ni inversiones enormes.
          </P>
          <P>
            Lo que ha cambiado no es solo la tecnología, sino para qué sirve en el día a
            día: responder consultas fuera de horario, confirmar citas, avisar cuando un
            hueco se libera o recuperar pacientes que llevan meses sin volver. Tareas que
            antes requerían tiempo del equipo y que ahora pueden ocurrir solas, en
            segundo plano.
          </P>
          <P>
            En este artículo vamos a ver, de forma práctica, qué puede hacer hoy la IA por
            una clínica dental, en qué áreas tiene más impacto y por dónde empezar si
            nunca has usado nada de esto.
          </P>

          <H2>Qué puede hacer la IA por tu clínica dental</H2>
          <P>
            La IA no es una sola cosa, sino un conjunto de funciones que se pueden aplicar
            por separado según lo que más falta haga en tu clínica. Las más habituales
            son: responder preguntas frecuentes de pacientes (horarios, precios,
            tratamientos), gestionar la agenda (confirmaciones, recordatorios, huecos
            libres), y hacer seguimiento de pacientes (recordatorios de revisión,
            campañas de reactivación).
          </P>
          <P>
            Esto importa especialmente porque casi un 40% de las consultas de una clínica
            llegan fuera del horario de atención — por la tarde-noche, fines de semana o
            mientras el equipo está con un paciente. Sin un sistema que las recoja, esas
            consultas simplemente se pierden o quedan sin respuesta hasta el día
            siguiente, cuando el paciente ya ha llamado a otra clínica.
          </P>

          <H2>Automatizar la gestión de citas con IA</H2>
          <P>
            Uno de los usos más directos de la IA en una clínica dental es la gestión de
            citas. En lugar de depender de llamadas y recordatorios manuales, un sistema
            automatizado envía un mensaje de confirmación antes de cada cita y espera la
            respuesta del paciente. Si confirma, no hace falta hacer nada más. Si avisa de
            que no puede venir, ese hueco queda libre con tiempo suficiente para
            ofrecérselo a otro paciente.
          </P>
          <P>
            Esto es relevante porque entre un 12% y un 19% de las citas dentales terminan
            en no-show — pacientes que no avisan y simplemente no aparecen. Con
            confirmación activa por WhatsApp, ese porcentaje baja de forma notable, porque
            el paciente tiene una forma fácil de avisar y la clínica tiene tiempo de
            reaccionar. Puedes ver cómo funciona este sistema aplicado a una clínica en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>
            .
          </P>

          <H2>Atención al paciente 24/7 sin personal adicional</H2>
          <P>
            Otro uso muy práctico es la atención automática por WhatsApp. Un agente con IA
            puede responder preguntas habituales — "¿hacéis blanqueamientos?", "¿cuánto
            cuesta una limpieza?", "¿tenéis hueco esta semana?" — en cualquier momento del
            día, incluso fuera del horario de la clínica.
          </P>
          <P>
            El canal importa tanto como la tecnología: los mensajes de WhatsApp se abren
            entre un 95% y un 98% de las veces, muy por encima de SMS o email. Eso
            significa que un mensaje automático por WhatsApp tiene muchas más
            probabilidades de ser leído y respondido que cualquier otro canal, lo que lo
            convierte en el lugar natural para que viva este tipo de atención automática.
          </P>

          <H2>Recuperar pacientes inactivos con IA</H2>
          <P>
            Toda clínica dental tiene una base de pacientes que en algún momento dejaron
            de venir: revisiones que no se volvieron a agendar, tratamientos que se
            quedaron a medias, pacientes que simplemente se fueron espaciando hasta
            desaparecer. Cada uno de esos pacientes representa un valor medio a lo largo
            del tiempo de unos 3.000€ — lo que se conoce como LTV (lifetime value).
          </P>
          <P>
            Un sistema de IA puede identificar automáticamente a estos pacientes (por
            ejemplo, los que no han tenido cita en los últimos 6-12 meses) y enviarles un
            mensaje personalizado por WhatsApp invitándoles a agendar una revisión. No
            hace falta que nadie del equipo revise listas ni escriba uno por uno: el
            sistema lo hace solo, de forma recurrente. Para ver cómo se monta este tipo de
            flujo, puedes consultar{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>
            .
          </P>

          <H2>Por dónde empezar si nunca has usado IA</H2>
          <P>
            No hace falta automatizarlo todo de golpe. Lo más sensato es empezar por el
            punto que más dolor genera hoy en tu clínica: si pierdes muchas citas por
            no-shows, empieza por los recordatorios con confirmación. Si te cuesta
            atender el WhatsApp fuera de horario, empieza por ahí. Si tienes una base de
            pacientes inactivos sin trabajar, empieza por una campaña de reactivación.
          </P>
          <P>
            Una vez ese primer flujo está funcionando y ves los resultados — menos huecos
            vacíos, menos consultas sin responder, pacientes que vuelven — es mucho más
            fácil decidir qué automatizar a continuación. La clave no es tener la
            tecnología más avanzada, sino tener algo funcionando que de verdad resuelva un
            problema concreto de tu día a día.
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
              ¿Por dónde empezar con la IA en tu clínica dental?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Por los pacientes que ya tienes. La reactivación automática detecta a quienes
              dejaron de venir y les escribe por WhatsApp uno a uno, sin que nadie de tu
              equipo tenga que repasar la base de datos.
            </p>
            <Link
              href="/reactivacion-pacientes-inactivos"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver la reactivación de pacientes →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
