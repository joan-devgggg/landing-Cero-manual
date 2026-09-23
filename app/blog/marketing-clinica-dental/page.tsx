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

const PATH = "/blog/marketing-clinica-dental"
const DATES = articleDates("marketing-clinica-dental")
const TITLE = "Marketing para clínicas dentales: qué funciona | Cero Manual"
const DESCRIPTION =
  "Qué canales de marketing funcionan para una clínica dental —Google, redes sociales y WhatsApp— y cómo automatizar la respuesta a los pacientes."
const ARTICLE_DESCRIPTION =
  "Canales de marketing para clínicas dentales: Google, redes sociales y WhatsApp, qué aporta cada uno y cómo automatizar la respuesta a los pacientes que llegan."
const HEADLINE = "Marketing para clínicas dentales: qué funciona realmente"

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
    q: "¿Cuál es el canal de marketing más rentable para una clínica dental?",
    a: "Depende del momento de la clínica, pero en la mayoría de los casos Google es el canal con mayor retorno porque capta a personas que ya están buscando un dentista en ese momento. Las redes sociales ayudan a construir marca y confianza a medio plazo, pero conviertan peor en frío. WhatsApp, por su parte, no capta pacientes nuevos por sí solo, pero es el canal donde se cierra la cita una vez que el paciente ha contactado.",
  },
  {
    q: "¿Cuánto tiempo se tarda en ver resultados con marketing dental?",
    a: "Depende del canal y de tu punto de partida. Google Ads y las campañas de pago empiezan a traer contactos en cuanto se activan, aunque afinarlas lleva más tiempo; en SEO y redes sociales el crecimiento es más lento y se nota a medio plazo. Lo que sí cambia desde el primer día es la velocidad de respuesta: si automatizas la primera respuesta a los leads, dejas de perder pacientes que ya estaban interesados, sin esperar a que el resto de canales maduren.",
  },
  {
    q: "¿Necesito un community manager para hacer marketing en mi clínica dental?",
    a: "No es imprescindible para empezar. Muchas clínicas obtienen mejores resultados centrando el presupuesto en Google (donde está la intención de compra) y en una gestión rápida de WhatsApp, antes que en mantener una presencia constante en redes sociales. Si decides invertir en redes, prioriza la calidad y la consistencia sobre la cantidad de publicaciones.",
  },
  {
    q: "¿Cómo sé si estoy perdiendo pacientes por no responder a tiempo?",
    a: "Una señal clara es revisar cuántos mensajes o llamadas de WhatsApp, Instagram o el formulario web quedan sin respuesta durante más de unas horas. Si tu equipo solo puede atender en horario de clínica, es muy probable que estés perdiendo parte de las consultas que llegan fuera de ese horario, porque quien espera respuesta puede acabar pidiendo cita en otra clínica.",
  },
  {
    q: "¿Hace falta un presupuesto grande para conseguir pacientes nuevos?",
    a: "No necesariamente. Antes de subir la inversión en anuncios, merece la pena revisar si estás aprovechando lo que ya tienes: las reseñas en Google, las recomendaciones de tus pacientes y los leads que escribieron y no recibieron respuesta a tiempo. Muchas clínicas consiguen más citas ordenando esos puntos antes de gastar más en publicidad.",
  },
  {
    q: "¿Sirve esto para una clínica pequeña con un solo dentista?",
    a: "Sí, y suele notarse más, porque cada paciente nuevo pesa más en la agenda. No hace falta un equipo de marketing: con una ficha de Google cuidada, reseñas pedidas de forma sistemática, respuesta rápida por WhatsApp y seguimiento automático de los leads, una clínica pequeña puede competir con clínicas mucho más grandes de su zona.",
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
            11 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            En marketing para clínicas dentales funciona combinar canales con papeles
            distintos: Google (SEO local y Google Ads) capta a quien ya busca dentista, las
            redes sociales y las recomendaciones generan confianza, y WhatsApp convierte ese
            contacto en una cita. De todos ellos, Google suele ser el que da mayor retorno,
            porque llega a personas que están a un paso de pedir cita.
          </P>
          <P>
            Los folletos, las vallas publicitarias y los anuncios genéricos han dejado paso a
            canales donde se puede medir, en euros, cuánto cuesta captar a un paciente. Las
            clínicas que no se adaptan pierden terreno poco a poco:{" "}
            <InternalLink href="/blog/como-aumentar-facturacion-clinica-dental">
              pagan más por cada paciente nuevo
            </InternalLink>{" "}
            y compiten peor en Google frente a clínicas que han optimizado su presencia
            digital.
          </P>

          <H2>Los canales de marketing que más funcionan para clínicas dentales</H2>
          <P>
            Para una clínica dental, cada canal tiene un papel distinto dentro del recorrido del paciente:
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
            <strong>Recomendaciones de pacientes.</strong> El canal que trae pacientes ya
            predispuestos a confiar en la clínica. Funciona mejor cuando la experiencia en
            consulta es buena y se lo pones fácil al paciente para que te recomiende.
          </P>
          <P>
            La estrategia que mejor funciona combina los canales: Google y redes sociales
            generan el contacto, y{" "}
            <InternalLink href="/blog/whatsapp-para-clinicas-dentales">
              WhatsApp es lo que convierte ese contacto
            </InternalLink>{" "}
            en un paciente real.
          </P>

          <H2>Google: el canal con más intención de compra</H2>
          <P>
            Cuando alguien busca «dentista cerca de mí» o «implante dental precio» en Google,
            está a un paso de pedir cita. Por eso Google —tanto
            en resultados orgánicos (SEO) como en anuncios (Google Ads)— suele ser el canal
            con mayor retorno para una clínica dental.
          </P>
          <P>
            El SEO local es especialmente importante: aparecer en el mapa de Google cuando
            alguien busca un dentista en tu zona,{" "}
            <InternalLink href="/blog/resenas-google-clinicas-dentales">
              con buenas reseñas
            </InternalLink>{" "}
            y una ficha completa,
            genera llamadas y mensajes de forma constante sin coste por clic. Google Ads
          complementa esto cuando quieres resultados más rápidos o quieres aparecer para
          búsquedas concretas, como un tratamiento específico.
          </P>
          <P>
            Google es también el sitio donde casi todo el mundo comprueba una clínica antes
            de decidirse, venga de un anuncio o de una recomendación. Si tienes pocas reseñas
            o una valoración media baja, pierdes pacientes que habrían pedido cita. Por eso
            conviene pedirlas de forma sistemática, con un mensaje después de cada cita.
          </P>

          <H2>Redes sociales para clínicas dentales: qué funciona y qué no</H2>
          <P>
            En redes sociales, el contenido que mejor funciona para una clínica dental no es
            el que más vende, sino el que más confianza genera: casos de antes y después,
            el equipo en el día a día, explicaciones sencillas sobre tratamientos y testimonios
            reales de pacientes.
          </P>
          <P>
            Antes de publicar casos o testimonios, un aviso: la publicidad sanitaria está
            regulada en España —entre otras normas, por el Real Decreto 1907/1996, la normativa
            de tu comunidad autónoma y el código deontológico de la profesión— y puede limitar
            el uso de testimonios de pacientes y de imágenes de resultados. Verifica qué admite
            la normativa aplicable a tu clínica antes de publicarlos.
          </P>
          <P>
            Lo que no suele funcionar son los descuentos agresivos publicados de forma
            aislada, sin contexto, o las cuentas que solo publican promociones. Generan
            seguidores poco comprometidos y, a menudo, perfiles que solo buscan precio.
          </P>
          <P>
            La función real de las redes sociales en el marketing dental es de apoyo: alguien
            que ya te ha encontrado por Google o por recomendación entra en tu perfil para
            confirmar que la clínica es de fiar antes de escribir.
          </P>

          <H2>WhatsApp como canal de conversión</H2>
          <P>
            De todos los canales, WhatsApp es donde se decide si un contacto se convierte en
            paciente o no. Es una aplicación que los pacientes miran a diario y, justo por
            eso, el canal donde esperan una respuesta prácticamente inmediata, sea cual sea
            la hora.
          </P>
          <P>
            Las consultas no respetan el horario
            de atención y llegan también por la noche o en fin de semana. Si nadie del
            equipo puede contestar en ese momento, el paciente —que probablemente esté
            comparando varias clínicas a la vez— sigue buscando hasta que alguien le responda.
          </P>
          <P>
            Por eso conviene poner WhatsApp como opción de contacto en la web, en los anuncios
            y en las redes, en lugar de pedir que rellenen un formulario y esperen a que les
            llames.
          </P>
          <P>
            Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>{" "}
            responde al instante, resuelve las preguntas más habituales
            sobre precios, tratamientos y disponibilidad, y deja la conversación lista para
            que tu equipo la cierre o agende la cita directamente.
          </P>

          <H2>Cómo automatizar el marketing sin perder el toque personal</H2>
          <P>
            Automatizar el marketing dental consiste en asegurarse de que ningún lead se
            quede sin respuesta mientras tu equipo está ocupado o fuera de horario, y de que,
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
            Lo mismo vale para dos tareas que casi siempre se quedan a medias: pedir la reseña
            después de cada cita y hacer seguimiento a los leads que preguntaron y no llegaron
            a reservar. Si se automatizan, dejan de depender de que alguien del equipo tenga
            un hueco.
          </P>
          <P>
            Así, el presupuesto que ya inviertes en Google, SEO o redes sociales rinde más.
            El{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp con IA para clínicas dentales
            </InternalLink>{" "}
            está pensado para cubrir esa respuesta las 24 horas del día.
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
              Tu marketing no falla en el anuncio, falla en la respuesta
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Da igual lo bien que esté la campaña si el mensaje que genera se queda sin
              contestar hasta mañana. El{" "}
              <InternalLink href="/agente-whatsapp-clinicas-dentales">
                agente de WhatsApp para clínicas dentales
              </InternalLink>{" "}
              cubre ese último paso las 24 horas, que es donde se te está escapando el
              presupuesto.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-dentales"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver el agente para clínicas dentales →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
