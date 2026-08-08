export interface BlogTableProps {
  headers: string[]
  rows: React.ReactNode[][]
}

export default function BlogTable({ headers, rows }: BlogTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl mb-6" style={{ border: "1px solid #E0DBD4" }}>
      <table
        className="w-full text-left border-collapse"
        style={{ fontFamily: "var(--font-dm-sans)", minWidth: "640px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#F0F4EF" }}>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-xs font-semibold uppercase tracking-wide"
                style={{ color: "#1A1A1A" }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: "1px solid #E0DBD4" }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-4 text-sm align-top${j === 0 ? " font-medium" : ""}`}
                  style={{ color: j === 0 ? "#1A1A1A" : "#3A3A3A" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
