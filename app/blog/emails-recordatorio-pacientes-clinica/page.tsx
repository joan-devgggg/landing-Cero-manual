import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import H3 from "@/components/blog/H3"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/emails-recordatorio-pacientes-clinica"
const DATES = articleDates("emails-recordatorio-pacientes-clinica")
const TITLE = "Emails de recordatorio de cita: plantillas | Cero Manual"
const DESCRIPTION =
  "Plantillas de email de recordatorio para clínicas listas para copiar. Y por qué a muchos pacientes les llega mejor el recordatorio por WhatsApp."
const ARTICLE_DESCRIPTION =
  "Plantillas de email de recordatorio de citas para clínicas, qué debe incluir cada mensaje, cuándo enviarlo y en qué casos conviene usar WhatsApp en su lugar."
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
    publishedTime: DATES.publishedTime,
    modifiedTime: DATES.modifiedTime,
  },
}

const faqs = [
  {
    q: "¿Cuánto se abren realmente los emails de recordatorio?",
    a: "Depende de cada clínica y de sus pacientes, y el dato fiable es el que te dé tu propia herramienta de envío. Lo habitual es que una parte de los recordatorios se quede sin abrir, o se abra tarde, porque compite con decenas de correos en la bandeja de entrada. Por eso el email funciona mejor como refuerzo o como canal secundario que como único aviso antes de una cita.",
  },
  {
    q: "¿Cuándo debo enviar el email de recordatorio?",
    a: "Lo más habitual es enviarlo entre 48 y 24 horas antes de la cita, para dar margen al paciente a reorganizarse si lo necesita. Como el email no siempre se abre a tiempo, no conviene usarlo para el aviso de última hora (las 2 horas antes): para ese momento, un canal con apertura casi inmediata como WhatsApp es mucho más fiable.",
  },
  {
    q: "¿Puedo combinar email y WhatsApp para recordar citas?",
    a: "Sí, y de hecho suele ser lo más efectivo. El email sirve para el paciente que prefiere ese canal o para adjuntar información más extensa (indicaciones previas, documentos, preparación del tratamiento), y WhatsApp se encarga del recordatorio corto y de la confirmación activa. Para evitar el no-show, no conviene depender solo del email.",
  },
  {
    q: "¿Es mejor que el email pida confirmación o que solo avise?",
    a: "Igual que en WhatsApp, un email que pide una acción concreta funciona mejor que uno que solo informa. Un botón claro de «Confirmar cita» o «Necesito cambiarla» convierte el recordatorio en un pequeño compromiso. Eso sí, si el paciente no lo abre, da igual lo bien redactado que esté.",
  },
  {
    q: "¿Puedo usar estas plantillas tal cual o tengo que adaptarlas?",
    a: "Puedes usarlas como base, tanto las de email como las de WhatsApp, pero conviene adaptar el tono y el nombre de la clínica para que suenen coherentes con el resto de tu comunicación. Una buena referencia es escribir el recordatorio como lo diría por teléfono la persona de recepción con mejor trato, y quitar todo lo que no diría en voz alta. Ten en cuenta también que, si envías los mensajes de WhatsApp a través de la API de WhatsApp Business, Meta tiene que aprobar las plantillas antes de que puedas usarlas.",
  },
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: ARTICLE_DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Joan - Cero Manual",
  },
  datePublished: DATES.published,
  dateModified: DATES.modified,
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
            7 de julio de 2026 · 9 min de lectura
          </p>

          {/* Intro */}
          <P>
            Un email de recordatorio para pacientes es el aviso que la clínica envía antes
            de una cita para que el paciente la tenga presente y pueda confirmarla o
            cambiarla a tiempo. Lo habitual es mandarlo entre 48 y 24 horas antes, con el
            nombre de la clínica y la fecha en el asunto, y en el cuerpo el día y la hora sin
            abreviaturas, el profesional o el tratamiento, la dirección y una forma sencilla
            de cambiar la cita.
          </P>
          <P>
            Un sistema de recordatorios bien planteado es de lo primero que conviene montar
            para{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-estetica">
              reducir los no-shows
            </InternalLink>
            : un aviso a tiempo le da al paciente ocasión de confirmar o de avisar si no
            puede venir.
          </P>

          <H2>Por qué los emails de recordatorio no siempre funcionan</H2>
          <P>
            Parte de los pacientes no llega a abrir el recordatorio, o lo abre horas más
            tarde. Compite con newsletters, promociones y notificaciones y, salvo que el
            asunto sea muy directo, se pierde entre ellas o acaba en la carpeta de
            promociones sin que el paciente lo vea.
          </P>
          <P>
            Además, la gente revisa el correo una o dos veces al día. Eso lo hace poco
            fiable para el aviso de última hora, el de las 2 horas antes de la cita, que es
            el que evita los olvidos de ese mismo día.
          </P>

          <H2>Cuándo sí tiene sentido usar email para recordar citas</H2>
          <P>
            El email funciona bien en estos contextos, sobre todo como refuerzo de otro
            canal.
          </P>
          <P>
            <strong>Cuando el paciente prefiere el email.</strong> Hay perfiles — sobre todo
            en ciertos rangos de edad o en entornos profesionales — que revisan el correo con
            frecuencia y lo consideran su canal principal.
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
            canal inmediato se reserva para la confirmación y el aviso del mismo día.
          </P>

          <H2>Plantillas de email de recordatorio para clínicas</H2>
          <P>
            Si vas a usar email para recordar citas, cuida el asunto tanto como el cuerpo: es
            lo único que verá el paciente antes de decidir si abre o no. Aquí tienes tres
            plantillas listas para copiar y adaptar.
          </P>
          <P>
            Antes de copiarlas, fíjate en tres detalles. El asunto
            lleva el nombre de la clínica y la fecha, para que el paciente sepa de qué va sin
            abrir el correo. La fecha va escrita sin abreviaturas —«martes 16 de junio a las
            17:30», no «16/6 17:30h»—, porque es el dato que más se consulta. Y siempre
            aparece el nombre del profesional o del tratamiento, que ayuda a ubicar la visita
            si el paciente tiene varias citas.
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
            La diferencia más importante es la apertura. El correo se revisa cuando uno se
            sienta a mirarlo; WhatsApp es la aplicación que el paciente abre a lo largo del
            día, y un mensaje ahí se suele leer en minutos.
          </P>
          <P>
            Un mensaje de WhatsApp se lee además como una conversación, y el paciente puede
            confirmar, reprogramar o preguntar respondiendo con una sola palabra. Con tan poca
            fricción, el recordatorio se convierte en una confirmación activa, mucho más
            difícil de ignorar.
          </P>
          <P>
            Por eso, cuando el objetivo es reducir no-shows, WhatsApp suele ser el canal
            principal y el email el refuerzo: el aviso con más antelación, la información
            extensa y el paciente que prefiere el correo. Si quieres profundizar en cómo montar ese
            sistema, tienes los detalles en nuestra página de{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>
            .
          </P>

          <H2>Plantillas de recordatorio por WhatsApp</H2>
          <P>
            Son la versión corta de las plantillas de email anteriores, pensadas para leerse
            en el móvil en unos segundos.
          </P>

          <H3>Recordatorio 24 horas antes</H3>
          <P>
            Informa sin exigir nada y deja una puerta abierta por si el paciente necesita
            cambiar la cita.
          </P>
          <Template>
            {`Hola [Nombre] 👋 Te escribimos de [Clínica] para recordarte que tienes cita mañana [día] a las [hora] con [profesional/tratamiento].

Si necesitas cambiarla, avísanos respondiendo a este mensaje y te buscamos otro hueco. ¡Te esperamos! 😊`}
          </Template>

          <H3>Recordatorio 2 horas antes</H3>
          <P>Corto y directo: hora, sitio y poco más, para evitar el olvido del mismo día.</P>
          <Template>
            {`⏰ Recordatorio: hoy a las [hora] tienes cita con [profesional] en [Clínica].

Si llegas con algo de adelanto, perfecto — si necesitas unos minutos más, avísanos por aquí. ¡Nos vemos pronto!`}
          </Template>

          <H3>Confirmación activa (pide respuesta)</H3>
          <P>
            Pide una respuesta concreta, así que el aviso se convierte en un pequeño
            compromiso y te dice con antelación qué huecos corren riesgo.
          </P>
          <Template>
            {`Hola [Nombre] 😊 Tienes cita en [Clínica] el [día] a las [hora].

¿Nos confirmas que vienes? Responde:
1️⃣ Sí, confirmo
2️⃣ Necesito cambiarla

¡Gracias!`}
          </Template>

          <H2>Cómo automatizar los recordatorios para que funcionen solos</H2>
          <P>
            Tener buenas plantillas es solo la mitad del trabajo. La otra mitad es que los
            recordatorios se envíen solos, en el momento exacto, sin que nadie de tu equipo
            tenga que acordarse de hacerlo cita tras cita. Si el envío depende de que alguien
            se siente a mandar correos o mensajes uno a uno, tarde o temprano se cuela algún
            olvido.
          </P>
          <P>
            El software de gestión habitual en clínicas ya suele traer recordatorios básicos,
            y para muchas eso cubre el aviso de 24 horas. El límite aparece con la respuesta
            del paciente: el sistema envía el mensaje, pero no la gestiona. Si el paciente
            contesta «no puedo, ¿lo movemos al jueves?», alguien tiene que leerlo y recolocar
            la cita a mano.
          </P>
          <P>
            Esa respuesta pesa mucho a la hora de{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              reducir los no-shows en una clínica dental
            </InternalLink>{" "}
            o estética: un hueco que se libera con horas de margen todavía se puede ofrecer a
            otro paciente.
          </P>
          <P>
            Automatizar significa que cada paciente recibe su recordatorio con la antelación
            adecuada por el canal adecuado: un aviso con margen (por email o WhatsApp) y una{" "}
            <InternalLink href="/blog/recordatorios-citas-whatsapp-clinica">
              confirmación cercana a la cita por WhatsApp
            </InternalLink>
            , con el tono de tu clínica. Y si el
            sistema detecta que alguien no confirma, puede activar un seguimiento adicional
            antes de que ese hueco se pierda.
          </P>
          <P>
            Así lo planteamos en los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>
            : cada aviso sale solo, por el canal que toca, sin trabajo añadido para tu equipo.
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
              Te explicamos cómo automatizar los recordatorios por el canal correcto para
              que tu agenda tenga menos huecos vacíos por pacientes que no se presentan.
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
