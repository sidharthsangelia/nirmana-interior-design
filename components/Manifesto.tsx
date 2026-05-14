'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const lines = ['We begin', 'where decoration', 'ends.'];

export default function Manifesto() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-16%' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--secondary)',
        paddingTop: 'clamp(5.5rem, 11vw, 10rem)',
        paddingBottom: 'clamp(5.5rem, 11vw, 10rem)',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 lg:gap-0 items-center">

          {/* ── Main content ── */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-14"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            >
              <div className="h-px w-8" style={{ backgroundColor: 'var(--border)' }} />
              <span
                className="font-sans text-[9px] tracking-[0.32em] uppercase"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Our Belief
              </span>
            </motion.div>

            {/* Headline — gentle fade only, no dramatic slide */}
            <h2
              className="font-cormorant italic font-medium leading-[0.9] mb-14"
              style={{
                fontSize: 'clamp(3rem, 7vw, 8rem)',
                color: 'var(--foreground)',
              }}
            >
              {lines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.4,
                    delay: 0.2 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </h2>

            {/* Supporting text */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.75, ease: 'easeOut' }}
            >
              <div className="h-px w-7 mb-6" style={{ backgroundColor: 'var(--border)' }} />
              <p
                className="font-cormorant italic leading-relaxed max-w-md"
                style={{
                  color: 'var(--muted-foreground)',
                  fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                }}
              >
                Most spaces are filled. Ours are considered.
                <br />
                Every decision earns its place, or it doesn&apos;t enter the room.
              </p>
            </motion.div>
          </div>

          {/* ── Right ornament — desktop only ── */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-5 self-center">
            <motion.div
              className="w-px origin-top"
              style={{ height: 'clamp(60px, 8vw, 100px)', backgroundColor: 'var(--border)' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Small rotated square — geometric, not kitschy */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={isInView ? { opacity: 0.35, rotate: 45 } : {}}
              transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '5px',
                height: '5px',
                border: '1px solid var(--muted-foreground)',
                flexShrink: 0,
              }}
            />

            <motion.div
              className="w-px origin-bottom"
              style={{ height: 'clamp(60px, 8vw, 100px)', backgroundColor: 'var(--border)' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}