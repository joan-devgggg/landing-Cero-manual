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

const PATH = "/blog/que-es-un-agente-de-voz-ia-para-clinicas"
const DATES = articleDates("que-es-un-agente-de-voz-ia-para-clinicas")
const TITLE = "Agente de voz IA para clínicas: guía completa | Cero Manual"
const DESCRIPTION =
  "Un agente de voz con IA contesta cada llamada de tu clínica, agenda citas y resuelve dudas, incluso a las 3 de la mañana. Descubre cómo funciona."
const HEADLINE = "Qué es un agente de voz con IA y cómo puede transformar tu clínica"

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
    q: "¿Un agente de voz con IA suena robótico o como una máquina?",
    a: "No, si está bien configurado. Se entrena con la información real de tu clínica — horarios, servicios, tratamientos, tono — y mantiene una conversación natural, no un menú de opciones tipo «pulse 1 para citas». La mayoría de pacientes no notan que están hablando con un sistema: solo notan que, por fin, alguien contesta al teléfono.",
  },
  {
    q: "¿Tengo que cambiar el número de teléfono de mi clínica?",
    a: "No. El agente se conecta al número que ya tienes, así que para tus pacientes no cambia absolutamente nada: siguen llamando donde siempre, al mismo teléfono de siempre. Lo único que cambia es que, esta vez, la llamada se contesta — también a las tres de la mañana.",
  },
  {
    q: "¿Puede agendar la cita durante la llamada, o solo toma el recado?",
    a: "Puede agendarla durante la propia llamada. No se queda en un «le llamamos para confirmar»: la persona cuelga con la cita ya puesta, en un hueco que estaba libre, sin que nadie de tu equipo tenga que devolverle la llamada.",
  },
  {
    q: "¿Qué pasa si la llamada es complicada, urgente o necesita a una persona del equipo?",
    a: "El agente está pensado precisamente para reconocer esos casos. Si detecta que la llamada requiere atención humana — por su complejidad, su tono o su urgencia —, la transfiere o deja recogido todo el contexto, para que quien la retome sepa exactamente de qué se trata sin tener que empezar de cero.",
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

export default function AgenteVozArticlePage() {
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
            Agentes de voz IA
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
            7 de junio de 2026 · 8 min de lectura
          </p>

          {/* Intro */}
          <P>
            Mucha gente llama a su clínica cuando puede, no cuando la clínica está abierta:
            al salir del trabajo, por la noche o en fin de semana. Son
            personas que han decidido, justo en ese momento, pedir cita — y se encuentran
            con un tono de llamada que nadie va a coger.
          </P>
          <P>
            Y no hace falta que sea de noche. En plena hora punta, con la sala de espera
            llena y todo el equipo atendiendo a quien tiene delante, el teléfono también
            puede sonar varias veces sin que nadie lo descuelgue. Cada una de esas llamadas
            es, probablemente, un paciente que está a punto de irse a otra clínica.
          </P>
          <P>
            En este artículo vas a entender qué es exactamente un agente de voz con
            inteligencia artificial, en qué se diferencia de un contestador automático,
            cómo funciona en el día a día de una clínica, para qué tipo de centros tiene
            más sentido y qué inversión supone ponerlo en marcha.
          </P>

          <H2>¿Qué es exactamente un agente de voz con IA?</H2>
          <P>
            Un agente de voz con IA es un sistema que contesta las llamadas de tu clínica
            manteniendo una conversación natural — no un menú de «pulse 1 para citas, pulse
            2 para...». Entiende lo que pide la persona que llama y actúa en consecuencia,
            igual que lo haría alguien de tu equipo.
          </P>
          <P>
            Se configura con la información real de tu clínica: horarios, servicios,
            tratamientos, tarifas orientativas y el tono con el que quieres que se hable a
            tus pacientes. No es una voz genérica de centralita, sino una que suena — y
            responde — como tu clínica.
          </P>
          <P>
            Y lo más importante: no necesitas cambiar de número de teléfono. El agente se
            conecta al que ya tienes, así que para quien llama no cambia nada — salvo que,
            esta vez, alguien contesta.
          </P>

          <H2>¿En qué se diferencia de un contestador automático?</H2>
          <P>
            Un contestador automático graba un mensaje y deja a la persona esperando: «en
            este momento no podemos atenderle, deje su mensaje después de la señal». Es una
            forma educada de decir «llama en otro momento» — y la mayoría de la gente,
            simplemente, cuelga y prueba en otra clínica.
          </P>
          <P>
            Un agente de voz con IA, en cambio, mantiene una conversación real. Entiende si
            la persona quiere pedir cita, cambiar una que ya tiene, preguntar por un
            tratamiento o resolver una duda — y responde ahí mismo, sin pedirle que vuelva
            a llamar más tarde.
          </P>
          <P>
            Puede dejar la cita reservada en la misma llamada, explicar información básica sobre
            servicios y horarios, y — esto es lo importante — detectar cuándo una llamada
            es compleja o urgente, para pasarla a una persona de tu equipo con todo el
            contexto ya recogido.
          </P>
          <P>
            La diferencia, en la práctica, es la que hay entre «te he dejado un mensaje, a
            ver si me llaman» y «ya tengo cita para el jueves». Una genera fricción; la
            otra, confianza — desde el primer contacto.
          </P>

          <H2>Cómo funciona en una clínica: paso a paso</H2>
          <P>
            En el día a día, funciona{" "}
            <InternalLink href="/blog/agente-ia-recepcion-clinica">
              como si lo cogiera una persona de recepción
            </InternalLink>{" "}
            — solo
            que las 24 horas, los 365 días del año, sin colas ni tonos de espera, y sin que
            nadie tenga que dejar lo que está haciendo para ir a por el teléfono.
          </P>

          <H3>1. La llamada entra y el agente responde al instante</H3>
          <P>
            No hay tonos, ni esperas, ni un «en este momento todas nuestras líneas están
            ocupadas». El agente descuelga de inmediato, con la voz y el tono que has
            definido para tu clínica, y empieza la conversación con total normalidad.
          </P>

          <H3>2. Entiende qué necesita la persona</H3>
          <P>
            Si quiere pedir cita, cambiar una que ya tiene, preguntar por un tratamiento o
            por precios orientativos, o simplemente resolver una duda antes de decidirse —
            el agente lo identifica en los primeros segundos de conversación, sin que la
            persona tenga que repetirse ni navegar por un menú.
          </P>

          <H3>3. Reserva la cita en la misma llamada</H3>
          <P>
            Si se trata de una cita, no se queda en un «ya le llamaremos para confirmar»:
            la agenda en ese mismo momento, sobre un hueco libre, y la persona cuelga
            sabiendo qué día y a qué hora tiene que venir.
          </P>

          <H3>4. Si hace falta, lo escala con todo el contexto</H3>
          <P>
            Cuando la llamada es compleja, sensible o claramente urgente, el agente no
            improvisa: transfiere la llamada — o deja recogida toda la información — para
            que{" "}
            <InternalLink href="/blog/chatbot-whatsapp-vs-recepcionista-clinica">
              una persona de tu equipo la retome
            </InternalLink>{" "}
            sabiendo exactamente de qué se trata.
          </P>

          <H3>5. Todo queda registrado</H3>
          <P>
            Cada llamada queda anotada: quién ha llamado, qué necesitaba y qué se ha hecho.
            Tu equipo deja de depender de notas sueltas o de un «me suena que alguien
            llamó por lo del tratamiento de...». Y, además, se activa en menos de 14 días, sin
            tocar tu número de teléfono.
          </P>

          <H2>¿Para qué tipo de clínicas tiene más sentido?</H2>
          <P>
            Tiene más sentido cuanto más dependes del teléfono para{" "}
            <InternalLink href="/blog/tecnologia-para-clinicas-esteticas">
              captar y fidelizar pacientes
            </InternalLink>{" "}
            — es decir, prácticamente cualquier clínica. Pero hay perfiles para
            los que la diferencia se nota especialmente rápido.
          </P>
          <P>
            Clínicas que reciben un volumen alto de llamadas y notan que, en hora punta,
            algunas se quedan sin contestar. Clínicas que ya saben — o sospechan — que
            pierden consultas por las noches o los fines de semana, cuando el teléfono suena
            y no hay nadie para cogerlo.
          </P>
          <P>
            Y también clínicas que detectan que algunos pacientes «se enfrían» entre que
            preguntan y que finalmente reservan — porque nadie les devolvió la llamada a
            tiempo. Una llamada que nadie coge es una consulta sin respuesta, y quien llama
            puede probar directamente con la siguiente clínica de su lista.
          </P>
          <P>
            Y hay un efecto en cadena que muchas clínicas no ven hasta que lo miran de
            cerca: una relación que empieza con una llamada perdida o mal gestionada
            también empieza más floja — y eso puede acabar notándose, con el tiempo, en
            citas a las que el paciente no se presenta.
          </P>

          <H2>Cuánto cuesta y cuándo se amortiza</H2>
          <P>
            La pregunta correcta no es «¿cuánto cuesta tener un agente de voz?», sino
            «¿cuánto me está costando ya no tenerlo?». Cada llamada que nadie contesta es,
            probablemente, un paciente que ha llamado — y reservado — en otra clínica.
          </P>
          <P>
            La inversión en un agente de voz con IA suele amortizarse con muy pocos
            pacientes nuevos al mes: basta con recuperar una parte de esas llamadas que hoy
            se quedan sin respuesta para que el sistema se pague solo, y siga generando
            ingresos después, mes tras mes, sin que nadie tenga que hacer nada distinto.
          </P>
          <P>
            La forma más sencilla de verlo es con tus propios números: cuántas llamadas
            recibe tu clínica, cuántas se quedan sin contestar y qué valor medio tiene un
            paciente nuevo. Con esos tres datos, la cuenta se hace en un minuto — y
            normalmente sorprende a quien la hace por primera vez.
          </P>
          <P>
            Si quieres ver esa cuenta aplicada a tu clínica, en{" "}
            <InternalLink href="/agente-voz-ia-clinicas">
              agente de voz con IA para clínicas
            </InternalLink>{" "}
            te explicamos cómo funciona el sistema, qué necesitas
            para ponerlo en marcha y cuánto podrías estar dejando de ganar cada mes por
            llamadas que hoy nadie coge.
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
              ¿Listo para que tu clínica conteste cada llamada?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántas llamadas se te están
              escapando cada mes — y cómo un agente de voz con IA para clínicas puede
              contestarlas todas, agendar citas y resolver dudas desde el primer día.
            </p>
            <Link
              href="/agente-voz-ia-clinicas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero dejar de perder llamadas →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
