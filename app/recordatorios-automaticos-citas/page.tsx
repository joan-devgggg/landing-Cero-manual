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

const PATH = "/recordatorios-automaticos-citas"
const TITLE = "Recordatorios automáticos citas clínica | Cero Manual"
const DESCRIPTION =
  "Recordatorios automáticos por WhatsApp que reducen los no-shows de tu clínica, sin trabajo para tu equipo. Reserva tu auditoría gratuita."

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
    q: "¿Por qué canal se envían los recordatorios?",
    a: "Principalmente por WhatsApp, porque es el canal donde tus clientes ya hablan contigo a diario. Si lo prefieres, también podemos combinarlo con SMS.",
  },
  {
    q: "¿Se puede personalizar el mensaje?",
    a: "Sí. Lo adaptamos al tono de tu clínica, al tipo de tratamiento y al momento del recordatorio, para que no suene a aviso genérico de centralita.",
  },
  {
    q: "¿El cliente puede cambiar la cita desde el propio recordatorio?",
    a: "Sí. Puede confirmar su asistencia o pedir otro horario directamente desde el mensaje, y el cambio queda en la agenda sin que nadie tenga que llamar.",
  },
  {
    q: "¿Se integra con mi software de gestión?",
    a: "Si tu programa lo permite (Flowww, Koibox, ClinicCloud o Klinikare, por ejemplo), el sistema se integra con él y envía los recordatorios sobre las citas de tu agenda de siempre. Si no encaja o no se deja conectar, construimos el software a medida con los recordatorios dentro. Lo vemos en la auditoría gratuita.",
  },
  {
    q: "¿Cuánto bajan realmente los no-shows?",
    a: "Depende de cada clínica, y no te vamos a dar una media sin fuente. Lo que sí hace el sistema es recordar cada cita por WhatsApp y pedir confirmación, así que los huecos se detectan con margen para ofrecerlos a otra persona. En la auditoría gratuita calculamos el impacto con tus propios números: citas al mes, tu tasa actual de no-shows y tu ticket medio.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Recordatorios automáticos de citas para clínicas",
  name: "Recordatorios automáticos de citas para clínicas",
  description: DESCRIPTION,
  provider: localBusinessProvider,
  areaServed: spainAreaServed,
  url: `https://ceromanual.es${PATH}`,
}

export default function RecordatoriosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main>
        <ServiceHero
          label="Para clínicas que pierden ingresos por citas vacías"
          headlineLines={["Recordatorios automáticos que reducen tus no-shows"]}
          accent="sin trabajo para tu equipo"
          subheadline="Para clínicas que ven huecos en la agenda cada semana porque alguien se olvida — o decide no avisar — de que tenía cita. Cada hueco vacío es tiempo, sala y producto que ya estaban reservados para nadie."
          metrics={[
            { value: "24 h", label: "antes de cada cita, recordatorio por WhatsApp" },
          ]}
        />

        <ServiceProblem
          title="Cada hueco vacío en tu agenda"
          titleAccent="es dinero que ya diste por hecho"
          painPoints={[
            "Una parte de las citas de una clínica estética termina en no-show: alguien que reserva y, simplemente, no aparece.",
            "Cada hueco cuesta lo que habría facturado esa cita: tiempo de profesional, sala y producto que ya estaban reservados para nadie.",
            "Tu equipo pierde horas a la semana llamando uno a uno para «recordar» la cita, y aun así una parte no contesta ni confirma.",
            "Cuando alguien no aparece sin avisar, ya es demasiado tarde para llenar ese hueco con otro cliente que sí quería venir.",
          ]}
          closing={
            <>
              No es que tus clientes no quieran venir.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Es que nadie les ha recordado la cita por el canal — y en el momento — adecuado.
              </strong>
            </>
          }
        />

        <ServiceHowItWorks
          title="Recordatorios que llegan"
          titleAccent="justo cuando hace falta"
          steps={[
            {
              icon: "Bell",
              num: "01",
              title: "Recordatorio 24 horas antes",
              desc: "Tu cliente recibe un mensaje por WhatsApp recordándole la cita, el tratamiento y la hora — con el tono de tu clínica, sin sonar a aviso automático de centralita.",
            },
            {
              icon: "AlarmClock",
              num: "02",
              title: "Segundo aviso, si lo quieres",
              desc: "Si te interesa reforzarlo, configuramos un segundo aviso más cercano a la hora de la cita, para que nadie se despiste a última hora.",
            },
            {
              icon: "CalendarCheck",
              num: "03",
              title: "Confirma o reprograma sin llamar",
              desc: "Desde el propio mensaje, el cliente puede confirmar su asistencia o pedir cambiar la hora. El cambio queda reflejado directamente en la agenda, sin que nadie tenga que descolgar el teléfono.",
            },
            {
              icon: "Star",
              num: "04",
              title: "Seguimiento después de la cita",
              desc: "Cuando todo ha ido bien, el sistema pide la reseña en el momento exacto — cuando la experiencia todavía está fresca y la persona está más dispuesta a dejarla.",
            },
          ]}
          closing={
            <>
              Sin llamadas de última hora. Sin agendas con huecos que nadie llena.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Sin que tengas que acordarte tú de recordarles la cita a los demás.
              </strong>
            </>
          }
        />

        <ServiceBenefits
          title="Lo que notas en tu agenda"
          titleAccent="sin que nadie tenga que perseguir a nadie"
          benefits={[
            {
              icon: "CalendarCheck",
              title: "Menos huecos vacíos en la agenda",
              desc: "Cada cita confirmada es una sala, un profesional y un tratamiento que no se quedan esperando a nadie que no va a llegar.",
            },
            {
              icon: "PhoneOff",
              title: "Se acaban las llamadas de “te recuerdo tu cita”",
              desc: "Tu equipo deja de perder horas a la semana repitiendo lo mismo por teléfono. El sistema lo hace solo, mejor y a más gente a la vez.",
            },
            {
              icon: "CheckCircle",
              title: "Clientes que confirman solos",
              desc: "Sin que nadie tenga que insistir. El recordatorio llega por el canal que de verdad abren, y responden ahí mismo, en segundos.",
            },
            {
              icon: "Star",
              title: "Más reseñas, sin pedirlas a mano",
              desc: "El seguimiento automático pide la opinión poco después de la cita, cuando es más probable que la persona la deje — y la deje buena.",
            },
          ]}
        />

        <ArticleLinks
          label="Del blog"
          title="Guías relacionadas"
          articles={[
            {
              slug: "emails-recordatorio-pacientes-clinica",
              title: "Emails de recordatorio para pacientes: plantillas, consejos y cuándo usar WhatsApp en su lugar",
            },
            {
              slug: "como-reducir-no-shows-clinica-estetica",
              title: "Cómo reducir los no-shows en tu clínica estética y dejar de perder ingresos",
            },
            {
              slug: "recordatorios-citas-whatsapp-clinica",
              title: "Recordatorios de citas por WhatsApp para clínicas: cómo configurarlos para que funcionen solos",
            },
          ]}
        />

        <ServiceFAQ faqs={faqs} />

        <ServiceCTA
          subheading={
            <>
              20 minutos con un experto. Sin compromiso.
              <br />
              Te enseñamos cuántas citas podrías estar perdiendo cada mes — y cómo recuperarlas con recordatorios que de verdad se leen.
            </>
          }
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
