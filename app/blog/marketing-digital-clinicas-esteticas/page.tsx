import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import BlogSource from "@/components/BlogSource"

const PATH = "/blog/marketing-digital-clinicas-esteticas"
const TITLE = "Marketing digital para clínicas estéticas: guía completa | Cero Manual"
const DESCRIPTION =
  "El marketing digital para clínicas estéticas va más allá de Instagram. Te explicamos los canales que realmente funcionan y por dónde empezar."
const HEADLINE =
  "Marketing digital para clínicas estéticas: qué funciona realmente y qué es perder el tiempo"

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
    modifiedTime: "2026-08-11T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Por dónde debería empezar si mi clínica no tiene presencia digital?",
    a: "Empieza por lo que ya tienes funcionando antes de abrir nuevos canales: una ficha de Google Business completa y con reseñas, y un canal de WhatsApp donde puedas responder rápido a quien te escriba. Esos dos elementos captan la intención de compra más alta — gente que ya está buscando un tratamiento — con una inversión mínima. Instagram y la publicidad de pago suman después, pero sin esa base, cualquier campaña que generes acabará perdiéndose por falta de respuesta o de confianza.",
  },
  {
    q: "¿Cuánto presupuesto mínimo necesito para hacer marketing digital en mi clínica?",
    a: "Con 200-300€/mes en Google Ads o Meta Ads ya puedes generar un volumen de leads constante para una clínica pequeña, siempre que el embudo de respuesta funcione. El error habitual es subir el presupuesto de publicidad sin haber resuelto cómo se gestionan los leads que ya llegan: si un lead espera horas para recibir respuesta, aumentar la inversión solo multiplica las oportunidades perdidas. Antes de gastar más, asegúrate de que cada consulta recibe respuesta en minutos.",
  },
  {
    q: "¿Vale la pena contratar una agencia de marketing para mi clínica?",
    a: "Depende del canal. Para gestión de campañas de Google Ads o Meta Ads, una agencia con experiencia en el sector salud/estética suele compensar, porque conoce las restricciones de contenido y evita que te bloqueen la cuenta. Para contenido de Instagram, muchas clínicas obtienen mejores resultados grabando ellas mismas con el móvil que pagando por contenido genérico de agencia. Y para la gestión de WhatsApp y la conversión de leads, ninguna agencia sustituye a un sistema que responda al instante: ahí la automatización rinde más que el gasto en gestión externa.",
  },
  {
    q: "¿Cómo sé si mi estrategia de marketing digital está funcionando?",
    a: "Mide tres números cada mes: cuántos leads nuevos llegan (por canal), qué porcentaje de esos leads se convierte en cita, y cuánto tiempo tardas en responder al primer contacto. Si los leads suben pero las citas no, el problema no es de marketing sino de conversión — normalmente respuesta lenta o falta de seguimiento. Antes de invertir más en captación, revisa siempre esos tres datos: a menudo el cuello de botella está en la respuesta, no en el alcance.",
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
  dateModified: "2026-08-11",
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

export default function MarketingDigitalClinicasArticlePage() {
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
            10 de junio de 2026 · 9 min de lectura
          </p>

          {/* Intro */}
          <P>
            Muchas clínicas estéticas invierten en marketing digital sin una estrategia
            clara: suben fotos a Instagram cuando hay tiempo, prueban un anuncio de vez en
            cuando y esperan que algo funcione. El resultado suele ser el mismo — algo de
            visibilidad, pocos leads y casi ninguna cita nueva que se pueda atribuir a ese
            esfuerzo.
          </P>
          <P>
            El problema no es la falta de canales, sino la falta de orden. Instagram genera
            visibilidad, pero rara vez genera citas por sí solo. Google capta a quien ya
            está decidido a reservar. Y WhatsApp es, con diferencia, el canal donde se
            cierran las citas — pero solo si alguien responde a tiempo.
          </P>
          <P>
            En este artículo vas a ver qué papel cumple cada canal, por qué Instagram solo
            no es suficiente, qué canal tiene la intención de compra más alta, por qué
            WhatsApp es el que más convierte, y cómo combinarlos todos sin que la gestión
            se convierta en un caos.
          </P>

          <H2>Los canales de marketing que realmente funcionan para clínicas estéticas</H2>
          <P>
            Los canales que funcionan de verdad para una clínica estética son tres:
            Instagram, Google y WhatsApp. Cada uno cubre una fase distinta del recorrido del
            paciente — Instagram genera confianza, Google capta la demanda que ya existe y
            WhatsApp cierra la cita — y el error más común es tratarlos como si fueran
            intercambiables.
          </P>
          <P>
            Instagram construye marca y confianza — es el canal donde un paciente potencial
            te «conoce» antes de decidirse. Google capta la demanda que ya existe — alguien
            que busca «depilación láser» en tu ciudad ya ha decidido que quiere ese
            tratamiento, solo falta elegir dónde. Y WhatsApp es donde ocurre la conversión
            real: la conversación que termina (o no) en una cita reservada.
          </P>

          <BlogTable
            headers={[
              "Canal",
              "Qué aporta",
              "Intención de compra",
              "Por qué no basta solo",
            ]}
            rows={[
              [
                "Instagram",
                "Confianza y reconocimiento: resultados, equipo, día a día de la clínica",
                "Baja: la mayoría no busca tratamiento en ese momento",
                "Genera seguidores y guardados, pero rara vez una cita directa",
              ],
              [
                "Google (Ads y ficha de Business)",
                "Visibilidad justo cuando alguien busca tu tratamiento en tu ciudad",
                "Alta: la necesidad ya existe, solo falta elegir clínica",
                "Trae el clic, pero la conversación se va a otro canal",
              ],
              [
                "Portales de reserva (Booksy, Treatwell)",
                "Escaparate con reserva directa y reseñas verificadas",
                "Media-alta: el usuario compara clínicas cercanas",
                "Comisión por reserva y poco control sobre la relación con el paciente",
              ],
              [
                "WhatsApp",
                "La conversación donde se resuelven dudas y se cierra la cita",
                "Muy alta: ya te ha escrito",
                "Depende por completo de que alguien responda a tiempo",
              ],
            ]}
          />

          <P>
            Una estrategia de marketing digital para clínicas estéticas que funcione no
            elige uno de estos canales — los combina, entendiendo qué papel cumple cada
            uno y asegurándose de que la cadena no se rompe en ningún punto.
          </P>

          <H2>Instagram: imprescindible pero insuficiente</H2>
          <P>
            Instagram es imprescindible porque es donde el paciente comprueba que tu clínica
            existe, tiene equipo y obtiene resultados — sin ese escaparate, pierdes
            credibilidad frente a la competencia que sí lo tiene. Y es insuficiente porque
            quien ve tu contenido casi nunca está buscando tratamiento en ese momento, así
            que la audiencia crece sin que la agenda lo note.
          </P>
          <P>
            Antes y después de tratamientos, testimonios de pacientes, contenido del día a
            día del equipo: todo eso construye la confianza que un paciente necesita antes
            de dar el paso de contactar. Es un trabajo que rinde, pero rinde a plazo y de
            forma indirecta.
          </P>
          <P>
            Pero Instagram tiene un límite claro: la mayoría de personas que ven tu
            contenido no están buscando activamente un tratamiento en ese momento. Están
            navegando, entreteniéndose, sin intención de compra inmediata. Por eso muchas
            clínicas acumulan seguidores y «me gusta» sin que eso se traduzca en un
            aumento real de citas.
          </P>
          <P>
            Instagram funciona mejor como complemento que como motor principal. Construye
            la confianza necesaria para que, cuando esa misma persona busque en Google o
            reciba un anuncio, reconozca tu clínica y confíe en ella. Pero esperar que
            Instagram por sí solo llene la agenda suele traducirse en mucho esfuerzo de
            contenido y pocos resultados medibles.
          </P>

          <H2>Google: el canal que más intención de compra tiene</H2>
          <P>
            Google es el canal con más intención de compra porque el usuario llega buscando
            exactamente lo que tú vendes. Cuando alguien escribe «clínica estética [tu
            ciudad]» o «depilación láser precio» no está navegando por curiosidad: está a un
            paso de tomar una decisión.
          </P>
          <P>
            Esa es la diferencia clave frente a Instagram — la intención de compra ya
            existe, solo falta capturarla antes que la clínica de al lado. Y se captura por
            dos vías que conviene no confundir: la publicidad de pago y la presencia
            orgánica en el mapa.
          </P>
          <H3>Google Ads para captar demanda inmediata</H3>
          <P>
            La publicidad en Google Ads permite aparecer justo en el momento en que alguien
            busca un tratamiento concreto. Es uno de los canales con mejor retorno para
            clínicas, porque no estás generando una necesidad — estás respondiendo a una
            que ya existe. El coste por lead suele ser más alto que en redes sociales, pero
            la calidad del lead — y la probabilidad de que se convierta en cita — también
            lo es.
          </P>
          <H3>El SEO local y la ficha de Google Business</H3>
          <P>
            Antes incluso de invertir en publicidad, una ficha de Google Business completa
            — con fotos, horarios, servicios y, sobre todo, reseñas — es uno de los activos
            de marketing más rentables que puede tener una clínica. Aparece de forma
            gratuita en las búsquedas locales y en Google Maps, justo donde la gente busca
            cuando ya está decidida.
          </P>
          <P>
            En la misma línea juegan los portales de reserva como Booksy o Treatwell:
            funcionan como un segundo escaparate local, con reseñas y reserva directa, y
            captan búsquedas que de otra forma irían a la competencia. La contrapartida es
            que cobran comisión por reserva captada y la relación con el paciente queda a
            medias dentro de su plataforma — sirven bien para llenar huecos, no como canal
            principal.
          </P>

          <H2>WhatsApp: el canal que más convierte</H2>
          <P>
            WhatsApp es el canal que más convierte porque es donde el paciente pregunta
            precio, dudas y disponibilidad justo antes de decidirse — y porque se lee mucho
            más que cualquier otro canal: en el sector se manejan tasas de apertura de
            referencia del 95-98%, frente al 20-25% del email. Da igual cuánto inviertas en
            Instagram o en Google Ads: si el lead que generan esos canales no recibe
            respuesta rápida, esa inversión se pierde.
          </P>
          <P>
            Eso significa que, si el primer contacto de un lead llega por WhatsApp, es
            prácticamente seguro que lo va a leer — la pregunta es si va a recibir respuesta
            a tiempo.
          </P>
          <P>
            Y el tiempo es crítico: la probabilidad de perder un lead que no recibe
            respuesta en los primeros cinco minutos es del 80%. Esto ocurre constantemente
            fuera del horario de atención, cuando alguien que acaba de ver tu anuncio o tu
            ficha de Google escribe por WhatsApp y no hay nadie disponible para responder.
            Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            soluciona exactamente este problema: responde en segundos, cualifica al lead y
            puede agendar la cita directamente, sin que nadie del equipo tenga que estar
            pendiente del móvil.
          </P>
          <BlogSource>MIT Lead Response Management Study</BlogSource>

          <H2>Cómo combinar todos los canales sin volverse loco</H2>
          <P>
            Se combinan pensándolos como un embudo, no como cuatro cuentas que alimentar:
            Instagram construye confianza, Google capta la demanda activa y WhatsApp cierra
            la conversación. El error habitual es invertir tiempo y dinero en los dos
            primeros sin haber resuelto el tercero — y ahí es donde se pierde la mayor parte
            del retorno.
          </P>
          <P>
            Buena parte de las consultas de una clínica llega fuera del horario de atención:
            por la noche, los fines de semana, durante una comida. Si tu estrategia de
            marketing está generando tráfico hacia WhatsApp pero nadie responde en esos
            momentos, estás pagando por leads que se enfrían antes de que alguien pueda
            atenderlos.
          </P>
          <P>
            El otro punto donde se rompe la cadena es el registro: si cada canal vive en un
            sitio distinto, nadie sabe de dónde vino cada paciente ni a quién toca hacer
            seguimiento. Tener la ficha centralizada en el software de gestión que ya uses —
            Flowww, Koibox o el que sea — es lo que permite saber qué canal te trae pacientes
            de verdad y cuál solo te trae likes.
          </P>
          <P>
            La forma más eficiente de combinar los canales sin que la gestión se convierta
            en un caos es automatizar precisamente ese punto crítico. Con un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            cada lead que llega — venga de Instagram, de Google o de una recomendación —
            recibe respuesta inmediata, las 24 horas, sin que tengas que aumentar el equipo
            ni estar pendiente del teléfono fuera de horario.
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
              ¿Inviertes en marketing pero los leads no se convierten en citas?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              El{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp para clínicas estéticas
              </InternalLink>{" "}
              responde a cada lead en segundos, cualifica y agenda la cita — para que tu
              inversión en marketing no se quede por el camino.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo funciona el agente →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
