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
    a: "Lo que pasa antes y después del tratamiento. Una primera respuesta lenta o confusa puede hacer que alguien ni siquiera llegue a la cita, y un seguimiento ausente después de la visita hace que la relación se enfríe rápido. Los momentos de «entrada» y «salida» son los que más se descuidan y los que más impacto tienen.",
  },
  {
    q: "¿Cómo se automatiza la experiencia del paciente sin que suene artificial?",
    a: "Se automatiza lo repetitivo — confirmaciones, recordatorios, mensajes de seguimiento — manteniendo un tono cercano y personalizado, con el nombre del paciente y referencias a su tratamiento concreto. Bien hecho, el paciente nota que la clínica se ha acordado de él en el momento adecuado. Si en esa conversación interviene un asistente con IA, se identifica como tal, como exige el Reglamento europeo de IA.",
  },
  {
    q: "¿Merece la pena invertir en esto si mi clínica ya tiene buena reputación?",
    a: "Sí, precisamente porque cuesta mucho menos cuidar a un paciente que ya confía en ti que conseguir uno nuevo. Un cliente recurrente vuelve muchas veces a lo largo de su relación con el centro. Mejorar la experiencia es la forma de proteger esos ingresos.",
  },
  {
    q: "¿Cómo mejorar la atención al cliente sin contratar más personal?",
    a: "Gran parte del trabajo de atención en una clínica estética es repetitivo: responder las mismas preguntas sobre precios y disponibilidad, confirmar citas, escribir después del tratamiento. Si esas tareas las resuelve un sistema por WhatsApp a cualquier hora, el equipo puede centrarse en los pacientes que tiene delante, sin que las consultas online se queden esperando. Las conversaciones que necesitan un trato más cercano se derivan a una persona.",
  },
  {
    q: "¿Por dónde empiezo si la atención de mi clínica está desorganizada?",
    a: "Por los dos momentos donde más pacientes se pierden: el primer mensaje y el después de la cita. Empezar por dar respuesta inmediata a las consultas y por enviar un mensaje de seguimiento tras cada visita ya se nota mucho, sin necesidad de cambiar todo el sistema de golpe. Con eso funcionando, es más fácil ir cuidando el resto de la experiencia.",
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
            11 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            La experiencia del paciente en una clínica estética se mejora cuidando lo que rodea
            al tratamiento: una respuesta rápida y clara al primer mensaje, una cita en la que
            se le recibe por su nombre y sabe cuánto va a esperar, y un seguimiento después de
            la visita. Lo repetitivo de esos momentos, como confirmaciones, recordatorios y
            mensajes de seguimiento, se puede automatizar por WhatsApp, y el equipo se queda
            con lo que requiere trato humano.
          </P>
          <P>
            Muchas clínicas ofrecen un servicio excelente puertas adentro y, sin embargo,
            pierden pacientes por lo que pasa fuera de esa sala: una respuesta tardía o un
            silencio total después de la visita.
          </P>

          <H2>Por qué la atención al cliente es tu mayor ventaja competitiva</H2>
          <P>
            En el sector estético, la mayoría de clínicas ofrecen tratamientos muy
            parecidos, con tecnología y resultados comparables. A ojos del paciente, lo que
            de verdad diferencia a una clínica de otra es cómo le atienden: si le responden
            rápido y si nota que alguien se preocupa por él.
          </P>
          <P>
            Cuando esa atención falla, el paciente no suele quejarse: escribe a otra clínica
            y no vuelve a aparecer.
          </P>

          <H2>Los momentos clave en la experiencia del paciente</H2>
          <P>
            La experiencia de un paciente es una secuencia: el
            primer contacto, la espera hasta la cita, la cita en sí, y todo lo que ocurre
            después. Cada uno de estos tramos deja una impresión, y todas se suman para
            formar la opinión final que esa persona tiene de tu clínica, la que decide si
            vuelve o si te{" "}
            <InternalLink href="/blog/como-conseguir-resenas-google-clinica-estetica">
              deja una reseña en Google
            </InternalLink>
            .
          </P>
          <P>
            Los tramos que menos atención reciben suelen ser el «antes» y el «después»; el
            tratamiento en sí suele estar muy cuidado.
          </P>

          <H2>Antes de la cita: la primera impresión</H2>
          <P>
            La primera impresión se forma en el primer mensaje: cómo de rápido se responde y
            si la información es clara o genera más dudas de las que resuelve. Todo eso ocurre antes de que la persona
            haya pisado la clínica, y ya está decidiendo si esta es la opción adecuada.
          </P>
          <P>
            Los pacientes potenciales también escriben fuera del horario de atención. Si las consultas que llegan fuera de él se
            quedan sin respuesta hasta el día siguiente, la primera impresión que se lleva
            esa persona es la de una clínica que tarda en contestar.
          </P>
          <P>
            La reserva también cuenta. Si para pedir cita hay que llamar en horario de
            oficina o esperar a que alguien lea el mensaje, muchos pacientes abandonan por
            el camino. Por eso cada vez más clínicas{" "}
            <InternalLink href="/blog/clinica-estetica-por-whatsapp">
              atienden a sus pacientes por WhatsApp
            </InternalLink>{" "}
            con un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            que responde al momento y deja la cita reservada.
          </P>

          <H2>Durante la cita: el momento que más recuerdan</H2>
          <P>
            Una vez en la clínica, lo que más se recuerda es cómo se sintió la persona: si la
            recibieron por su nombre y si alguien le explicó con calma lo que iba a pasar.
          </P>
          <P>
            La espera también cuenta. Una sala de espera ordenada, con información clara
            sobre cuánto va a tardar, transmite organización — algo que, sin decirlo
            explícitamente, también dice mucho sobre la calidad del tratamiento que va a
            recibir a continuación.
          </P>

          <H2>Después de la cita: el seguimiento que nadie hace</H2>
          <P>
            En muchas clínicas, después de la cita el contacto simplemente se corta. Nadie
            pregunta cómo ha ido ni recuerda la siguiente revisión, justo cuando el paciente
            todavía tiene la experiencia fresca.
          </P>
          <P>
            Y ese seguimiento tiene mucho valor, porque{" "}
            <InternalLink href="/blog/como-fidelizar-pacientes-clinica-estetica">
              un cliente recurrente en una clínica estética
            </InternalLink>{" "}
            vuelve muchas veces a lo largo de su relación con el centro. Un simple mensaje preguntando cómo se siente, o recordando la próxima
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
            Gran parte de esto se puede automatizar sin que suene
            a plantilla.{" "}
            <InternalLink href="/blog/emails-recordatorio-pacientes-clinica">
              Confirmaciones de cita, recordatorios
            </InternalLink>
            , mensajes de seguimiento después del
            tratamiento — todo esto puede enviarse de forma automática, en el momento
            adecuado, con el nombre del paciente y referencias a su tratamiento concreto.
          </P>
          <P>
            El canal natural para esto es WhatsApp, porque es donde el paciente ya habla con
            su clínica: ese seguimiento que normalmente no se hace por falta de tiempo le
            llega en la misma conversación en la que pidió la cita. El equipo sigue dedicando su
            tiempo a lo que de verdad requiere su atención, mientras el sistema se encarga
            de que ningún paciente se sienta olvidado. Y cuando una consulta es compleja o
            emocional, el sistema la deriva a una persona del equipo, sin que el paciente
            tenga que repetir nada. En{" "}
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
