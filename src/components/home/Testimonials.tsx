import { Quote } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import { testimonials } from '@/data/content';

// 8. Testimonials — placeholders only, clearly marked. Never fabricate.
export default function Testimonials() {
  return (
    <section className="bg-cream-fade py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="In Their Words"
          title="What Homebuyers Say"
          subtitle="Replace the placeholders below with genuine, verified client feedback."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-lg border border-shine-gold/20 bg-white/70 p-8 shadow-glass backdrop-blur-md">
                <Quote className="h-8 w-8 text-shine-gold/60" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-shine-navy/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-shine-gold/20 pt-4">
                  <p className="font-display text-base font-600 text-shine-navy">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-shine-navy/60">{t.context}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
