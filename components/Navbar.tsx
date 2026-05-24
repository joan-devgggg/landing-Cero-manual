"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Demo", href: "#demo" },
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
          backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #1E1E1E" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-lg tracking-tight text-cream"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            CERO MANUAL
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm font-body text-muted hover:text-cream transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => handleNav("#cta")}
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-accent text-dark transition-all duration-200 hover:bg-accent-dim glow-accent"
              style={{
                fontFamily: "var(--font-dm-sans)",
                backgroundColor: "#BEFF00",
                color: "#0A0A0A",
              }}
            >
              Agendar llamada
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-cream"
            onClick={() => setOpen(!open)}
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
            style={{ backgroundColor: "#0A0A0A" }}
          >
            <div className="flex flex-col gap-1 p-6">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(l.href)}
                  className="text-left py-4 text-2xl font-display font-bold text-cream border-b"
                  style={{
                    fontFamily: "var(--font-syne)",
                    borderColor: "#1E1E1E",
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
                className="mt-8 w-full py-4 text-lg font-bold rounded-2xl text-dark"
                style={{
                  fontFamily: "var(--font-syne)",
                  backgroundColor: "#BEFF00",
                  color: "#0A0A0A",
                }}
              >
                Agendar llamada →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
