import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"

const PATH = "/blog/marketing-clinica-dental"
const TITLE = "Marketing para clínicas dentales: estrategias que funcionan en 2026 | Cero Manual"
const DESCRIPTION =
  "El marketing para clínicas dentales ha cambiado. Te explicamos qué canales funcionan realmente y cómo automatizar la captación de pacientes."
const HEADLINE = "Marketing para clínicas dentales: qué funciona realmente en 2026"

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
    q: "¿Cuál es el canal de marketing más rentable para una clínica dental?",
    a: "Depende del momento de la clínica, pero en la mayoría de los casos Google es el canal con mayor retorno porque capta a personas que ya están buscando un dentista en ese momento. Las redes sociales ayudan a construir marca y confianza a medio plazo, pero conviertan peor en frío. WhatsApp, por su parte, no capta pacientes nuevos por sí solo, pero es el canal donde se cierra la cita una vez que el paciente ha contactado.",
  },
  {
    q: "¿Cuánto tiempo se tarda en ver resultados con marketing dental?",
    a: "En Google Ads y campañas de pago los primeros resultados pueden verse en 1-2 semanas, aunque la optimización seria lleva 1-2 meses. En SEO y redes sociales el horizonte es de 3-6 meses para notar un crecimiento sostenido. Lo que sí cambia desde el primer día es la velocidad de respuesta: si automatizas la primera respuesta a los leads, dejas de perder pacientes que ya estaban interesados, sin esperar a que el resto de canales maduren.",
  },
  {
    q: "¿Necesito un community manager para hacer marketing en mi clínica dental?",
    a: "No es imprescindible para empezar. Muchas clínicas obtienen mejores resultados centrando el presupuesto en Google (donde está la intención de compra) y en una gestión rápida de WhatsApp, antes que en mantener una presencia constante en redes sociales. Si decides invertir en redes, prioriza la calidad y la consistencia sobre la cantidad de publicaciones.",
  },
  {
    q: "¿Cómo sé si estoy perdiendo pacientes por no responder a tiempo?",
    a: "Una señal clara es revisar cuántos mensajes o llamadas de WhatsApp, Instagram o el formulario web quedan sin respuesta durante más de unas horas. Si tu equipo solo puede atender en horario de clínica, es muy probable que estés perdiendo el 40% de las consultas que llegan fuera de ese horario — y hasta un 80% de probabilidad de perder un lead si tarda más de 5 minutos en recibir respuesta.",
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

export default function MarketingClinicaDentalArticlePage() {
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
            Marketing para clínicas
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
            El marketing para clínicas dentales ya no se parece al de hace cinco años. Los
            folletos, las vallas publicitarias y los anuncios genéricos en redes sociales han
            dejado paso a canales donde se puede medir, en euros, cuánto cuesta captar a un
            paciente y cuánto vale ese paciente a lo largo del tiempo.
          </P>
          <P>
            Las clínicas que no se adaptan a este cambio no desaparecen de la noche a la
            mañana, pero sí pierden terreno poco a poco: pagan más por cada paciente nuevo,
            compiten peor en Google frente a clínicas que sí han optimizado su presencia
            digital, y dejan escapar leads que ya estaban interesados simplemente porque nadie
            respondió a tiempo.
          </P>
          <P>
            En este artículo vas a ver qué canales de marketing funcionan realmente para una
            clínica dental en 2026, cómo se complementan entre sí, y cómo automatizar la parte
            de captación y conversión sin perder el trato cercano que diferencia a una clínica
            de otra.
          </P>

          <H2>Los canales de marketing que más funcionan para clínicas dentales</H2>
          <P>
            No todos los canales de marketing cumplen la misma función, y uno de los errores
            más comunes es tratarlos como si fueran intercambiables. Para una clínica dental,
            cada canal tiene un papel distinto dentro del recorrido del paciente:
          </P>
          <P>
            <strong>Google (SEO y Google Ads).</strong> El canal donde están las personas que
            ya han decidido que necesitan un dentista y están buscando uno activamente.
          </P>
          <P>
            <strong>Redes sociales (Instagram, Facebook, TikTok).</strong> El canal donde se
            construye confianza y reconocimiento de marca, pero que rara vez convierte en una
            primera visita por sí solo.
          </P>
          <P>
            <strong>WhatsApp.</strong> El canal donde se produce la conversación real con el
            paciente — donde se resuelven dudas, se confirman precios y, finalmente, se agenda
            la cita.
          </P>
          <P>
            La estrategia que mejor funciona no es elegir uno y descartar los demás, sino
            entender que Google y redes sociales generan el contacto, y WhatsApp es lo que
            convierte ese contacto en un paciente real.
          </P>

          <H2>Google: el canal con más intención de compra</H2>
          <P>
            Cuando alguien busca «dentista cerca de mí» o «implante dental precio» en Google,
            no está navegando sin rumbo: está a un paso de pedir cita. Por eso Google —tanto
            en resultados orgánicos (SEO) como en anuncios (Google Ads)— suele ser el canal
            con mayor retorno para una clínica dental.
          </P>
          <P>
            El SEO local es especialmente importante: aparecer en el mapa de Google cuando
            alguien busca un dentista en tu zona, con buenas reseñas y una ficha completa,
            genera llamadas y mensajes de forma constante sin coste por clic. Google Ads
          complementa esto cuando quieres resultados más rápidos o quieres aparecer para
          búsquedas concretas, como un tratamiento específico.
          </P>
          <P>
            El problema no suele estar en atraer estos clics, sino en lo que pasa después:
            si alguien hace clic, escribe por WhatsApp o rellena un formulario y tarda más de
            5 minutos en recibir respuesta, la probabilidad de perder ese lead llega hasta el
            80%. Todo el esfuerzo y el presupuesto invertido en aparecer en Google se pierde
            en los últimos metros.
          </P>

          <H2>Redes sociales para clínicas dentales: qué funciona y qué no</H2>
          <P>
            En redes sociales, el contenido que mejor funciona para una clínica dental no es
            el que más vende, sino el que más confianza genera: casos de antes y después,
            el equipo en el día a día, explicaciones sencillas sobre tratamientos y testimonios
            reales de pacientes.
          </P>
          <P>
            Lo que no suele funcionar son los descuentos agresivos publicados de forma
            aislada, sin contexto, o las cuentas que solo publican promociones. Generan
            seguidores poco comprometidos y, a menudo, perfiles que solo buscan precio.
          </P>
          <P>
            La función real de las redes sociales en el marketing dental es de apoyo: alguien
            que ya te ha encontrado por Google o por recomendación entra en tu perfil para
            confirmar que la clínica es de fiar antes de escribir. Si esa persona escribe por
            WhatsApp o por mensaje directo y no recibe respuesta rápida, todo ese trabajo de
            construir confianza se pierde en el último paso.
          </P>

          <H2>WhatsApp como canal de conversión</H2>
          <P>
            De todos los canales, WhatsApp es donde se decide si un contacto se convierte en
            paciente o no. Con una tasa de apertura del 95-98% —muy por encima del 20-25% del
            email—, es el canal donde los pacientes esperan una respuesta prácticamente
            inmediata, sea cual sea la hora.
          </P>
          <P>
            Y ahí está el problema para muchas clínicas: hasta un 40% de las consultas llegan
            fuera del horario de atención, por la noche o en fin de semana. Si nadie del
            equipo puede contestar en ese momento, el paciente —que probablemente esté
            comparando varias clínicas a la vez— sigue buscando hasta que alguien le responda.
          </P>
          <P>
            Aquí es donde un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>{" "}
            marca la diferencia: responde al instante, resuelve las preguntas más habituales
            sobre precios, tratamientos y disponibilidad, y deja la conversación lista para
            que tu equipo la cierre o agende la cita directamente.
          </P>

          <H2>Cómo automatizar el marketing sin perder el toque personal</H2>
          <P>
            La automatización en marketing dental no significa sustituir el trato humano por
            respuestas robóticas. Significa asegurarse de que ningún lead se quede sin
            respuesta mientras tu equipo está ocupado, durmiendo o fuera de horario —y que,
            cuando llegue el momento de hablar con una persona, la conversación ya esté
            avanzada.
          </P>
          <P>
            En la práctica, esto se traduce en automatizar la primera respuesta a cualquier
            consulta que llegue por WhatsApp, web o redes, recogiendo los datos básicos del
            paciente y las preguntas frecuentes, para que tu equipo solo tenga que entrar a
            cerrar la cita o resolver dudas más específicas.
          </P>
          <P>
            El resultado es que el presupuesto que ya inviertes en Google, SEO o redes
            sociales rinde más, porque deja de perderse en el último paso del embudo: la
            respuesta. El{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>{" "}
            está pensado precisamente para cubrir ese último paso, las 24 horas del día.
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
              El canal de marketing más barato ya lo tienes
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Es tu propia base de pacientes. La{" "}
              <InternalLink href="/reactivacion-pacientes-inactivos">
                reactivación automática de pacientes
              </InternalLink>{" "}
              detecta a los que dejaron de venir y les escribe por WhatsApp, sin coste por
              impresión y sin competir con nadie por el clic.
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
