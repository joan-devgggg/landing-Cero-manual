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

const PATH = "/agente-whatsapp-clinicas-dentales"
const TITLE = "Agente de WhatsApp con IA para clínicas dentales"
const DESCRIPTION =
  "Agente de WhatsApp con IA para clínicas dentales: atiende urgencias 24/7, sigue los presupuestos abiertos y recupera revisiones. Reserva tu auditoría gratuita."

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
    q: "¿Puede el agente dar el precio de un implante o una ortodoncia por WhatsApp?",
    a: "Da horquillas y condiciones de financiación que tú has aprobado antes, nunca cierra un presupuesto clínico. El diagnóstico y la valoración siguen siendo del odontólogo — el trabajo del agente es que el paciente llegue al sillón ya informado y sin la conversación del dinero pendiente.",
  },
  {
    q: "¿Cómo distingue una urgencia real de una consulta que puede esperar?",
    a: "Pregunta por el síntoma — dolor, inflamación, un traumatismo, una pieza que se ha caído — y aplica el protocolo que tú definas: hueco de urgencia el mismo día, o aviso inmediato a tu móvil si es de madrugada. Lo que nunca hace es dar consejo clínico ni decirle a nadie que se tome algo.",
  },
  {
    q: "¿Hace seguimiento de los presupuestos que ya di y no se cerraron?",
    a: "Sí, y es lo que más se nota. Retoma la conversación a los días que marques, pregunta por el motivo real de que esté parado — precio, miedo, no encontrar el momento — y según la respuesta ofrece financiación o una segunda visita para resolver dudas. Sin que nadie de tu equipo tenga que repasar una lista a mano.",
  },
  {
    q: "¿Se conecta con ClinicCloud, Klinikare, Flowww o Koibox?",
    a: "Sí. Lee la agenda y la ficha del paciente, y escribe la cita directamente ahí. Tu equipo sigue trabajando en la misma pantalla de siempre y no hay que llevar dos calendarios en paralelo. Si usas otro software de gestión, lo valoramos juntos en la auditoría gratuita.",
  },
  {
    q: "Estamos tratando datos de salud. ¿Qué pasa con el RGPD?",
    a: "Trabajamos sobre la API oficial de WhatsApp Business, con el consentimiento registrado dentro de la propia conversación, los datos alojados en la UE y contrato de encargado del tratamiento firmado. El agente no vuelca historial clínico en el chat: para hablar de un diagnóstico, deriva a tu equipo.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agente de WhatsApp con IA para clínicas dentales",
  name: "Agente de WhatsApp con IA para clínicas dentales",
  description: DESCRIPTION,
  provider: localBusinessProvider,
  areaServed: spainAreaServed,
  url: `https://ceromanual.es${PATH}`,
}

