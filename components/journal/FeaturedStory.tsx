"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedStory() {
  return (
    <section className="px-6 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <Link href="/journal/silence-in-modern-homes">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden group"
            style={{ height: "min(85vh, 760px)" }}
          >
            {/* Image */}
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=90&w=1600"
              alt="Featured — What silence looks like in modern Indian homes"
              fill
              className="object-cover transition-transform duration-[2400ms] ease-out group-hover:scale-[1.025]"
              priority
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/25" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.04))" }}
            />

            {/* Watermark number */}
            <span
              className="absolute top-8 right-10 font-cormorant italic select-none pointer-events-none"
              style={{
                fontSize: "clamp(60px, 9vw, 110px)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.06)",
                lineHeight: 1,
              }}
            >
              01
            </span>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 lg:p-16 max-w-3xl">
              <div className="flex flex-col gap-7">
                <span className="font-sans text-[8px] tracking-[0.42em] uppercase text-white/55">
                  Featured Editorial
                </span>

                <h2
                  className="font-cormorant leading-[0.88] text-white"
                  style={{ fontSize: "clamp(50px, 7.5vw, 108px)", fontWeight: 500 }}
                >
                  What silence
                  <br />
                  looks like in
                  <br />
                  modern Indian homes
                </h2>

                <p className="font-sans text-[13px] leading-[1.9] text-white/60 max-w-sm font-light">
                  Luxury is no longer visual excess.
                  It is restraint with conviction.
                </p>

                <div className="flex items-center gap-4">
                  <span className="font-sans text-[7px] tracking-[0.36em] uppercase text-white/38">
                    May 2026
                  </span>
                  <div className="w-5 h-px bg-white/20" />
                  <span className="font-sans text-[7px] tracking-[0.36em] uppercase text-white/38">
                    6 min read
                  </span>
                  <div className="w-5 h-px bg-white/20" />
                  <span className="font-sans text-[7px] tracking-[0.36em] uppercase text-white/38">
                    Editorial
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}