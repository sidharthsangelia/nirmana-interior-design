'use client';

 
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Principal Designer',
    bio: 'Trained at NID Ahmedabad, sharpened in Milan. Arjun designs the way a sentence ends , with weight, intention, and nothing wasted.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
    bio: 'Former architect. Eternal observer. Priya reads a room before she touches it , and what she draws after is never accidental.',
    src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=85',
  },
  {
    name: 'Karan Bose',
    role: 'Senior Interior Designer',
    bio: 'Where craft meets conviction. Karan works at the intersection of the instinctive and the obsessive , and it shows in every detail.',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
  },
];

const values = [
  {
    number: '01',
    title: 'Silence is a design choice.',
    body: 'We resist the urge to fill. Negative space is not emptiness , it is the breath between words that makes the sentence land.',
  },
  {
    number: '02',
    title: 'Material is memory.',
    body: 'We source with intention. The grain of aged wood, the cool stillness of stone , these carry histories that no paint colour ever will.',
  },
  {
    number: '03',
    title: 'Luxury is precision.',
    body: 'True opulence has nothing to prove. It lives in the millimetre gap, the perfectly weighted handle, the hinge that whispers shut.',
  },
  {
    number: '04',
    title: 'Every client is a collaborator.',
    body: 'We listen first and design second. The finest interior is one that could only have been made for one person , and they know it the moment they walk in.',
  },
];

const press = [
  'Architectural Digest',
  'Elle Decor',
  'Wallpaper*',
  'Dezeen',
  'Vogue Living',
  'Condé Nast Traveller',
];

const stats = [
  { number: '12', label: 'Years of practice', note: 'Earned through discipline.' },
  { number: '140+', label: 'Spaces completed', note: 'Residences, hotels, institutions.' },
  { number: '97%', label: 'Client retention', note: 'They return. Every time.' },
  { number: '0', label: 'Compromises made', note: 'On quality. On vision. On craft.' },
];

