"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const exploreLinks = [
  { label: "Shop", href: "/shop" },
  { label: "The Studio", href: "/studio" },
  { label: "Conservation", href: "/conservation" },
  { label: "Commissions", href: "/commissions" },
  { label: "Careers", href: "/career" },
];

const connectLinks = [
  { label: "hello@sawa.art", href: "mailto:hello@sawa.art" },
  { label: "Instagram", href: "https://instagram.com/sawa.art", external: true },
  { label: "Twitter", href: "https://twitter.com/sawa_art", external: true },
  { label: "Facebook", href: "https://facebook.com/sawa.art", external: true },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="relative overflow-hidden py-32"
      style={{
        backgroundColor: "var(--green)", // Matching the dark green from the site
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div className="relative z-10 max-w-[1480px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

          {/* Column 1: Logo & Info */}
          <div>
            <Link href="/" className="transition-opacity hover:opacity-80 inline-block mb-10">
              <img
                src="/assets/sawa-logo2.svg"
                alt="SAWA Logo"
                style={{ height: 60, width: "auto" }}
              />
            </Link>
            {/* <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                color: "#f5f0e8",
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 420,
              }}
            >
              Studio of African Wildlife Art
              <br />
              {t.footer.visitInfo.address}
            </p> */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 12,
                }}
              >
                {t.footer.visitInfo.locationLabel}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  color: "#f5f0e8",
                  marginBottom: 4,
                }}
              >
                {t.footer.visitInfo.location}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  color: "#f5f0e8",
                  lineHeight: 1.4,
                }}
              >
                {t.footer.visitInfo.hours.split(" · ").map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Column 2: Sub-grid for Explore & Connect */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            {/* Explore */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 32,
                  fontWeight: 600,
                }}
              >
                EXPLORE
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-4">
                {exploreLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 18,
                        color: "#f5f0e8",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      className="hover:!text-[var(--ochre)]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 32,
                  fontWeight: 600,
                }}
              >
                CONNECT
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-4">
                {connectLinks.map(({ label, href, external }) => (
                  <li key={label}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 18,
                          color: "#f5f0e8",
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                        className="hover:!text-[var(--ochre)]"
                      >
                        {label}
                      </a>
                    ) : (
                      <a
                        href={href}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 18,
                          color: "#f5f0e8",
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                        className="hover:!text-[var(--ochre)]"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div
          className="mt-32 pt-12 flex flex-col md:flex-row justify-between items-center gap-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.02em",
              }}
            >
              {t.footer.copyright}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.02em",
              }}
            >
              Made by{" "}
              <a
                href="https://norfcre8ions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/40 transition-colors underline underline-offset-4"
              >
                Norf Cre8ions
              </a>
            </p>
          </div>
          <div className="flex gap-12">
            {t.footer.legal.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                }}
                className="hover:!text-white/40 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}