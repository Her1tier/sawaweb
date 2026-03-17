"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";

const artisanImages = [
  { src: "/images/waste-to-worth.png", title: "Handcrafted beads", detail: "Aluminium · Transformed" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop", title: "Weaving", detail: "Natural fibres · Traditional" },
  { src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop", title: "Craft in progress", detail: "Hand-assembled · Intentional" },
  { src: "https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=800&auto=format&fit=crop", title: "Collaboration", detail: "Community · Shared skill" },
];

const processSteps = [
  {
    num: "01",
    title: "Collection",
    body: "Discarded aluminium—bottle caps, cans, packaging—is gathered from the community. What was once overlooked or thrown away becomes the raw material for something new.",
  },
  {
    num: "02",
    title: "Preparation",
    body: "Each piece is cleaned, cut, and shaped by hand. The women work together, sharing techniques and supporting one another through every stage of the process.",
  },
  {
    num: "03",
    title: "Creation",
    body: "Through patience and skill, the aluminium is transformed into beads, ornaments, and art. Every element is assembled by hand—each piece carries their time, focus, and determination.",
  },
  {
    num: "04",
    title: "Purpose",
    body: "What emerges is more than art. It is dignity, opportunity, and a source of independence. Creativity becomes a pathway for these women and their families.",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function WomenArtisanPage() {
  return (
    <main style={{ paddingTop: 72, background: "var(--cream)" }}>
      <Nav />

      <PageHero
        label="Women Artisan"
        headline="From waste to worth"
        subtitle="At the heart of this initiative are the hands and stories of women who are redefining what value means. Each bead begins as discarded aluminium—something once overlooked, stepped on, or thrown away. Through patience, skill, and creativity, these women transform it into something intentional, something meaningful."
        emoji="✨"
      />

      {/* Image grid — same arrangement as Artworks on landing */}
      <section
        className="relative w-full py-24"
        style={{ backgroundColor: "#f5f0e8", color: "var(--ink)" }}
      >
        <div className="max-w-[1480px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.8rem, 7vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              The Work
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {artisanImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="flex flex-col group"
              >
                <div
                  className="relative w-full overflow-hidden mb-4"
                  style={{
                    aspectRatio: "4/3",
                    backgroundColor: "#1C2A1E",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    marginBottom: 4,
                    color: "var(--ink)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--warm-grey)",
                  }}
                >
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Women Behind the Work */}
      <section style={{ background: "var(--cream-warm)", padding: "100px 0" }}>
        <div className="max-w-[1480px] mx-auto px-8">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ochre)", marginBottom: 16 }}>
              The Women Behind the Work
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 300, color: "var(--ink)", marginBottom: 32, lineHeight: 1.2 }}>
              Dignity. Opportunity. Independence.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(14,16,15,0.7)", lineHeight: 1.85, maxWidth: 680 }}>
              But this process is not only about materials. It is about creating a space where creativity becomes a source of independence. Working together, they collect, cut, shape, and assemble each element by hand. Every piece carries their time, their focus, and their quiet determination to build something better—for themselves, their families, and their community.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(14,16,15,0.7)", lineHeight: 1.85, maxWidth: 680, marginTop: 24 }}>
              What emerges is more than art. It is a reflection of transformation—of materials, of perspectives, and of lives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Process */}
      <section style={{ background: "var(--cream)", padding: "100px 0" }}>
        <div className="max-w-[1480px] mx-auto px-8">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ochre)", marginBottom: 16 }}>
              The Process
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(30px,4vw,56px)", fontWeight: 300, color: "var(--ink)", marginBottom: 72, lineHeight: 1.05 }}>
              From discarded to<br />intentional
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48 }}>
            {processSteps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.1}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 48, fontWeight: 300, color: "var(--sand)", marginBottom: 12, lineHeight: 1 }}>{s.num}</p>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, fontWeight: 300, color: "var(--ink)", marginBottom: 16 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(14,16,15,0.65)", lineHeight: 1.85 }}>{s.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--cream-warm)", padding: "80px 0" }}>
        <div className="max-w-[1480px] mx-auto px-8 text-center">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(14,16,15,0.75)", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 32px" }}>
              Women transforming discarded materials into meaningful art—blending creativity, sustainability, and purpose.
            </p>
            <Link
              href="/donation"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                background: "var(--ochre)",
                color: "#fff",
                padding: "14px 36px",
                textDecoration: "none",
              }}
              className="transition-opacity hover:opacity-90"
            >
              Support the Programme
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
