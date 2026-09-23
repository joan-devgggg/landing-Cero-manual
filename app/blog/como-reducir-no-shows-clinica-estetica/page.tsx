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

const PATH = "/blog/como-reducir-no-shows-clinica-estetica"
const DATES = articleDates("como-reducir-no-shows-clinica-estetica")
const TITLE = "Cómo reducir no-shows en tu clínica estética | Cero Manual"
const DESCRIPTION =
  "Cómo reducir los no-shows de tu clínica estética con recordatorios automáticos y confirmación activa por WhatsApp. Pide tu auditoría gratuita."
const ARTICLE_DESCRIPTION =
  "Cómo reducir los no-shows en una clínica estética: cuánto cuestan con tus propios números, por qué ocurren y cómo funciona la confirmación activa por WhatsApp."
const HEADLINE = "Cómo reducir los no-shows en tu clínica estética y dejar de perder ingresos"

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
    q: "¿Cuánto dinero pierde realmente una clínica estética por los no-shows?",
    a: "Depende del ticket medio y del volumen de citas de cada clínica, así que lo mejor es calcularlo con tus datos: citas al mes × tu tasa de no-shows × tu ticket medio. Eso es lo que se va en huecos que no se llenan a tiempo. A eso hay que sumarle el coste de oportunidad: ese hueco podría haberse ofrecido a otro paciente que sí quería venir.",
  },
  {
    q: "¿Por qué los pacientes de estética no avisan cuando no van a venir?",
    a: "Lo más habitual es el olvido: la cita se reservó hace semanas y no ha vuelto a aparecer en su cabeza hasta que ya es tarde. También influye que cancelar suele requerir llamar por teléfono, algo que mucha gente evita por pereza o por no «molestar», así que no aparecen sin avisar.",
  },
  {
    q: "¿Es suficiente con enviar un SMS o un email de recordatorio?",
    a: "No suele bastar. Los SMS y los emails se pierden con facilidad entre notificaciones y promociones y, sobre todo, no generan ninguna acción — el paciente los lee (o no) y no hay forma sencilla de confirmar o cancelar desde ahí. WhatsApp, en cambio, es donde el paciente ya conversa cada día y permite responder con un simple mensaje, lo que convierte el recordatorio en una confirmación activa.",
  },
  {
    q: "¿Qué es la confirmación activa y cómo reduce las ausencias?",
    a: "La confirmación activa consiste en pedirle al paciente que responda al recordatorio — con un «sí», un «no puedo» o un botón — en lugar de enviarle un aviso que puede leer y olvidar. Ese pequeño gesto convierte la cita en un compromiso y, sobre todo, te avisa con antelación: si alguien cancela o no contesta, sabes que ese hueco está en riesgo y tienes tiempo para ofrecérselo a otro paciente.",
  },
  {
    q: "¿Cuánto tiempo tarda en notarse la reducción de no-shows?",
    a: "Se nota en cuanto los recordatorios automáticos por WhatsApp con confirmación empiezan a funcionar, porque los huecos que antes se quedaban vacíos sin previo aviso pasan a liberarse con antelación suficiente para ofrecerlos a otro paciente. Para medirlo, apunta tu tasa de no-shows del mes anterior a activarlos y compárala con la de los meses siguientes.",
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

export default function ComoReducirNoShowsClinicaEsteticaArticlePage() {
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
            Para reducir los no-shows en tu clínica estética, envía un recordatorio
            automático por WhatsApp que pida confirmación activa: que el paciente responda
            que sí viene o avise con tiempo si no puede. Así sabes qué citas están en riesgo
            y puedes ofrecer el hueco a otro paciente antes de que se quede vacío.
          </P>
          <P>
            En una clínica estética cada hueco vacío pesa, porque el ticket medio suele ser
            alto y cada sesión — un tratamiento facial, depilación láser, medicina estética —
            bloquea tiempo de cabina y de profesional.
          </P>

          <H2>¿Cuánto te cuesta un no-show en una clínica estética?</H2>
          <P>
            No hay una tasa de no-shows que valga para todas las clínicas estéticas:
            depende del tipo de tratamiento, de con cuánta antelación se reserva y de cómo
            se recuerda la cita. Lo que sí se repite es que, sin nadie que pida
            confirmación, una parte de quienes tienen cita no se presenta ni avisa.
          </P>
          <P>
            La cuenta de lo que te cuesta es directa: citas al mes × tu tasa de no-shows ×
            tu ticket medio. Con tratamientos de precio alto, unos pocos huecos a la semana
            ya suman una cantidad seria a final de mes. Y eso sin contar el tiempo del
            personal que queda bloqueado esperando a un paciente que nunca llega, ni la
            oportunidad perdida de haber dado ese hueco a{" "}
            <InternalLink href="/blog/reducir-lista-espera-clinica-estetica">
              otra persona en lista de espera
            </InternalLink>
            .
          </P>
          <P>
            Si prefieres no hacer la cuenta a mano, prueba nuestra{" "}
            <InternalLink href="/calculadora-no-shows">
              calculadora de pérdidas por no-shows
            </InternalLink>{" "}
            con tu ticket medio y tu volumen de citas.
          </P>

          <H2>Por qué los pacientes de estética no avisan cuando no van a venir</H2>
          <P>
            La causa más habitual es el olvido. Muchas citas de estética se reservan con
            semanas de antelación, y para cuando llega el día, entre el trabajo y la rutina,
            esa cita ha quedado enterrada en el calendario.
          </P>
          <P>
            A esto se suma otro factor:{" "}
            <InternalLink href="/blog/como-reducir-cancelaciones-clinica-estetica">
              cancelar suele requerir llamar por teléfono
            </InternalLink>{" "}
            o
            escribir un mensaje explicando por qué no van a poder venir, algo que mucha
            gente prefiere evitar. Es más fácil no aparecer que tener esa conversación.
          </P>

          <H2>La solución: confirmación activa por WhatsApp</H2>
          <H3>Por qué un recordatorio pasivo no basta</H3>
          <P>
            Es habitual que la clínica ya avise de alguna forma: una llamada el día antes, un
            SMS, un mensaje de «te recordamos tu cita». El problema es que ninguno de estos
            avisos pide nada. La llamada que nadie coge se queda en una llamada perdida, y
            el mensaje se lee y se olvida.
          </P>
          <P>
            Sin una respuesta del paciente, la clínica no tiene ninguna señal de alerta: no
            sabe si esa cita está en riesgo hasta que la hora ha pasado y la silla sigue
            vacía. En cambio, cuando se pide respuesta, el silencio también informa. Si
            alguien no contesta al primer recordatorio, esa falta de respuesta ya es una
            alerta, y llega con tiempo para actuar.
          </P>
          <P>
            Por eso funciona pedir una confirmación activa: que el propio paciente responda
            diciendo que sí va a venir, o que avise con tiempo si no puede.
          </P>
          <P>
            WhatsApp es el canal que mejor encaja para esto. Es la
            aplicación en la que tus pacientes ya conversan cada día, así que el aviso no
            se queda enterrado como pasa a menudo con{" "}
            <InternalLink href="/blog/emails-recordatorio-pacientes-clinica">
              los SMS o los emails
            </InternalLink>
            . Y al ser un canal
            conversacional, responder es tan fácil como escribir «sí» o «no puedo» — sin
            tener que llamar ni rellenar nada. En{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>{" "}
            puedes ver cómo funciona este sistema aplicado a una clínica.
          </P>

          <H2>Cómo implementar recordatorios automáticos en tu clínica</H2>
          <P>
            Un sistema conectado al
            número de WhatsApp Business de tu clínica{" "}
            <InternalLink href="/blog/recordatorios-citas-whatsapp-clinica">
              envía automáticamente un recordatorio por WhatsApp
            </InternalLink>{" "}
            un día o dos antes de la cita, pidiendo confirmación. Si el
            paciente confirma, no hace falta hacer nada más. Si avisa de que no puede
            venir, ese hueco queda libre con tiempo suficiente para ofrecerlo a otro
            paciente — por ejemplo, a alguien en lista de espera.
          </P>
          <P>
            Una secuencia que funciona bien: un mensaje de confirmación entre
            48 y 24 horas antes de la cita, un segundo recordatorio unas 2 horas antes para
            los olvidos de última hora y, si el paciente cancela, un aviso automático a la
            lista de espera para ofrecer ese hueco.
          </P>
          <P>
            Si el paciente no responde al primero, ese segundo recordatorio reduce el riesgo
            de que la cita se quede en el limbo. Todo esto ocurre sin que nadie del equipo tenga que
            estar pendiente de enviar mensajes uno a uno. Puedes ver el detalle de cómo
            se configura en{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas
            </InternalLink>
            .
          </P>

          <H2>Cuánto puedes recuperar</H2>
          <P>
            Lo que recuperas depende de dos datos que solo tienes tú: cuántos no-shows
            tienes hoy y cuántos siguen produciéndose una vez activados los recordatorios.
            La diferencia entre ambos, multiplicada por tu ticket medio, es lo que vuelve a
            entrar cada mes.
          </P>
          <P>
            Para verlo claro, anota tu tasa de no-shows antes de empezar y compárala con la
            de los meses siguientes. Cada cita que se mantiene o se rellena a tiempo es
            facturación que antes se perdía, sin captar a ningún paciente nuevo.
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
              ¿Quieres dejar de perder ingresos por citas a las que nadie viene?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te ayudamos a montar un sistema de recordatorios automáticos por WhatsApp
              con confirmación activa, para que los huecos vacíos se reduzcan desde el
              primer mes sin añadir trabajo a tu equipo.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero reducir mis no-shows →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
