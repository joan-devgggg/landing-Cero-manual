"use client"

import { useEffect } from "react"
import { sendPageViewEvent } from "@/lib/meta-capi"

export default function MetaPageView() {
  useEffect(() => {
    sendPageViewEvent()
  }, [])

  return null
}
