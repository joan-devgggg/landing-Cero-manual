"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(245,242,238,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #E0DBD4" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
            className="font-serif font-semibold text-lg tracking-tight text-charcoal"
            style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
          >
            Cero Manual
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#8A8580" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8580")}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => handleNav("#cta")}
              className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200"
              style={{
                fontFamily: "var(--font-dm-sans)",
                backgroundColor: "#7D9B76",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6A8564")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7D9B76")}
            >
              Agendar diagnóstico gratuito
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            style={{ color: "#1A1A1A" }}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 flex flex-col"
            style={{ backgroundColor: "#F5F2EE" }}
          >
            <div className="flex flex-col gap-1 p-6">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(l.href)}
                  className="text-left py-4 text-2xl font-semibold border-b"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "#1A1A1A",
                    borderColor: "#E0DBD4",
                  }}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNav("#cta")}
                className="mt-8 w-full py-4 text-base font-semibold rounded-2xl"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  backgroundColor: "#7D9B76",
                  color: "#ffffff",
                }}
              >
                Agendar diagnóstico gratuito →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
