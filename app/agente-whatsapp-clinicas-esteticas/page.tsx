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

const PATH = "/agente-whatsapp-clinicas-esteticas"
const TITLE = "Agente WhatsApp clínicas estéticas | Cero Manual"
const DESCRIPTION =
  "Agente de WhatsApp con IA que responde, cualifica y agenda citas 24/7. Sin contratar a nadie más. Reserva tu auditoría gratuita."

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
    q: "¿El agente suena robótico?",
    a: "No. Lo configuramos con el tono, el vocabulario y los tratamientos de tu clínica, así que conversa con naturalidad y no como un bot de menús. Se presenta como el asistente virtual de tu clínica, como exige el Reglamento europeo de IA, y tú apruebas cómo habla antes de activarlo.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "Menos de 14 días desde que empezamos. En el onboarding cargamos tu información, tratamientos, precios y tono de marca para que el agente esté listo desde el primer mensaje. Si además hace falta integrarlo con tu programa de gestión o desarrollar software a medida, el plazo se fija en la propuesta.",
  },
  {
    q: "¿Qué pasa si comete un error con un cliente?",
    a: "Está entrenado para detectar situaciones delicadas y pasarlas a una persona de tu equipo de inmediato, con aviso incluido. Tú puedes tomar el control en cualquier momento desde el panel.",
  },
  {
    q: "¿Se integra con mi WhatsApp Business actual?",
    a: "Sí. Conectamos el agente a tu número y a tu cuenta de WhatsApp Business — no necesitas cambiar de número ni perder tu historial de conversaciones.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de los canales que actives y del volumen de tu clínica. En la auditoría gratuita te damos una propuesta concreta, sin letra pequeña ni permanencia forzada.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agente de WhatsApp con IA para clínicas estéticas",
  name: "Agente de WhatsApp con IA para clínicas estéticas",
  description: DESCRIPTION,
  provider: localBusinessProvider,
  areaServed: spainAreaServed,
  url: `https://ceromanual.es${PATH}`,
}

export default function AgenteWhatsAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main>
        <ServiceHero
          label="Agente de WhatsApp para clínicas estéticas"
          headlineLines={["Agente de WhatsApp con IA para clínicas estéticas que llena tu agenda"]}
          accent="sola"
          subheadline="Para clínicas estéticas y de medicina estética que reciben consultas por WhatsApp e Instagram a todas horas — y no pueden permitirse seguir perdiendo leads por no llegar a responder a tiempo."
          metrics={[
            { value: "24/7", label: "disponible, fines de semana incluidos" },
          ]}
        />

        <ServiceProblem
          title="Cada noche que no respondes,"
          titleAccent="pierdes una cita"
          painPoints={[
            "Parte de las consultas de tu clínica llega fuera de horario — por la noche o en fin de semana — justo cuando no hay nadie para responder.",
            "Cuando por fin alguien contesta a la mañana siguiente, esa persona puede haber pedido cita ya en otro sitio.",
            "Le mandas la información por email cuando la conversación empezó por WhatsApp. Cambias de canal justo cuando esa persona quería una respuesta rápida.",
            "Mientras tanto, ese mismo lead sigue buscando — y encuentra a otra clínica que sí le contesta a la primera.",
          ]}
          closing={
            <>
              Nadie en tu equipo puede estar disponible las 24 horas.{" "}
              <strong style={{ color: "#1A1A1A" }}>Un agente de IA, sí.</strong>
            </>
          }
        />

        <ServiceHowItWorks
          title="De un mensaje a una cita confirmada"
          steps={[
            {
              icon: "MessageSquare",
              num: "01",
              title: "Llega la consulta",
              desc: "Por WhatsApp, Instagram o tu web — a cualquier hora, cualquier día. El agente la recibe al instante, sin que nadie tenga que estar pendiente del móvil.",
            },
            {
              icon: "Zap",
              num: "02",
              title: "La IA responde con tu tono",
              desc: "Resuelve dudas sobre tratamientos, precios y disponibilidad como lo haría tu mejor recepcionista — hablando como habla tu clínica, no como un robot.",
            },
            {
              icon: "CheckCircle",
              num: "03",
              title: "Cualifica el lead",
              desc: "Detecta si la persona encaja con lo que ofreces y filtra a quien no. Solo avanzan al siguiente paso los contactos que de verdad pueden convertirse en clientes.",
            },
            {
              icon: "CalendarCheck",
              num: "04",
              title: "Agenda la cita sola",
              desc: "Cuando el lead está listo, el agente reserva la cita en la agenda. Tú recibes el aviso, el cliente su confirmación. Nadie tiene que mover un dedo.",
            },
          ]}
          closing={
            <>
              <strong style={{ color: "#1A1A1A" }}>
                Tu clínica atiende también fuera del horario de oficina.
              </strong>
            </>
          }
        />

        <ServiceBenefits
          title="Lo que cambia para tu clínica"
          benefits={[
            {
              icon: "Clock",
              title: "Respuesta inmediata, 24 horas al día",
              desc: "Ya sea a mediodía o a las 3 de la madrugada, cada consulta recibe respuesta en segundos. Ningún lead se enfría esperando.",
            },
            {
              icon: "MessageCircle",
              title: "Suena como tu clínica, no como un bot",
              desc: "Configuramos el agente con tu tono, tus tratamientos y tus precios. La conversación fluye con naturalidad y tus clientes reciben respuesta al momento.",
            },
            {
              icon: "Filter",
              title: "Solo te llegan los leads que de verdad convierten",
              desc: "El agente filtra antes de pasarte el contacto. Tú dedicas tu tiempo a las personas que ya están listas para reservar su cita.",
            },
            {
              icon: "LayoutDashboard",
              title: "Tú decides cuándo entra y cuándo no",
              desc: "Un interruptor desde el panel de control. Si quieres atender tú un caso concreto, lo haces con un clic — y el agente se aparta.",
            },
          ]}
        />

        <ArticleLinks
          label="Del blog"
          title="Guías relacionadas"
          articles={[
            {
              slug: "chatbot-whatsapp-para-clinicas-esteticas",
              title: "Chatbot de WhatsApp para clínicas estéticas: qué es y cómo funciona",
            },
            {
              slug: "mejor-chatbot-whatsapp-clinica-estetica",
              title: "Cómo elegir el mejor chatbot de WhatsApp para tu clínica estética",
            },
            {
              slug: "cuanto-cuesta-chatbot-whatsapp-clinica",
              title: "¿Cuánto cuesta un chatbot de WhatsApp para clínicas? De qué depende el precio",
            },
          ]}
        />

        <ServiceFAQ faqs={faqs} />

        <ServiceCTA
          subheading={
            <>
              20 minutos con un experto. Sin compromiso.
              <br />
              Te enseñamos exactamente cómo funcionaría el agente de WhatsApp en tu clínica — y cuántos leads podrías estar perdiendo ahora mismo sin él.
            </>
          }
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
