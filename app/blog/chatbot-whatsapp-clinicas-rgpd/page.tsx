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
const TITLE = "Chatbot de WhatsApp para clínicas y RGPD | Cero Manual"
const DESCRIPTION =
  "¿Es legal usar un chatbot de WhatsApp en tu clínica? Te explicamos cómo cumplir el RGPD con un agente de IA y qué tener en cuenta. Consúltanos sin coste."
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
    a: "Sí, siempre que el tratamiento tenga base legal y se cumpla el resto del RGPD. Atender la consulta y gestionar la cita se apoya normalmente en el art. 6.1.b (medidas precontractuales o contrato); y como en una clínica la conversación puede incluir datos de salud, que el art. 9.1 prohíbe tratar salvo excepción, hace falta además una excepción del art. 9.2 —habitualmente la asistencia sanitaria (9.2.h) si la clínica es un centro sanitario, o el consentimiento explícito (9.2.a)—. A eso se suman informar a la persona, recoger solo lo necesario y tener contrato de encargado con el proveedor. La tecnología en sí no es el problema — lo importante es cómo se configura y qué garantías ofrece el proveedor.",
  },
  {
    q: "¿Necesito el consentimiento explícito del paciente para usar el chatbot?",
    a: "No necesariamente, y conviene separar dos cosas. Informar al paciente (art. 13 del RGPD) es obligatorio siempre, pero informar no legitima el tratamiento: para eso hace falta una base legal. Para atender la consulta y gestionar la cita, esa base suele ser el art. 6.1.b y, si hay datos de salud, una excepción del art. 9.2 —la asistencia sanitaria (9.2.h) en un centro sanitario o, si no aplica otra, el consentimiento explícito (9.2.a)—. El consentimiento es una de las vías, no un requisito general. Los recordatorios de una cita que el paciente ha pedido forman parte del propio servicio. Lo que sí exige consentimiento previo es el marketing por medios electrónicos, y eso lo regula la LSSI (art. 21), salvo la excepción para clientes con servicios similares. Cuál aplica en tu caso lo debe confirmar tu asesor o tu DPD.",
  },
  {
    q: "¿Qué pasa si el chatbot usa una IA de un proveedor externo?",
    a: "Es habitual, y no supone un problema siempre que exista un contrato de encargado de tratamiento con ese proveedor, que garantice que los datos se tratan con las mismas garantías que exige el RGPD, no se usan para otros fines, y se aplican medidas de seguridad adecuadas. Si el proveedor trata los datos fuera del Espacio Económico Europeo —por ejemplo, en Estados Unidos—, además tiene que haber una garantía para esa transferencia internacional (capítulo V del RGPD): una decisión de adecuación o cláusulas contractuales tipo. Antes de contratar cualquier solución, conviene pedir esta información por escrito.",
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
            <strong>Aviso:</strong> este artículo es informativo y no sustituye el
            asesoramiento legal profesional. Cada clínica tiene su propia situación —si es o
            no centro sanitario, qué datos trata, qué proveedores usa—, así que revisa tu caso
            con tu asesor o con tu delegado de protección de datos antes de poner en marcha el
            chatbot.
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
            Dicho de otra forma: el chatbot no convierte en ilegal algo que antes era legal,
            pero sí añade piezas que hay que revisar: un proveedor de IA que trata los datos
            por cuenta de tu clínica, posibles transferencias fuera de la Unión Europea y, con
            frecuencia, la necesidad de una evaluación de impacto. La diferencia es que,
            como WhatsApp es un canal que tus pacientes usan a diario y por el que te
            cuentan cosas personales,{" "}
            <InternalLink href="/blog/whatsapp-business-clinicas-esteticas">
              conviene tenerlo bien configurado desde el primer día
            </InternalLink>
            .
          </P>

          <H2>Qué dice el RGPD sobre el tratamiento de datos de pacientes</H2>
          <P>
            El RGPD clasifica los datos de salud como una categoría especial de datos, y su
            art. 9.1 prohíbe tratarlos salvo que se dé alguna de las excepciones del art. 9.2.
            Una clínica trata datos de salud constantemente precisamente porque se apoya en
            una de esas excepciones —normalmente, la asistencia sanitaria—, no porque estos
            datos solo pidan «más cuidado». Si el chatbot recoge o ve datos de salud, ese
            tratamiento también necesita su excepción.
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
            datos, con qué finalidad y base legal, durante cuánto tiempo y qué derechos
            tiene: acceso, rectificación, supresión, oposición, limitación del tratamiento y
            portabilidad, además del derecho a reclamar ante la Agencia Española de
            Protección de Datos (AEPD), que es la autoridad de control en España (art. 13 del
            RGPD). Se puede dar por capas —un resumen breve en la conversación y un enlace a la
            política de privacidad completa—, como permite el art. 11 de la LOPDGDD. Ojo:
            informar es obligatorio, pero no sustituye a la base legal.
          </P>

          <H3>Base legal para el tratamiento</H3>
          <P>
            Con datos de salud, la base legal tiene dos capas, y hacen falta las dos. La
            primera es la del art. 6: cuando un paciente escribe para preguntar por un
            tratamiento o pedir una cita, está iniciando una relación precontractual, y
            atenderle se apoya normalmente en el art. 6.1.b.
          </P>
          <P>
            La segunda es una excepción del art. 9.2, porque sin ella el art. 9.1 prohíbe
            tratar datos de salud. Las más habituales en una clínica son la asistencia
            sanitaria (art. 9.2.h), que exige que el tratamiento lo hagan profesionales
            sujetos a secreto profesional o bajo su responsabilidad (art. 9.3) y encaja cuando
            la clínica es un centro sanitario; y el consentimiento explícito del paciente
            (art. 9.2.a), cuando no aplica otra excepción. Cuál corresponde a tu clínica
            depende de su actividad y conviene confirmarlo con tu asesor.
          </P>
          <P>
            Los recordatorios de una cita que el propio paciente ha pedido forman parte de
            la prestación del servicio y no necesitan un consentimiento aparte. Las
            comunicaciones comerciales son otra cosa: enviarlas por WhatsApp, email o SMS
            exige consentimiento previo según la LSSI (art. 21), salvo la excepción para
            clientes que ya contrataron productos o servicios similares, que además deben
            poder darse de baja con facilidad. Esa norma es distinta del art. 9 del RGPD y no
            conviene mezclarlas.
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

          <H3>Revisar las transferencias internacionales</H3>
          <P>
            Muchos proveedores de IA, de mensajería o de alojamiento procesan datos fuera del
            Espacio Económico Europeo, sobre todo en Estados Unidos. Eso es una transferencia
            internacional y el capítulo V del RGPD exige una garantía para hacerla: una
            decisión de adecuación de la Comisión Europea —en el caso de Estados Unidos, el
            Marco de Privacidad de Datos UE-EE. UU., solo si el proveedor está adherido— o
            cláusulas contractuales tipo. Pide al proveedor del chatbot la lista de
            subencargados, dónde tratan los datos y con qué garantía.
          </P>

          <H3>Que el chatbot se identifique como asistente de IA</H3>
          <P>
            Desde el 2 de agosto de 2026, el art. 50 del Reglamento europeo de Inteligencia
            Artificial (Reglamento (UE) 2024/1689) obliga a que las personas sepan que están
            interactuando con un sistema de IA, salvo que resulte evidente. En la práctica,
            el chatbot debe presentarse como asistente virtual de la clínica desde el primer
            mensaje. No resta naturalidad a la conversación y evita que el paciente se sienta
            engañado.
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
            Para una clínica, el registro de actividades de tratamiento es obligatorio: la
            exención del art. 30.5 del RGPD para organizaciones de menos de 250 personas no se
            aplica cuando se tratan categorías especiales de datos, como los de salud. Hay que
            actualizarlo para incluir el chatbot de WhatsApp como nuevo canal y al proveedor
            que presta ese servicio como encargado del tratamiento.
          </P>

          <H3>Evaluación de impacto (EIPD)</H3>
          <P>
            El art. 35 del RGPD exige una evaluación de impacto cuando un tratamiento puede
            suponer un alto riesgo para las personas. Tratar datos de salud con una tecnología
            nueva, como un chatbot de IA, hace probable que haga falta. La AEPD publica una
            lista orientativa de tratamientos que la requieren: revísala con tu asesor o tu
            DPD antes de activar el chatbot. Si de la evaluación sale un riesgo alto que no se
            puede reducir, hay que consultar a la AEPD antes de empezar (art. 36).
          </P>

          <H3>Delegado de protección de datos (DPD)</H3>
          <P>
            La LOPDGDD (art. 34.1.l) obliga a nombrar delegado de protección de datos a los
            centros sanitarios legalmente obligados a mantener historias clínicas, salvo a
            los profesionales sanitarios que ejercen a título individual. Si tu clínica está
            en ese caso, su DPD debe participar en la puesta en marcha del chatbot.
          </P>

          <H3>Contrato de encargado de tratamiento con el proveedor</H3>
          <P>
            El documento que formaliza que el proveedor del chatbot trata los datos en
            nombre de tu clínica, con las garantías que exige el RGPD. Es el documento que
            deberías solicitar{" "}
            <InternalLink href="/blog/mejor-chatbot-whatsapp-clinica-estetica">
              antes de contratar cualquier solución
            </InternalLink>
            , y que cualquier
            proveedor serio debe poder ofrecerte sin problema.
          </P>

          <H2>Checklist de cumplimiento RGPD para tu chatbot</H2>
          <P>
            Antes de poner en marcha tu chatbot de WhatsApp, repasa estos puntos:
          </P>
          <P>
            Tienes identificada la base legal en sus dos capas: la del art. 6 y, si hay datos
            de salud, la excepción del art. 9.2. El marketing por WhatsApp va aparte, con
            consentimiento según la LSSI. El chatbot recoge solo los datos necesarios para
            atender la consulta o agendar la cita y se presenta como asistente de IA. La
            política de privacidad de tu clínica incluye WhatsApp
            como canal y menciona el tratamiento automatizado. La persona puede acceder
            fácilmente a la información sobre cómo se tratan sus datos desde la propia
            conversación. Existe un contrato de encargado de tratamiento con el proveedor
            del chatbot, si usa servicios externos de IA. Están definidos los plazos de
            conservación de las conversaciones y el procedimiento para eliminarlas. El
            registro de actividades de tratamiento de tu clínica incluye este nuevo canal.
            Sabes dónde trata los datos el proveedor y con qué garantía, si es fuera de la UE.
            Has valorado con tu asesor si necesitas una evaluación de impacto y, si tu clínica
            es un centro sanitario obligado a llevar historias clínicas, tu DPD está al tanto.
          </P>
          <P>
            Si tienes estos puntos cubiertos, tienes resuelto lo esencial para usar el
            chatbot de WhatsApp conforme al RGPD sin que tengas que renunciar a nada de lo que lo hace útil: responder al
            instante, las 24 horas, también a las consultas que hoy llegan fuera de
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
