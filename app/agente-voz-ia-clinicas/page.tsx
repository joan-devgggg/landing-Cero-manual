import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceHero from "@/components/ServiceHero"
import ServiceProblem from "@/components/ServiceProblem"
import ServiceHowItWorks from "@/components/ServiceHowItWorks"
import ServiceBenefits from "@/components/ServiceBenefits"
import ServiceSocialProof from "@/components/ServiceSocialProof"
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
    a: "No. La voz, el tono y las respuestas se configuran con la información real de tu clínica — tratamientos, precios, horarios — para que la conversación se sienta natural de principio a fin.",
  },
  {
    q: "¿Puede agendar la cita directamente?",
    a: "Sí. En cuanto la persona confirma que quiere reservar, el agente coloca la cita en tu calendario y envía la confirmación, sin que tengas que llamar de vuelta.",
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
    a: "Menos de 14 días desde que empezamos. Configuramos la voz, el guion y la información de tu clínica antes de poner el agente a contestar de verdad.",
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
          label="Para clínicas que no pueden permitirse perder ni una llamada"
          headlineLines={["El agente de voz con IA que contesta cada llamada de tu clínica,"]}
          accent="hasta a las 3 de la mañana"
          subheadline="Para clínicas que pierden llamadas en hora punta, fuera de horario o cuando el equipo está atendiendo a otro cliente — y no se pueden permitir que esa llamada se quede sin respuesta."
          metrics={[
            { value: "100%", label: "de las llamadas, atendidas siempre" },
            { value: "40%", label: "de las consultas llegan fuera de horario" },
            { value: "24/7", label: "— incluso a las 3 de la madrugada" },
          ]}
        />

        <ServiceProblem
          title="El teléfono suena,"
          titleAccent="y nadie contesta"
          painPoints={[
            "El 40% de las consultas de tu clínica llegan entre las 19:00 y las 23:00, o en fin de semana — fuera del horario en el que alguien puede coger el teléfono.",
            "Un lead que no recibe respuesta en los primeros 5 minutos tiene un 80% de probabilidades de perderse para siempre. Una llamada que nadie coge es justo eso: cero minutos de respuesta.",
            "El sector estético pierde entre un 12% y un 19% de las citas por no-shows — y muchas empiezan con una llamada mal gestionada, o que nadie llega a devolver.",
            "Cada llamada que no contestas es un cliente que cuelga, busca en Google y prueba con la siguiente clínica de la lista.",
          ]}
          closing={
            <>
              No es que falte interés en tu clínica.{" "}
              <strong style={{ color: "#1A1A1A" }}>Es que falta alguien al otro lado del teléfono</strong> — a
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
              desc: "Conversa con el tono y la información real de tu clínica: tratamientos, precios, horarios. La persona al otro lado nota que la atienden bien, no que habla con una máquina.",
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
              title: "Agenda la cita en tu calendario",
              desc: "Cuando la persona está lista, el agente reserva directamente. Tú recibes la grabación, el resumen y la cita ya colocada — sin tener que llamar de vuelta.",
            },
          ]}
          closing={
            <>
              Sin contestador automático. Sin &ldquo;deje su mensaje después de la señal&rdquo;.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Sin clientes que cuelgan y prueban con la clínica de al lado.
              </strong>
            </>
          }
        />

        <ServiceBenefits
          title="Lo que cambia"
          titleAccent="cuando ninguna llamada se queda sin respuesta"
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
              desc: "La cita queda colocada directamente en tu calendario, con confirmación para el cliente y aviso para ti. Sin idas y vueltas de mensajes.",
            },
            {
              icon: "Headphones",
              title: "Suena natural, no a contestador",
              desc: "Configuramos la voz, el tono y las respuestas con la información real de tu clínica. La experiencia se siente humana de principio a fin.",
            },
          ]}
        />

        <ServiceSocialProof
          title="Clínicas que ya no dejan"
          titleAccent="ninguna llamada en el aire"
          proofMetric={{
            value: "40%",
            desc: "de las consultas de clínicas estéticas llegan fuera del horario habitual de atención: entre las 19:00 y las 23:00, o en fin de semana. Si nadie contesta entonces, esas llamadas se las queda otra clínica.",
            source: "Fuente: análisis de patrones de contacto en clínicas estéticas en España",
          }}
          testimonials={[
            { placeholder: "[Testimonio real próximamente — clínica que dejó de perder llamadas en hora punta gracias al agente de voz]", role: "Clínica estética · Madrid", initials: "CE" },
            { placeholder: "[Testimonio real próximamente — centro de medicina estética sobre las llamadas atendidas fuera de horario]", role: "Medicina estética · Sevilla", initials: "ME" },
            { placeholder: "[Testimonio real próximamente — clínica que recupera citas que antes se perdían por teléfono]", role: "Clínica estética · Valencia", initials: "CV" },
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
