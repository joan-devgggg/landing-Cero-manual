"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Demo", href: "#demo" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Aviso Legal", href: "/aviso-legal" },
]

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer
      className="mt-20 py-12 px-6"
      style={{ borderTop: "1px solid #E0DBD4", backgroundColor: "#F5F2EE" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-semibold text-base tracking-tight block mb-1"
              style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
            >
              Cero Manual
            </button>
            <p className="text-xs" style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}>
              Automatizaciones con IA para clínicas estéticas
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((l) =>
              l.href.startsWith("/") ? (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs transition-colors duration-200"
                  style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8580")}
                >
                  {l.label}
                </Link>
              ) : (
                <button
                  key={l.label}
                  onClick={() => handleScroll(l.href)}
                  className="text-xs transition-colors duration-200"
                  style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8580")}
                >
                  {l.label}
                </button>
              )
            )}
          </nav>

          {/* Contact + Social */}
          <div className="flex flex-col gap-3">
            <p className="text-xs" style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}>
              +34 644 786 952 · joan@ceromanual.es
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/cero.manual"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "#8A8580" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7D9B76")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8580")}
                aria-label="Instagram @cero.manual"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/34644786952"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "#8A8580" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7D9B76")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8580")}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid #E0DBD4" }}
        >
          <p className="text-xs" style={{ color: "#C0BAB3", fontFamily: "var(--font-dm-sans)" }}>
            © 2025 Cero Manual · Automatizaciones con IA para clínicas estéticas
          </p>
          <p className="text-xs" style={{ color: "#C0BAB3", fontFamily: "var(--font-dm-sans)" }}>
            @cero.manual
          </p>
        </div>
      </div>
    </footer>
  )
}
