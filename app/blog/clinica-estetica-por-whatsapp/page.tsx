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

const PATH = "/blog/clinica-estetica-por-whatsapp"
const DATES = articleDates("clinica-estetica-por-whatsapp")
const TITLE = "Clínica estética por WhatsApp: guía completa | Cero Manual"
const DESCRIPTION =
  "Cómo gestionar tu clínica estética por WhatsApp: consultas, citas y seguimiento sin que el equipo esté pendiente del móvil todo el día."
const ARTICLE_DESCRIPTION =
  "Cómo gestionar las consultas y citas de una clínica estética por WhatsApp: qué se puede automatizar, qué necesita a una persona y qué cambia en el día a día del equipo."
const HEADLINE =
  "Clínica estética por WhatsApp: cómo gestionar consultas y citas sin volverte loco"

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
    q: "¿Puedo usar el mismo número de WhatsApp que ya tengo en mi clínica?",
    a: "Sí. El sistema se conecta al número de WhatsApp Business que ya utilizas, así que para tus pacientes no cambia nada — siguen escribiendo al mismo sitio de siempre. No hace falta crear un número nuevo ni comunicar ningún cambio a tu base de pacientes.",
  },
  {
    q: "¿Qué pasa si alguien escribe fuera de horario y no hay nadie para responder?",
    a: "Con automatización, el sistema responde al instante aunque sean las once de la noche o un domingo. Resuelve la duda, recoge los datos del interesado y, si procede, agenda la cita directamente. Cuando abres el lunes, la conversación ya está resuelta o el lead ya tiene cita.",
  },
  {
    q: "¿El equipo tiene que aprender algún sistema nuevo?",
    a: "No de forma significativa. El chatbot funciona en el mismo WhatsApp que ya usa tu equipo, y solo interviene cuando hace falta una persona. Lo único nuevo es el panel donde se ven las citas, y ahí no hace falta estar pendiente del móvil para los mensajes rutinarios.",
  },
  {
    q: "¿Cuánto tiempo al día se ahorra con la automatización?",
    a: "Depende del volumen de mensajes: cuantas más consultas y confirmaciones repetitivas se automatizan, más tiempo del equipo queda libre. Ese tiempo pasa a dedicarse a la atención presencial o a tareas que realmente requieren presencia humana.",
  },
  {
    q: "¿Es posible gestionar todas las citas solo por WhatsApp?",
    a: "Sí. WhatsApp puede ser el canal único de citas de una clínica estética: el sistema responde la consulta, muestra la disponibilidad, confirma la cita y envía el recordatorio, todo dentro de la misma conversación. Tu equipo solo recibe un aviso cuando hace falta intervenir, por ejemplo si el paciente pide algo muy específico.",
  },
  {
    q: "¿El equipo pierde el control de la agenda si se automatiza?",
    a: "Al contrario: gana visibilidad. Cada cita que se reserva por WhatsApp queda anotada en la agenda del sistema, en lugar de repartida entre chats, notas y memoria. El equipo deja de estar pendiente del móvil, y los casos que piden criterio le siguen llegando a él.",
  },
  {
    q: "¿Puedo automatizar solo fuera de horario y responder yo durante el día?",
    a: "Sí, y es una configuración habitual. El sistema puede actuar solo en las franjas en que no hay nadie disponible —tardes, noches, fines de semana— y ceder el control a tu equipo durante el horario de atención. Así no hay ningún momento del día en que un mensaje se quede sin respuesta.",
  },
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: ARTICLE_DESCRIPTION,
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

