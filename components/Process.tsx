'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ProcessCard from './ProcessCard';
import { processSteps } from '@/lib/processData';
 

export default function Process() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="w-full" style={{ backgroundColor: 'var(--background)' }}>

      {/* Section header — not sticky, scrolls away */}
      <div className="px-6 md:px-16 lg:px-24 pt-28 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="flex flex-col gap-4">
          <span
            className="font-sans text-[9px] tracking-[0.3em] uppercase"
            style={{ color: 'var(--muted-foreground)' }}
          >
            How we work
          </span>
          <h2
            className="font-cormorant leading-[0.9]"
            style={{
              color: 'var(--foreground)',
              fontWeight: 500,
              fontSize: 'clamp(40px, 5.5vw, 80px)',
            }}
          >
            The Nirmana<br />Process.
          </h2>
        </div>
        <p
          className="font-cormorant text-base md:text-lg italic leading-relaxed max-w-xs"
          style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}
        >
          Four stages. No shortcuts.<br />Every space we build earns its place.
        </p>
      </div>

      {/* Stacking cards */}
      <div ref={container}>
        {processSteps.map((step, i) => {
          const targetScale = 1 - (processSteps.length - i) * 0.04;
          return (
            <ProcessCard
              key={step.index}
              i={i}
              {...step}
              progress={scrollYProgress}
              range={[i * (1 / processSteps.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}