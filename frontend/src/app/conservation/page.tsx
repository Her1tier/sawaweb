"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useCountUp } from "@/hooks/useCountUp";

const impacts = [
  { value: 34, label: "Young artists trained", suffix: "" },
  { value: 12, label: "Scholarships awarded", suffix: "" },
  { value: 6, label: "Community exhibitions", suffix: "" },
  { value: 80, label: "Artworks created by students", suffix: "+" },
];

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(inView ? value : 0, 2000);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(48px,6vw,80px)", fontWeight: 300, color: "var(--ochre)", lineHeight: 1 }}>
        {count}{suffix}
      </p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: 8 }}>{label}</p>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

/** Images of children drawing — placeholder URLs; replace with real programme photos */
const childrenDrawingImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
];

function ChildrenDrawingParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-8%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "8%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-5%", "5%"]);

  return (
    <div
      ref={ref}
      id="children-drawing"
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 flex" style={{ gap: 4 }}>
        <motion.div className="flex-1 h-full overflow-hidden" style={{ y: y1 }}>
          <img src={childrenDrawingImages[0]} alt="Students drawing" className="w-full h-[120%] object-cover" style={{ objectPosition: "center top" }} />
        </motion.div>
        <motion.div className="flex-1 h-full overflow-hidden hidden sm:block" style={{ y: y2 }}>
          <img src={childrenDrawingImages[1]} alt="Children creating art" className="w-full h-[120%] object-cover" style={{ objectPosition: "center 30%" }} />
        </motion.div>
        <motion.div className="flex-1 h-full overflow-hidden hidden md:block" style={{ y: y3 }}>
          <img src={childrenDrawingImages[2]} alt="Young artists at work" className="w-full h-[120%] object-cover" style={{ objectPosition: "center 60%" }} />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 sm:px-8 text-center">
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 400,
            color: "#fff",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            marginBottom: 20,
          }}
        >
          Young hands at work
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(14px, 1.5vw, 17px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.75,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Students in the Tuzivugire programme learn to observe, sketch, and create—transforming what they see in the field into art that speaks for Rwanda&apos;s wildlife. From first pencil strokes to finished pieces, every drawing is a step toward a voice.
        </p>
      </div>
    </div>
  );
}

const womenArtisanImage = "/images/waste-to-worth.png";

function WomenArtisanParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={ref}
      className="relative h-[80vh] md:h-[100svh] w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-x-0 h-[130%] z-0"
        style={{ top: "-15%", y }}
      >
        <img
          src={womenArtisanImage}
          alt="Women artisans crafting"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 sm:px-8"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.4) 100%)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 400,
            color: "#fff",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            marginBottom: 20,
          }}
        >
          Women Artisan
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(14px, 1.5vw, 17px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: 28,
          }}
        >
          Women transforming discarded materials into meaningful art—blending creativity, sustainability, and purpose.
        </p>
        <Link
          href="/women-artisan"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "#fff",
            background: "var(--ochre)",
            padding: "14px 36px",
            textDecoration: "none",
          }}
          className="transition-opacity hover:opacity-90"
        >
          Process
        </Link>
      </div>
    </div>
  );
}

export default function ConservationPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <PageHero
        label="Conservation — Let Us Speak Out"
        headline={<>A program for<br />young Rwandan<br />wildlife artists.</>}
        subtitle={'In Kinyarwanda, Tuzivugire means "let us speak out." This programme gives artists from the Musanze region the tools, mentorship, and platform to speak through their art about the animals they live beside, and the landscapes they stand to lose.'}
        emoji="✊"
      />

      {/* Art in Middle School — intro */}
      <section style={{ background: "var(--cream)", padding: "80px clamp(24px,6vw,80px)" }}>
        <div className="max-w-[1480px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-start">
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.2 }}>
              Art in the hands of middle school students
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(14px, 1.4vw, 18px)", fontWeight: 300, color: "rgba(45, 48, 42, 0.78)", lineHeight: 1.75 }}>
              Tuzivugire reaches students at a formative age—when curiosity is high and habits are still forming. Middle school artists in our programme learn to observe wildlife with patience, translate what they see onto paper, and discover that art can be both a voice and a livelihood. Through weekly field visits and studio mentorship, they develop not only technical skills in drawing and composition but also a deeper connection to the animals and landscapes of Rwanda. This early exposure plants seeds that often grow into lasting careers in wildlife art.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Women Artisan — parallax with Process CTA */}
      <WomenArtisanParallax />

      {/* Stats — exception: same treatment as hero, not navbar-aligned */}
      <section style={{ background: "var(--ink)", padding: "80px clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 48 }}>
            {impacts.map((s) => <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />)}
        </div>
      </section>

      {/* Children drawing — parallax with title and description */}
      <ChildrenDrawingParallax />

      {/* Support */}
      <section id="support" style={{ background: "var(--cream-warm)", padding: "100px 0" }}>
        <div className="max-w-[1480px] mx-auto px-8" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ochre)", marginBottom: 16 }}>Support</p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.05, marginBottom: 24 }}>Help us train the<br />next generation.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(14,16,15,0.6)", lineHeight: 1.85, marginBottom: 40 }}>
              Your contribution funds field materials, park visit transport, and annual scholarships for students who cannot afford supplies. Every $50 funds one student&rsquo;s materials for a month. Every $600 sponsors a full-year scholarship.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="https://give-usa.keela.co/sawa-donate-page"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "var(--ochre)",
                  padding: "10px 20px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
                className="hover:!bg-[var(--ochre-light)]"
              >
                Donate
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
