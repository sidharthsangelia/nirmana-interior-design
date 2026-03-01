'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const process = [
  { step: '01', title: 'Discovery', body: 'Two hours. No brief. Just conversation. We ask the questions no decorator ever asks — how do you move through your morning? What does quiet mean to you?' },
  { step: '02', title: 'Spatial Strategy', body: 'Before a single material is chosen, we map the architecture of living. Traffic flows, light hours, volumes. The bones have to be right.' },
  { step: '03', title: 'Material Curation', body: 'We travel. We source. We reject 90% of what we find. What remains is a precise palette chosen for character, longevity, and feeling.' },
  { step: '04', title: 'Execution', body: 'We remain on-site through installation. There is no handing off. The details at the end are the details that define the work.' },
];

export default function ResidentialPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=90"
          alt="Residential Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 100%)' }} />
        <div className="relative h-full flex flex-col justify-end px-10 pb-24 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-white/50">
              Residential Design
            </span>
            <h1
              className="font-cormorant leading-[0.9] text-white"
              style={{ fontWeight: 500, fontSize: 'clamp(52px, 7vw, 110px)' }}
            >
              Homes that hold<br />
              <em>you differently.</em>
            </h1>
            <p className="font-cormorant text-xl italic text-white/60 leading-relaxed max-w-sm">
              Not a showroom. Not a stage. A space that softens the world outside its door.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-32 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2
              className="font-cormorant leading-tight"
              style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(32px, 3.5vw, 54px)' }}
            >
              Your home is the only space that exists<br />
              <em>entirely for you.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3 flex flex-col gap-5">
            <p className="font-cormorant text-[17px] leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.65 }}>
              We approach every residential commission as an exercise in radical personalisation. There are no signature styles, no moods we impose. What we bring is a methodology — rigorous, tactile, slow — that arrives at an interior that could exist nowhere else but here, for nobody else but you.
            </p>
            <p className="font-cormorant text-[17px] leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.65 }}>
              We work on 3–4 residential projects per year. This is a deliberate choice.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-4 font-sans text-[10px] tracking-[0.28em] uppercase transition-opacity duration-200 hover:opacity-50"
              style={{ color: 'var(--accent)' }}
            >
              Enquire about your project
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24 px-10 lg:px-20"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto">
          <span className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-14" style={{ color: 'var(--muted-foreground)' }}>
            Our residential process
          </span>
          <div className="flex flex-col">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="grid grid-cols-12 gap-6 py-10"
                style={{ borderBottom: i < process.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <span className="col-span-1 font-cormorant text-[11px] tracking-[0.24em] pt-1" style={{ color: 'var(--accent)' }}>
                  {item.step}
                </span>
                <h3 className="col-span-4 font-cormorant text-2xl md:text-3xl" style={{ color: 'var(--foreground)', fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p className="col-span-7 font-cormorant text-[17px] italic leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery strip */}
      <section className="py-20 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {[
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden" style={{ aspectRatio: i === 1 ? '3/4' : '4/5', borderRadius: '2px' }}>
              <Image src={src} alt="Interior detail" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-10 lg:px-20 text-center" style={{ backgroundColor: 'var(--foreground)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 max-w-2xl mx-auto"
        >
          <h2
            className="font-cormorant leading-[0.92]"
            style={{ color: 'var(--background)', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 76px)' }}
          >
            Ready to live inside something<br /><em>extraordinary?</em>
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-sans text-[10px] tracking-[0.3em] uppercase transition-all duration-300"
            style={{
              border: '1px solid color-mix(in oklch, var(--background) 40%, transparent)',
              color: 'var(--background)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'color-mix(in oklch, var(--background) 40%, transparent)'; }}
          >
            Start the conversation
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}