"use client";

import Link from "next/link";

function Row({ name, role, since }: { name: string; role: string; since?: string }) {
  return (
    <tr>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>{name}</td>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)", color: "var(--warm-grey)" }}>{role}</td>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)", color: "var(--warm-grey)" }}>{since ?? "—"}</td>
      <td style={{ padding: "12px 10px", borderBottom: "1px solid rgba(14,16,15,0.06)" }}>
        <Link href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--ochre)", textDecoration: "none" }}>Edit</Link>
      </td>
    </tr>
  );
}

export default function AdminArtistsPage() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Artists</h1>
        <button style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", background: "var(--ink)", color: "#fff", padding: "10px 14px", border: "none", cursor: "pointer" }}>
          New Artist
        </button>
      </div>

      <div style={{ background: "#fff", border: "1px solid rgba(14,16,15,0.08)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "var(--cream-warm)" }}>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Name</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Role</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}>Since</th>
              <th style={{ textAlign: "left", padding: "10px 10px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-grey)", fontWeight: 600 }}></th>
            </tr>
          </thead>
          <tbody>
            <Row name="Christine Mukamana" role="Lead Artist" since="2020" />
            <Row name="Josue Habimana" role="Wildlife Illustrator" since="2021" />
            <Row name="Rigobert Nzeyimana" role="Texture Specialist" since="2022" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

