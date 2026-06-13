import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import CookieBanner from "@/components/CookieBanner"
import MetaPixel from "@/components/MetaPixel"
import MetaPageView from "@/components/MetaPageView"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ceromanual.es"),
  title: {
    default: "Agentes de IA para Clínicas Estéticas | Cero Manual",
    template: "%s · Cero Manual",
  },
  description:
    "Automatiza tu clínica estética con agentes de IA: WhatsApp, voz, recordatorios y reactivación de pacientes. Pide tu diagnóstico gratuito.",
  keywords: [
    "automatización clínica estética",
    "agente IA WhatsApp clínica",
    "chatbot WhatsApp clínica estética",
    "agenda automática citas clínica",
    "reducir no-shows clínica",
    "cero manual automatización",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agentes de IA para Clínicas Estéticas | Cero Manual",
    description:
      "Agente de IA en WhatsApp que responde, cualifica y agenda citas en menos de 5 minutos. Sin contratar a nadie más.",
    type: "website",
    url: "https://ceromanual.es",
    siteName: "Cero Manual",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes de IA para Clínicas Estéticas | Cero Manual",
    description:
      "Agente de IA en WhatsApp que responde, cualifica y agenda citas en menos de 5 minutos. Sin contratar a nadie más.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "qpT14TQnIxBT00o2rGjfPj9wopLpbGKCPxRWuO0Ik8U",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cero Manual",
  url: "https://ceromanual.es",
  logo: "https://ceromanual.es/logo.png",
  image: "https://ceromanual.es/logo.png",
  description:
    "Instalamos agentes de IA para clínicas estéticas y clínicas dentales: chatbot WhatsApp, automatización, recordatorios automáticos y reactivación de pacientes.",
  email: "joan@ceromanual.es",
  telephone: "+34644786952",
  areaServed: "ES",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  sameAs: ["https://instagram.com/cero.manual"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34644786952",
    email: "joan@ceromanual.es",
    contactType: "customer service",
    areaServed: "ES",
    availableLanguage: ["Spanish"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MetaPixel />
        <MetaPageView />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
