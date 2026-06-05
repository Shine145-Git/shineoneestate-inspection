import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import { reportInclusions } from '@/data/content';

// 6. Included In Report — 6 cards.
export default function IncludedInReport() {
  return (
    <section className="bg-shine-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Deliverable"
          title="Included In Your Report"
          subtitle="Everything you receive after the inspection is complete."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reportInclusions.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1}>
              <div className="flex h-full items-center gap-4 rounded-lg border border-shine-gold/20 bg-white/70 p-6 shadow-glass backdrop-blur-md transition-all duration-300 hover:border-shine-gold/40 hover:shadow-luxe">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-shine-navy text-shine-gold">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-600 text-shine-navy">
                  {item.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
