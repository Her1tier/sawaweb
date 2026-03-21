"use client";

function Row({ name, animal, status }: { name: string; animal: string; status: string }) {
  return (
    <tr>
      <td style={{ padding: "10px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>{name}</td>
      <td style={{ padding: "10px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)", color: "var(--warm-grey)" }}>{animal}</td>
      <td style={{ padding: "10px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: status === "Pending" ? "var(--ochre)" : "var(--warm-grey)" }}>
          {status}
        </span>
      </td>
    </tr>
  );
}

export default function AdminCommissionsPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Commission Requests</h1>
      <div style={{ background: "#fff", border: "1px solid rgba(14,16,15,0.08)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "var(--cream-warm)" }}>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Name</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Animal</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <Row name="Amelie K." animal="Elephant" status="Pending" />
            <Row name="K. Mugenzi" animal="Gorilla" status="Contacted" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

