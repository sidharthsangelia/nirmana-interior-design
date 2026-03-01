'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Principal Designer',
    bio: 'Trained at NID Ahmedabad, refined in Milan. Arjun believes a room should make you feel before it makes you think.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
    bio: 'Former architect turned interior poet. Priya speaks in light, silence, and the weight of a good material.',
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&q=85',
  },
  {
    name: 'Karan Bose',
    role: 'Senior Interior Designer',
    bio: 'Obsessed with the intersection of craft and concept. Every detail Karan touches carries intent.',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
  },
];

const values = [
  {
    number: '01',
    title: 'Silence is a design choice.',
    body: 'We resist the urge to fill. Negative space is not emptiness — it is the breath between words that gives language meaning.',
  },
  {
    number: '02',
    title: 'Material is memory.',
    body: 'We source with intention. The grain of wood, the cool weight of stone — these carry histories that no paint colour ever will.',
  },
  {
    number: '03',
    title: 'Luxury is precision.',
    body: 'True opulence has nothing to prove. It lives in the millimetre gap, the perfectly weighted door handle, the hinge that whispers.',
  },
  {
    number: '04',
    title: 'Every client is a collaborator.',
    body: 'We listen first, design second. The finest interior is one that could only belong to the person who lives in it.',
  },
];

export default function StudioPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* Hero — parallax image */}
      <section ref={heroRef} className="relative h-[90vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=90"
            alt="Nirmana Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.55) 100%)' }} />
        </motion.div>

        <div className="relative h-full flex flex-col justify-end px-6 lg:px-12 pb-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-white/50">
              New Delhi, India — Est. 2017
            </span>
            <h1
              className="font-cormorant text-white leading-[0.88]"
              style={{ fontWeight: 500, fontSize: 'clamp(56px, 8vw, 120px)' }}
            >
              We design the<br />
              <em>unrepeatable.</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span
              className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-8"
              style={{ color: 'var(--accent)' }}
            >
              Our Philosophy
            </span>
            <h2
              className="font-cormorant leading-[1.05]"
              style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(36px, 4vw, 60px)' }}
            >
              We don't decorate.<br />
              We <em>architect</em><br />
              how you feel.
            </h2>
          </div>
          <div className="flex flex-col gap-6 pt-2 lg:pt-16">
            <p
              className="font-cormorant text-lg leading-relaxed"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}
            >
              Nirmana — derived from the Sanskrit for <em>creation</em> — was founded on a single conviction: that the spaces you inhabit are not passive backdrops but active participants in who you become.
            </p>
            <p
              className="font-cormorant text-lg leading-relaxed"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}
            >
              We work with a discerning few each year. Not because we lack ambition, but because we refuse to dilute attention. Each commission is approached with obsessive rigour — from the first sketch to the final installation.
            </p>
            <p
              className="font-cormorant text-lg leading-relaxed"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}
            >
              The result is never just a beautiful room. It is a room that is irreversibly, unmistakably yours.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 px-6 lg:px-12"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-16"
            style={{ color: 'var(--muted-foreground)' }}
          >
            What we believe
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid var(--border)' }}>
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="p-10 md:p-12 flex flex-col gap-4"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span
                  className="font-cormorant text-[11px] tracking-[0.28em] uppercase"
                  style={{ color: 'var(--accent)', fontWeight: 400 }}
                >
                  {v.number}
                </span>
                <h3
                  className="font-cormorant text-2xl md:text-3xl leading-tight"
                  style={{ color: 'var(--foreground)', fontWeight: 500 }}
                >
                  {v.title}
                </h3>
                <p
                  className="font-cormorant text-base md:text-[17px] italic leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <span
          className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-16"
          style={{ color: 'var(--muted-foreground)' }}
        >
          The people behind the work
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="flex flex-col gap-5"
            >
              <div className="relative aspect-[3/4] overflow-hidden" style={{ borderRadius: '2px' }}>
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[9px] tracking-[0.26em] uppercase" style={{ color: 'var(--accent)' }}>
                  {member.role}
                </span>
                <h3 className="font-cormorant text-2xl" style={{ color: 'var(--foreground)', fontWeight: 500 }}>
                  {member.name}
                </h3>
                <p className="font-cormorant text-[15px] italic leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Press numbers */}
      <section
        className="py-24 px-6 lg:px-12"
        style={{ backgroundColor: 'var(--foreground)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {[
            { number: '7', label: 'Years of practice' },
            { number: '84', label: 'Projects completed' },
            { number: '12', label: 'Awards won' },
            { number: '4', label: 'Cities served' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 p-10"
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <span
                className="font-cormorant leading-none"
                style={{ color: 'var(--background)', fontWeight: 300, fontSize: 'clamp(48px, 6vw, 88px)' }}
              >
                {stat.number}
              </span>
              <span
                className="font-sans text-[9px] tracking-[0.26em] uppercase"
                style={{ color: 'color-mix(in oklch, var(--background) 40%, transparent)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}