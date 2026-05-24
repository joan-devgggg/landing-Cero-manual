import type { Metadata } from "next"
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cero Manual — Automatizaciones con IA para Clínicas Estéticas",
  description:
    "Un agente de IA que responde por WhatsApp, agenda citas y reactiva pacientes mientras tú te dedicas a lo que sabes hacer. Para clínicas estéticas en España.",
  keywords: [
    "automatización clínica estética",
    "chatbot WhatsApp clínica",
    "agente IA medicina estética",
    "agenda automática clínica",
    "cero manual",
  ],
  openGraph: {
    title: "Cero Manual — Tu clínica atendida 24/7 con IA",
    description:
      "Responde WhatsApp, agenda citas y reactiva pacientes en automático. Sin contratar a nadie más.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
