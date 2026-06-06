import { Quote } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';

// Testimonial data
const testimonials = [
  {
    quote:
      "I am extremely satisfied with the home inspection service provided by Shine One Estate. During the inspection of my home at DLF Garden Enclave, the team identified approximately 15–16 issues that could have easily been missed during possession. These included flooring defects, kitchen finishing concerns, air-conditioning installation issues, servant room furnishing problems, and several other workmanship and quality-related observations. Their detailed inspection report was professional, easy to understand, and helped me address the concerns with the builder before moving in. The attention to detail and expertise demonstrated throughout the inspection process gave me complete confidence in my investment. I highly recommend their services to anyone purchasing a new home.",
    name: 'Vishal Nagpal',
    context: 'Verified Homebuyer • DLF Garden Enclave',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-fade py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="In Their Words"
          title="What Homebuyers Say"
          subtitle="Real experiences from homeowners who trusted Shine One Estate for their property inspections."
        />

        <div className="mx-auto max-w-4xl">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-shine-gold/20 bg-white/80 p-10 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Quote
                  className="h-10 w-10 text-shine-gold"
                  aria-hidden="true"
                />

                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-shine-navy/85">
                  "{t.quote}"
                </blockquote>

                <figcaption className="mt-8 border-t border-shine-gold/20 pt-6">
                  <p className="font-display text-xl font-semibold text-shine-navy">
                    {t.name}
                  </p>

                  <p className="mt-1 text-sm text-shine-navy/60">
                    {t.context}
                  </p>

                  <div className="mt-4 inline-flex items-center rounded-full bg-shine-gold/10 px-4 py-2 text-sm font-medium text-shine-navy">
                    ✓ 15–16 Issues Identified & Resolved Before Possession
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
