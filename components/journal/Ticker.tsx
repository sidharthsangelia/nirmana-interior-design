"use client";

import { tickerWords } from "@/lib/jounralData";

import { motion } from "framer-motion";
 

export default function Ticker() {
  const items = [...tickerWords, ...tickerWords, ...tickerWords, ...tickerWords];

  return (
    <div
      className="overflow-hidden py-3.5"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {items.map((word, i) => (
          <span key={i} className="inline-flex items-center gap-7 px-9">
            <span
              className="font-sans text-[8px] uppercase tracking-[0.42em]"
              style={{ color: "var(--muted-foreground)" }}
            >
              {word}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--border)" }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}