import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceHero from "@/components/ServiceHero"
import ServiceProblem from "@/components/ServiceProblem"
import ServiceHowItWorks from "@/components/ServiceHowItWorks"
import ServiceBenefits from "@/components/ServiceBenefits"
import ArticleLinks from "@/components/ArticleLinks"
import ServiceFAQ from "@/components/ServiceFAQ"
import ServiceCTA from "@/components/ServiceCTA"
import { localBusinessProvider, spainAreaServed } from "@/lib/schema"

const PATH = "/agente-voz-ia-clinicas"
const TITLE = "Agente de voz IA para clínicas | Cero Manual"
const DESCRIPTION =
  "Agente de voz IA que contesta cada llamada de tu clínica las 24 horas, incluso de madrugada. Reserva tu auditoría gratuita."

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
    type: "website",
  },
}

const faqs = [
  {
    q: "¿Suena a máquina?",
    a: "No. La voz, el tono y las respuestas se configuran con la información real de tu clínica — tratamientos, precios, horarios — para que la conversación sea natural de principio a fin. Al descolgar se presenta como asistente virtual de la clínica, como exige el Reglamento europeo de IA.",
  },
  {
    q: "¿Puede agendar la cita directamente?",
    a: "Sí. En cuanto la persona confirma que quiere reservar, el agente coloca la cita en la agenda y envía la confirmación, sin que tengas que llamar de vuelta.",
  },
  {
    q: "¿Qué hace con llamadas complejas o urgentes?",
    a: "Las detecta y las deriva a tu equipo de inmediato, junto con un resumen de la conversación. Tú decides cómo seguir — el agente nunca improvisa en lo delicado.",
  },
  {
    q: "¿Tengo que cambiar de número de teléfono?",
    a: "No. Conectamos el agente a tu número actual. Tus clientes siguen llamando donde siempre — solo que ahora siempre hay alguien al otro lado.",
  },
  {
    q: "¿Cuánto tarda en estar activo?",
    a: "Menos de 14 días desde que empezamos. Configuramos la voz, el guion y la información de tu clínica antes de poner el agente a contestar de verdad. Si además hace falta una integración con tu programa de gestión o un desarrollo a medida, el plazo se fija en la propuesta.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agente de voz con IA para clínicas",
  name: "Agente de voz con IA para clínicas",
  description: DESCRIPTION,
  provider: localBusinessProvider,
  areaServed: spainAreaServed,
  url: `https://ceromanual.es${PATH}`,
}

export default function AgenteVozPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main>
        <ServiceHero
          label="Agente de voz con IA para clínicas"
          headlineLines={["El agente de voz con IA que contesta cada llamada de tu clínica,"]}
          accent="hasta a las 3 de la mañana"
          subheadline="Para clínicas que pierden llamadas en hora punta, fuera de horario o cuando el equipo está atendiendo a otro cliente — y no se pueden permitir que esa llamada se quede sin respuesta."
          metrics={[
            { value: "24/7", label: "— incluso a las 3 de la madrugada" },
          ]}
        />

        <ServiceProblem
          title="El teléfono suena,"
          titleAccent="y nadie contesta"
          painPoints={[
            "Parte de las consultas llega por la tarde-noche o en fin de semana, fuera del horario en el que alguien puede coger el teléfono.",
            "Una llamada que nadie coge es una consulta sin respuesta: no sabes qué quería esa persona ni si volverá a llamar.",
            "Algunas citas se pierden antes de existir: empiezan con una llamada mal gestionada, o que nadie llega a devolver.",
            "Cada llamada que no contestas es un cliente que cuelga, busca en Google y prueba con la siguiente clínica de la lista.",
          ]}
          closing={
            <>
              Interés en tu clínica hay.{" "}
              <strong style={{ color: "#1A1A1A" }}>Lo que falta es alguien al otro lado del teléfono</strong> a
              cualquier hora del día.
            </>
          }
        />

        <ServiceHowItWorks
          title="De una llamada perdida"
          titleAccent="a una cita ya confirmada"
          steps={[
            {
              icon: "Phone",
              num: "01",
              title: "Suena el teléfono",
              desc: "A cualquier hora — en plena consulta, a la hora de comer o a las 3 de la madrugada. El agente descuelga al primer tono, siempre.",
            },
            {
              icon: "Mic",
              num: "02",
              title: "La IA responde con voz natural",
              desc: "Conversa con el tono y la información real de tu clínica: tratamientos, precios, horarios. Se presenta como asistente virtual de la clínica y atiende con naturalidad, sin menús de «pulse 1».",
            },
            {
              icon: "CheckCircle",
              num: "03",
              title: "Resuelve la duda o deriva el aviso",
              desc: "Si la consulta es sencilla, la cierra ahí mismo. Si necesita a alguien de tu equipo, te la pasa con el contexto completo — nada se pierde por el camino.",
            },
            {
              icon: "CalendarCheck",
              num: "04",
              title: "Agenda la cita",
              desc: "Cuando la persona está lista, el agente reserva directamente. Tú recibes la grabación, el resumen y la cita ya colocada — sin tener que llamar de vuelta.",
            },
          ]}
          closing={
            <>
              <strong style={{ color: "#1A1A1A" }}>
                Nadie tiene que dejar un mensaje después de la señal: el agente contesta y resuelve.
              </strong>
            </>
          }
        />

        <ServiceBenefits
          title="Lo que cambia cuando ninguna llamada se queda sin respuesta"
          benefits={[
            {
              icon: "Phone",
              title: "Nunca pierdes una llamada",
              desc: "Ni en hora punta, ni a mediodía, ni de madrugada. El agente está siempre disponible para que ninguna consulta se quede en el aire.",
            },
            {
              icon: "Users",
              title: "Atiende picos de demanda sin colas",
              desc: "Cuando suenan varias líneas a la vez, nadie espera ni cuelga frustrado. El agente conversa con todos al mismo tiempo, con la misma atención.",
            },
            {
              icon: "CalendarCheck",
              title: "Agenda sin intermediarios",
              desc: "La cita queda colocada directamente en la agenda, con confirmación para el cliente y aviso para ti. Sin idas y vueltas de mensajes.",
            },
            {
              icon: "Headphones",
              title: "Suena natural, no a contestador",
              desc: "Configuramos la voz, el tono y las respuestas con la información real de tu clínica. La conversación fluye con naturalidad de principio a fin.",
            },
          ]}
        />

        <ArticleLinks
          label="Del blog"
          title="Guías relacionadas"
          articles={[
            {
              slug: "que-es-un-agente-de-voz-ia-para-clinicas",
              title: "Qué es un agente de voz con IA y cómo puede transformar tu clínica",
            },
            {
              slug: "agente-ia-recepcion-clinica",
              title: "Agente IA para la recepción de tu clínica: qué es, qué hace y cuánto cuesta",
            },
            {
              slug: "chatbot-whatsapp-vs-recepcionista-clinica",
              title: "Chatbot de WhatsApp vs recepcionista en tu clínica: comparativa honesta",
            },
          ]}
        />

        <ServiceFAQ faqs={faqs} />

        <ServiceCTA
          subheading={
            <>
              20 minutos con un experto. Sin compromiso.
              <br />
              Te enseñamos cómo sonaría el agente de voz contestando en tu clínica — y cuántas llamadas podrías estar perdiendo ahora mismo sin él.
            </>
          }
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
