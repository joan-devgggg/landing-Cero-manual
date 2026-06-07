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

const PATH = "/recordatorios-automaticos-citas"
const TITLE = "Recordatorios automáticos citas clínica | Cero Manual"
const DESCRIPTION =
  "Recordatorios automáticos por WhatsApp que reducen tus no-shows hasta un 40% desde el primer mes. Reserva tu auditoría gratuita."

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
    a: "Principalmente por WhatsApp, porque es donde tus clientes de verdad leen los mensajes — con un 95-98% de apertura frente al 20-25% del email. Si lo prefieres, también podemos combinarlo con SMS.",
  },
  {
    q: "¿Se puede personalizar el mensaje?",
    a: "Sí. Lo adaptamos al tono de tu clínica, al tipo de tratamiento y al momento del recordatorio, para que no suene a aviso genérico de centralita.",
  },
  {
    q: "¿El cliente puede cambiar la cita desde el propio recordatorio?",
    a: "Sí. Puede confirmar su asistencia o pedir otro horario directamente desde el mensaje, y el cambio se refleja en tu calendario sin que nadie tenga que llamar.",
  },
  {
    q: "¿Se integra con mi software de gestión?",
    a: "Sí. Nos integramos con los principales programas del sector, como Flowww y Klinikare. Si usas otro, lo valoramos juntos en la auditoría gratuita.",
  },
  {
    q: "¿Cuánto bajan realmente los no-shows?",
    a: "De media, las clínicas que activan los recordatorios automáticos ven una reducción de hasta un 40% desde el primer mes, y siguen bajando a medida que el sistema aprende los patrones de tus clientes.",
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
          accent="un 40% desde el primer mes"
          subheadline="Para clínicas que ven huecos en la agenda cada semana porque alguien se olvida — o decide no avisar — de que tenía cita. Cada hueco vacío es tiempo, sala y producto que ya estaban reservados para nadie."
          metrics={[
            { value: "−40%", label: "no-shows desde el primer mes" },
            { value: "Hasta 7.500 €/mes", label: "en pérdidas que se pueden evitar" },
            { value: "12-19%", label: "es la tasa media de no-shows del sector" },
          ]}
        />

        <ServiceProblem
          title="Cada hueco vacío en tu agenda"
          titleAccent="es dinero que ya diste por hecho"
          painPoints={[
            "Entre el 12% y el 19% de las citas de una clínica estética terminan en no-show: alguien que reserva y, simplemente, no aparece.",
            "Esos huecos le cuestan a una clínica media hasta 7.500 € al mes — tiempo de profesional, sala y producto que ya estaban reservados para nadie.",
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
              title: "Recordatorio 2 horas antes",
              desc: "Un segundo aviso, más cercano a la hora de la cita, para que nadie se despiste a última hora — sin sonar repetitivo ni invasivo.",
            },
            {
              icon: "CalendarCheck",
              num: "03",
              title: "Confirma o reprograma sin llamar",
              desc: "Desde el propio mensaje, el cliente puede confirmar su asistencia o pedir cambiar la hora. El cambio queda reflejado directamente en tu calendario, sin que nadie tenga que descolgar el teléfono.",
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
          titleAccent="desde el primer mes"
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
              desc: "El seguimiento automático pide la opinión justo después de la cita, cuando es más probable que la persona la deje — y la deje buena.",
            },
          ]}
        />

        <ServiceSocialProof
          title="Clínicas que ya casi"
          titleAccent="no tienen no-shows"
          proofMetric={{
            value: "12-19%",
            desc: "es el porcentaje medio de citas que no se presentan en una clínica estética — hasta 7.500 € al mes en tiempo, sala y producto reservados para nadie.",
            source: "Fuente: estudios sectoriales sobre absentismo en clínicas estéticas en España",
          }}
          testimonials={[
            { placeholder: "[Testimonio real próximamente — clínica que vio caer sus no-shows el primer mes con los recordatorios automáticos]", role: "Clínica estética · Madrid", initials: "CE" },
            { placeholder: "[Testimonio real próximamente — centro que dejó de perder horas llamando para confirmar citas]", role: "Centro estético · Málaga", initials: "CM" },
            { placeholder: "[Testimonio real próximamente — clínica sobre cómo los recordatorios le llenaron la agenda]", role: "Medicina estética · Valencia", initials: "ME" },
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
