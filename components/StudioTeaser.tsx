'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Principal Designer',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
  src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=85',
  },
  {
    name: 'Karan Bose',
    role: 'Senior Designer',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
  },
];

export default function StudioTeaser() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-12%' });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: 'var(--secondary)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr]">

        {/* ── Left: text content ── */}
        <div
          className="flex flex-col justify-between px-6 lg:px-14 py-20 lg:py-28"
          style={{ borderRight: '1px solid var(--border)' }}
        >
          {/* Top block */}
          <div className="flex flex-col gap-10">

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.3, ease: 'easeOut' }}
            >
              <div className="h-px w-7" style={{ backgroundColor: 'var(--border)' }} />
              <span
                className="font-sans text-[9px] tracking-[0.32em] uppercase"
                style={{ color: 'var(--muted-foreground)' }}
              >
                The Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-cormorant font-medium leading-[0.9]"
              style={{
                color: 'var(--foreground)',
                fontSize: 'clamp(2.6rem, 4.5vw, 5.2rem)',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              We design the<br />
              <em>unrepeatable.</em>
            </motion.h2>

            {/* Body copy */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.28, ease: 'easeOut' }}
            >
              <div className="h-px w-7" style={{ backgroundColor: 'var(--border)' }} />
              <p
                className="font-cormorant italic leading-relaxed"
                style={{
                  color: 'var(--muted-foreground)',
                  fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                  maxWidth: '38ch',
                }}
              >
                Nirmana — from the Sanskrit for <em style={{ fontStyle: 'normal', color: 'var(--foreground)', opacity: 0.7 }}>creation</em> — was
                founded on one conviction: the spaces you inhabit are not
                passive backdrops. They are active participants in who you become.
              </p>
              <p
                className="font-cormorant italic leading-relaxed"
                style={{
                  color: 'var(--muted-foreground)',
                  fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                  maxWidth: '38ch',
                }}
              >
                We take on a discerning few each year. Not from lack of ambition —
                from refusal to dilute attention.
              </p>
            </motion.div>
          </div>

          {/* Bottom block: team peek + link */}
          <motion.div
            className="flex flex-col gap-10 mt-16 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.3, delay: 0.45, ease: 'easeOut' }}
          >
            {/* Team thumbnails */}
            <div className="flex items-center gap-0">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className="group relative flex flex-col"
                  style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: i }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '2px solid var(--secondary)',
                    }}
                  >
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      className="object-cover grayscale"
                      sizes="48px"
                    />
                  </div>
                </div>
              ))}
              <div className="ml-4 flex flex-col gap-0.5">
                <span
                  className="font-cormorant italic text-sm leading-snug"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {team.map(m => m.name.split(' ')[0]).join(', ')} & the team
                </span>
                <span
                  className="font-sans text-[8px] tracking-[0.22em] uppercase"
                  style={{ color: 'var(--muted-foreground)', opacity: 0.5 }}
                >
                  New Delhi · Est. 2013
                </span>
              </div>
            </div>

            {/* Link */}
            <Link
              href="/studio"
              className="group inline-flex items-center gap-2.5 w-fit font-sans text-[9px] tracking-[0.28em] uppercase transition-opacity duration-300 hover:opacity-50"
              style={{ color: 'var(--foreground)' }}
            >
              Meet the Studio
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* ── Right: image ── */}
        <div
          ref={imageRef}
          className="relative overflow-hidden"
          style={{ minHeight: 'clamp(420px, 70vh, 800px)' }}
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=90"
              alt="Nirmana Studio atelier"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Warm dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.12) 100%)',
              }}
            />
          </motion.div>

          {/* Bottom caption */}
          <motion.div
            className="absolute bottom-6 right-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.6 }}
          >
            <span
              className="font-cormorant italic text-xs"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              The Nirmana Atelier, New Delhi
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}