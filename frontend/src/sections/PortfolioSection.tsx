"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { apiUrl } from "@/lib/api";

type PortfolioWork = {
  id: string;
  title: string;
  artist: string;
  size?: string | null;
  medium?: string | null;
  image?: string | null;
  client?: string | null;
};

function WorkItem({ work }: { work: PortfolioWork }) {
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
        {work.image ? (
          <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-black/10" />
        )}
      </motion.div>

      {/* Subtle mid-overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Strong gradient at bottom so text is always readable */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }}
      />

      {/* Labels row — Art Piece, Artist, Size (left); View More (right) */}
      <div className="absolute bottom-8 left-8 right-8 z-30 flex justify-between items-end text-[10px] sm:text-xs tracking-[0.1em] uppercase text-white">
        <div className="text-left flex flex-col gap-1">
          <span className="text-[9px] sm:text-[10px]" style={{ opacity: 0.65 }}>
            Art Piece
          </span>
          <span style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)", fontWeight: 500 }}>
            {work.title}
          </span>
          <span className="text-[9px] sm:text-[10px] mt-1" style={{ opacity: 0.7 }}>
            {work.artist} · {work.size}
          </span>
        </div>

        <div className="text-right flex flex-col gap-1 items-end">
          <Link
            href="/portfolio"
            className="font-medium underline underline-offset-4 transition-opacity hover:opacity-80 pb-1"
            style={{ color: "var(--ochre)", fontSize: "14px", textTransform: "none", letterSpacing: "0" }}
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [items, setItems] = useState<PortfolioWork[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(apiUrl("/landing/portfolio?limit=3"));
        const data: PortfolioWork[] = await res.json();
        if (!cancelled) setItems(data);
      } catch {
        if (!cancelled) setItems([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-[#042D29] text-[var(--cream-warm)] flex flex-col items-center">
      <div className="w-full py-8 flex justify-center items-center relative z-10 bg-[#042D29]">
        <span className="text-[10px] md:text-xs tracking-[0.2em] font-sans uppercase">
          Welcome to Africa&apos;s best wildlife and contemporary art studio
        </span>
        <div className="absolute bottom-[-4px] w-1 h-1 rounded-full bg-white opacity-50 z-20" />
      </div>

      <div className="w-full flex flex-col">
        {(items ?? new Array(3).fill(null)).map((work, idx) =>
          work ? <WorkItem key={work.id} work={work} /> : <div key={`sk-${idx}`} className="h-[80vh] md:h-[100svh] w-full" />
        )}
      </div>
    </section>
  );
}
