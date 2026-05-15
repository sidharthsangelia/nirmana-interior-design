'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { caseStudies, caseStudyBySlug } from '@/lib/caseStudyData';
 

export default function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const cs = caseStudyBySlug[slug];

  // ── 404 state ─────────────────────────────────────────────────────────────
  if (!cs) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="text-center flex flex-col gap-5">
          <h1
            className="font-cormorant text-5xl"
            style={{ color: 'var(--foreground)', fontWeight: 400 }}
          >
            Project not found.
          </h1>
          <Link
            href="/case-study"
            className="font-sans text-[9px] tracking-[0.28em] uppercase transition-opacity hover:opacity-50"
            style={{ color: 'var(--accent)' }}
          >
            Back to all work
          </Link>
        </div>
      </main>
    );
  }

  // ── Next project (wraps around) ───────────────────────────────────────────
  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextCs = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* ── Full-screen hero ─────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src={cs.heroSrc}
          alt={cs.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)',
          }}
        />

        <div className="relative h-full flex flex-col justify-end px-10 pb-20 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Meta row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[cs.category, cs.location, cs.year, cs.area].map((m) => (
                <span
                  key={m}
                  className="font-sans text-[9px] tracking-[0.28em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="font-cormorant leading-[0.88] text-white"
              style={{
                fontWeight: 500,
                fontSize: 'clamp(44px, 6.5vw, 104px)',
                letterSpacing: '-0.01em',
              }}
            >
              {cs.title}
            </h1>

            {/* Headline */}
            <p
              className="font-cormorant text-xl md:text-2xl italic leading-snug max-w-2xl"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {cs.headline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Back nav ─────────────────────────────────────────────────── */}
      <div className="px-10 lg:px-20 pt-12 max-w-7xl mx-auto">
        <Link
          href="/case-study"
          className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.28em] uppercase transition-opacity hover:opacity-40"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <ArrowLeft className="h-3 w-3" />
          All projects
        </Link>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left: narrative ── */}
          <div className="lg:col-span-7 flex flex-col gap-14">
            {[
              { label: 'The situation', body: cs.challenge },
              { label: 'Our approach', body: cs.approach },
              { label: 'What followed', body: cs.outcome },
            ].map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4"
              >
                <span
                  className="font-sans text-[9px] tracking-[0.32em] uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  {section.label}
                </span>
                <p
                  className="font-cormorant leading-relaxed"
                  style={{
                    color: 'var(--foreground)',
                    opacity: 0.82,
                    fontSize: 'clamp(17px, 1.5vw, 20px)',
                  }}
                >
                  {section.body}
                </p>
              </motion.div>
            ))}

            {/* Client quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="flex flex-col gap-4 py-8 px-8"
              style={{ borderLeft: '1px solid var(--accent)' }}
            >
              <p
                className="font-cormorant text-2xl md:text-3xl italic leading-snug"
                style={{ color: 'var(--foreground)' }}
              >
                "{cs.clientQuote}"
              </p>
              <cite
                className="font-sans text-[9px] tracking-[0.26em] uppercase not-italic"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {cs.clientQuoteAttrib}
              </cite>
            </motion.blockquote>
          </div>

          {/* Right: sidebar ── */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8 lg:pt-2">

            {/* Credits box */}
            <div
              className="flex flex-col gap-0"
              style={{ border: '1px solid var(--border)' }}
            >
              <div
                className="px-7 py-4"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span
                  className="font-sans text-[9px] tracking-[0.32em] uppercase"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Project credits
                </span>
              </div>
              {cs.credits.map((credit, i) => (
                <div
                  key={credit.role}
                  className="flex flex-col gap-0.5 px-7 py-4"
                  style={{
                    borderBottom:
                      i < cs.credits.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <span
                    className="font-sans text-[8px] tracking-[0.22em] uppercase"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {credit.role}
                  </span>
                  <span
                    className="font-cormorant text-[18px]"
                    style={{ color: 'var(--foreground)', fontWeight: 400 }}
                  >
                    {credit.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Project specs */}
            <div
              className="flex flex-col gap-0"
              style={{ border: '1px solid var(--border)' }}
            >
              <div
                className="px-7 py-4"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span
                  className="font-sans text-[9px] tracking-[0.32em] uppercase"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Project details
                </span>
              </div>
              {[
                { label: 'Location', value: cs.location },
                { label: 'Year', value: cs.year },
                { label: 'Category', value: cs.category },
                { label: 'Area', value: cs.area },
              ].map((detail, i, arr) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between px-7 py-4"
                  style={{
                    borderBottom:
                      i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <span
                    className="font-sans text-[8px] tracking-[0.22em] uppercase"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {detail.label}
                  </span>
                  <span
                    className="font-cormorant text-base"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group flex items-center justify-between px-7 py-4 font-sans text-[10px] tracking-[0.28em] uppercase transition-all duration-200"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--foreground)';
              }}
            >
              Begin a commission
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="pb-32 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cs.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.75 }}
              className={`relative overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
              style={{
                aspectRatio: i === 0 ? '16/7' : '4/3',
                borderRadius: '2px',
              }}
            >
              <Image
                src={src}
                alt={`${cs.title} — view ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Next project ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <Link
          href={`/case-study/${nextCs.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Text side */}
          <div className="flex flex-col justify-between gap-8 px-10 lg:px-20 py-16 lg:py-20">
            <div className="flex flex-col gap-2">
              <span
                className="font-sans text-[9px] tracking-[0.32em] uppercase"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Next project
              </span>
              <span
                className="font-sans text-[9px] tracking-[0.28em] uppercase"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {nextCs.location} &nbsp;·&nbsp; {nextCs.year}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3
                className="font-cormorant leading-[0.9]"
                style={{
                  color: 'var(--foreground)',
                  fontWeight: 500,
                  fontSize: 'clamp(36px, 4vw, 64px)',
                }}
              >
                {nextCs.title}
              </h3>
              <p
                className="font-cormorant text-lg italic"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {nextCs.tag}
              </p>
            </div>

            <span
              className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.28em] uppercase transition-opacity group-hover:opacity-40 w-fit"
              style={{ color: 'var(--accent)' }}
            >
              View project
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>

          {/* Image side */}
          <div className="relative overflow-hidden" style={{ minHeight: '360px' }}>
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={nextCs.heroSrc}
                alt={nextCs.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>
          </div>
        </Link>
      </section>
    </main>
  );
}