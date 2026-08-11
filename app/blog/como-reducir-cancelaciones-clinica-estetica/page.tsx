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

const PATH = "/blog/como-reducir-cancelaciones-clinica-estetica"
const TITLE = "Cómo reducir cancelaciones de última hora en tu clínica estética | Cero Manual"
const DESCRIPTION =
  "Las cancelaciones de última hora vacían tu agenda y no dan tiempo a rellenar el hueco. Te explicamos cómo reducirlas sin llamar a cada paciente."
const HEADLINE = "Cómo reducir las cancelaciones de última hora en tu clínica estética"

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
    q: "¿Cuál es la diferencia entre un no-show y una cancelación de última hora?",
    a: "Un no-show es cuando el paciente sencillamente no aparece sin avisar — el hueco queda inutilizable porque nadie puede reservarlo. Una cancelación de última hora (menos de 2-4 horas antes) es técnicamente mejor, porque al menos hay tiempo teórico para rellenar la cita, pero en la práctica es igual de dañina: con tan poco margen, la probabilidad de cubrir ese hueco es mínima. Ambas situaciones provocan la misma pérdida de ingresos y de tiempo del profesional.",
  },
  {
    q: "¿Con cuánta antelación debo enviar la confirmación de cita?",
    a: "Lo más efectivo es un sistema de dos pasos: un primer mensaje 48 horas antes que pide confirmación activa (el paciente responde 'sí' o 'no'), y un segundo recordatorio 2 horas antes solo para los que han confirmado. El mensaje de 48 horas es el que genera la mayoría de las cancelaciones con tiempo suficiente para actuar. Si envías solo uno el día anterior, ya no hay margen para reaccionar.",
  },
  {
    q: "¿Cómo funciona una lista de espera para clínicas?",
    a: "Una lista de espera es un registro de pacientes que quieren un tratamiento antes de la primera cita disponible. Cuando hay una cancelación, el sistema notifica automáticamente a los primeros de la lista por WhatsApp con el hueco disponible y la opción de reservarlo con un clic. Sin lista de espera, una cancelación con 24 horas de antelación supone un hueco vacío. Con lista de espera, ese mismo hueco se rellena en minutos.",
  },
  {
    q: "¿Puedo cobrar por cancelaciones de última hora sin perder pacientes?",
    a: "Sí, siempre que la política esté comunicada antes de la reserva, no después. El error habitual es intentar aplicar la política en el momento de la cancelación — ahí sí genera conflicto. Si el paciente sabe desde el primer momento que una cancelación con menos de 24 horas tiene un coste parcial, lo acepta como parte del servicio. La clave es la transparencia previa, no la dureza en el momento.",
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

export default function CancelacionesArticlePage() {
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
            Entre el 12% y el 19% de las citas de una clínica estética no se presentan o se
            cancelan sin margen para reaccionar. El impacto económico es directo: cada hueco
            vacío en la agenda es tiempo del profesional que no genera ingresos, con un coste
            que puede llegar a los 7.500€ al mes en clínicas con volumen medio. Y a diferencia
            de los no-shows, las cancelaciones de última hora tienen algo especialmente frustrante:
            el paciente avisó, pero demasiado tarde para hacer algo. Descubre cuánto te
            está costando con nuestra{" "}
            <Link
              href="/calculadora-no-shows"
              className="underline font-semibold"
              style={{ color: "#7D9B76" }}
            >
              calculadora de pérdidas por no-shows
            </Link>
            .
          </P>
          <P>
            La mayor parte de esas cancelaciones no son malintencionadas. Son el resultado de
            que la clínica no ha creado las condiciones para que el paciente confirme a tiempo,
            no tiene un sistema para cubrir los huecos rápido, y no ha comunicado una política
            de cancelación clara desde el principio.
          </P>
          <P>
            En este artículo vas a ver por qué se producen las cancelaciones de última hora,
            en qué se diferencian de los no-shows, cómo actuar en ambos casos, cómo aprovechar
            una cancelación para generar una cita nueva, y cómo establecer una política de
            cancelación que los pacientes acepten sin conflicto.
          </P>

          <H2>Por qué se cancelan las citas de última hora</H2>
          <P>
            La mayoría de las cancelaciones de última hora tienen un origen común: el paciente
            no recibió una confirmación activa con tiempo suficiente para organizarse. Cuando
            una cita se reserva con semanas de antelación y no hay ningún recordatorio intermedio,
            es fácil que un imprevisto del día empuje al paciente a cancelar por WhatsApp esa
            misma mañana — porque es lo más cómodo y porque no tiene ningún incentivo para
            avisar antes.
          </P>
          <P>
            Hay también un componente de percepción: muchos pacientes no son conscientes de
            que una cancelación con menos de 24 horas tiene el mismo impacto económico para
            la clínica que un no-show. Para ellos, cancelar es mejor que no aparecer — y tienen
            razón en términos de cortesía, pero no en términos de gestión de agenda.
          </P>
          <P>
            Un tercer factor es la ausencia de fricción en el proceso de cancelación. Si cancelar
            es tan fácil como enviar un mensaje de WhatsApp en cualquier momento, el paciente
            lo hará cuando le surja el problema, no cuando le sea conveniente para la clínica.
            Un sistema de confirmación activa obliga a tomar esa decisión 48 horas antes — cuando
            todavía hay tiempo para reaccionar.
          </P>

          <H2>La diferencia entre una cancelación y un no-show</H2>
          <P>
            Un no-show es cuando el paciente no aparece sin ningún aviso previo. La clínica
            descubre el hueco cuando el tiempo de la cita ya ha pasado — sin posibilidad de
            haberlo rellenado. Una cancelación, aunque sea de última hora, implica al menos
            que hubo comunicación.
          </P>
          <P>
            Desde el punto de vista de la gestión de agenda, la diferencia práctica es pequeña
            si la cancelación llega con menos de 2 horas de antelación: tampoco hay tiempo real
            para actuar. Pero si la cancelación llega con 24-48 horas de margen, la situación
            es completamente diferente — ese hueco puede rellenarse con pacientes de lista de
            espera o con pacientes a los que se les ofreció adelantar su cita.
          </P>
          <P>
            El objetivo no es solo reducir el número de cancelaciones: es adelantar el momento
            en que se producen. Una cancelación con 48 horas de antelación es una oportunidad.
            Una cancelación con 2 horas de antelación es una pérdida. La confirmación activa
            es la herramienta que convierte unas en otras.
          </P>

          <H2>Cómo reducir cancelaciones con confirmación activa</H2>
          <P>
            Un recordatorio pasivo — «te recordamos tu cita mañana a las 11» — informa, pero
            no genera ninguna acción. Una confirmación activa pide una respuesta explícita: el
            paciente tiene que confirmar o cancelar. Ese pequeño cambio tiene un impacto enorme
            en la tasa de cancelaciones de última hora.
          </P>
          <P>
            El momento óptimo para enviar la confirmación activa es 48 horas antes de la cita.
            A esa distancia, el paciente todavía puede reorganizarse si tiene un problema, y
            la clínica tiene tiempo suficiente para reaccionar si cancela. El canal más efectivo
            es WhatsApp: los mensajes de WhatsApp tienen una tasa de apertura del 95-98%,
            frente al 20-25% del email — lo que garantiza que el mensaje llega y se lee.
          </P>
          <P>
            El mensaje debe ser breve, personal y con una llamada a la acción clara. No hace
            falta explicar nada: «¿Confirmas tu cita del jueves a las 11? Responde SÍ para
            confirmar o NO si necesitas cambiarla». Cuanto más fácil sea confirmar, mayor es
            la tasa de respuesta — y cuanto antes cancelen, más tiempo tiene la clínica para
            actuar.
          </P>
          <P>
            Los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>{" "}
            implementados correctamente reducen las cancelaciones de última hora hasta un 40%
            desde el primer mes, sin que el equipo tenga que hacer ninguna llamada ni enviar
            mensajes manualmente.
          </P>

          <H2>Lista de espera: convierte una cancelación en una cita nueva</H2>
          <P>
            Una lista de espera bien gestionada convierte cada cancelación en una oportunidad
            en lugar de en una pérdida. El concepto es simple: cuando un paciente cancela, el
            sistema notifica automáticamente a los primeros pacientes de la lista que hay un
            hueco disponible — con la fecha, la hora y un enlace para reservarlo directamente.
          </P>
          <P>
            Para que funcione, la lista de espera tiene que estar siempre activa y actualizada.
            Eso significa que en cada interacción — cuando un paciente pregunta por un tratamiento
            y no hay disponibilidad, cuando alguien quiere adelantar su cita — se ofrezca la
            opción de entrar en la lista. Con WhatsApp como canal de notificación, el tiempo
            entre la cancelación y la nueva reserva puede ser de minutos.
          </P>
          <P>
            El resultado es que la tasa de huecos vacíos baja drásticamente, incluso en clínicas
            con alta demanda y lista de espera activa. Cada cancelación deja de ser una pérdida
            para convertirse en una redistribución de agenda.
          </P>

          <H2>Política de cancelación: cómo comunicarla sin perder pacientes</H2>
          <P>
            Una política de cancelación solo funciona si el paciente la conoce antes de reservar,
            no cuando intenta cancelar. El error más habitual es no tener ninguna política comunicada
            y luego intentar aplicarla reactivamente cuando el daño ya está hecho — lo que genera
            conflicto y mala experiencia.
          </P>
          <P>
            La política debe comunicarse en el momento de la reserva, de forma clara y sin
            tecnicismos: «Las cancelaciones con menos de 24 horas de antelación tienen un coste
            de X€ para cubrir el tiempo reservado». La mayoría de los pacientes lo entienden
            y lo aceptan si lo saben desde el principio — es exactamente como funciona en un
            hotel, un vuelo o una consulta médica privada.
          </P>

          <H3>Cómo establecer el plazo y el importe</H3>
          <P>
            El plazo más habitual en clínicas estéticas es 24 horas, aunque algunas trabajan
            con 48 horas para tratamientos de mayor duración o coste. El importe no tiene que
            cubrir el 100% del tratamiento — incluso un coste simbólico de 10-15€ reduce
            significativamente las cancelaciones impulsivas, porque convierte la decisión de
            cancelar en algo con consecuencias reales.
          </P>
          <P>
            La política de cancelación no está reñida con la flexibilidad. Se puede establecer
            una distinción entre imprevistos documentados (enfermedad, emergencia) y cancelaciones
            sin justificación — lo que muestra empatía sin abrir la puerta a que cualquier excusa
            sea válida.
          </P>
          <P>
            Combinada con un sistema de{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos
            </InternalLink>{" "}
            que genera confirmaciones activas 48 horas antes, una política de cancelación clara
            crea el entorno para que los huecos de última hora sean la excepción, no la norma.
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
              ¿Sigues rellenando huecos a mano cuando alguien cancela?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Los{" "}
              <InternalLink href="/recordatorios-automaticos-citas">
                recordatorios automáticos de citas
              </InternalLink>{" "}
              envían la confirmación 48 horas antes y activan la lista de espera en el momento
              de la cancelación — sin que el equipo tenga que intervenir.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo funcionan los recordatorios →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
