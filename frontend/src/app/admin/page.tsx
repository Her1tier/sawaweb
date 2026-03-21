"use client";

function Kpi({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div style={{ background: "#fff", border: "1px solid rgba(14,16,15,0.08)", padding: 20 }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--warm-grey)", marginBottom: 8 }}>
        {label}
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 300, color: "var(--ink)" }}>{value}</p>
      {sub && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--warm-grey)", marginTop: 6 }}>{sub}</p>}
    </div>
  );
}

export default function AdminOverviewPage() {
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        <Kpi label="Pending career apps" value="—" sub="This week" />
        <Kpi label="New commissions" value="—" sub="Awaiting contact" />
        <Kpi label="Available artworks" value="—" sub="Visible in shop" />
        <Kpi label="Featured artists" value="—" sub="Homepage scroller" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        <div style={{ background: "#fff", border: "1px solid rgba(14,16,15,0.08)", padding: 20 }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", marginBottom: 12 }}>
            Recent activity
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            <li style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink)", opacity: 0.6 }}>No activity yet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

