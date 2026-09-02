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

const PATH = "/blog/como-conseguir-resenas-google-clinica-estetica"
const DATES = articleDates("como-conseguir-resenas-google-clinica-estetica")
const TITLE = "Cómo conseguir más reseñas en Google para tu clínica estética | Cero Manual"
const DESCRIPTION =
  "Las reseñas de Google son el factor número 1 en la decisión de un nuevo paciente. Te explicamos cómo conseguirlas sin pedirlas a mano."
const HEADLINE =
  "Cómo conseguir más reseñas en Google para tu clínica estética (sin pedirlas una por una)"

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
    q: "¿Puedo pedir reseñas a mis clientes por WhatsApp?",
    a: "Sí, es legal y efectivo. La clave es el momento y el tono: pídela dentro de los 60 minutos después de la cita, cuando la experiencia está fresca, y hazlo de forma personal, no masiva. Un mensaje automático bien redactado — que parezca una conversación, no un formulario — tiene tasas de respuesta mucho más altas que un email genérico.",
  },
  {
    q: "¿Cómo respondo una reseña negativa sin dañar mi imagen?",
    a: "Responde siempre en público, en menos de 24 horas, sin entrar en el fondo del conflicto. La estructura que funciona: agradece el feedback, reconoce que la experiencia no fue la esperada, ofrece resolverlo en privado. Quien lee tu respuesta no es solo quien dejó la reseña — es el próximo cliente que está decidiendo si reservar.",
  },
  {
    q: "¿Cuántas reseñas necesito para posicionarme bien en Google Maps?",
    a: "No hay un número mágico, pero por debajo de 20 reseñas con una media de 4,5 o más, tu ficha pierde visibilidad frente a competidores con más volumen. El volumen importa tanto como la nota: una clínica con 80 reseñas a 4,3 aparece antes que una con 10 reseñas a 5,0.",
  },
  {
    q: "¿Qué pasa si incentivo económicamente a los clientes para que dejen reseñas?",
    a: "Google lo prohíbe explícitamente y puede penalizarte eliminando reseñas o suspendiendo tu ficha. Lo que sí puedes hacer es facilitar el proceso al máximo — un enlace directo, el momento justo, un mensaje amable — de forma que la reseña sea un gesto natural, no un intercambio.",
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

export default function ResenasgoogleArticlePage() {
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
            Marketing para clínicas
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
            9 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            El 70% de las decisiones de reservar un tratamiento estético se toman mirando las
            reseñas de Google. Antes de llamar, antes de entrar en la web, antes de preguntar
            a una amiga — el primer movimiento es abrir Google Maps y leer lo que dicen otros
            pacientes. Tu ficha de Google no es un complemento de tu marketing: es el primer
            punto de contacto real con la mayoría de tus clientes potenciales.
          </P>
          <P>
            El problema es que la mayoría de clínicas con pacientes satisfechos tienen menos
            reseñas de las que merecen. No porque sus clientes no estén contentos — sino porque
            nadie les pide que las dejen en el momento adecuado, y el momento pasa. Tres días
            después de la cita, la disposición a dejar una reseña cae drásticamente.
          </P>
          <P>
            En este artículo vas a ver por qué las reseñas importan tanto, por qué tus
            clientes no las dejan aunque estén satisfechos, cuál es el momento exacto para
            pedirlas, cómo automatizar ese proceso sin que parezca un robot — y qué hacer
            cuando una reseña negativa llega igualmente.
          </P>

          <H2>Por qué las reseñas de Google son tan importantes para una clínica estética</H2>
          <P>
            Google Maps es hoy el directorio de referencia para servicios locales. Cuando
            alguien busca «clínica estética cerca de mí» o «mesoterapia en [ciudad]», los
            primeros resultados que aparecen son fichas de Google con foto, horario, valoración
            y número de reseñas. No aparece primero quien tiene la web más bonita — aparece
            quien tiene más reseñas recientes y una nota más alta.
          </P>
          <P>
            El impacto va más allá del posicionamiento. Las reseñas actúan como prueba social
            en el momento de mayor incertidumbre: cuando alguien está sopesando si reservar
            en tu clínica o en la de al lado. Una clínica con 4,8 estrellas y 90 reseñas
            genera más confianza que una con 5,0 estrellas y 8 reseñas — porque el volumen
            da credibilidad a la nota.
          </P>
          <P>
            Y hay un tercer efecto que pocas clínicas tienen en cuenta: las reseñas recientes
            pesan más que las antiguas en el algoritmo de Google. No basta con tener muchas
            reseñas acumuladas hace dos años — necesitas un flujo constante de reseñas nuevas
            para mantener la visibilidad en Maps.
          </P>

          <H2>Por qué tus clientes no dejan reseñas aunque estén contentos</H2>
          <P>
            La razón más habitual no es la falta de satisfacción — es la fricción. Dejar una
            reseña en Google requiere varios pasos: abrir la app, encontrar la ficha, hacer
            clic en el número de estrellas, escribir algo, publicar. Para alguien que acaba
            de salir de una cita y tiene el móvil en el bolso, ese proceso es suficiente para
            que lo deje para después. Y «después» raramente llega.
          </P>
          <P>
            El segundo motivo es el momento. Si no pides la reseña cuando la satisfacción
            está en su punto más alto — justo después de la cita — la ventana se cierra.
            A los dos días, la experiencia ya no está tan presente. A la semana, el cliente
            ya piensa en otra cosa.
          </P>
          <P>
            Y el tercer motivo es que muchas clínicas no piden la reseña de forma directa.
            Hay una incomodidad en pedirla verbalmente, cara a cara, en el mostrador de
            recepción. El cliente asiente, dice que sí, y no lo hace. No porque sea mala
            persona — sino porque en ese momento tiene el abrigo en la mano y la mente ya
            puesta en lo siguiente.
          </P>

          <H2>El momento perfecto para pedir una reseña</H2>
          <P>
            El momento óptimo para pedir una reseña es entre 30 y 60 minutos después de que
            el paciente ha salido de la cita. En ese intervalo, la experiencia todavía está
            fresca, el resultado del tratamiento empieza a sentirse, y el cliente tiene el
            móvil en la mano — en el coche, en el metro, en casa.
          </P>
          <P>
            Pedir la reseña en ese momento tiene dos ventajas clave sobre hacerlo al salir
            de la clínica. La primera: el cliente está en un entorno privado, sin la presión
            social de un mostrador. La segunda: tiene tiempo para escribir algo con calma,
            no entre el pago y la puerta.
          </P>
          <P>
            El canal también importa. Un mensaje por WhatsApp en ese momento tiene una tasa
            de apertura del 95-98% — frente al 20-25% del email. Y WhatsApp permite incluir
            directamente el enlace a tu ficha de Google, eliminando el paso de buscarla.
            Un clic, y el cliente ya está en la pantalla de valoración.
          </P>

          <H2>Cómo automatizar la petición de reseñas después de cada cita</H2>
          <P>
            La automatización no significa impersonalidad — significa que el mensaje correcto
            llega en el momento correcto sin que nadie tenga que recordarlo. El flujo básico
            funciona así: cuando una cita se marca como completada en el software de agenda,
            se dispara automáticamente un mensaje de WhatsApp al paciente 45 minutos después.
          </P>
          <P>
            El mensaje que mejor convierte no es genérico. Incluye el nombre del paciente,
            una mención al tratamiento que acaba de recibir, y un tono cercano — como si lo
            enviara la persona que le ha atendido, no la clínica como institución. Y termina
            con un enlace directo a la ficha de Google, no con una instrucción de «búscanos
            en Google».
          </P>
          <P>
            El resultado en clínicas que han implementado este sistema es consistente: entre
            el 20% y el 35% de los pacientes que reciben el mensaje dejan una reseña. Sin
            automatización, la tasa espontánea ronda el 2-3%. La diferencia no está en la
            satisfacción del paciente — está en haberle dado el empujón en el momento exacto.
          </P>
          <P>
            Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            puede gestionar este flujo de forma completamente automática: detecta el cierre
            de la cita, espera el tiempo configurado, envía el mensaje con el enlace directo
            a Google y registra si el paciente ha respondido — sin que el equipo tenga que
            intervenir en ningún paso.
          </P>

          <H2>Qué hacer con las reseñas negativas</H2>
          <P>
            Las reseñas negativas son inevitables. Cualquier clínica con volumen de actividad
            acaba recibiéndolas — y la forma en que respondes dice tanto de tu clínica como
            la reseña en sí. El próximo cliente que lea esa reseña también va a leer tu
            respuesta.
          </P>
          <P>
            La estructura que funciona tiene tres pasos. Primero, agradecer el feedback sin
            ponerse a la defensiva — aunque la reseña sea injusta. Segundo, reconocer que
            la experiencia no fue la esperada, sin admitir errores concretos en público.
            Tercero, ofrecer resolverlo por un canal privado — un número de teléfono, un
            email — para sacar la conversación del escaparate público.
          </P>

          <H3>Lo que no debes hacer</H3>
          <P>
            No entres en el fondo del conflicto en la respuesta pública. No cuestiones la
            veracidad de la reseña. No te disculpes en exceso de forma que parezca que
            confirmas todos los puntos negativos. Y no dejes la reseña sin respuesta — una
            reseña negativa sin respuesta parece más grave que una con una respuesta profesional.
          </P>
          <P>
            Un sistema de petición de reseñas activo también tiene un efecto colateral
            positivo: diluciona el peso de las reseñas negativas. Si recibes 5 reseñas
            nuevas a 5 estrellas cada semana, una reseña a 2 estrellas tiene cada vez
            menos impacto en tu media y en tu visibilidad.
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
              ¿Tus pacientes salen contentos pero no dejan reseña?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              El{" "}
              <InternalLink href="/agente-whatsapp-clinicas-esteticas">
                agente de WhatsApp para clínicas estéticas
              </InternalLink>{" "}
              envía la petición en el momento exacto — 30 minutos después de la cita — y
              convierte esa satisfacción en reseña antes de que se enfríe.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo funciona el agente →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
