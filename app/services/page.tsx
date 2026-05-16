'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    slug: 'residential',
    label: 'Residential',
    headline: 'Homes that hold you.',
    body: 'Your home is the most personal brief we receive. We design residences — apartments, villas, penthouses — that are unmistakably yours. Not a catalogue. Not a trend. A space built around how you actually live.',
    detail:
      'Full-scope interior architecture · Custom furniture · Material & finish curation · Lighting design · Art placement',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85',
    alt: 'Nirmana residential interior — warm stone and natural light',
  },
  {
    number: '02',
    slug: 'commercial',
    label: 'Commercial',
    headline: 'Spaces that perform.',
    body: 'A commercial space is a statement your business makes before anyone speaks. We design offices, retail environments, and workspaces where ambition is built into the architecture — and where the people inside do their best work.',
    detail:
      'Workplace strategy · Brand environment design · Office & retail interiors · Hospitality spaces · Institutional projects',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
    alt: 'Nirmana commercial interior — refined office environment',
  },
  {
    number: '03',
    slug: 'consultation',
    label: 'Consultation',
    headline: 'Clarity, without commitment.',
    body:
      "Sometimes you don't need a full commission. You need a clear eye and honest direction. Our consultation service is a focused engagement — we review your space, your brief, and your instincts, and tell you exactly what we see.",
    detail:
      'Single-session spatial review · Material & specification advisory · Concept direction · Contractor briefing support',
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=85',
    alt: 'Nirmana consultation — drawing and material samples',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    body: 'We extract how you live, not just what you like.',
  },
  {
    step: '02',
    title: 'Concept',
    body: 'A spatial strategy before a single finish is chosen.',
  },
  {
    step: '03',
    title: 'Design',
    body: 'Material, light, proportion — decided with obsession.',
  },
  {
    step: '04',
    title: 'Execution',
    body: 'We stay until the last detail is exactly right.',
  },
];

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-28 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 sm:gap-6 max-w-4xl"
        >
          <span
            className="font-sans text-[8px] sm:text-[9px] tracking-[0.32em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            What we offer
          </span>

          <h1
            className="font-cormorant leading-[0.92]"
            style={{
              color: 'var(--foreground)',
              fontWeight: 500,
              fontSize: 'clamp(42px, 13vw, 112px)',
            }}
          >
            Every space
            <br />
            <em>deserves intention.</em>
          </h1>

          <p
            className="font-cormorant text-[17px] sm:text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Three ways to work with Nirmana — each one approached with the
            same rigour, the same refusal to settle.
          </p>
        </motion.div>

        <div
          className="mt-12 sm:mt-16 md:mt-20"
          style={{ height: 1, backgroundColor: 'var(--border)' }}
        />
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col">
        {services.map((s, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className={`
                grid grid-cols-1 lg:grid-cols-2
                ${i < services.length - 1 ? 'border-b' : ''}
              `}
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Image */}
              <div
                className={`
                  relative overflow-hidden
                  ${isEven ? 'lg:order-1' : 'lg:order-2'}
                  order-1
                `}
              >
                <div className="relative aspect-[4/3] min-h-[260px] sm:min-h-[340px] md:min-h-[420px]">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-[1.03]"
                  />

                  <span
                    className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 font-cormorant"
                    style={{
                      fontSize: 'clamp(54px, 16vw, 100px)',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.12)',
                      lineHeight: 1,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  >
                    {s.number}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div
                className={`
                  flex flex-col justify-between gap-10
                  py-10 sm:py-14 md:py-16
                  ${isEven ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'}
                  order-2
                `}
              >
                <div className="flex flex-col gap-5 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    <span
                      className="font-sans text-[8px] sm:text-[9px] tracking-[0.28em] uppercase"
                      style={{ color: 'var(--accent)' }}
                    >
                      {s.label}
                    </span>

                    <div
                      style={{
                        height: 1,
                        width: 28,
                        backgroundColor: 'var(--border)',
                      }}
                    />

                    <span
                      className="font-sans text-[8px] sm:text-[9px] tracking-[0.28em] uppercase"
                      style={{
                        color: 'var(--muted-foreground)',
                        opacity: 0.5,
                      }}
                    >
                      {s.number}
                    </span>
                  </div>

                  <h2
                    className="font-cormorant leading-[1.02]"
                    style={{
                      color: 'var(--foreground)',
                      fontWeight: 500,
                      fontSize: 'clamp(30px, 8vw, 52px)',
                    }}
                  >
                    {s.headline}
                  </h2>

                  <p
                    className="font-cormorant text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
                    style={{
                      color: 'var(--foreground)',
                      opacity: 0.72,
                    }}
                  >
                    {s.body}
                  </p>

                  <p
                    className="font-sans text-[8px] sm:text-[8.5px] tracking-[0.18em] uppercase leading-[1.9]"
                    style={{
                      color: 'var(--muted-foreground)',
                      opacity: 0.6,
                    }}
                  >
                    {s.detail}
                  </p>
                </div>

                <Link
                  href={`/services/${s.slug}`}
                  className="group font-sans text-[8px] sm:text-[9px] tracking-[0.28em] uppercase inline-flex items-center gap-3 sm:gap-4 self-start transition-opacity duration-200 hover:opacity-50"
                  style={{ color: 'var(--foreground)' }}
                >
                  Explore {s.label}

                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section
        className="mt-20 md:mt-32 py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-12"
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <span
              className="font-sans text-[8px] sm:text-[9px] tracking-[0.32em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              How we work
            </span>

            <span
              className="font-cormorant italic text-sm sm:text-base"
              style={{
                color: 'var(--muted-foreground)',
                opacity: 0.5,
              }}
            >
              Four stages. No shortcuts.
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ border: '1px solid var(--border)' }}
          >
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className={`
                  flex flex-col gap-3 sm:gap-4
                  p-6 sm:p-8 md:p-10
                  border-b lg:border-b-0
                  sm:border-r
                  ${
                    i === process.length - 1
                      ? 'border-b-0 sm:border-r-0'
                      : ''
                  }
                  ${
                    i === process.length - 2 && process.length % 2 === 0
                      ? 'lg:border-r'
                      : ''
                  }
                `}
                style={{ borderColor: 'var(--border)' }}
              >
                <span
                  className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.28em] uppercase"
                  style={{
                    color: 'var(--accent)',
                    fontWeight: 400,
                  }}
                >
                  {p.step}
                </span>

                <h3
                  className="font-cormorant text-xl md:text-2xl"
                  style={{
                    color: 'var(--foreground)',
                    fontWeight: 500,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  className="font-cormorant text-[14px] sm:text-[15px] italic leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 md:py-40 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="flex flex-col gap-5 max-w-xl"
          >
            <span
              className="font-sans text-[8px] sm:text-[9px] tracking-[0.32em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              Begin a commission
            </span>

            <h2
              className="font-cormorant leading-[1.02]"
              style={{
                color: 'var(--foreground)',
                fontWeight: 500,
                fontSize: 'clamp(32px, 9vw, 58px)',
              }}
            >
              Not sure which service
              <br />
              <em>fits your project?</em>
            </h2>

            <p
              className="font-cormorant text-[16px] sm:text-[17px] italic leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Tell us what you're working with. We'll tell you where to start.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.75 }}
            className="shrink-0"
          >
            <Link
              href="/contact"
              className="group font-sans text-[8px] sm:text-[9px] tracking-[0.32em] uppercase inline-flex items-center gap-4 transition-opacity duration-200 hover:opacity-50"
              style={{ color: 'var(--foreground)' }}
            >
              Start the conversation

              <span
                className="block transition-all duration-500 group-hover:w-14"
                style={{
                  width: 36,
                  height: 1,
                  backgroundColor: 'var(--foreground)',
                }}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}