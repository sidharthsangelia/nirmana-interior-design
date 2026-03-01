'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
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
    title: 'Oblique Office, Gurgaon',
    location: 'Gurgaon',
    category: 'Commercial',
    year: '2024',
    area: '11,000 sq ft',
    tag: 'Where ambition lives.',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85',
    href: '/case-study/oblique-office',
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
  {
    id: '04',
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
    id: '05',
    title: 'Penthouse, Worli',
    location: 'Mumbai',
    category: 'Residential',
    year: '2023',
    area: '3,600 sq ft',
    tag: 'Sky-high restraint.',
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85',
    href: '/case-study/penthouse-worli',
  },
  {
    id: '06',
    title: 'Sūtra Spa & Wellness',
    location: 'Bangalore',
    category: 'Commercial',
    year: '2022',
    area: '5,400 sq ft',
    tag: 'The body remembers beauty.',
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=85',
    href: '/case-study/sutra-spa',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span
            className="font-sans text-[10px] tracking-[0.32em] uppercase"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Selected Works — 2019–2024
          </span>
          <h1
            className="font-cormorant leading-[0.88]"
            style={{
              color: 'var(--foreground)',
              fontWeight: 500,
              fontSize: 'clamp(64px, 9vw, 140px)',
            }}
          >
            Every room<br />
            <em>tells a story.</em><br />
            We write it.
          </h1>
        </motion.div>
      </section>

      {/* Filter bar */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
        <div
          className="flex items-center gap-1 p-1 w-fit"
          style={{
            border: '1px solid var(--border)',
            borderRadius: '2px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-5 py-2 font-sans text-[10px] tracking-[0.22em] uppercase transition-colors duration-200"
              style={{
                color: activeCategory === cat ? 'var(--accent-foreground)' : 'var(--muted-foreground)',
                backgroundColor: activeCategory === cat ? 'var(--accent)' : 'transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid var(--border)' }}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isHovered={hoveredId === project.id}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
}: {
  project: typeof projects[0];
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={project.href}
        prefetch={false}
        className="group relative block overflow-hidden"
        style={{
          borderRight: index % 2 === 0 ? '1px solid var(--border)' : 'none',
          borderBottom: '1px solid var(--border)',
        }}
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
      >
        {/* Image */}
        <div className="relative h-[52vw] md:h-[38vw] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.04 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Category badge */}
          <div
            className="absolute top-5 left-5 px-3 py-1.5"
            style={{
              backgroundColor: 'color-mix(in oklch, var(--background) 88%, transparent)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border)',
            }}
          >
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase" style={{ color: 'var(--foreground)' }}>
              {project.category}
            </span>
          </div>

          {/* Index */}
          <div className="absolute top-5 right-5">
            <span
              className="font-cormorant text-[11px] tracking-[0.2em]"
              style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}
            >
              {project.id}
            </span>
          </div>
        </div>

        {/* Info */}
        <div
          className="flex items-end justify-between p-6 md:p-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex flex-col gap-1.5">
            <p
              className="font-sans text-[9px] tracking-[0.26em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {project.location} — {project.year}
            </p>
            <h3
              className="font-cormorant text-2xl md:text-3xl leading-tight"
              style={{ color: 'var(--foreground)', fontWeight: 500 }}
            >
              {project.title}
            </h3>
            <p
              className="font-cormorant text-base italic"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {project.tag}
            </p>
          </div>

          <motion.div
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 8 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="h-5 w-5" style={{ color: 'var(--accent)' }} />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}