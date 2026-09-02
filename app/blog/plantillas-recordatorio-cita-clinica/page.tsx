import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/plantillas-recordatorio-cita-clinica"
const DATES = articleDates("plantillas-recordatorio-cita-clinica")
const TITLE = "Plantillas de recordatorio de cita en clínicas | Cero Manual"
const DESCRIPTION =
  "Los recordatorios de cita por WhatsApp son la forma más directa de reducir los no-shows. Aquí tienes plantillas reales que puedes copiar y adaptar a tu clínica."
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
    publishedTime: DATES.publishedTime,
    modifiedTime: DATES.modifiedTime,
  },
}

const faqs = [
  {
    q: "¿Cuántos recordatorios debo enviar por cita?",
    a: "Lo más habitual y efectivo es enviar dos: uno 24 horas antes, para que el paciente pueda organizarse con margen, y otro 2 horas antes, para evitar olvidos de última hora. Enviar más de dos suele resultar molesto y no mejora los resultados — a partir del tercero el paciente empieza a leer los mensajes en diagonal, que es justo lo contrario de lo que buscas. Si la cita se reservó con mucha antelación, una alternativa mejor que añadir un tercer aviso es adelantar el primero a 48 o 72 horas antes, para tener margen de recolocar el hueco si cancela.",
  },
  {
    q: "¿Es mejor pedir confirmación o solo avisar?",
    a: "Pedir confirmación activa funciona mejor. Un recordatorio que solo informa («te recordamos tu cita») se puede ignorar sin consecuencias. Uno que pide una respuesta concreta — un «sí», un emoji, un botón — convierte el recordatorio en un pequeño compromiso, mucho más difícil de romper. Además te da información accionable: quien responde que no puede venir te está liberando el hueco con horas de antelación, tiempo suficiente para ofrecérselo a otro paciente en lugar de descubrir el vacío cuando ya ha pasado la hora.",
  },
  {
    q: "¿Puedo usar estas plantillas tal cual o tengo que adaptarlas?",
    a: "Puedes usarlas como base, pero te recomendamos adaptar el tono y el nombre de la clínica para que suenen naturales y coherentes con el resto de tu comunicación. Cambiar cuatro palabras marca la diferencia entre un mensaje que parece de una centralita y uno que parece de tu equipo. Como referencia, escribe el recordatorio como lo diría por teléfono la persona de recepción que mejor trato tiene, y quita todo lo que no diría en voz alta. Ten en cuenta también que, si envías por la API de WhatsApp Business, las plantillas hay que darlas de alta y que Meta las apruebe antes de usarlas.",
  },
  {
    q: "¿Qué pasa si el paciente no responde al recordatorio?",
    a: "Si no responde al primer recordatorio, el segundo aviso (2h antes) suele resolver la mayoría de los casos. Si tampoco contesta, lo ideal es tener un seguimiento breve después de la franja de la cita, igual que harías con cualquier lead que tarda en responder. Ese mensaje posterior cumple dos funciones: recupera al paciente que simplemente se despistó y te dice cuáles son los huecos que de verdad se han perdido. Y en agendas con lista de espera, un no-show sin respuesta a dos horas vista es señal suficiente para empezar a ofrecer ese hueco a otro paciente.",
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
            13 de junio de 2026 · 7 min de lectura
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
            Los recordatorios por WhatsApp se apoyan en las tasas de apertura de referencia
            del sector — del 95-98%, frente al 20-25% del email o el SMS. Y cuando están
            bien planteados, recortan de forma notable los no-shows, que en clínicas
            privadas suelen moverse en una horquilla de entre el 12% y el 19% de las citas
            programadas.
          </P>
          <P>
            En este artículo vas a encontrar plantillas reales, listas para copiar y
            adaptar: recordatorios 24h antes, recordatorios 2h antes y mensajes de
            confirmación activa que piden respuesta. También verás qué debe incluir siempre
            un buen recordatorio y cómo automatizar todo el envío para que funcione solo.
          </P>

          <H2>Qué debe incluir un buen recordatorio de cita</H2>
          <P>
            Un buen recordatorio incluye cinco elementos: nombre de la clínica, fecha y hora
            exactas, profesional o tipo de cita, una acción clara que el paciente pueda
            hacer en un toque, y un tono cercano. Si falta alguno, el mensaje se lee por
            encima y no provoca ninguna reacción.
          </P>
          <P>
            Antes de entrar en las plantillas, conviene ver qué aporta cada uno de esos
            elementos, sea cual sea el momento en que se envíe el mensaje:
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
          <P>
            Con esos elementos fijos, lo que cambia entre una plantilla y otra es el momento
            del envío — y cada momento persigue un objetivo distinto:
          </P>

          <BlogTable
            headers={[
              "Momento del envío",
              "Objetivo",
              "Qué le pides al paciente",
              "Cuándo usarlo",
            ]}
            rows={[
              [
                "24 horas antes",
                "Dar margen para reorganizar el día sin perder la cita",
                "Nada, salvo que necesite cambiarla",
                "Siempre: es el recordatorio base de cualquier clínica",
              ],
              [
                "2 horas antes",
                "Evitar el olvido de última hora",
                "Nada: solo refrescar la hora y el sitio",
                "En citas cortas o de mucha rotación, donde el hueco es difícil de recolocar",
              ],
              [
                "Confirmación activa",
                "Convertir el aviso en un compromiso y liberar huecos con antelación",
                "Una respuesta concreta: «sí», un número o un botón",
                "En tratamientos largos o de ticket alto, y en agendas con lista de espera",
              ],
            ]}
          />

          <H2>Plantillas de recordatorio 24h antes</H2>
          <P>
            El recordatorio de 24 horas antes debe informar sin exigir nada: fecha, hora,
            profesional y una puerta abierta por si el paciente necesita cambiarla. Su
            objetivo es dar margen — si tiene que reorganizar su día, todavía está a tiempo
            de hacerlo sin dejarte el hueco vacío. Estas dos plantillas cubren los dos tonos
            más habituales, uno conversacional y otro más formal.
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
            El recordatorio de 2 horas antes tiene que ser corto y directo: hora, sitio y
            poco más. Es el que evita los olvidos de última hora — esos que ocurren no
            porque el paciente no quiera venir, sino porque el día se complica y la cita se
            le pasa por alto. A esta distancia ya no tiene sentido pedir confirmación: si no
            puede venir, lo que necesitas es que te lo diga cuanto antes.
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
            Una plantilla de confirmación activa es la que pide una respuesta concreta —un
            «sí», un número, un botón— en lugar de limitarse a informar. Es el cambio que
            más impacto tiene sobre los no-shows, porque convierte el recordatorio en un
            pequeño compromiso: mucho más difícil de ignorar que un aviso que no exige nada
            de vuelta.
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
            El envío se automatiza conectando la agenda de tu software de gestión con
            WhatsApp, de forma que cada cita dispare sus mensajes sola. Tener buenas
            plantillas es solo la mitad del trabajo: la otra mitad es que salgan en el
            momento exacto, sin que nadie de tu equipo tenga que acordarse cita tras cita.
          </P>
          <P>
            La mayoría de plataformas del sector ya traen recordatorios básicos —ClinicCloud
            o Klinikare en dental, Booksy o Koibox en estética—, y para muchas clínicas eso
            cubre el aviso de 24 horas. El límite aparece con la confirmación activa: envían
            el mensaje, pero no gestionan la respuesta, así que si el paciente contesta «no
            puedo, ¿lo movemos al jueves?» alguien tiene que leerlo y recolocar el hueco a
            mano.
          </P>
          <P>
            Automatizar de verdad significa que cada paciente recibe su recordatorio de 24h
            y su recordatorio de 2h sin intervención manual, con el tono de tu clínica — no
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
            El resultado es una caída notable de los no-shows — es decir, recuperar buena
            parte de ese 12-19% de citas que hoy se quedan vacías. Montar ese circuito sobre
            tu agenda es justo lo que resolvemos con los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos de citas por WhatsApp
            </InternalLink>
            : las plantillas de arriba salen solas en el momento exacto, con el tono de tu
            clínica, y las confirmaciones se gestionan sin que nadie tenga que estar
            pendiente del móvil.
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
              reducir los no-shows de tu clínica desde el primer mes.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo automatizar los recordatorios →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
