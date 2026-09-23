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
const TITLE = "Chatbot de WhatsApp vs recepcionista clínica | Cero Manual"
const DESCRIPTION =
  "¿Chatbot de WhatsApp o recepcionista? Te explicamos en qué se complementan, cuándo tiene sentido automatizar y qué no puede hacer una IA. Consúltanos gratis."
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
    a: "No, y tampoco es el objetivo. El chatbot se encarga de las consultas repetitivas y de responder al instante fuera de horario, pero hay tareas — recibir a pacientes, gestionar imprevistos en consulta, tomar decisiones que requieren criterio — que necesitan una persona. Lo que conviene decidir es qué tareas automatizar para que tu recepcionista se dedique a las que más aportan.",
  },
  {
    q: "Si pongo un chatbot, ¿mi recepcionista se queda sin trabajo?",
    a: "En la práctica, lo que cambia es el tipo de trabajo, no la necesidad de tenerlo. El chatbot absorbe las preguntas repetitivas — precios, horarios, disponibilidad — y tu recepcionista pasa a dedicar su tiempo a pacientes presenciales, casos que requieren trato personal y a las conversaciones que el chatbot ha escalado porque necesitan una persona.",
  },
  {
    q: "¿Qué pasa si un paciente prefiere hablar con una persona?",
    a: "Un chatbot bien configurado lo detecta y escala la conversación a tu equipo con todo el contexto recogido, para que la persona no tenga que repetir nada. Así, quien prefiere autogestionarse puede hacerlo, y quien necesita trato humano lo tiene sin demoras.",
  },
  {
    q: "¿Tiene sentido un chatbot si mi clínica es pequeña y recibo pocos mensajes?",
    a: "Depende de cuántos de esos mensajes llegan fuera de horario o se quedan sin respuesta a tiempo. Incluso en clínicas pequeñas, parte de las consultas llega fuera del horario de atención y espera hasta el día siguiente. Si eso describe tu situación, el chatbot puede tener sentido aunque el volumen total no sea muy alto.",
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
            Un chatbot de WhatsApp es mejor que una recepcionista en lo repetitivo y en lo que
            llega fuera de horario: contesta al instante, a cualquier hora y a varios pacientes
            a la vez. Una recepcionista es mejor en todo lo que pide presencia o criterio, como
            recibir al paciente, resolver imprevistos o tratar una situación delicada. Por eso
            lo que mejor funciona en una clínica es tener los dos, cada uno en lo suyo.
          </P>
          <P>
            Es la duda que más se repite entre dueños y gerentes de clínicas estéticas cuando
            empiezan a mirar la automatización del WhatsApp: «¿esto significa que ya no
            necesito recepcionista?».
          </P>

          <H2>Qué hace mejor un chatbot que una recepcionista</H2>
          <P>
            Hay tareas en las que un chatbot da más de sí que una persona, por la forma en que
            funciona.
          </P>
          <P>
            <strong>Disponibilidad 24/7 real.</strong> Una recepcionista tiene un horario y
            vacaciones. El chatbot responde a las tres de la madrugada o en pleno fin de
            semana.
          </P>
          <P>
            <strong>Respuesta instantánea, sin colas.</strong> Si tres pacientes escriben a
            la vez,{" "}
            <InternalLink href="/blog/agente-ia-recepcion-clinica">
              una recepcionista solo puede atender a uno
            </InternalLink>{" "}
            mientras los otros esperan.
            El chatbot responde a los tres a la vez, y eso cuenta porque quien espera en la
            cola puede acabar escribiendo a otra clínica.
          </P>
          <P>
            <strong>Más volumen sin más personas.</strong> Para una recepcionista, diez
            consultas más al día significan más carga de trabajo. Para un chatbot no
            suponen ni más horas de equipo ni otra contratación, y{" "}
            <InternalLink href="/blog/cuanto-cuesta-chatbot-whatsapp-clinica">
              su cuota
            </InternalLink>{" "}
            no crece al ritmo de la carga — responde igual de bien la consulta número uno
            que la número cien.
          </P>
          <P>
            <strong>Consistencia.</strong> El chatbot da siempre la misma información sobre
            precios, condiciones y disponibilidad, la misma esté quien esté de turno.
          </P>

          <H2>Qué hace mejor una recepcionista que un chatbot</H2>
          <P>
            Y hay tareas donde ocurre lo contrario.
          </P>
          <P>
            <strong>Trato humano en situaciones delicadas.</strong> Con un paciente con miedo
            antes de un tratamiento o con una queja, hacen falta la empatía y el criterio de
            una persona. Un chatbot bien diseñado reconoce estas situaciones y las deriva al
            equipo.
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
            día de la clínica.
          </P>
          <P>
            <strong>Criterio en casos fuera de lo normal.</strong> Cuando una situación no
            se ajusta a ningún patrón previsto, una persona puede improvisar una solución
            razonable. Un chatbot debe reconocer que está fuera de su alcance y pasar el
            testigo sin inventarse una respuesta.
          </P>

          <H2>En qué se complementan</H2>
          <P>
            El chatbot se encarga de la parte del trabajo que hoy le quita tiempo a la
            recepcionista.
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
            lo explicamos con más detalle.
          </P>

          <H2>Cuándo tiene sentido automatizar y cuándo no</H2>
          <P>
            Tiene sentido automatizar cuando tu equipo no llega a responder todos los
            mensajes a tiempo, cuando una parte importante de las consultas llega fuera de
            horario o cuando las mismas preguntas se repiten una y otra vez.
          </P>
          <P>
            Tiene menos sentido si tu clínica recibe muy pocos mensajes y tu equipo los
            gestiona sin problema, o si lo que falla es otra cosa, por ejemplo la gestión de
            la agenda interna: automatizar el WhatsApp no arregla eso.
          </P>

          <H2>La combinación ganadora: chatbot + recepcionista</H2>
          <P>
            Lo más sensato suele ser combinar ambas, cada una en lo que hace mejor. El
            chatbot cubre las 24 horas y responde al instante. La recepcionista se centra en
            los pacientes que tiene delante y en las conversaciones que el chatbot le ha
            escalado porque requieren una persona.
          </P>
          <P>
            Así cada mensaje recibe la atención que necesita: inmediata cuando es una consulta
            sencilla y humana cuando hace falta criterio. Si quieres ver cómo se configura
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
