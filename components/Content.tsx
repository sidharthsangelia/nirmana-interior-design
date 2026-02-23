'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Content() {
  return (
    <div
      className="h-full w-full flex flex-col justify-end gap-12 px-10 py-10 md:px-16 md:py-12"
      style={{ backgroundColor: 'var(--foreground)' }}
    >
      <Section1 />
      <Section2 />
    </div>
  );
}

/* ── Top section: nav + tagline ── */
const Section1 = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
      
      {/* Studio name + tagline */}
      <div className="flex flex-col gap-4 max-w-xs">
        <span
          className="font-cormorant text-2xl tracking-[0.18em] uppercase"
          style={{ color: 'var(--background)', fontWeight: 400 }}
        >
          Nirmana Studio
        </span>
        {/* Thin accent rule */}
        <div className="h-px w-10" style={{ backgroundColor: 'var(--accent)' }} />
        <p
          className="font-cormorant text-base italic leading-relaxed"
          style={{ color: 'color-mix(in oklch, var(--background) 50%, transparent)' }}
        >
          Spaces shaped by intention.<br />Interiors that endure.
        </p>
      </div>

      {/* Nav columns */}
      <Nav />

      {/* Contact column */}
      <div className="flex flex-col gap-3">
        <h3
          className="font-sans text-[9px] tracking-[0.28em] uppercase mb-1"
          style={{ color: 'color-mix(in oklch, var(--background) 40%, transparent)' }}
        >
          Get in touch
        </h3>
        <FooterLink href="mailto:hello@nirmanastudio.com">hello@nirmanastudio.com</FooterLink>
        <FooterLink href="tel:+911234567890">+91 12345 67890</FooterLink>
        <div className="mt-3 flex gap-4">
          <FooterLink href="https://instagram.com">Instagram</FooterLink>
          <FooterLink href="https://pinterest.com">Pinterest</FooterLink>
        </div>
      </div>
    </div>
  );
};

/* ── Bottom section: large wordmark + copyright ── */
const Section2 = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Divider */}
      <div
        className="w-full h-px mb-2"
        style={{ backgroundColor: 'color-mix(in oklch, var(--background) 12%, transparent)' }}
      />

      <div className="flex items-end justify-between">
        {/* Large display wordmark */}
        <h2
          className="font-cormorant leading-[0.85] tracking-tight select-none"
          style={{
            color: 'color-mix(in oklch, var(--background) 8%, transparent)',
            fontSize: 'clamp(56px, 10vw, 140px)',
            fontWeight: 500,
          }}
        >
          Nirmana
        </h2>

        {/* Bottom right meta */}
        <div className="flex flex-col items-end gap-1.5 pb-1">
          <p
            className="font-sans text-[9px] tracking-[0.22em] uppercase"
            style={{ color: 'color-mix(in oklch, var(--background) 30%, transparent)' }}
          >
            New Delhi, India
          </p>
          <p
            className="font-sans text-[9px] tracking-[0.22em] uppercase"
            style={{ color: 'color-mix(in oklch, var(--background) 30%, transparent)' }}
          >
            © {new Date().getFullYear()} Nirmana Studio
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Nav columns ── */
const Nav = () => {
  const cols = [
    {
      heading: 'Studio',
      links: [
        { label: 'Work', href: '/work' },
        { label: 'Studio', href: '/studio' },
        { label: 'Journal', href: '/journal' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Residential', href: '/services/residential' },
        { label: 'Commercial', href: '/services/commercial' },
        { label: 'Consultation', href: '/services/consultation' },
      ],
    },
  ];

  return (
    <div className="flex gap-16 shrink-0">
      {cols.map((col) => (
        <div key={col.heading} className="flex flex-col gap-2.5">
          <h3
            className="font-sans text-[9px] tracking-[0.28em] uppercase mb-1"
            style={{ color: 'color-mix(in oklch, var(--background) 40%, transparent)' }}
          >
            {col.heading}
          </h3>
          {col.links.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </div>
      ))}
    </div>
  );
};

/* ── Reusable footer link ── */
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    prefetch={false}
    className="group inline-flex items-center gap-1 font-cormorant text-[15px] tracking-wide transition-opacity duration-200 hover:opacity-50"
    style={{ color: 'var(--background)', fontWeight: 400 }}
  >
    {children}
    <ArrowUpRight
      className="h-2.5 w-2.5 opacity-0 group-hover:opacity-60 transition-opacity duration-150 -mt-0.5"
    />
  </Link>
);