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

const PATH = "/blog/como-gestionar-ausencias-clinica-estetica"
const TITLE = "Cómo gestionar las ausencias en tu clínica estética sin perder ingresos | Cero Manual"
const DESCRIPTION =
  "Las ausencias vacían tu agenda y bloquean huecos que nadie ocupa. Te explicamos cómo gestionarlas para no perder ni un euro de ingresos."
const HEADLINE =
  "Cómo gestionar las ausencias en tu clínica estética sin perder ingresos"

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
    publishedTime: "2026-06-10T00:00:00.000Z",
    modifiedTime: "2026-06-10T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Cuál es la diferencia entre una ausencia y una cancelación?",
    a: "Una cancelación es cuando el paciente avisa con tiempo de que no va a poder venir, lo que te permite ofrecer ese hueco a otra persona. Una ausencia (o no-show) es cuando simplemente no aparece, sin avisar. La cancelación te da margen para reaccionar; la ausencia no — el hueco se queda vacío y ya no hay forma de recuperarlo ese día. Por eso las ausencias son, con diferencia, el problema más caro de gestionar.",
  },
  {
    q: "¿Cuánto puede llegar a costar una ausencia a mi clínica?",
    a: "Entre el 12% y el 19% de las citas programadas terminan en ausencia. Para una clínica estética media, eso puede suponer hasta 7.500€ al mes en tiempo de profesional y agenda reservada para nadie. No es solo el precio del tratamiento que no se ha hecho: es también el tiempo del especialista, el espacio de la sala y la oportunidad de haber dado ese hueco a otro paciente.",
  },
  {
    q: "¿Qué es la confirmación activa y cómo reduce las ausencias?",
    a: "La confirmación activa consiste en pedirle al paciente que responda al recordatorio — con un «sí», un emoji o un botón — en lugar de enviarle un aviso pasivo que puede leer y olvidar. Ese pequeño gesto convierte la cita en un compromiso real y te avisa con antelación si alguien no va a venir, para que puedas actuar. De media, reduce las ausencias hasta un 40%.",
  },
  {
    q: "¿Cómo funciona una lista de espera automatizada?",
    a: "Cuando se libera un hueco — por una cancelación o porque alguien no confirma — el sistema avisa automáticamente por WhatsApp a los pacientes que estaban esperando una cita antes, ofreciéndoles ese hueco. El primero que confirma se queda con la cita. Así, en lugar de perder ese tiempo, lo recuperas casi al instante sin que nadie de tu equipo tenga que hacer llamadas.",
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
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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

export default function AusenciasArticlePage() {
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
            10 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            No es lo mismo una cancelación que una ausencia. Cuando un paciente cancela
            con tiempo, todavía puedes hacer algo: ofrecer ese hueco a otra persona,
            reorganizar la agenda, recolocar al profesional. Cuando simplemente no
            aparece — sin avisar — ese hueco se queda vacío para siempre. Nadie lo ocupa,
            nadie lo paga, y el tiempo del profesional se esfuma.
          </P>
          <P>
            Las ausencias son, de lejos, el problema más caro de gestionar en una clínica
            estética. No hacen ruido, no generan una queja ni una incidencia — solo
            agujeros silenciosos en la agenda que, sumados a final de mes, representan
            una cantidad de dinero que sorprende a la mayoría de clínicas cuando la
            calculan por primera vez.
          </P>
          <P>
            En este artículo vas a ver cuánto te cuesta realmente cada ausencia, por qué
            los métodos tradicionales para evitarlas no funcionan, y qué puedes hacer —
            con confirmación activa y listas de espera automatizadas — para recuperar
            ese dinero sin añadir trabajo a tu equipo.
          </P>

          <H2>¿Cuánto te cuesta realmente una ausencia?</H2>
          <P>
            Entre el 12% y el 19% de las citas programadas en una clínica estética
            terminan en ausencia. Puede parecer un porcentaje pequeño, pero piénsalo en
            términos de agenda real: si tu clínica tiene cien citas a la semana, eso son
            entre doce y diecinueve huecos que se quedan completamente vacíos, cada
            semana, sin excepción.
          </P>
          <P>
            Cada uno de esos huecos tiene un coste directo — el precio del tratamiento
            que no se ha realizado — pero también un coste indirecto que casi nunca se
            tiene en cuenta: el tiempo del profesional reservado para nada, la sala
            ocupada sin uso, y la oportunidad perdida de haber dado esa cita a otro
            paciente que sí la habría aprovechado.
          </P>
          <P>
            Sumando todo eso, una clínica estética media puede estar perdiendo hasta
            7.500€ al mes solo por ausencias. No por falta de pacientes, ni por mala
            fama, ni por precios poco competitivos — sino por huecos en la agenda que
            nadie ocupa porque nadie se entera a tiempo de que están libres. Averigua
            cuánto supone en tu clínica con nuestra{" "}
            <Link
              href="/calculadora-no-shows"
              className="underline font-semibold"
              style={{ color: "#7D9B76" }}
            >
              calculadora de pérdidas por no-shows
            </Link>
            .
          </P>

          <H2>Por qué los métodos tradicionales no funcionan</H2>
          <P>
            La mayoría de clínicas intenta resolver esto con llamadas de recordatorio,
            SMS o, como mucho, un mensaje de WhatsApp escrito a mano el día antes. El
            problema no es la intención — es que ninguno de estos métodos pide nada al
            paciente.
          </P>
          <P>
            Una llamada que nadie coge se queda en una notificación de llamada perdida.
            Un SMS se lee, si se lee, y se cierra sin más. Un mensaje de «te recordamos tu
            cita para mañana» es un aviso pasivo: se puede ignorar sin ninguna
            consecuencia inmediata, y el paciente lo sabe, aunque sea de forma
            inconsciente.
          </P>
          <P>
            El resultado es que el equipo dedica tiempo — a veces horas a la semana — a
            mandar avisos que no cambian el comportamiento de nadie. Y cuando alguien no
            va a venir, la clínica no se entera hasta que ya es demasiado tarde para
            hacer nada con ese hueco.
          </P>

          <H3>El problema de fondo: nadie se compromete</H3>
          <P>
            Sin una respuesta del paciente, la clínica no tiene ninguna señal de alerta.
            No sabe si esa cita está en riesgo hasta que la hora ha pasado y la silla
            sigue vacía. Para evitar esto, el aviso tiene que dejar de ser informativo y
            convertirse en algo a lo que el paciente tenga que responder.
          </P>

          <H2>Confirmación activa: la clave para reducir ausencias</H2>
          <P>
            La confirmación activa cambia por completo la dinámica. En lugar de mandar
            un aviso que se puede ignorar, se le pide al paciente que confirme su cita —
            con un simple «sí», un emoji o un botón. Ese pequeño gesto convierte un
            recordatorio pasivo en un compromiso activo, y los compromisos activos son
            mucho más difíciles de romper.
          </P>
          <P>
            El canal importa tanto como el mensaje. Los mensajes de WhatsApp tienen una
            tasa de apertura del 95-98%, frente al 20-25% del email. Si el recordatorio
            llega por el canal equivocado, ni siquiera se va a leer — y entonces da igual
            lo bien que esté redactado.
          </P>
          <P>
            Cuando un paciente confirma, sabes que esa cita va a celebrarse. Y cuando
            alguien no responde al primer recordatorio, ya tienes una señal de alerta
            con tiempo de sobra para actuar — antes de que el hueco se pierda. Este
            cambio, por sí solo, reduce las ausencias hasta un 40% en clínicas que antes
            no pedían confirmación de ningún tipo.
          </P>
          <P>
            Si quieres ver cómo funciona en la práctica, te lo explicamos con detalle en
            nuestra guía sobre{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas
            </InternalLink>
            .
          </P>

          <H2>Lista de espera: convierte una ausencia en una cita nueva</H2>
          <P>
            La confirmación activa te dice, con antelación, qué huecos están en riesgo.
            Pero saberlo no es suficiente si no tienes forma de llenarlos rápido. Ahí
            entra la lista de espera automatizada.
          </P>
          <P>
            Funciona así: cuando se libera un hueco — porque alguien cancela o no
            confirma su cita — el sistema avisa automáticamente, por WhatsApp, a los
            pacientes que estaban esperando una cita antes de la fecha que tenían
            asignada. El primero que responde y confirma se queda con el hueco.
          </P>
          <P>
            Sin esto, una ausencia es una pérdida total: el hueco desaparece y no vuelve.
            Con la lista de espera, esa misma ausencia se convierte en una oportunidad —
            otro paciente consigue una cita antes de lo previsto, y tu agenda no pierde
            ni un hueco. Todo esto ocurre en minutos, sin que nadie de tu equipo tenga
            que hacer una sola llamada.
          </P>

          <H2>Cómo automatizar la gestión de ausencias paso a paso</H2>
          <P>
            Poner esto en marcha no requiere cambiar de software de agenda ni meses de
            implementación. Es cuestión de añadir tres piezas que trabajan juntas:
          </P>
          <P>
            <strong>1. Recordatorio 24 horas antes, con confirmación activa.</strong> El
            paciente recibe un mensaje por WhatsApp pidiéndole que confirme su cita. Si
            confirma, perfecto. Si no responde, ya sabes que ese hueco tiene riesgo.
          </P>
          <P>
            <strong>2. Recordatorio 2 horas antes.</strong> Para los olvidos de última
            hora — el segundo aviso recoge a quienes simplemente se han despistado, sin
            necesidad de que nadie llame.
          </P>
          <P>
            <strong>3. Lista de espera activada automáticamente.</strong> En cuanto un
            hueco queda libre — por cancelación o por falta de confirmación — el sistema
            avisa a los pacientes en espera y ofrece la cita al primero que confirme.
          </P>
          <P>
            Las tres piezas funcionan solas, todos los días, en cada cita de tu agenda.
            Si quieres ver cuánto podrías recuperar con tus propios números, en{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas
            </InternalLink>{" "}
            te lo calculamos sin compromiso.
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
              ¿Quieres dejar de perder ingresos por ausencias?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántas citas estás perdiendo al mes
              — y cómo los{" "}
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
