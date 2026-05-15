"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "The Mehta Residence",
    location: "New Delhi",
    category: "Residential",
    year: "2024",
    area: "4,200 sq ft",
    // Dramatic marble staircase with brutal calm — exactly right for this brief
    tag: "Where marble learns to breathe.",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=90",
    href: "/case-study/mehta-residence",
  },
  {
    id: "02",
    title: "Oblique Office, Gurgaon",
    location: "Gurgaon",
    category: "Commercial",
    year: "2024",
    area: "11,000 sq ft",
    // Clean, architecturally strong office interior with confident geometry
    tag: "Ambition has an address now.",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90",
    href: "/case-study/oblique-office",
  },
  {
    id: "03",
    title: "Villa Karun",
    location: "Alibag, Maharashtra",
    category: "Residential",
    year: "2023",
    area: "6,800 sq ft",
    // Stone villa with ocean context — warm, elemental, grounded
    tag: "Stone holds what the sea cannot.",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90",
    href: "/case-study/villa-karun",
  },
  {
    id: "04",
    title: "The Aranya Hotel",
    location: "Jaipur",
    category: "Hospitality",
    year: "2023",
    area: "28,000 sq ft",
    // Grand hotel lobby with palatial scale and warm light
    tag: "Opulence with nothing to prove.",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=90",
    href: "/case-study/aranya-hotel",
  },
  {
    id: "05",
    title: "Penthouse, Worli",
    location: "Mumbai",
    category: "Residential",
    year: "2023",
    area: "3,600 sq ft",
    // High-rise minimal interior — restraint at altitude
    tag: "The city shrinks. The room expands.",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=90",
    href: "/case-study/penthouse-worli",
  },
  {
    id: "06",
    title: "Sūtra Spa and Wellness",
    location: "Bangalore",
    category: "Commercial",
    year: "2022",
    area: "5,400 sq ft",
    // Serene spa with warm light and natural textures
    tag: "Silence, designed from the inside out.",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=90",
    href: "/case-study/sutra-spa",
  },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main style={{ backgroundColor: "var(--background)" }}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span
              className="font-sans text-[9px] tracking-[0.36em] uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Selected Works
            </span>
            <span
              className="h-px flex-1 max-w-[48px]"
              style={{ backgroundColor: "var(--border)" }}
            />
            <span
              className="font-sans text-[9px] tracking-[0.36em] uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              2019 to 2024
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-cormorant leading-[0.86]"
            style={{
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: "clamp(56px, 8.5vw, 128px)",
              letterSpacing: "-0.01em",
            }}
          >
            Every room
            <br />
            <em>holds a story.</em>
            <br />
            We are its authors.
          </h1>

          {/* Subline */}
          <p
            className="font-sans text-sm leading-relaxed max-w-sm"
            style={{
              color: "var(--muted-foreground)",
              letterSpacing: "0.01em",
            }}
          >
            Six commissions across five cities. Each one approached as if it
            were the only one.
          </p>
        </motion.div>
      </section>

      {/* ── Filter bar ───────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-0"
          style={{
            border: "1px solid var(--border)",
            width: "fit-content",
          }}
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-6 py-2.5 font-sans text-[9px] tracking-[0.26em] uppercase transition-all duration-300"
              style={{
                color:
                  activeCategory === cat
                    ? "var(--accent-foreground)"
                    : "var(--muted-foreground)",
                backgroundColor:
                  activeCategory === cat ? "var(--accent)" : "transparent",
                borderRight:
                  i < categories.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Project Grid ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-40">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ border: "1px solid var(--border)" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isHovered={hoveredId === project.id}
                onHover={setHoveredId}
                totalFiltered={filtered.length}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-between pt-10"
        >
          <span
            className="font-sans text-[9px] tracking-[0.28em] uppercase"
            style={{ color: "var(--muted-foreground)" }}
          >
            {filtered.length} of {projects.length} projects shown
          </span>
          <div
            className="h-px flex-1 mx-8"
            style={{ backgroundColor: "var(--border)", opacity: 0.5 }}
          />
          <span
            className="font-cormorant text-sm italic"
            style={{ color: "var(--muted-foreground)" }}
          >
            Each one a statement.
          </span>
        </motion.div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */

function ProjectCard({
  project,
  index,
  isHovered,

  onHover,
  totalFiltered,
}: {
  project: (typeof projects)[0];
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  totalFiltered: number;
}) {
  const isRightColumn = index % 2 !== 0;
  // Offset every right-column card downward for editorial stagger
  const verticalOffset = isRightColumn ? 48 : 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        delay: index * 0.06,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ marginTop: verticalOffset }}
    >
      <Link
        href={project.href}
        prefetch={false}
        className="group relative block overflow-hidden"
        style={{
          borderRight: !isRightColumn ? "1px solid var(--border)" : "none",
          borderBottom: "1px solid var(--border)",
        }}
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
      >
        {/* ── Image area ── */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          {/* Image with zoom */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2}
            />
          </motion.div>

          {/* Subtle vignette always on */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
            }}
          />

          {/* Hover overlay — reveals the tag line */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            style={{ backgroundColor: "rgba(0,0,0,0.28)" }}
          >
            <p
              className="font-cormorant text-2xl italic text-center px-8 leading-snug"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              {project.tag}
            </p>
          </motion.div>

          {/* Category badge — top left */}
          <div
            className="absolute top-5 left-5 px-3 py-1.5"
            style={{
              backgroundColor:
                "color-mix(in oklch, var(--background) 80%, transparent)",
              backdropFilter: "blur(6px)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="font-sans text-[8px] tracking-[0.28em] uppercase"
              style={{ color: "var(--foreground)" }}
            >
              {project.category}
            </span>
          </div>

          {/* Index — top right */}
          <div className="absolute top-5 right-5">
            <span
              className="font-cormorant text-xs tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
            >
              {project.id}
            </span>
          </div>

          {/* Area — bottom left, always visible */}
          <div className="absolute bottom-5 left-5">
            <span
              className="font-sans text-[8px] tracking-[0.24em] uppercase"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {project.area}
            </span>
          </div>
        </div>

        {/* ── Info strip ── */}
        <div
          className="flex items-end justify-between px-7 py-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-col gap-1">
            {/* Location + year */}
            <p
              className="font-sans text-[8px] tracking-[0.28em] uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              {project.location} &nbsp;·&nbsp; {project.year}
            </p>

            {/* Title */}
            <h3
              className="font-cormorant leading-tight"
              style={{
                color: "var(--foreground)",
                fontWeight: 500,
                fontSize: "clamp(22px, 2.2vw, 30px)",
              }}
            >
              {project.title}
            </h3>
          </div>

          {/* Arrow — animated in on hover */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-1 flex-shrink-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              style={{ color: "var(--accent)" }}
            >
              <path
                d="M3.75 14.25L14.25 3.75M14.25 3.75H6.75M14.25 3.75V11.25"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
