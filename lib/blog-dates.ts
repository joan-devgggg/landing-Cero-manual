// Fechas reales de publicacion y ultima modificacion de cada articulo del blog.
// Fuente unica: las usan las paginas de articulo (openGraph y JSON-LD) y
// app/sitemap.ts. Al actualizar un articulo, cambia la fecha aqui y solo aqui.

type BlogDates = { published: string; modified: string }

export const blogDates = {
  "agente-ia-recepcion-clinica": { published: "2026-06-11", modified: "2026-09-16" },
  "aumentar-ticket-medio-clinica-dental": { published: "2026-06-14", modified: "2026-09-16" },
  "automatizacion-clinicas-dentales": { published: "2026-06-11", modified: "2026-09-16" },
  "automatizar-whatsapp-clinica-dental": { published: "2026-06-10", modified: "2026-09-16" },
  "chatbot-whatsapp-clinicas-rgpd": { published: "2026-06-13", modified: "2026-09-16" },
  "chatbot-whatsapp-para-clinicas-esteticas": { published: "2026-06-07", modified: "2026-09-16" },
  "chatbot-whatsapp-vs-recepcionista-clinica": { published: "2026-06-13", modified: "2026-09-16" },
  "clinica-estetica-por-whatsapp": { published: "2026-06-14", modified: "2026-09-16" },
  "como-aumentar-facturacion-clinica-dental": { published: "2026-06-10", modified: "2026-09-16" },
  "como-captar-clientes-clinica-estetica-sin-presupuesto": { published: "2026-06-12", modified: "2026-09-16" },
  "como-conseguir-resenas-google-clinica-estetica": { published: "2026-06-09", modified: "2026-09-16" },
  "como-fidelizar-pacientes-clinica-estetica": { published: "2026-06-10", modified: "2026-09-16" },
  "como-reactivar-pacientes-inactivos-clinica": { published: "2026-06-07", modified: "2026-09-16" },
  "como-reducir-cancelaciones-clinica-estetica": { published: "2026-06-11", modified: "2026-09-16" },
  "como-reducir-no-shows-clinica-dental": { published: "2026-06-07", modified: "2026-09-16" },
  "como-reducir-no-shows-clinica-estetica": { published: "2026-06-11", modified: "2026-09-16" },
  "coste-real-no-shows-clinica-dental": { published: "2026-06-13", modified: "2026-09-16" },
  "crm-clinicas-esteticas-pequenas": { published: "2026-06-12", modified: "2026-09-16" },
  "crm-para-clinicas-esteticas": { published: "2026-06-09", modified: "2026-09-16" },
  "cuanto-cuesta-chatbot-whatsapp-clinica": { published: "2026-06-13", modified: "2026-09-16" },
  "emails-recordatorio-pacientes-clinica": { published: "2026-07-07", modified: "2026-09-16" },
  "experiencia-paciente-clinica-estetica": { published: "2026-06-11", modified: "2026-09-16" },
  "inteligencia-artificial-clinicas-esteticas": { published: "2026-06-10", modified: "2026-09-16" },
  "lista-espera-clinica-dental": { published: "2026-06-13", modified: "2026-09-16" },
  "marketing-clinica-dental": { published: "2026-06-11", modified: "2026-09-16" },
  "marketing-digital-clinicas-esteticas": { published: "2026-06-10", modified: "2026-09-16" },
  "mejor-chatbot-whatsapp-clinica-estetica": { published: "2026-06-13", modified: "2026-09-16" },
  "mejor-crm-clinicas-dentales": { published: "2026-06-12", modified: "2026-09-16" },
  "mejor-software-gestion-clinica-estetica": { published: "2026-07-07", modified: "2026-09-16" },
  "meta-ads-para-clinicas-esteticas": { published: "2026-06-09", modified: "2026-09-16" },
  "programa-gestion-clinica-estetica": { published: "2026-07-12", modified: "2026-09-16" },
  "que-es-un-agente-de-voz-ia-para-clinicas": { published: "2026-06-07", modified: "2026-09-16" },
  "recordatorios-citas-whatsapp-clinica": { published: "2026-06-11", modified: "2026-09-16" },
  "reducir-lista-espera-clinica-estetica": { published: "2026-06-13", modified: "2026-09-16" },
  "resenas-google-clinicas-dentales": { published: "2026-06-13", modified: "2026-09-16" },
  "software-gestion-citas-clinica-estetica": { published: "2026-07-12", modified: "2026-09-16" },
  "software-gestion-clinicas-esteticas": { published: "2026-06-10", modified: "2026-09-16" },
  "tecnologia-para-clinicas-esteticas": { published: "2026-06-13", modified: "2026-09-16" },
  "whatsapp-business-clinicas-esteticas": { published: "2026-06-11", modified: "2026-09-16" },
  "whatsapp-para-clinicas-dentales": { published: "2026-06-11", modified: "2026-09-16" },
} as const satisfies Record<string, BlogDates>

export type BlogSlug = keyof typeof blogDates

export function articleDates(slug: BlogSlug) {
  const { published, modified } = blogDates[slug]
  return {
    published,
    modified,
    publishedTime: `${published}T00:00:00.000Z`,
    modifiedTime: `${modified}T00:00:00.000Z`,
  }
}
