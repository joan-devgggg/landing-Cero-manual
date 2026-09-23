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

const PATH = "/blog/como-captar-clientes-clinica-estetica-sin-presupuesto"
const DATES = articleDates("como-captar-clientes-clinica-estetica-sin-presupuesto")
const TITLE =
  "Captar clientes en estética sin gastar más | Cero Manual"
const DESCRIPTION =
  "Antes de gastar más en publicidad, recupera los clientes que ya tienes. Cinco estrategias para captar más en tu centro de estética sin invertir un euro más."
const HEADLINE =
  "Cómo captar más clientes para tu clínica estética sin aumentar el presupuesto"

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
    q: "¿Cuánto vale realmente un cliente recurrente para una clínica estética?",
    a: "Depende de tus tratamientos y de cuántas veces vuelve. Para saberlo en tu clínica, multiplica el ticket medio por las visitas que hace un cliente habitual a lo largo de los años: ese es su valor de vida. Es lo que deja de entrar cada vez que un paciente deja de venir.",
  },
  {
    q: "¿Cuándo es el mejor momento para pedir una reseña a un paciente?",
    a: "Poco después de que el paciente ha salido de la cita. En ese momento la experiencia está fresca y el cliente tiene el móvil en la mano. Un mensaje automático de WhatsApp en ese intervalo — con el nombre del paciente y un enlace directo a la ficha de Google — le pone muy fácil dejar la reseña en ese momento, cuando sin ese empujón casi nadie se acuerda de hacerlo.",
  },
  {
    q: "¿Cómo funciona un programa de referidos para clínicas?",
    a: "Un programa de referidos sencillo ofrece un beneficio concreto a ambas partes: la persona que recomienda recibe un descuento o crédito en su próxima cita, y la persona referida tiene un incentivo para reservar por primera vez. El beneficio no tiene que ser económico — puede ser un tratamiento adicional, una sesión de cortesía o prioridad en la agenda. El proceso tiene que ser simple: el paciente recibe un mensaje con su enlace o código único, lo comparte, y el sistema registra automáticamente la referencia.",
  },
  {
    q: "¿Qué es el seguimiento post-cita y por qué aumenta las reservas?",
    a: "El seguimiento post-cita es un mensaje automático que se envía al paciente unos días después del tratamiento para preguntar cómo se encuentra, reforzar el resultado y, opcionalmente, sugerir el siguiente paso (próxima sesión, tratamiento complementario). Un paciente escribe cuando le viene bien, y esa hora no siempre coincide con la de la clínica. Un sistema de seguimiento automático por WhatsApp mantiene la conversación activa y convierte esa intención en reserva, sin depender de que alguien esté disponible en ese momento.",
  },
  {
    q: "¿De verdad puedo conseguir más citas sin aumentar el presupuesto?",
    a: "Sí, y suele ser el margen más rápido. La publicidad trae leads nuevos, pero si parte de los que ya recibes no obtienen respuesta a tiempo, si los pacientes que ya te conocen no vuelven o si los huecos por cancelación se quedan vacíos, estás dejando citas sobre la mesa sin que el presupuesto tenga nada que ver. Aprovechar lo que ya tienes siempre sale más barato que captar un paciente desde cero.",
  },
  {
    q: "¿Cómo sé si mi agenda está llena de verdad o solo lo parece?",
    a: "Mira tres cosas: cuántos huecos libres tienes en las próximas dos semanas, cuántas citas acaban en no-show o cancelación de última hora, y cuántos leads del último mes no llegaron a convertirse en cita. Si hay pocos huecos pero muchos no-shows, la agenda solo está llena sobre el papel. Y si muchos leads no convierten, lo que falla es la respuesta y el seguimiento.",
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

export default function CaptarClientesArticlePage() {
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
            12 de junio de 2026 · 9 min de lectura
          </p>

          {/* Intro */}
          <P>
            Para captar más clientes sin aumentar el presupuesto, apóyate en lo que no depende
            de la publicidad: reseñas de Google pedidas en el momento justo, un programa de
            referidos que convierta a tus pacientes en canal de captación y una respuesta
            rápida a cada persona que te escribe. A eso se suma recuperar a los pacientes que
            dejaron de venir.
          </P>
          <P>
            Cuando una clínica quiere crecer, el primer instinto suele ser invertir más en
            publicidad: más presupuesto en Meta Ads,{" "}
            <InternalLink href="/blog/marketing-digital-clinicas-esteticas">
              más campañas en Google, más contenido en Instagram
            </InternalLink>
            . Antes de eso conviene mirar cuántas personas se pierden por el camino: leads
            que escriben y no reciben respuesta a tiempo, o huecos que se quedan vacíos por una
            cancelación.
          </P>

          <H2>1. Reactiva a los clientes que dejaron de venir</H2>
          <P>
            Muchos de los pacientes que dejaron de visitar una clínica simplemente perdieron el
            hábito o nadie les recordó que volvieran. Eso significa que una parte significativa de ellos está
            abierta a retomar la relación si se les contacta de la manera correcta.
          </P>
          <P>
            El canal más efectivo para reactivar pacientes inactivos es WhatsApp. Los mensajes
            llegan a la aplicación que tus pacientes ya abren a diario, sin competir con las
            promociones que se amontonan en la bandeja de entrada del correo. Un{" "}
            <InternalLink href="/blog/como-reactivar-pacientes-inactivos-clinica">
              mensaje de reactivación bien redactado
            </InternalLink>{" "}
            hace referencia al último tratamiento del paciente y ofrece un motivo concreto
            para volver.
          </P>
          <P>
            Un sistema de{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            automatiza este proceso: segmenta a los pacientes por tiempo de inactividad, envía
            el mensaje en el momento adecuado y gestiona las respuestas sin que el equipo tenga
            que hacerlo manualmente.
          </P>

          <H2>2. Pide reseñas en el momento justo</H2>
          <P>
            Las reseñas de Google son una vía de captación: son el primer punto de contacto
            real de muchos pacientes nuevos con tu clínica. Antes de llamar, el primer
            movimiento es abrir Google Maps y ver qué dicen otros. Una clínica con reseñas
            recientes y una nota alta tiene una ventaja de visibilidad directa frente a la
            competencia.
          </P>
          <P>
            El problema es que la mayoría de los{" "}
            <InternalLink href="/blog/como-conseguir-resenas-google-clinica-estetica">
              pacientes satisfechos no dejan reseñas
            </InternalLink>{" "}
            de forma espontánea, porque nadie les da el empujón en el momento exacto. La ventana se abre poco después de la cita — mientras el paciente todavía la
            tiene fresca — y se cierra rápido. Un mensaje automático de WhatsApp
            en ese intervalo, con el nombre del paciente y un enlace directo a la ficha de Google,
            convierte esa satisfacción en reseña antes de que se enfríe.
          </P>

          <H2>3. Convierte cada cita en una oportunidad de upsell</H2>
          <P>
            El upsell en una clínica estética consiste en ofrecer al paciente algo que tiene
            sentido en relación con lo que ya está haciendo. Un paciente que viene a depilación
            láser puede estar interesado en hidratación posterior. Uno que viene a mesoterapia
            puede querer saber cómo complementar el tratamiento en casa.
          </P>
          <P>
            Identificar los tratamientos que se complementan bien y crear un protocolo sencillo
            para que el equipo los mencione durante o después de la cita tiene un impacto directo
            en el ticket medio.
          </P>

          <H3>Cuándo y cómo proponer el upsell</H3>
          <P>
            El momento más receptivo para una propuesta de upsell es justo después del tratamiento,
            cuando el paciente está satisfecho con el resultado. Un mensaje breve — «para mantener
            los resultados, podríamos complementar con…» — funciona mejor que una oferta en
            el mostrador antes de salir. Y si la propuesta llega por WhatsApp unos días después,
            con una referencia al tratamiento que recibió, el paciente la percibe como un
            seguimiento personalizado.
          </P>

          <H2>4. Usa WhatsApp para seguimiento post-cita</H2>
          <P>
            Parte de los mensajes que recibe una clínica llegan fuera de horario — por la
            noche, el fin de semana, en momentos en que no hay nadie para atender. Entre
            ellos hay pacientes que acaban de tener una cita y quieren preguntar algo,
            o que están considerando reservar la siguiente sesión. Si no reciben respuesta
            rápida, el interés se enfría.
          </P>
          <P>
            Un{" "}
            <InternalLink href="/blog/como-fidelizar-pacientes-clinica-estetica">
              seguimiento post-cita automático por WhatsApp
            </InternalLink>{" "}
            — un mensaje 2-3 días después
            que pregunta cómo evolucionó el tratamiento y sugiere el siguiente paso — mantiene
            la conversación activa y convierte esa intención en reserva. El sistema envía el
            mensaje, recoge la respuesta y solo escala al equipo si hay una consulta específica que requiere
            atención humana.
          </P>
          <P>
            La{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes
            </InternalLink>{" "}
            y el seguimiento post-cita se complementan: uno recupera a los
            que dejaron de venir, el otro evita que los actuales pierdan el ritmo.
          </P>

          <H2>5. Crea un programa de referidos sencillo</H2>
          <P>
            Un programa de referidos convierte a tus pacientes actuales en canal de captación.
            La lógica es simple: un paciente satisfecho recomienda la clínica a alguien de
            su entorno, y ambos obtienen un beneficio — la persona que recomienda, un descuento
            o crédito en su próxima cita; la persona referida, un incentivo para reservar por
            primera vez.
          </P>
          <P>
            El programa tiene que ser sencillo para el paciente. Cuantos más pasos tenga —
            imprimir un cupón, recordar un código, explicar cómo funciona — menos se usa.
            Lo más efectivo es un enlace o código personal que el paciente puede compartir
            directamente desde el mensaje que recibe por WhatsApp, y que el sistema registra
            automáticamente cuando se usa.
          </P>
          <P>
            La captación por referidos tiene una ventaja sobre la publicidad: el lead
            llega con confianza previa. Alguien que viene porque un amigo le recomendó la clínica
            tiene una tasa de conversión y de retención mucho más alta que alguien que llega
            por un anuncio.
          </P>

          <H2>Antes de captar más: cierra las fugas de tu agenda</H2>
          <P>
            Responder rápido también capta clientes nuevos. Mientras espera, quien te ha
            escrito puede seguir escribiendo a otras clínicas, y la primera que contesta tiene
            ventaja para quedarse la cita.
          </P>
          <P>
            Responder en minutos a todas horas es difícil para un equipo que está
            atendiendo en cabina. Un{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            contesta cada consulta en segundos, resuelve las dudas básicas y agenda la cita,
            también de noche y en fin de semana.
          </P>
          <P>
            La otra fuga son los huecos que dejan las cancelaciones y los no-shows: citas que
            ya estaban conseguidas y se pierden. La forma más directa de reducirlos es{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-estetica">
              confirmar las citas con antelación
            </InternalLink>
            , y cuando alguien cancela, ofrecer ese hueco cuanto antes a otro paciente en
            lugar de dejarlo vacío.
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
              ¿Tienes pacientes inactivos que podrían volver esta semana?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              El sistema de{" "}
              <InternalLink href="/reactivacion-pacientes-inactivos">
                reactivación de pacientes inactivos
              </InternalLink>{" "}
              identifica a quién contactar, envía el mensaje en el momento adecuado y gestiona
              las respuestas — sin que el equipo tenga que hacer nada manualmente.
            </p>
            <Link
              href="/reactivacion-pacientes-inactivos"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo funciona la reactivación →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
