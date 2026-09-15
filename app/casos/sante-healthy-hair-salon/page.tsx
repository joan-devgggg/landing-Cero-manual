import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import P from "@/components/blog/P"
import H2 from "@/components/blog/H2"
import CaseHeader from "@/components/casos/CaseHeader"
import CaseCallout from "@/components/casos/CaseCallout"
import CaseCTA from "@/components/casos/CaseCTA"
import { getCaso } from "@/lib/casos"
import { caseArticleJsonLd } from "@/lib/case-schema"

const CASO = getCaso("sante-healthy-hair-salon")
const PATH = `/casos/${CASO.slug}`
const TITLE = "Software a medida con IA para Sante Healthy Hair Salon"
const DESCRIPTION =
  "Su software de gestión no permitía conectar un agente de IA. Construimos para este salón de Alicante uno a medida, con el agente dentro. Lee el caso."

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
    type: "article",
    publishedTime: CASO.published,
  },
}

const articleJsonLd = caseArticleJsonLd(CASO, DESCRIPTION)

export default function SanteHealthyHairSalonCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="px-6 py-28" style={{ backgroundColor: "#F5F2EE" }}>
        <article className="max-w-3xl mx-auto">
          <CaseHeader caso={CASO} />

          <H2>El cliente</H2>
          <P>Sante Healthy Hair Salon es un salón de belleza en Alicante.</P>

          <H2>La situación de partida</H2>
          <P>
            Usaban Shortcuts como software de gestión. El problema no era el software en sí,
            sino que no permitía conectar un agente de IA.
          </P>
          <P>
            Estaban atrapadas entre una herramienta que hacía lo básico y la imposibilidad de
            ampliarla hacia donde necesitaban ir.
          </P>

          <H2>La solución</H2>
          <P>
            En vez de adaptar el negocio al software, construimos el software entero a
            medida, con el agente de IA integrado desde el principio.
          </P>
          <P>
            Es la gestión completa del salón, y todo lo que tiene el sistema lo pidió ella. Es
            a medida de verdad, no una plantilla adaptada.
          </P>

          <H2>La diferencia</H2>
          <P>
            Cuando el software del mercado no encaja y no se deja ampliar, la alternativa no es
            conformarse con lo que hay, ni cambiar la forma de trabajar para adaptarse a una
            herramienta.
          </P>
          <CaseCallout>Es construir la herramienta que encaja.</CaseCallout>
          <P>
            Otro caso, con un problema distinto:{" "}
            <Link
              href="/casos/geres-group"
              className="underline decoration-1 underline-offset-2"
              style={{ color: "#7D9B76" }}
            >
              seis empresas de Geres Group atendidas desde un solo WhatsApp
            </Link>
            .
          </P>
        </article>

        <CaseCTA
          title="¿Tu software se queda corto?"
          text="Cuéntanos qué hace hoy tu herramienta y hasta dónde necesitas llegar. Vemos juntos si tiene sentido ampliarla o construir una a tu medida."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
