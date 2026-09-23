import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import ServicesSection from "@/components/ServicesSection"
import TimelineSection from "@/components/TimelineSection"
import DemoSection from "@/components/DemoSection"
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
  "Agentes de IA que responden en WhatsApp, agendan citas, envían recordatorios y reactivan pacientes de tu clínica estética. Pide tu auditoría gratuita."

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
        <TimelineSection />
        <DemoSection />
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
              title: "Chatbot de WhatsApp para clínicas estéticas: qué es y cómo funciona",
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
              title: "Tecnología para clínicas estéticas: qué herramientas usar",
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
