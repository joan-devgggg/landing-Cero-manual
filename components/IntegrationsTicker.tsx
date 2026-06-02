import type { ElementType } from "react"
import { CalendarDays, Stethoscope, CreditCard, Building2 } from "lucide-react"

type Integration =
  | { name: string; type: "simpleicons"; slug: string }
  | { name: string; type: "lucide"; icon: ElementType; color: string }

const integrations: Integration[] = [
  { name: "WhatsApp Business", type: "simpleicons", slug: "whatsapp" },
  { name: "Instagram", type: "simpleicons", slug: "instagram" },
  { name: "Facebook", type: "simpleicons", slug: "facebook" },
  { name: "Booksy", type: "simpleicons", slug: "booksy" },
  { name: "Vagaro", type: "simpleicons", slug: "vagaro" },
  { name: "Treatwell", type: "lucide", icon: CalendarDays, color: "#00B67A" },
  { name: "Flowww", type: "lucide", icon: Building2, color: "#7D9B76" },
  { name: "Klinikare", type: "lucide", icon: Stethoscope, color: "#3B82F6" },
  { name: "Doctoralia", type: "lucide", icon: Stethoscope, color: "#00A3E0" },
  { name: "Top Doctors", type: "simpleicons", slug: "topdoctors" },
  { name: "Google Calendar", type: "simpleicons", slug: "googlecalendar" },
  { name: "Google Sheets", type: "simpleicons", slug: "googlesheets" },
  { name: "Google My Business", type: "simpleicons", slug: "googlemybusiness" },
  { name: "Calendly", type: "simpleicons", slug: "calendly" },
  { name: "Zoom", type: "simpleicons", slug: "zoom" },
  { name: "Mailchimp", type: "simpleicons", slug: "mailchimp" },
  { name: "Brevo", type: "simpleicons", slug: "brevo" },
  { name: "Stripe", type: "simpleicons", slug: "stripe" },
  { name: "Redsys", type: "lucide", icon: CreditCard, color: "#E63946" },
  { name: "Manychat", type: "simpleicons", slug: "manychat" },
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
