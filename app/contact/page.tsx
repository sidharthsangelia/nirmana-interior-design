'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const contactDetails = [
  { label: 'Email', value: 'hello@nirmanastudio.com', href: 'mailto:hello@nirmanastudio.com' },
  { label: 'Phone', value: '+91 12345 67890', href: 'tel:+911234567890' },
  { label: 'Studio', value: 'Mehrauli, New Delhi — 110030', href: '#' },
];

const notices = [
  'We respond within 48 hours.',
  'We take on very few projects each year.',
  'Every enquiry is read by the principals.',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      {/* ─── Mobile: stacked. Desktop: side-by-side ────────────────── */}
      <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2">

        {/* ── Left — Dark statement panel ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col justify-between px-8 py-20 sm:px-12 lg:px-16 lg:py-40"
          style={{
            backgroundColor: 'var(--foreground)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Top content */}
          <div className="flex flex-col gap-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="font-sans text-[9px] tracking-[0.36em] uppercase"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              Begin here
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-cormorant leading-[0.9]"
              style={{
                color: 'var(--background)',
                fontWeight: 500,
                fontSize: 'clamp(46px, 6vw, 96px)',
              }}
            >
              Your next
              <br />
              space
              <br />
              <em>starts with</em>
              <br />
              a conversation.
            </motion.h1>

            {/* Small notices */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col gap-2 mt-2"
            >
              {notices.map((n) => (
                <li key={n} className="flex items-center gap-3">
                  <span
                    style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0 }}
                  />
                  <span
                    className="font-cormorant italic text-[14px]"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                  >
                    {n}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Bottom: contact details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col gap-6 mt-16 lg:mt-0"
          >
            <div style={{ width: 40, height: 1, backgroundColor: 'var(--accent)', opacity: 0.7 }} />
            {contactDetails.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span
                  className="font-sans text-[8px] tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {item.label}
                </span>
                <a
                  href={item.href}
                  className="font-cormorant text-[17px] inline-flex items-center gap-1.5 group transition-opacity duration-200 hover:opacity-50"
                  style={{ color: 'var(--background)', fontWeight: 400 }}
                >
                  {item.value}
                  {item.href !== '#' && (
                    <ArrowUpRight
                      className="h-3 w-3 opacity-30 group-hover:opacity-80 transition-opacity"
                    />
                  )}
                </a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right — Form ─────────────────────────────────────────── */}
        <div
          className="flex flex-col justify-center px-8 py-20 sm:px-12 lg:px-16 lg:py-40"
          style={{ borderLeft: '1px solid var(--border)' }}
        >
          {sent ? (
            /* ── Success state ─────────────────────────────────────── */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 max-w-md"
            >
              <div style={{ width: 40, height: 1, backgroundColor: 'var(--accent)' }} />
              <h2
                className="font-cormorant leading-[1.0]"
                style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(38px, 4vw, 60px)' }}
              >
                We'll be
                <br />
                <em>in touch.</em>
              </h2>
              <p
                className="font-cormorant text-[17px] italic leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Expect a response within 48 hours.
                <br />
                Good things take a little time.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', projectType: '', budget: '', message: '' }); }}
                className="font-sans text-[9px] tracking-[0.28em] uppercase inline-flex items-center gap-3 mt-2 group"
                style={{ color: 'var(--muted-foreground)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Send another
                <span
                  className="block transition-all duration-400 group-hover:w-8"
                  style={{ width: 24, height: 1, backgroundColor: 'var(--muted-foreground)' }}
                />
              </button>
            </motion.div>
          ) : (
            /* ── Form ──────────────────────────────────────────────── */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-10 max-w-lg w-full"
            >
              {/* Header */}
              <div className="flex flex-col gap-3">
                <span
                  className="font-sans text-[9px] tracking-[0.3em] uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  Tell us about your project
                </span>
                <h2
                  className="font-cormorant leading-[1.0]"
                  style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(30px, 3.5vw, 48px)' }}
                >
                  We take on a
                  <br />
                  <em>discerning few</em> each year.
                </h2>
              </div>

              {/* Form fields */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Email address"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <SelectField
                    label="Project type"
                    value={form.projectType}
                    onChange={(v) => setForm({ ...form, projectType: v })}
                    options={['Residential', 'Commercial', 'Hospitality', 'Consultation']}
                  />
                  <SelectField
                    label="Approximate budget"
                    value={form.budget}
                    onChange={(v) => setForm({ ...form, budget: v })}
                    options={['₹25L – ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹3Cr', '₹3Cr+']}
                  />
                </div>

                {/* Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-sans text-[9px] tracking-[0.24em] uppercase"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Tell us more
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="The space, your vision, anything else we should know..."
                    className="resize-none px-4 py-3 font-cormorant text-base outline-none transition-colors duration-200"
                    style={{
                      backgroundColor: 'var(--input)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                      borderRadius: '2px',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                </div>

                {/* Submit */}
                <SubmitButton />
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────── */

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="font-sans text-[9px] tracking-[0.24em] uppercase"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 font-cormorant text-base outline-none transition-colors duration-200 w-full"
        style={{
          backgroundColor: 'var(--input)',
          border: '1px solid var(--border)',
          color: 'var(--foreground)',
          borderRadius: '2px',
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="font-sans text-[9px] tracking-[0.24em] uppercase"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-4 py-3 font-cormorant text-base outline-none transition-colors duration-200 w-full appearance-none"
          style={{
            backgroundColor: 'var(--input)',
            border: '1px solid var(--border)',
            color: value ? 'var(--foreground)' : 'var(--muted-foreground)',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
        >
          <option value="" disabled>Select...</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {/* Custom chevron */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-center justify-between px-7 py-4 font-sans text-[10px] tracking-[0.32em] uppercase transition-all duration-300 w-full sm:w-auto"
      style={{
        backgroundColor: hovered ? 'var(--accent)' : 'var(--foreground)',
        color: 'var(--background)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--foreground)'}`,
        borderRadius: '2px',
      }}
    >
      Send enquiry
      <ArrowUpRight
        className="h-4 w-4 ml-6 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </button>
  );
}