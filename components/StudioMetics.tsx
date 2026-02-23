"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { NumberTicker } from "./ui/number-ticker";
 

const metrics = [
  {
    value: 12,
    suffix: "",
    prefix: "",
    decimalPlaces: 0,
    label: "Years of Practice",
    subtext: "Not built overnight. Built right.",
  },
  {
    value: 200,
    suffix: "+",
    prefix: "",
    decimalPlaces: 0,
    label: "Spaces Completed",
    subtext: "Residences, studios, and institutions — each one earned.",
  },
  {
    value: 98,
    suffix: "%",
    prefix: "",
    decimalPlaces: 0,
    label: "Client Retention",
    subtext: "They don't leave. They come back.",
  },
  {
    value: 0,
    suffix: "",
    prefix: "",
    decimalPlaces: 0,
    label: "Compromises Made",
    subtext: "On quality. On vision. On material truth.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.2,
    },
  },
};

export function StudioMetrics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary text-primary-foreground overflow-hidden"
      style={{
        marginTop: "0",
        paddingTop: "8rem",
        paddingBottom: "7rem",
        position: "relative",
      }}
    >
      {/* Top convex arch */}
      <div className="absolute -top-px left-0 w-full overflow-hidden leading-none" style={{ height: "80px" }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
          <path d="M0,80 Q720,-40 1440,80 L1440,80 L0,80 Z" fill="var(--primary)" />
        </svg>
      </div>

      {/* Bottom convex arch */}
      <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none" style={{ height: "80px" }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
          <path d="M0,0 Q720,120 1440,0 L1440,0 L0,0 Z" fill="var(--primary)" />
        </svg>
      </div>

      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Decorative background numeral */}
      <div
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[20rem] font-bold leading-none opacity-[0.03]"
        style={{ fontFamily: "var(--font-cormorant)" }}
        aria-hidden="true"
      >
        N
      </div>

      <div className="relative mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-24"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.25em] opacity-50"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Studio in Numbers
          </p>
          <h2
            className="max-w-xl text-4xl md:text-5xl leading-[1.1] font-light"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            The Record Speaks.
            <br />
            We Don't Need To.
          </h2>
        </motion.div>

        {/* Top divider line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-0 h-px w-full origin-left bg-primary-foreground opacity-20"
        />

        {/* Metrics grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 divide-y divide-primary-foreground/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="group relative px-0 py-12 sm:px-8 sm:py-14 lg:px-10"
            >
              {/* Vertical dividers between columns */}
              {index !== 0 && (
                <div className="absolute left-0 top-0 hidden h-full w-px bg-primary-foreground/10 sm:block" />
              )}

              {/* Number */}
              <div className="mb-5 flex items-end gap-1">
                {metric.prefix && (
                  <span
                    className="mb-1 text-4xl font-light opacity-60"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {metric.prefix}
                  </span>
                )}
                <div
                  className="text-6xl md:text-7xl font-light leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {isInView ? (
                    <NumberTicker
                      value={metric.value}
                      decimalPlaces={metric.decimalPlaces}
                      className="text-6xl md:text-7xl font-light leading-none tracking-tight whitespace-pre-wrap text-primary-foreground"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  ) : (
                    <span className="text-6xl md:text-7xl font-light leading-none tracking-tight">
                      0
                    </span>
                  )}
                </div>
                {metric.suffix && (
                  <span
                    className="mb-1 text-4xl font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {metric.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p
                className="mb-3 text-sm uppercase tracking-[0.2em] opacity-50"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {metric.label}
              </p>

              {/* Subtext with animated reveal line */}
              <div className="relative">
                <div className="mb-3 h-px w-8 bg-primary-foreground opacity-30 transition-all duration-500 group-hover:w-16 group-hover:opacity-60" />
                <p
                  className="text-sm leading-relaxed opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {metric.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom divider line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="h-px w-full origin-left bg-primary-foreground opacity-20"
        />

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-12 text-right text-xs uppercase tracking-[0.25em] opacity-30"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          New Delhi, India — Est. 2013
        </motion.p>
      </div>
    </section>
  );
}