// Destacado de una idea del caso. No es una cita: no lleva atribución.
export default function CaseCallout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-10 rounded-2xl px-8 py-7"
      style={{ backgroundColor: "#F0F4EF", border: "1px solid #7D9B76" }}
    >
      <p
        className="text-xl md:text-2xl font-semibold leading-snug"
        style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
      >
        {children}
      </p>
    </div>
  )
}
