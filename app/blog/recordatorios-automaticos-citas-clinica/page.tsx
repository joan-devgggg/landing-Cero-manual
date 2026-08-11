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

const PATH = "/blog/recordatorios-automaticos-citas-clinica"
const TITLE = "Recordatorios automáticos de citas para clínicas | Cero Manual"
const DESCRIPTION =
  "Qué es un recordatorio automático de citas, qué canal funciona mejor, cuándo enviarlo y por qué pedir confirmación cambia el resultado en tu clínica."
const HEADLINE =
  "Recordatorios automáticos de citas: cómo reducir no-shows sin llamar uno por uno"

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
    publishedTime: "2026-06-09T00:00:00.000Z",
    modifiedTime: "2026-06-09T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Qué tasa de no-shows es normal en una clínica?",
    a: "La media del sector se mueve entre el 12% y el 19% de las citas programadas. Si estás en ese rango — o por encima — significa que cada mes estás perdiendo entre varios cientos y varios miles de euros en tiempo reservado para nadie. Es una cantidad que merece la pena recuperar, y la buena noticia es que los recordatorios automáticos la reducen de media un 40%.",
  },
  {
    q: "¿WhatsApp realmente funciona mejor que el email para recordatorios?",
    a: "Mucho mejor. Los mensajes de WhatsApp tienen una tasa de apertura del 95-98%, frente al 20-25% del email. Si tu recordatorio va por el canal equivocado, es prácticamente como si no lo hubieras enviado — solo que a ti te ha costado tiempo redactarlo y enviarlo. El canal importa tanto como el contenido del mensaje.",
  },
  {
    q: "¿Cuánto tardan en verse los resultados?",
    a: "Los primeros resultados se notan en la primera o segunda semana, en cuanto el sistema empieza a enviar recordatorios con confirmación activa. La tasa de no-shows suele bajar visiblemente en el primer mes, y el efecto acumulado — menos huecos, menos llamadas manuales — se consolida en los meses siguientes.",
  },
  {
    q: "¿Cuánto cuesta implantar un sistema de recordatorios automáticos?",
    a: "Depende del volumen de tu clínica y de cómo gestionas hoy la agenda. Lo habitual es que el ahorro en huecos vacíos cubra la inversión en pocas semanas. Por eso lo más sencillo es empezar con una auditoría gratuita que te diga, con tus propios números, cuánto podrías recuperar cada mes.",
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
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
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

export default function RecordatoriosArticlePage() {
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
            9 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Entre el 12% y el 19% de las citas que se programan en una clínica no se
            presentan. Para una clínica media, eso supone hasta 7.500€ al mes en tiempo de
            profesional y agenda reservada para nadie — dinero que ya dabas por hecho que
            iba a entrar, y que se evapora en silencio.
          </P>
          <P>
            El problema no es que los pacientes sean descuidados: es que los sistemas de
            aviso tradicionales no funcionan. Una llamada que nadie coge, un email que se
            pierde entre notificaciones, un SMS que se lee y se olvida — ninguno de esos
            canales genera el compromiso que necesitas para que alguien confirme o avise
            con tiempo si no puede venir.
          </P>
          <P>
            Los recordatorios automáticos por WhatsApp cambian esa ecuación. En este
            artículo vas a ver exactamente qué son, por qué funcionan mejor que cualquier
            otro canal, cuándo y cómo enviarlos — y cuánto puedes recuperar desde el primer
            mes sin que nadie de tu equipo tenga que hacer nada distinto cada mañana.
          </P>

          <H2>¿Qué es un recordatorio automático de citas?</H2>
          <P>
            Un recordatorio automático de citas es un mensaje — enviado por WhatsApp, SMS o
            email — que sale solo, a la hora exacta, sin que nadie de tu equipo tenga que
            acordarse de mandarlo. Lo programas una vez: qué decir, cuándo enviarlo y qué
            acción pedirle al paciente. A partir de ahí, funciona solo para cada cita del
            calendario.
          </P>
          <P>
            La diferencia con los recordatorios manuales no es solo la comodidad. Es que un
            sistema automático no se olvida, no tiene un día malo y no depende de que alguien
            tenga un momento libre entre paciente y paciente para coger el teléfono.
          </P>
          <P>
            Y lo más importante: puede pedir una respuesta activa — una confirmación, un
            «sí» o un «no puedo ese día» — que convierte un aviso pasivo en un pequeño
            compromiso real. Ese es el detalle que más impacta en la tasa de no-shows.
          </P>

          <H2>WhatsApp vs SMS vs email: qué canal funciona mejor</H2>
          <P>
            El canal que eliges para el recordatorio lo cambia todo. No porque unos mensajes
            sean más bonitos que otros, sino porque determinan si el aviso se llega a leer
            o no — y cuándo.
          </P>
          <P>
            Los datos son claros: WhatsApp tiene una tasa de apertura del 95-98%. El email,
            entre el 20-25%. El SMS se sitúa en un punto intermedio, pero cada vez se
            percibe más como spam y muchos operadores filtran los mensajes comerciales antes
            de que lleguen al destinatario.
          </P>
          <P>
            Piénsalo de esta forma: si mandas cien recordatorios por email, estadísticamente
            unos setenta y cinco no se van a abrir. Si los mandas por WhatsApp, prácticamente
            todos van a llegar, abrirse y leerse — normalmente en los primeros minutos.
          </P>
          <P>
            Eso no significa que el email o el SMS no tengan ningún papel, pero si tienes que
            elegir un solo canal para tus recordatorios de cita, que sea WhatsApp. Es donde
            tus pacientes están, es donde leen, y es donde les resulta natural contestar.
          </P>

          <H2>Cuándo enviar el recordatorio: el timing perfecto</H2>
          <P>
            Mandar el recordatorio en el momento equivocado es casi tan ineficaz como no
            mandarlo. Demasiado pronto y el paciente lo lee, lo cierra y se olvida antes
            de que llegue el día de la cita. Demasiado tarde y ya no puede reorganizarse
            aunque quiera.
          </P>
          <P>
            El timing que mejor funciona en la práctica combina dos avisos:
          </P>
          <P>
            El primero, 24 horas antes de la cita. Con un día de margen, el paciente puede
            revisar su agenda, pedir el día si trabaja, o avisarte con tiempo si finalmente
            no puede venir. Es el aviso que te da más margen para reaccionar — sea para
            confirmar el hueco o para ofrecérselo a alguien en lista de espera.
          </P>
          <P>
            El segundo, 2 horas antes. Aquí ya no hay tiempo para reorganizar el día, pero
            sí para que alguien que se había olvidado recuerde que tiene cita — y no lo
            descubra cuando ya es tarde. Muchos no-shows de última hora se evitan
            simplemente con este segundo aviso.
          </P>
          <P>
            Los dos juntos cubren tanto el olvido planificable como el descuido del día a
            día — y en conjunto reducen los no-shows hasta un 40% en clínicas que antes
            solo enviaban un aviso o no enviaban ninguno.
          </P>

          <H2>Confirmación activa vs aviso pasivo: la diferencia que lo cambia todo</H2>
          <P>
            Hay una diferencia enorme entre «te recordamos tu cita para mañana» y «confirma
            tu cita aquí, por favor». El primero es un aviso pasivo: se puede leer, procesar
            y olvidar en diez segundos sin hacer nada. El segundo pide una acción concreta
            — y eso lo cambia todo.
          </P>
          <P>
            Cuando alguien confirma activamente — con un botón, con un emoji o con un simple
            «sí» — convierte ese recordatorio en un pequeño compromiso público. Y los
            compromisos que ya has confirmado son mucho más difíciles de romper que las
            intenciones vagas.
          </P>
          <P>
            Además, la confirmación activa te da información en tiempo real: si alguien no
            contesta al primer aviso de 24 horas, ya sabes que ese hueco tiene más riesgo
            de quedar vacío — y puedes actuar antes de que ocurra. Puedes mandar el segundo
            aviso antes, ofrecer el hueco a otro paciente, o hacer una llamada rápida si
            la cita es especialmente importante.
          </P>
          <P>
            Sin confirmación activa, te enteras del no-show cuando el paciente ya no ha
            llegado. Con ella, tienes una ventana para prevenir antes de que pase.
          </P>

          <H2>Cuánto puedes recuperar desde el primer mes</H2>
          <P>
            La cuenta es sencilla de hacer con tus propios números. Si tu clínica tiene una
            tasa de no-shows del 12-19% y eso representa hasta 7.500€ al mes en ingresos
            perdidos, reducir esa tasa incluso a la mitad supone recuperar varios miles de
            euros cada mes — sin captar ni un solo paciente nuevo. Calcula tu caso con
            nuestra{" "}
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
            Clínicas que antes gestionaban los recordatorios a mano — o no los gestionaban —
            ven resultados en las primeras semanas. El sistema actúa en cada cita, todos los
            días, sin que nadie de tu equipo tenga que acordarse de nada.
          </P>
          <P>
            Y hay un segundo ahorro que no siempre se tiene en cuenta: el tiempo. Si alguien
            en tu clínica dedica una hora al día a llamar para recordar citas, eso son cinco
            horas a la semana y más de veinte al mes. Automatizado, ese tiempo vuelve a las
            personas que sí están delante, en la silla, ahora mismo.
          </P>
          <P>
            Los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas
            </InternalLink>{" "}
            no sustituyen la atención personalizada — la liberan. Tu equipo deja de hacer
            llamadas repetitivas para centrarse en lo que sí requiere un trato humano.
          </P>
          <P>
            Y ese efecto se acumula: cada mes que pasa sin cambiar nada es un mes más de
            huecos que se podrían haber llenado. El sistema no cansa, no se olvida y trabaja
            igual de bien un martes de agosto que un lunes de enero.
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
              ¿Quieres dejar de perder citas por no-shows?
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
