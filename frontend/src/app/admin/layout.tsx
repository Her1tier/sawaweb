"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/artists", label: "Artists" },
  { href: "/admin/artworks", label: "Artworks" },
  { href: "/admin/portfolio", label: "Portfolio" },
  { href: "/admin/career", label: "Career" },
  { href: "/admin/commissions", label: "Commissions" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh", background: "var(--cream)" }}>
      {/* Sidebar */}
      <aside style={{ background: "var(--ink)", color: "#fff", padding: 20 }}>
        <div style={{ marginBottom: 24 }}>
          <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 300, letterSpacing: "0.04em" }}>
              SAWA Admin
            </div>
          </Link>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: active ? "var(--ochre)" : "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  padding: "10px 8px",
                  borderLeft: active ? "2px solid var(--ochre)" : "2px solid transparent",
                }}
                className="hover:!text-[var(--ochre)]"
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <div style={{ display: "grid", gridTemplateRows: "56px 1fr", minHeight: "100vh" }}>
        {/* Topbar */}
        <header
          style={{
            background: "#fff",
            borderBottom: "1px solid rgba(14,16,15,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--warm-grey)" }}>
            Dashboard
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--warm-grey)" }}>
            Signed in
          </div>
        </header>

        <main style={{ padding: 20 }}>{children}</main>
      </div>
    </div>
  );
}

