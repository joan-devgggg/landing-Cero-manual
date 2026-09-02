import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/agenda-clinica-estetica-online"
const DATES = articleDates("agenda-clinica-estetica-online")
const TITLE = "Agenda online para centros de estética | Cero Manual"
const DESCRIPTION =
  "Una agenda online bien gestionada llena tu centro de estética y reduce los huecos vacíos. Te explicamos cómo organizarla para que funcione sola. Pruébala ya."
const HEADLINE =
  "Agenda online para clínicas estéticas: cómo gestionarla sin que sea un caos"

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
    q: "¿Qué tasa de no-shows es normal en una clínica estética?",
    a: "La media del sector se mueve entre el 12% y el 19% de las citas programadas. Para una clínica media, eso puede suponer hasta 7.500€ al mes en huecos de agenda que se quedan vacíos. Una agenda online bien gestionada, con confirmaciones y recordatorios automáticos, reduce esa cifra hasta un 40%.",
  },
  {
    q: "¿Necesito un software complicado para tener una agenda online?",
    a: "No. Lo importante no es la cantidad de funciones que tenga, sino que cubra tres cosas: que el paciente pueda reservar o confirmar sin llamar, que se envíen recordatorios automáticos y que tengas una lista de espera activa. Muchas clínicas empiezan con herramientas sencillas y solo añaden funciones cuando realmente las necesitan.",
  },
  {
    q: "¿Cómo evito que se acumulen huecos sin cubrir cuando alguien cancela?",
    a: "Con una lista de espera. En cuanto se libera un hueco, el sistema avisa automáticamente a los pacientes que están esperando una cita antes, por orden de prioridad. Así, en lugar de perder ese espacio, lo cubres en minutos sin que nadie de tu equipo tenga que hacer llamadas.",
  },
  {
    q: "¿Cuánto tiempo se tarda en organizar la agenda de esta forma?",
    a: "La configuración inicial — recordatorios, confirmaciones y lista de espera — suele estar lista en pocos días. A partir de ahí, el sistema funciona solo: cada cita nueva entra ya con su recordatorio programado y su protocolo de confirmación, sin que tengas que repetir el proceso manualmente cada vez.",
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

export default function AgendaClinicaEsteticaOnlinePage() {
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
            La agenda es el corazón de cualquier clínica estética: ahí se decide cuántos
            tratamientos haces al día, cuánto facturas al mes y cuánto tiempo libre — o de
            estrés — tiene tu equipo. Y sin embargo, en muchas clínicas se gestiona a base
            de llamadas, mensajes sueltos de WhatsApp y un cuaderno o una hoja de cálculo
            que nadie termina de tener al día.
          </P>
          <P>
            El resultado son huecos que se quedan vacíos sin que nadie se dé cuenta hasta
            que es tarde, dobles reservas, pacientes que se olvidan de su cita y un equipo
            que pasa media mañana al teléfono en lugar de atendiendo en cabina.
          </P>
          <P>
            En este artículo vas a ver por qué la agenda merece tanta atención, los errores
            más habituales que la convierten en un caos, y cómo automatizar confirmaciones,
            recordatorios y listas de espera para que esté siempre llena sin que tengas que
            estar pendiente de ella todo el día.
          </P>

          <H2>Por qué la agenda es el centro de tu negocio</H2>
          <P>
            Todo lo que pasa en una clínica estética pasa, antes o después, por la agenda.
            Es donde se traduce el interés de un lead en una visita real, donde se organiza
            el día de cada profesional y donde se ve, de un vistazo, si la clínica está
            funcionando a pleno rendimiento o si hay huecos que se están desperdiciando.
          </P>
          <P>
            Cuando la agenda está bien gestionada, cada hora de cabina tiene un paciente
            asignado, los huecos que se liberan se cubren rápido y el equipo sabe en todo
            momento qué va a pasar ese día. Cuando no lo está, pasa justo lo contrario: hay
            horas muertas que nadie ocupa, citas que se solapan y un nivel de incertidumbre
            que acaba afectando también a la atención al paciente.
          </P>
          <P>
            Por eso la agenda no es solo una herramienta administrativa. Es, en la práctica,
            el indicador más fiable de cómo le está yendo a tu clínica — y uno de los
            primeros sitios donde merece la pena poner orden.
          </P>

          <H2>Los errores más comunes en la gestión de agenda</H2>
          <P>
            Hay un puñado de errores que se repiten en la mayoría de clínicas que gestionan
            su agenda de forma manual, y casi todos tienen el mismo origen: depender de que
            alguien se acuerde de hacer algo en el momento justo.
          </P>
          <P>
            El más frecuente es no confirmar las citas con antelación. Sin un recordatorio
            que pida una respuesta activa, una parte de los pacientes simplemente no
            aparece — y ese hueco, normalmente, ya no se puede recuperar para ese día.
          </P>
          <P>
            El segundo es no tener un protocolo claro para los huecos que se liberan por
            cancelación. Si nadie revisa la agenda con frecuencia, esos huecos se quedan
            vacíos aunque haya pacientes que estarían encantados de adelantar su cita.
          </P>
          <P>
            Y el tercero es repartir la información entre demasiados canales: una agenda en
            papel, otra en el ordenador de recepción y conversaciones de WhatsApp que nadie
            traslada al calendario. Cuando la información está repartida, los errores —
            dobles reservas, citas duplicadas, horas mal apuntadas — son cuestión de tiempo.
          </P>

          <H2>Cómo automatizar confirmaciones y recordatorios</H2>
          <P>
            La forma más eficaz de evitar huecos vacíos es dejar de depender de que alguien
            recuerde enviar un mensaje. Un sistema de recordatorios automáticos envía un
            aviso a cada paciente — normalmente 24 horas antes y de nuevo 2 horas antes de
            la cita — sin que nadie de tu equipo tenga que hacer nada.
          </P>
          <P>
            La clave está en pedir una confirmación activa: no basta con «te recordamos tu
            cita», sino con un mensaje que pida un «sí» o un «no puedo, quiero cambiarla».
            Esa pequeña diferencia es la que más impacta en la tasa de no-shows, porque
            convierte un aviso que se puede ignorar en un compromiso explícito.
          </P>
          <P>
            Las clínicas que implementan este tipo de{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>{" "}
            ven reducciones de hasta un 40% en sus no-shows desde el primer mes — sin
            cambiar nada más en su forma de trabajar.
          </P>

          <H2>Lista de espera para no perder ningún hueco</H2>
          <P>
            Por muy bien que confirmes las citas, siempre va a haber cancelaciones de
            última hora. La diferencia entre una clínica que pierde ese hueco y una que lo
            recupera está en si tiene o no una lista de espera activa.
          </P>
          <P>
            Una lista de espera bien gestionada funciona así: cuando un paciente cancela,
            el sistema avisa automáticamente a quienes habían pedido una cita más temprana
            — por orden de prioridad — y el primero que confirma se queda con el hueco. Todo
            esto puede pasar en cuestión de minutos, sin que nadie tenga que llamar a nadie.
          </P>
          <P>
            El efecto es doble: el paciente que estaba esperando consigue su cita antes, y
            tu clínica no pierde ni un hueco de cabina. Es una de las formas más sencillas
            de aumentar la facturación sin necesidad de captar ni un solo paciente nuevo.
          </P>

          <H2>Cómo tener la agenda siempre llena sin esfuerzo</H2>
          <P>
            Cuando combinas confirmaciones automáticas, recordatorios con respuesta activa
            y una lista de espera que se activa sola, la agenda deja de ser algo que hay que
            vigilar constantemente y se convierte en un sistema que se autogestiona.
          </P>
          <P>
            Cada cita que entra ya lleva incorporado su propio protocolo: se confirma sola,
            recuerda sola y, si se cancela, busca sola quién puede ocuparla. Tu equipo deja
            de pasar tiempo al teléfono reorganizando el día y puede dedicarse a lo que de
            verdad aporta valor: la atención al paciente que tiene delante.
          </P>
          <P>
            Si tu clínica tiene una tasa de no-shows del 12-19% y eso representa hasta
            7.500€ al mes en ingresos perdidos, automatizar este proceso con{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas
            </InternalLink>{" "}
            suele ser una de las inversiones que antes se recupera — porque actúa
            directamente sobre el dinero que ya estabas dejando escapar cada mes.
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
              ¿Quieres que tu agenda funcione sola?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántos huecos se te están escapando
              cada mes — y cómo los{" "}
              <InternalLink href="/recordatorios-automaticos-citas">
                recordatorios automáticos para clínicas
              </InternalLink>{" "}
              pueden mantener tu agenda llena desde la primera semana.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero llenar mi agenda →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
