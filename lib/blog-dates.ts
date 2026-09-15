// Fechas reales de publicacion y ultima modificacion de cada articulo del blog.
// Fuente unica: las usan las paginas de articulo (openGraph y JSON-LD) y
// app/sitemap.ts. Al actualizar un articulo, cambia la fecha aqui y solo aqui.

type BlogDates = { published: string; modified: string }

export const blogDates = {
  "agente-ia-recepcion-clinica": { published: "2026-06-11", modified: "2026-06-11" },
  "aumentar-ticket-medio-clinica-dental": { published: "2026-06-14", modified: "2026-06-14" },
  "automatizacion-clinicas-dentales": { published: "2026-06-11", modified: "2026-09-15" },
  "automatizar-whatsapp-clinica-dental": { published: "2026-06-10", modified: "2026-06-10" },
  "chatbot-whatsapp-clinicas-rgpd": { published: "2026-06-13", modified: "2026-06-13" },
  "chatbot-whatsapp-para-clinicas-esteticas": { published: "2026-06-07", modified: "2026-08-08" },
  "chatbot-whatsapp-vs-recepcionista-clinica": { published: "2026-06-13", modified: "2026-06-13" },
  "clinica-estetica-por-whatsapp": { published: "2026-06-14", modified: "2026-09-15" },
  "como-aumentar-facturacion-clinica-dental": { published: "2026-06-10", modified: "2026-09-15" },
  "como-captar-clientes-clinica-estetica-sin-presupuesto": { published: "2026-06-12", modified: "2026-09-15" },
  "como-conseguir-resenas-google-clinica-estetica": { published: "2026-06-09", modified: "2026-06-09" },
  "como-fidelizar-pacientes-clinica-estetica": { published: "2026-06-10", modified: "2026-06-10" },
  "como-reactivar-pacientes-inactivos-clinica": { published: "2026-06-07", modified: "2026-06-07" },
  "como-reducir-cancelaciones-clinica-estetica": { published: "2026-06-11", modified: "2026-06-11" },
  "como-reducir-no-shows-clinica-dental": { published: "2026-06-07", modified: "2026-08-08" },
  "como-reducir-no-shows-clinica-estetica": { published: "2026-06-11", modified: "2026-09-15" },
  "coste-real-no-shows-clinica-dental": { published: "2026-06-13", modified: "2026-06-13" },
  "crm-clinicas-esteticas-pequenas": { published: "2026-06-12", modified: "2026-06-12" },
  "crm-para-clinicas-esteticas": { published: "2026-06-09", modified: "2026-08-08" },
  "cuanto-cuesta-chatbot-whatsapp-clinica": { published: "2026-06-13", modified: "2026-06-13" },
  "emails-recordatorio-pacientes-clinica": { published: "2026-07-07", modified: "2026-09-15" },
  "experiencia-paciente-clinica-estetica": { published: "2026-06-11", modified: "2026-09-15" },
  "inteligencia-artificial-clinicas-esteticas": { published: "2026-06-10", modified: "2026-06-10" },
  "lista-espera-clinica-dental": { published: "2026-06-13", modified: "2026-06-13" },
  "marketing-clinica-dental": { published: "2026-06-11", modified: "2026-09-15" },
  "marketing-digital-clinicas-esteticas": { published: "2026-06-10", modified: "2026-09-15" },
  "mejor-chatbot-whatsapp-clinica-estetica": { published: "2026-06-13", modified: "2026-06-13" },
  "mejor-crm-clinicas-dentales": { published: "2026-06-12", modified: "2026-06-12" },
  "mejor-software-gestion-clinica-estetica": { published: "2026-07-07", modified: "2026-08-08" },
  "meta-ads-para-clinicas-esteticas": { published: "2026-06-09", modified: "2026-08-11" },
  "programa-gestion-clinica-estetica": { published: "2026-07-12", modified: "2026-07-12" },
  "que-es-un-agente-de-voz-ia-para-clinicas": { published: "2026-06-07", modified: "2026-06-07" },
  "recordatorios-citas-whatsapp-clinica": { published: "2026-06-11", modified: "2026-06-11" },
  "reducir-lista-espera-clinica-estetica": { published: "2026-06-13", modified: "2026-06-13" },
  "resenas-google-clinicas-dentales": { published: "2026-06-13", modified: "2026-06-13" },
  "software-gestion-citas-clinica-estetica": { published: "2026-07-12", modified: "2026-07-12" },
  "software-gestion-clinicas-esteticas": { published: "2026-06-10", modified: "2026-09-15" },
  "tecnologia-para-clinicas-esteticas": { published: "2026-06-13", modified: "2026-06-13" },
  "whatsapp-business-clinicas-esteticas": { published: "2026-06-11", modified: "2026-06-11" },
  "whatsapp-para-clinicas-dentales": { published: "2026-06-11", modified: "2026-06-11" },
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
