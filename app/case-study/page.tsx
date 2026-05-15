'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/lib/caseStudyData';


export default function CaseStudyPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* ── Header ───────────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-10 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span
              className="font-sans text-[9px] tracking-[0.36em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Deep Dives
            </span>
            <span
              className="h-px w-10"
              style={{ backgroundColor: 'var(--border)', display: 'block' }}
            />
            <span
              className="font-sans text-[9px] tracking-[0.36em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Selected Projects
            </span>
          </div>

          <h1
            className="font-cormorant leading-[0.88]"
            style={{
              color: 'var(--foreground)',
              fontWeight: 500,
              fontSize: 'clamp(52px, 7.5vw, 118px)',
              letterSpacing: '-0.01em',
            }}
          >
            The work,<br />
            <em>unfiltered.</em>
          </h1>

          <p
            className="font-sans text-sm leading-relaxed max-w-xs"
            style={{ color: 'var(--muted-foreground)', letterSpacing: '0.01em' }}
          >
            Not every project can be reduced to a photograph.
            These are the ones that deserve the full story.
          </p>
        </motion.div>
      </section>

      {/* ── Case study list ───────────────────────────────────────────── */}
      <section
        className="pb-40 px-10 lg:px-20 max-w-7xl mx-auto"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {caseStudies.map((cs, i) => (
          <CaseStudyRow
            key={cs.slug}
            cs={cs}
            index={i}
            total={caseStudies.length}
          />
        ))}
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function CaseStudyRow({
  cs,
  index,
  total,
}: {
  cs: (typeof caseStudies)[0];
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/case-study/${cs.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 md:py-16"
        style={{
          borderBottom: index < total - 1 ? '1px solid var(--border)' : 'none',
        }}
      >
        {/* ── Thumbnail ── */}
        <div
          className="lg:col-span-4 relative overflow-hidden"
          style={{ aspectRatio: '3/2', borderRadius: '2px' }}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={cs.heroSrc}
              alt={cs.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Category pill */}
          <div
            className="absolute top-4 left-4 px-3 py-1.5"
            style={{
              backgroundColor: 'color-mix(in oklch, var(--background) 85%, transparent)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border)',
            }}
          >
            <span
              className="font-sans text-[8px] tracking-[0.26em] uppercase"
              style={{ color: 'var(--foreground)' }}
            >
              {cs.category}
            </span>
          </div>

          {/* Index */}
          <div className="absolute bottom-4 right-4">
            <span
              className="font-cormorant text-xs tracking-widest"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              {cs.id}
            </span>
          </div>
        </div>

        {/* ── Title column ── */}
        <div className="lg:col-span-3 flex flex-col justify-between gap-4 py-1">
          <div className="flex flex-col gap-1.5">
            <span
              className="font-sans text-[8px] tracking-[0.28em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {cs.location}
            </span>
            <span
              className="font-sans text-[8px] tracking-[0.28em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {cs.year} &nbsp;·&nbsp; {cs.area}
            </span>
          </div>

          <h2
            className="font-cormorant leading-[1.05]"
            style={{
              color: 'var(--foreground)',
              fontWeight: 500,
              fontSize: 'clamp(22px, 2.4vw, 34px)',
            }}
          >
            {cs.title}
          </h2>
        </div>

        {/* ── Content column ── */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 py-1">
          <div className="flex flex-col gap-3">
            {/* Headline as editorial italic pull quote */}
            <p
              className="font-cormorant text-xl md:text-2xl italic leading-snug"
              style={{ color: 'var(--foreground)' }}
            >
              {cs.headline}
            </p>

            {/* Challenge preview */}
            <p
              className="font-cormorant text-base leading-relaxed"
              style={{ color: 'var(--muted-foreground)', opacity: 0.85 }}
            >
              {/* First sentence of challenge only */}
              {cs.challenge.split('.')[0]}.
            </p>
          </div>

          {/* CTA */}
          <span
            className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.28em] uppercase transition-opacity duration-200 group-hover:opacity-40 w-fit"
            style={{ color: 'var(--accent)' }}
          >
            Read the full story
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}