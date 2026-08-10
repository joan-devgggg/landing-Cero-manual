import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import BlogSource from "@/components/BlogSource"

const PATH = "/blog/software-gestion-clinica-estetica"
const TITLE = "Software de gestión para clínicas estéticas: guía completa | Cero Manual"
const DESCRIPTION =
  "¿Buscas software de gestión para tu clínica estética? Te explicamos qué necesitas realmente y cuándo tiene sentido automatizar con IA."
const HEADLINE =
  "Software de gestión para clínicas estéticas: qué necesitas y por dónde empezar"

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
    publishedTime: "2026-06-13T00:00:00.000Z",
    modifiedTime: "2026-08-11T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Necesito un software de gestión si mi clínica es pequeña?",
    a: "Sí, aunque no necesites el mismo software que una clínica grande. Incluso una agenda online básica que evite confirmaciones manuales por teléfono ya supone un ahorro de tiempo notable. La clave no es el tamaño de la clínica, sino cuánto tiempo del equipo se va en tareas repetitivas que un software podría hacer solo.",
  },
  {
    q: "¿Cuál es el software de gestión más importante para empezar?",
    a: "Si solo puedes empezar por uno, que sea un sistema de agenda y citas online. Es la base sobre la que luego se conecta todo lo demás — recordatorios, CRM, automatización — y es lo que más impacto tiene de forma inmediata en reducir llamadas y no-shows. Además es la capa más barata y la más rápida de poner en marcha: herramientas ligeras como Booksy o Treatwell se configuran en días, y plataformas más completas como Flowww o Koibox incluyen la agenda dentro del paquete. Lo que no conviene es empezar por el CRM sin tener la agenda ordenada, porque acabas con una base de datos que nadie actualiza.",
  },
  {
    q: "¿Cuántas herramientas distintas necesita una clínica estética?",
    a: "Menos de las que parece. Muchas clínicas acaban pagando por 4 o 5 herramientas que se solapan entre sí porque cada una se fue añadiendo para resolver un problema puntual. Lo ideal es partir de una base (agenda + CRM) y añadir automatización encima, en lugar de sumar aplicaciones sueltas que no se hablan entre ellas.",
  },
  {
    q: "¿Cuándo sé que mi clínica ya está lista para automatizar con IA?",
    a: "Cuando el cuello de botella ya no es la falta de herramientas, sino la falta de tiempo del equipo para usarlas. Si la agenda y el CRM están en orden pero siguen perdiéndose consultas fuera de horario o el equipo no llega a hacer seguimiento de pacientes inactivos, ese es el momento de añadir un agente con IA que se encargue de esas tareas.",
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
  datePublished: "2026-06-13",
  dateModified: "2026-08-11",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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

export default function SoftwareGestionClinicaEsteticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
            13 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            Si has buscado alguna vez "software para clínica estética", sabes lo que viene
            después: decenas de plataformas, todas prometiendo gestionarlo todo, con
            nombres que se parecen entre sí y planes de precios que cambian según a quién
            le preguntes. El mercado está saturado, y eso no ayuda a decidir.
          </P>
          <P>
            Lo que ocurre en la práctica es que muchas clínicas acaban con dos, tres o
            cuatro herramientas distintas, cada una contratada para resolver un problema
            puntual, y terminan pagando por funciones que apenas usan o que se solapan
            entre sí.
          </P>
          <P>
            En este artículo vas a ver qué tipos de software existen realmente para una
            clínica estética, qué diferencia hay entre ellos, los errores más habituales al
            elegir, qué funcionalidades son imprescindibles y cuáles no, y en qué momento
            tiene sentido dar el salto a la automatización con inteligencia artificial.
          </P>

          <H2>Qué tipos de software necesita una clínica estética</H2>
          <P>
            Una clínica estética necesita software de tres tipos: gestión de citas, CRM o
            ficha de paciente, y automatización. No hacen falta los tres desde el primer
            día, pero sí conviene saber que son capas distintas antes de contratar nada.
          </P>
          <P>
            El primero es la gestión de citas y agenda: el calendario donde se organiza el
            día a día, las salas, los profesionales y los tratamientos. Es la capa que casi
            ninguna clínica puede saltarse.
          </P>
          <P>
            El segundo bloque es el CRM, o gestión de pacientes: el histórico de cada
            persona, sus tratamientos, sus datos de contacto y, en muchos casos, la
            facturación y los consentimientos informados.
          </P>
          <P>
            El tercer bloque, más reciente, es la automatización: herramientas que se
            encargan de tareas que antes hacía una persona — enviar recordatorios,
            responder mensajes, hacer seguimiento de pacientes — sin que nadie tenga que
            ejecutarlas manualmente cada vez.
          </P>
          <P>
            En el mercado español estas capas no siempre vienen separadas: plataformas como
            Flowww o Koibox integran agenda y ficha de paciente en una sola herramienta,
            mientras que opciones más ligeras como Booksy o Treatwell cubren sobre todo la
            reserva online. Lo importante no es el nombre, sino saber qué capa estás
            comprando.
          </P>

          <H2>Software de citas vs CRM vs automatización: las diferencias clave</H2>
          <P>
            La diferencia clave es la pregunta que responde cada uno: el software de citas
            responde "¿qué hay que hacer hoy y a qué hora", el CRM responde "¿quién es este
            paciente y qué sabemos de él", y la automatización responde "¿quién se encarga
            de esto si no hay nadie disponible". Se confunden porque, vistos desde fuera,
            los tres "organizan" algo — pero cada uno resuelve un problema distinto.
          </P>
          <P>
            El software de citas gestiona el calendario y la disponibilidad: salas,
            profesionales, duración de cada tratamiento.
          </P>
          <P>
            El CRM responde a "¿quién es este paciente y qué sabemos de él": guarda el
            historial, las preferencias, los tratamientos anteriores y permite segmentar —
            por ejemplo, para saber quién no ha vuelto en seis meses.
          </P>
          <P>
            La automatización responde a "¿quién se encarga de esto si no hay nadie
            disponible": son los procesos que se ejecutan solos — un recordatorio que sale
            24 horas antes de la cita, un mensaje de bienvenida fuera de horario, un
            seguimiento automático a un paciente inactivo. Las tres capas se complementan,
            pero no son intercambiables.
          </P>

          <BlogTable
            headers={[
              "Tipo",
              "Pregunta que responde",
              "Qué NO hace",
              "Ejemplo de herramienta",
            ]}
            rows={[
              [
                "Software de citas y agenda",
                "«¿Qué hay que hacer hoy y a qué hora?»",
                "No sabe quién dejó de venir ni por qué",
                "Booksy, Treatwell",
              ],
              [
                "CRM o ficha de paciente",
                "«¿Quién es este paciente y qué sabemos de él?»",
                "Guarda el dato, pero no contacta a nadie por su cuenta",
                "Flowww, Koibox",
              ],
              [
                "Automatización con IA",
                "«¿Quién se encarga de esto si no hay nadie disponible?»",
                "No sustituye a la agenda ni a la ficha: se apoya en ellas",
                "Agente de WhatsApp conectado a tu calendario",
              ],
            ]}
          />

          <H2>Los errores más comunes al elegir software para tu clínica</H2>
          <P>
            Los tres errores más comunes son elegir por lista de funciones en lugar de por
            problema, ignorar cuánto cuesta poner la herramienta en marcha, y acumular
            aplicaciones sin revisar las que ya se tienen. Los tres acaban en lo mismo:
            pagar por software que nadie usa del todo.
          </P>
          <P>
            El más frecuente es el primero. Una plataforma puede tener decenas de
            funcionalidades y, aun así, no resolver el problema concreto que tiene tu
            clínica — por ejemplo, los huecos de agenda de última hora.
          </P>
          <P>
            El segundo error es no tener en cuenta cuánto tiempo cuesta poner en marcha
            una herramienta. Un software muy completo que nadie en el equipo llega a
            configurar bien acaba siendo, en la práctica, peor que uno más sencillo que sí
            se usa al 100%.
          </P>
          <P>
            Y el tercer error, muy habitual, es acumular herramientas sin revisar las que
            ya se tienen. Buena parte de las consultas de una clínica llega fuera del
            horario de atención, y muchas clínicas contratan una nueva herramienta para
            ese problema sin haber aprovechado lo que ya tenían configurado en la que
            usaban antes.
          </P>

          <H2>Qué funcionalidades son imprescindibles y cuáles opcionales</H2>
          <P>
            Imprescindibles son cuatro: agenda online con disponibilidad en tiempo real,
            recordatorios automáticos de citas, ficha de paciente con historial de
            tratamientos y un canal de comunicación centralizado — normalmente WhatsApp, por
            su tasa de apertura del 95-98%. Todo lo demás es opcional hasta que esas cuatro
            estén resueltas.
          </P>
          <BlogSource>
            tasas de apertura de referencia del sector para WhatsApp y email marketing.
          </BlogSource>
          <P>
            Por otro lado, hay funcionalidades que son interesantes pero no urgentes al
            principio: informes avanzados de facturación, integraciones con marketing,
            programas de fidelización con puntos, o gestión de stock de productos. No
            está mal tenerlas, pero no deberían ser el criterio principal de decisión si
            todavía no tienes resueltas las básicas.
          </P>
          <P>
            Un buen filtro es preguntarte: si esta funcionalidad desapareciera mañana,
            ¿se notaría en la facturación de la clínica? Si la respuesta es sí, es
            imprescindible. Si la respuesta es "sería cómodo, pero no pasaría nada", es
            opcional.
          </P>

          <H2>Cuándo añadir automatización con IA a tu stack</H2>
          <P>
            Tiene sentido añadirla cuando ya tienes la agenda y la ficha de paciente
            organizadas pero sigues perdiendo oportunidades por falta de tiempo del equipo,
            no por falta de herramientas. La automatización con IA no sustituye a la agenda
            ni al CRM — se construye encima de ellos, así que llega tarde si la base todavía
            está a medias.
          </P>
          <P>
            El ejemplo más claro es el de los mensajes fuera de horario. Si un lead no
            recibe respuesta en los primeros 5 minutos, la probabilidad de perderlo puede
            llegar al 80%.
          </P>
          <BlogSource>MIT Lead Response Management Study</BlogSource>
          <P>
            Y con un valor medio por paciente (LTV) de alrededor de 3.000€ en clínica
            estética, cada consulta que se queda sin respuesta tiene un coste real y
            medible: no hacen falta muchas al mes para que la cuenta salga.
          </P>
          <BlogSource>SEME (Sociedad Española de Medicina Estética)</BlogSource>
          <P>
            En ese punto, un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp con IA
            </InternalLink>{" "}
            puede responder al instante, resolver las preguntas más frecuentes y agendar
            citas directamente sobre tu calendario, conectándose con el software que ya
            usas en lugar de sustituirlo.
          </P>

          <H2>Cómo elegir sin que sea un quebradero de cabeza</H2>
          <P>
            Se elige empezando por el final: define primero qué problema quieres resolver —
            agenda desorganizada, no-shows, mensajes sin responder, pacientes que no vuelven
            — y busca después la herramienta que resuelve ese problema concreto. Ese orden
            te ahorra el 90% de las demos, porque descarta de entrada casi todo el mercado.
          </P>
          <P>
            El resto es no dejarse llevar por la lista completa de funciones: casi todas las
            plataformas del sector prometen lo mismo en su web, y la diferencia real está en
            lo que tu equipo va a usar cada día.
          </P>
          <P>
            Después, prioriza la base: agenda y CRM bien configurados son el cimiento
            sobre el que se apoya todo lo demás, incluida la automatización. Una vez esa
            base está sólida, añadir{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              automatización con IA
            </InternalLink>{" "}
            es el paso natural para cubrir lo que el equipo, por tiempo, no llega a
            cubrir.
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
              ¿Tu clínica tiene la base lista para automatizar?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos cómo un{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp con IA
              </InternalLink>{" "}
              puede responder al instante, agendar citas y conectarse con el software que
              ya usa tu clínica, sin añadir una herramienta más al caos.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero automatizar mi clínica →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
