'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const featured = [
  {
    id: '01',
    title: 'The Mehta Residence',
    location: 'New Delhi',
    category: 'Residential',
    year: '2024',
    area: '4,200 sq ft',
    tag: 'Raw marble. Brutal calm.',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85',
    href: '/case-study/mehta-residence',
  },
  {
    id: '02',
    title: 'The Aranya Hotel',
    location: 'Jaipur',
    category: 'Hospitality',
    year: '2023',
    area: '28,000 sq ft',
    tag: 'Luxury without apology.',
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=85',
    href: '/case-study/aranya-hotel',
  },
  {
    id: '03',
    title: 'Villa Karun',
    location: 'Alibag, Maharashtra',
    category: 'Residential',
    year: '2023',
    area: '6,800 sq ft',
    tag: 'Stone. Sea. Silence.',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85',
    href: '/case-study/villa-karun',
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: '-8%' });

  return (
    <section
      ref={sectionRef}
      className="w-full py-28 md:py-36"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <span
              className="font-sans text-[9px] tracking-[0.3em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Selected Works
            </span>
            <h2
              className="font-cormorant leading-[0.9] font-medium"
              style={{
                color: 'var(--foreground)',
                fontSize: 'clamp(2.4rem, 5vw, 5rem)',
              }}
            >
              The work<br />
              <em>speaks first.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.28em] uppercase transition-opacity duration-300 hover:opacity-60"
              style={{ color: 'var(--foreground)' }}
            >
              View All Work
              <ArrowUpRight
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* ── Top divider ── */}
        <motion.div
          className="h-px w-full origin-left mb-0"
          style={{ backgroundColor: 'var(--border)' }}
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />

        {/* ── Project rows ── */}
        {featured.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} flip={i % 2 !== 0} />
        ))}

      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  flip,
}: {
  project: typeof featured[0];
  index: number;
  flip: boolean;
}) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: '-12%' });

  // Subtle parallax on the image
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <>
      <div ref={rowRef}>
        <Link
          href={project.href}
          prefetch={false}
          className="group grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-0 py-12 md:py-0"
          style={{
            direction: flip ? 'rtl' : 'ltr', // flips column order elegantly
          }}
        >

          {/* ── Image column ── */}
          <motion.div
            className="relative overflow-hidden"
            style={{
              direction: 'ltr',
              height: 'clamp(260px, 44vw, 600px)',
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-700" />
              </motion.div>
            </motion.div>

            {/* Category badge */}
            <div
              className="absolute top-5 left-5 px-3 py-1.5 z-10"
              style={{
                backgroundColor: 'color-mix(in oklch, var(--background) 85%, transparent)',
                border: '1px solid var(--border)',
              }}
            >
              <span
                className="font-sans text-[8px] tracking-[0.26em] uppercase"
                style={{ color: 'var(--foreground)' }}
              >
                {project.category}
              </span>
            </div>
          </motion.div>

          {/* ── Text column ── */}
          <motion.div
            className="flex flex-col justify-between py-0 md:py-10 px-0 md:px-10 lg:px-14"
            style={{ direction: 'ltr' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            {/* Top: index */}
            <span
              className="font-cormorant text-[11px] tracking-[0.22em] hidden md:block"
              style={{ color: 'var(--muted-foreground)', opacity: 0.4, fontWeight: 400 }}
            >
              {project.id} / 03
            </span>

            {/* Middle: title + tag */}
            <div className="flex flex-col gap-4 py-8 md:py-0">
              <h3
                className="font-cormorant leading-[0.9] font-medium"
                style={{
                  color: 'var(--foreground)',
                  fontSize: 'clamp(2rem, 3.2vw, 3.6rem)',
                }}
              >
                {project.title}
              </h3>
              <p
                className="font-cormorant italic text-base md:text-lg leading-snug"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {project.tag}
              </p>
            </div>

            {/* Bottom: meta + arrow */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1.5">
                <div
                  className="h-px w-6 mb-2"
                  style={{ backgroundColor: 'var(--border)' }}
                />
                <span
                  className="font-sans text-[9px] tracking-[0.22em] uppercase"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {project.location}
                </span>
                <span
                  className="font-sans text-[9px] tracking-[0.22em] uppercase"
                  style={{ color: 'var(--muted-foreground)', opacity: 0.5 }}
                >
                  {project.area} · {project.year}
                </span>
              </div>

              <motion.div
                className="flex items-center gap-2 pb-0.5"
                initial={{ opacity: 0, x: -6 }}
                whileHover={{ opacity: 1, x: 0 }}
                animate={isInView ? { opacity: 0.35 } : { opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <span
                  className="font-sans text-[9px] tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: 'var(--accent)' }}
                >
                  View
                </span>
                <ArrowUpRight
                  className="h-4 w-4 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--accent)' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Divider between rows */}
      <motion.div
        className="h-px w-full"
        style={{ backgroundColor: 'var(--border)' }}
        initial={{ scaleX: 0, originX: index % 2 === 0 ? 0 : 1 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </>
  );
}