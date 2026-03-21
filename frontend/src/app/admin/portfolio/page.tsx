"use client";

export default function AdminPortfolioPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Portfolio Curation</h1>
      <div style={{ background: "#fff", border: "1px solid rgba(14,16,15,0.08)", padding: 20 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", marginBottom: 12 }}>
          Homepage ordering
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          <li style={{ padding: 12, border: "1px dashed rgba(14,16,15,0.2)", background: "var(--cream)" }}>Drag to reorder — Amahoro</li>
          <li style={{ padding: 12, border: "1px dashed rgba(14,16,15,0.2)", background: "var(--cream)" }}>Drag to reorder — Isoko</li>
          <li style={{ padding: 12, border: "1px dashed rgba(14,16,15,0.2)", background: "var(--cream)" }}>Drag to reorder — Ubwoba</li>
        </ul>
      </div>
    </div>
  );
}

