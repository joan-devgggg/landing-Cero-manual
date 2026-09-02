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

const PATH = "/blog/tecnologia-para-clinicas-esteticas"
const DATES = articleDates("tecnologia-para-clinicas-esteticas")
const TITLE = "Tecnología para clínicas estéticas: qué herramientas usar en 2026 | Cero Manual"
const DESCRIPTION =
  "La tecnología está transformando cómo las clínicas estéticas captan y retienen pacientes. Te explicamos qué herramientas usar y por dónde empezar."
const HEADLINE =
  "Tecnología para clínicas estéticas: qué herramientas usar en 2026 y por dónde empezar"

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
    q: "¿Qué tecnología debería priorizar una clínica estética que está empezando?",
    a: "Una agenda online y un canal de WhatsApp bien configurado. Son las dos tecnologías que más impacto tienen a corto plazo: la agenda reduce las llamadas y los errores de horario, y WhatsApp es el canal donde tus pacientes ya están — con una tasa de apertura del 95-98%.",
  },
  {
    q: "¿La inteligencia artificial es solo para clínicas grandes?",
    a: "No. De hecho, suele tener más impacto relativo en clínicas pequeñas y medianas, porque no tienen un equipo grande de recepción que pueda cubrir todas las franjas horarias. Un agente con IA permite que una clínica con poco personal dé una atención que antes solo se podía dar con varias personas dedicadas.",
  },
  {
    q: "¿Cuánto tiempo se tarda en implementar nueva tecnología en una clínica?",
    a: "Depende de la herramienta, pero lo habitual es que una agenda online o un canal de WhatsApp Business estén operativos en pocos días. Las soluciones con IA que se integran con tu agenda y tu CRM suelen tardar algo más en configurarse, porque hay que adaptarlas al tono y a los procesos de tu clínica, pero no implican cambiar de sistema desde cero.",
  },
  {
    q: "¿Qué pasa si mi equipo no es muy tecnológico?",
    a: "Es la situación más común, y no es un impedimento. La mayoría de estas herramientas están pensadas para que el paciente no note ningún cambio — sigue escribiendo por WhatsApp o reservando online como siempre — y para que el equipo de la clínica las use con una interfaz sencilla, sin necesidad de formación técnica previa.",
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

export default function TecnologiaParaClinicasEsteticasPage() {
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
            13 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Hace unos años, la tecnología en una clínica estética era poco más que un
            ordenador con una hoja de cálculo y, como mucho, un programa de citas.
            Hoy ya no es así: la forma en que un paciente descubre tu clínica, reserva una
            cita, recibe un recordatorio o vuelve a contactar pasa, casi siempre, por
            alguna herramienta tecnológica.
          </P>
          <P>
            Esto no significa que haya que adoptar todo lo nuevo que aparece. Significa
            que, si tu clínica no usa bien la tecnología que ya está disponible, es muy
            probable que estés perdiendo pacientes frente a otra clínica que sí lo hace —
            aunque ofrezca los mismos tratamientos.
          </P>
          <P>
            En este artículo vas a ver qué tecnologías están cambiando realmente el día a
            día de las clínicas estéticas, cuáles ayudan a captar más pacientes, cuáles
            ayudan a retenerlos, qué papel tiene la inteligencia artificial en todo esto y
            cómo implementarlo todo sin que se convierta en un caos de herramientas
            sueltas.
          </P>

          <H2>Las tecnologías que están cambiando las clínicas estéticas</H2>
          <P>
            Hay tres tipos de tecnología que más están marcando la diferencia ahora mismo.
            La primera es la agenda online: permite que un paciente reserve, cambie o
            cancele una cita sin tener que llamar por teléfono, y que la clínica vea su
            disponibilidad actualizada en tiempo real.
          </P>
          <P>
            La segunda es la comunicación automatizada por WhatsApp: recordatorios de
            cita, confirmaciones, mensajes de seguimiento. Tiene sentido porque WhatsApp
            tiene una tasa de apertura del 95-98%, muy superior a un email o un SMS, y es
            el canal donde tus pacientes ya hablan contigo de forma natural.
          </P>
          <P>
            La tercera es la inteligencia artificial aplicada a la atención al paciente:
            sistemas capaces de mantener una conversación, responder dudas y gestionar
            citas sin que haya una persona detrás en cada mensaje. Es la tecnología más
            nueva de las tres, y también la que más recorrido tiene por delante.
          </P>

          <H2>Herramientas para captar más pacientes</H2>
          <P>
            En la parte de captación, la tecnología más relevante es la que reduce la
            distancia entre el momento en que alguien se interesa por tu clínica y el
            momento en que consigue una respuesta. Hasta un 40% de las consultas llegan
            fuera del horario de atención — por la noche, los fines de semana, durante
            tratamientos.
          </P>
          <P>
            Si esas consultas no se atienden rápido, el coste es alto: si un lead no
            recibe respuesta en los primeros 5 minutos, la probabilidad de perderlo puede
            llegar al 80%. Por eso, herramientas como formularios conectados a WhatsApp,
            chats en la web o respuestas automáticas iniciales son tan importantes — no
            sustituyen a tu equipo, pero evitan que un interesado se enfríe mientras
            espera.
          </P>
          <P>
            Teniendo en cuenta que el valor medio de un paciente (LTV) en una clínica
            estética suele rondar los 3.000€, cada consulta que se pierde por no responder
            a tiempo tiene un impacto que se puede medir directamente en la facturación.
          </P>

          <H2>Herramientas para retener y fidelizar</H2>
          <P>
            Captar un paciente nuevo es solo la mitad del trabajo. La otra mitad es
            conseguir que vuelva. Aquí la tecnología más útil es la que mantiene el
            contacto sin que el equipo tenga que acordarse manualmente de hacerlo:
            recordatorios de revisión, mensajes de seguimiento tras un tratamiento o
            avisos cuando toca repetir una sesión.
          </P>
          <P>
            También entran aquí los sistemas de CRM que permiten segmentar pacientes —
            por ejemplo, identificar a quienes no han vuelto en varios meses — y lanzar
            campañas de reactivación dirigidas, en lugar de enviar el mismo mensaje a toda
            la base de datos.
          </P>
          <P>
            La combinación de ambas cosas — seguimiento automático y segmentación — es lo
            que convierte una base de pacientes en una fuente de ingresos recurrente, en
            lugar de depender constantemente de capturar pacientes nuevos.
          </P>

          <H2>IA: la tecnología que más impacto tiene ahora mismo</H2>
          <P>
            De todas las tecnologías disponibles para una clínica estética, la
            inteligencia artificial aplicada a la atención al paciente es, ahora mismo, la
            que tiene mayor impacto por el esfuerzo que requiere implementarla.
          </P>
          <P>
            Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp con IA
            </InternalLink>{" "}
            puede atender consultas las 24 horas del día, responder preguntas sobre
            precios, horarios y tratamientos, y agendar citas directamente, sin que nadie
            del equipo tenga que estar disponible en ese momento.
          </P>
          <P>
            La diferencia frente a otras tecnologías es que no se limita a organizar
            información — actúa: responde, agenda, hace seguimiento. Para una clínica con
            un equipo reducido, esto equivale a tener una persona de recepción cubriendo
            las franjas horarias que, de otra forma, quedarían sin atender.
          </P>

          <H2>Cómo implementar tecnología sin que sea un caos</H2>
          <P>
            El error más habitual al adoptar tecnología es ir sumando herramientas según
            van apareciendo necesidades, sin que se conecten entre sí. El resultado es una
            clínica con varias plataformas, cada una con su propia información, y nadie
            tiene una vista completa del paciente.
          </P>
          <P>
            La forma de evitarlo es priorizar herramientas que se integren entre sí —
            agenda, CRM y comunicación deberían poder "hablarse" — y avanzar por fases:
            primero la base (agenda y comunicación), después la retención (CRM y
            seguimiento) y, por último, la automatización con IA encima de todo lo
            anterior.
          </P>
          <P>
            Implementado así, cada fase aprovecha la anterior en lugar de duplicarla. Y
            cuando llega el momento de añadir{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              un agente con IA
            </InternalLink>
            , este se conecta con lo que ya tienes en marcha, en lugar de obligarte a
            empezar de cero.
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
              Lleva la tecnología de tu clínica al siguiente nivel
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Descubre cómo un{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp con IA
              </InternalLink>{" "}
              puede atender a tus pacientes las 24 horas del día y agendar citas sin que
              nadie de tu equipo tenga que estar pendiente del móvil.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero automatizar mi clínica →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
