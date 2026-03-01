'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* Left — Statement */}
        <div
          className="relative flex flex-col justify-between px-10 py-32 lg:px-16 lg:py-40"
          style={{ backgroundColor: 'var(--foreground)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex flex-col gap-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-[9px] tracking-[0.34em] uppercase"
              style={{ color: 'color-mix(in oklch, var(--background) 40%, transparent)' }}
            >
              Begin here
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-cormorant leading-[0.88]"
              style={{ color: 'var(--background)', fontWeight: 500, fontSize: 'clamp(52px, 6.5vw, 100px)' }}
            >
              Your next<br />
              space<br />
              <em>starts with</em><br />
              a conversation.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div
              className="h-px w-10 mb-4"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            {[
              { label: 'Email', value: 'hello@nirmanastudio.com', href: 'mailto:hello@nirmanastudio.com' },
              { label: 'Phone', value: '+91 12345 67890', href: 'tel:+911234567890' },
              { label: 'Studio', value: 'Mehrauli, New Delhi — 110030', href: '#' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span
                  className="font-sans text-[8px] tracking-[0.3em] uppercase"
                  style={{ color: 'color-mix(in oklch, var(--background) 30%, transparent)' }}
                >
                  {item.label}
                </span>
                <a
                  href={item.href}
                  className="font-cormorant text-[17px] tracking-wide group inline-flex items-center gap-1 transition-opacity duration-200 hover:opacity-50"
                  style={{ color: 'var(--background)', fontWeight: 400 }}
                >
                  {item.value}
                  <ArrowUpRight className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Form */}
        <div className="flex flex-col justify-center px-10 py-32 lg:px-16 lg:py-40">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-5"
            >
              <div className="h-px w-12" style={{ backgroundColor: 'var(--accent)' }} />
              <h2
                className="font-cormorant text-4xl md:text-5xl"
                style={{ color: 'var(--foreground)', fontWeight: 500 }}
              >
                We'll be<br /><em>in touch.</em>
              </h2>
              <p
                className="font-cormorant text-[17px] italic leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Expect a response within 48 hours. Good things take a little time.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[9px] tracking-[0.28em] uppercase" style={{ color: 'var(--muted-foreground)' }}>
                  Tell us about your project
                </span>
                <h2
                  className="font-cormorant text-3xl md:text-4xl"
                  style={{ color: 'var(--foreground)', fontWeight: 500 }}
                >
                  We take on five<br /><em>projects a year.</em>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-sans text-[9px] tracking-[0.24em] uppercase"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Tell us more
                </label>
                <textarea
                  rows={4}
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

              <button
                type="submit"
                className="group flex items-center justify-between px-7 py-4 font-sans text-[10px] tracking-[0.3em] uppercase transition-all duration-300"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                  border: '1px solid var(--foreground)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--foreground)';
                  e.currentTarget.style.borderColor = 'var(--foreground)';
                }}
              >
                Send enquiry
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </main>
  );
}

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
        className="px-4 py-3 font-cormorant text-base outline-none transition-colors duration-200"
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
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 font-cormorant text-base outline-none transition-colors duration-200"
        style={{
          backgroundColor: 'var(--input)',
          border: '1px solid var(--border)',
          color: value ? 'var(--foreground)' : 'var(--muted-foreground)',
          borderRadius: '2px',
          appearance: 'none',
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
      >
        <option value="" disabled>Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}