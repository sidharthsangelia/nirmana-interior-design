'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

// In a real app, this data would come from a CMS or database
const caseStudyData: Record<string, {
  title: string;
  location: string;
  year: string;
  category: string;
  area: string;
  headline: string;
  challenge: string;
  approach: string;
  outcome: string;
  src: string;
  gallery: string[];
  credits: { role: string; name: string }[];
}> = {
  'mehta-residence': {
    title: 'The Mehta Residence',
    location: 'New Delhi',
    year: '2024',
    category: 'Residential',
    area: '4,200 sq ft',
    headline: 'Raw marble. Brutal calm.',
    challenge: 'A family of five living in a house built for impression, not for living. The client wanted something that felt less like a magazine spread and more like an exhale. Previous contractors had created a space that looked expensive but felt empty — loud in the wrong way.',
    approach: 'We stripped the palette to three materials: Calacatta marble, unlacquered brass, and aged Belgian linen. The spatial strategy began with removing two walls that fragmented the ground floor and replaced them with a single 9-metre slab of marble stretching from the entrance to the garden. Every decision was filtered through a single question: does it make you want to stay?',
    outcome: 'A home that photographs magnificently but — more importantly — one that the family refuses to leave on weekends. The client\'s words: "For the first time in three years, we cancelled a holiday because we didn\'t want to leave."',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85',
    ],
    credits: [
      { role: 'Lead Designer', name: 'Arjun Mehta' },
      { role: 'Project Designer', name: 'Priya Sharma' },
      { role: 'Photography', name: 'Studio Lens, Mumbai' },
    ],
  },
  'oblique-office': {
    title: 'Oblique Office, Gurgaon',
    location: 'Gurgaon',
    year: '2024',
    category: 'Commercial',
    area: '11,000 sq ft',
    headline: 'Where ambition lives.',
    challenge: 'A fast-growing fintech firm in a generic Grade A office building. Their culture was anything but generic — flat hierarchy, speed, debate. The brief: make the space as sharp as the team. The previous office had been beige in every sense.',
    approach: 'We used the floor plate\'s diagonal column grid as the conceptual driver — nothing in the space is orthogonal. Workstations angle toward natural light. Meeting rooms are triangular. The central collaboration spine runs diagonally across the entire floor. Raw concrete, warm oak, and a deliberate absence of acoustic panels keep the energy present and slightly electric.',
    outcome: 'Talent acquisition improved measurably. Candidates began citing the office as a reason for accepting offers. The CEO reported that investor meetings had become more productive — something in the room raises the energy in the room.',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=85',
    ],
    credits: [
      { role: 'Lead Designer', name: 'Karan Bose' },
      { role: 'Creative Direction', name: 'Priya Sharma' },
      { role: 'Photography', name: 'Nirmana Archive' },
    ],
  },
  'villa-karun': {
    title: 'Villa Karun',
    location: 'Alibag, Maharashtra',
    year: '2023',
    category: 'Residential',
    area: '6,800 sq ft',
    headline: 'Stone. Sea. Silence.',
    challenge: 'A coastal retreat that needed to breathe with the landscape rather than impose on it. The client\'s single instruction: "I want to feel the humidity and hear the waves from every room." Previous approaches had over-glazed the facade, creating a greenhouse.',
    approach: 'Thickened walls, deep overhangs, and terrazzo floors that cool underfoot. No air-conditioning in the primary rooms by design — cross-ventilation through strategic apertures. Materials sourced within 300km. Colour palette taken from the rocks at low tide: grey, rust, cream, and the dark green of coastal lichen.',
    outcome: 'A home that has been featured in three international publications and, more importantly, one its owner has not rented out once. He said: "Why would I give this to anyone else?"',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85',
    ],
    credits: [
      { role: 'Lead Designer', name: 'Arjun Mehta' },
      { role: 'Project Designer', name: 'Karan Bose' },
      { role: 'Photography', name: 'Dhruv Malik Photography' },
    ],
  },
};

export default function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const cs = caseStudyData[slug];

  if (!cs) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-center flex flex-col gap-4">
          <h1 className="font-cormorant text-4xl" style={{ color: 'var(--foreground)' }}>Project not found.</h1>
          <Link href="/case-study" className="font-sans text-[10px] tracking-[0.26em] uppercase" style={{ color: 'var(--accent)' }}>
            ← Back to all work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* Hero image — full screen */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src={cs.src}
          alt={cs.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)' }} />

        <div className="relative h-full flex flex-col justify-end px-10 pb-20 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <div className="flex gap-6">
              <span className="font-sans text-[9px] tracking-[0.26em] uppercase text-white/50">{cs.category}</span>
              <span className="font-sans text-[9px] tracking-[0.26em] uppercase text-white/50">{cs.location}</span>
              <span className="font-sans text-[9px] tracking-[0.26em] uppercase text-white/50">{cs.year}</span>
              <span className="font-sans text-[9px] tracking-[0.26em] uppercase text-white/50">{cs.area}</span>
            </div>
            <h1
              className="font-cormorant leading-[0.88] text-white"
              style={{ fontWeight: 500, fontSize: 'clamp(48px, 7vw, 110px)' }}
            >
              {cs.title}
            </h1>
            <p className="font-cormorant text-2xl italic text-white/60">
              {cs.headline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back link */}
      <div className="px-10 lg:px-20 pt-12 max-w-7xl mx-auto">
        <Link
          href="/case-study"
          className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.26em] uppercase transition-opacity duration-200 hover:opacity-50"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <ArrowLeft className="h-3 w-3" />
          All projects
        </Link>
      </div>

      {/* Body copy */}
      <section className="py-20 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 flex flex-col gap-12">
            {[
              { label: 'The challenge', body: cs.challenge },
              { label: 'Our approach', body: cs.approach },
              { label: 'The outcome', body: cs.outcome },
            ].map((section) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-3"
              >
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>
                  {section.label}
                </span>
                <p className="font-cormorant text-[18px] md:text-xl leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Credits sidebar */}
          <div className="lg:col-span-5 lg:col-start-9 flex flex-col gap-8 lg:pt-6">
            <div
              className="p-8 flex flex-col gap-6"
              style={{ border: '1px solid var(--border)' }}
            >
              <h3 className="font-sans text-[9px] tracking-[0.3em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
                Project credits
              </h3>
              {cs.credits.map((credit) => (
                <div key={credit.role} className="flex flex-col gap-0.5">
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
                    {credit.role}
                  </span>
                  <span className="font-cormorant text-[17px]" style={{ color: 'var(--foreground)', fontWeight: 400 }}>
                    {credit.name}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-between px-7 py-4 font-sans text-[10px] tracking-[0.26em] uppercase transition-all duration-200"
              style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--foreground)'; }}
            >
              Start your project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-32 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cs.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`relative overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
              style={{
                aspectRatio: i === 0 ? '16/7' : '4/3',
                borderRadius: '2px',
              }}
            >
              <Image
                src={src}
                alt={`${cs.title} — image ${i + 1}`}
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next project hint */}
      <section
        className="py-16 px-10 lg:px-20 flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
          More work
        </span>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-cormorant text-xl transition-opacity duration-200 hover:opacity-50"
          style={{ color: 'var(--foreground)', fontWeight: 400 }}
        >
          View all projects
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}