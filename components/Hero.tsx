"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-svh min-h-[560px] overflow-hidden">
      {/* Background Image */}
   <Image
  src="/hero.png"
  alt="Luxury interior"
  fill
  priority
  className="object-cover object-center hidden sm:block"
/>

{/* Background Image — mobile */}
<Image
  src="/hero-mobile-2.png"
  alt="Luxury interior"
  fill
  priority
  className="object-cover object-center block sm:hidden"
/>
      {/* Layered Overlays */}
      {/* Base dark wash */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Vignette — darkens edges, keeps center luminous */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Grain texture for premium tactile quality */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

   

      {/* ── Centered Hero Content ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-8">

        {/* Eyebrow line */}
        <motion.p
          className="font-cormorant text-white/65 text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-widest uppercase mb-4 sm:mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          We Don&apos;t Decorate Spaces
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="font-cormorant text-white font-medium leading-[1.05] tracking-tight
            text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
          We Define Them.
        </motion.h1>

        {/* CTA button */}
        <motion.button
          className="mt-8 sm:mt-10 group relative font-cormorant text-white/80 text-xs sm:text-sm
            tracking-[0.25em] uppercase px-7 sm:px-9 py-3 sm:py-3.5
            border border-white/25 hover:border-white/55 transition-colors duration-500
            overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hover shimmer fill */}
          <span
            className="absolute inset-0 -translate-x-full group-hover:translate-x-0
              bg-white/8 transition-transform duration-500 ease-out"
          />
          <Link className="relative" href="/work">
            Explore Our Work
          </Link>
        </motion.button>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-7 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-white/40">
          Scroll
        </span>

        <div className="relative flex flex-col items-center">
          {/* Track */}
          <div className="w-px h-12 sm:h-14 bg-white/15 rounded-full" />

          {/* Travelling dot */}
          <motion.div
            className="absolute top-0 w-px rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.65)",
              height: "26px",
            }}
            animate={{ y: [0, 26, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              repeatDelay: 0.5,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
