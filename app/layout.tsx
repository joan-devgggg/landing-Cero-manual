import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import CookieBanner from "@/components/CookieBanner"
import MetaPixel from "@/components/MetaPixel"

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
  title: "Cero Manual — Tu clínica estética, trabajando sola",
  description:
    "Instalamos agentes de IA en WhatsApp que responden, cualifican y agendan citas automáticamente. Reduce no-shows, recupera leads y atiende 24/7 sin contratar a nadie más.",
  keywords: [
    "automatización clínica estética",
    "agente IA WhatsApp clínica",
    "chatbot WhatsApp clínica estética",
    "agenda automática citas clínica",
    "reducir no-shows clínica",
    "cero manual automatización",
  ],
  openGraph: {
    title: "Cero Manual — Tu clínica estética, trabajando sola",
    description:
      "Agente de IA en WhatsApp que responde, cualifica y agenda citas en menos de 5 minutos. Sin contratar a nadie más.",
    type: "website",
    url: "https://ceromanual.es",
  },
  robots: {
    index: true,
    follow: true,
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
        <MetaPixel />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
