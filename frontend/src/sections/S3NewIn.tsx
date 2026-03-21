"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { apiUrl } from "@/lib/api";

type ApiWork = {
    id: string;
    title: string;
    medium?: string | null;
    size?: string | null;
    price?: number | null;
    available: boolean;
    emoji?: string | null;
    year?: number | null;
    image_url?: string | null;
};

const CATEGORIES = ["NEW", "ORIGINAL", "PRINT", "CANVAS", "VIEW ALL"];

export default function S3NewIn() {
    const [activeCategory, setActiveCategory] = useState("NEW");
    const { formatPrice } = useCurrency();
    const [works, setWorks] = useState<ApiWork[] | null>(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const res = await fetch(apiUrl("/landing/new-in?limit=8"));
                const data: ApiWork[] = await res.json();
                if (!cancelled) setWorks(data);
            } catch {
                if (!cancelled) setWorks([]);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section
            className="relative w-full py-24"
            style={{ backgroundColor: "#f5f0e8", color: "var(--ink)" }}
        >
            <div className="max-w-[1480px] mx-auto px-8">
                {/* Header: Title + Category filters */}
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
                        Artworks
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: activeCategory === cat ? "var(--ochre)" : "var(--ink)",
                                    transition: "color 0.2s",
                                    padding: 0,
                                }}
                                className="hover:!text-[var(--ochre)]"
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {(works ?? new Array(8).fill(null)).map((w, i) =>
                        !w ? (
                            <div key={`sk-${i}`} className="h-[420px] w-full" />
                        ) : (
                        <motion.div
                            key={w.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                        >
                            <Link
                                href={`/shop/${w.id}`}
                                className="flex flex-col group"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                {/* Image with hover zoom */}
                                <div
                                    className="relative w-full overflow-hidden mb-4"
                                    style={{
                                        aspectRatio: "4/3",
                                        backgroundColor: "#1C2A1E",
                                        borderRadius: 2,
                                    }}
                                >
                                    {w.image_url ? (
                                        <img
                                            src={w.image_url}
                                            alt={w.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <span
                                            className="absolute inset-0 flex items-center justify-center group-hover:opacity-[0.18] transition-opacity"
                                            style={{ fontSize: "clamp(60px,10vw,100px)", opacity: 0.1 }}
                                        >
                                            {w.emoji}
                                        </span>
                                    )}

                                    {/* Sold overlay */}
                                    {!w.available && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center"
                                            style={{ backgroundColor: "rgba(10,12,10,0.45)" }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: "var(--font-sans)",
                                                    fontSize: 11,
                                                    letterSpacing: "0.2em",
                                                    textTransform: "uppercase",
                                                    color: "#fff",
                                                }}
                                            >
                                                Sold
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Text */}
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
                                    {w.title}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: 12,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        color: "var(--warm-grey)",
                                        marginBottom: 4,
                                    }}
                                >
                                        {w.medium ?? ""} · {w.size ?? ""}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: "var(--ink)",
                                    }}
                                >
                                        {w.price != null ? formatPrice(w.price) : ""}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Shop all CTA */}
                <div className="text-center mt-16">
                    <Link
                        href="/shop"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: 12,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            backgroundColor: "var(--ink)",
                            color: "#fff",
                            padding: "14px 40px",
                            textDecoration: "none",
                            display: "inline-block",
                            transition: "opacity 0.2s",
                        }}
                        className="hover:opacity-80"
                    >
                        Shop All Works
                    </Link>
                </div>
            </div>
        </section>
    );
}
