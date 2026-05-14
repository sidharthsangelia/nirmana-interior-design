'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * CommissionCTA
 * A lean, brand-aligned closing strip for pages that want to invite
 * enquiries without hosting a full form. Drop it just before </main>.
 *
 * Usage:
 *   import CommissionCTA from '@/components/CommissionCTA';
 *   <CommissionCTA />
 *
 * Optional prop `headline` to customise the copy per page:
 *   <CommissionCTA headline="Ready to see what's possible?" />
 */

interface CommissionCTAProps {
  headline?: string;
  subline?: string;
}

export default function CommissionCTA({
  headline = "You already know this space should be different.",
  subline = "We take on very few projects each year. If you feel the fit — reach out.",
}: CommissionCTAProps) {
  return (
    <section
      className="py-28 md:py-36 px-6 lg:px-12"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="flex flex-col gap-5 max-w-xl"
        >
          <span
            className="font-sans text-[9px] tracking-[0.32em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Begin a commission
          </span>
          <h2
            className="font-cormorant leading-[1.05]"
            style={{ color: 'var(--foreground)', fontWeight: 500, fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            {/* Italicise the last word-group automatically */}
            {headline.includes('different') ? (
              <>
                You already know this space should{' '}
                <em>be different.</em>
              </>
            ) : (
              headline
            )}
          </h2>
          <p
            className="font-cormorant text-[16px] md:text-[17px] italic leading-relaxed"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {subline}
          </p>
        </motion.div>

        {/* Right — CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="shrink-0"
        >
          <Link
            href="/contact"
            className="group font-sans text-[9px] tracking-[0.32em] uppercase inline-flex items-center gap-4 transition-opacity duration-200 hover:opacity-60"
            style={{ color: 'var(--foreground)' }}
          >
            Start the conversation
            <span
              className="block transition-all duration-500 group-hover:w-14"
              style={{ width: 36, height: 1, backgroundColor: 'var(--foreground)' }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}