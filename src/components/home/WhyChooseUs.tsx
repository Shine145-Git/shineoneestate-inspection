import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import { whyChooseUs } from '@/data/content';

// 2. Why Choose ShineOne Estate — 4 premium glass cards.
export default function WhyChooseUs() {
  return (
    <section className="bg-cream-fade py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why ShineOne Estate"
          title="Inspection You Can Rely On"
          subtitle="A homebuyer-first approach built on independence, detail and a consistent professional process."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="group h-full rounded-lg border border-shine-gold/20 bg-white/70 p-8 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-shine-navy text-shine-gold transition-colors group-hover:bg-shine-blue">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-600 text-shine-navy">
                  {card.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-shine-navy/70">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
