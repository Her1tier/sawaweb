"use client";

function Row({ name, type, status }: { name: string; type: string; status: string }) {
  return (
    <tr>
      <td style={{ padding: "10px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>{name}</td>
      <td style={{ padding: "10px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)", color: "var(--warm-grey)" }}>{type}</td>
      <td style={{ padding: "10px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: status === "Pending" ? "var(--ochre)" : "var(--warm-grey)" }}>
          {status}
        </span>
      </td>
    </tr>
  );
}

export default function AdminCareerPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Career Applications</h1>
      <div style={{ background: "#fff", border: "1px solid rgba(14,16,15,0.08)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "var(--cream-warm)" }}>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Name</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Type</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <Row name="Jane Uwase" type="internship" status="Pending" />
            <Row name="Eric N." type="artists" status="Reviewed" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