export default function StudioPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ height: '99vh', minHeight: '560px' }}>
        <motion.div className="absolute inset-0" style={{ y }}>
          {/* Warm, editorial atelier image , stone, light, intentional calm */}
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=2000&q=90"
            alt="Nirmana Studio atelier , light and material"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(160deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.72) 100%)',
            }}
          />
        </motion.div>

        {/* Top-left corner label */}
        {/* <div className="absolute top-8 left-6 lg:left-12">
          <span className="font-sans text-[9px] tracking-[0.36em] uppercase text-white/40">
            New Delhi, India , Est. 2013
          </span>
        </div> */}

        {/* Bottom-right: scroll nudge */}
        {/* <div className="absolute bottom-10 right-6 lg:right-12 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ width: 1, height: 48, backgroundColor: 'rgba(255,255,255,0.3)' }}
          />
          <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        </div> */}

        {/* Hero copy , bottom-left */}
        <div className="relative h-full flex flex-col justify-end px-6 lg:px-12 pb-16 md:pb-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 max-w-3xl"
          >
            <h1
              className="font-cormorant text-white leading-[0.9]"
              style={{ fontWeight: 500, fontSize: 'clamp(52px, 8vw, 116px)' }}
            >
              The studio
              <br />
              <em>behind the space.</em>
            </h1>
            <p
              className="font-cormorant text-white/60 leading-relaxed max-w-md mt-2"
              style={{ fontSize: 'clamp(15px, 1.6vw, 18px)' }}
            >
              Twelve years. A discerning few. Not a single shortcut.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Manifesto ────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-28 items-start">
          {/* Left */}
          <div>
            <span
              className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-8"
              style={{ color: 'var(--accent)' }}
            >
              Our Philosophy
            </span>
            <h2
              className="font-cormorant leading-[1.05]"
              style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(34px, 4vw, 58px)' }}
            >
              We don't decorate.
              <br />
              We <em>architect</em>
              <br />
              how you feel.
            </h2>

            {/* Thin rule with label */}
            <div className="flex items-center gap-4 mt-10">
              <div style={{ width: 40, height: 1, backgroundColor: 'var(--accent)', opacity: 0.6 }} />
              <span
                className="font-sans text-[8px] tracking-[0.3em] uppercase"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Nirmana , Sanskrit for creation
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-7 lg:pt-16">
            <p
              className="font-cormorant text-[17px] md:text-lg leading-relaxed"
              style={{ color: 'var(--foreground)', opacity: 0.72 }}
            >
              Nirmana was founded on one conviction: the spaces you inhabit are not passive backdrops.
              They are active participants in who you become.
            </p>
            <p
              className="font-cormorant text-[17px] md:text-lg leading-relaxed"
              style={{ color: 'var(--foreground)', opacity: 0.72 }}
            >
              We take on a discerning few each year , not from lack of ambition, but from refusal to dilute
              attention. Each commission is approached with obsessive rigour, from the first site visit to
              the final installation punch-list.
            </p>
            <p
              className="font-cormorant text-[17px] md:text-lg leading-relaxed"
              style={{ color: 'var(--foreground)', opacity: 0.72 }}
            >
              The result is never just a beautiful room. It is a room that could only ever be yours.
            </p>

            {/* Pull quote */}
            <blockquote
              className="font-cormorant italic text-xl md:text-2xl leading-snug mt-4 pl-5"
              style={{
                color: 'var(--foreground)',
                borderLeft: '2px solid var(--accent)',
                opacity: 0.85,
              }}
            >
              "Good design is felt before it is seen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 lg:px-12"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <span
              className="font-sans text-[9px] tracking-[0.32em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              What we believe
            </span>
            <span
              className="font-cormorant italic text-base"
              style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}
            >
              Principles that have never moved.
            </span>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ border: '1px solid var(--border)' }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.75 }}
                className="group p-9 md:p-12 flex flex-col gap-5 transition-colors duration-500"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  cursor: 'default',
                }}
              >
                {/* Number + line */}
                <div className="flex items-center gap-4">
                  <span
                    className="font-cormorant text-[11px] tracking-[0.28em] uppercase"
                    style={{ color: 'var(--accent)', fontWeight: 400 }}
                  >
                    {v.number}
                  </span>
                  <div
                    className="flex-1 transition-all duration-500 group-hover:flex-none"
                    style={{ height: 1, backgroundColor: 'var(--border)', maxWidth: 48 }}
                  />
                </div>
                <h3
                  className="font-cormorant text-2xl md:text-[28px] leading-tight"
                  style={{ color: 'var(--foreground)', fontWeight: 500 }}
                >
                  {v.title}
                </h3>
                <p
                  className="font-sans text-[15px] md:text-[16px] italic leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <span
            className="font-sans text-[9px] tracking-[0.32em] uppercase"
            style={{ color: 'var(--muted-foreground)' }}
          >
            The people behind the work
          </span>
          <span
            className="font-cormorant italic text-base"
            style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}
          >
            New Delhi · Est. 2013
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13, duration: 0.75 }}
              className="flex flex-col gap-6"
            >
              {/* Portrait */}
              <div className="relative overflow-hidden" style={{ borderRadius: '2px', aspectRatio: '3/4' }}>
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-[1.03]"
                  style={{ transformOrigin: 'center center' }}
                />
                {/* Subtle vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Copy */}
              <div className="flex flex-col gap-2">
                <span
                  className="font-sans text-[8.5px] tracking-[0.28em] uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  {member.role}
                </span>
                <h3
                  className="font-cormorant text-2xl"
                  style={{ color: 'var(--foreground)', fontWeight: 500 }}
                >
                  {member.name}
                </h3>
                <p
                  className="font-sans text-[15px] italic leading-relaxed mt-1"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Press ────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-6 lg:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-16">
            <span
              className="font-sans text-[8px] tracking-[0.32em] uppercase shrink-0"
              style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}
            >
              As featured in
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {press.map((name) => (
                <span
                  key={name}
                  className="font-cormorant text-sm italic"
                  style={{ color: 'var(--muted-foreground)', opacity: 0.55 }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats (dark band) ────────────────────────────────────────── */}
      <section
        className="py-0"
        style={{ backgroundColor: 'var(--foreground)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
                className="flex flex-col gap-2 py-14 px-8 md:px-10"
                style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span
                  className="font-cormorant leading-none"
                  style={{
                    color: 'var(--background)',
                    fontWeight: 300,
                    fontSize: 'clamp(44px, 5.5vw, 80px)',
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="font-sans text-[8.5px] tracking-[0.26em] uppercase mt-1"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {stat.label}
                </span>
                <span
                  className="font-cormorant italic text-[13px] leading-snug mt-1"
                  style={{ color: 'rgba(255,255,255,0.22)' }}
                >
                  {stat.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / closing ───────────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto text-center flex flex-col items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center gap-6 max-w-2xl"
        >
          <span
            className="font-sans text-[9px] tracking-[0.32em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Begin a commission
          </span>
          <h2
            className="font-cormorant leading-[1.05]"
            style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            You already know
            <br />
            <em>this space should be different.</em>
          </h2>
          <p
            className="font-sans text-lg leading-relaxed"
            style={{ color: 'var(--muted-foreground)' }}
          >
            We take on very few projects each year.
            <br />
            If you feel the fit , reach out.
          </p>
        </motion.div>

        <Link
          href="/contact"
          className="font-sans text-[9px] tracking-[0.32em] uppercase inline-flex items-center gap-4 group"
          style={{ color: 'var(--foreground)' }}
        >
          <span>Start the conversation</span>
          <span
            className="block transition-all duration-500 group-hover:w-12"
            style={{ width: 32, height: 1, backgroundColor: 'var(--foreground)' }}
          />
        </Link>
       
      </section>

    </main>
  );
}