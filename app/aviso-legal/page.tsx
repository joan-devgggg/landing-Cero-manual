import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal — Cero Manual",
  description: "Aviso legal e información corporativa de Cero Manual.",
}

export default function AvisoLegalPage() {
  return (
    <div
      className="min-h-screen px-6 py-20"
      style={{ backgroundColor: "#F5F2EE", fontFamily: "var(--font-dm-sans)" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-150"
          style={{ color: "#8A8580" }}
        >
          ← Volver a inicio
        </Link>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
        >
          Aviso Legal
        </h1>
        <p className="text-sm mb-16" style={{ color: "#8A8580" }}>
          Última actualización: mayo de 2025
        </p>

        <div className="flex flex-col gap-12" style={{ color: "#3A3A3A" }}>
          {/* 1 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              1. Datos identificativos del titular
            </h2>
            <div className="text-sm leading-relaxed space-y-2">
              <p><strong>Denominación comercial:</strong> Cero Manual</p>
              <p><strong>CIF:</strong> [CIF]</p>
              <p><strong>Dominio web:</strong> ceromanual.es</p>
              <p>
                <strong>Correo electrónico:</strong>{" "}
                <a href="mailto:joan@ceromanual.es" style={{ color: "#7D9B76" }}>
                  joan@ceromanual.es
                </a>
              </p>
              <p><strong>Teléfono:</strong> +34 644 786 952</p>
              <p><strong>Instagram:</strong> @cero.manual</p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              2. Objeto y actividad
            </h2>
            <p className="text-sm leading-relaxed">
              Cero Manual es una empresa especializada en el diseño, desarrollo e implementación de soluciones de automatización e inteligencia artificial para empresas del sector estético y sanitario. Sus servicios incluyen el desarrollo de agentes conversacionales para WhatsApp e Instagram, sistemas de gestión de leads, automatización de recordatorios y seguimiento de clientes, y consultoría en transformación digital.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              3. Condiciones de uso del sitio web
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El titular se reserva el derecho a modificar, suspender o interrumpir el acceso al sitio web en cualquier momento y sin previo aviso.
            </p>
            <p className="text-sm leading-relaxed">
              El usuario se compromete a hacer un uso lícito del sitio web, sin incurrir en actividades ilícitas o contrarias a la buena fe y al orden público, y sin causar daños a los sistemas informáticos del titular o de terceros.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              4. Propiedad intelectual e industrial
            </h2>
            <p className="text-sm leading-relaxed">
              Todos los contenidos del sitio web ceromanual.es, incluyendo textos, imágenes, diseño gráfico, código fuente, logotipos y marcas, son propiedad de Cero Manual o de sus licenciantes y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. Queda expresamente prohibida su reproducción, distribución, transformación o comunicación pública sin autorización expresa y por escrito del titular.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              5. Exclusión de responsabilidad
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Cero Manual no se responsabiliza de los daños o perjuicios que pudieran derivarse del uso de la información contenida en este sitio web, ni de la disponibilidad técnica del mismo.
            </p>
            <p className="text-sm leading-relaxed">
              Los enlaces a sitios web de terceros que puedan aparecer en este sitio son proporcionados únicamente como referencia. Cero Manual no controla ni se responsabiliza del contenido de dichos sitios.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              6. Protección de datos personales
            </h2>
            <p className="text-sm leading-relaxed">
              El tratamiento de los datos personales recogidos a través de este sitio web se rige por nuestra{" "}
              <Link href="/privacidad" style={{ color: "#7D9B76" }}>
                Política de Privacidad
              </Link>
              , conforme a lo establecido en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              7. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-sm leading-relaxed">
              El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
