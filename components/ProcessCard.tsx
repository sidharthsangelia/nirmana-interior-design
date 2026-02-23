'use client';

import { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  index: string;
  title: string;
  description: string;
  detail: string;
  src: string;
  color: string;
  textColor: string;
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}

export default function ProcessCard({
  index,
  title,
  description,
  detail,
  src,
  color,
  textColor,
  i,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  // Card scales down as subsequent cards stack on top
  const scale = useTransform(progress, range, [1, targetScale]);

  // Image zooms out (from 1.4 → 1) as card enters viewport — same as tutorial
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky"
      style={{ top: 0 }}
    >
      <motion.div
        className="relative w-full mx-4 md:mx-12 lg:mx-20 overflow-hidden"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 28}px)`,
          height: '80vh',
          transformOrigin: 'top center',
          borderRadius: '16px',
          border: '1px solid color-mix(in oklch, var(--border) 30%, transparent)',
        }}
      >
        {/* ── Two-column layout: text left, image right ── */}
        <div className="h-full grid grid-cols-1 md:grid-cols-2">

          {/* Left — text content */}
          <div
            className="flex flex-col justify-between p-8 md:p-12 lg:p-14"
            style={{ borderRight: '1px solid rgba(128,128,128,0.12)' }}
          >
            {/* Top: detail label + index */}
            <div className="flex items-start justify-between">
              <span
                className="font-sans text-[9px] tracking-[0.28em] uppercase"
                style={{ color: textColor, opacity: 0.4 }}
              >
                {detail}
              </span>
              <span
                className="font-cormorant text-[11px] tracking-[0.25em] uppercase"
                style={{ color: textColor, opacity: 0.25, fontWeight: 400 }}
              >
                {index} / 04
              </span>
            </div>

            {/* Middle: large title */}
            <h2
              className="font-cormorant leading-[0.88]"
              style={{
                color: textColor,
                fontWeight: 500,
                fontSize: 'clamp(36px, 4.5vw, 78px)',
                whiteSpace: 'pre-line',
              }}
            >
              {title}
            </h2>

            {/* Bottom: description + rule */}
            <div className="flex flex-col gap-6">
              <div
                className="h-px w-8"
                style={{ backgroundColor: textColor, opacity: 0.2 }}
              />
              <p
                className="font-cormorant text-base md:text-[17px] italic leading-relaxed"
                style={{ color: textColor, opacity: 0.6, fontWeight: 400, maxWidth: '34ch' }}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Right — image with scroll-triggered zoom */}
          <div className="relative w-full h-full p-6 md:p-8">
            <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '10px' }}>
              <motion.div
                className="absolute inset-0"
                style={{ scale: imageScale }}
              >
              <Image
                src={src}
                alt={detail}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle overlay to tie image into card colour */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: color, opacity: 0.15, mixBlendMode: 'multiply' }}
              />
            </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}