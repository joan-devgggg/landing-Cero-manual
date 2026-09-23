import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ServiceFAQ from "@/components/ServiceFAQ"
import BlogTable from "@/components/BlogTable"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import H3 from "@/components/blog/H3"
import InternalLink from "@/components/blog/InternalLink"
import { articleDates } from "@/lib/blog-dates"

const PATH = "/blog/como-reducir-no-shows-clinica-dental"
const DATES = articleDates("como-reducir-no-shows-clinica-dental")
const TITLE = "Cómo reducir no-shows en tu clínica dental | Cero Manual"
const DESCRIPTION =
  "Los no-shows vacían la agenda de tu clínica dental y ese hueco no se recupera. Descubre cinco estrategias probadas para reducirlos ya. Calcula tu pérdida real."
const HEADLINE =
  "Cómo reducir los no-shows en tu clínica dental (y recuperar esos huecos de agenda)"

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
    q: "¿Cuántos no-shows es normal tener en una clínica dental?",
    a: "No hay un dato oficial que sirva de referencia: los porcentajes que circulan por internet salen, sobre todo, de empresas que venden software, y cada clínica es un mundo. Lo que sí puedes saber es el tuyo: cuenta las ausencias sin aviso de los últimos dos o tres meses y divídelas entre las citas programadas en ese periodo. Con ese porcentaje ya puedes calcular cuánto te cuestan al mes en sillones y tiempo reservados para nadie — y, multiplicado por doce, al año.",
  },
  {
    q: "¿Los SMS o los emails de recordatorio no son suficientes?",
    a: "Pueden ayudar, pero se quedan cortos por dos motivos. El email se pierde con facilidad entre promociones y boletines, y el SMS no permite contestar en la misma conversación. Además, la mayoría de esos avisos solo informan de la fecha y la hora, sin pedir respuesta, y se olvidan en cuanto llega el siguiente mensaje. Lo que funciona es combinar WhatsApp con una confirmación activa que el paciente tenga que responder.",
  },
  {
    q: "¿Qué hago si un paciente no contesta al recordatorio?",
    a: "Lo mejor es tener un segundo aviso más cercano a la cita y, si tampoco responde, hacer un seguimiento breve después — igual que harías con cualquier lead que tarda en contestar. Cuanto antes retomes el contacto, más probable es que confirme o reprograme.",
  },
  {
    q: "¿Cuánto cuesta poner en marcha un sistema de recordatorios automáticos?",
    a: "Depende del volumen de tu clínica y de cómo gestionas hoy la agenda. La cuenta es fácil de hacer antes de contratar nada: multiplica tus no-shows mensuales por tu ticket medio y compáralo con la cuota. Si recuperando solo una parte de esas citas ya la cubres, los números salen. Por eso lo más sencillo es empezar con una auditoría gratuita que te dé esa cifra con tus propios números en lugar de con una media del sector.",
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

export default function NoShowsArticlePage() {
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
            7 de junio de 2026 · 9 min de lectura
          </p>

          {/* Intro */}
          <P>
            Los no-shows de una clínica dental se reducen, sobre todo, con recordatorios
            automáticos por WhatsApp que piden al paciente confirmar la cita. Lo que aun así se
            cancele se cubre con una lista de espera, y a quien no aparece se le escribe
            enseguida para ofrecerle otra hora.
          </P>
          <P>
            Merece la pena porque cada ausencia sin aviso deja tiempo de sillón reservado para
            nadie, y ese tiempo no se recupera.
          </P>

          <H2>¿Qué es un no-show y cuánto te está costando realmente?</H2>
          <P>
            Un no-show es una cita que alguien reserva y a la que, después, no se presenta — y
            tampoco avisa. Cuántos tienes depende de tu clínica, pero basta con que se
            repitan unas pocas veces por semana para que{" "}
            <InternalLink href="/blog/coste-real-no-shows-clinica-dental">
              la pérdida mensual
            </InternalLink>{" "}
            en tiempo de sillón ya reservado se note en la facturación.
          </P>
          <P>
            Cada uno ocupa un sillón, un higienista o un dentista y el material que ya tenías
            preparado, todo reservado para una persona que no va a llegar.
          </P>
          <P>
            La cuenta es sencilla: citas al día × días laborables del mes × tu tasa de no-shows × tu ticket
            medio. El resultado cambia mucho según el tamaño y el tipo de tratamiento de cada
            clínica; si prefieres que la haga por ti, prueba nuestra{" "}
            <Link
              href="/calculadora-no-shows"
              className="underline font-semibold"
              style={{ color: "#7D9B76" }}
            >
              calculadora de pérdidas por no-shows
            </Link>
            .
          </P>
          <P>
            A eso se suman las horas que tu equipo pasa cada semana llamando uno a uno para
            «recordar» la cita, que podría dedicar a quien está en la silla.
          </P>
          <P>
            Y casi nunca se nota de golpe: es un hueco aquí y otro allí, hasta que a fin de
            mes falta ese dinero.
          </P>

          <H2>Por qué los recordatorios tradicionales no funcionan</H2>
          <P>
            Los recordatorios tradicionales fallan porque llegan por canales en los que el
            paciente no puede contestar en la misma conversación, como un SMS o un{" "}
            <InternalLink href="/blog/emails-recordatorio-pacientes-clinica">
              email de «le recordamos su cita»
            </InternalLink>
            .
          </P>
          <P>
            Además, WhatsApp es la aplicación en la que tus pacientes ya hablan a diario,
            mientras que el correo se acumula sin abrir entre promociones y boletines.
          </P>

          <BlogTable
            headers={[
              "Canal",
              "¿Lo acaba leyendo?",
              "Carga para el equipo",
              "¿Permite confirmar?",
            ]}
            rows={[
              [
                "Llamada telefónica",
                "Alta si se descuelga, pero muchas no se cogen",
                "Muy alta: varios minutos por paciente",
                "Sí, pero solo si contesta en ese momento",
              ],
              [
                "SMS",
                "Se recibe casi siempre, se lee a medias",
                "Baja si está automatizado",
                "Limitado: sin conversación, solo texto plano",
              ],
              [
                "Email",
                "Muchas veces se queda sin abrir",
                "Baja",
                "Poco práctico: obliga a abrir un enlace",
              ],
              [
                "WhatsApp",
                "Sí, llega al chat que ya usa a diario",
                "Nula si está automatizado",
                "Sí, con respuesta directa en el mismo chat",
              ],
            ]}
          />
          <P>
            Hay un segundo problema: la mayoría de recordatorios solo informan de la fecha y la
            hora, sin pedir ninguna respuesta. Un aviso así se lee por encima y se olvida en
            cuanto llega el siguiente mensaje.
          </P>

          <H2>5 estrategias para reducir no-shows en tu clínica dental</H2>
          <P>
            Son cinco: recordatorios automáticos por WhatsApp, confirmación activa en lugar de
            aviso pasivo, lista de espera para cubrir huecos, política de cancelación
            comunicada desde la reserva y seguimiento inmediato tras cada no-show. Ninguna
            depende de tener más personal ni de llamar más veces.
          </P>
          <P>
            Estas son las cinco, por orden de impacto:
          </P>

          <H3>1. Recordatorios automáticos por WhatsApp</H3>
          <P>
            Si solo vas a cambiar una cosa, que sea{" "}
            <InternalLink href="/blog/recordatorios-citas-whatsapp-clinica">
              el canal por el que envías los recordatorios
            </InternalLink>
            . Un mensaje de WhatsApp llega a la misma aplicación en la que tu
            paciente habla con su familia y sus amigos.
          </P>
          <P>
            Lo ideal es combinar dos avisos: uno 24 horas antes, para que el paciente pueda
            organizarse con margen, y otro 2 horas antes, para que nadie se despiste a
            última hora por las prisas del día.
          </P>
          <P>
            Automatizado, este envío deja de depender de que alguien de tu equipo se
            acuerde de hacerlo cada mañana entre paciente y paciente. Sale solo, a la hora
            exacta y con el tono de tu clínica.
          </P>
          <P>
            No hace falta cambiar de número para conseguirlo: los avisos salen desde el
            WhatsApp Business que tu clínica ya tiene, así que el paciente los recibe en la
            conversación de siempre y puede contestar ahí mismo.
          </P>

          <H3>2. Confirmación activa (no solo aviso)</H3>
          <P>
            Hay mucha diferencia entre «te recordamos tu cita para mañana» y «confirma
            tu cita aquí, por favor». El primero es un aviso pasivo que se puede ignorar
            sin consecuencias; el segundo pide una acción concreta y visible.
          </P>
          <P>
            Cuando le pides al paciente que confirme — con un botón, un emoji o un simple
            «sí» — conviertes el recordatorio en un pequeño compromiso activo, y un compromiso
            ya confirmado cuesta más romperlo que una notificación que pasó sin más.
          </P>
          <P>
            Esa confirmación también te informa: si alguien no contesta a tiempo, ese hueco
            tiene más probabilidades de quedar vacío y aún tienes margen para actuar.
          </P>

          <H3>3. Lista de espera para cubrir huecos</H3>
          <P>
            Por mucho que reduzcas los no-shows, siempre habrá alguna cancelación de última
            hora, y conviene tener a alguien preparado para ocupar ese hueco.
          </P>
          <P>
            Una{" "}
            <InternalLink href="/blog/lista-espera-clinica-dental">
              lista de espera con pacientes que ya han mostrado interés
            </InternalLink>{" "}
            es la solución
            más sencilla. Buena parte de las consultas de una clínica llegan fuera de su
            horario de atención: esas personas que escriben a las diez de la noche son
            candidatas perfectas para entrar en esa lista.
          </P>
          <P>
            Cuando se libera un hueco, basta con avisar a quien ya estaba esperando.
          </P>

          <H3>4. Política de cancelación con antelación</H3>
          <P>
            Tus pacientes necesitan saber, desde el primer momento, con cuánta antelación
            deben avisar si no pueden venir. Basta con dejar claro, con naturalidad y sin
            amenazar con penalizaciones, que ese hueco también tiene un coste para la clínica.
          </P>
          <P>
            Lo más efectivo es comunicar esa política justo cuando se reserva la cita, y
            recordarla de forma suave en los avisos previos. Así nadie se siente «pillado»
            si decide cancelar: ya sabía cómo hacerlo bien.
          </P>
          <P>
            Con los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas dentales
            </InternalLink>
            , la política se repite siempre, con el mismo tono cercano, sin que nadie de tu
            equipo tenga que recitarla por teléfono cita tras cita.
          </P>

          <H3>5. Seguimiento post no-show</H3>
          <P>
            Cuando alguien no aparece, lo habitual es pasar al siguiente paciente del día.
            Pero esa persona ya había mostrado interés real, y cuanto antes le ofrezcas una
            nueva hora (el mismo día, si es posible), más probable es que la acepte en lugar
            de buscar otra clínica.
          </P>

          <H2>Cuánto puedes recuperar automatizando los recordatorios</H2>
          <P>
            Cada no-show que evitas es una cita que se cobra sin haber tenido que captar a
            ningún paciente nuevo: la agenda ya estaba llena, solo faltaba que la gente
            viniera.
          </P>
          <P>
            No necesitas ninguna media del sector para saber cuánto hay en juego: tus
            no-shows reales al mes multiplicados por tu ticket medio. Ese es el techo de lo que
            puedes recuperar.
          </P>
          <P>
            Los{" "}
            <InternalLink href="/recordatorios-automaticos-citas">
              recordatorios automáticos para clínicas dentales
            </InternalLink>{" "}
            actúan en cada cita, todos los días, sin que nadie de tu equipo tenga que
            acordarse de enviarlos ni de hacer seguimiento manual.
          </P>
          <P>
            El sistema confirma, reprograma y hace seguimiento solo, y tu equipo recupera las
            horas que antes pasaba al teléfono.
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
              ¿Listo para dejar de perder citas por no-shows?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Te enseñamos, con tus propios números, cuántas citas estás perdiendo al mes —
              y cómo los recordatorios automáticos para clínicas dentales pueden
              recuperarlas.
            </p>
            <Link
              href="/recordatorios-automaticos-citas"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-colors duration-200 bg-[#7D9B76] hover:bg-[#6A8564]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#ffffff",
              }}
            >
              Quiero recuperar esas citas →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