export default function ClinicaEsteticaWhatsappPage() {
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
            14 de junio de 2026 · 10 min de lectura
          </p>

          {/* Intro */}
          <P>
            Gestionar una clínica estética por WhatsApp funciona cuando cada consulta recibe
            una respuesta rápida con información concreta y cada petición de cita acaba en un
            hueco real de la agenda. Para eso hacen falta un responsable del canal en cada
            franja, respuestas estándar para lo que más se repite y, cuando el volumen o los
            horarios desbordan al equipo, automatizar la primera respuesta y la reserva.
          </P>
          <P>
            WhatsApp se ha convertido en el canal principal por el que los pacientes
            contactan con clínicas estéticas. Normalmente, alguien del equipo tiene que
            revisar el móvil, leer el mensaje, pensar la respuesta y escribirla: un proceso
            que, multiplicado por todas las consultas del día, consume horas y que, cuando el
            equipo está atendiendo pacientes, no ocurre a tiempo.
          </P>

          <H2>Por qué los pacientes prefieren WhatsApp para contactar con clínicas estéticas</H2>
          <P>
            La razón es sencilla: es el canal que ya tienen abierto. Cuando alguien decide
            preguntar por un tratamiento, lo hace desde donde está — y donde está, casi
            siempre, es WhatsApp. No tiene que buscar el teléfono de la clínica ni esperar a
            que sea hora de llamar. Escribe como escribe a cualquier persona y espera una
            respuesta rápida.
          </P>
          <P>
            Quien pregunta por un tratamiento está en un momento de decisión activa: se
            plantea dar el paso ahora, y por eso espera la respuesta en minutos. Si tarda, es
            fácil que mientras esperaba haya encontrado otra clínica que sí le contestó.
          </P>
          <P>
            Una respuesta inmediata transmite, además, profesionalidad y confianza antes
            incluso de que el paciente haya pisado la clínica.
          </P>
          <P>
            WhatsApp también permite conversaciones naturales: el paciente puede preguntar,
            aclarar, pedir más información y decidir, todo en el mismo hilo, sin tener que
            rellenar formularios.
          </P>

          <H2>Los problemas de gestionar WhatsApp manualmente en una clínica</H2>
          <P>
            El primero y más obvio: no siempre hay alguien disponible. Una clínica con dos
            o tres personas en plantilla tiene el móvil atendido mientras hay personal en
            recepción, pero no a las ocho de la tarde ni en mitad de una sesión con un
            paciente. En esas franjas, los mensajes se acumulan y los leads se enfrían.
          </P>
          <P>
            El segundo problema es la inconsistencia. Cuando responden distintas personas,
            el tono cambia y los precios que se comunican pueden variar. El paciente no lo sabe, pero esa falta de
            coherencia afecta a la imagen de la clínica y, en algunos casos, genera
            confusión o desconfianza.
          </P>
          <P>
            El tercero es el coste de oportunidad. Cada rato que alguien del equipo dedica
            a responder mensajes rutinarios — preguntas sobre precios, disponibilidad,
            tratamientos básicos — es tiempo que no está dedicando a la atención presencial
            o a tareas que realmente requieren presencia humana.
          </P>
          <P>
            El cuarto son las citas a mano. Cada petición de cita desencadena una cadena de
            pasos: mirar la agenda, ofrecer un hueco, esperar a que el paciente conteste,
            anotar la cita y acordarse de confirmarla. Si el paciente tarda en responder, el
            hueco puede haberse ocupado entretanto. Y con decenas de conversaciones abiertas
            aparecen los errores típicos: citas duplicadas, horas mal anotadas, pacientes que
            confirman por un canal y tienen la cita apuntada en otro.
          </P>

          <H2>Cómo organizar la gestión de WhatsApp en tu clínica</H2>
          <P>
            Antes de automatizar, conviene ordenar el canal. El primer paso es decidir qué
            persona concreta es responsable de WhatsApp en cada franja horaria.
          </P>
          <P>
            El segundo es crear respuestas estándar para las consultas que más se repiten:
            precios orientativos, duración de tratamientos, cómo se pide cita, qué preparación
            hace falta. Con{" "}
            <InternalLink href="/blog/whatsapp-business-clinicas-esteticas">
              WhatsApp Business puedes configurar respuestas rápidas
            </InternalLink>{" "}
            que ahorran tiempo — aunque siguen requiriendo que alguien las envíe.
          </P>
          <P>
            El tercero es establecer un protocolo para los mensajes fuera de horario: un
            mensaje automático que informe de cuándo se responderá y que recoja los datos
            necesarios para dar seguimiento al día siguiente. Con estos tres pasos ya puedes
            llevar la clínica estética por WhatsApp con orden, aunque todo sigue dependiendo
            de que alguien esté delante del móvil.
          </P>

          <H2>Cuándo automatizar WhatsApp en tu clínica estética</H2>
          <P>
            Automatizar tiene sentido cuando gestionar la clínica estética por WhatsApp a mano
            deja de dar abasto: cuando el volumen de mensajes supera lo que el equipo puede
            atender sin descuidar la atención presencial, o cuando los mensajes llegan en
            franjas en las que no hay nadie disponible para responder.
          </P>
          <P>
            Automatizar la primera respuesta significa responder con información concreta
            —el precio, el hueco disponible, la preparación que necesita el tratamiento— en el
            tono de tu clínica y en segundos, sea la hora que sea.
          </P>
          <P>
            Un{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            responde al instante las preguntas frecuentes, recoge los datos del interesado,
            le reserva la cita en un hueco libre y avisa a tu equipo solo cuando hace falta
            intervención.
          </P>
          <P>
            El tamaño de la clínica importa menos que una pregunta: si estás perdiendo leads
            porque no puedes responder a tiempo,{" "}
            <InternalLink href="/blog/cuanto-cuesta-chatbot-whatsapp-clinica">
              la automatización no es un lujo
            </InternalLink>
            .
          </P>

          <H3>Qué dejar al sistema y qué a tu equipo</H3>
          <P>
            Al sistema, todo lo rutinario: precios, disponibilidad, horarios, tratamientos
            estándar, cómo llegar a la clínica. Son preguntas que no necesitan criterio
            humano, solo información correcta y rápida.
          </P>
          <P>
            A tu equipo, lo que sí lo necesita: reclamaciones, dudas médicas, negociaciones de
            precio y pacientes que prefieren hablar con una persona. En esos casos el sistema
            deriva la conversación con todo el contexto ya recogido
            —qué tratamiento le interesa, qué ha preguntado, qué datos ha dejado—, para que
            quien la retoma no empiece de cero.
          </P>

          <H2>Cómo gestionar las citas desde WhatsApp paso a paso</H2>
          <P>
            En la práctica, una cita por WhatsApp sigue un recorrido corto. El paciente
            escribe preguntando por un tratamiento o pidiendo cita. Recibe respuesta al
            momento, resuelve sus dudas básicas y se le ofrecen huecos reales de la agenda de
            la clínica, sin el ir y venir de mensajes que empieza con un «¿qué día te va
            bien?».
          </P>
          <P>
            Cuando elige un horario, la cita queda reservada en la agenda y el paciente recibe
            la confirmación en el mismo chat. Si más adelante necesita cambiarla o cancelarla,
            lo hace desde esa misma conversación: el sistema le propone huecos alternativos y
            reagenda sin que nadie del equipo tenga que tocar la agenda. Así se eliminan de
            raíz las citas duplicadas y las horas mal anotadas.
          </P>
          <P>
            Antes de la cita, el paciente recibe un aviso para confirmar asistencia; en{" "}
            <InternalLink href="/blog/recordatorios-citas-whatsapp-clinica">
              cómo enviar recordatorios de citas por WhatsApp
            </InternalLink>{" "}
            explicamos qué debe incluir y cuándo enviarlo. Si quieres ver cómo se monta este
            circuito completo en tu clínica, en{" "}
            <InternalLink href="/agente-whatsapp-clinicas-esteticas">
              agente de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            te explicamos cómo funcionaría con tus tratamientos.
          </P>

          <H2>Qué resultados puedes esperar</H2>
          <P>
            El cambio más inmediato es en los tiempos de respuesta: de horas a segundos, a
            cualquier hora. Las consultas que antes se quedaban sin contestar empiezan a
            recibir respuesta y a convertirse en citas.
          </P>
          <P>
            El segundo cambio es en la carga del equipo: las preguntas rutinarias dejan de
            llegarle. Tu recepcionista deja de tener que mirar el móvil cada cinco minutos y
            puede concentrarse en la atención directa al paciente.
          </P>
          <P>
            El tercero es la consistencia: todos los pacientes reciben la misma información y
            con el mismo tono.
            Si quieres ver cómo funciona en la práctica y qué necesitas para ponerlo en marcha
            en tu clínica, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              este artículo sobre chatbots de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            lo explicamos con detalle.
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
              ¿Quieres dejar de gestionar WhatsApp a mano?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Descubre cómo un chatbot de WhatsApp puede responder cada consulta al instante,
              agendar citas y cualificar leads en tu clínica estética — sin que tu equipo
              tenga que estar pendiente del móvil.
            </p>
            <Link
              href="/blog/chatbot-whatsapp-para-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Ver cómo funciona el chatbot →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
