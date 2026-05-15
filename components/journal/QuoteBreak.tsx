"use client";

import { motion } from "framer-motion";

export default function QuoteBreak() {
  return (
    <section
      className="px-6 lg:px-16 py-44"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Opening mark */}
        <span
          className="font-cormorant italic block mb-4"
          style={{
            fontSize: "clamp(80px, 10vw, 120px)",
            color: "var(--border)",
            lineHeight: 0.5,
            fontWeight: 300,
          }}
        >
          "
        </span>

        {/* Quote */}
        <p
          className="font-cormorant italic leading-[0.97]"
          style={{
            fontSize: "clamp(48px, 7.5vw, 116px)",
            fontWeight: 400,
            color: "var(--foreground)",
          }}
        >
          A room is remembered
          <br />
          long after its furniture
          <br />
          is forgotten.
        </p>

        {/* Attribution */}
        <div className="flex items-center gap-5 mt-14">
          <div className="w-10 h-px" style={{ backgroundColor: "var(--border)" }} />
          <span
            className="font-sans text-[8px] uppercase tracking-[0.38em]"
            style={{ color: "var(--muted-foreground)" }}
          >
            Nirmana Studio · Design Philosophy
          </span>
        </div>
      </motion.div>
    </section>
  );
}