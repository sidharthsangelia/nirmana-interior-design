import Link from 'next/link';

/**
 * Next.js App Router 404 — not-found.tsx
 * Place at: app/not-found.tsx
 *
 * Next.js renders this automatically for any unmatched route.
 * No 'use client' needed — this is a Server Component.
 */

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
];

export default function page() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--foreground)' }}
    >
      {/* ── Main content ─────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-between px-8 py-20 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full">

        {/* Top — 404 watermark + label */}
        <div className="flex items-start justify-between">
          <span
            className="font-sans text-[9px] tracking-[0.36em] uppercase"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            Nirmana Studio
          </span>
          <span
            className="font-sans text-[9px] tracking-[0.36em] uppercase"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            404
          </span>
        </div>

        {/* Centre — headline */}
        <div className="flex flex-col gap-8 py-20">
          {/* Large ghost number */}
          <span
            className="font-cormorant select-none leading-none"
            style={{
              fontSize: 'clamp(120px, 22vw, 260px)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.05)',
              letterSpacing: '-0.02em',
              lineHeight: 0.85,
            }}
          >
            404
          </span>

          <div className="flex flex-col gap-5 max-w-xl -mt-4">
            <div style={{ width: 40, height: 1, backgroundColor: 'var(--accent)', opacity: 0.8 }} />

            <h1
              className="font-cormorant leading-[0.95]"
              style={{
                color: 'var(--background)',
                fontWeight: 500,
                fontSize: 'clamp(38px, 5.5vw, 80px)',
              }}
            >
              This room
              <br />
              <em>doesn't exist.</em>
            </h1>

            <p
              className="font-cormorant text-[17px] italic leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              The page you're looking for has moved, was never here,
              or we chose not to fill it.
            </p>
          </div>
        </div>

        {/* Bottom — navigation + home link */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            <span
              className="font-sans text-[8px] tracking-[0.32em] uppercase mb-1"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              Find your way
            </span>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-cormorant text-xl md:text-2xl group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-50"
                style={{ color: 'var(--background)', fontWeight: 400 }}
              >
                {l.label}
                <span
                  className="block opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ width: 20, height: 1, backgroundColor: 'var(--background)' }}
                />
              </Link>
            ))}
          </nav>

          {/* Home CTA */}
          <Link
            href="/"
            className="group font-sans text-[9px] tracking-[0.32em] uppercase inline-flex items-center gap-4 transition-opacity duration-200 hover:opacity-50 self-start sm:self-auto"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Return home
            <span
              className="block transition-all duration-500 group-hover:w-12"
              style={{ width: 32, height: 1, backgroundColor: 'rgba(255,255,255,0.5)' }}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}