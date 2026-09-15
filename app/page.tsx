import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import ServicesSection from "@/components/ServicesSection"
import IntegrationsTicker from "@/components/IntegrationsTicker"
import TimelineSection from "@/components/TimelineSection"
import DemoSection from "@/components/DemoSection"
import ResultsSection from "@/components/ResultsSection"
import CasosHomeLink from "@/components/casos/CasosHomeLink"
import CTASection from "@/components/CTASection"
import FAQSection from "@/components/FAQSection"
import ArticleLinks from "@/components/ArticleLinks"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import HashScroll from "@/components/HashScroll"

const PATH = "/"
const TITLE = "Agentes de IA para clínicas estéticas | Cero Manual"
const OG_TITLE = "Agentes de IA para clínicas estéticas"
const DESCRIPTION =
  "Agentes de IA que responden en WhatsApp, agendan citas, envían recordatorios y reactivan pacientes de tu clínica estética. Pide tu diagnóstico gratuito."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  openGraph: {
    title: OG_TITLE,
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
        <CasosHomeLink />
        <CTASection />
        <FAQSection />
        <ArticleLinks
          label="Blog"
          title="Recursos para clínicas que quieren"
          titleAccent="dejar de perder pacientes"
          articles={[
            {
              slug: "chatbot-whatsapp-para-clinicas-esteticas",
              title: "Chatbot de WhatsApp para clínicas estéticas: qué es y por qué tu competencia ya lo tiene",
            },
            {
              slug: "software-gestion-clinicas-esteticas",
              title: "Software de gestión para clínicas estéticas: qué necesitas realmente y por dónde empezar",
            },
            {
              slug: "emails-recordatorio-pacientes-clinica",
              title: "Emails de recordatorio para pacientes: plantillas, consejos y cuándo usar WhatsApp en su lugar",
            },
            {
              slug: "tecnologia-para-clinicas-esteticas",
              title: "Tecnología para clínicas estéticas: qué herramientas usar en 2026",
            },
          ]}
          showAllLink
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <HashScroll />
    </>
  )
}
