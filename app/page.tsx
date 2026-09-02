import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import ServicesSection from "@/components/ServicesSection"
import IntegrationsTicker from "@/components/IntegrationsTicker"
import TimelineSection from "@/components/TimelineSection"
import DemoSection from "@/components/DemoSection"
import ResultsSection from "@/components/ResultsSection"
import CTASection from "@/components/CTASection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import HashScroll from "@/components/HashScroll"

const PATH = "/"
const TITLE = "Agentes de IA en WhatsApp para clínicas estéticas"
const DESCRIPTION =
  "Agentes de IA que responden en WhatsApp, agendan citas, envían recordatorios y reactivan pacientes de tu clínica estética. Pide tu diagnóstico gratuito."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ceromanual.es",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <IntegrationsTicker />
        <TimelineSection />
        <DemoSection />
        <ResultsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <HashScroll />
    </>
  )
}
