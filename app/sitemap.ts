import type { MetadataRoute } from "next"
import { articleDates, type BlogSlug } from "@/lib/blog-dates"

const baseUrl = "https://ceromanual.es"

type UndatedPage = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

// Estas paginas no tienen ninguna fecha de modificacion fiable, asi que van sin
// lastModified. Antes llevaban new Date(), que en cada build le decia a Google
// que habian cambiado hoy.
const topPages: UndatedPage[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/agente-whatsapp-clinicas-esteticas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agente-whatsapp-clinicas-dentales", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agente-voz-ia-clinicas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/recordatorios-automaticos-citas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/reactivacion-pacientes-inactivos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/calculadora-no-shows", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
]

const legalPages: UndatedPage[] = [
  { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
  { path: "/aviso-legal", changeFrequency: "yearly", priority: 0.3 },
]

// Los articulos si tienen fecha real. Sale de lib/blog-dates.ts, la misma fuente
// que alimenta su dateModified de JSON-LD y su og:modified_time.
const articleSlugs: BlogSlug[] = [
  "como-reducir-no-shows-clinica-dental",
  "que-es-un-agente-de-voz-ia-para-clinicas",
  "chatbot-whatsapp-para-clinicas-esteticas",
  "como-reactivar-pacientes-inactivos-clinica",
  "recordatorios-automaticos-citas-clinica",
  "meta-ads-para-clinicas-esteticas",
  "como-conseguir-resenas-google-clinica-estetica",
  "crm-para-clinicas-esteticas",
  "mejor-crm-clinicas-dentales",
  "crm-clinicas-esteticas-pequenas",
  "como-reducir-cancelaciones-clinica-estetica",
  "como-captar-clientes-clinica-estetica-sin-presupuesto",
  "como-gestionar-ausencias-clinica-estetica",
  "inteligencia-artificial-clinicas-esteticas",
  "como-fidelizar-pacientes-clinica-estetica",
  "automatizar-whatsapp-clinica-dental",
  "como-mejorar-atencion-cliente-clinica-estetica",
  "como-aumentar-facturacion-clinica-dental",
  "marketing-digital-clinicas-esteticas",
  "como-conseguir-mas-citas-clinica-estetica",
  "gestionar-citas-clinica-estetica-whatsapp",
  "software-gestion-clinicas-esteticas",
  "agenda-clinica-estetica-online",
  "whatsapp-business-clinicas-esteticas",
  "captacion-pacientes-clinica-estetica",
  "experiencia-paciente-clinica-estetica",
  "recordatorios-citas-whatsapp-clinica",
  "automatizacion-clinicas-dentales",
  "como-reducir-no-shows-clinica-estetica",
  "agente-ia-recepcion-clinica",
  "inteligencia-artificial-clinicas-dentales",
  "como-conseguir-pacientes-clinica-dental",
  "marketing-clinica-dental",
  "whatsapp-para-clinicas-dentales",
  "agente-whatsapp-clinica-dental",
  "reducir-lista-espera-clinica-estetica",
  "software-gestion-clinica-estetica",
  "tecnologia-para-clinicas-esteticas",
  "coste-real-no-shows-clinica-dental",
  "resenas-google-clinicas-dentales",
  "cuanto-cuesta-chatbot-whatsapp-clinica",
  "chatbot-whatsapp-clinicas-rgpd",
  "plantillas-recordatorio-cita-clinica",
  "lista-espera-clinica-dental",
  "mejor-chatbot-whatsapp-clinica-estetica",
  "chatbot-whatsapp-vs-recepcionista-clinica",
  "aumentar-ticket-medio-clinica-dental",
  "aumentar-ingresos-clinica-dental-sin-pacientes",
  "clinica-estetica-por-whatsapp",
  "responder-consultas-clinica-estetica-whatsapp",
  "emails-recordatorio-pacientes-clinica",
  "mejor-software-gestion-clinica-estetica",
  "software-gestion-citas-clinica-estetica",
  "programa-gestion-clinica-estetica",
]

const toEntry = ({ path, changeFrequency, priority }: UndatedPage) => ({
  url: `${baseUrl}${path}`,
  changeFrequency,
  priority,
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...topPages.map(toEntry),
    ...articleSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: articleDates(slug).modified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...legalPages.map(toEntry),
  ]
}
