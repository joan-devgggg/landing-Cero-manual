// Lista con viñeta sage, con la misma tipografía que components/blog/P.
export default function CaseList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3 mb-6 mt-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-6 text-base leading-relaxed"
          style={{ color: "#3A3A3A", fontFamily: "var(--font-dm-sans)" }}
        >
          <span
            aria-hidden
            className="absolute left-0 top-[0.7em] w-2 h-2 rounded-full"
            style={{ backgroundColor: "#7D9B76" }}
          />
          {item}
        </li>
      ))}
    </ul>
  )
}
