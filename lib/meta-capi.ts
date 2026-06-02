declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? match[2] : undefined
}

export async function sendLeadEvent({
  email,
  phone,
  eventSourceUrl,
}: {
  email?: string
  phone?: string
  eventSourceUrl?: string
}) {
  const eventId = crypto.randomUUID()
  const fbp = getCookie("_fbp")
  const fbc = getCookie("_fbc")
  const clientUserAgent = navigator.userAgent
  const url = eventSourceUrl ?? window.location.href

  await Promise.all([
    new Promise<void>((resolve) => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", {}, { eventID: eventId })
      }
      resolve()
    }),
    fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "Lead",
        eventId,
        email: email ?? "",
        phone: phone ?? "",
        fbc,
        fbp,
        clientUserAgent,
        eventSourceUrl: url,
      }),
    }).catch(() => {}),
  ])
}

export async function sendPageViewEvent() {
  const eventId = crypto.randomUUID()
  const fbp = getCookie("_fbp")
  const fbc = getCookie("_fbc")
  const clientUserAgent = navigator.userAgent
  const url = window.location.href

  await Promise.all([
    new Promise<void>((resolve) => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView", {}, { eventID: eventId })
      }
      resolve()
    }),
    fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "PageView",
        eventId,
        fbc,
        fbp,
        clientUserAgent,
        eventSourceUrl: url,
      }),
    }).catch(() => {}),
  ])
}
