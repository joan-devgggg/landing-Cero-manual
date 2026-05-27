"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const WELCOME: Message = {
  role: "assistant",
  content:
    "¡Hola! Soy Sara, tu asistente de la clínica. Esta es una demo para que veas cómo funcionaría un agente real. Pregúntame sobre tratamientos, precios o reserva una cita de prueba. ¿En qué te puedo ayudar?",
}

const SUGGESTIONS = [
  "¿Cómo funciona exactamente?",
  "¿Cuánto cuesta?",
  "Quiero agendar una llamada",
  "¿Qué pasa con mis datos?",
]

interface ChatWidgetProps {
  compact?: boolean
}

export default function ChatWidget({ compact = false }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [userHasTyped, setUserHasTyped] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return
    setUserHasTyped(true)

    const userMsg: Message = { role: "user", content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()
      const stripMarkdown = (text: string) =>
        text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1")
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: stripMarkdown(data.message || data.error || "Error al responder."),
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Ups, algo salió mal. Inténtalo de nuevo." },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const maxH = compact ? "320px" : "420px"

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0DBD4",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ borderBottom: "1px solid #E0DBD4", backgroundColor: "#FAFAF8" }}
      >
        <div
          className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-semibold flex-shrink-0"
          style={{
            backgroundColor: "#7D9B76",
            color: "#ffffff",
            fontFamily: "var(--font-playfair)",
          }}
        >
          S
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold truncate"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#1A1A1A" }}
          >
            Sara — Asistente de Clínica
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: "#7D9B76" }}
            />
            <span
              className="text-xs"
              style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}
            >
              En línea
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex flex-col gap-3 overflow-y-auto px-4 py-4"
        style={{ maxHeight: maxH, minHeight: compact ? "220px" : "320px", backgroundColor: "#FAFAF8" }}
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className="max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap"
                style={
                  msg.role === "user"
                    ? {
                        backgroundColor: "#7D9B76",
                        color: "#ffffff",
                        borderRadius: "18px 18px 4px 18px",
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 500,
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        color: "#1A1A1A",
                        borderRadius: "18px 18px 18px 4px",
                        border: "1px solid #E0DBD4",
                        fontFamily: "var(--font-dm-sans)",
                      }
                }
              >
                {msg.content}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div
                className="flex items-center gap-1.5 px-4 py-3"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0DBD4",
                  borderRadius: "18px 18px 18px 4px",
                }}
              >
                <span className="typing-dot w-2 h-2 rounded-full" style={{ backgroundColor: "#7D9B76" }} />
                <span className="typing-dot w-2 h-2 rounded-full" style={{ backgroundColor: "#7D9B76" }} />
                <span className="typing-dot w-2 h-2 rounded-full" style={{ backgroundColor: "#7D9B76" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Suggestion chips */}
      <AnimatePresence>
        {!userHasTyped && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2 px-4 pb-3"
            style={{ backgroundColor: "#FAFAF8" }}
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-xs px-3 py-1.5 rounded-full transition-all duration-150"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #E0DBD4",
                  color: "#5A5450",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(125,155,118,0.08)"
                  e.currentTarget.style.borderColor = "#7D9B76"
                  e.currentTarget.style.color = "#7D9B76"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = "#E0DBD4"
                  e.currentTarget.style.color = "#5A5450"
                }}
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div
        className="flex items-center gap-2 px-3 py-3"
        style={{ borderTop: "1px solid #E0DBD4", backgroundColor: "#FFFFFF" }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          disabled={loading}
          className="flex-1 px-4 py-2.5 text-sm rounded-xl outline-none disabled:opacity-50"
          style={{
            backgroundColor: "#F5F2EE",
            border: "1px solid #E0DBD4",
            color: "#1A1A1A",
            fontFamily: "var(--font-dm-sans)",
            transition: "border-color 0.15s ease",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#7D9B76")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E0DBD4")}
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-150 disabled:opacity-40"
          style={{ backgroundColor: "#7D9B76" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6A8564")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7D9B76")}
        >
          <Send size={16} color="#ffffff" />
        </button>
      </div>
    </div>
  )
}