export default function AgenteWhatsAppDentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main>
        <ServiceHero
          label="Para clínicas dentales con presupuestos abiertos y sillones vacíos"
          headlineLines={[
            "Agente de WhatsApp con IA para clínicas dentales que no deja un presupuesto",
          ]}
          accent="sin seguimiento"
          subheadline="Para clínicas dentales donde el presupuesto de implantes se entrega, el paciente dice que se lo piensa — y ahí se queda. El agente retoma esa conversación, atiende la urgencia de las once de la noche y avisa de la revisión que tocaba hace ocho meses."
          metrics={[
            { value: "5 min", label: "la ventana para responder antes de perder al paciente" },
            { value: "12-19%", label: "de las citas dentales acaban en no-show" },
            { value: "24/7", label: "urgencias atendidas, también de madrugada" },
          ]}
        />

        <ServiceProblem
          title="Tu agenda no está vacía por falta de pacientes,"
          titleAccent="está vacía por falta de seguimiento"
          painPoints={[
            "El presupuesto de implantes u ortodoncia sale de la consulta y nadie vuelve a tocarlo. No es que el paciente haya dicho que no: es que dijo «me lo pienso» y ahí se quedó, sin una segunda conversación que lo desbloquee.",
            "Las revisiones y las higienes anuales se olvidan. El paciente no vuelve porque nadie le avisa, y cuando reaparece es con dolor y con un tratamiento mucho más caro que el que habría evitado.",
            "La urgencia llega un viernes a las once de la noche. Nadie contesta hasta el lunes, y para entonces esa persona ya ha encontrado una clínica que sí le abrió el chat.",
            "Un no-show en dental no es solo una hora perdida: es el gabinete, el auxiliar y el tiempo del odontólogo reservados para un sillón que se queda vacío, y con muy poco margen para llenarlo a última hora.",
            "La primera visita de valoración entra en la agenda sin filtrar. Ocupa el hueco de un tratamiento real y muchas veces se resuelve en cinco minutos porque el caso ni siquiera encajaba.",
          ]}
          closing={
            <>
              Ninguno de estos huecos se arregla contratando a más gente en recepción.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Se arreglan cuando alguien hace el seguimiento que nadie tiene tiempo de hacer
              </strong>{" "}
              — todos los días, con todos los pacientes, sin que se le escape ninguno.
            </>
          }
        />

        <ServiceHowItWorks
          title="El ciclo completo del paciente,"
          titleAccent="desde la primera duda hasta la revisión de dentro de un año"
          steps={[
            {
              icon: "Filter",
              num: "01",
              title: "Cualifica la primera visita antes de darle sitio",
              desc: "Pregunta qué le preocupa, si ya lleva ortodoncia, si viene por dolor o por estética. Con eso reserva el hueco adecuado — o descarta el caso que no encaja — en vez de meter una valoración a ciegas en la agenda del martes.",
            },
            {
              icon: "Clock",
              num: "02",
              title: "Atiende la urgencia a la hora que sea",
              desc: "Recoge el síntoma, aplica tu protocolo de triaje y actúa: hueco de urgencia el mismo día si toca, o aviso directo a tu móvil si es grave y estás cerrado. El paciente deja de buscar en Google otra clínica abierta.",
            },
            {
              icon: "TrendingUp",
              num: "03",
              title: "Persigue el presupuesto que sigue abierto",
              desc: "A los días que tú marques, retoma la conversación por WhatsApp: pregunta qué le está frenando y, según lo que conteste, le explica la financiación o le propone una segunda visita. La conversación que nunca se tiene por falta de tiempo.",
            },
            {
              icon: "Bell",
              num: "04",
              title: "Dispara el recall cuando toca",
              desc: "Lee de tu software de gestión cuándo fue la última higiene o revisión de cada paciente y le escribe en el momento adecuado, con opción de reservar ahí mismo. Sin que nadie tenga que sacar el listado a mano cada lunes.",
            },
          ]}
          closing={
            <>
              Ni listados de pendientes que nadie repasa. Ni pacientes que se pierden entre una visita y la siguiente.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Ni presupuestos que caducan en un cajón mientras el sillón está libre.
              </strong>
            </>
          }
        />

        <ServiceBenefits
          title="Lo que deja de escaparse"
          titleAccent="en tu clínica dental"
          benefits={[
            {
              icon: "TrendingUp",
              title: "Ningún presupuesto se queda sin una segunda conversación",
              desc: "Cada tratamiento entregado y no aceptado entra en un seguimiento que se ejecuta solo. Deja de depender de que alguien se acuerde de llamar entre paciente y paciente.",
            },
            {
              icon: "Clock",
              title: "La urgencia de las once de la noche se queda contigo",
              desc: "El agente contesta, encuadra el caso y bloquea el hueco antes de que esa persona siga buscando. Nadie vuelve a enterarse el lunes de una consulta que llegó el viernes.",
            },
            {
              icon: "Bell",
              title: "El recall funciona sin que nadie lo lleve",
              desc: "Revisiones e higienes se avisan a su tiempo, leyendo directamente de tu agenda. Los pacientes vuelven antes de que el problema pequeño se convierta en uno caro.",
            },
            {
              icon: "CalendarCheck",
              title: "Menos horas de sillón vacías",
              desc: "Confirmaciones automáticas y reprogramación desde el propio chat. Cuando alguien cancela, hay margen real para ofrecer el hueco a otro paciente en vez de perder gabinete, auxiliar y tiempo de odontólogo.",
            },
          ]}
        />

        <ServiceFAQ faqs={faqs} />

        <ServiceCTA
          subheading={
            <>
              20 minutos con un experto. Sin compromiso.
              <br />
              Miramos juntos cuántos presupuestos tienes abiertos y cuántas horas de sillón se te quedan vacías cada semana — y qué parte de eso recupera el agente.
            </>
          }
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
