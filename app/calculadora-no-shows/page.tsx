import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import NoShowsCalculator from "@/components/NoShowsCalculator"
import { localBusinessProvider } from "@/lib/schema"

const PATH = "/calculadora-no-shows"
const TITLE = "Calculadora de pérdidas por no-shows para clínicas | Cero Manual"
const DESCRIPTION =
  "Calcula cuánto dinero pierdes al mes por no-shows en tu clínica. Introduce tus datos y descubre tu pérdida real en segundos."

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

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de pérdidas por no-shows para clínicas",
  description: DESCRIPTION,
  applicationCategory: "BusinessApplication",
  url: `https://ceromanual.es${PATH}`,
  provider: localBusinessProvider,
}

export default function CalculadoraNoShowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <Navbar />
      <main>
        <section
          className="min-h-screen pt-32 pb-20 px-6"
          style={{ backgroundColor: "#F5F2EE" }}
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-2 mb-8">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "#7D9B76" }}
              />
              <span
                className="text-sm tracking-widest uppercase"
                style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
              >
                Herramienta gratuita
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              ¿Cuánto dinero pierdes al mes por no-shows en tu clínica?
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "#5A5450", fontFamily: "var(--font-dm-sans)" }}
            >
              Introduce los datos de tu agenda y descubre en segundos cuánto te
              están costando las citas que nunca se presentan — al mes y al año.
            </p>

            <NoShowsCalculator />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
