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

const PATH = "/blog/chatbot-whatsapp-clinicas-rgpd"
const DATES = articleDates("chatbot-whatsapp-clinicas-rgpd")
const TITLE = "Chatbot de WhatsApp para clínicas y RGPD: todo lo que necesitas saber | Cero Manual"
const DESCRIPTION =
  "¿Es legal usar un chatbot de WhatsApp en tu clínica? Te explicamos cómo cumplir el RGPD con un agente IA y qué debes tener en cuenta."
const HEADLINE =
  "Chatbot de WhatsApp para clínicas y RGPD: cómo cumplir la ley sin complicaciones"

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
    q: "¿Es legal que un chatbot de WhatsApp gestione datos de pacientes?",
    a: "Sí, siempre que se haga conforme al RGPD: informando a la persona de cómo se tratan sus datos, recogiendo su consentimiento cuando corresponda y limitando el tratamiento a la información necesaria para atender su consulta o agendar su cita. La tecnología en sí no es el problema — lo importante es cómo se configura y qué garantías ofrece el proveedor.",
  },
  {
    q: "¿Necesito el consentimiento explícito del paciente para usar el chatbot?",
    a: "Para responder a una consulta que el propio paciente inicia por WhatsApp, suele bastar con la información clara sobre el tratamiento de sus datos. Si el chatbot va a guardar datos de salud o usarlos con fines distintos a la atención solicitada —como marketing—, sí se necesita un consentimiento específico y separado para esos usos adicionales.",
  },
  {
    q: "¿Qué pasa si el chatbot usa una IA de un proveedor externo?",
    a: "Es habitual, y no supone un problema siempre que exista un contrato de encargado de tratamiento con ese proveedor, que garantice que los datos se tratan con las mismas garantías que exige el RGPD, no se usan para otros fines, y se aplican medidas de seguridad adecuadas. Antes de contratar cualquier solución, conviene pedir esta información por escrito.",
  },
  {
    q: "¿Cuánto tiempo se pueden conservar las conversaciones del chatbot?",
    a: "El RGPD exige que los datos no se conserven más tiempo del necesario para la finalidad por la que se recogieron. En la práctica, esto significa definir un plazo de conservación para las conversaciones —por ejemplo, mientras dure la relación con el paciente más el plazo legal aplicable— y poder eliminarlas o anonimizarlas pasado ese tiempo.",
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

export default function ChatbotWhatsappClinicasRgpdPage() {
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
            13 de junio de 2026 · 7 min de lectura
          </p>

          {/* Intro */}
          <P>
            Cuando un dueño de clínica empieza a valorar un chatbot de WhatsApp, casi
            siempre surge la misma duda antes que cualquier otra: «¿esto es legal? ¿puedo
            tener un bot hablando con mis pacientes y gestionando sus datos sin meterme en
            un problema con el RGPD?».
          </P>
          <P>
            Es una pregunta razonable —en una clínica se manejan datos especialmente
            sensibles, los de salud— y conviene tener la respuesta clara antes de dar el
            paso. La buena noticia es que sí, es legal, y no es complicado de cumplir si
            la solución está bien configurada desde el principio.
          </P>
          <P>
            En este artículo vas a entender si es legal usar un chatbot de WhatsApp en tu
            clínica, qué dice exactamente el RGPD sobre los datos de tus pacientes, cómo
            configurar el chatbot para cumplirlo, qué documentos necesitas tener
            preparados y un checklist final para repasarlo todo de un vistazo.
          </P>

          <H2>¿Es legal usar un chatbot de WhatsApp en una clínica?</H2>
          <P>
            Sí. No existe ninguna norma que prohíba usar un chatbot para atender a
            pacientes por WhatsApp. Lo que exige la ley —el RGPD y, en España, la LOPDGDD—
            es que el tratamiento de los datos que ese chatbot recoge y gestiona se haga
            con las mismas garantías que exigirías a cualquier otro canal de comunicación
            con tus pacientes.
          </P>
          <P>
            En la práctica, esto significa que el chatbot debe informar de cómo se tratan
            los datos, no recoger más información de la necesaria, contar con las medidas
            de seguridad adecuadas y, si usa servicios de terceros —como una IA en la
            nube—, que ese proveedor también cumpla con sus obligaciones. Nada de esto es
            distinto a lo que ya deberías tener cubierto si tu clínica usa, por ejemplo,
            un software de gestión de pacientes o un sistema de citas online.
          </P>
          <P>
            Dicho de otra forma: el chatbot no añade un riesgo nuevo por el hecho de ser
            un chatbot. El riesgo —y la responsabilidad— es la misma que ya tienes con
            cualquier canal donde se recogen datos de pacientes. La diferencia es que,
            como WhatsApp es el canal que más abren tus pacientes —entre un 95% y un 98%
            de los mensajes se leen—, conviene tenerlo bien configurado desde el primer
            día.
          </P>

          <H2>Qué dice el RGPD sobre el tratamiento de datos de pacientes</H2>
          <P>
            El RGPD clasifica los datos de salud como una categoría especial de datos,
            que requiere un nivel de protección más alto que otros datos personales. Esto
            no significa que no se puedan tratar —de hecho, una clínica trata datos de
            salud constantemente— sino que hay que hacerlo con especial cuidado.
          </P>

          <H3>Principio de minimización de datos</H3>
          <P>
            El chatbot solo debe recoger los datos estrictamente necesarios para atender
            la consulta o agendar la cita: nombre, contacto, tratamiento de interés,
            disponibilidad. No tiene sentido —ni es legal— que pida información clínica
            detallada por WhatsApp si esa información se va a recoger de todos modos en la
            consulta presencial.
          </P>

          <H3>Información clara sobre el tratamiento de datos</H3>
          <P>
            La persona que escribe por WhatsApp tiene derecho a saber quién trata sus
            datos, con qué finalidad, durante cuánto tiempo y qué derechos tiene —acceso,
            rectificación, supresión—. Esta información se suele ofrecer mediante un
            enlace a la política de privacidad, de forma accesible desde la propia
            conversación.
          </P>

          <H3>Base legal para el tratamiento</H3>
          <P>
            Cuando un paciente escribe voluntariamente para preguntar por un tratamiento o
            pedir una cita, está iniciando una relación precontractual —esa es,
            normalmente, la base legal que permite al chatbot responder y gestionar esos
            datos. Si más adelante el chatbot va a usar esos datos para otros fines, como
            enviar recordatorios o comunicaciones comerciales, hace falta una base legal
            adicional —normalmente, el consentimiento explícito.
          </P>

          <H2>Cómo configurar el chatbot para cumplir el RGPD</H2>
          <P>
            La buena noticia es que cumplir el RGPD con un chatbot de WhatsApp no requiere
            grandes complicaciones técnicas —se trata, sobre todo, de configurarlo
            correctamente desde el inicio. Esto es lo que hay que tener en cuenta.
          </P>

          <H3>Limitar la información que solicita el chatbot</H3>
          <P>
            Configura el chatbot para que recoja solo lo necesario: datos de contacto,
            tratamiento de interés y disponibilidad. Cualquier dato clínico más detallado
            debe quedar para la consulta con el profesional, no para la conversación por
            WhatsApp.
          </P>

          <H3>Incluir el aviso de privacidad en la conversación</H3>
          <P>
            El chatbot puede incluir, de forma natural dentro de la conversación, un
            enlace a la política de privacidad de tu clínica —por ejemplo, al recoger el
            primer dato personal o al ofrecer agendar una cita. No tiene que ser intrusivo
            ni interrumpir la conversación: basta con que esté disponible y accesible.
          </P>

          <H3>Verificar el contrato con el proveedor del chatbot</H3>
          <P>
            Si el chatbot usa servicios de IA de un tercero para generar las respuestas, tu
            clínica sigue siendo responsable del tratamiento, pero el proveedor actúa como
            encargado del tratamiento. Esto debe quedar reflejado en un contrato que
            garantice que los datos se tratan conforme al RGPD, con medidas de seguridad
            adecuadas y sin usos no autorizados. Para entender qué hace exactamente este
            tipo de agente y cómo se configura en el día a día, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            lo explicamos con detalle.
          </P>

          <H3>Definir plazos de conservación de las conversaciones</H3>
          <P>
            Establece durante cuánto tiempo se conservan las conversaciones y los datos
            recogidos —por ejemplo, mientras dure la relación con el paciente más el plazo
            legal que aplique en tu sector— y asegúrate de que, pasado ese tiempo, se
            puedan eliminar o anonimizar.
          </P>

          <H2>Qué documentos necesitas: política de privacidad y consentimiento</H2>
          <P>
            Más allá de la configuración técnica del chatbot, hay una parte documental que
            no puede faltar. Estos son los documentos que conviene tener listos.
          </P>

          <H3>Política de privacidad actualizada</H3>
          <P>
            Debe incluir el canal de WhatsApp como uno de los medios por los que tu
            clínica recoge datos, especificando que las conversaciones pueden ser
            atendidas —total o parcialmente— por un sistema automatizado, y detallando
            quién tiene acceso a esos datos, con qué finalidad y durante cuánto tiempo se
            conservan.
          </P>

          <H3>Cláusula informativa en el primer contacto</H3>
          <P>
            Un breve mensaje o enlace que informe a la persona, desde el primer momento,
            de cómo se van a tratar sus datos —sin necesidad de que tenga que leer un
            documento largo para poder hacer una simple pregunta sobre precios o
            disponibilidad—.
          </P>

          <H3>Registro de actividades de tratamiento</H3>
          <P>
            Si tu clínica ya tiene un registro de actividades de tratamiento —obligatorio
            en la mayoría de casos según el RGPD— hay que actualizarlo para incluir el
            chatbot de WhatsApp como nuevo canal y, si corresponde, al proveedor que presta
            ese servicio como encargado del tratamiento.
          </P>

          <H3>Contrato de encargado de tratamiento con el proveedor</H3>
          <P>
            El documento que formaliza que el proveedor del chatbot trata los datos en
            nombre de tu clínica, con las garantías que exige el RGPD. Es el documento que
            deberías solicitar antes de contratar cualquier solución, y que cualquier
            proveedor serio debe poder ofrecerte sin problema.
          </P>

          <H2>Checklist de cumplimiento RGPD para tu chatbot</H2>
          <P>
            Antes de poner en marcha tu chatbot de WhatsApp, repasa estos puntos:
          </P>
          <P>
            El chatbot recoge solo los datos necesarios para atender la consulta o
            agendar la cita. La política de privacidad de tu clínica incluye WhatsApp
            como canal y menciona el tratamiento automatizado. La persona puede acceder
            fácilmente a la información sobre cómo se tratan sus datos desde la propia
            conversación. Existe un contrato de encargado de tratamiento con el proveedor
            del chatbot, si usa servicios externos de IA. Están definidos los plazos de
            conservación de las conversaciones y el procedimiento para eliminarlas. El
            registro de actividades de tratamiento de tu clínica incluye este nuevo canal.
          </P>
          <P>
            Si tienes estos puntos cubiertos, tu chatbot de WhatsApp cumple con el RGPD
            sin que tengas que renunciar a nada de lo que lo hace útil: responder al
            instante, las 24 horas, casi un 40% de las consultas que hoy llegan fuera de
            horario y se quedan sin atender. Si quieres ver con detalle qué puede hacer
            este tipo de agente por tu clínica, en{" "}
            <InternalLink href="/blog/chatbot-whatsapp-para-clinicas-esteticas">
              qué es un chatbot de WhatsApp para clínicas estéticas
            </InternalLink>{" "}
            tienes toda la información.
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
              ¿Quieres un chatbot de WhatsApp seguro y conforme al RGPD?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te explicamos cómo configuramos cada chatbot para que cumpla con el RGPD
              desde el primer día, sin renunciar a responder cada consulta, agendar citas
              y cualificar leads las 24 horas.
            </p>
            <Link
              href="/blog/chatbot-whatsapp-para-clinicas-esteticas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero saber cómo se configura →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
