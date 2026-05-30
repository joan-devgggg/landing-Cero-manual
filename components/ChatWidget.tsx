"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Mic, MicOff, Image as ImageIcon, X } from "lucide-react"

// Web Speech API types
interface ISpeechRecognitionEvent extends Event {
  resultIndex: number
  results: {
    length: number
    [index: number]: { isFinal: boolean; [index: number]: { transcript: string } }
  }
}

interface ISpeechRecognition extends EventTarget {
  lang: string
  continuous: boolean
  interimResults: boolean
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: ISpeechRecognitionEvent) => void) | null
  onerror: ((e: Event) => void) | null
  onend: (() => void) | null
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition
    webkitSpeechRecognition: new () => ISpeechRecognition
  }
}

interface PendingImage {
  base64: string
  mimeType: string
  objectUrl: string
}

interface Message {
  role: "user" | "assistant"
  content: string
  isCta?: boolean
  isAudio?: boolean
  audioDuration?: number
  imageObjectUrl?: string
  imageBase64?: string
  imageMimeType?: string
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

const WAVEFORM = [3, 8, 12, 7, 14, 5, 11, 8, 4, 9]

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

async function compressImage(file: File): Promise<PendingImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const MAX = 800
        const scale = Math.min(1, MAX / Math.max(img.width, img.height))
        const canvas = document.createElement("canvas")
        canvas.width = Math.round(img.width * scale)
        canvas.height = Math.round(img.height * scale)
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height)
        canvas.toBlob(
          (blob) => {
            if (!blob) { reject(new Error("compress failed")); return }
            const objectUrl = URL.createObjectURL(blob)
            const r2 = new FileReader()
            r2.onload = (ev) => {
              const dataUrl = ev.target?.result as string
              resolve({ base64: dataUrl.split(",")[1], mimeType: "image/jpeg", objectUrl })
            }
            r2.readAsDataURL(blob)
          },
          "image/jpeg",
          0.82
        )
      }
      img.onerror = reject
      img.src = e.target?.result as string
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

interface ChatWidgetProps {
  compact?: boolean
}

