import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad — Cero Manual",
  description: "Política de privacidad y protección de datos de Cero Manual conforme al RGPD.",
}

export default function PrivacidadPage() {
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
          Política de Privacidad
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
              1. Responsable del tratamiento
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              <strong>Denominación:</strong> Cero Manual
            </p>
            <p className="text-sm leading-relaxed mb-3">
              <strong>Dominio:</strong> ceromanual.es
            </p>
            <p className="text-sm leading-relaxed mb-3">
              <strong>Correo electrónico:</strong>{" "}
              <a href="mailto:joan@ceromanual.es" style={{ color: "#7D9B76" }}>
                joan@ceromanual.es
              </a>
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Teléfono:</strong> +34 644 786 952
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              2. Datos que recopilamos
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              A través de los formularios de contacto y diagnóstico de nuestra web recopilamos: nombre, dirección de correo electrónico, número de teléfono e información sobre el volumen de negocio y problemas operativos de su empresa.
            </p>
            <p className="text-sm leading-relaxed">
              Adicionalmente, mediante cookies y tecnologías de seguimiento (ver sección 8), podemos recopilar datos de navegación como dirección IP, tipo de dispositivo, páginas visitadas y duración de la sesión.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              3. Finalidad del tratamiento
            </h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>Gestión de leads comerciales y seguimiento de solicitudes de información.</li>
              <li>Contacto proactivo para agendar reuniones de diagnóstico gratuito.</li>
              <li>Envío de comunicaciones comerciales relacionadas con los servicios de Cero Manual (solo si ha prestado consentimiento).</li>
              <li>Medición del rendimiento de campañas publicitarias en Meta (Facebook/Instagram).</li>
              <li>Mejora de la experiencia de usuario en nuestra web.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              4. Base jurídica del tratamiento
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              El tratamiento de sus datos se realiza sobre las siguientes bases jurídicas previstas en el{" "}
              <strong>Reglamento (UE) 2016/679 (RGPD)</strong>:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>
                <strong>Art. 6.1.a) RGPD — Consentimiento:</strong> para el envío de comunicaciones comerciales y la activación de cookies no esenciales (Meta Pixel).
              </li>
              <li>
                <strong>Art. 6.1.f) RGPD — Interés legítimo:</strong> para la gestión de leads comerciales y el seguimiento de solicitudes de información recibidas a través del formulario de contacto.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              5. Destinatarios de los datos
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Sus datos podrán ser comunicados a los siguientes destinatarios en calidad de encargados del tratamiento:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>
                <strong>Meta Platforms Ireland Ltd.</strong> — para la gestión de campañas publicitarias a través del Meta Pixel y la API de Conversiones de Facebook/Instagram.
              </li>
              <li>
                <strong>n8n GmbH</strong> — para la automatización de flujos de trabajo internos.
              </li>
              <li>
                <strong>WhatsApp Business API</strong> — para la gestión de comunicaciones automatizadas por WhatsApp.
              </li>
              <li>
                <strong>Railway (Utility Warehouse Ltd.)</strong> — proveedor de infraestructura cloud donde se aloja la aplicación.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              6. Transferencias internacionales
            </h2>
            <p className="text-sm leading-relaxed">
              Meta Platforms procesa datos en servidores ubicados en los Estados Unidos de América. Dicha transferencia se realiza con las garantías adecuadas previstas en el Art. 46 RGPD, concretamente mediante las{" "}
              <strong>Cláusulas Contractuales Tipo (Standard Contractual Clauses — SCC)</strong>{" "}
              adoptadas por la Comisión Europea. Para más información, consulte la{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7D9B76" }}
              >
                Política de Privacidad de Meta
              </a>
              .
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              7. Plazo de conservación
            </h2>
            <p className="text-sm leading-relaxed">
              Los datos personales facilitados a través del formulario de contacto se conservarán durante un plazo máximo de <strong>24 meses</strong> desde la última interacción, salvo que exista una relación contractual activa o una obligación legal que justifique un plazo superior. Transcurrido dicho plazo, los datos serán eliminados de forma segura.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              8. Cookies y tecnologías de seguimiento
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Esta web utiliza los siguientes tipos de cookies:
            </p>
            <ul className="text-sm leading-relaxed space-y-3 list-disc list-inside">
              <li>
                <strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio web. No requieren consentimiento.
              </li>
              <li>
                <strong>Meta Pixel (cookie de seguimiento publicitario):</strong> código de seguimiento proporcionado por Meta Platforms que permite medir la efectividad de los anuncios en Facebook e Instagram, registrar eventos de conversión (como el envío del formulario de contacto como evento "Lead") y crear audiencias personalizadas. Solo se activa si el usuario acepta las cookies analíticas/publicitarias a través del banner de consentimiento.
              </li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              Puede retirar su consentimiento en cualquier momento a través del banner de cookies, limpiando las cookies del navegador o mediante la herramienta de opt-out de Meta:{" "}
              <a
                href="https://www.facebook.com/ads/preferences/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7D9B76" }}
              >
                facebook.com/ads/preferences
              </a>
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              9. Derechos del interesado (Derechos ARCO+)
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              En virtud del RGPD, usted tiene derecho a:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><strong>Acceso:</strong> conocer qué datos personales suyos tratamos.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión ("derecho al olvido"):</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Limitación:</strong> solicitar la restricción del tratamiento en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y legible por máquina.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento basado en interés legítimo.</li>
              <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
            </ul>
            <p className="text-sm leading-relaxed">
              Para ejercer cualquiera de estos derechos, puede dirigirse a:{" "}
              <a href="mailto:joan@ceromanual.es" style={{ color: "#7D9B76" }}>
                joan@ceromanual.es
              </a>
              , indicando en el asunto "Ejercicio de derechos RGPD" y adjuntando copia de su documento de identidad.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              10. Derecho a reclamar ante la AEPD
            </h2>
            <p className="text-sm leading-relaxed">
              Si considera que el tratamiento de sus datos personales infringe el RGPD, tiene derecho a presentar una reclamación ante la{" "}
              <strong>Agencia Española de Protección de Datos (AEPD)</strong>, autoridad de control competente en España:{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7D9B76" }}
              >
                www.aepd.es
              </a>
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              11. Cambios en esta política
            </h2>
            <p className="text-sm leading-relaxed">
              Cero Manual se reserva el derecho a modificar esta política de privacidad para adaptarla a cambios legislativos o de negocio. La fecha de última actualización siempre estará visible al inicio del documento.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
