import type { ElementType } from "react"
import { CalendarDays, Building2, Star, CreditCard, Mail } from "lucide-react"

type Integration =
  | { name: string; type: "simpleicons"; slug: string }
  | { name: string; type: "lucide"; icon: ElementType; color: string }

const integrations: Integration[] = [
  // Redes sociales y mensajería
  { name: "WhatsApp Business", type: "simpleicons", slug: "whatsapp" },
  { name: "Instagram", type: "simpleicons", slug: "instagram" },
  { name: "Facebook", type: "simpleicons", slug: "facebook" },
  { name: "TikTok", type: "simpleicons", slug: "tiktok" },
  { name: "Telegram", type: "simpleicons", slug: "telegram" },
  // Calendarios y reservas
  { name: "Google Calendar", type: "simpleicons", slug: "googlecalendar" },
  { name: "Calendly", type: "simpleicons", slug: "calendly" },
  { name: "Booksy", type: "simpleicons", slug: "booksy" },
  { name: "Treatwell", type: "lucide", icon: CalendarDays, color: "#00B67A" },
  { name: "Vagaro", type: "lucide", icon: CalendarDays, color: "#C0392B" },
  // CRMs y software de clínica
  { name: "Flowww", type: "lucide", icon: Building2, color: "#7D9B76" },
  { name: "Klinikare", type: "lucide", icon: Building2, color: "#3B82F6" },
  { name: "HubSpot", type: "simpleicons", slug: "hubspot" },
  { name: "Pipedrive", type: "simpleicons", slug: "pipedrive" },
  { name: "Salesforce", type: "simpleicons", slug: "salesforce" },
  // Email marketing
  { name: "Mailchimp", type: "simpleicons", slug: "mailchimp" },
  { name: "Brevo", type: "simpleicons", slug: "brevo" },
  { name: "ActiveCampaign", type: "lucide", icon: Mail, color: "#356AE6" },
  // Reseñas y directorios
  { name: "Google My Business", type: "simpleicons", slug: "googlemybusiness" },
  { name: "Doctoralia", type: "lucide", icon: Star, color: "#00A3E0" },
  { name: "Top Doctors", type: "lucide", icon: Star, color: "#E87722" },
  // Pagos
  { name: "Stripe", type: "simpleicons", slug: "stripe" },
  { name: "Redsys", type: "lucide", icon: CreditCard, color: "#E63946" },
  { name: "PayPal", type: "simpleicons", slug: "paypal" },
  // Automatización
  { name: "n8n", type: "simpleicons", slug: "n8n" },
  { name: "Make", type: "simpleicons", slug: "make" },
  { name: "Zapier", type: "simpleicons", slug: "zapier" },
  { name: "Notion", type: "simpleicons", slug: "notion" },
  { name: "Google Sheets", type: "simpleicons", slug: "googlesheets" },
  { name: "Airtable", type: "simpleicons", slug: "airtable" },
]

function Pill({ integration }: { integration: Integration }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white"
      style={{
        border: "1px solid #E0DBD4",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.04)",
      }}
    >
      {integration.type === "simpleicons" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${integration.slug}`}
          alt=""
          width={16}
          height={16}
          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
        />
      ) : (
        <integration.icon
          size={16}
          color={integration.color}
          strokeWidth={1.75}
          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
        />
      )}
      <span
        className="text-xs md:text-sm font-medium whitespace-nowrap"
        style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
      >
        {integration.name}
      </span>
    </div>
  )
}

export default function IntegrationsTicker() {
  return (
    <section className="py-8 md:py-10" style={{ backgroundColor: "#F5F2EE" }}>
      {/* Label */}
      <p
        className="text-xs font-medium tracking-widest uppercase text-center mb-5 md:mb-6"
        style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
      >
        Compatible con tus herramientas
      </p>

      {/* Ticker */}
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        }}
      >
        <div className="flex gap-3 ticker-track" style={{ width: "max-content" }}>
          {integrations.map((t) => (
            <Pill key={t.name} integration={t} />
          ))}
          {integrations.map((t) => (
            <Pill key={`dup-${t.name}`} integration={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
