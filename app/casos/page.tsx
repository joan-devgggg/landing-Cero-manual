import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { casos } from "@/lib/casos"

const PATH = "/casos"
const TITLE = "Casos de éxito: IA y software a medida | Cero Manual"
const DESCRIPTION =
  "Casos reales de Cero Manual: una recepción con IA para un grupo de seis empresas y un software a medida para un salón de belleza. Lee cómo los montamos."

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

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `https://ceromanual.es${PATH}`,
  hasPart: casos.map((caso) => ({
    "@type": "Article",
    headline: caso.title,
    url: `https://ceromanual.es/casos/${caso.slug}`,
  })),
}

export default function CasosIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navbar />
      <main className="px-6 py-28" style={{ backgroundColor: "#F5F2EE" }}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p
              className="text-xs font-medium mb-4 tracking-widest uppercase"
              style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
            >
              Casos
            </p>
            <h1
              className="text-4xl md:text-5xl font-semibold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              Negocios reales,{" "}
              <span style={{ fontStyle: "italic", color: "#7D9B76" }}>
                problemas concretos
              </span>
            </h1>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
            >
              Cómo era el día a día antes, qué construimos y por qué lo hicimos así.
            </p>
          </div>

          {/* Casos */}
          <div className="flex flex-col gap-6">
            {casos.map((caso) => (
              <Link
                key={caso.slug}
                href={`/casos/${caso.slug}`}
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
                  {caso.client} · {caso.sector}
                </p>
                <h2
                  className="text-2xl md:text-3xl font-semibold leading-snug mb-3 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                >
                  {caso.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
                >
                  {caso.summary}
                </p>
                <span
                  className="text-sm font-medium inline-flex items-center gap-2 transition-colors duration-200"
                  style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
                >
                  Leer caso →
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
