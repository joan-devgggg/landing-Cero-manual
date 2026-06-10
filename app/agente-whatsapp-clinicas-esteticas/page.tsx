import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceHero from "@/components/ServiceHero"
import ServiceProblem from "@/components/ServiceProblem"
import ServiceHowItWorks from "@/components/ServiceHowItWorks"
import ServiceBenefits from "@/components/ServiceBenefits"
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
    a: "No. Lo configuramos con el tono, el vocabulario y los tratamientos de tu clínica, así que la mayoría de tus clientes no notan que están hablando con una IA. Tú apruebas cómo habla antes de activarlo.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "Menos de 14 días desde que empezamos. En el onboarding cargamos tu información, tratamientos, precios y tono de marca para que el agente esté listo desde el primer mensaje.",
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
          label="Para clínicas que no quieren perder ni un lead más"
          headlineLines={["Agente de WhatsApp con IA para clínicas estéticas que llena tu agenda"]}
          accent="sola"
          subheadline="Para clínicas estéticas y de medicina estética que reciben consultas por WhatsApp e Instagram a todas horas — y no pueden permitirse seguir perdiendo leads por no llegar a responder a tiempo."
          metrics={[
            { value: "< 5 seg", label: "tiempo de respuesta del agente" },
            { value: "95-98%", label: "tasa de apertura en WhatsApp" },
            { value: "24/7", label: "disponible, fines de semana incluidos" },
          ]}
        />

        <ServiceProblem
          title="Cada noche que no respondes,"
          titleAccent="pierdes una cita"
          painPoints={[
            "El 40% de las consultas de tu clínica llegan fuera de horario — entre las 19:00 y las 23:00, o en fin de semana — justo cuando no hay nadie para responder.",
            "Si un lead no recibe respuesta en los primeros 5 minutos, tiene un 80% de probabilidades de perderse para siempre. Esa cita ya no es tuya.",
            "Le mandas la información por email y nadie la abre: el email tiene un 20-25% de apertura, frente al 95-98% de WhatsApp. Estás hablando por el canal equivocado.",
            "Mientras tanto, ese mismo lead sigue buscando — y encuentra a otra clínica que sí le contesta a la primera.",
          ]}
          closing={
            <>
              No es que tu equipo no se esfuerce. Es que nadie puede estar disponible las 24 horas.{" "}
              <strong style={{ color: "#1A1A1A" }}>Y tu competencia tampoco</strong> — pero su agente de IA, sí.
            </>
          }
        />

        <ServiceHowItWorks
          title="De un mensaje a una cita confirmada"
          titleAccent="en minutos, sin que nadie lo toque"
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
              desc: "Cuando el lead está listo, el agente reserva directamente en tu calendario. Tú recibes el aviso, el cliente su confirmación. Nadie tiene que mover un dedo.",
            },
          ]}
          closing={
            <>
              Sin formularios que nadie rellena. Sin esperas que enfrían al lead.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Sin la sensación de que tu clínica solo trabaja en horario de oficina.
              </strong>
            </>
          }
        />

        <ServiceBenefits
          title="Lo que cambia para tu clínica"
          titleAccent="desde la primera semana"
          benefits={[
            {
              icon: "Clock",
              title: "Respuesta inmediata, 24 horas al día",
              desc: "Ya sea a mediodía o a las 3 de la madrugada, cada consulta recibe respuesta en segundos. Ningún lead se enfría esperando.",
            },
            {
              icon: "MessageCircle",
              title: "Suena como tu clínica, no como un bot",
              desc: "Configuramos el agente con tu tono, tus tratamientos y tus precios. Tus clientes no notan la diferencia — solo notan que por fin alguien responde.",
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
