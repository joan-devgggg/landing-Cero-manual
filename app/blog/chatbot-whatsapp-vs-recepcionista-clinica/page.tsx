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

const PATH = "/blog/chatbot-whatsapp-vs-recepcionista-clinica"
const DATES = articleDates("chatbot-whatsapp-vs-recepcionista-clinica")
const TITLE = "Chatbot de WhatsApp vs recepcionista: comparativa para clínicas | Cero Manual"
const DESCRIPTION =
  "¿Chatbot de WhatsApp o recepcionista? Te explicamos en qué se complementan, cuándo tiene sentido automatizar y qué no puede hacer una IA."
const HEADLINE = "Chatbot de WhatsApp vs recepcionista en tu clínica: comparativa honesta"

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
    q: "¿Un chatbot de WhatsApp puede sustituir por completo a mi recepcionista?",
    a: "No, y tampoco es el objetivo. El chatbot se encarga de las consultas repetitivas y de responder al instante fuera de horario, pero hay tareas — recibir a pacientes, gestionar imprevistos en consulta, tomar decisiones que requieren criterio — que necesitan una persona. La pregunta no es «uno u otro», sino qué tareas tiene sentido automatizar para que tu recepcionista se dedique a lo que realmente aporta valor.",
  },
  {
    q: "Si pongo un chatbot, ¿mi recepcionista se queda sin trabajo?",
    a: "En la práctica, lo que cambia es el tipo de trabajo, no la necesidad de tenerlo. El chatbot absorbe las preguntas repetitivas — precios, horarios, disponibilidad — y tu recepcionista pasa a dedicar su tiempo a pacientes presenciales, casos que requieren trato personal y a las conversaciones que el chatbot ha escalado porque necesitan una persona.",
  },
  {
    q: "¿Qué pasa si un paciente prefiere hablar con una persona?",
    a: "Un chatbot bien configurado lo detecta y escala la conversación a tu equipo con todo el contexto recogido, para que la persona no tenga que repetir nada. La idea no es forzar a nadie a hablar con un bot, sino que quien prefiere autogestionarse — la mayoría, fuera de horario — pueda hacerlo, y quien necesita trato humano lo tenga sin demoras.",
  },
  {
    q: "¿Tiene sentido un chatbot si mi clínica es pequeña y recibo pocos mensajes?",
    a: "Depende de cuántos de esos mensajes llegan fuera de horario o se quedan sin respuesta a tiempo. Incluso en clínicas pequeñas, el dato se repite: hasta un 40% de las consultas llegan fuera del horario de atención, y un lead sin respuesta en cinco minutos tiene hasta un 80% de probabilidades de perderse. Si eso describe tu situación, el chatbot puede tener sentido aunque el volumen total no sea muy alto.",
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

export default function ChatbotWhatsappVsRecepcionistaClinicaPage() {
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
            Es la pregunta que más se repite entre dueños y gerentes de clínicas estéticas
            cuando empiezan a mirar la automatización del WhatsApp: «¿esto significa que ya
            no necesito recepcionista?». Es una pregunta lógica — y la respuesta honesta es
            que no es una cosa o la otra, sino entender qué hace mejor cada una y dónde se
            complementan.
          </P>
          <P>
            Por un lado, entre un 95% y un 98% de los mensajes de WhatsApp se leen, y hasta
            un 40% de las consultas que recibe una clínica llegan fuera de su horario de
            atención — momentos en los que, por definición, no hay recepcionista
            disponible. Por otro, hay situaciones — un paciente nervioso antes de un
            tratamiento, una reclamación, una urgencia — donde nada sustituye a una persona
            con criterio y empatía.
          </P>
          <P>
            En este artículo vas a ver, sin venderte nada, qué hace mejor un chatbot que
            una recepcionista, qué hace mejor una recepcionista que un chatbot, en qué se
            complementan, cuándo tiene sentido automatizar — y cuándo no — y cómo es, en la
            práctica, la combinación que mejor funciona en una clínica real.
          </P>

          <H2>Qué hace mejor un chatbot que una recepcionista</H2>
          <P>
            Hay tareas en las que un chatbot, sencillamente, da más de sí que una persona —
            no porque sea «mejor», sino porque su naturaleza es distinta.
          </P>
          <P>
            <strong>Disponibilidad 24/7 real.</strong> Una recepcionista tiene un horario,
            descansos, vacaciones y, sobre todo, un único par de manos. El chatbot
            responde a las tres de la madrugada, en festivo o en pleno fin de semana —
            justo cuando llega ese 40% de consultas fuera de horario que, de otra forma, se
            quedarían sin respuesta hasta el día siguiente.
          </P>
          <P>
            <strong>Respuesta instantánea, sin colas.</strong> Si tres pacientes escriben a
            la vez, una recepcionista solo puede atender a uno mientras los otros esperan.
            El chatbot responde a los tres en el mismo instante, sin que nadie note que
            «hay cola». Y esto importa: un lead sin respuesta en cinco minutos tiene hasta
            un 80% de probabilidades de perderse para siempre.
          </P>
          <P>
            <strong>Cero coste adicional por volumen.</strong> Para una recepcionista, diez
            consultas más al día significan más carga de trabajo. Para un chatbot, no
            suponen ningún coste extra — responde igual de bien la consulta número uno que
            la número cien.
          </P>
          <P>
            <strong>Consistencia.</strong> El chatbot da siempre la misma información sobre
            precios, condiciones y disponibilidad, sin variaciones según el día, el cansancio
            o quién esté de turno.
          </P>

          <H2>Qué hace mejor una recepcionista que un chatbot</H2>
          <P>
            Y hay tareas donde ocurre justo lo contrario — y conviene ser honesto sobre
            ello, porque es la base para que la automatización tenga sentido.
          </P>
          <P>
            <strong>Trato humano en situaciones delicadas.</strong> Un paciente con miedo
            antes de un tratamiento, una queja, una situación emocionalmente cargada...
            ahí, la empatía y el criterio de una persona son insustituibles. Un chatbot
            bien diseñado reconoce estas situaciones y las deriva — pero no las resuelve
            él mismo.
          </P>
          <P>
            <strong>Tareas presenciales.</strong> Recibir a quien llega a la clínica,
            gestionar la sala de espera, cobrar, coordinar con el equipo médico in situ...
            son tareas que, por definición, requieren presencia física.
          </P>
          <P>
            <strong>Gestión de imprevistos.</strong> Un profesional se retrasa, hay que
            reorganizar la agenda del día, un paciente llega sin cita... resolver estos
            imprevistos sobre la marcha requiere a alguien con visión completa del día a
            día de la clínica, no un sistema automatizado.
          </P>
          <P>
            <strong>Criterio en casos fuera de lo normal.</strong> Cuando una situación no
            se ajusta a ningún patrón previsto, una persona puede improvisar una solución
            razonable. Un chatbot, en cambio, debe reconocer que está fuera de su alcance y
            pasar el testigo — no inventar una respuesta.
          </P>

          <H2>En qué se complementan</H2>
          <P>
            La clave está aquí: el chatbot no compite con la recepcionista por las mismas
            tareas, sino que se encarga de la parte del trabajo que hoy le quita tiempo
            para lo que de verdad importa.
          </P>
          <P>
            El chatbot filtra y cualifica: responde las preguntas repetitivas sobre
            precios, tratamientos y disponibilidad, y cuando detecta interés real, agenda
            la cita directamente o recoge toda la información necesaria — qué tratamiento,
            qué busca el paciente, desde cuándo lo está pensando. La recepcionista recibe
            entonces conversaciones ya «maduras», con contexto, en lugar de tener que
            empezar cada interacción desde cero. Si quieres ver cómo funciona esta
            cualificación en la práctica, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            lo explicamos con ejemplos reales de conversaciones.
          </P>
          <P>
            Dicho de otra forma: el chatbot se ocupa del volumen, y la recepcionista se
            ocupa del valor — los pacientes presenciales, las conversaciones que requieren
            trato humano y las decisiones que no se pueden automatizar.
          </P>

          <H2>Cuándo tiene sentido automatizar y cuándo no</H2>
          <P>
            No todas las clínicas están en el mismo punto, y no toda automatización tiene
            sentido en cualquier momento.
          </P>
          <P>
            Tiene sentido automatizar cuando tu equipo no llega a responder todos los
            mensajes a tiempo, cuando una parte importante de las consultas llega fuera de
            horario, cuando las mismas preguntas se repiten una y otra vez, o cuando notas
            que se pierden leads simplemente porque nadie ha podido contestar a tiempo.
            Estas situaciones son extremadamente comunes — recuerda que hasta el 40% de las
            consultas llegan fuera de horario en una clínica estética media.
          </P>
          <P>
            Tiene menos sentido — o al menos no es la prioridad — si tu clínica recibe muy
            pocos mensajes y tu equipo los gestiona sin problema, o si lo que falla no es
            la atención por WhatsApp sino, por ejemplo, la gestión de la agenda interna.
            Automatizar no soluciona problemas que no están en el canal de comunicación.
          </P>

          <H2>La combinación ganadora: chatbot + recepcionista</H2>
          <P>
            En la práctica, las clínicas que mejor resultado obtienen no eligen entre una
            opción y la otra — combinan ambas, cada una en lo que hace mejor. El chatbot
            cubre las 24 horas, responde al instante y nunca deja un mensaje sin contestar.
            La recepcionista se centra en los pacientes que tiene delante, en las
            conversaciones que el chatbot ha escalado porque requieren una persona, y en
            todo lo que ocurre dentro de la clínica.
          </P>
          <P>
            El resultado no es «menos personas atendiendo», sino que cada mensaje recibe el
            tipo de atención que necesita: inmediata cuando es una consulta sencilla, y
            humana cuando hace falta criterio o cercanía. Si quieres ver cómo se configura
            esta combinación para una clínica como la tuya — conectada a tu WhatsApp
            actual y con tu información real — en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            explicamos cómo funciona el sistema de principio a fin.
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
              ¿Quieres que tu equipo se centre en lo que de verdad importa?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántos mensajes se quedan sin
              respuesta a tiempo cada mes — y cómo un chatbot de WhatsApp puede encargarse
              de ellos para que tu recepcionista se dedique a tus pacientes.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero ver cómo funciona →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
