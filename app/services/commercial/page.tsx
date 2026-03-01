'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  { title: 'Office & Workplace', description: 'Environments that draw people in rather than drain them out. We design for focus, collision, and culture.' },
  { title: 'Retail & Showroom', description: 'Spaces that sell without screaming. The right atmosphere converts browsers into believers.' },
  { title: 'Restaurant & Hospitality', description: 'Rooms that become the reason people come back — not just the food. Atmosphere as the fifth flavour.' },
  { title: 'Healthcare & Wellness', description: 'Where calm is the prescription. We design spaces that make people feel better before anything else begins.' },
];

export default function CommercialPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=90"
          alt="Commercial Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)' }} />
        <div className="relative h-full flex flex-col justify-end px-10 pb-24 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-white/50">
              Commercial Design
            </span>
            <h1
              className="font-cormorant leading-[0.9] text-white"
              style={{ fontWeight: 500, fontSize: 'clamp(52px, 7vw, 110px)' }}
            >
              Space that<br />
              <em>means</em> business.
            </h1>
            <p className="font-cormorant text-xl italic text-white/60 leading-relaxed max-w-sm">
              Your brand lives in your walls. We make sure it says the right thing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bold statement section */}
      <section className="py-32 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col gap-10">
            <h2
              className="font-cormorant leading-tight"
              style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(32px, 3.8vw, 58px)' }}
            >
              The most expensive mistake<br />
              a brand can make is<br />
              <em>a forgettable space.</em>
            </h2>
            <p className="font-cormorant text-[17px] leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.65 }}>
              Commercial interiors are not just functional requirements. They are brand statements, talent magnets, client first impressions. A poorly designed workspace costs more in attrition and lost deals than you'll ever spend on the right designer.
            </p>
            <p className="font-cormorant text-[17px] leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.65 }}>
              We have designed for startups raising Series A and multinationals redefining their culture. The scale differs. The intentionality never does.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '2px' }}>
              <Image
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=85"
                alt="Commercial space detail"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-48 h-48 flex items-center justify-center"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <span
                className="font-cormorant text-center text-white leading-tight"
                style={{ fontWeight: 300, fontSize: '13px', letterSpacing: '0.12em' }}
              >
                30,000+<br />sq ft<br /><em style={{ fontSize: '11px', opacity: 0.7 }}>designed commercially</em>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="py-24 px-10 lg:px-20"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto">
          <span className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-14" style={{ color: 'var(--muted-foreground)' }}>
            What we design
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid var(--border)' }}>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="p-10 md:p-12 flex flex-col gap-4 group cursor-default"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span className="font-sans text-[9px] tracking-[0.26em] uppercase" style={{ color: 'var(--accent)' }}>
                  0{i + 1}
                </span>
                <h3
                  className="font-cormorant text-2xl md:text-[28px]"
                  style={{ color: 'var(--foreground)', fontWeight: 500 }}
                >
                  {cap.title}
                </h3>
                <p
                  className="font-cormorant text-[16px] italic leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project highlight */}
      <section className="py-24 px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="relative overflow-hidden h-[60vh]" style={{ borderRadius: '2px' }}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
            alt="Featured commercial project"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-10 md:p-14"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }}
          >
            <span className="font-sans text-[9px] tracking-[0.26em] uppercase text-white/50 mb-2">
              Featured — Commercial
            </span>
            <h3 className="font-cormorant text-4xl md:text-5xl text-white" style={{ fontWeight: 400 }}>
              Oblique Office, Gurgaon
            </h3>
            <p className="font-cormorant text-lg italic text-white/60 mt-1 mb-5">
              11,000 sq ft of deliberate culture.
            </p>
            <Link
              href="/case-study/oblique-office"
              className="group inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.26em] uppercase text-white/70 hover:text-white transition-colors duration-200 w-fit"
            >
              View case study
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-10 lg:px-20 text-center" style={{ backgroundColor: 'var(--foreground)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 max-w-xl mx-auto"
        >
          <h2
            className="font-cormorant leading-[0.92]"
            style={{ color: 'var(--background)', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Let's build something<br />
            <em>your people remember.</em>
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