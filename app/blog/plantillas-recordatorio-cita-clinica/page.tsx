import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"

const PATH = "/blog/plantillas-recordatorio-cita-clinica"
const TITLE = "Plantillas de recordatorio de cita para clínicas: ejemplos listos para usar | Cero Manual"
const DESCRIPTION =
  "Los recordatorios de cita por WhatsApp reducen los no-shows un 40%. Aquí tienes plantillas reales que puedes copiar y adaptar a tu clínica."
const HEADLINE = "Plantillas de recordatorio de cita para clínicas: ejemplos listos para copiar"

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
    publishedTime: "2026-06-13T00:00:00.000Z",
    modifiedTime: "2026-06-13T00:00:00.000Z",
  },
}

const faqs = [
  {
    q: "¿Cuántos recordatorios debo enviar por cita?",
    a: "Lo más habitual y efectivo es enviar dos: uno 24 horas antes, para que el paciente pueda organizarse con margen, y otro 2 horas antes, para evitar olvidos de última hora. Enviar más de dos suele resultar molesto y no mejora los resultados.",
  },
  {
    q: "¿Es mejor pedir confirmación o solo avisar?",
    a: "Pedir confirmación activa funciona mejor. Un recordatorio que solo informa («te recordamos tu cita») se puede ignorar sin consecuencias. Uno que pide una respuesta concreta — un «sí», un emoji, un botón — convierte el recordatorio en un pequeño compromiso, mucho más difícil de romper.",
  },
  {
    q: "¿Puedo usar estas plantillas tal cual o tengo que adaptarlas?",
    a: "Puedes usarlas como base, pero te recomendamos adaptar el tono y el nombre de la clínica para que suenen naturales y coherentes con el resto de tu comunicación. Cambiar cuatro palabras marca la diferencia entre un mensaje que parece de una centralita y uno que parece de tu equipo.",
  },
  {
    q: "¿Qué pasa si el paciente no responde al recordatorio?",
    a: "Si no responde al primer recordatorio, el segundo aviso (2h antes) suele resolver la mayoría de los casos. Si tampoco contesta, lo ideal es tener un seguimiento breve después de la franja de la cita, igual que harías con cualquier lead que tarda en responder.",
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
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
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

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-5 mb-4"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DBD4" }}
    >
      <p
        className="text-sm leading-relaxed whitespace-pre-line"
        style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
      >
        {children}
      </p>
    </div>
  )
}

