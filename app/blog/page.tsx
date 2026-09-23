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
    slug: "programa-gestion-clinica-estetica",
    title: "Programa de gestión para clínicas estéticas: cómo elegir el mejor y no arrepentirte",
    excerpt:
      "Cómo elegir un programa de gestión para tu clínica estética: qué debe incluir, errores habituales y preguntas antes de contratar.",
    date: "2026-07-12",
    readingTime: "6 min de lectura",
  },
  {
    slug: "software-gestion-citas-clinica-estetica",
    title: "Software de gestión de citas para clínicas estéticas: qué necesitas realmente",
    excerpt:
      "Qué necesita un software de gestión de citas para tu clínica estética, qué tipos hay y cuándo complementarlo con IA.",
    date: "2026-07-12",
    readingTime: "6 min de lectura",
  },
  {
    slug: "emails-recordatorio-pacientes-clinica",
    title: "Emails de recordatorio para pacientes: plantillas, consejos y cuándo usar WhatsApp en su lugar",
    excerpt:
      "Plantillas de email de recordatorio para clínicas listas para copiar. Y por qué a muchos pacientes les llega mejor el recordatorio por WhatsApp.",
    date: "2026-07-07",
    readingTime: "9 min de lectura",
  },
  {
    slug: "mejor-software-gestion-clinica-estetica",
    title: "Mejor software de gestión para clínicas estéticas: cómo elegir",
    excerpt:
      "Cómo elegir el mejor software de gestión para tu clínica estética: criterios, tipos de programa, precios publicados y cuándo añadir IA.",
    date: "2026-07-07",
    readingTime: "7 min de lectura",
  },
  {
    slug: "aumentar-ticket-medio-clinica-dental",
    title: "Cómo aumentar el ticket medio en tu clínica dental (sin presionar a tus pacientes)",
    excerpt:
      "Cómo aumentar el ticket medio de tu clínica dental sin presionar al paciente: seguimiento de presupuestos y mensajes post-cita por WhatsApp.",
    date: "2026-06-14",
    readingTime: "6 min de lectura",
  },
  {
    slug: "clinica-estetica-por-whatsapp",
    title: "Clínica estética por WhatsApp: cómo gestionar consultas y citas sin volverte loco",
    excerpt:
      "Cómo gestionar tu clínica estética por WhatsApp: consultas, citas y seguimiento sin que el equipo esté pendiente del móvil todo el día.",
    date: "2026-06-14",
    readingTime: "10 min de lectura",
  },
  {
    slug: "chatbot-whatsapp-vs-recepcionista-clinica",
    title: "Chatbot de WhatsApp vs recepcionista en tu clínica: comparativa honesta",
    excerpt:
      "Chatbot de WhatsApp o recepcionista: qué hace mejor cada uno, en qué se complementan y cuándo tiene sentido automatizar en tu clínica.",
    date: "2026-06-13",
    readingTime: "7 min de lectura",
  },
  {
    slug: "mejor-chatbot-whatsapp-clinica-estetica",
    title: "Cómo elegir el mejor chatbot de WhatsApp para tu clínica estética",
    excerpt:
      "Cómo elegir el mejor chatbot de WhatsApp para tu clínica estética: criterios, preguntas al proveedor y señales de alerta.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "lista-espera-clinica-dental",
    title: "Cómo crear una lista de espera efectiva en tu clínica dental",
    excerpt:
      "Cómo crear una lista de espera en tu clínica dental que convierta cancelaciones en citas nuevas, y cómo avisar a los pacientes automáticamente.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "cuanto-cuesta-chatbot-whatsapp-clinica",
    title: "¿Cuánto cuesta un chatbot de WhatsApp para clínicas? De qué depende el precio",
    excerpt:
      "De qué depende el precio de un chatbot de WhatsApp para clínicas: tipo de solución, volumen, mensajes de Meta y cuándo se amortiza.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "chatbot-whatsapp-clinicas-rgpd",
    title: "Chatbot de WhatsApp para clínicas y RGPD: cómo cumplir la ley sin complicaciones",
    excerpt:
      "Cómo usar un chatbot de WhatsApp en tu clínica conforme al RGPD: base legal, datos de salud, proveedor de IA y documentos que necesitas.",
    date: "2026-06-13",
    readingTime: "7 min de lectura",
  },
  {
    slug: "reducir-lista-espera-clinica-estetica",
    title: "Cómo reducir la lista de espera en tu clínica estética sin perder pacientes",
    excerpt:
      "Cómo reducir la lista de espera de tu clínica estética: aprovechar cancelaciones, avisar antes y ordenar la lista para no perder pacientes.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "tecnologia-para-clinicas-esteticas",
    title: "Tecnología para clínicas estéticas: qué herramientas usar",
    excerpt:
      "Qué tecnología necesita tu clínica estética para captar y retener pacientes —agenda, CRM, WhatsApp e IA— y en qué orden implantarla.",
    date: "2026-06-13",
    readingTime: "7 min de lectura",
  },
  {
    slug: "mejor-crm-clinicas-dentales",
    title: "Mejor CRM para clínicas dentales: qué buscar y cómo elegir",
    excerpt:
      "Cómo elegir el mejor CRM para tu clínica dental: funciones que necesitas, de qué depende el coste y qué errores evitar.",
    date: "2026-06-12",
    readingTime: "7 min de lectura",
  },
  {
    slug: "crm-clinicas-esteticas-pequenas",
    title: "CRM para clínicas estéticas pequeñas: qué necesitas realmente y por dónde empezar",
    excerpt:
      "Qué CRM necesita una clínica estética pequeña: funciones imprescindibles, errores al elegir y el punto de entrada más sencillo.",
    date: "2026-06-12",
    readingTime: "6 min de lectura",
  },
  {
    slug: "marketing-clinica-dental",
    title: "Marketing para clínicas dentales: qué funciona realmente",
    excerpt:
      "Qué canales de marketing funcionan para una clínica dental —Google, redes sociales y WhatsApp— y cómo automatizar la respuesta a los pacientes.",
    date: "2026-06-11",
    readingTime: "8 min de lectura",
  },
  {
    slug: "whatsapp-para-clinicas-dentales",
    title: "WhatsApp para clínicas dentales: cómo usarlo para captar y retener más pacientes",
    excerpt:
      "Guía de WhatsApp para clínicas dentales: cómo usarlo para captar pacientes, confirmar citas y reactivar a los que llevan tiempo sin venir.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "como-reducir-no-shows-clinica-estetica",
    title: "Cómo reducir los no-shows en tu clínica estética y dejar de perder ingresos",
    excerpt:
      "Cómo reducir los no-shows de tu clínica estética con recordatorios automáticos y confirmación activa por WhatsApp.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "agente-ia-recepcion-clinica",
    title: "Agente IA para la recepción de tu clínica: qué es, qué hace y cuánto cuesta",
    excerpt:
      "Qué es un agente IA para la recepción de tu clínica: atiende llamadas y WhatsApp, agenda citas y de qué depende su coste.",
    date: "2026-06-11",
    readingTime: "7 min de lectura",
  },
  {
    slug: "automatizacion-clinicas-dentales",
    title: "Automatización para clínicas dentales: qué puedes automatizar hoy y por dónde empezar",
    excerpt:
      "Qué puedes automatizar en tu clínica dental (confirmaciones, recordatorios, recall y consultas por WhatsApp) y por dónde empezar.",
    date: "2026-06-11",
    readingTime: "8 min de lectura",
  },
  {
    slug: "recordatorios-citas-whatsapp-clinica",
    title: "Recordatorios de citas por WhatsApp para clínicas: cómo configurarlos para que funcionen solos",
    excerpt:
      "Cómo configurar recordatorios de citas por WhatsApp en tu clínica: qué debe incluir el mensaje, cuándo enviarlo y cómo automatizarlo.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "experiencia-paciente-clinica-estetica",
    title: "Cómo mejorar la experiencia del paciente en tu clínica estética (y que vuelvan solos)",
    excerpt:
      "Cómo mejorar la experiencia del paciente en tu clínica estética antes, durante y después de la cita, sin cargar de trabajo al equipo.",
    date: "2026-06-11",
    readingTime: "8 min de lectura",
  },
  {
    slug: "software-gestion-clinicas-esteticas",
    title: "Software de gestión para clínicas estéticas: qué necesitas realmente y por dónde empezar",
    excerpt:
      "Qué software de gestión para clínicas estéticas necesitas de verdad según el tamaño y el momento de tu clínica, y por dónde empezar sin pagar herramientas de más.",
    date: "2026-06-10",
    readingTime: "9 min de lectura",
  },
  {
    slug: "marketing-digital-clinicas-esteticas",
    title: "Marketing digital para clínicas estéticas: qué funciona realmente y qué es perder el tiempo",
    excerpt:
      "Qué canales de marketing digital funcionan para una clínica estética —Instagram, Google y WhatsApp— y cómo combinarlos sin perder leads.",
    date: "2026-06-10",
    readingTime: "9 min de lectura",
  },
  {
    slug: "como-reducir-no-shows-clinica-dental",
    title:
      "Cómo reducir los no-shows en tu clínica dental (y recuperar esos huecos de agenda)",
    excerpt:
      "Cinco estrategias para reducir los no-shows de tu clínica dental, empezando por los recordatorios por WhatsApp.",
    date: "2026-06-07",
    readingTime: "9 min de lectura",
  },
  {
    slug: "que-es-un-agente-de-voz-ia-para-clinicas",
    title: "Qué es un agente de voz con IA y cómo puede transformar tu clínica",
    excerpt:
      "Qué es un agente de voz con IA para clínicas: contesta llamadas, agenda citas y resuelve dudas a cualquier hora.",
    date: "2026-06-07",
    readingTime: "8 min de lectura",
  },
  {
    slug: "chatbot-whatsapp-para-clinicas-esteticas",
    title: "Chatbot de WhatsApp para clínicas estéticas: qué es y cómo funciona",
    excerpt:
      "Qué es un chatbot de WhatsApp para clínicas estéticas, qué hace (consultas, citas, cualificar leads) y de qué depende su coste.",
    date: "2026-06-07",
    readingTime: "9 min de lectura",
  },
  {
    slug: "como-reactivar-pacientes-inactivos-clinica",
    title: "Cómo reactivar pacientes inactivos en tu clínica (sin llamar uno por uno)",
    excerpt:
      "Cómo reactivar pacientes inactivos en tu clínica con mensajes automáticos por WhatsApp, sin llamarles uno por uno.",
    date: "2026-06-07",
    readingTime: "7 min de lectura",
  },
  {
    slug: "meta-ads-para-clinicas-esteticas",
    title: "Meta Ads para clínicas estéticas: cómo conseguir leads sin que Meta te bloquee",
    excerpt:
      "Meta Ads para clínicas estéticas: qué copy aprueba Meta, cómo segmentar, qué presupuesto fijar y qué esperar del primer mes.",
    date: "2026-06-09",
    readingTime: "9 min de lectura",
  },
  {
    slug: "como-conseguir-resenas-google-clinica-estetica",
    title: "Cómo conseguir más reseñas en Google para tu clínica estética (sin pedirlas una por una)",
    excerpt:
      "Cómo conseguir más reseñas en Google para tu clínica estética: cuándo pedirlas, cómo automatizarlo y qué hacer con las negativas.",
    date: "2026-06-09",
    readingTime: "6 min de lectura",
  },
  {
    slug: "crm-para-clinicas-esteticas",
    title: "CRM para clínicas estéticas: qué es, para qué sirve y cuándo lo necesitas",
    excerpt:
      "Qué es un CRM para clínicas estéticas, para qué sirve, en qué se diferencia del software de citas y cuándo lo necesitas.",
    date: "2026-06-09",
    readingTime: "8 min de lectura",
  },
  {
    slug: "como-reducir-cancelaciones-clinica-estetica",
    title: "Cómo reducir las cancelaciones de última hora en tu clínica estética",
    excerpt:
      "Cómo reducir las cancelaciones de última hora en tu clínica estética con confirmación activa, lista de espera y una política de cancelación clara.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "como-captar-clientes-clinica-estetica-sin-presupuesto",
    title: "Cómo captar más clientes para tu clínica estética sin aumentar el presupuesto",
    excerpt:
      "Cómo captar más clientes para tu clínica estética sin aumentar el presupuesto en publicidad: reseñas, referidos, respuesta rápida y más.",
    date: "2026-06-12",
    readingTime: "9 min de lectura",
  },
  {
    slug: "inteligencia-artificial-clinicas-esteticas",
    title: "Inteligencia artificial para clínicas estéticas: qué puedes automatizar hoy",
    excerpt:
      "Qué puede automatizar hoy la inteligencia artificial en tu clínica estética —atención, citas, recordatorios y reactivación— y por dónde empezar.",
    date: "2026-06-10",
    readingTime: "8 min de lectura",
  },
  {
    slug: "como-fidelizar-pacientes-clinica-estetica",
    title: "Cómo fidelizar pacientes en tu clínica estética (y que vuelvan sin que tengas que llamarles)",
    excerpt:
      "Cómo fidelizar pacientes en tu clínica estética: seguimiento post-cita, mensajes por WhatsApp y automatización para que vuelvan sin tener que llamarles.",
    date: "2026-06-10",
    readingTime: "6 min de lectura",
  },
  {
    slug: "automatizar-whatsapp-clinica-dental",
    title: "Cómo automatizar WhatsApp en tu clínica dental y dejar de perder leads",
    excerpt:
      "Cómo automatizar WhatsApp en tu clínica dental para responder consultas, confirmar citas y reducir no-shows sin estar pendiente del móvil.",
    date: "2026-06-10",
    readingTime: "7 min de lectura",
  },
  {
    slug: "como-aumentar-facturacion-clinica-dental",
    title: "Cómo aumentar la facturación de tu clínica dental sin necesidad de más pacientes",
    excerpt:
      "Cómo aumentar la facturación de tu clínica dental sin gastar más en publicidad: cuatro palancas que puedes activar esta semana.",
    date: "2026-06-10",
    readingTime: "8 min de lectura",
  },
  {
    slug: "whatsapp-business-clinicas-esteticas",
    title: "WhatsApp Business para clínicas estéticas: cómo configurarlo y cuándo automatizarlo",
    excerpt:
      "WhatsApp Business para clínicas estéticas: cómo configurarlo bien, qué límites tiene usarlo a mano y cuándo tiene sentido automatizarlo con IA.",
    date: "2026-06-11",
    readingTime: "6 min de lectura",
  },
  {
    slug: "coste-real-no-shows-clinica-dental",
    title: "El coste real de los no-shows en tu clínica dental (y cómo calcularlo con tus propios números)",
    excerpt:
      "Cuánto te cuestan de verdad los no-shows en tu clínica dental y cómo calcularlo con tus propios números.",
    date: "2026-06-13",
    readingTime: "6 min de lectura",
  },
  {
    slug: "resenas-google-clinicas-dentales",
    title: "Cómo conseguir más reseñas en Google para tu clínica dental (y que los nuevos pacientes te elijan)",
    excerpt:
      "Cómo conseguir más reseñas en Google para tu clínica dental: el momento de pedirlas, cómo automatizarlo y cómo responder a las negativas.",
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
