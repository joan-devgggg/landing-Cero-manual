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
