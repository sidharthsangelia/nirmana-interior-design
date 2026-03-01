'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: 'Work', href: '/work' },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Residential', href: '/services/residential', description: 'Homes that reflect who you are' },
      { name: 'Commercial', href: '/services/commercial', description: 'Spaces that inspire and perform' },
      { name: 'Consultation', href: '/services/consultation', description: 'Begin with a conversation' },
    ],
  },
  { name: 'Studio', href: '/studio' },
  { name: 'Case Study', href: '/case-study' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Full-width transparent header (hero state) ── */}
      <motion.header
        className="fixed top-0 right-0 left-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: isScrolled ? 0 : 1 }}
        style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between lg:h-24">

            {/* Studio Name */}
            <Link href="/" prefetch={false} className="block group">
              <span
                className="font-cormorant text-xl tracking-[0.18em] uppercase text-white/90 group-hover:text-white transition-colors duration-200"
                style={{ fontWeight: 400 }}
              >
                Nirmana Studio
              </span>
              {/* <motion.span
                className="block h-px mt-0.5 bg-white/40"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
              /> */}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center space-x-10 lg:flex">
              {navItems.map((item, i) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                  >
                    <Link
                      href={item.href}
                      prefetch={false}
                      className="group relative font-sans text-[11px] tracking-[0.22em] uppercase text-white/85 hover:text-white transition-colors duration-200"
                      style={{ fontWeight: 400 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/50 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>

                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <DropdownMenu items={item.dropdownItems!} />
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile toggle */}
            <motion.button
              className="rounded p-2 text-white/80 hover:text-white transition-colors duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.93 }}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ── Pill header — scrolled state ── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed top-5 left-1/2 z-50 -translate-x-1/2"
            initial={{ y: -24, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -24, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="flex items-center gap-7 px-7 py-3.5 rounded-full"
              style={{
                backgroundColor: 'color-mix(in oklch, var(--background) 78%, transparent)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid color-mix(in oklch, var(--border) 70%, transparent)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.06) inset',
              }}
            >
              {/* Studio name — shortened */}
              <Link href="/" prefetch={false} className="group shrink-0">
                <span
                  className="font-cormorant text-[15px] tracking-[0.16em] uppercase transition-opacity duration-200 group-hover:opacity-50"
                  style={{ color: 'var(--foreground)', fontWeight: 400 }}
                >
                  Nirmana
                </span>
              </Link>

              {/* Divider */}
              <div className="h-3.5 w-px opacity-40" style={{ backgroundColor: 'var(--foreground)' }} />

              {/* Nav */}
              <nav className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown('pill-' + item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      prefetch={false}
                      className="font-sans text-[10.5px] tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-50"
                      style={{ color: 'var(--foreground)', fontWeight: 400 }}
                    >
                      {item.name}
                    </Link>

                    {item.hasDropdown && (
                      <AnimatePresence>
                        {activeDropdown === 'pill-' + item.name && (
                          <DropdownMenu items={item.dropdownItems!} />
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-0 z-40 lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div
              className="mx-4 mt-20 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'color-mix(in oklch, var(--background) 96%, transparent)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="h-0.5 w-full" style={{ backgroundColor: 'var(--accent)' }} />
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="flex items-center justify-between px-6 py-4 font-sans text-[11px] tracking-[0.22em] uppercase transition-opacity duration-200 hover:opacity-50"
                    style={{ color: 'var(--foreground)', borderBottom: '1px solid var(--border)', fontWeight: 400 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-30" />
                  </Link>
                </motion.div>
              ))}
              <div className="h-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Shared Dropdown ── */
function DropdownMenu({ items }: { items: { name: string; href: string; description?: string }[] }) {
  return (
    <motion.div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '2px',
        boxShadow: '0 16px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      {items.map((item, i) => (
        <Link
          key={item.name}
          href={item.href}
          prefetch={false}
          className="group flex items-center justify-between px-5 py-3.5 transition-colors duration-150"
          style={{ borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--muted)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          <div className="flex flex-col gap-0.5">
            <span
              className="font-cormorant text-[15px] leading-none tracking-wide"
              style={{ color: 'var(--foreground)', fontWeight: 400 }}
            >
              {item.name}
            </span>
            {item.description && (
              <span
                className="font-sans text-[10px] tracking-[0.06em] leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {item.description}
              </span>
            )}
          </div>
          <ArrowUpRight
            className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-40 transition-opacity duration-150"
            style={{ color: 'var(--foreground)' }}
          />
        </Link>
      ))}
    </motion.div>
  );
}