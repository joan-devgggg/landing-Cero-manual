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

const PATH = "/blog/experiencia-paciente-clinica-estetica"
const DATES = articleDates("experiencia-paciente-clinica-estetica")
const TITLE = "Experiencia del paciente en clínica estética | Cero Manual"
const DESCRIPTION =
  "La experiencia del paciente decide si vuelve o no. Te explicamos cómo mejorarla en cada punto de contacto sin cargar de trabajo al equipo. Descubre cómo."
const HEADLINE = "Cómo mejorar la experiencia del paciente en tu clínica estética (y que vuelvan solos)"

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
    q: "¿Por qué la experiencia del paciente es tan importante si el tratamiento sale bien?",
    a: "Porque un buen resultado clínico no garantiza que el paciente vuelva. La decisión de repetir en la misma clínica depende también de cómo se sintió en cada contacto: si fue fácil reservar, si le respondieron rápido, si la espera fue agradable, si alguien se acordó de preguntarle cómo le había ido después. El tratamiento es lo que justifica la visita, pero la experiencia es lo que decide si hay una segunda.",
  },
  {
    q: "¿Cuál es el momento que más influye en si un paciente vuelve?",
    a: "Sorprendentemente, no suele ser el tratamiento en sí — sino lo que pasa antes y después. Una primera respuesta lenta o confusa puede hacer que alguien ni siquiera llegue a la cita, y un seguimiento ausente después de la visita hace que la relación se enfríe rápido. Los momentos de «entrada» y «salida» son los que más se descuidan y los que más impacto tienen.",
  },
  {
    q: "¿Cómo se automatiza la experiencia del paciente sin que se note artificial?",
    a: "La clave está en automatizar lo repetitivo — confirmaciones, recordatorios, mensajes de seguimiento — pero mantener el tono cercano y personalizado, con el nombre del paciente y referencias a su tratamiento concreto. Bien hecho, el paciente no percibe que es un sistema automático: solo nota que la clínica se ha acordado de él en el momento adecuado.",
  },
  {
    q: "¿Merece la pena invertir en esto si mi clínica ya tiene buena reputación?",
    a: "Sí, precisamente porque cuesta mucho menos cuidar a un paciente que ya confía en ti que conseguir uno nuevo. El valor de un cliente recurrente en una clínica estética puede rondar los 3.000€ a lo largo de su relación con el centro. Mejorar la experiencia no es un gesto bonito — es la forma más rentable de proteger esos ingresos.",
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

export default function ExperienciaPacienteArticlePage() {
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
            Cuando se piensa en mejorar una clínica estética, lo primero que suele venir a
            la cabeza es el tratamiento: la técnica, los resultados, la formación del
            equipo médico. Y es importante, sin duda. Pero la experiencia del paciente
            empieza mucho antes de que se siente en la camilla — empieza en el primer
            mensaje que escribe preguntando por precios, y no termina cuando sale por la
            puerta.
          </P>
          <P>
            Muchas clínicas ofrecen un servicio excelente puertas adentro y, sin embargo,
            pierden pacientes por lo que pasa fuera de esa sala: una respuesta tardía, una
            espera incómoda, un silencio total después de la visita. Son detalles que no
            afectan al resultado clínico, pero que afectan — y mucho — a si esa persona
            vuelve o no.
          </P>
          <P>
            En este artículo vamos a repasar los momentos clave de la experiencia del
            paciente, qué pasa antes de la cita, durante y después, y cómo se puede mejorar
            cada uno de ellos sin añadir más carga de trabajo al equipo — automatizando lo
            que se puede automatizar y dejando el toque humano donde realmente importa.
          </P>

          <H2>Los momentos clave en la experiencia del paciente</H2>
          <P>
            La experiencia de un paciente no es un único momento, sino una secuencia: el
            primer contacto, la espera hasta la cita, la cita en sí, y todo lo que ocurre
            después. Cada uno de estos tramos deja una impresión, y todas se suman para
            formar la opinión final que esa persona tiene de tu clínica — la que decide si
            vuelve, si recomienda o si simplemente no vuelve a pensar en ti.
          </P>
          <P>
            Lo interesante es que los tramos que menos atención reciben suelen ser los que
            más pesan: el «antes» y el «después». El tratamiento en sí está, casi siempre,
            muy cuidado. Lo que rodea al tratamiento, no tanto.
          </P>

          <H2>Antes de la cita: la primera impresión</H2>
          <P>
            La primera impresión no se forma en la sala de espera — se forma en el primer
            mensaje. Cómo de rápido se responde, qué tono se usa, si la información es clara
            o genera más dudas de las que resuelve. Todo eso ocurre antes de que la persona
            haya pisado la clínica, y ya está decidiendo si esta es la opción adecuada.
          </P>
          <P>
            Aquí hay un dato que conviene tener en cuenta: hasta un 40% de las consultas de
            pacientes potenciales llegan fuera del horario de atención. Si esas consultas se
            quedan sin respuesta hasta el día siguiente, la primera impresión que se lleva
            esa persona es la de una clínica que tarda en contestar — y eso, antes incluso
            de haber puesto un pie dentro, ya genera dudas.
          </P>

          <H2>Durante la cita: el momento que más recuerdan</H2>
          <P>
            Una vez en la clínica, lo que más se recuerda no suele ser un detalle técnico,
            sino cómo se sintió la persona: si la recibieron por su nombre, si supieron a
            qué hora le tocaba sin tener que preguntar, si alguien le explicó con calma lo
            que iba a pasar. Son detalles pequeños, pero son los que se quedan.
          </P>
          <P>
            La espera también cuenta. Una sala de espera ordenada, con información clara
            sobre cuánto va a tardar, transmite organización — algo que, sin decirlo
            explícitamente, también dice mucho sobre la calidad del tratamiento que va a
            recibir a continuación.
          </P>

          <H2>Después de la cita: el seguimiento que nadie hace</H2>
          <P>
            Aquí está, probablemente, la mayor oportunidad perdida en la mayoría de
            clínicas. Después de la cita, el contacto simplemente se corta. Nadie pregunta
            cómo ha ido, nadie recuerda la siguiente revisión, nadie aprovecha ese momento —
            cuando el paciente todavía tiene la experiencia fresca — para reforzar la
            relación.
          </P>
          <P>
            Y ese seguimiento tiene un valor enorme: el de un cliente recurrente en una
            clínica estética puede rondar los 3.000€ a lo largo de su relación con el
            centro. Un simple mensaje preguntando cómo se siente, o recordando la próxima
            revisión, puede ser la diferencia entre que esa relación continúe o se apague
            sin que nadie se dé cuenta. Si quieres ver cómo recuperar a pacientes con los
            que ya se ha perdido ese contacto, en{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            te explicamos cómo hacerlo.
          </P>

          <H2>Cómo automatizar la experiencia sin perder el toque humano</H2>
          <P>
            La buena noticia es que gran parte de esto se puede automatizar sin que se
            note. Confirmaciones de cita, recordatorios, mensajes de seguimiento después del
            tratamiento — todo esto puede enviarse de forma automática, en el momento
            adecuado, con el nombre del paciente y referencias a su tratamiento concreto.
          </P>
          <P>
            El canal que mejor funciona para esto es WhatsApp: los mensajes se leen entre un
            95% y un 98% de las veces, lo que significa que ese seguimiento que normalmente
            no se hace por falta de tiempo, llega — y se lee. El equipo sigue dedicando su
            tiempo a lo que de verdad requiere su atención, mientras el sistema se encarga
            de que ningún paciente se sienta olvidado. En{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            puedes ver cómo aplicarlo en tu clínica.
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
              ¿Quieres que ningún paciente se sienta olvidado después de su cita?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te ayudamos a montar un sistema de seguimiento automático por WhatsApp que
              cuida la experiencia de tus pacientes antes y después de cada cita — sin
              añadir trabajo extra a tu equipo.
            </p>
            <Link
              href="/reactivacion-pacientes-inactivos"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero mejorar la experiencia de mis pacientes →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
