"use client";

import { motion } from "framer-motion";

export default function S1Hero() {
  return (
    <section className="relative w-full h-[100svh] flex flex-col justify-end overflow-hidden bg-[#042D29] text-[#f2f2eb]">
      <div className="max-w-[1480px] mx-auto w-full h-full px-8 flex flex-col justify-end">
        {/* Top Area: Offset text */}
        <div className="flex-1 w-full flex items-end justify-end pt-24 pb-[35svh] md:pr-[15%]">
          <motion.h1
            className="font-sans text-[6vw] sm:text-[5vw] md:text-[3.8vw] lg:text-[3vw] font-normal tracking-[0.02em] leading-[1.15] text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Studio Of African <br />
            Wildlife Art
          </motion.h1>
        </div>

        {/* Bottom Area: Area for dynamic logo to settle */}
        <div className="w-full h-24 md:h-32" />
      </div>
    </section>
  );
}
