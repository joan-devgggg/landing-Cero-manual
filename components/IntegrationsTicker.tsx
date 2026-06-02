const integrations = [
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "n8n", slug: "n8n" },
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Notion", slug: "notion" },
  { name: "Slack", slug: "slack" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "Airtable", slug: "airtable" },
  { name: "Calendly", slug: "calendly" },
  { name: "Stripe", slug: "stripe" },
  { name: "Twilio", slug: "twilio" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Typeform", slug: "typeform" },
  { name: "Tally", slug: "tally" },
  { name: "Monday.com", slug: "monday" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Intercom", slug: "intercom" },
  { name: "Crisp", slug: "crisp" },
  { name: "Manychat", slug: "manychat" },
  { name: "Instagram", slug: "instagram" },
  { name: "Facebook", slug: "facebook" },
  { name: "Google Analytics", slug: "googleanalytics" },
  { name: "Mailchimp", slug: "mailchimp" },
]

function Pill({ name, slug }: { name: string; slug: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white"
      style={{
        border: "1px solid #E0DBD4",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.04)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt=""
        width={16}
        height={16}
        className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
      />
      <span
        className="text-xs md:text-sm font-medium whitespace-nowrap"
        style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
      >
        {name}
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
            <Pill key={t.slug} name={t.name} slug={t.slug} />
          ))}
          {integrations.map((t) => (
            <Pill key={`dup-${t.slug}`} name={t.name} slug={t.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}
