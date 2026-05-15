"use client";

import { motion, type Transition, type TargetAndTransition } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0): { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition } => ({
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.5, ease: EASE, delay },
});

export default function JournalHero() {
  return (
    <section className="px-6 lg:px-16 pt-44 pb-32">
      <div className="max-w-7xl mx-auto">

        {/* Label row */}
        <motion.div {...fadeUp(0.05)} className="flex items-center gap-5 mb-14">
          <span
            className="font-sans text-[8px] uppercase tracking-[0.42em]"
            style={{ color: "var(--muted-foreground)" }}
          >
            The Journal
          </span>
          <div className="w-10 h-px" style={{ backgroundColor: "var(--border)" }} />
          <span
            className="ml-auto font-sans text-[8px] uppercase tracking-[0.3em] font-light"
            style={{ color: "var(--border)" }}
          >
            Vol. III · 2026
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-cormorant leading-[0.84] max-w-6xl"
          style={{
            fontSize: "clamp(72px, 10vw, 148px)",
            fontWeight: 500,
            color: "var(--foreground)",
          }}
        >
          Design begins
          <br />
          long before
          <br />
          <em className="font-light">furniture enters</em>
          <br />
          the room.
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex items-end justify-between mt-16 flex-wrap gap-8"
        >
          <p
            className="max-w-sm font-sans text-sm leading-[1.9] font-light"
            style={{ color: "var(--muted-foreground)" }}
          >
            Observations on space, material, silence, proportion,
            and the emotional architecture of living.
          </p>

          {/* Animated scroll indicator */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-px h-14 relative overflow-hidden"
              style={{ backgroundColor: "var(--border)" }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{ backgroundColor: "var(--muted-foreground)" }}
                animate={{ y: ["−100%", "100%"] }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, delay: 1.2 }}
              />
            </div>
            <span
              className="font-sans text-[7px] uppercase tracking-[0.4em]"
              style={{
                color: "var(--border)",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Scroll
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}