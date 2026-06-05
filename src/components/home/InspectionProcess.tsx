import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import { inspectionProcess } from '@/data/content';

// 5. Inspection Process — 4-step timeline.
export default function InspectionProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream-fade py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="The Inspection Process"
          subtitle="A clear, four-step journey from scheduling to guidance."
        />
        <ol className="relative grid gap-10 md:grid-cols-4">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-shine-gold/30 md:block"
          />
          {inspectionProcess.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.12}>
              <li className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-shine-navy font-display text-xl font-700 text-shine-gold ring-4 ring-shine-cream">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-600 text-shine-navy">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-shine-navy/70">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
