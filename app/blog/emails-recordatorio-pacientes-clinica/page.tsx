import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/emails-recordatorio-pacientes-clinica"
const TITLE = "Emails recordatorio pacientes: plantillas listas + por qué WhatsApp funciona mejor | Cero Manual"
const DESCRIPTION =
  "Plantillas de email de recordatorio para clínicas listas para copiar. Y por qué el 95% de tus pacientes prefiere recibir el recordatorio por WhatsApp."
const HEADLINE =
  "Emails de recordatorio para pacientes: plantillas, consejos y cuándo usar WhatsApp en su lugar"

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
    publishedTime: "2026-07-07T00:00:00.000Z",
    modifiedTime: "2026-07-07T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Cuánto se abren realmente los emails de recordatorio?",
    a: "Depende mucho del sector, pero en clínicas la tasa de apertura de los emails suele moverse entre el 20% y el 25%. Es decir, tres de cada cuatro pacientes no llegan a abrir el recordatorio. Por eso el email funciona mejor como refuerzo o como canal secundario que como único aviso antes de una cita.",
  },
  {
    q: "¿Cuándo debo enviar el email de recordatorio?",
    a: "Lo más habitual es enviarlo entre 48 y 24 horas antes de la cita, para dar margen al paciente a reorganizarse si lo necesita. Como el email no siempre se abre a tiempo, no conviene usarlo para el aviso de última hora (las 2 horas antes): para ese momento, un canal con apertura casi inmediata como WhatsApp es mucho más fiable.",
  },
  {
    q: "¿Puedo combinar email y WhatsApp para recordar citas?",
    a: "Sí, y de hecho suele ser lo más efectivo. El email sirve para el paciente que prefiere ese canal o para adjuntar información más extensa (indicaciones previas, documentos, preparación del tratamiento), y WhatsApp se encarga del recordatorio corto y de la confirmación activa. Lo importante es no depender solo del email para evitar el no-show.",
  },
  {
    q: "¿Es mejor que el email pida confirmación o que solo avise?",
    a: "Igual que en WhatsApp, un email que pide una acción concreta funciona mejor que uno que solo informa. Un botón claro de «Confirmar cita» o «Necesito cambiarla» convierte el recordatorio en un pequeño compromiso. Aun así, la limitación del email sigue siendo la apertura: si el paciente no lo abre, da igual lo bien redactado que esté.",
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
  datePublished: "2026-07-07",
  dateModified: "2026-07-07",
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

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-5 mb-4"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DBD4" }}
    >
      <p
        className="text-sm leading-relaxed whitespace-pre-line"
        style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
      >
        {children}
      </p>
    </div>
  )
}

