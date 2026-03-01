'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin, MessageCircle } from 'lucide-react';

const formats = [
  {
    icon: <Clock className="h-4 w-4" />,
    title: 'The 2-Hour Session',
    price: '₹25,000',
    description: 'An in-person conversation at your space or ours. We listen, observe, and leave you with a clear directional vision — written, specific, actionable.',
    ideal: 'Ideal for: Early-stage planning, a second opinion, or a gut-check before committing.',
  },
  {
    icon: <MessageCircle className="h-4 w-4" />,
    title: 'The Design Audit',
    price: '₹55,000',
    description: 'We spend a day in your space. We document everything — what\'s working, what\'s fighting itself, what\'s missing entirely. You receive a comprehensive written audit with annotated floor plan.',
    ideal: 'Ideal for: Existing spaces that feel off but you can\'t identify why.',
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    title: 'The Direction Package',
    price: '₹1,20,000',
    description: 'Three sessions across four weeks. We develop a full design direction: mood board, material palette, spatial strategy, sourcing guide. Ready to hand to any contractor or execute yourself.',
    ideal: 'Ideal for: Those who want professional vision but prefer to manage execution.',
  },
];

const faqs = [
  { q: 'Do consultations lead to full projects?', a: 'Sometimes. We never make that a condition. If you want a one-time engagement, that is exactly what you receive.' },
  { q: 'Do you travel for consultations?', a: 'Yes, within India. Travel costs are billed separately at actuals. We find that being in the space transforms the quality of advice.' },
  { q: 'How quickly can we start?', a: 'We typically have consultation slots within 2–3 weeks. Full projects have longer timelines. Either way, reach out first.' },
  { q: 'What if I just have one specific question?', a: 'We offer a free 20-minute exploratory call. No commitment. No pitch. Just a conversation to see if we\'re the right fit.' },
];

export default function ConsultationPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>

      {/* Hero */}
      <section className="pt-44 pb-20 px-10 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <span className="font-sans text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
            Consultation Services
          </span>
          <h1
            className="font-cormorant leading-[0.88]"
            style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(56px, 8vw, 120px)' }}
          >
            Not every space<br />
            needs a full<br />
            <em>commission.</em>
          </h1>
          <p
            className="font-cormorant text-xl italic leading-relaxed max-w-lg"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Sometimes you just need the right person to walk through a door and tell you exactly what it needs.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="h-px w-full" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      {/* Formats */}
      <section className="py-24 px-10 lg:px-20 max-w-7xl mx-auto">
        <span className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-14" style={{ color: 'var(--muted-foreground)' }}>
          Three ways to work with us
        </span>
        <div className="flex flex-col gap-px" style={{ border: '1px solid var(--border)' }}>
          {formats.map((fmt, i) => (
            <motion.div
              key={fmt.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 md:p-12 group"
              style={{ borderBottom: i < formats.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              <div className="lg:col-span-1 flex items-start pt-1">
                <span style={{ color: 'var(--accent)' }}>{fmt.icon}</span>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-2">
                <h3 className="font-cormorant text-2xl md:text-3xl" style={{ color: 'var(--foreground)', fontWeight: 500 }}>
                  {fmt.title}
                </h3>
                <span className="font-cormorant text-2xl" style={{ color: 'var(--accent)', fontWeight: 300 }}>
                  {fmt.price}
                </span>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                <p className="font-cormorant text-[17px] leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  {fmt.description}
                </p>
                <p className="font-sans text-[10px] tracking-[0.14em]" style={{ color: 'var(--muted-foreground)' }}>
                  {fmt.ideal}
                </p>
                <Link
                  href="/contact"
                  className="group/link mt-2 inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.26em] uppercase transition-opacity duration-200 hover:opacity-50 w-fit"
                  style={{ color: 'var(--accent)' }}
                >
                  Book this
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Free call CTA banner */}
      <section
        className="mx-10 lg:mx-20 mb-24 p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{
          backgroundColor: 'var(--accent)',
          borderRadius: '2px',
        }}
      >
        <div className="flex flex-col gap-2">
          <h3
            className="font-cormorant text-3xl md:text-4xl text-white leading-tight"
            style={{ fontWeight: 500 }}
          >
            Not sure which is right?<br />
            <em>Start with a free call.</em>
          </h3>
          <p className="font-cormorant text-base italic text-white/70">
            20 minutes. No commitment. Genuine advice.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-3 px-7 py-3.5 font-sans text-[10px] tracking-[0.28em] uppercase transition-all duration-200"
          style={{
            backgroundColor: 'white',
            color: 'var(--accent)',
          }}
        >
          Book free call
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      {/* FAQ */}
      <section
        className="py-24 px-10 lg:px-20"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto">
          <span className="font-sans text-[9px] tracking-[0.32em] uppercase block mb-14" style={{ color: 'var(--muted-foreground)' }}>
            Common questions
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-3"
              >
                <h4 className="font-cormorant text-xl" style={{ color: 'var(--foreground)', fontWeight: 500 }}>
                  {faq.q}
                </h4>
                <p className="font-cormorant text-[16px] italic leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}