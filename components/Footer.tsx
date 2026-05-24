"use client"

import { MessageCircle } from "lucide-react"

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Demo", href: "#demo" },
  { label: "Privacidad", href: "#" },
  { label: "Aviso Legal", href: "#" },
]

export default function Footer() {
  const handleNav = (href: string) => {
    if (href === "#") return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer
      className="mt-20 py-12 px-6"
      style={{ borderTop: "1px solid #1E1E1E" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-base font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)", color: "#F5F5F5" }}
          >
            CERO MANUAL
          </button>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-xs transition-colors duration-200"
                style={{
                  color: "#555555",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/cero.manual"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "#555555" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#BEFF00")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#555555")
              }
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://wa.me/34644786952"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "#555555" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#BEFF00")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#555555")
              }
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-8 text-center"
          style={{ borderTop: "1px solid #1E1E1E" }}
        >
          <p
            className="text-xs"
            style={{ color: "#333333", fontFamily: "var(--font-dm-sans)" }}
          >
            © 2025 Cero Manual · Agencia de automatizaciones con IA
          </p>
        </div>
      </div>
    </footer>
  )
}