export default function ChatWidget({ compact = false }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [userHasTyped, setUserHasTyped] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingSeconds, setRecordingSeconds] = useState(0)
  const [pendingImage, setPendingImage] = useState<PendingImage | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<ISpeechRecognition | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const transcriptRef = useRef("")
  const durationRef = useRef(0)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (recognitionRef.current) recognitionRef.current.abort()
    }
  }, [])

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  const sendMessage = async (
    text: string,
    opts?: { imageData?: PendingImage; isAudio?: boolean; audioDuration?: number }
  ) => {
    const { imageData, isAudio, audioDuration } = opts || {}
    if (!text.trim() && !imageData) return
    if (loading) return

    setUserHasTyped(true)

    const userMsg: Message = {
      role: "user",
      content: text,
      isAudio,
      audioDuration,
      imageObjectUrl: imageData?.objectUrl,
      imageBase64: imageData?.base64,
      imageMimeType: imageData?.mimeType,
    }
    const newMessages = [...messages, userMsg]
    const userCount = newMessages.filter((m) => m.role === "user").length
    setMessages(newMessages)
    setLoading(true)

    const apiMessages = newMessages.map((m) => {
      if (m.imageBase64) {
        return {
          role: m.role,
          content: [
            { type: "text", text: m.content || "¿Qué hay en esta imagen?" },
            {
              type: "image_url",
              image_url: { url: `data:${m.imageMimeType};base64,${m.imageBase64}` },
            },
          ],
        }
      }
      return { role: m.role, content: m.content }
    })

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      })
      const data = await res.json()
      const stripMarkdown = (t: string) =>
        t.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1")
      setMessages((prev) => {
        const updated: Message[] = [
          ...prev,
          {
            role: "assistant",
            content: stripMarkdown(data.message || data.error || "Error al responder."),
          },
        ]
        if (userCount === 2) {
          updated.push({
            role: "assistant",
            content:
              "¿Quieres ver cómo quedaría esto configurado con el nombre de tu clínica y tus tratamientos reales? Te lo muestro en 20 minutos.",
            isCta: true,
          })
        }
        return updated
      })
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Ups, algo salió mal. Inténtalo de nuevo." },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSend = () => {
    if (loading || isRecording) return
    const img = pendingImage
    const txt = input.trim()
    if (!txt && !img) return
    setInput("")
    if (img) setPendingImage(null)
    sendMessage(txt, img ? { imageData: img } : undefined)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const startRecording = () => {
    const SpeechRec =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition)
    if (!SpeechRec) return

    transcriptRef.current = ""
    durationRef.current = 0
    setRecordingSeconds(0)

    const recognition = new SpeechRec()
    recognition.lang = "es-ES"
    recognition.continuous = false
    recognition.interimResults = false
    recognitionRef.current = recognition

    recognition.onresult = (e: ISpeechRecognitionEvent) => {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          transcriptRef.current += e.results[i][0].transcript
        }
      }
    }

    recognition.onend = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      setIsRecording(false)
      const text = transcriptRef.current.trim()
      const duration = durationRef.current
      if (text) sendMessage(text, { isAudio: true, audioDuration: duration })
    }

    recognition.onerror = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      setIsRecording(false)
    }

    recognition.start()
    setIsRecording(true)

    timerRef.current = setInterval(() => {
      durationRef.current += 1
      setRecordingSeconds((s) => s + 1)
    }, 1000)
  }

  const stopRecording = () => {
    if (recognitionRef.current) recognitionRef.current.stop()
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    e.target.value = ""
    try {
      const compressed = await compressImage(file)
      if (pendingImage) URL.revokeObjectURL(pendingImage.objectUrl)
      setPendingImage(compressed)
    } catch {
      // silent
    }
  }

  const clearPendingImage = () => {
    if (pendingImage) URL.revokeObjectURL(pendingImage.objectUrl)
    setPendingImage(null)
  }

  const showMic = !input.trim() && !pendingImage && !isRecording
  const maxH = compact ? "280px" : "350px"

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
          style={{ backgroundColor: "#7D9B76", color: "#ffffff", fontFamily: "var(--font-playfair)" }}
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
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "#7D9B76" }} />
            <span className="text-xs" style={{ color: "#7D9B76", fontFamily: "var(--font-dm-sans)" }}>
              En línea
            </span>
          </div>
        </div>
      </div>

      {/* Messages — dynamic height */}
      <div
        ref={containerRef}
        className="flex flex-col gap-3 overflow-y-auto px-4 py-4"
        style={{ minHeight: "80px", maxHeight: maxH, backgroundColor: "#FAFAF8" }}
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={
                msg.isCta
                  ? "flex flex-col items-start gap-2"
                  : `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`
              }
            >
              {/* Audio bubble */}
              {msg.role === "user" && msg.isAudio ? (
                <div
                  className="max-w-[85%] px-3 py-2.5 flex items-center gap-2 flex-shrink-0"
                  style={{ backgroundColor: "#7D9B76", borderRadius: "18px 18px 4px 18px" }}
                >
                  <Mic size={14} color="rgba(255,255,255,0.9)" />
                  <div className="flex items-end gap-px" style={{ height: "16px" }}>
                    {WAVEFORM.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: "2px",
                          height: `${h}px`,
                          borderRadius: "1px",
                          backgroundColor: "rgba(255,255,255,0.75)",
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {formatDuration(msg.audioDuration || 0)}
                  </span>
                </div>
              ) : /* Image bubble */
              msg.role === "user" && msg.imageObjectUrl ? (
                <div
                  className="max-w-[85%] overflow-hidden flex-shrink-0"
                  style={{ borderRadius: "18px 18px 4px 18px", border: "2px solid #7D9B76" }}
                >
                  <img
                    src={msg.imageObjectUrl}
                    alt="Imagen adjunta"
                    style={{ display: "block", maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }}
                  />
                  {msg.content && (
                    <div
                      className="px-3 py-2 text-sm leading-relaxed"
                      style={{
                        backgroundColor: "#7D9B76",
                        color: "#ffffff",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {msg.content}
                    </div>
                  )}
                </div>
              ) : (
                /* Text bubble */
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
              )}

              {msg.isCta && (
                <a
                  href="#cta"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150"
                  style={{
                    backgroundColor: "#7D9B76",
                    color: "#ffffff",
                    fontFamily: "var(--font-dm-sans)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6A8564")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7D9B76")}
                >
                  Agendar llamada gratuita →
                </a>
              )}
            </motion.div>
          ))}

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

      {/* Pending image preview */}
      <AnimatePresence>
        {pendingImage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-3 px-3 py-2 overflow-hidden"
            style={{ backgroundColor: "#F5F2EE", borderTop: "1px solid #E0DBD4" }}
          >
            <div className="relative flex-shrink-0">
              <img
                src={pendingImage.objectUrl}
                alt=""
                className="w-12 h-12 rounded-lg object-cover"
              />
              <button
                onClick={clearPendingImage}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <X size={9} color="#ffffff" />
              </button>
            </div>
            <span
              className="text-xs"
              style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
            >
              Imagen lista · añade un mensaje (opcional)
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input bar */}
      <div
        className="flex items-center gap-2 px-3 py-3"
        style={{ borderTop: "1px solid #E0DBD4", backgroundColor: "#FFFFFF" }}
      >
        {/* Image attach */}
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={loading || isRecording}
          className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-150 disabled:opacity-40"
          style={{ border: "1px solid #E0DBD4", backgroundColor: "transparent" }}
          onMouseEnter={(e) =>
            !loading && !isRecording && (e.currentTarget.style.borderColor = "#7D9B76")
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E0DBD4")}
          title="Adjuntar imagen"
        >
          <ImageIcon size={16} color="#8A8580" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageSelect}
        />

        {/* Recording indicator or text input */}
        {isRecording ? (
          <div
            className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{ backgroundColor: "#F5F2EE", border: "1px solid #E0DBD4" }}
          >
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#E53E3E" }}
            />
            <span
              className="text-sm flex-1"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
            >
              Grabando… {formatDuration(recordingSeconds)}
            </span>
          </div>
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={pendingImage ? "Añade un mensaje (opcional)…" : "Escribe tu mensaje…"}
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
        )}

        {/* Mic · Stop · Send */}
        <button
          onClick={isRecording ? stopRecording : showMic ? startRecording : handleSend}
          disabled={loading && !isRecording}
          className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-150 disabled:opacity-40"
          style={{ backgroundColor: isRecording ? "#E53E3E" : "#7D9B76" }}
        >
          {isRecording ? (
            <MicOff size={16} color="#ffffff" />
          ) : showMic ? (
            <Mic size={16} color="#ffffff" />
          ) : (
            <Send size={16} color="#ffffff" />
          )}
        </button>
      </div>
    </div>
  )
}