export default function EmailsRecordatorioPacientesPage() {
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
            7 de julio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            Los recordatorios son una de las herramientas más eficaces para reducir las
            ausencias en una clínica. Cuando un paciente recibe un aviso a tiempo, la
            probabilidad de que aparezca sube de forma notable — de hecho, un sistema de
            recordatorios bien planteado puede reducir los no-shows hasta un 40%. Y eso
            importa, porque entre el 12% y el 19% de las citas de una clínica terminan sin
            que el paciente se presente.
          </P>
          <P>
            El problema es que muchas clínicas se centran solo en el mensaje — qué texto
            usar, cuándo enviarlo — y olvidan que el canal importa tanto o más que el
            contenido. Un recordatorio perfecto que el paciente nunca llega a abrir no sirve
            de nada. Y ahí el email tiene una desventaja clara: su tasa de apertura ronda el
            20-25%, frente al 95-98% de WhatsApp.
          </P>
          <P>
            En este artículo vas a ver por qué los emails de recordatorio no siempre
            funcionan, en qué casos sí tiene sentido usarlos, plantillas listas para copiar,
            por qué WhatsApp suele rendir mejor para este objetivo y cómo automatizar todo
            el proceso para que los recordatorios se envíen solos.
          </P>

          <H2>Por qué los emails de recordatorio no siempre funcionan</H2>
          <P>
            El primer motivo es el más simple: la mayoría de los emails no se abren. Con una
            tasa de apertura media del 20-25% en clínicas, tres de cada cuatro pacientes ni
            siquiera ven el recordatorio. Y de los que lo abren, muchos lo hacen horas más
            tarde, cuando el aviso ya ha perdido buena parte de su utilidad.
          </P>
          <P>
            El segundo motivo es el ruido. La bandeja de entrada de cualquier persona está
            saturada de newsletters, promociones y notificaciones. Tu recordatorio compite
            con decenas de mensajes y, salvo que el asunto sea muy directo, se pierde entre
            todos ellos o acaba en la carpeta de promociones sin que el paciente lo vea.
          </P>
          <P>
            El tercer motivo es el timing. El email es un canal asíncrono: la gente lo revisa
            una o dos veces al día, no de forma inmediata. Eso lo hace poco fiable para el
            aviso de última hora — el de las 2 horas antes de la cita — que es justo el que
            evita los olvidos de ese mismo día.
          </P>

          <H2>Cuándo sí tiene sentido usar email para recordar citas</H2>
          <P>
            Esto no significa que el email no sirva para nada. Tiene contextos en los que
            funciona bien, sobre todo cuando se usa como refuerzo y no como único canal.
          </P>
          <P>
            <strong>Cuando el paciente prefiere el email.</strong> Hay perfiles — sobre todo
            en ciertos rangos de edad o en entornos profesionales — que revisan el correo con
            frecuencia y lo consideran su canal principal. Para ellos, un email es
            perfectamente válido.
          </P>
          <P>
            <strong>Cuando hay que enviar información extensa.</strong> Si la cita requiere
            preparación previa (indicaciones antes de un tratamiento, documentos a rellenar,
            consentimientos, instrucciones de ayuno), el email es el mejor formato: permite
            adjuntar archivos y explicar con detalle sin saturar un chat.
          </P>
          <P>
            <strong>Como parte de una estrategia multicanal.</strong> El email puede ser una
            de las capas del recordatorio — la del aviso con más antelación — mientras el
            canal inmediato se reserva para la confirmación y el aviso del mismo día. Usados
            juntos, cubren más terreno que cualquiera por separado.
          </P>

          <H2>Plantillas de email de recordatorio para clínicas</H2>
          <P>
            Si vas a usar email para recordar citas, cuida el asunto tanto como el cuerpo: es
            lo único que verá el paciente antes de decidir si abre o no. Aquí tienes tres
            plantillas listas para copiar y adaptar.
          </P>
          <Template>
            {`Asunto: Recordatorio de tu cita en [Clínica] — [día] a las [hora]

Hola [Nombre]:

Te recordamos que tienes una cita en [Clínica] el [día] a las [hora] con [profesional/tratamiento].

📍 Dirección: [dirección]

Si todo sigue en pie, no necesitas hacer nada. Si necesitas cambiar la cita, responde a este correo o llámanos al [teléfono] y buscamos otro hueco.

Un saludo,
El equipo de [Clínica]`}
          </Template>
          <Template>
            {`Asunto: [Nombre], confirma tu cita del [día]

Hola [Nombre]:

Tu cita en [Clínica] está programada para el [día] a las [hora].

Para asegurarte el hueco, confírmanos que vendrás:
✅ Confirmar cita: [enlace]
🔄 Necesito cambiarla: [enlace]

Si no podemos confirmar la cita, liberaremos ese horario para otro paciente.

Gracias,
El equipo de [Clínica]`}
          </Template>
          <Template>
            {`Asunto: Prepárate para tu cita en [Clínica] — [día]

Hola [Nombre]:

Te esperamos el [día] a las [hora] para tu [tratamiento]. Para que todo vaya bien, ten en cuenta estas indicaciones:

• [Indicación 1]
• [Indicación 2]
• [Indicación 3]

Si tienes cualquier duda o necesitas reprogramar, escríbenos respondiendo a este correo.

Un saludo,
El equipo de [Clínica]`}
          </Template>

          <H2>Por qué WhatsApp funciona mejor que el email para recordatorios</H2>
          <P>
            La diferencia más importante es la apertura. Mientras un email se abre en el
            20-25% de los casos, un mensaje de WhatsApp llega al 95-98%. Casi todo el mundo
            abre WhatsApp, y lo hace en minutos, no en horas. Para un recordatorio, esa
            inmediatez lo cambia todo.
          </P>
          <P>
            A eso se suma la naturalidad del canal. Un mensaje de WhatsApp se lee como una
            conversación, no como un correo formal, y el paciente puede confirmar,
            reprogramar o preguntar respondiendo con una sola palabra. Esa fricción tan baja
            es la que convierte el recordatorio en una confirmación activa, mucho más difícil
            de ignorar.
          </P>
          <P>
            Por eso, cuando el objetivo es puramente reducir no-shows, WhatsApp suele ser el
            canal principal y el email el refuerzo. Si quieres profundizar en cómo montar ese
            sistema, tienes los detalles en nuestra página de{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>
            .
          </P>

          <H2>Cómo automatizar los recordatorios para que funcionen solos</H2>
          <P>
            Tener buenas plantillas es solo la mitad del trabajo. La otra mitad es que los
            recordatorios se envíen solos, en el momento exacto, sin que nadie de tu equipo
            tenga que acordarse de hacerlo cita tras cita. Si el envío depende de que alguien
            se siente a mandar correos o mensajes uno a uno, tarde o temprano se cuela algún
            olvido — y ese olvido acaba siendo un hueco vacío en la agenda.
          </P>
          <P>
            Automatizar significa que cada paciente recibe su recordatorio con la antelación
            adecuada por el canal adecuado: un aviso con margen (por email o WhatsApp) y una
            confirmación cercana a la cita por WhatsApp, con el tono de tu clínica. Y si el
            sistema detecta que alguien no confirma, puede activar un seguimiento adicional
            antes de que ese hueco se pierda.
          </P>
          <P>
            Ese es exactamente el enfoque que aplicamos con los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>
            : combinar el canal correcto, el mensaje correcto y la automatización para que el
            envío ocurra sin esfuerzo añadido para tu equipo, recuperando buena parte de ese
            12-19% de citas que hoy se quedan vacías.
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
              ¿Quieres que los recordatorios de tu clínica se envíen solos?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te explicamos cómo automatizar los recordatorios por el canal correcto y
              reducir los no-shows de tu clínica hasta un 40% desde el primer mes.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver recordatorios automáticos →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
