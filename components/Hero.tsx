'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Luxury interior"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center -translate-y-14 px-6">

        <motion.p
          className="font-cormorant text-white/70 text-sm md:text-base tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          We Don't Decorate Spaces
        </motion.p>

        <motion.h1
          className="font-cormorant text-white text-4xl md:text-6xl lg:text-8xl font-medium leading-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          We Define Them.
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {/* Label */}
        <span
          className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50"
        >
          Scroll
        </span>

        {/* Track + animated dot */}
        <div className="relative flex flex-col items-center">
          {/* Vertical track */}
          <div className="w-px h-14 bg-white/20 rounded-full" />

          {/* Animated travelling dot */}
          <motion.div
            className="absolute top-0 w-px rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.75)', height: '28px' }}
            animate={{ y: [0, 28, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              repeatDelay: 0.4,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}