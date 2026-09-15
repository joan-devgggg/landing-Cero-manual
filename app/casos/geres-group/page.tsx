import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import CaseHeader from "@/components/casos/CaseHeader"
import CaseList from "@/components/casos/CaseList"
import CaseQuote from "@/components/casos/CaseQuote"
import CaseCallout from "@/components/casos/CaseCallout"
import CaseCTA from "@/components/casos/CaseCTA"
import { getCaso } from "@/lib/casos"
import { caseArticleJsonLd } from "@/lib/case-schema"

const CASO = getCaso("geres-group")
const PATH = `/casos/${CASO.slug}`
const TITLE = "Geres Group: seis empresas, un solo WhatsApp | Cero Manual"
const DESCRIPTION =
  "Seis empresas en el WhatsApp de su dueña. Un sistema de IA hace ahora de recepción del grupo y avisa a quien lleva cada área. Así lo montamos."

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
    publishedTime: CASO.published,
  },
}

const articleJsonLd = caseArticleJsonLd(CASO, DESCRIPTION)

export default function GeresGroupCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="px-6 py-28" style={{ backgroundColor: "#F5F2EE" }}>
        <article className="max-w-3xl mx-auto">
          <CaseHeader caso={CASO} />

          <H2>El cliente</H2>
          <P>
            Geres Group es un grupo empresarial de la Costa Blanca con seis marcas: una
            inmobiliaria, una empresa de gestión de llaves y mantenimiento para propietarios
            no residentes, otra de bienestar (jacuzzis, saunas y piscinas), un servicio de
            traducción jurada, otro de entrenamiento personal y una finca.
          </P>
          <P>
            Detrás hay un equipo de cuatro personas, y cada una es responsable de un área.
          </P>

          <H2>La situación de partida</H2>
          <P>
            Las seis empresas compartían un único número de WhatsApp: el móvil de la dueña.
            Todas las consultas llegaban ahí, sin importar de qué empresa fueran ni en qué
            idioma vinieran. Eso generaba tres problemas.
          </P>
          <CaseList
            items={[
              <>
                <strong style={{ color: "#1A1A1A" }}>La dueña hacía de centralita.</strong>{" "}
                Cada consulta pasaba por ella antes de llegar a quien correspondía, aunque el
                tema no fuera suyo.
              </>,
              <>
                <strong style={{ color: "#1A1A1A" }}>Las consultas se enfriaban.</strong> Un
                agente colaborador preguntó por una propiedad concreta y estuvo trece minutos
                sin respuesta porque la dueña iba conduciendo.
              </>,
              <>
                <strong style={{ color: "#1A1A1A" }}>
                  Nadie sabía si una consulta estaba atendida.
                </strong>{" "}
                Parte del equipo respondía desde el móvil de la dueña y parte se copiaba el
                contacto.
              </>,
            ]}
          />
          <P>Ella lo resumió así:</P>
          <CaseQuote attribution="La dueña de Geres Group">
            no sé yo si el cliente está atendido o no
          </CaseQuote>
          <P>
            A eso se sumaban clientes de varios países escribiendo en idiomas distintos, y los
            mensajes personales de la dueña mezclados con las consultas de negocio en el mismo
            número.
          </P>

          <H2>La solución</H2>
          <P>
            Un sistema de IA que actúa como recepción del grupo entero. Cuando entra un
            mensaje:
          </P>
          <CaseList
            items={[
              "Identifica de qué empresa es, entre quince tipos de consulta distintos.",
              "Detecta el idioma y responde en el del cliente.",
              "Pregunta lo necesario. A un comprador, la zona, el tipo de propiedad, la finalidad y el presupuesto; a quien pide una traducción, los idiomas y el tipo de documento.",
              "Avisa a la persona que lleva esa área, con toda la información ya recogida y un botón para marcar «ya lo atiendo yo».",
              "Y calla cuando toca: los contactos personales de la dueña no reciben respuesta automática.",
            ]}
          />
          <P>
            El equipo recibe el aviso al momento y responde desde su propio móvil. Queda
            registrado quién atendió qué y cuándo.
          </P>

          <H2>La decisión de diseño más importante</H2>
          <P>
            El sistema no inventa. Solo dice cifras autorizadas de antemano: las tarifas de
            trámites y la lista de precios de gestión de llaves. Para todo lo demás, recoge la
            consulta y la pasa a una persona.
          </P>
          <P>
            Nunca confirma la disponibilidad de una propiedad, ni promete un plazo
            administrativo, ni negocia condiciones.
          </P>
          <CaseCallout>
            Si la respuesta empieza por «depende», no la da el sistema.
          </CaseCallout>

          <H2>Cómo se puso en marcha</H2>
          <P>
            Antes de contestar a un solo cliente, el sistema estuvo días en modo prueba:
            leyendo conversaciones reales y anotando qué habría respondido, sin enviar nada.
          </P>
          <P>
            Eso permitió encontrar y corregir tres comportamientos que ningún test habría
            detectado. Entre ellos, que preguntaba un dato que el cliente acababa de dar, y
            que procesaba mensajes de grupos profesionales que no eran consultas de nadie.
          </P>

          <H2>Lo que viene después</H2>
          <P>
            Posicionamiento SEO para dos de las webs del grupo. En una segunda fase, la gestión
            de citas conectada a sus calendarios y la integración con la herramienta que ya
            usan internamente.
          </P>
          <P>
            Otro caso, con un problema distinto:{" "}
            <Link
              href="/casos/sante-healthy-hair-salon"
              className="underline decoration-1 underline-offset-2"
              style={{ color: "#7D9B76" }}
            >
              el software a medida de Sante Healthy Hair Salon
            </Link>
            .
          </P>
        </article>

        <CaseCTA
          title="¿Tu WhatsApp también hace de centralita?"
          text="Cuéntanos cómo te llegan hoy las consultas y vemos juntos qué parte puede ordenar un sistema de IA, y qué parte tiene que seguir en manos de tu equipo."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
