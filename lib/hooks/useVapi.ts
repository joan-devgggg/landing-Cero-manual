"use client"

import { useEffect, useRef, useState } from "react"
import Vapi from "@vapi-ai/web"

const VAPI_PUBLIC_KEY = "ec3d2bdd-890c-4a01-93a6-0ac743a17e7b"
const VAPI_ASSISTANT_ID = "74151b99-659b-4682-a1b3-814d0c9120d5"

export type VapiCallStatus = "idle" | "connecting" | "active" | "ended"

export function useVapi() {
  const [status, setStatus] = useState<VapiCallStatus>("idle")
  const vapiRef = useRef<Vapi | null>(null)

  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY)
    vapiRef.current = vapi

    const handleCallStart = () => setStatus("active")
    const handleCallEnd = () => setStatus("ended")
    const handleError = () => setStatus("ended")

    vapi.on("call-start", handleCallStart)
    vapi.on("call-end", handleCallEnd)
    vapi.on("error", handleError)

    return () => {
      vapi.removeListener("call-start", handleCallStart)
      vapi.removeListener("call-end", handleCallEnd)
      vapi.removeListener("error", handleError)
      vapi.stop()
    }
  }, [])

  const start = () => {
    setStatus("connecting")
    vapiRef.current?.start(VAPI_ASSISTANT_ID)
  }

  const stop = () => {
    vapiRef.current?.stop()
    setStatus("idle")
  }

  return { status, start, stop }
}
