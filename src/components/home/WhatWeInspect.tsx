import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import { inspectionCategories } from '@/data/content';

// 3. What We Inspect — exactly 14 categories, each with icon, title, bullets.
export default function WhatWeInspect() {
  return (
    <section id="what-we-inspect" className="scroll-mt-24 bg-shine-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Scope of Inspection"
          title="What We Inspect"
          subtitle="A structured walkthrough across fourteen key areas of your property."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {inspectionCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 4) * 0.08}>
              <article className="group flex h-full flex-col rounded-lg border border-shine-gold/15 bg-white p-6 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:border-shine-gold/40 hover:shadow-luxe">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-shine-cream text-shine-gold ring-1 ring-shine-gold/30">
                  <cat.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-600 text-shine-navy">
                  {cat.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {cat.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 font-body text-sm text-shine-navy/70"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-shine-gold"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
