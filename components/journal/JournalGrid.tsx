"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { categories, journalPosts } from "@/lib/jounralData";
 

// ─── Filter Bar ────────────────────────────────────────────────────────────────

function FilterBar({
  active,
  setActive,
  count,
}: {
  active: string;
  setActive: (c: string) => void;
  count: number;
}) {
  return (
    <div
      className="flex items-center flex-wrap gap-2 pb-6 mb-16"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className="px-5 py-2 transition-all duration-500"
          style={{
            border: "1px solid var(--border)",
            borderColor: active === cat ? "var(--border)" : "transparent",
            color: active === cat ? "var(--foreground)" : "var(--muted-foreground)",
            background: active === cat ? "rgba(255,255,255,0.03)" : "transparent",
          }}
        >
          <span className="font-sans text-[8px] uppercase tracking-[0.38em]">{cat}</span>
        </button>
      ))}

      <span
        className="ml-auto font-sans text-[8px] uppercase tracking-[0.28em]"
        style={{ color: "var(--border)" }}
      >
        {count} {count === 1 ? "Essay" : "Essays"}
      </span>
    </div>
  );
}

// ─── Post Card ─────────────────────────────────────────────────────────────────

function PostCard({
  post,
  index,
}: {
  post: (typeof journalPosts)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 2) * 0.12,
      }}
      viewport={{ once: true, margin: "-60px" }}
      style={{ marginTop: index % 2 !== 0 ? "clamp(60px, 8vw, 120px)" : 0 }}
    >
      <Link href={`/journal/${post.slug}`} className="group block">
        <article className="flex flex-col gap-6">

          {/* Image */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: post.tall ? "4/5" : "16/10" }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between">
            <span
              className="font-sans text-[8px] uppercase tracking-[0.38em]"
              style={{ color: "var(--muted-foreground)" }}
            >
              {post.category}
            </span>
            <span
              className="font-sans text-[8px] uppercase tracking-[0.28em]"
              style={{ color: "var(--border)" }}
            >
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-cormorant leading-[0.96] transition-opacity duration-500 group-hover:opacity-60"
            style={{
              fontSize: "clamp(32px, 3vw, 52px)",
              fontWeight: 500,
              color: "var(--foreground)",
            }}
          >
            {post.title}
          </h2>

          {/* Excerpt — optional */}
          {post.showExcerpt && (
            <p
              className="font-sans text-[13px] leading-[1.9] max-w-xs font-light"
              style={{ color: "var(--muted-foreground)" }}
            >
              {post.excerpt}
            </p>
          )}

          {/* Read link */}
          <div
            className="inline-flex items-center gap-3"
            style={{ color: "var(--muted-foreground)" }}
          >
            <div
              className="h-px transition-all duration-500 ease-out group-hover:w-10"
              style={{ width: 24, backgroundColor: "var(--border)" }}
            />
            <span className="font-sans text-[7px] uppercase tracking-[0.38em]">
              {post.readTime}
            </span>
          </div>

        </article>
      </Link>
    </motion.div>
  );
}

// ─── Grid ──────────────────────────────────────────────────────────────────────

export default function JournalGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? journalPosts
      : journalPosts.filter((p) => p.category === active);

  return (
    <section className="px-6 lg:px-16 pb-44">
      <div className="max-w-7xl mx-auto">

        <FilterBar active={active} setActive={setActive} count={filtered.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-20"
          >
            {filtered.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}