import type { Caso } from "@/lib/casos"

const SITE = "https://ceromanual.es"

// JSON-LD Article de un caso, con la misma forma que el de los artículos del blog.
export function caseArticleJsonLd(caso: Caso, description: string) {
  const url = `${SITE}/casos/${caso.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caso.title,
    description,
    author: {
      "@type": "Person",
      name: "Joan - Cero Manual",
    },
    datePublished: caso.published,
    dateModified: caso.published,
    publisher: {
      "@type": "Organization",
      name: "Cero Manual",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo.png`,
      },
    },
    image: `${SITE}/logo.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}
