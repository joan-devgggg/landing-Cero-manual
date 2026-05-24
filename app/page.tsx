import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import ServicesSection from "@/components/ServicesSection"
import TimelineSection from "@/components/TimelineSection"
import DemoSection from "@/components/DemoSection"
import PricingSection from "@/components/PricingSection"
import UrgencySection from "@/components/UrgencySection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

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
        <PricingSection />
        <UrgencySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
