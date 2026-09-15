// Única lista de casos de éxito. La leen el índice /casos, el bloque de la home y el
// sitemap, así que añadir un caso es crear su carpeta en app/casos/ y una entrada aquí.
// `published` es la fecha real de publicación, nunca la del build.

export interface Caso {
  slug: string
  title: string
  client: string
  sector: string
  summary: string
  published: string
}

export const casos: Caso[] = [
  {
    slug: "geres-group",
    title: "Seis empresas, un solo WhatsApp",
    client: "Geres Group",
    sector: "Grupo empresarial · Costa Blanca",
    summary:
      "Seis marcas compartían el móvil de la dueña. Ahora un sistema de IA hace de recepción del grupo, responde en el idioma del cliente y avisa a quien lleva cada área.",
    published: "2026-09-16",
  },
  {
    slug: "sante-healthy-hair-salon",
    title: "Cuando el software que existe no te sirve",
    client: "Sante Healthy Hair Salon",
    sector: "Salón de belleza · Alicante",
    summary:
      "Su software de gestión no permitía conectar un agente de IA. Construimos uno entero a medida, con el agente integrado desde el principio.",
    published: "2026-09-16",
  },
]

export function getCaso(slug: string): Caso {
  const caso = casos.find((c) => c.slug === slug)
  if (!caso) throw new Error(`Caso no encontrado en lib/casos.ts: ${slug}`)
  return caso
}
