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

const PATH = "/blog/como-fidelizar-pacientes-clinica-estetica"
const DATES = articleDates("como-fidelizar-pacientes-clinica-estetica")
const TITLE = "Fidelizar pacientes en tu clínica estética | Cero Manual"
const DESCRIPTION =
  "Cómo fidelizar pacientes en tu clínica estética: seguimiento post-cita, mensajes por WhatsApp y automatización para que vuelvan sin tener que llamarles."
const ARTICLE_DESCRIPTION =
  "Cómo fidelizar pacientes en una clínica estética: seguimiento después del tratamiento, detectar a quien deja de venir y automatizar los mensajes por WhatsApp."
const HEADLINE =
  "Cómo fidelizar pacientes en tu clínica estética (y que vuelvan sin que tengas que llamarles)"

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
    q: "¿Cómo sé qué pacientes están en riesgo de no volver?",
    a: "El indicador más fiable es el tiempo desde la última visita comparado con la frecuencia habitual de ese tratamiento. Si una persona que suele venir cada 6-8 semanas para mantenimiento lleva 12 sin aparecer, es una señal clara. Un sistema automático puede detectar estos patrones por ti —con el historial que recibe de tu programa de gestión, si se deja conectar, o de una exportación de tu base de pacientes— y avisarte antes de que ese paciente se convierta en un cliente perdido.",
  },
  {
    q: "¿No es invasivo escribir a un paciente que no ha pedido cita?",
    a: "Depende de cómo lo hagas. Un mensaje de seguimiento genuino — preguntando cómo le fue tras un tratamiento, recordándole que toca revisión o avisando de una novedad que le interesa — se percibe como atención. Lo que molesta son los recordatorios constantes de \"vuelve a comprar\": los mensajes tienen que ser útiles y espaciados.",
  },
  {
    q: "¿Cuánto tiempo tengo que dedicar a la fidelización si la automatizo?",
    a: "Prácticamente nada en el día a día. Una vez configurados los mensajes de seguimiento y las secuencias de reactivación, el sistema los envía solo según el calendario y el historial de cada paciente, que obtiene de tu programa de gestión si se puede conectar o de una exportación de tu base de pacientes. Tu equipo solo entra en juego cuando un paciente responde y quiere reservar, algo que también se puede gestionar de forma automática.",
  },
  {
    q: "¿Funciona igual de bien para clínicas pequeñas que para clínicas grandes?",
    a: "Sí, de hecho en clínicas pequeñas el impacto se nota antes porque cada paciente recurrente pesa más sobre la facturación total. No hace falta una base de datos enorme para que la automatización compense: con que recupere unas pocas citas al mes que de otra forma se habrían perdido, ya está dando resultado.",
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

export default function FidelizarPacientesArticlePage() {
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
            10 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Para fidelizar pacientes en tu clínica estética hace falta un seguimiento que no
            dependa de la memoria del equipo: un mensaje en las 24-48 horas posteriores al
            tratamiento, un recordatorio por WhatsApp cuando toca mantenimiento o revisión y
            un aviso de reactivación a quien lleva tiempo sin venir. Si lo automatizas, cada
            paciente recibe su mensaje en el momento justo sin que nadie tenga que llamarle.
          </P>
          <P>
            Sin ese seguimiento, la clínica funciona como un cubo agujereado: entran
            pacientes nuevos por un lado mientras los de siempre se enfrían y dejan de volver
            por el otro, sin que nadie se dé cuenta hasta que la agenda empieza a notarse más
            vacía.
          </P>

          <H2>Por qué la fidelización es más rentable que la captación</H2>
          <P>
            Un paciente que confía en tu clínica y vuelve de forma recurrente —para
            mantenimiento, retoques o nuevos tratamientos— genera a lo largo de su relación con
            tu centro mucho más que lo que deja una primera visita aislada. Ese es su valor de
            vida, y puedes calcularlo multiplicando tu ticket medio por las visitas que hace un
            paciente habitual.
          </P>
          <P>
            Captar a ese mismo paciente desde cero, en cambio, tiene un coste: anuncios,
            promociones de bienvenida, tiempo de tu equipo respondiendo consultas que muchas
            veces no llegan a convertirse en cita. Con alguien que ya conoce tu clínica,
            confía en tu equipo y no necesita que le convenzas de nada, buena parte de ese
            gasto desaparece.
          </P>
          <P>
            Por eso,{" "}
            <InternalLink href="/blog/como-reactivar-pacientes-inactivos-clinica">
              cada paciente que se enfría y deja de volver
            </InternalLink>{" "}
            se lleva todo ese valor potencial, que tu clínica tendrá que reemplazar
            captando a alguien nuevo.
          </P>

          <H2>Los errores más comunes que hacen que un paciente no vuelva</H2>
          <P>
            Muchos pacientes no dejan de venir porque estén descontentos: dejan de venir
            porque nadie les recuerda que toca volver, y la vida diaria se encarga del resto.
          </P>
          <P>
            El error más habitual es no tener ningún sistema de seguimiento: el paciente sale
            de la consulta, y la siguiente vez que sabes de él es si vuelve a escribir por su
            cuenta. Si no lo hace, desaparece de tu radar, sin que nadie en tu
            equipo lo note hasta meses después.
          </P>
          <P>
            Otro error frecuente es tratar a todos los pacientes igual, con comunicaciones
            genéricas — o directamente sin comunicación — en lugar de adaptar el seguimiento
            al tratamiento que se hizo y al tiempo que necesita para su próxima revisión o
            mantenimiento. Y, por último, está el error de fiarlo todo a la memoria del
            equipo: con la agenda del día a día, es prácticamente imposible que alguien se
            acuerde de escribir a cada paciente en el momento justo.
          </P>

          <H2>Seguimiento post-cita: el momento más importante</H2>
          <P>
            Las primeras 24-48 horas después de un tratamiento son el momento en el que un
            paciente está más receptivo y más fácil de fidelizar. Es cuando{" "}
            <InternalLink href="/blog/experiencia-paciente-clinica-estetica">
              todavía recuerda la experiencia
            </InternalLink>
            , valora que alguien se interese por cómo le ha ido, y es más
            probable que responda con confianza si surge alguna duda.
          </P>
          <P>
            Un simple mensaje preguntando cómo se encuentra tras el tratamiento, recordando
            los cuidados posteriores o resolviendo dudas habituales, hace que el paciente
            perciba que la clínica se preocupa por él. Repetido con cada paciente, ese gesto
            construye la confianza que después hace que vuelva sin pensarlo quien lo
            necesite.
          </P>
          <P>
            Hecho a mano, este seguimiento depende de que alguien del equipo se acuerde de
            escribir a cada paciente en el momento adecuado, y con la agenda llena casi nunca
            ocurre de forma sistemática.
          </P>

          <H2>Cómo usar WhatsApp para mantener el contacto sin ser invasivo</H2>
          <P>
            WhatsApp es{" "}
            <InternalLink href="/blog/clinica-estetica-por-whatsapp">
              el canal que tus pacientes ya tienen a mano
            </InternalLink>
            : es donde hablan a diario con su gente, y el mensaje de su clínica aparece en
            esa misma lista. Si quieres que un seguimiento o un recordatorio no se quede
            enterrado en una bandeja de entrada, WhatsApp es el sitio donde mandarlo.
          </P>
          <P>
            Que no resulte invasivo depende del contenido y de la frecuencia. Un mensaje de seguimiento tras el tratamiento, un recordatorio cuando toca
            mantenimiento, o un aviso sobre una novedad relevante para ese paciente en
            concreto se reciben como atención. Lo que se percibe como invasivo son los
            mensajes genéricos o puramente comerciales, enviados sin tener en
            cuenta el historial de cada persona.
          </P>
          <P>
            Si quieres ver cómo aplicar esto de forma concreta a los pacientes que ya tienes
            y que llevan tiempo sin volver, en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            te explicamos cómo funciona ese proceso paso a paso.
          </P>

          <H2>Automatiza la fidelización para que funcione sola</H2>
          <P>
            Lo que separa a una clínica que fideliza de una que no suele ser que exista un
            sistema que se encargue del seguimiento, pase lo que pase en el día a día.
          </P>
          <P>
            Automatizar la fidelización significa que cada paciente recibe su mensaje de
            seguimiento, su recordatorio de mantenimiento o su aviso de reactivación en el
            momento justo, sin que nadie de tu equipo tenga que acordarse ni dedicarle
            tiempo. Y si el paciente contesta con la clínica cerrada, la conversación sigue
            sin esperar al día siguiente.
          </P>
          <P>
            Si quieres ver cómo se aplicaría esto a los pacientes que ya tienes en tu base de
            datos y que hace tiempo que no aparecen, en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            te contamos cómo funciona el sistema y qué resultados puedes esperar.
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
              ¿Listo para que tus pacientes vuelvan sin que tengas que llamarles?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tu propia base de pacientes, cuántos llevan tiempo sin volver
              y cuánto valor representan — y cómo un sistema automático de seguimiento y
              reactivación por WhatsApp puede traerlos de vuelta sin que nadie de tu equipo
              tenga que hacer una sola llamada.
            </p>
            <Link
              href="/reactivacion-pacientes-inactivos"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero fidelizar a mis pacientes →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
