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

const PATH = "/blog/automatizar-whatsapp-clinica-dental"
const DATES = articleDates("automatizar-whatsapp-clinica-dental")
const TITLE = "Cómo automatizar WhatsApp en tu clínica dental | Cero Manual"
const DESCRIPTION =
  "Automatizar WhatsApp en tu clínica dental permite responder leads, confirmar citas y reducir no-shows sin que el equipo esté pendiente del móvil."
const HEADLINE = "Cómo automatizar WhatsApp en tu clínica dental y dejar de perder leads"

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
    q: "¿Tengo que cambiar de número de WhatsApp para automatizarlo?",
    a: "No. La automatización se conecta al número de WhatsApp que tu clínica ya utiliza, así que para tus pacientes no cambia nada. Siguen escribiendo donde siempre, solo que ahora reciben respuesta al instante, sea la hora que sea.",
  },
  {
    q: "¿Qué pasa si un paciente pregunta algo que el sistema no sabe responder?",
    a: "Cuando detecta una consulta delicada, una duda muy específica o cualquier situación que requiere trato humano, la conversación se traspasa a tu equipo con todo el contexto ya recogido. Nadie tiene que repetir nada, y tu equipo solo interviene cuando de verdad hace falta.",
  },
  {
    q: "¿Puede confirmar citas y avisar de cambios automáticamente?",
    a: "Sí. El sistema puede enviar recordatorios antes de la cita, pedir confirmación y, si el paciente quiere cambiar o cancelar, gestionar ese cambio directamente por WhatsApp. Esto es precisamente lo que más ayuda con los no-shows: el paciente que no puede venir avisa en la misma conversación y el hueco queda libre con margen.",
  },
  {
    q: "¿Cuánto se tarda en tener esto funcionando en mi clínica?",
    a: "Normalmente, días. Se configura con la información que ya tienes —tratamientos, horarios, política de citas— y se conecta al número de WhatsApp que ya tiene la clínica. Tu equipo no tiene que aprender un sistema complejo: solo entra cuando el agente le pasa una conversación que necesita a una persona.",
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

export default function AutomatizarWhatsappClinicaDentalArticlePage() {
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
            Automatización para clínicas
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
            10 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Una parte de las consultas que recibe una clínica dental llega fuera de su
            horario de atención: por la noche, en fin de semana, o en huecos del día en los
            que el equipo está con un paciente en el sillón y no puede mirar el móvil. Son
            personas que han decidido, justo en ese momento, escribir para preguntar por una
            revisión, un presupuesto o una urgencia.
          </P>
          <P>
            Y WhatsApp es, hoy, un canal por el que muchos pacientes{" "}
            <InternalLink href="/blog/whatsapp-para-clinicas-dentales">
              prefieren comunicarse con su clínica dental
            </InternalLink>
            : para pedir cita, preguntar dudas o confirmar
            una visita. El problema no es que los pacientes no escriban — es que, muchas
            veces, nadie puede responder a tiempo.
          </P>
          <P>
            En este artículo vas a ver por qué WhatsApp es el canal más importante para tu
            clínica dental, qué tareas puedes automatizar hoy mismo, cómo funciona el
            proceso paso a paso, qué necesitas para empezar y cuánto tarda en amortizarse.
          </P>

          <H2>Por qué WhatsApp es el canal más importante para tu clínica dental</H2>
          <P>
            WhatsApp es la aplicación que tus pacientes abren a lo largo del día, mientras que
            un email puede pasar días sin abrirse. Si quieres que un paciente vea tu
            recordatorio de cita, tu confirmación o tu respuesta a su consulta, WhatsApp es el
            canal con más garantías de que el mensaje llegue y se lea.
          </P>
          <P>
            A esto se suma la velocidad: un lead que no recibe respuesta pronto no pierde
            necesariamente el interés por tu clínica, pero mientras espera puede encontrar
            otra que sí le conteste.
          </P>
          <P>
            Para una clínica dental, donde buena parte de las consultas son sobre
            disponibilidad, precios o urgencias, esto significa que cada minuto que tarda en
            responderse un mensaje de WhatsApp es, literalmente, una posible cita que se va a
            otra parte.
          </P>

          <H2>Qué tareas de WhatsApp puedes automatizar hoy</H2>
          <P>
            No hace falta automatizarlo todo de golpe. Estas son las tareas que más tiempo
            quitan al equipo y que, automatizadas, marcan una diferencia inmediata en el día
            a día de la clínica.
          </P>

          <H3>Responder a leads nuevos al instante</H3>
          <P>
            Cuando alguien escribe preguntando por un tratamiento, precios o disponibilidad,
            recibe respuesta inmediata, las 24 horas — sin que nadie del equipo tenga que
            interrumpir lo que está haciendo para coger el móvil.
          </P>

          <H3>Confirmar y recordar citas</H3>
          <P>
            El sistema puede enviar recordatorios automáticos antes de cada cita, pedir
            confirmación y gestionar cambios o cancelaciones directamente por WhatsApp. Esto
            es justo lo que reduce los no-shows, y cada uno que se evita se nota en la agenda
            y en la facturación del mes.
          </P>

          <H3>Cualificar consultas antes de pasarlas al equipo</H3>
          <P>
            Recoge qué necesita el paciente, qué tratamiento le interesa o qué urgencia tiene,{" "}
            <InternalLink href="/blog/chatbot-whatsapp-clinicas-rgpd">
              tratando esos datos conforme al RGPD
            </InternalLink>
            , para que cuando alguien del equipo retome la conversación lo haga con todo el
            contexto, sin tener que empezar de cero. Si quieres ver cómo se aplicaría esto a
            tu clínica en concreto, lo detallamos en el{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>
            .
          </P>

          <H2>Cómo funciona la automatización de WhatsApp paso a paso</H2>
          <P>
            El sistema se conecta al número de WhatsApp que tu clínica ya utiliza — no hace
            falta cambiar de número ni pedir a tus pacientes que escriban a otro sitio. A
            partir de ahí, se configura con la información real de tu clínica: tratamientos,
            precios orientativos, horarios y política de citas.
          </P>
          <P>
            Cuando un paciente escribe, el sistema{" "}
            <InternalLink href="/blog/automatizacion-clinicas-dentales">
              entiende la consulta y responde de forma natural
            </InternalLink>
            , igual que lo haría alguien de tu equipo con el móvil en la mano. Si la
            persona quiere reservar, puede ofrecerle los huecos libres y dejarle la cita
            agendada en la misma conversación. Y si detecta algo que requiere trato humano, traspasa la
            conversación a tu equipo con todo el historial ya recogido.
          </P>
          <P>
            Para los recordatorios de citas, el proceso es igual de sencillo: el sistema
            envía el recordatorio de cada cita en el momento adecuado y gestiona la
            respuesta del paciente — confirmación, cambio o cancelación — sin que nadie tenga
            que hacer ese seguimiento a mano, llamada por llamada.
          </P>

          <H2>Qué necesitas para empezar</H2>
          <P>
            Para empezar no necesitas mucho: el número de WhatsApp Business de la clínica,
            que sigue siendo el mismo, y la información sobre tratamientos, precios y horarios
            que ya manejas en el día a día. Con eso se configura el agente, que deja las citas
            en la agenda de su propio sistema.
          </P>
          <P>
            No hace falta formar a todo el equipo en un sistema complejo: la automatización
            funciona en segundo plano, y tu equipo solo entra en juego cuando el sistema le
            traspasa una conversación que necesita atención humana.
          </P>

          <H2>Cuánto cuesta y cuándo se amortiza</H2>
          <P>
            La pregunta importante no es cuánto cuesta automatizar WhatsApp, sino cuánto está
            costando ya no hacerlo. Cada lead que no recibe respuesta a tiempo puede acabar
            en otra clínica — y cada cita que termina en no-show es un hueco de agenda que
            no genera ingresos pero que sí ha ocupado un espacio que otro paciente podría
            haber ocupado.
          </P>
          <P>
            Sumando los leads fuera de horario que hoy se quedan sin respuesta y
            los no-shows que se reducen con recordatorios y confirmaciones automáticas, la
            inversión en automatizar WhatsApp suele amortizarse con muy pocas citas
            recuperadas al mes. A partir de ahí, el sistema sigue funcionando solo, mes tras
            mes, sin que nadie de tu equipo tenga que dedicarle tiempo extra. Si quieres ver
            esa cuenta aplicada a tu clínica, con tus propios números, en el{" "}
            <InternalLink href="/agente-whatsapp-clinicas-dentales">
              agente de WhatsApp para clínicas dentales
            </InternalLink>{" "}
            te explicamos cómo funciona el sistema y qué necesitas para ponerlo en marcha.
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
              ¿Listo para dejar de perder leads por la noche?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Es lo que hace el agente desde el primer día: contesta la consulta que entra a
              las once, recoge qué necesita el paciente y le deja la cita agendada antes de
              que escriba a la clínica de al lado.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-dentales"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver el agente para clínicas dentales →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
