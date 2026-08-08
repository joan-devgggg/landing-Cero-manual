export default function BlogSource({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-sm mb-6 -mt-1"
      style={{ color: "#8A8580", fontFamily: "var(--font-dm-sans)" }}
    >
      Fuente: {children}
    </p>
  )
}
