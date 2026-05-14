'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const publications = [
  { name: 'Architectural Digest', style: { fontFamily: 'var(--font-cormorant)', fontWeight: 500, fontSize: '1.05rem', letterSpacing: '0.06em', fontStyle: 'normal' } },
  { name: 'Elle Decor', style: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.18em' } },
  { name: 'Wallpaper*', style: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em' } },
  { name: 'Dezeen', style: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.04em' } },
  { name: 'Vogue Living', style: { fontFamily: 'var(--font-cormorant)', fontWeight: 500, fontSize: '1.05rem', letterSpacing: '0.08em', fontStyle: 'italic' } },
  { name: 'Condé Nast Traveller', style: { fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '0.7rem', letterSpacing: '0.2em' } },
  { name: 'Surface', style: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.22em' } },
  { name: 'The Hindu', style: { fontFamily: 'var(--font-cormorant)', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.04em' } },
];

// Duplicate for seamless loop
const track = [...publications, ...publications];

export default function PressRecognition() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden "
      style={{
        backgroundColor: 'var(--background)',
        paddingTop: 'clamp(6rem, 10vw, 9rem)',
        paddingBottom: 'clamp(6rem, 10vw, 9rem)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Eyebrow */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-12 md:mb-14"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <div className="h-px w-6" style={{ backgroundColor: 'var(--border)' }} />
        <span
          className="font-sans text-[9px] tracking-[0.34em] uppercase"
          style={{ color: 'var(--muted-foreground)' }}
        >
          As featured in
        </span>
        <div className="h-px w-6" style={{ backgroundColor: 'var(--border)' }} />
      </motion.div>

      {/* Marquee track */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.8, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Left fade mask */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 z-10"
          style={{
            background: 'linear-gradient(to right, var(--background), transparent)',
          }}
        />

        {/* Right fade mask */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 z-10"
          style={{
            background: 'linear-gradient(to left, var(--background), transparent)',
          }}
        />

        {/* Scrolling row */}
        <div className="flex overflow-hidden">
          <div
            className="flex items-center gap-16 md:gap-24 shrink-0"
            style={{
              animation: 'marquee 38s linear infinite',
              willChange: 'transform',
            }}
          >
            {track.map((pub, i) => (
              <span
                key={i}
                className="shrink-0 uppercase"
                style={{
                  ...pub.style,
                  color: 'var(--foreground)',
                  opacity: 0.45,
                  textTransform: pub.style.fontStyle === 'italic' ? 'none' : 'uppercase',
                }}
              >
                {pub.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}