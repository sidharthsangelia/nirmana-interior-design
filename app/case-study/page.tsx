'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    slug: 'mehta-residence',
    title: 'The Mehta Residence',
    location: 'New Delhi',
    year: '2024',
    category: 'Residential',
    area: '4,200 sq ft',
    headline: 'Raw marble. Brutal calm.',
    challenge: 'A family of five living in a house built for impression, not for living. The client wanted something that felt less like a magazine spread and more like an exhale.',
    approach: 'We stripped the palette to three materials: Calacatta marble, unlacquered brass, and aged Belgian linen. Every decision was filtered through a single question: does it make you want to stay?',
    outcome: 'A home that photographs magnificently but — more importantly — one that the family refuses to leave on weekends.',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80',
    ],
  },
  {
    slug: 'oblique-office',
    title: 'Oblique Office, Gurgaon',
    location: 'Gurgaon',
    year: '2024',
    category: 'Commercial',
    area: '11,000 sq ft',
    headline: 'Where ambition lives.',
    challenge: 'A fast-growing fintech firm in a generic Grade A office building. Their culture was anything but generic. The brief: make the space as sharp as the team.',
    approach: 'We used the floor plate\'s diagonal column grid as the conceptual driver — nothing in the space is orthogonal. Raw concrete, warm oak, and a deliberate absence of acoustic panels keep the energy present.',
    outcome: 'Talent acquisition improved measurably. Candidates began citing the office as a reason for accepting offers.',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80',
    ],
  },
  {
    slug: 'villa-karun',
    title: 'Villa Karun',
    location: 'Alibag, Maharashtra',
    year: '2023',
    category: 'Residential',
    area: '6,800 sq ft',
    headline: 'Stone. Sea. Silence.',
    challenge: 'A coastal retreat that needed to breathe with the landscape rather than impose on it. The client\'s single instruction: "I want to feel the humidity and hear the waves from every room."',
    approach: 'Thickened walls, deep overhangs, and terrazzo floors that cool underfoot. No air-conditioning in the primary rooms by design. Materials sourced within 300km. Colour palette taken from the rocks at low tide.',
    outcome: 'A home that has been featured in three international publications and, more importantly, one its owner has not rented out once.',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80',
    ],
  },
];

export default function CaseStudyPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <section className="pt-40 pb-20 px-10 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-[10px] tracking-[0.32em] uppercase block mb-5" style={{ color: 'var(--muted-foreground)' }}>
            Deep Dives — Selected Projects
          </span>
          <h1
            className="font-cormorant leading-[0.88]"
            style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(52px, 7.5vw, 120px)' }}
          >
            The work,<br />
            <em>unfiltered.</em>
          </h1>
        </motion.div>
      </section>

      {/* Case study list */}
      <section className="pb-40 px-10 lg:px-20 max-w-7xl mx-auto flex flex-col gap-0" style={{ borderTop: '1px solid var(--border)' }}>
        {caseStudies.map((cs, i) => (
          <CaseStudyRow key={cs.slug} cs={cs} index={i} total={caseStudies.length} />
        ))}
      </section>
    </main>
  );
}

function CaseStudyRow({
  cs,
  index,
  total,
}: {
  cs: typeof caseStudies[0];
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.7 }}
    >
      <Link
        href={`/case-study/${cs.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 md:py-16"
        style={{ borderBottom: index < total - 1 ? '1px solid var(--border)' : 'none' }}
      >
        {/* Image */}
        <div className="lg:col-span-4 relative aspect-[16/10] overflow-hidden" style={{ borderRadius: '2px' }}>
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={cs.src}
              alt={cs.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <div
            className="absolute top-3 left-3 px-2.5 py-1"
            style={{ backgroundColor: 'color-mix(in oklch, var(--background) 85%, transparent)', backdropFilter: 'blur(8px)' }}
          >
            <span className="font-sans text-[8px] tracking-[0.24em] uppercase" style={{ color: 'var(--foreground)' }}>
              {cs.category}
            </span>
          </div>
        </div>

        {/* Meta + title */}
        <div className="lg:col-span-3 flex flex-col justify-between py-1">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9px] tracking-[0.26em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
              {cs.location}
            </span>
            <span className="font-sans text-[9px] tracking-[0.26em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
              {cs.year} — {cs.area}
            </span>
          </div>
          <h2
            className="font-cormorant leading-tight"
            style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(22px, 2.5vw, 36px)' }}
          >
            {cs.title}
          </h2>
        </div>

        {/* Excerpt + CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between py-1 gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-cormorant text-2xl italic" style={{ color: 'var(--foreground)' }}>
              "{cs.headline}"
            </p>
            <p className="font-cormorant text-[16px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              {cs.challenge}
            </p>
          </div>
          <span
            className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.26em] uppercase transition-opacity duration-200 group-hover:opacity-50 w-fit"
            style={{ color: 'var(--accent)' }}
          >
            Read case study
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}