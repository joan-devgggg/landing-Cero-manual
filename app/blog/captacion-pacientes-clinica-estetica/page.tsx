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

const PATH = "/blog/captacion-pacientes-clinica-estetica"
const DATES = articleDates("captacion-pacientes-clinica-estetica")
const TITLE = "Captación de pacientes en clínica estética | Cero Manual"
const DESCRIPTION =
  "Captar pacientes para tu clínica estética es más fácil cuando tienes el proceso automatizado. Te explicamos las estrategias que mejor funcionan."
const HEADLINE = "Captación de pacientes para clínicas estéticas: qué funciona realmente en 2026"

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
    q: "¿Cuál es el canal que más pacientes nuevos trae a una clínica estética?",
    a: "Depende de la clínica, pero casi siempre la combinación gana al canal único: redes sociales para generar interés, Google y reseñas para captar a quien ya está buscando, y referidos de pacientes satisfechos. Lo que de verdad marca la diferencia no es de dónde viene el contacto, sino qué pasa justo después de que llega — y ahí es donde la mayoría de clínicas pierde más pacientes de los que cree.",
  },
  {
    q: "¿Por qué tengo muchos seguidores en Instagram pero pocas citas reales?",
    a: "Porque seguir una cuenta y pedir cita son dos cosas muy distintas. Instagram genera interés y confianza, pero la decisión de reservar suele ocurrir en otro momento — normalmente cuando la persona escribe preguntando por precios o disponibilidad. Si ese mensaje tarda horas en responderse, el interés que costó generar se enfría y la persona sigue mirando otras clínicas.",
  },
  {
    q: "¿Es verdad que se pierden tantos leads por no responder rápido?",
    a: "Sí, y es uno de los datos que más sorprende cuando se revisa por primera vez: si un lead no recibe respuesta en los primeros cinco minutos, la probabilidad de perderlo frente a otra clínica es de hasta un 80%. No es que la persona pierda interés del todo — es que, mientras espera, sigue escribiendo a otras opciones, y la primera que responde suele quedarse con la cita.",
  },
  {
    q: "¿Cómo sé si mi clínica está perdiendo pacientes por este motivo sin darme cuenta?",
    a: "La señal más clara es revisar cuántas consultas llegan fuera del horario de atención — en muchas clínicas son hasta un 40% del total — y qué pasa con ellas. Si esos mensajes se quedan sin respuesta hasta el día siguiente, es muy probable que una parte importante de esas personas ya hayan reservado en otro sitio para entonces. Automatizar esa primera respuesta es, casi siempre, el cambio que más impacto tiene.",
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

export default function CaptacionPacientesArticlePage() {
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
            Cada vez hay más clínicas estéticas, y cada vez compiten por la atención de los
            mismos pacientes potenciales. Hace unos años bastaba con tener buena ubicación y
            algún anuncio en prensa local; hoy, esa misma persona que busca un tratamiento
            está comparando varias clínicas a la vez, mirando reseñas, perfiles de
            Instagram y precios, todo desde el móvil y en cuestión de minutos.
          </P>
          <P>
            En ese contexto, tener presencia en redes sociales ya no es suficiente. Muchas
            clínicas invierten tiempo y dinero en generar interés — contenido, anuncios,
            promociones — y luego pierden buena parte de ese esfuerzo en el último tramo:
            el momento en que la persona interesada escribe preguntando y nadie responde a
            tiempo.
          </P>
          <P>
            En este artículo vamos a ver qué canales traen de verdad pacientes nuevos, cuál
            es el error que hace que se pierdan leads ya generados, cómo convertir más de
            esos contactos en citas reales, por qué WhatsApp tiene un papel central en todo
            esto, y cómo automatizar el proceso para que funcione de forma constante, sin
            depender de que alguien del equipo esté pendiente todo el día.
          </P>

          <H2>Los canales que más pacientes traen a una clínica estética</H2>
          <P>
            No existe un único canal mágico, pero sí una jerarquía bastante clara. Las
            redes sociales — sobre todo Instagram — siguen siendo el escaparate principal
            para generar interés: fotos de antes y después, contenido educativo, vídeos
            cortos. Es el canal donde alguien descubre tu clínica por primera vez, aunque
            todavía no esté listo para reservar.
          </P>
          <P>
            Google, por su parte, captura a las personas que ya están en modo decisión —
            buscan «clínica estética cerca de mí» o el nombre de un tratamiento concreto, y
            comparan reseñas y fichas de Google Business antes de elegir. Y los referidos —
            pacientes actuales que recomiendan tu clínica a amigos o familiares — siguen
            siendo, en muchos casos, la fuente de pacientes con mayor probabilidad de
            convertirse en clientes habituales.
          </P>
          <P>
            La realidad es que la mayoría de clínicas ya tienen estos canales generando
            contactos en mayor o menor medida. El problema no suele estar en la cantidad de
            interés que generan, sino en lo que ocurre justo después.
          </P>

          <H2>El error más común: captar sin convertir</H2>
          <P>
            Aquí está el punto que más ingresos se lleva por delante sin que nadie se dé
            cuenta: una persona ve un anuncio, entra en el perfil, le gusta lo que ve y
            escribe preguntando por precio o disponibilidad. Hasta ahí, todo perfecto — el
            canal ha hecho su trabajo. El problema empieza cuando ese mensaje se queda sin
            respuesta durante horas.
          </P>
          <P>
            El dato es contundente: si un lead no recibe respuesta en los primeros cinco
            minutos, la probabilidad de perderlo frente a otra clínica es de hasta un 80%.
            No porque la persona deje de estar interesada, sino porque mientras espera,
            sigue mirando — y escribiendo a — otras opciones. La primera clínica que
            responde con claridad suele quedarse con la cita, independientemente de cuál
            tuviera el anuncio más bonito.
          </P>
          <P>
            Esto significa que, muchas veces, el problema no es de captación — es de
            conversión. Se está invirtiendo en generar interés y, después, ese interés se
            evapora en la bandeja de entrada.
          </P>

          <H2>Cómo convertir más leads en citas</H2>
          <P>
            La clave está en reducir al máximo el tiempo entre que alguien pregunta y
            recibe una respuesta útil. Y aquí entra otro dato importante: hasta un 40% de
            las consultas de pacientes potenciales llegan fuera del horario de atención de
            la clínica — por la noche, los fines de semana, en momentos en que no hay nadie
            del equipo disponible para contestar.
          </P>
          <P>
            Si esas consultas se quedan esperando hasta el día siguiente, una parte
            importante de esas personas ya habrá reservado en otra clínica para entonces.
            La solución no es tener a alguien pendiente del móvil las 24 horas — eso no es
            sostenible para casi ningún equipo —, sino asegurarse de que cualquier consulta,
            llegue cuando llegue, reciba una primera respuesta inmediata con la información
            básica que la persona necesita para decidir si quiere seguir adelante.
          </P>

          <H2>El papel de WhatsApp en la captación</H2>
          <P>
            WhatsApp es, hoy, el canal donde más naturalmente termina esta conversación. Las
            personas no quieren rellenar formularios ni esperar a que les devuelvan una
            llamada — quieren escribir, como lo harían a un amigo, y recibir una respuesta
            igual de rápido. Y los números lo confirman: los mensajes de WhatsApp se leen
            entre un 95% y un 98% de las veces, casi siempre en los primeros minutos.
          </P>
          <P>
            Eso lo convierte en el canal ideal no solo para responder, sino para mantener
            viva la conversación hasta que la persona reserva. Si quieres ver cómo se monta
            un sistema de este tipo para tu clínica, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            explicamos cómo funciona en la práctica.
          </P>

          <H2>Automatiza la captación para que funcione sola</H2>
          <P>
            La buena noticia es que todo este proceso se puede automatizar de principio a
            fin: desde que alguien escribe por primera vez preguntando por un tratamiento,
            hasta que queda agendada una cita en el calendario de la clínica, sin que nadie
            del equipo tenga que estar pendiente del teléfono a todas horas.
          </P>
          <P>
            Un sistema que responde al instante, a cualquier hora, con información clara y
            la opción de reservar directamente, convierte la captación en algo que funciona
            de forma constante — no solo cuando alguien del equipo tiene un hueco para
            contestar mensajes. Es la diferencia entre depender de la suerte y tener un
            proceso que trabaja para ti incluso cuando la clínica está cerrada. En{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            te contamos cómo aplicarlo a tu caso concreto.
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
              ¿Quieres dejar de perder pacientes potenciales por no responder a tiempo?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te ayudamos a montar un agente de WhatsApp que responde al instante, a
              cualquier hora, y convierte más de tus consultas en citas reales — sin que
              tengas que contratar a nadie más.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero captar más pacientes →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
