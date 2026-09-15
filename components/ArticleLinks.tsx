import Link from "next/link"

export interface ArticleLink {
  slug: string
  title: string
}

export interface ArticleLinksProps {
  label: string
  title: string
  titleAccent?: string
  articles: ArticleLink[]
  // Enlace final al listado del blog. En la home sí; en las páginas de servicio no hace falta.
  showAllLink?: boolean
}

// Server component a propósito: los enlaces tienen que ir en el HTML servido, que es lo
// que leen Googlebot y los crawlers de IA. Lo usan la home y las páginas de servicio para
// enlazar a los artículos del blog.
export default function ArticleLinks({
  label,
  title,
  titleAccent,
  articles,
  showAllLink = false,
}: ArticleLinksProps) {
  return (
    <section className="py-14 md:py-28 px-6" style={{ backgroundColor: "#F5F2EE" }}>
      <div className="max-w-4xl mx-auto">
        <div className="w-full h-px mb-10 md:mb-20" style={{ backgroundColor: "#E0DBD4" }} />

        <p
          className="text-xs font-medium mb-4 tracking-widest uppercase"
          style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
        >
          {label}
        </p>
        <h2
          className="text-4xl md:text-5xl font-semibold leading-tight mb-10 md:mb-14"
          style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span style={{ fontStyle: "italic", color: "#7D9B76" }}>{titleAccent}</span>
            </>
          )}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block p-8 rounded-2xl border transition-colors duration-200 hover:border-[#7D9B76]"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E0DBD4" }}
            >
              <p
                className="text-xl font-semibold leading-snug mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
              >
                {article.title}
              </p>
              <span
                className="text-sm font-medium"
                style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
              >
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>

        {showAllLink && (
          <Link
            href="/blog"
            className="inline-block mt-10 text-sm font-medium underline decoration-1 underline-offset-4"
            style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
          >
            Ver todos los artículos del blog →
          </Link>
        )}
      </div>
    </section>
  )
}
