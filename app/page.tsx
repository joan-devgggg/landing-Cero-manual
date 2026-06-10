"use client"

import { useEffect } from "react"
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

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

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
    </>
  )
}
