import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/chatbot-whatsapp-para-clinicas-esteticas"
const TITLE = "Chatbot WhatsApp clínicas estéticas: qué es | Cero Manual"
const DESCRIPTION =
  "Un chatbot de WhatsApp responde consultas, agenda citas y cualifica leads para tu clínica estética, las 24h. Descubre cómo funciona."
const HEADLINE =
  "Chatbot de WhatsApp para clínicas estéticas: qué es y por qué tu competencia ya lo tiene"

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
    publishedTime: "2026-06-07T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿El chatbot puede agendar citas directamente, o solo responde preguntas?",
    a: "Puede hacer ambas cosas. Responde dudas sobre tratamientos, precios y disponibilidad — y, cuando la persona ya está decidida, agenda la cita directamente en tu calendario, con el hueco real disponible. No se queda en un «te confirmamos en breve»: la persona termina la conversación con la cita ya puesta.",
  },
  {
    q: "¿Mis pacientes notarán que están hablando con un bot?",
    a: "Si está bien configurado, la mayoría no lo nota — o, si lo nota, no le importa porque ha recibido lo que necesitaba: una respuesta clara, al momento, sin esperas. Se entrena con el tono y la información real de tu clínica, así que la conversación suena cercana y natural, no a contestador automático.",
  },
  {
    q: "¿Tengo que estar pendiente del WhatsApp para que funcione?",
    a: "No, esa es justamente la idea: que tú y tu equipo dejéis de estarlo. El chatbot responde solo, a cualquier hora, y solo avisa a tu equipo cuando hace falta que intervenga una persona — por ejemplo, ante una consulta delicada o una situación que requiere trato humano. Tú sigues con tu día a día con normalidad.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando en mi clínica?",
    a: "Días, no meses. Se conecta al número de WhatsApp que ya usas y se configura con la información que ya tienes sobre tratamientos, precios y horarios. No necesitas cambiar de herramientas ni preparar nada especial: en poco tiempo está respondiendo por ti, también a las tres de la mañana.",
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
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
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

export default function ChatbotWhatsappArticlePage() {
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
            7 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Casi un 40% de las consultas que recibe una clínica estética llegan fuera de
            su horario de atención — por la noche, en fin de semana, o en esos huecos del
            día en los que nadie del equipo puede mirar el móvil. Son personas que han
            decidido, justo en ese momento, escribir para preguntar por un tratamiento... y
            se encuentran con un mensaje que tardará horas — o días — en tener respuesta.
          </P>
          <P>
            Y la cosa tiene truco: WhatsApp es, con diferencia, el canal que más abren tus
            pacientes — entre un 95% y un 98% de los mensajes se leen, frente al 20-25% de
            un email. El problema no es el canal. El problema es que, al otro lado, no
            siempre hay alguien disponible para responder a tiempo.
          </P>
          <P>
            En este artículo vas a entender qué es exactamente un chatbot de WhatsApp para
            clínicas estéticas, en qué se diferencia de responder tú mismo desde WhatsApp
            Business, qué puede hacer en el día a día de tu clínica, si es complicado de
            poner en marcha y qué inversión — y qué retorno — supone.
          </P>

          <H2>¿Qué es un chatbot de WhatsApp para clínicas estéticas?</H2>
          <P>
            Es un sistema que mantiene una conversación natural por WhatsApp con quien te
            escribe — no un menú rígido de «responde 1 para precios, 2 para citas».
            Entiende lo que pregunta la persona y responde en consecuencia, igual que lo
            haría alguien de tu equipo si tuviera el móvil en la mano en ese mismo
            instante.
          </P>
          <P>
            Se configura con la información real de tu clínica: tratamientos, precios
            orientativos, duración de las sesiones, disponibilidad y el tono con el que
            quieres dirigirte a tus pacientes. No es un bot genérico que suelta respuestas
            de manual — habla de tu clínica, con tus datos, como lo haría tu recepción.
          </P>
          <P>
            Y, como con el teléfono, no hace falta cambiar de número: el chatbot se conecta
            al WhatsApp que ya usa tu clínica, así que para quien te escribe no cambia nada
            — salvo que, esta vez, recibe respuesta al momento, sea la hora que sea.
          </P>

          <H2>¿En qué se diferencia de responder manualmente por WhatsApp Business?</H2>
          <P>
            WhatsApp Business es una herramienta estupenda — pero sigue dependiendo de que
            alguien del equipo esté disponible, con el móvil a mano, en el momento exacto
            en que llega el mensaje. Fuera de horario, en fin de semana, o simplemente en
            mitad de un tratamiento con un paciente delante, los mensajes se acumulan.
          </P>
          <P>
            Y aquí entra en juego la regla de los cinco minutos: un lead que no recibe
            respuesta en ese margen tiene hasta un 80% de probabilidades de perderse para
            siempre. No porque haya dejado de interesarle — sino porque, mientras esperaba,
            ha encontrado otra clínica que sí le ha contestado.
          </P>
          <P>
            El chatbot responde al instante, las 24 horas, sin que nadie de tu equipo tenga
            que interrumpir lo que está haciendo para mirar el móvil. La diferencia no es
            solo de velocidad: es la diferencia entre captar ese lead en caliente o dejar
            que se enfríe mientras decide escribir a la clínica de al lado.
          </P>

          <H2>Qué puede hacer el chatbot por tu clínica: casos reales</H2>
          <P>
            En el día a día, no se limita a contestar «hola, ¿en qué puedo ayudarte?». Esto
            es lo que resuelve, conversación tras conversación, sin que nadie tenga que
            estar pendiente.
          </P>

          <H3>Responde dudas sobre tratamientos al momento</H3>
          <P>
            Precios orientativos, duración, qué incluye cada sesión, si hace falta alguna
            preparación previa... Las preguntas que más se repiten antes de reservar las
            resuelve el chatbot en segundos, sin que la persona tenga que esperar a que
            alguien lea el mensaje.
          </P>

          <H3>Agenda la primera visita sin intervención humana</H3>
          <P>
            Cuando la persona ya está decidida, el chatbot puede ofrecer huecos reales de
            tu agenda y dejar la cita puesta ahí mismo — sin el «te confirmamos en breve»
            que tantas veces hace que el interesado acabe reservando en otro sitio mientras
            espera.
          </P>

          <H3>Cualifica al lead antes de pasarlo a tu equipo</H3>
          <P>
            Recoge qué tratamiento le interesa, qué busca conseguir y desde cuándo lo está
            pensando — para que, cuando alguien de tu equipo retome la conversación, lo
            haga con todo el contexto y no tenga que empezar preguntando desde cero. Si
            quieres ver cómo se aplicaría esto a tu clínica en concreto, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            lo explicamos con ejemplos reales.
          </P>

          <H3>Escala a una persona cuando hace falta</H3>
          <P>
            Si detecta una consulta delicada, una reclamación o cualquier situación que
            requiere trato humano, no improvisa: pasa la conversación a tu equipo con todo
            el historial ya recogido, para que la persona no tenga que repetir nada.
          </P>

          <H2>¿Es complicado de configurar?</H2>
          <P>
            No. Y esta es, probablemente, la sorpresa más habitual de quien nunca ha
            probado uno: se monta en cuestión de días, no de meses. Se conecta al número de
            WhatsApp que ya usa tu clínica y se entrena con la información que ya tienes —
            tratamientos, precios, horarios — sin que tengas que crear nada desde cero.
          </P>
          <P>
            No hace falta cambiar de herramientas, ni migrar tu agenda, ni formar a tu
            equipo en un sistema nuevo y complejo. El chatbot se adapta a cómo trabajas tú
            — no al revés. Y, mientras se ajustan los últimos detalles, tú sigues atendiendo
            como siempre, sin interrupciones.
          </P>

          <H2>Cuánto cuesta y qué retorno puedes esperar</H2>
          <P>
            La pregunta que de verdad importa no es «¿cuánto cuesta tener un chatbot?»,
            sino «¿cuánto me está costando ya no tenerlo?». Cada consulta que tarda horas
            en recibir respuesta es, probablemente, una persona que ha encontrado — y
            reservado — en otra clínica mientras esperaba la tuya.
          </P>
          <P>
            Recuerda ese dato: un lead sin respuesta en cinco minutos tiene hasta un 80% de
            probabilidades de perderse. Multiplica eso por todas las consultas que te
            llegan fuera de horario — ese 40% — y empieza a verse con claridad cuánto se
            está quedando, cada mes, sin convertirse en cita.
          </P>
          <P>
            La inversión en un chatbot de WhatsApp suele amortizarse con muy pocos
            pacientes nuevos al mes — y, a partir de ahí, sigue generando reservas de
            fondo, sin que nadie tenga que estar pendiente del móvil a las once de la
            noche. Si quieres ver esa cuenta aplicada a tu clínica, con tus propios
            números, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            te explicamos cómo funciona el sistema y qué necesitas para ponerlo en marcha.
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
              ¿Listo para que tu clínica responda cada mensaje al instante?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántas consultas se te están
              enfriando cada mes por no recibir respuesta a tiempo — y cómo un chatbot de
              WhatsApp para tu clínica estética puede contestarlas todas, agendar citas y
              cualificar cada lead desde el primer mensaje.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero responder cada consulta →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
