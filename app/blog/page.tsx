import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const PATH = "/blog"
const TITLE = "Blog | Cero Manual"
const DESCRIPTION =
  "Guías y estrategias para clínicas que quieren dejar de perder pacientes por desorganización: no-shows, recordatorios, agenda y automatización."

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
    type: "website",
  },
}

const posts = [
  {
    slug: "cuanto-cuesta-chatbot-whatsapp-clinica",
    title: "¿Cuánto cuesta un chatbot de WhatsApp para clínicas? Guía de precios 2026",
    excerpt:
      "El precio de un chatbot de WhatsApp para clínicas varía según funcionalidades. Te explicamos qué factores influyen en el coste y cuándo se amortiza.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "chatbot-whatsapp-clinicas-rgpd",
    title: "Chatbot de WhatsApp para clínicas y RGPD: cómo cumplir la ley sin complicaciones",
    excerpt:
      "¿Es legal usar un chatbot de WhatsApp en tu clínica? Te explicamos cómo cumplir el RGPD con un agente IA y qué debes tener en cuenta.",
    date: "2026-06-13",
    readingTime: "7 min de lectura",
  },
  {
    slug: "agente-whatsapp-clinica-dental",
    title: "Agente de WhatsApp para clínicas dentales: qué es, qué hace y cómo implementarlo",
    excerpt:
      "Un agente de WhatsApp para clínicas dentales responde consultas, confirma citas y reduce no-shows 24/7. Descubre cómo funciona y cuánto cuesta.",
    date: "2026-06-13",
    readingTime: "7 min de lectura",
  },
  {
    slug: "reducir-lista-espera-clinica-estetica",
    title: "Cómo reducir la lista de espera en tu clínica estética sin perder pacientes",
    excerpt:
      "Una lista de espera larga hace perder pacientes. Te explicamos cómo gestionarla mejor y convertir cancelaciones en citas nuevas automáticamente.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "tecnologia-para-clinicas-esteticas",
    title: "Tecnología para clínicas estéticas: qué herramientas usar en 2026",
    excerpt:
      "La tecnología está transformando cómo las clínicas estéticas captan y retienen pacientes. Te explicamos qué herramientas usar y por dónde empezar.",
    date: "2026-06-13",
    readingTime: "7 min de lectura",
  },
  {
    slug: "software-gestion-clinica-estetica",
    title: "Software de gestión para clínicas estéticas: guía completa",
    excerpt:
      "¿Buscas software de gestión para tu clínica estética? Te explicamos qué necesitas realmente y cuándo tiene sentido automatizar con IA.",
    date: "2026-06-13",
    readingTime: "7 min de lectura",
  },
  {
    slug: "mejor-crm-clinicas-dentales",
    title: "Mejor CRM para clínicas dentales: qué buscar y cómo elegir en 2026",
    excerpt:
      "¿Buscas el mejor CRM para tu clínica dental? Te explicamos qué funcionalidades necesitas y cómo elegir el que mejor se adapta a tu clínica.",
    date: "2026-06-12",
    readingTime: "7 min de lectura",
  },
  {
    slug: "crm-clinicas-esteticas-pequenas",
    title: "CRM para clínicas estéticas pequeñas: qué necesitas realmente y por dónde empezar",
    excerpt:
      "Una clínica estética pequeña no necesita un CRM complejo. Te explicamos qué funcionalidades son imprescindibles y cuál es el punto de entrada más fácil.",
    date: "2026-06-12",
    readingTime: "6 min de lectura",
  },
  {
    slug: "marketing-clinica-dental",
    title: "Marketing para clínicas dentales: qué funciona realmente en 2026",
    excerpt:
      "El marketing para clínicas dentales ha cambiado. Te explicamos qué canales funcionan realmente y cómo automatizar la captación de pacientes.",
    date: "2026-06-11",
    readingTime: "7 min de lectura",
  },
  {
    slug: "whatsapp-para-clinicas-dentales",
    title: "WhatsApp para clínicas dentales: cómo usarlo para captar y retener más pacientes",
    excerpt:
      "WhatsApp es el canal más usado por los pacientes dentales. Te explicamos cómo usarlo para captar, confirmar citas y reactivar pacientes inactivos.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "inteligencia-artificial-clinicas-dentales",
    title: "Inteligencia artificial para clínicas dentales: qué puedes automatizar hoy",
    excerpt:
      "La IA ya está transformando cómo las clínicas dentales gestionan citas, leads y pacientes. Descubre qué puedes automatizar hoy.",
    date: "2026-06-11",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-conseguir-pacientes-clinica-dental",
    title: "Cómo conseguir más pacientes para tu clínica dental en 2026",
    excerpt:
      "Conseguir pacientes para tu clínica dental requiere más que publicidad. Te explicamos las estrategias que mejor funcionan en 2026.",
    date: "2026-06-11",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-reducir-no-shows-clinica-estetica",
    title: "Cómo reducir los no-shows en tu clínica estética y dejar de perder ingresos",
    excerpt:
      "Los no-shows cuestan hasta 7.500€/mes a clínicas estéticas. Te explicamos cómo reducirlos con recordatorios automáticos desde el primer mes.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "agente-ia-recepcion-clinica",
    title: "Agente IA para la recepción de tu clínica: qué es, qué hace y cuánto cuesta",
    excerpt:
      "Un agente IA en la recepción de tu clínica responde llamadas, agenda citas y atiende WhatsApp 24/7 sin contratar más personal.",
    date: "2026-06-11",
    readingTime: "7 min de lectura",
  },
  {
    slug: "automatizacion-clinicas-dentales",
    title: "Automatización para clínicas dentales: qué puedes automatizar hoy y por dónde empezar",
    excerpt:
      "La automatización en clínicas dentales reduce no-shows, recupera pacientes inactivos y responde leads 24/7. Descubre por dónde empezar.",
    date: "2026-06-11",
    readingTime: "7 min de lectura",
  },
  {
    slug: "recordatorios-citas-whatsapp-clinica",
    title: "Recordatorios de citas por WhatsApp para clínicas: cómo configurarlos para que funcionen solos",
    excerpt:
      "Los recordatorios por WhatsApp reducen los no-shows un 40%. Te explicamos cómo configurarlos para que funcionen solos en tu clínica.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "experiencia-paciente-clinica-estetica",
    title: "Cómo mejorar la experiencia del paciente en tu clínica estética (y que vuelvan solos)",
    excerpt:
      "La experiencia del paciente decide si vuelve o no. Te explicamos cómo mejorarla en cada punto de contacto sin añadir más trabajo al equipo.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "captacion-pacientes-clinica-estetica",
    title: "Captación de pacientes para clínicas estéticas: qué funciona realmente en 2026",
    excerpt:
      "Captar pacientes para tu clínica estética es más fácil cuando tienes el proceso automatizado. Te explicamos las estrategias que mejor funcionan.",
    date: "2026-06-11",
    readingTime: "7 min de lectura",
  },
  {
    slug: "gestionar-citas-clinica-estetica-whatsapp",
    title: "Cómo gestionar las citas de tu clínica estética desde WhatsApp (sin que nadie esté pendiente del móvil)",
    excerpt:
      "Gestionar citas por WhatsApp es posible sin que el equipo esté pendiente del móvil. Te explicamos cómo automatizarlo para que funcione solo.",
    date: "2026-06-10",
    readingTime: "6 min de lectura",
  },
  {
    slug: "software-gestion-clinicas-esteticas",
    title: "Software de gestión para clínicas estéticas: qué necesitas realmente y por dónde empezar",
    excerpt:
      "Hay miles de opciones de software para clínicas estéticas. Te explicamos qué necesitas realmente según el tamaño y momento de tu clínica.",
    date: "2026-06-10",
    readingTime: "7 min de lectura",
  },
  {
    slug: "marketing-digital-clinicas-esteticas",
    title: "Marketing digital para clínicas estéticas: qué funciona realmente y qué es perder el tiempo",
    excerpt:
      "El marketing digital para clínicas estéticas va más allá de Instagram. Te explicamos los canales que realmente funcionan y por dónde empezar.",
    date: "2026-06-10",
    readingTime: "8 min de lectura",
  },
  {
    slug: "como-conseguir-mas-citas-clinica-estetica",
    title: "Cómo conseguir más citas en tu clínica estética sin aumentar el presupuesto publicitario",
    excerpt:
      "Conseguir más citas no siempre significa más publicidad. Te explicamos 5 estrategias para llenar tu agenda aprovechando lo que ya tienes.",
    date: "2026-06-10",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-reducir-no-shows-clinica-dental",
    title:
      "Cómo reducir los no-shows en tu clínica dental (y dejar de perder hasta 7.500€ al mes)",
    excerpt:
      "Entre el 12% y el 19% de las citas de una clínica dental terminan en no-show. Te contamos 5 estrategias para reducirlos sin volverte loco con llamadas de recordatorio.",
    date: "2026-06-07",
    readingTime: "8 min de lectura",
  },
  {
    slug: "que-es-un-agente-de-voz-ia-para-clinicas",
    title: "Qué es un agente de voz con IA y cómo puede transformar tu clínica",
    excerpt:
      "Casi un 40% de las consultas de una clínica llegan fuera de horario. Te explicamos qué es un agente de voz con IA, en qué se diferencia de un contestador y cómo puede contestar cada llamada por ti.",
    date: "2026-06-07",
    readingTime: "8 min de lectura",
  },
  {
    slug: "chatbot-whatsapp-para-clinicas-esteticas",
    title: "Chatbot de WhatsApp para clínicas estéticas: qué es y por qué tu competencia ya lo tiene",
    excerpt:
      "Los mensajes de WhatsApp se leen entre un 95% y un 98% de las veces, frente al 20-25% del email. Te explicamos qué es un chatbot de WhatsApp para clínicas estéticas y cómo responde, agenda y cualifica leads las 24 horas.",
    date: "2026-06-07",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-reactivar-pacientes-inactivos-clinica",
    title: "Cómo reactivar pacientes inactivos en tu clínica (sin llamar uno por uno)",
    excerpt:
      "Tienes pacientes que dejaron de venir y representan ingresos dormidos — con un valor medio de unos 3.000€ cada uno. Te contamos cómo reactivarlos con mensajes automáticos por WhatsApp, el canal que de verdad se lee.",
    date: "2026-06-07",
    readingTime: "7 min de lectura",
  },
  {
    slug: "recordatorios-automaticos-citas-clinica",
    title: "Recordatorios automáticos de citas: cómo reducir no-shows sin llamar uno por uno",
    excerpt:
      "El 12-19% de las citas no se presentan: hasta 7.500€/mes perdidos. Te explicamos cómo los recordatorios automáticos por WhatsApp reducen los no-shows un 40% desde el primer mes.",
    date: "2026-06-09",
    readingTime: "7 min de lectura",
  },
  {
    slug: "meta-ads-para-clinicas-esteticas",
    title: "Meta Ads para clínicas estéticas: cómo conseguir leads sin que Meta te bloquee",
    excerpt:
      "Meta Ads es el canal más rentable para clínicas estéticas con presupuesto ajustado — si sabes qué copy está prohibido. Guía completa: segmentación, presupuesto mínimo y CPL realista.",
    date: "2026-06-09",
    readingTime: "8 min de lectura",
  },
  {
    slug: "como-conseguir-resenas-google-clinica-estetica",
    title: "Cómo conseguir más reseñas en Google para tu clínica estética (sin pedirlas una por una)",
    excerpt:
      "El 70% de los nuevos pacientes decide su clínica mirando reseñas de Google. Te contamos cómo conseguirlas de forma automática, en el momento exacto, sin pedirlas a mano.",
    date: "2026-06-09",
    readingTime: "6 min de lectura",
  },
  {
    slug: "crm-para-clinicas-esteticas",
    title: "CRM para clínicas estéticas: qué es, para qué sirve y cuándo lo necesitas",
    excerpt:
      "Muchas clínicas gestionan leads por WhatsApp, email y agenda sin orden — y pierden oportunidades sin saberlo. Te explicamos qué es un CRM, en qué se diferencia del software de citas y cuándo necesitas uno.",
    date: "2026-06-09",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-reducir-cancelaciones-clinica-estetica",
    title: "Cómo reducir las cancelaciones de última hora en tu clínica estética",
    excerpt:
      "Las cancelaciones de última hora vacían tu agenda. Te explicamos cómo reducirlas con confirmación activa y listas de espera, sin llamar a cada paciente.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "como-captar-clientes-clinica-estetica-sin-presupuesto",
    title: "Cómo captar más clientes para tu clínica estética sin aumentar el presupuesto",
    excerpt:
      "Antes de gastar más en publicidad, recupera los clientes que ya tienes. 5 estrategias para captar más sin invertir más: reactivación, reseñas, upsell, WhatsApp y referidos.",
    date: "2026-06-12",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-gestionar-ausencias-clinica-estetica",
    title: "Cómo gestionar las ausencias en tu clínica estética sin perder ingresos",
    excerpt:
      "Las ausencias vacían tu agenda y bloquean huecos que nadie ocupa. Te explicamos cómo gestionarlas con confirmación activa y listas de espera para no perder ni un euro de ingresos.",
    date: "2026-06-10",
    readingTime: "6 min de lectura",
  },
  {
    slug: "inteligencia-artificial-clinicas-esteticas",
    title: "Inteligencia artificial para clínicas estéticas: qué puedes automatizar hoy",
    excerpt:
      "La IA ya está transformando cómo las clínicas estéticas gestionan leads, citas y pacientes. Descubre qué puedes automatizar hoy y por dónde empezar.",
    date: "2026-06-10",
    readingTime: "8 min de lectura",
  },
  {
    slug: "como-fidelizar-pacientes-clinica-estetica",
    title: "Cómo fidelizar pacientes en tu clínica estética (y que vuelvan sin que tengas que llamarles)",
    excerpt:
      "Conseguir un paciente nuevo cuesta 5 veces más que mantener uno. Te explicamos cómo fidelizar a tus pacientes con seguimiento post-cita y WhatsApp automatizado.",
    date: "2026-06-10",
    readingTime: "6 min de lectura",
  },
  {
    slug: "automatizar-whatsapp-clinica-dental",
    title: "Cómo automatizar WhatsApp en tu clínica dental y dejar de perder leads",
    excerpt:
      "El 40% de las consultas llegan fuera de horario y los no-shows rondan el 12-19%. Te contamos cómo automatizar WhatsApp para responder, confirmar citas y reducir cancelaciones.",
    date: "2026-06-10",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-mejorar-atencion-cliente-clinica-estetica",
    title:
      "Cómo mejorar la atención al cliente en tu clínica estética (y que los pacientes no se vayan a la competencia)",
    excerpt:
      "La atención al cliente es el factor que más influye en que un paciente vuelva o no. Te explicamos cómo mejorarla sin contratar más personal.",
    date: "2026-06-10",
    readingTime: "6 min de lectura",
  },
  {
    slug: "como-aumentar-facturacion-clinica-dental",
    title: "Cómo aumentar la facturación de tu clínica dental sin necesidad de más pacientes",
    excerpt:
      "Antes de buscar más pacientes, aprovecha los que ya tienes. Te explicamos cómo aumentar la facturación de tu clínica dental recuperando ingresos perdidos.",
    date: "2026-06-10",
    readingTime: "7 min de lectura",
  },
  {
    slug: "agenda-clinica-estetica-online",
    title: "Agenda online para clínicas estéticas: cómo gestionarla sin que sea un caos",
    excerpt:
      "Una agenda online bien gestionada llena tu clínica y reduce los huecos vacíos. Te explicamos cómo organizarla para que funcione sola.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "whatsapp-business-clinicas-esteticas",
    title: "WhatsApp Business para clínicas estéticas: cómo configurarlo y cuándo automatizarlo",
    excerpt:
      "WhatsApp Business es la herramienta más usada en clínicas estéticas. Te explicamos cómo configurarlo bien y cuándo automatizarlo.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "coste-real-no-shows-clinica-dental",
    title: "El coste real de los no-shows en tu clínica dental (y cómo calcularlo con tus propios números)",
    excerpt:
      "Los no-shows en clínicas dentales cuestan más de lo que parece. Te explicamos cómo calcular tu pérdida real y qué puedes hacer para reducirla.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "resenas-google-clinicas-dentales",
    title: "Cómo conseguir más reseñas en Google para tu clínica dental (y que los nuevos pacientes te elijan)",
    excerpt:
      "Las reseñas de Google son clave para que nuevos pacientes elijan tu clínica dental. Te explicamos cómo conseguirlas de forma automática.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-28" style={{ backgroundColor: "#F5F2EE" }}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p
              className="text-xs font-medium mb-4 tracking-widest uppercase"
              style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
            >
              Blog
            </p>
            <h1
              className="text-4xl md:text-5xl font-semibold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              Recursos para clínicas que quieren{" "}
              <span style={{ fontStyle: "italic", color: "#7D9B76" }}>
                dejar de perder pacientes
              </span>
            </h1>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Guías prácticas sobre agenda, recordatorios y automatización para clínicas
              que quieren dejar de perder tiempo e ingresos por cosas que se pueden evitar.
            </p>
          </div>

          {/* Posts */}
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-8 rounded-2xl border transition-colors duration-200 hover:border-[#7D9B76] group"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E0DBD4",
                }}
              >
                <p
                  className="text-xs mb-3"
                  style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
                >
                  {formatDate(post.date)} · {post.readingTime}
                </p>
                <h2
                  className="text-2xl md:text-3xl font-semibold leading-snug mb-3 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
                >
                  {post.excerpt}
                </p>
                <span
                  className="text-sm font-medium inline-flex items-center gap-2 transition-colors duration-200"
                  style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
                >
                  Leer artículo →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
