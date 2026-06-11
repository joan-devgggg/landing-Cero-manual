import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/recordatorios-citas-whatsapp-clinica"
const TITLE = "Recordatorios de citas por WhatsApp para clínicas: guía completa | Cero Manual"
const DESCRIPTION =
  "Los recordatorios por WhatsApp reducen los no-shows un 40%. Te explicamos cómo configurarlos para que funcionen solos en tu clínica."
const HEADLINE =
  "Recordatorios de citas por WhatsApp para clínicas: cómo configurarlos para que funcionen solos"

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
    publishedTime: "2026-06-11T00:00:00.000Z",
    modifiedTime: "2026-06-11T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Por qué WhatsApp funciona mejor que el SMS o el email para recordatorios?",
    a: "Porque es donde tus pacientes ya están y donde realmente leen los mensajes. WhatsApp tiene una tasa de apertura del 95-98%, frente al 20-25% del email. El SMS queda en un punto intermedio, pero cada vez se confunde más con spam. Si el recordatorio no se lee, da igual lo bien redactado que esté.",
  },
  {
    q: "¿Cuántos recordatorios debo enviar antes de cada cita?",
    a: "Lo que mejor funciona en la práctica son dos avisos: uno 24 horas antes, para que el paciente pueda reorganizar su día si hace falta, y otro 2 horas antes, para que nadie se olvide en el último momento. Los dos juntos cubren tanto el olvido planificable como el descuido del día a día.",
  },
  {
    q: "¿Qué diferencia hay entre un recordatorio con confirmación y uno sin ella?",
    a: "Un recordatorio sin confirmación es un aviso pasivo: se lee y se olvida en segundos. Uno con confirmación pide una respuesta — un «sí», un emoji o un botón — y convierte el aviso en un pequeño compromiso. Además te avisa en tiempo real si un hueco corre riesgo de quedar vacío, para que puedas actuar antes.",
  },
  {
    q: "¿Cuánto se reducen los no-shows con recordatorios automáticos por WhatsApp?",
    a: "De media, un 40%. Si tu clínica tiene una tasa de no-shows del 12-19% — la media del sector —, automatizar los recordatorios por WhatsApp con confirmación activa suele reducir esa cifra de forma visible ya en las primeras semanas, sin que nadie de tu equipo tenga que cambiar su rutina.",
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
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
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

function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="underline decoration-1 underline-offset-2 transition-colors duration-150"
      style={{ color: "#7D9B76" }}
    >
      {children}
    </Link>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base leading-relaxed mb-4"
      style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
    >
      {children}
    </p>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-semibold leading-snug mt-16 mb-5"
      style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
    >
      {children}
    </h2>
  )
}

