"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { portfolioItems } from "@/lib/portfolio";

function PortfolioParallaxItem({ item }: { item: (typeof portfolioItems)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={ref}
      className="relative h-[80vh] md:h-[100svh] w-full overflow-hidden flex items-center justify-center border-b border-white"
    >
      {/* Parallax image */}
      <motion.div
        className="absolute inset-x-0 h-[130%] z-0"
        style={{ top: "-15%", y }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Subtle mid-overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Gradient at bottom for text readability */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }}
      />

      {/* Labels row — Art Piece (left), Artist + Size; Client (right) */}
      <div className="absolute bottom-8 left-8 right-8 z-30 flex justify-between items-end text-[10px] sm:text-xs tracking-[0.1em] uppercase text-white">
        <div className="text-left flex flex-col gap-1">
          <span className="text-[9px] sm:text-[10px]" style={{ opacity: 0.65 }}>
            Art Piece
          </span>
          <span style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)", fontWeight: 500 }}>
            {item.title}
          </span>
          <span className="text-[9px] sm:text-[10px] mt-1" style={{ opacity: 0.7 }}>
            {item.artist} · {item.size}
          </span>
        </div>

        <div className="text-right flex flex-col gap-1 items-end">
          <span className="text-[9px] sm:text-[10px]" style={{ opacity: 0.65 }}>
            Client
          </span>
          <span style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)", fontWeight: 500 }}>
            {item.client}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen" style={{ background: "#042D29" }}>
      <Nav />

      {/* Intro strip */}
      <div className="w-full py-8 flex justify-center items-center relative z-10 bg-[#042D29]">
        <span className="text-[10px] md:text-xs tracking-[0.2em] font-sans uppercase text-[var(--cream-warm)]">
          Our Portfolio
        </span>
        <div className="absolute bottom-[-4px] w-1 h-1 rounded-full bg-white opacity-50 z-20" />
      </div>

      {/* Parallax sections */}
      <div className="w-full flex flex-col">
        {portfolioItems.map((item) => (
          <PortfolioParallaxItem key={item.id} item={item} />
        ))}
      </div>

      {/* CTA to shop */}
      <div
        className="w-full py-16 flex flex-col items-center justify-center gap-6"
        style={{ background: "#042D29", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[var(--cream-warm)] text-sm tracking-widest uppercase">
          Explore all works in our shop
        </p>
        <Link
          href="/shop"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#fff",
            background: "var(--ochre)",
            padding: "14px 40px",
            textDecoration: "none",
          }}
          className="transition-opacity hover:opacity-90"
        >
          Browse Shop
        </Link>
      </div>

      <Footer />
    </main>
  );
}
