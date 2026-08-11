import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import BlogSource from "@/components/BlogSource"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import H3 from "@/components/blog/H3"
import InternalLink from "@/components/blog/InternalLink"

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
    modifiedTime: "2026-08-08T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿El chatbot puede agendar citas directamente, o solo responde preguntas?",
    a: "Puede hacer ambas cosas. Responde dudas sobre tratamientos, precios y disponibilidad — y, cuando la persona ya está decidida, agenda la cita directamente en tu calendario, con el hueco real disponible. No se queda en un «te confirmamos en breve»: la persona termina la conversación con la cita ya puesta. Para eso se conecta con la agenda que ya usa tu clínica, sea Flowww, Koibox o el calendario que tengas montado, y escribe la cita ahí mismo, así que tu equipo la ve en el sitio de siempre sin tener que copiar nada a mano. Y si el hueco que pide no está libre, propone alternativas cercanas en lugar de cerrar la conversación.",
  },
  {
    q: "¿Mis pacientes notarán que están hablando con un bot?",
    a: "Si está bien configurado, la mayoría no lo nota — o, si lo nota, no le importa porque ha recibido lo que necesitaba: una respuesta clara, al momento, sin esperas. Se entrena con el tono y la información real de tu clínica, así que la conversación suena cercana y natural, no a contestador automático. La diferencia con un chatbot de menús de hace unos años es justo esa: no obliga a elegir entre opciones numeradas, entiende lo que le escriben con sus propias palabras y responde en consecuencia. Y en el momento en que la consulta se sale de lo previsible o pide criterio clínico, pasa la conversación a una persona de tu equipo en lugar de improvisar.",
  },
  {
    q: "¿Tengo que estar pendiente del WhatsApp para que funcione?",
    a: "No, esa es justamente la idea: que tú y tu equipo dejéis de estarlo. El chatbot responde solo, a cualquier hora, y solo avisa a tu equipo cuando hace falta que intervenga una persona — por ejemplo, ante una consulta delicada o una situación que requiere trato humano. Tú sigues con tu día a día con normalidad.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando en mi clínica?",
    a: "Días, no meses. Se conecta al número de WhatsApp que ya usas y se configura con la información que ya tienes sobre tratamientos, precios y horarios. No necesitas cambiar de herramientas ni preparar nada especial: en poco tiempo está respondiendo por ti, también a las tres de la mañana. Lo que más suele condicionar el plazo no es la parte técnica, sino tener ordenada la información de partida — qué tratamientos ofreces, con qué precios orientativos y qué se responde a las dudas que más se repiten. Después de arrancar conviene revisar las primeras conversaciones reales y ajustar lo que haga falta, que es cuando el agente termina de sonar como tu clínica.",
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
  dateModified: "2026-08-08",
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
            7 de junio de 2026 · 9 min de lectura
          </p>

          {/* Intro */}
          <P>
            Buena parte de las consultas que recibe una clínica estética llegan fuera de su
            horario de atención — por la noche, en fin de semana, o en esos huecos del día en
            los que nadie del equipo puede mirar el móvil. Son personas que han decidido, justo
            en ese momento, escribir para preguntar por un tratamiento... y se encuentran con
            un mensaje que tardará horas — o días — en tener respuesta.
          </P>
          <P>
            Y la cosa tiene truco: WhatsApp es, con diferencia, el canal que más abren tus
            pacientes — en el sector se manejan tasas de apertura de referencia del 95-98%,
            frente al 20-25% de un email. El problema no es el canal. El problema es que, al
            otro lado, no siempre hay alguien disponible para responder a tiempo.
          </P>
          <P>
            En este artículo vas a entender qué es exactamente un chatbot de WhatsApp para
            clínicas estéticas, en qué se diferencia de responder tú mismo desde WhatsApp
            Business, qué puede hacer en el día a día de tu clínica, si es complicado de
            poner en marcha y qué inversión — y qué retorno — supone.
          </P>

          <H2>¿Qué es un chatbot de WhatsApp para clínicas estéticas?</H2>
          <P>
            Un chatbot de WhatsApp para clínicas estéticas es un sistema que mantiene una
            conversación natural con quien escribe a tu clínica, resuelve sus dudas sobre
            tratamientos y precios, y agenda la cita — a cualquier hora y sin que intervenga
            nadie de tu equipo. No es un menú rígido de «responde 1 para precios, 2 para
            citas»: entiende lo que pregunta la persona y responde en consecuencia.
          </P>
          <P>
            En la práctica, hace lo que haría alguien de tu recepción si tuviera el móvil en la
            mano en ese mismo instante — con la diferencia de que no descansa, no se olvida de
            ningún mensaje y atiende varias conversaciones a la vez.
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
            La diferencia está en quién responde y cuándo. WhatsApp Business depende de que
            alguien de tu equipo esté disponible, con el móvil a mano, en el momento exacto en
            que llega el mensaje; el chatbot responde solo, al instante y las 24 horas. Fuera
            de horario, en fin de semana, o simplemente en mitad de un tratamiento con un
            paciente delante, los mensajes se acumulan.
          </P>
          <P>
            Y aquí entra en juego la regla de los cinco minutos: un lead que no recibe
            respuesta en ese margen tiene hasta un 80% de probabilidades de perderse para
            siempre. No porque haya dejado de interesarle — sino porque, mientras esperaba,
            ha encontrado otra clínica que sí le ha contestado.
          </P>
          <BlogSource>MIT Lead Response Management Study</BlogSource>
          <P>
            Conviene además no confundir tres cosas que a menudo se meten en el mismo saco:
            responder a mano, un chatbot de menús y un agente con IA. Esta es la diferencia
            práctica:
          </P>

          <BlogTable
            headers={[
              "",
              "WhatsApp Business (manual)",
              "Chatbot de menús",
              "Agente con IA",
            ]}
            rows={[
              [
                "Quién responde",
                "Una persona de tu equipo",
                "Un árbol de opciones fijo",
                "Un agente entrenado con la información de tu clínica",
              ],
              [
                "Horario",
                "Solo cuando hay alguien disponible",
                "24/7, pero solo dentro del guion previsto",
                "24/7, también fines de semana y festivos",
              ],
              [
                "Preguntas abiertas",
                "Sí, sin límite",
                "No: obliga a elegir entre opciones numeradas",
                "Sí, entiende la consulta escrita con palabras propias",
              ],
              [
                "¿Agenda la cita?",
                "Sí, a mano y en horario de recepción",
                "Normalmente no: deriva a un formulario o a una llamada",
                "Sí, sobre huecos reales de la agenda",
              ],
              [
                "Coste",
                "Horas de tu equipo",
                "Suscripción baja, entre 30-60€/mes",
                "Cuota mensual, mayor que un bot de menús",
              ],
            ]}
          />

          <P>
            La diferencia no es solo de velocidad: es la diferencia entre captar ese lead en
            caliente o dejar que se enfríe mientras decide escribir a la clínica de al lado.
          </P>

          <H2>Qué puede hacer el chatbot por tu clínica: casos reales</H2>
          <P>
            Cuatro cosas, en concreto: resolver dudas sobre tratamientos, agendar la primera
            visita, cualificar al lead antes de pasarlo a tu equipo y escalar a una persona
            cuando la consulta lo pide. No se limita a contestar «hola, ¿en qué puedo
            ayudarte?»: esto es lo que resuelve conversación tras conversación, sin que nadie
            tenga que estar pendiente.
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
          <P>
            Para eso se conecta con el software que ya usa tu clínica — Flowww o Koibox, por
            ejemplo — y escribe la cita directamente ahí, en el mismo sitio donde tu equipo la
            consulta cada mañana. No hay una segunda agenda paralela que alguien tenga que
            cuadrar después a mano.
          </P>

          <H3>Cualifica al lead antes de pasarlo a tu equipo</H3>
          <P>
            Recoge qué tratamiento le interesa, qué busca conseguir y desde cuándo lo está
            pensando — para que, cuando alguien de tu equipo retome la conversación, lo
            haga con todo el contexto y no tenga que empezar preguntando desde cero. Eso
            importa especialmente cuando el lead no viene de tu web, sino de un anuncio de
            Meta o de un perfil en un marketplace como Booksy: llega sin contexto, y quien lo
            atiende necesita saber en dos líneas qué quiere esa persona. Si
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
            No: se monta en cuestión de días, no de meses. Se conecta al número de WhatsApp
            que ya usa tu clínica y se entrena con la información que ya tienes —
            tratamientos, precios, horarios — sin que tengas que crear nada desde cero. Es,
            probablemente, la sorpresa más habitual de quien nunca ha probado uno.
          </P>
          <P>
            No hace falta cambiar de herramientas, ni migrar tu agenda, ni formar a tu
            equipo en un sistema nuevo y complejo. El chatbot se adapta a cómo trabajas tú
            — no al revés. Y, mientras se ajustan los últimos detalles, tú sigues atendiendo
            como siempre, sin interrupciones.
          </P>

          <H2>Cuánto cuesta y qué retorno puedes esperar</H2>
          <P>
            Un agente con IA en WhatsApp se mueve en una cuota mensual claramente por encima de
            un bot de menús, y se amortiza con muy pocos pacientes nuevos al mes. Con un LTV
            medio de unos 3.000€ por paciente recurrente en clínica estética en España, basta
            recuperar una sola consulta que hoy se pierde para cubrir varios meses de servicio.
          </P>
          <BlogSource>SEME (Sociedad Española de Medicina Estética)</BlogSource>
          <P>
            Por eso la pregunta que de verdad importa no es «¿cuánto cuesta tener un chatbot?»,
            sino «¿cuánto me está costando ya no tenerlo?». Cada consulta que tarda horas en
            recibir respuesta es, probablemente, una persona que ha encontrado — y reservado —
            en otra clínica mientras esperaba la tuya.
          </P>
          <P>
            Recuerda ese dato: un lead sin respuesta en cinco minutos tiene hasta un 80% de
            probabilidades de perderse. Multiplica eso por todas las consultas que te llegan
            fuera de horario y empieza a verse con claridad cuánto se está quedando, cada mes,
            sin convertirse en cita.
          </P>
          <P>
            Una vez cubierta esa inversión, el sistema sigue generando reservas de fondo, sin
            que nadie tenga que estar pendiente del móvil a las once de la noche. Si quieres ver
            esa cuenta aplicada a tu clínica, con tus propios números, en{" "}
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
