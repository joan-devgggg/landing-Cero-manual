import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/como-conseguir-pacientes-clinica-dental"
const TITLE = "Cómo conseguir más pacientes para tu clínica dental | Cero Manual"
const DESCRIPTION =
  "Conseguir pacientes para tu clínica dental requiere más que publicidad. Te explicamos las estrategias que mejor funcionan en 2026."
const HEADLINE = "Cómo conseguir más pacientes para tu clínica dental en 2026"

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
    q: "¿Necesito un presupuesto grande de publicidad para conseguir más pacientes?",
    a: "No necesariamente. La publicidad ayuda a traer pacientes nuevos, pero antes de aumentar el presupuesto merece la pena revisar si estás aprovechando lo que ya tienes: reseñas, leads que no se respondieron a tiempo, pacientes inactivos. Muchas clínicas consiguen más citas simplemente ordenando estos puntos antes de gastar más en anuncios.",
  },
  {
    q: "¿Cuánto tiempo se tarda en notar más pacientes nuevos?",
    a: "Depende del canal. Las reseñas y la respuesta rápida por WhatsApp suelen notarse en pocas semanas, porque actúan sobre leads que ya están llegando. La publicidad y el SEO local tardan algo más, normalmente entre uno y tres meses, en construir un flujo estable de pacientes nuevos.",
  },
  {
    q: "¿Cuál es la diferencia entre captar pacientes y fidelizarlos?",
    a: "Captar es conseguir que un paciente nuevo dé el primer paso (pedir información o reservar su primera cita). Fidelizar es conseguir que ese paciente vuelva para sus revisiones y tratamientos siguientes. Ambas cosas son importantes, pero captar suele ser más caro — por eso conviene cuidar también la fidelización, para que cada paciente nuevo valga más a largo plazo.",
  },
  {
    q: "¿Estas estrategias funcionan también para clínicas pequeñas con un solo dentista?",
    a: "Sí, de hecho suelen notarse más en clínicas pequeñas, porque cada paciente nuevo representa un porcentaje mayor de la agenda. No hace falta un equipo de marketing: con cuidar las reseñas, responder rápido por WhatsApp y automatizar el seguimiento de leads, una clínica con un solo dentista puede competir con clínicas mucho más grandes.",
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

export default function ComoConseguirPacientesClinicaDentalArticlePage() {
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
            11 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Cada vez hay más clínicas dentales compitiendo por los mismos pacientes en la
            misma zona, y cada vez es más caro conseguir que alguien nuevo dé el paso de
            pedir cita. En este contexto, "hacer más publicidad" ya no es suficiente por
            sí solo: si el resto del proceso no acompaña, ese presupuesto extra se diluye
            en leads que nunca llegan a convertirse en pacientes.
          </P>
          <P>
            La buena noticia es que conseguir más pacientes no depende solo de gastar más,
            sino de aprovechar mejor los canales que ya tienes y de no dejar escapar a las
            personas que ya están interesadas. En este artículo vamos a ver qué canales
            traen más pacientes a una clínica dental, cómo aprovechar las reseñas y
            WhatsApp, y cómo automatizar todo el proceso para que funcione solo.
          </P>

          <H2>Los canales que más pacientes traen a una clínica dental</H2>
          <P>
            No todos los canales rinden igual. En la mayoría de clínicas dentales, los
            pacientes nuevos llegan principalmente por tres vías: búsquedas en Google
            (sobre todo búsquedas locales tipo "dentista cerca de mí"), recomendaciones de
            pacientes actuales, y publicidad en redes sociales o Google Ads.
          </P>
          <P>
            Cada canal cumple una función distinta: la publicidad genera volumen de leads
            nuevos, las recomendaciones traen pacientes ya predispuestos a confiar, y
            Google es donde casi todo el mundo "comprueba" una clínica antes de decidirse,
            venga de donde venga el primer contacto. Por eso, antes de invertir más en
            cualquiera de ellos, conviene asegurarse de que los otros dos están bien
            cuidados.
          </P>

          <H2>Google y las reseñas: tu mejor fuente de pacientes nuevos</H2>
          <P>
            Cuando alguien busca un dentista, lo primero que mira — incluso si llegó por
            un anuncio o una recomendación — son las reseñas en Google. Una clínica con
            pocas reseñas, o con una valoración media baja, pierde pacientes que de otra
            forma habrían pedido cita, simplemente porque genera dudas frente a otra
            clínica con más reseñas y mejor valoración.
          </P>
          <P>
            Las clínicas que piden reseñas de forma sistemática — por ejemplo, enviando un
            mensaje automático después de cada cita — consiguen acumular reseñas mucho
            más rápido que las que solo las piden de vez en cuando, "cuando se acuerdan".
            Esto no solo mejora la posición en Google, también da más confianza a quien
            está decidiendo entre varias clínicas.
          </P>

          <H2>WhatsApp: el canal que más convierte</H2>
          <P>
            Independientemente de por dónde llegue el primer contacto — Google, redes,
            recomendación —, lo que decide si esa persona acaba siendo paciente o no es lo
            que pasa después. Y ahí WhatsApp tiene una ventaja enorme: los mensajes se
            abren entre un 95% y un 98% de las veces, frente a tasas mucho más bajas de
            email o formularios web.
          </P>
          <P>
            Esto significa que si das la opción de escribir por WhatsApp — en la web, en
            los anuncios, en las redes — y respondes con agilidad, tienes muchas más
            probabilidades de convertir ese contacto en una cita que si dependes de que
            alguien rellene un formulario y espere a que le llamen. Puedes ver cómo
            montar este tipo de atención en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>
            .
          </P>

          <H2>Cómo no perder un lead que ya tienes</H2>
          <P>
            Aquí es donde muchas clínicas pierden más pacientes de los que creen. Un
            estudio recurrente en el sector muestra que la probabilidad de perder un lead
            sube hasta un 80% si no se le responde en los primeros 5 minutos: la persona
            simplemente sigue buscando y contacta con la siguiente clínica de la lista.
          </P>
          <P>
            El problema es que casi un 40% de las consultas llegan fuera del horario de
            atención — por la tarde, de noche o en fin de semana —, justo cuando nadie del
            equipo puede responder. Si esas consultas se quedan sin contestar hasta el día
            siguiente, una parte importante de esos leads ya se ha ido a otra clínica. Por
            eso, antes de invertir en traer más leads, merece la pena asegurarse de que
            los que ya llegan reciben respuesta inmediata, a cualquier hora. Te explicamos
            cómo conseguirlo en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas
            </InternalLink>
            .
          </P>

          <H2>Automatiza la captación para que funcione sola</H2>
          <P>
            La forma más eficaz de conseguir más pacientes no es tratar cada canal por
            separado, sino conectarlos: que las reseñas se pidan solas después de cada
            cita, que cualquier consulta por WhatsApp tenga respuesta inmediata a
            cualquier hora, y que los leads que no avanzan reciban un seguimiento
            automático en lugar de quedar olvidados en una lista.
          </P>
          <P>
            Cuando esto está automatizado, cada euro que inviertes en publicidad rinde
            más, porque ya no se pierde por el camino — y además consigues pacientes
            nuevos sin necesidad de aumentar el presupuesto, simplemente aprovechando
            mejor lo que ya estás generando.
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
              ¿Quieres dejar de perder leads que ya llegan a tu clínica?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te ayudamos a montar un sistema que responde por WhatsApp al instante,
              las 24 horas, para que ningún paciente potencial se vaya a otra clínica.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero conseguir más pacientes →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