export default function PlantillasRecordatorioPage() {
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
            13 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            A veces se piensa que lo importante es solo enviar el recordatorio — por el
            canal que sea, con el texto que sea. Pero el mensaje importa casi tanto como el
            canal. Un recordatorio bien escrito, con el tono adecuado y que pide una acción
            concreta, puede ser la diferencia entre que un paciente confirme su cita o que
            simplemente lo lea por encima y se olvide cinco minutos después.
          </P>
          <P>
            Los recordatorios por WhatsApp tienen una tasa de apertura del 95-98%, frente al
            20-25% del email o el SMS. Y cuando están bien planteados, reducen los no-shows
            hasta un 40% — un porcentaje nada despreciable si tenemos en cuenta que entre el
            12% y el 19% de las citas de una clínica terminan sin que el paciente aparezca.
          </P>
          <P>
            En este artículo vas a encontrar plantillas reales, listas para copiar y
            adaptar: recordatorios 24h antes, recordatorios 2h antes y mensajes de
            confirmación activa que piden respuesta. También verás qué debe incluir siempre
            un buen recordatorio y cómo automatizar todo el envío para que funcione solo.
          </P>

          <H2>Qué debe incluir un buen recordatorio de cita</H2>
          <P>
            Antes de entrar en las plantillas, conviene tener claro qué elementos no pueden
            faltar en ningún recordatorio, sea cual sea el momento en que se envíe:
          </P>
          <P>
            <strong>Nombre de la clínica.</strong> El paciente recibe decenas de mensajes al
            día — el nombre de tu clínica le da contexto inmediato sobre quién escribe y por
            qué.
          </P>
          <P>
            <strong>Fecha y hora exactas.</strong> Parece obvio, pero es el dato que más se
            consulta. Escríbelo de forma clara, sin abreviaturas confusas («martes 16 de
            junio a las 17:30», no «16/6 17:30h»).
          </P>
          <P>
            <strong>Nombre del profesional o tipo de cita.</strong> Ayuda al paciente a
            ubicar mentalmente la visita, especialmente si tiene varias citas programadas en
            distintos servicios.
          </P>
          <P>
            <strong>Una acción clara.</strong> Confirmar, cancelar o reprogramar. Cuanto más
            sencilla sea esa acción — responder «sí», pulsar un botón — más probable es que
            el paciente la haga.
          </P>
          <P>
            <strong>Tono cercano.</strong> Un recordatorio que suena a centralita genérica
            se lee distinto a uno que suena a tu equipo. Pequeños detalles — un emoji
            puntual, el nombre del paciente, una despedida cordial — marcan la diferencia.
          </P>

          <H2>Plantillas de recordatorio 24h antes</H2>
          <P>
            El recordatorio del día anterior tiene un objetivo principal: dar margen. Si el
            paciente tiene que reorganizar su día, todavía puede hacerlo sin problema.
          </P>
          <Template>
            {`Hola [Nombre] 👋 Te escribimos de [Clínica] para recordarte que tienes cita mañana [día] a las [hora] con [profesional/tratamiento].

Si necesitas cambiarla, avísanos respondiendo a este mensaje y te buscamos otro hueco. ¡Te esperamos! 😊`}
          </Template>
          <Template>
            {`📅 Recordatorio de cita

[Nombre], mañana [día] tienes cita a las [hora] en [Clínica] (dirección: [dirección]).

Si todo sigue igual no necesitas hacer nada. Si no puedes venir, escríbenos cuanto antes para dejar el hueco libre para otro paciente. ¡Gracias!`}
          </Template>

          <H2>Plantillas de recordatorio 2h antes</H2>
          <P>
            El segundo aviso, más cercano a la hora de la cita, es el que evita los olvidos
            de última hora — esos que ocurren no porque el paciente no quiera venir, sino
            porque el día se complica y la cita se le pasa por alto.
          </P>
          <Template>
            {`¡Hola [Nombre]! Solo un aviso rápido: tu cita en [Clínica] es hoy a las [hora], dentro de un par de horas. 🦷

Te esperamos. Si surge algo y no puedes venir, dínoslo y reorganizamos.`}
          </Template>
          <Template>
            {`⏰ Recordatorio: hoy a las [hora] tienes cita con [profesional] en [Clínica].

Si llegas con algo de adelanto, perfecto — si necesitas unos minutos más, avísanos por aquí. ¡Nos vemos pronto!`}
          </Template>

          <H2>Plantillas de confirmación activa (pide respuesta)</H2>
          <P>
            Aquí está el cambio que más impacto tiene: pasar de «te avisamos» a «confírmanos».
            Pedir una respuesta concreta convierte el recordatorio en un compromiso activo,
            mucho más difícil de ignorar que un simple aviso.
          </P>
          <Template>
            {`Hola [Nombre] 😊 Tienes cita en [Clínica] el [día] a las [hora].

¿Nos confirmas que vienes? Responde:
1️⃣ Sí, confirmo
2️⃣ Necesito cambiarla

¡Gracias!`}
          </Template>
          <Template>
            {`[Clínica] — Confirmación de cita

[Nombre], para asegurarte el hueco del [día] a las [hora], responde "SÍ" a este mensaje. Si no podemos confirmar la cita, liberaremos ese horario para otro paciente.

¡Gracias por avisarnos! 🙏`}
          </Template>

          <H2>Cómo automatizar el envío de estas plantillas</H2>
          <P>
            Tener buenas plantillas es solo la mitad del trabajo. La otra mitad es que se
            envíen solas, en el momento exacto, sin que nadie de tu equipo tenga que
            acordarse de hacerlo cita tras cita.
          </P>
          <P>
            Automatizar el envío significa que cada paciente recibe su recordatorio de 24h y
            su recordatorio de 2h sin intervención manual, con el tono de tu clínica — no
            con el de una centralita genérica. Y si el sistema detecta que alguien no
            confirma, puede activar un seguimiento adicional antes de que ese hueco se quede
            vacío.
          </P>
          <P>
            Este es exactamente el enfoque que explicamos en{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              cómo reducir los no-shows en tu clínica dental
            </InternalLink>
            : combinar el canal correcto (WhatsApp, con su 95-98% de apertura), el mensaje
            correcto (confirmación activa, no solo aviso) y la automatización para que todo
            esto ocurra sin esfuerzo añadido para tu equipo.
          </P>
          <P>
            El resultado, según los datos del sector, es una reducción de hasta un 40% en
            los no-shows — es decir, recuperar buena parte de ese 12-19% de citas que hoy se
            quedan vacías. Si quieres ver paso a paso cómo se monta este sistema, en{" "}
            <InternalLink href="/blog/como-reducir-no-shows-clinica-dental">
              este artículo
            </InternalLink>{" "}
            tienes las cinco estrategias completas, con ejemplos aplicados a clínicas
            dentales.
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
              ¿Quieres que estos recordatorios se envíen solos?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te explicamos cómo automatizar el envío de recordatorios por WhatsApp y
              reducir los no-shows de tu clínica hasta un 40% desde el primer mes.
            </p>
            <Link
              href="/blog/como-reducir-no-shows-clinica-dental"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo reducir los no-shows →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
