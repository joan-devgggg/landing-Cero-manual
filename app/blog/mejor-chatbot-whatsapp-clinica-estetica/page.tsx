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

const PATH = "/blog/mejor-chatbot-whatsapp-clinica-estetica"
const DATES = articleDates("mejor-chatbot-whatsapp-clinica-estetica")
const TITLE = "Mejor chatbot WhatsApp para clínica estética | Cero Manual"
const DESCRIPTION =
  "No todos los chatbots de WhatsApp son iguales. Te explicamos qué criterios usar para elegir el mejor para tu clínica estética. Reserva tu auditoría gratuita."
const HEADLINE = "Cómo elegir el mejor chatbot de WhatsApp para tu clínica estética"

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
    q: "¿Cuánto debería costar un chatbot de WhatsApp para mi clínica?",
    a: "El precio varía mucho según lo que incluya: hay soluciones genéricas muy baratas que apenas hacen más que un menú automático, y soluciones a medida que agendan citas reales, cualifican leads y pasan a tu equipo los casos que lo piden. Antes de mirar el precio, conviene mirar qué hace exactamente cada opción.",
  },
  {
    q: "¿Necesito conocimientos técnicos para gestionar el chatbot una vez instalado?",
    a: "No deberías necesitarlos. Un chatbot bien implementado se configura una vez con la información de tu clínica y funciona solo, sin que tengas que tocar nada en el día a día. Si el proveedor te dice que vas a tener que aprender a usar una plataforma compleja o dedicar tiempo semanal a mantenerlo, probablemente no es la opción adecuada para una clínica.",
  },
  {
    q: "¿Qué pasa si el chatbot no entiende una consulta de un paciente?",
    a: "Un buen chatbot reconoce cuándo no tiene una respuesta clara o cuándo la situación requiere trato humano, y escala la conversación a tu equipo con todo el contexto ya recogido. Si el sistema que estás valorando no tiene esta función — o simplemente se queda «atascado» repitiendo lo mismo — es una señal de que no está pensado para un entorno real como el de una clínica.",
  },
  {
    q: "¿Puedo cambiar de proveedor de chatbot si no estoy satisfecho?",
    a: "Deberías poder, y es algo que conviene preguntar antes de firmar nada. Un chatbot bien implementado se conecta a tu número de WhatsApp y se nutre de la información de tu clínica — esa información es tuya. Si el proveedor te «encierra» en su plataforma con contratos largos o dificulta exportar tus datos, es una señal de alerta.",
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

export default function MejorChatbotWhatsappClinicaEsteticaPage() {
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
            13 de junio de 2026 · 6 min de lectura
          </p>

          {/* Intro */}
          <P>
            El mejor chatbot de WhatsApp para clínicas estéticas es el que se conecta al número
            que ya usa tu clínica, entiende lo que escribe el paciente sin menús, agenda citas
            con disponibilidad real y trabaja con tus tratamientos y precios. Para elegirlo,
            compara las opciones con esos criterios, pregunta al proveedor qué pasa cuando el
            chatbot no sabe responder y pruébalo con casos reales antes de firmar.
          </P>
          <P>
            Hay decenas de opciones, desde plantillas genéricas hasta sistemas a medida, y
            elegir mal significa meses de consultas mal atendidas y, en muchos casos,{" "}
            <InternalLink href="/blog/cuanto-cuesta-chatbot-whatsapp-clinica">
              un coste mensual
            </InternalLink>{" "}
            que no se traduce en ni una sola cita nueva.
          </P>

          <H2>Criterios para elegir el mejor chatbot de WhatsApp para clínicas estéticas</H2>
          <P>
            Un sistema que funciona bien para una tienda online puede quedarse corto en una
            clínica estética, donde las conversaciones son más delicadas y todo gira en torno
            a la agenda. Estos son los criterios que cuentan.
          </P>
          <H3>Que se conecte al WhatsApp que ya usa tu clínica</H3>
          <P>
            El chatbot debe integrarse con tu número de WhatsApp actual — el que ya
            conocen tus pacientes — y no obligarte a comunicar un nuevo canal o a duplicar
            conversaciones entre dos números distintos. Si un proveedor te pide cambiar de
            número o usar una app aparte, ya estás perdiendo parte del valor del canal.
          </P>
          <H3>Que entienda lenguaje natural</H3>
          <P>
            Un chatbot que funciona a base de «responde 1 para precios, 2 para citas» frustra
            a quien escribe y no resuelve nada que no resuelva una página de preguntas
            frecuentes. El paciente tiene que poder escribir con sus palabras y recibir
            respuesta a lo que ha preguntado.
          </P>
          <H3>Que pueda agendar citas reales, con disponibilidad real</H3>
          <P>
            Un chatbot que solo dice «en breve te confirmamos la cita» traslada el trabajo
            a tu equipo y, mientras tanto, deja la puerta abierta a que esa persona reserve
            en otra clínica. El sistema debería poder consultar la disponibilidad real y
            dejar la cita confirmada en el mismo momento de la conversación: en tu programa
            de gestión, si se deja conectar, o en un software a medida con el agente dentro
            si no.
          </P>
          <H3>Que se entrene con la información real de tu clínica</H3>
          <P>
            Tratamientos, precios orientativos, duración de las sesiones, políticas de
            cancelación, tono de comunicación... El chatbot debería hablar de tu clínica
            con tus datos.
          </P>

          <H2>Funcionalidades imprescindibles vs opcionales</H2>
          <P>
            Al comparar opciones es fácil dejarse impresionar por listas larguísimas de
            funcionalidades. Separa lo que tu clínica necesita de lo que es relleno comercial.
          </P>
          <H3>Imprescindibles</H3>
          <P>
            Respuesta inmediata las 24 horas, comprensión de lenguaje natural, agendado de
            citas con disponibilidad real, escalado a una persona del equipo cuando la
            conversación lo requiere, y configuración con la información específica de tu
            clínica. Si una de estas piezas falta, el chatbot va a generar más trabajo del
            que ahorra. Para entender en detalle cómo se aplican estas funciones en el día
            a día de una clínica estética, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            explicamos cada una con más detalle.
          </P>
          <H3>Opcionales (pero útiles según tu caso)</H3>
          <P>
            Recordatorios automáticos de citas para reducir no-shows, envío de fotos o
            catálogos de tratamientos, recogida de valoraciones tras la visita, o
            integración con campañas de captación. Aportan valor, pero primero el chatbot
            tiene que cumplir lo básico.
          </P>

          <H2>Preguntas que debes hacer antes de contratar</H2>
          <P>
            Antes de firmar con cualquier proveedor, hazle estas preguntas. Sirven para
            distinguir una solución seria de una que solo suena bien en la presentación
            comercial.
          </P>
          <P>
            ¿Puedo probarlo con casos reales de mi clínica antes de comprometerme? ¿Cómo
            se entrena el chatbot con la información de mis tratamientos y precios, y
            quién se encarga de mantenerla actualizada? ¿Qué pasa si el chatbot no sabe
            responder algo — se queda callado, repite lo mismo, o avisa a alguien de mi
            equipo? ¿Puede agendar citas directamente en mi calendario actual, o solo
            «recoge el interés» para que luego alguien lo gestione? ¿Cuánto tiempo se
            tarda en tenerlo funcionando desde que se firma? ¿Y{" "}
            <InternalLink href="/blog/chatbot-whatsapp-clinicas-rgpd">
              qué pasa con mis datos y conversaciones
            </InternalLink>{" "}
            si en algún momento decido cambiar de proveedor?
          </P>

          <H2>Señales de que un chatbot no es el adecuado para tu clínica</H2>
          <P>
            Conviene detectarlas antes de firmar o, como tarde, en los primeros días de uso.
          </P>
          <P>
            Si las respuestas suenan claramente a guion genérico y no reflejan la
            información real de tu clínica, el sistema no está bien entrenado. Si el
            chatbot no puede agendar citas y se limita a derivar todo a tu equipo, apenas
            estás automatizando nada. Si no hay forma de que escale una conversación a una
            persona cuando hace falta, corres el riesgo de que un paciente con una duda
            delicada se quede sin respuesta adecuada. Y si el proveedor no puede explicarte
            con claridad qué pasa con la conversación de un paciente cuando el chatbot «no
            sabe qué responder», es una señal de que ese escenario no se ha pensado.
          </P>

          <H2>Cómo probar un chatbot antes de comprometerte</H2>
          <P>
            La mejor forma de saber si un chatbot funciona para tu clínica es verlo trabajar
            con casos reales, o lo más parecido posible. Pide una demo configurada con tratamientos y precios similares a los
            tuyos, y haz tú mismo las preguntas que más te hacen tus pacientes en el día a
            día: «¿cuánto cuesta?», «¿tenéis hueco esta semana?», «¿duele el tratamiento
            X?».
          </P>
          <P>
            Fíjate sobre todo en cómo responde cuando la pregunta es ambigua o cuando no tiene
            la información exacta. Y, si es posible, pide un
            periodo de prueba real conectado a tu WhatsApp, con un grupo reducido de
            conversaciones, antes de pasar a producción con todo el volumen de tu clínica.
          </P>
          <P>
            Si quieres ver cómo sería esto aplicado a tu clínica, con tus tratamientos y tus
            horarios, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            explicamos cómo se configura un sistema así desde cero y qué necesitas para
            ponerlo en marcha.
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
              ¿Quieres ver cómo funcionaría en tu clínica antes de decidir?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te mostramos, con tus propios tratamientos y horarios, cómo
              respondería un chatbot de WhatsApp a las preguntas que más recibes — y cómo
              agendaría citas sin que nadie de tu equipo tenga que intervenir.
            </p>
            <Link
              href="/agente-whatsapp-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero verlo en mi clínica →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
