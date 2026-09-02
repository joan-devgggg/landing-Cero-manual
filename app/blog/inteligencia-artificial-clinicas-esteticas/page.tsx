import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import H3 from "@/components/blog/H3"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/inteligencia-artificial-clinicas-esteticas"
const DATES = articleDates("inteligencia-artificial-clinicas-esteticas")
const TITLE = "Inteligencia artificial en clínicas estéticas | Cero Manual"
const DESCRIPTION =
  "La IA ya está transformando cómo las clínicas estéticas gestionan leads, citas y pacientes. Descubre qué puedes automatizar hoy y por dónde empezar."
const HEADLINE =
  "Inteligencia artificial para clínicas estéticas: qué puedes automatizar hoy"

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
    q: "¿Necesito conocimientos técnicos para usar IA en mi clínica?",
    a: "No. Las herramientas de IA pensadas para clínicas — como un agente de WhatsApp o un sistema de recordatorios — se configuran una vez y funcionan solas a partir de ahí. No tienes que programar nada ni mantener ningún sistema: alguien lo configura por ti según cómo trabaja tu clínica, y tu equipo sigue usando WhatsApp y la agenda como ya hace.",
  },
  {
    q: "¿La IA va a sustituir a mi equipo?",
    a: "No, lo libera. La IA se encarga de las tareas repetitivas — responder preguntas frecuentes, enviar recordatorios, hacer seguimiento a pacientes inactivos — para que tu equipo dedique su tiempo a lo que de verdad requiere trato humano: la atención en consulta, los casos complejos y las decisiones que solo una persona puede tomar.",
  },
  {
    q: "¿Por dónde debería empezar a automatizar?",
    a: "Por donde más dinero se está perdiendo en silencio: la atención fuera de horario. Casi un 40% de las consultas llegan cuando la clínica está cerrada, y si nadie responde, ese lead se va a la competencia. Empezar por un agente de WhatsApp que atienda 24/7 suele ser el cambio con el retorno más rápido y visible.",
  },
  {
    q: "¿Cuánto tiempo se tarda en notar resultados?",
    a: "Las primeras semanas. Un agente de WhatsApp empieza a responder consultas desde el primer día, los recordatorios automáticos reducen los no-shows casi de inmediato, y las campañas de reactivación de pacientes inactivos suelen generar las primeras citas nuevas en la primera o segunda semana de funcionamiento.",
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

export default function InteligenciaArtificialArticlePage() {
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
            10 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            Hasta hace poco, hablar de inteligencia artificial en una clínica estética
            sonaba a algo lejano — cosa de grandes cadenas con departamentos de
            tecnología propios. Eso ha cambiado. Hoy, una clínica con un par de
            profesionales y una recepcionista puede tener un agente que responde
            WhatsApp a cualquier hora, un sistema que confirma citas solo y una campaña
            que reactiva pacientes inactivos sin que nadie escriba un solo mensaje.
          </P>
          <P>
            Lo que está cambiando no es la tecnología en sí — es que ahora es accesible,
            se configura en días y no requiere mantenimiento. Las clínicas que ya la
            usan no están haciendo algo radicalmente distinto: están automatizando las
            tareas repetitivas que antes consumían horas de su equipo cada semana.
          </P>
          <P>
            En este artículo vas a ver, con datos concretos, qué puede hacer la IA por
            tu clínica estética hoy mismo, en qué áreas tiene más impacto y, sobre todo,
            por dónde conviene empezar para ver resultados cuanto antes.
          </P>

          <H2>¿Qué puede hacer la IA por tu clínica estética?</H2>
          <P>
            La inteligencia artificial aplicada a una clínica estética no es un robot que
            sustituye a las personas — es un conjunto de sistemas que se encargan de las
            tareas repetitivas y predecibles, las que ocupan tiempo pero no requieren
            criterio humano en cada caso.
          </P>
          <P>
            En la práctica, hoy ya se puede automatizar la atención a consultas
            frecuentes, la confirmación y recordatorio de citas, y el seguimiento a
            pacientes que llevan tiempo sin volver. Tres áreas que, juntas, representan
            buena parte del tiempo administrativo de una clínica — y una parte
            importante de los ingresos que se pierden sin que nadie se dé cuenta.
          </P>
          <P>
            Vamos a verlas una por una, con los datos que explican por qué importan.
          </P>

          <H2>Atención al cliente 24/7 sin contratar más personal</H2>
          <P>
            Casi un 40% de las consultas que recibe una clínica estética llegan fuera de
            horario: por la noche, en fin de semana, o mientras todo el equipo está
            atendiendo a otro paciente. Si nadie responde a tiempo, esa persona escribe a
            la siguiente clínica de su lista — y probablemente reserve allí.
          </P>
          <P>
            Un agente de WhatsApp con IA responde esas consultas al instante, a
            cualquier hora: explica tratamientos, da precios orientativos, resuelve
            dudas habituales y, si la persona está lista, puede agendar la cita
            directamente. Todo por el canal donde ya están tus pacientes — los mensajes
            de WhatsApp se leen entre un 95% y un 98% de las veces, frente al 20-25% del
            email.
          </P>
          <P>
            Esto no sustituye a tu recepcionista durante el horario de la clínica —
            cubre exactamente las horas en las que, hoy, nadie está contestando. Lo
            explicamos con más detalle en nuestra guía sobre el{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>
            .
          </P>

          <H2>Automatizar citas y recordatorios con IA</H2>
          <P>
            Entre el 12% y el 19% de las citas programadas en una clínica terminan en
            ausencia — el paciente simplemente no aparece. Cada una de esas ausencias es
            un hueco de agenda que nadie ocupa y que, sumado al final del mes, puede
            representar miles de euros en ingresos perdidos.
          </P>
          <P>
            La IA reduce esto con recordatorios que piden confirmación activa: en lugar
            de un aviso que se puede ignorar, el paciente responde «sí» o «no puedo» — y
            ese pequeño gesto cambia por completo su comportamiento. Si alguien no
            confirma, el sistema lo detecta con tiempo y puede ofrecer ese hueco a otro
            paciente antes de que se pierda.
          </P>
          <P>
            El resultado es menos huecos vacíos, menos llamadas de seguimiento y una
            agenda que se autogestiona buena parte del tiempo.
          </P>

          <H3>De la confirmación a la lista de espera</H3>
          <P>
            Cuando un hueco se libera — por cancelación o por falta de confirmación — el
            mismo sistema puede avisar automáticamente a pacientes en lista de espera,
            que confirman su interés y ocupan ese hueco en minutos. Una ausencia deja de
            ser una pérdida total y se convierte en una cita para otra persona.
          </P>

          <H2>Recuperar pacientes inactivos con mensajes automáticos</H2>
          <P>
            Toda clínica tiene una lista de pacientes que vinieron una o varias veces y
            dejaron de venir, sin que pasara nada concreto — simplemente se fueron
            espaciando las visitas hasta desaparecer. Cada uno de esos pacientes
            representa, de media, un valor de vida (LTV) de alrededor de 3.000€ si
            siguiera siendo cliente recurrente.
          </P>
          <P>
            La IA puede identificar a estos pacientes automáticamente — según cuánto
            tiempo llevan sin reservar — y enviarles un mensaje personalizado por
            WhatsApp recordándoles que existes, con una oferta o un motivo concreto para
            volver. No hace falta que nadie revise listados ni escriba mensajes uno por
            uno: el sistema los detecta y actúa solo, de forma recurrente.
          </P>
          <P>
            Recuperar a una parte de esos pacientes no requiere captar a nadie nuevo —
            son ingresos que ya conocías y que estaban esperando un motivo para volver.
          </P>

          <H2>Por dónde empezar: el orden correcto</H2>
          <P>
            No hace falta automatizarlo todo de golpe. El orden que mejor funciona en la
            práctica es empezar por donde se está perdiendo dinero de forma más directa
            y visible, e ir añadiendo capas desde ahí.
          </P>
          <P>
            <strong>1. Atención 24/7.</strong> Es el punto de entrada de todo lo demás —
            si no captas el lead cuando llega, nada de lo siguiente importa. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp con IA
            </InternalLink>{" "}
            cubre las horas en las que hoy nadie responde.
          </P>
          <P>
            <strong>2. Citas y recordatorios.</strong> Una vez que entran más leads,
            asegúrate de que las citas que agendas se celebran. La confirmación activa
            reduce las ausencias y mantiene la agenda llena.
          </P>
          <P>
            <strong>3. Reactivación de pacientes inactivos.</strong> Con la atención y la
            agenda funcionando solas, el último paso es recuperar a los pacientes que ya
            tenías y que llevan tiempo sin volver — el ingreso más rápido de conseguir
            porque no requiere captación.
          </P>
          <P>
            Cada paso se apoya en el anterior, y cada uno empieza a dar resultados desde
            las primeras semanas. No es necesario tener todo resuelto para empezar — solo
            hay que empezar por el primero.
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
              ¿Quieres saber qué puedes automatizar primero?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántos leads y citas se te están
              escapando — y cómo un{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp con IA
              </InternalLink>{" "}
              puede empezar a recuperarlos desde la primera semana.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero saber por dónde empezar →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
