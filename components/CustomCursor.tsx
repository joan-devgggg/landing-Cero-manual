"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const rx = useSpring(mx, { stiffness: 350, damping: 35, mass: 0.5 })
  const ry = useSpring(my, { stiffness: 350, damping: 35, mass: 0.5 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my])

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  )
}