export default function RecordatoriosWhatsAppArticlePage() {
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
            Gestión de clínicas
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
            11 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Si tu clínica todavía recuerda las citas con una llamada el día anterior — o
            directamente no las recuerda —, estás dejando que entre el 12% y el 19% de tus
            citas programadas se conviertan en huecos vacíos. La solución no es llamar más:
            es elegir el canal correcto y automatizarlo.
          </P>
          <P>
            Ese canal es WhatsApp. No porque esté de moda, sino porque es donde tus pacientes
            ya están, donde abren los mensajes en minutos y donde les resulta natural
            contestar. Bien configurado, un recordatorio por WhatsApp reduce los no-shows
            hasta un 40%.
          </P>
          <P>
            En esta guía vas a ver por qué WhatsApp gana al SMS y al email, qué tiene que
            llevar un buen recordatorio, cuándo enviarlo, qué diferencia hay entre pedir
            confirmación y solo avisar — y cómo montarlo todo para que funcione solo, cita
            tras cita, sin que nadie de tu equipo tenga que acordarse de nada.
          </P>

          <H2>Por qué WhatsApp funciona mejor que el SMS o el email para recordatorios</H2>
          <P>
            El canal que elijas para el recordatorio decide, antes que nada, si el mensaje se
            va a leer. Y aquí los datos no dejan lugar a dudas: los mensajes de WhatsApp
            tienen una tasa de apertura del 95-98%, frente al 20-25% del email.
          </P>
          <P>
            Dicho de otra forma: si envías cien recordatorios por email, unos setenta y cinco
            no se van a abrir nunca. Si los envías por WhatsApp, prácticamente todos van a
            llegar, abrirse y leerse — la mayoría en los primeros minutos.
          </P>
          <P>
            El SMS queda en un punto intermedio, pero cada vez se percibe más como spam y
            muchos operadores filtran los mensajes comerciales antes de que lleguen al
            destinatario. Y el email, aunque sigue siendo útil para facturas o documentación,
            no es el canal en el que un paciente espera recibir un aviso urgente sobre su
            cita de mañana.
          </P>
          <P>
            Si solo puedes automatizar un canal de recordatorios, que sea WhatsApp. Es donde
            está la conversación, y es donde un mensaje tiene posibilidades reales de generar
            una respuesta.
          </P>

          <H2>Qué debe incluir un buen recordatorio de cita</H2>
          <P>
            No todos los recordatorios son iguales. Un mensaje genérico tipo «le recordamos su
            cita» cumple el expediente, pero deja pasar la oportunidad de evitar el no-show.
            Un buen recordatorio incluye, como mínimo:
          </P>
          <P>
            <strong>Quién, cuándo y dónde.</strong> El nombre del paciente, el día y la hora
            exactos, y el profesional o servicio si la clínica tiene varios. Cuanto más
            concreto, menos margen para confusiones de agenda.
          </P>
          <P>
            <strong>Qué hacer si no puede venir.</strong> Un enlace o una respuesta sencilla
            para cancelar o reprogramar. Si no le das esa opción fácil, muchos pacientes
            simplemente no aparecen — es más cómodo no hacer nada que llamar para avisar.
          </P>
          <P>
            <strong>Una llamada a la acción clara.</strong> «Responde SÍ para confirmar» o un
            botón de confirmación. Esto es lo que convierte un aviso pasivo en un compromiso
            activo, y es el elemento que más impacto tiene en la tasa de no-shows.
          </P>
          <P>
            <strong>Tono cercano, no de aviso legal.</strong> Un mensaje cálido y breve genera
            mejor respuesta que un texto largo y formal. El objetivo es que se lea como algo
            de tu clínica, no como un aviso automático de un sistema externo.
          </P>

          <H2>Cuándo enviar el recordatorio: el timing perfecto</H2>
          <P>
            Enviar el recordatorio en el momento equivocado es casi tan ineficaz como no
            enviarlo. Demasiado pronto, el paciente lo lee y lo olvida antes de que llegue el
            día. Demasiado tarde, ya no puede reorganizarse aunque quiera.
          </P>
          <P>
            Lo que mejor funciona en la práctica combina dos avisos. El primero, 24 horas
            antes de la cita: da margen para que el paciente revise su agenda, pida el día si
            trabaja, o avise con tiempo si no puede venir — y a ti te da margen para ofrecer
            ese hueco a otra persona si hace falta.
          </P>
          <P>
            El segundo, 2 horas antes: ya no hay tiempo para reorganizar el día, pero sí para
            que alguien que se había olvidado lo recuerde. Buena parte de los no-shows de
            última hora se evitan solo con este segundo aviso.
          </P>
          <P>
            Los dos juntos cubren tanto el olvido planificable como el despiste del día a día,
            y son la base sobre la que se sostiene esa reducción del 40% en no-shows.
          </P>

          <H2>Confirmación activa vs aviso pasivo</H2>
          <P>
            Hay una diferencia enorme entre «te recordamos tu cita para mañana a las 11h» y
            «confirma tu cita para mañana a las 11h respondiendo SÍ». El primero es un aviso
            pasivo: se puede leer, procesar y olvidar en diez segundos sin hacer nada. El
            segundo pide una acción concreta.
          </P>
          <P>
            Cuando un paciente confirma activamente, ese recordatorio se convierte en un
            pequeño compromiso. Y los compromisos confirmados son mucho más difíciles de
            romper que las intenciones vagas de «sí, claro, ahí estaré».
          </P>
          <P>
            Además, la confirmación activa te da información valiosa en tiempo real: si nadie
            responde al aviso de 24 horas, ya sabes que ese hueco tiene más riesgo de quedar
            vacío. Puedes mandar el segundo aviso antes, ofrecer el hueco a alguien en lista
            de espera, o hacer una llamada si la cita es especialmente importante — antes de
            que el hueco se pierda, no después.
          </P>

          <H2>Cómo automatizarlo para que funcione sin intervención humana</H2>
          <P>
            Configurar esto a mano cita por cita no es sostenible — y tampoco hace falta. La
            forma correcta de hacerlo es con un sistema de{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas
            </InternalLink>{" "}
            conectado a tu agenda, que detecta cada cita nueva y dispara los mensajes en el
            momento exacto sin que nadie tenga que acordarse de nada.
          </P>
          <P>
            El proceso, una vez configurado, es así: el sistema lee tu agenda, programa los
            dos avisos (24h y 2h antes) para cada cita, envía el mensaje por WhatsApp con el
            tono y los datos de tu clínica, y procesa la respuesta del paciente — confirmación,
            cancelación o reprogramación — actualizando la agenda en consecuencia.
          </P>
          <P>
            Lo configuras una vez: qué decir, cuándo enviarlo y qué hacer con cada tipo de
            respuesta. A partir de ahí funciona solo, para cada cita, todos los días —
            incluidos los que tu equipo no está mirando el móvil.
          </P>
          <P>
            Si quieres ver cuánto podrías recuperar con tus propios números, los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas
            </InternalLink>{" "}
            son el primer paso — y normalmente el de mayor impacto inmediato en la agenda.
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
              ¿Quieres que tus recordatorios funcionen solos?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántas citas estás perdiendo al mes —
              y cómo los{" "}
              <InternalLink href="/recordatorios-automaticos-citas">
                recordatorios automáticos para clínicas
              </InternalLink>{" "}
              pueden recuperarlas desde la primera semana.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero ver cuánto recupero →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
