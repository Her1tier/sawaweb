"use client";

import Link from "next/link";

function Row({ title, medium, size, available }: { title: string; medium: string; size: string; available: boolean }) {
  return (
    <tr>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>{title}</td>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)", color: "var(--warm-grey)" }}>{medium}</td>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)", color: "var(--warm-grey)" }}>{size}</td>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: available ? "var(--ochre)" : "var(--warm-grey)" }}>
          {available ? "Available" : "Sold"}
        </span>
      </td>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>
        <Link href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--ochre)", textDecoration: "none" }}>Edit</Link>
      </td>
    </tr>
  );
}

export default function AdminArtworksPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Artworks</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <input placeholder="Search..." style={{ padding: "10px 12px", border: "1px solid rgba(14,16,15,0.18)", background: "var(--cream)", fontFamily: "var(--font-sans)", fontSize: 13 }} />
          <button style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", background: "var(--ink)", color: "#fff", padding: "10px 14px", border: "none", cursor: "pointer" }}>
            New Artwork
          </button>
        </div>
      </div>

      <div style={{ background: "#fff", border: "1px solid rgba(14,16,15,0.08)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "var(--cream-warm)" }}>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Title</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Medium</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Size</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Status</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}></th>
            </tr>
          </thead>
          <tbody>
            <Row title="Amahoro" medium="Graphite" size="50×70cm" available />
            <Row title="Isoko" medium="Ink" size="60×80cm" available />
            <Row title="Ubwoba" medium="Charcoal" size="70×90cm" available />
          </tbody>
        </table>
      </div>
    </div>
  );
}

