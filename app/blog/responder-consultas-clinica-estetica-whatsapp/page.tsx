import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"

const PATH = "/blog/responder-consultas-clinica-estetica-whatsapp"
const TITLE =
  "Cómo responder consultas de tu clínica estética por WhatsApp más rápido | Cero Manual"
const DESCRIPTION =
  "El 80% de los leads se pierden si no respondes en 5 minutos. Te explicamos cómo responder consultas de tu clínica estética por WhatsApp más rápido."
const HEADLINE =
  "Cómo responder las consultas de tu clínica estética por WhatsApp más rápido (y no perder ni un lead)"

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
    publishedTime: "2026-06-14T00:00:00.000Z",
    modifiedTime: "2026-06-14T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Cuánto tiempo tengo para responder antes de perder un lead?",
    a: "Los estudios apuntan a cinco minutos como el umbral crítico: un lead que no recibe respuesta en ese tiempo tiene hasta un 80% de probabilidades de no convertirse. Más allá de los datos, la lógica es simple — quien escribe para preguntar por un tratamiento está en ese momento decidido a dar el paso. Si no recibe respuesta rápida, sigue buscando y encuentra otra clínica que sí contesta.",
  },
  {
    q: "¿Las respuestas automáticas suenan artificiales o robóticas?",
    a: "Depende de cómo estén configuradas. Una respuesta automática genérica («Gracias por tu mensaje, te contestaremos pronto») suena a contestador. Un sistema bien configurado con el tono, la información y los casos reales de tu clínica suena como tu recepción — cercano, concreto y útil. La mayoría de pacientes no distingue si hay una persona al otro lado, y a los que sí lo notan no les importa porque han recibido lo que necesitaban.",
  },
  {
    q: "¿Puedo automatizar solo fuera de horario y responder yo durante el día?",
    a: "Sí, y es una configuración habitual. El sistema puede estar activo las 24 horas pero ceder el control a tu equipo durante el horario de atención, o al revés — actuar solo en las franjas en que no hay nadie disponible. Lo que importa es que no haya ningún momento del día en que un mensaje se quede sin respuesta.",
  },
  {
    q: "¿Cuánto tarda en configurarse una primera respuesta automática?",
    a: "Días, no semanas. Se entrena con la información que ya tienes — tratamientos, precios, horarios, preguntas frecuentes — y se conecta al número de WhatsApp Business que ya usas. No hace falta cambiar de herramientas ni migrar nada. En poco tiempo está respondiendo por ti, también de madrugada.",
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
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
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

export default function ResponderConsultasWhatsappPage() {
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
            14 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            En una clínica estética, la velocidad de respuesta no es un detalle de atención
            al cliente — es el factor que más influye en si un lead se convierte en cita o
            desaparece para siempre. El 80% de los leads se pierden si no reciben respuesta
            en cinco minutos. No porque el servicio no les interese, sino porque en ese tiempo
            ya han encontrado otra clínica que sí les contestó.
          </P>
          <P>
            WhatsApp es el canal donde esto se juega. Entre el 95% y el 98% de los mensajes
            que llegan por WhatsApp se leen — mucho más que cualquier email. Pero esa apertura
            también crea una expectativa de respuesta inmediata que la gestión manual no puede
            cumplir siempre, sobre todo cuando el equipo está ocupado o es fuera de horario.
          </P>
          <P>
            En este artículo vas a ver por qué la velocidad importa tanto, qué errores
            ralentizan tu respuesta sin que te des cuenta, cómo mejorarla sin aumentar
            plantilla y cuándo tiene sentido automatizar la primera respuesta para no perder
            ningún lead.
          </P>

          <H2>Por qué la velocidad de respuesta importa tanto en clínicas estéticas</H2>
          <P>
            Quien escribe por WhatsApp para preguntar por un tratamiento está en un momento
            de decisión activa. No está investigando para dentro de tres meses — está
            considerando dar el paso ahora. Si no recibe respuesta en minutos, ese impulso
            se enfría y la persona sigue buscando. En ese margen, la clínica que contesta
            primero se lleva la cita.
          </P>
          <P>
            A esto se suma que el 40% de las consultas llegan fuera del horario de atención —
            por la tarde, por la noche, en fin de semana. Son exactamente las franjas en que
            nadie del equipo está mirando el móvil. Sin un sistema que responda en esas horas,
            casi la mitad del tráfico de WhatsApp queda sin atender hasta el día siguiente,
            cuando el interés ya ha bajado o la persona ya ha reservado en otro sitio.
          </P>
          <P>
            La velocidad no solo afecta a la conversión — también afecta a la percepción de
            la clínica. Una respuesta rápida transmite profesionalidad y confianza antes
            incluso de que el paciente haya pisado la clínica.
          </P>

          <H2>Los errores que ralentizan tu respuesta por WhatsApp</H2>
          <P>
            El más frecuente es no tener claro quién es responsable del canal en cada
            momento. Si "todos" se encargan del WhatsApp, en la práctica nadie lo hace con
            prioridad — y los mensajes esperan hasta que alguien tiene un hueco entre
            pacientes.
          </P>
          <P>
            El segundo es responder cada consulta desde cero. Si las mismas preguntas —
            precios, disponibilidad, duración de tratamientos — se responden escribiendo
            cada vez, el tiempo se multiplica. WhatsApp Business permite configurar
            respuestas rápidas para los mensajes más habituales, pero hay que hacerlo.
          </P>
          <P>
            El tercero es no tener ningún sistema para los mensajes fuera de horario.
            Sin un mensaje automático que informe de cuándo se responderá o que recoja
            los datos del interesado, esos leads simplemente se enfrían en la bandeja de
            entrada hasta que alguien los ve por la mañana.
          </P>

          <H2>Cómo responder más rápido sin más personal</H2>
          <P>
            El primer paso es crear un banco de respuestas estándar para las consultas que
            más se repiten: precios orientativos por tratamiento, cómo se pide cita, qué
            incluye la primera visita, cuánto dura cada sesión. Con esas respuestas listas,
            el tiempo de respuesta baja de minutos a segundos.
          </P>
          <P>
            El segundo es usar las respuestas rápidas de WhatsApp Business: con una barra
            inclinada y una palabra clave, cualquier miembro del equipo puede enviar la
            respuesta adecuada sin escribir nada. Pequeño cambio, gran impacto en el tiempo
            de gestión diario.
          </P>
          <P>
            El tercero, y el que marca la diferencia real, es automatizar la primera
            respuesta para que ningún mensaje espere más de unos segundos — aunque sea
            fuera de horario y no haya nadie disponible. Ahí es donde entra la{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              automatización con un chatbot de WhatsApp para clínicas estéticas
            </InternalLink>
            .
          </P>

          <H2>Respuestas automáticas vs respuestas manuales: cuándo usar cada una</H2>
          <P>
            Las respuestas manuales tienen sentido cuando la consulta es compleja, delicada
            o requiere juicio humano: una reclamación, una situación médica específica, una
            negociación de precio. En esos casos, una persona del equipo tiene que intervenir
            sí o sí — y cuanto antes, mejor.
          </P>
          <P>
            Las respuestas automáticas funcionan mejor para todo lo demás: preguntas sobre
            precios, disponibilidad, tratamientos estándar, horarios, cómo llegar a la
            clínica. Ese tipo de consulta representa la gran mayoría del tráfico de WhatsApp
            en una clínica estética, y resolverlas automáticamente libera al equipo para lo
            que realmente necesita atención personal.
          </P>
          <P>
            La combinación óptima no es elegir entre uno u otro — es usar la automatización
            para la primera respuesta y para todo lo rutinario, y reservar la intervención
            humana para los momentos en que realmente añade valor.
          </P>

          <H2>Cómo automatizar la primera respuesta para no perder ningún lead</H2>
          <P>
            La primera respuesta es la más crítica: es la que decide si el lead sigue en la
            conversación o se va a buscar otra clínica. Automatizarla no significa poner un
            mensaje genérico de «gracias por escribirnos» — significa responder con
            información concreta, en el tono de tu clínica, en segundos, sea la hora que sea.
          </P>
          <P>
            Un{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp bien configurado para tu clínica estética
            </InternalLink>{" "}
            puede responder a la primera pregunta del paciente, ofrecer información sobre el
            tratamiento que le interesa, recoger sus datos y, cuando está decidido, ofrecerle
            un hueco real en tu agenda — todo sin que nadie del equipo haya tenido que
            intervenir. Y cuando hace falta una persona, avisa con todo el contexto ya
            recogido para que no haya que empezar desde cero.
          </P>
          <P>
            El resultado: ningún mensaje sin respuesta, ningún lead perdido por llegar fuera
            de horario, y un equipo que puede concentrarse en la atención directa al paciente
            en lugar de gestionar el móvil.
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
              ¿Tu clínica sigue perdiendo leads por no responder a tiempo?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Descubre cómo un chatbot de WhatsApp responde cada consulta en segundos,
              también fuera de horario — para que ningún lead se enfríe mientras espera
              que alguien de tu equipo tenga un momento.
            </p>
            <Link
              href="/blog/chatbot-whatsapp-para-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo funciona el chatbot →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
