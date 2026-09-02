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
    a: "Un cliente que visita la clínica regularmente durante varios años puede generar entre 2.000€ y 4.000€ en ingresos totales — con una media aproximada de unos 3.000€ de valor de vida. Eso significa que reactivar a un paciente inactivo tiene un valor potencial mucho mayor que captar uno nuevo, sin el coste de adquisición asociado a la publicidad. Muchas clínicas invierten en atraer nuevos pacientes mientras ignoran una base de datos con decenas de clientes dormidos de alto valor.",
  },
  {
    q: "¿Cuándo es el mejor momento para pedir una reseña a un paciente?",
    a: "Entre 30 y 60 minutos después de que el paciente ha salido de la cita. En ese momento la experiencia está fresca, el resultado del tratamiento empieza a sentirse, y el cliente tiene el móvil en la mano. Un mensaje automático de WhatsApp en ese intervalo — con el nombre del paciente y un enlace directo a la ficha de Google — tiene tasas de conversión del 20-35%, frente al 2-3% espontáneo. Pasados unos días, la ventana se cierra.",
  },
  {
    q: "¿Cómo funciona un programa de referidos para clínicas?",
    a: "Un programa de referidos sencillo ofrece un beneficio concreto a ambas partes: la persona que recomienda recibe un descuento o crédito en su próxima cita, y la persona referida tiene un incentivo para reservar por primera vez. El beneficio no tiene que ser económico — puede ser un tratamiento adicional, una sesión de cortesía o prioridad en la agenda. Lo importante es que el proceso sea simple: el paciente recibe un mensaje con su enlace o código único, lo comparte, y el sistema registra automáticamente la referencia.",
  },
  {
    q: "¿Qué es el seguimiento post-cita y por qué aumenta las reservas?",
    a: "El seguimiento post-cita es un mensaje automático que se envía al paciente unos días después del tratamiento para preguntar cómo se encuentra, reforzar el resultado y, opcionalmente, sugerir el siguiente paso (próxima sesión, tratamiento complementario). El 40% de las consultas de una clínica llegan fuera de horario — lo que significa que muchos pacientes intentan contactar cuando nadie puede atenderles. Un sistema de seguimiento automático por WhatsApp mantiene la conversación activa y convierte esa intención en reserva, sin depender de que alguien esté disponible en ese momento.",
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
            12 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Cuando una clínica quiere crecer, el primer instinto suele ser invertir más en
            publicidad: más presupuesto en Meta Ads, más campañas en Google, más contenido en
            Instagram. Es lógico, pero pasa por alto una fuente de ingresos que ya existe y
            que no requiere ningún gasto adicional: la base de datos de pacientes que dejaron
            de venir.
          </P>
          <P>
            Un cliente recurrente tiene un valor de vida de aproximadamente 3.000€. Si tu clínica
            tiene 200 pacientes inactivos — pacientes que vinieron una o dos veces y no han
            vuelto — eso representa hasta 600.000€ en ingresos dormidos. Antes de captar
            nuevos clientes, vale la pena recuperar los que ya conocen tu trabajo.
          </P>
          <P>
            En este artículo vas a ver 5 estrategias que no requieren más presupuesto publicitario:
            reactivar pacientes inactivos, pedir reseñas en el momento exacto, convertir cada
            cita en una oportunidad de upsell, usar WhatsApp para el seguimiento post-cita, y
            crear un programa de referidos que se gestione solo.
          </P>

          <H2>1. Reactiva a los clientes que dejaron de venir</H2>
          <P>
            La mayoría de los pacientes que dejaron de visitar una clínica no lo hicieron por
            una mala experiencia — simplemente perdieron el hábito, cambiaron de rutina o nadie
            les recordó que volvieran. Eso significa que una parte significativa de ellos está
            abierta a retomar la relación si se les contacta de la manera correcta.
          </P>
          <P>
            El canal más efectivo para reactivar pacientes inactivos es WhatsApp. Los mensajes
            de WhatsApp se abren entre el 95% y el 98% de las veces — frente al 20-25% del
            email — lo que garantiza que el mensaje llega y se lee. Un mensaje de reactivación
            bien redactado no es una promoción genérica: hace referencia al último tratamiento
            del paciente, muestra que la clínica recuerda quién es, y ofrece un motivo concreto
            para volver.
          </P>
          <P>
            Un sistema de{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes inactivos
            </InternalLink>{" "}
            automatiza este proceso: segmenta a los pacientes por tiempo de inactividad, envía
            el mensaje en el momento adecuado y gestiona las respuestas sin que el equipo tenga
            que hacerlo manualmente. El resultado habitual es entre un 15% y un 30% de respuestas
            positivas en la primera campaña.
          </P>

          <H2>2. Pide reseñas en el momento justo</H2>
          <P>
            Las reseñas de Google son el primer punto de contacto real de la mayoría de los
            nuevos pacientes con tu clínica. Antes de llamar, antes de entrar en la web, el
            primer movimiento es abrir Google Maps y ver qué dicen otros. Una clínica con
            reseñas recientes y una nota alta tiene una ventaja de visibilidad directa frente
            a la competencia — sin gastar un euro en publicidad.
          </P>
          <P>
            El problema es que la mayoría de los pacientes satisfechos no dejan reseñas de
            forma espontánea, no por falta de voluntad sino por falta de empujón en el momento
            exacto. La ventana se abre justo después de la cita — entre 30 y 60 minutos después
            de que el paciente ha salido — y se cierra rápido. Un mensaje automático de WhatsApp
            en ese intervalo, con el nombre del paciente y un enlace directo a la ficha de Google,
            convierte esa satisfacción en reseña antes de que se enfríe.
          </P>

          <H2>3. Convierte cada cita en una oportunidad de upsell</H2>
          <P>
            El upsell en una clínica estética no es vender de forma agresiva — es ofrecer al
            paciente algo que tiene sentido en relación con lo que ya está haciendo. Un paciente
            que viene a depilación láser puede estar interesado en hidratación posterior. Uno
            que viene a mesoterapia puede querer saber cómo complementar el tratamiento en casa.
            La clave es que la sugerencia llegue en el contexto adecuado, no como un discurso
            de ventas.
          </P>
          <P>
            Identificar los tratamientos que se complementan bien y crear un protocolo sencillo
            para que el equipo los mencione durante o después de la cita tiene un impacto directo
            en el ticket medio — sin necesidad de captar ningún cliente nuevo. Cada cita existente
            es una oportunidad de incrementar los ingresos con pacientes que ya confían en la
            clínica.
          </P>

          <H3>Cuándo y cómo proponer el upsell</H3>
          <P>
            El momento más receptivo para una propuesta de upsell es justo después del tratamiento,
            cuando el paciente está satisfecho con el resultado. Un mensaje breve — «para mantener
            los resultados, podríamos complementar con…» — funciona mejor que una oferta en
            el mostrador antes de salir. Y si la propuesta llega por WhatsApp unos días después,
            con una referencia al tratamiento que recibió, el paciente la percibe como un
            seguimiento personalizado, no como publicidad.
          </P>

          <H2>4. Usa WhatsApp para seguimiento post-cita</H2>
          <P>
            El 40% de las consultas de una clínica llegan fuera de horario — por la noche,
            el fin de semana, en momentos en que no hay nadie para atender. Muchos de esos
            mensajes son de pacientes que acaban de tener una cita y quieren preguntar algo,
            o que están considerando reservar la siguiente sesión. Si no reciben respuesta
            rápida, el interés se enfría.
          </P>
          <P>
            Un seguimiento post-cita automático por WhatsApp — un mensaje 2-3 días después
            que pregunta cómo evolucionó el tratamiento y sugiere el siguiente paso — mantiene
            la conversación activa y convierte esa intención en reserva. No requiere que el
            equipo esté disponible en ese momento: el sistema envía el mensaje, recoge la
            respuesta, y solo escala al equipo si hay una consulta específica que requiere
            atención humana.
          </P>
          <P>
            La{" "}
            <InternalLink href="/reactivacion-pacientes-inactivos">
              reactivación de pacientes
            </InternalLink>{" "}
            y el seguimiento post-cita trabajan de forma complementaria: uno recupera a los
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
            automáticamente cuando se usa. Sin formularios, sin gestión manual, sin que nadie
            tenga que hacer seguimiento.
          </P>
          <P>
            La captación por referidos tiene además una ventaja sobre la publicidad: el lead
            llega con confianza previa. Alguien que viene porque un amigo le recomendó la clínica
            tiene una tasa de conversión y de retención mucho más alta que alguien que llega
            por un anuncio. Es el canal de captación más barato y con mejor calidad de cliente.
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
