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

const PATH = "/reactivacion-pacientes-inactivos"
const TITLE = "Reactivar clientes inactivos en tu clínica | Cero Manual"
const DESCRIPTION =
  "Recupera clientes que llevan meses sin volver, en automático y sin parecer spam. Reserva tu auditoría gratuita."

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
    q: "¿Cómo sabéis qué clientes están inactivos?",
    a: "Analizamos tu base de datos y detectamos a quienes llevan un tiempo determinado sin reservar — el periodo lo definimos juntos según el tipo de tratamiento que ofreces.",
  },
  {
    q: "¿No es spam escribir a alguien después de tanto tiempo?",
    a: "No, si se hace bien. El mensaje llega en el momento adecuado, con el tono de tu clínica y sin presionar — más parecido a un recordatorio cuidado que a una campaña de publicidad.",
  },
  {
    q: "¿Qué tipo de mensaje se envía?",
    a: "Uno personalizado, que recuerda al cliente quién eres, qué tratamientos le interesaban y le facilita reservar de nuevo — todo por WhatsApp, donde de verdad se lee.",
  },
  {
    q: "¿Cuántos clientes puedo recuperar al mes?",
    a: "Depende del tamaño de tu base de datos y de tu sector, pero recuperar solo 2-3 clientes inactivos al mes ya puede suponer miles de euros adicionales en ingresos recurrentes.",
  },
  {
    q: "¿Cuánto cuesta este servicio?",
    a: "Depende de cuántos canales actives y del tamaño de tu base de datos. En la auditoría gratuita te damos una propuesta concreta, sin compromiso ni letra pequeña.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Reactivación automática de clientes inactivos para clínicas",
  name: "Reactivación automática de clientes inactivos para clínicas",
  description: DESCRIPTION,
  provider: localBusinessProvider,
  areaServed: spainAreaServed,
  url: `https://ceromanual.es${PATH}`,
}

export default function ReactivacionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main>
        <ServiceHero
          label="Para clínicas con una base de datos que no trabaja para ellas"
          headlineLines={["Recupera clientes que llevan meses sin volver,"]}
          accent="en automático"
          subheadline="Para clínicas con cientos de clientes que un día dejaron de venir — y a los que nadie ha vuelto a escribir desde entonces. Esa base de datos tiene ingresos esperando dentro."
          metrics={[
            { value: "95-98%", label: "apertura en WhatsApp frente al 20-25% del email" },
            { value: "≈ 3.000 €", label: "LTV medio de un cliente recurrente" },
            { value: "100%", label: "automático — sin que nadie tenga que acordarse" },
          ]}
        />

        <ServiceProblem
          title="Tu base de datos"
          titleAccent="tiene ingresos durmiendo dentro"
          painPoints={[
            "Tienes clientes que llevan meses — a veces años — sin volver, y nadie les ha escrito todavía para preguntarles por qué.",
            "Cuando alguien lo intenta, suele ser por email: con un 20-25% de apertura, la mayoría de esos mensajes ni siquiera llegan a leerse.",
            "El LTV medio de un cliente recurrente en clínica estética ronda los 3.000 €. Cada cliente inactivo es, literalmente, ingreso que ya diste por perdido.",
            "Mientras tanto, sigues invirtiendo en anuncios para traer clientes nuevos — cuando buena parte de lo que buscas ya está guardado en tu propia base de datos.",
          ]}
          closing={
            <>
              No te falta base de clientes.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Te falta un sistema que la haga trabajar
              </strong>{" "}
              — sin que nadie tenga que acordarse de revisarla cada semana.
            </>
          }
        />

        <ServiceHowItWorks
          title="De cliente olvidado"
          titleAccent="a cita en tu agenda"
          steps={[
            {
              icon: "Search",
              num: "01",
              title: "Detectamos quién lleva tiempo sin volver",
              desc: "Analizamos tu base de datos e identificamos a los clientes que llevan meses sin reservar, sin que tengas que revisar nada a mano.",
            },
            {
              icon: "MessagesSquare",
              num: "02",
              title: "Le escribimos en el momento adecuado",
              desc: "Enviamos el mensaje justo, con el tono de tu clínica, por el canal que de verdad se abre — WhatsApp. Sin sonar a publicidad ni a spam.",
            },
            {
              icon: "CheckCircle",
              num: "03",
              title: "Responde y agenda sola",
              desc: "El agente resuelve dudas, recuerda lo que ya sabe de ese cliente y le ayuda a reservar su próxima cita, sin que nadie tenga que llamarle.",
            },
            {
              icon: "TrendingUp",
              num: "04",
              title: "Tú recuperas el ingreso",
              desc: "La cita aparece en tu calendario y el cliente vuelve a tu clínica — exactamente lo que conseguirías con una llamada personal, pero sin hacer ninguna.",
            },
          ]}
          closing={
            <>
              Sin campañas masivas. Sin mensajes genéricos a toda la lista.{" "}
              <strong style={{ color: "#1A1A1A" }}>
                Solo el contacto adecuado, en el momento adecuado, con la persona adecuada.
              </strong>
            </>
          }
        />

        <ServiceBenefits
          title="Lo que recuperas"
          titleAccent="sin mover un dedo"
          benefits={[
            {
              icon: "TrendingUp",
              title: "Ingresos que ya dabas por perdidos",
              desc: "Cada cliente que reactivas vale, de media, cerca de 3.000 € a lo largo del tiempo — dinero que ya estaba en tu base de datos, esperando.",
            },
            {
              icon: "Heart",
              title: "Mensajes con timing, no spam",
              desc: "El sistema elige el momento adecuado para escribir a cada persona, para que se sienta un recordatorio cuidado y no una campaña de publicidad.",
            },
            {
              icon: "Database",
              title: "Tu base de datos, por fin, trabajando para ti",
              desc: "Toda esa información que ya tienes sobre tus clientes deja de estar guardada sin más, y empieza a generar citas reales.",
            },
            {
              icon: "Sparkles",
              title: "Más reservas sin gastar en anuncios",
              desc: "Recuperas clientes que ya te conocían y confiaban en ti — sin pagar por cada nuevo contacto que llega frío desde una campaña.",
            },
          ]}
        />

        <ServiceFAQ faqs={faqs} />

        <ServiceCTA
          subheading={
            <>
              20 minutos con un experto. Sin compromiso.
              <br />
              Te enseñamos cuántos clientes inactivos tienes en tu base de datos ahora mismo — y cuánto podrían valer si volvieran a reservar.
            </>
          }
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
