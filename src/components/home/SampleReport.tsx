import { Download, FileText } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';

// 7. Sample Report — preview, downloadable PDF, clearly marked SAMPLE.
export default function SampleReport() {
  return (
    <section id="sample-report" className="scroll-mt-24 bg-shine-navy py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionHeading
              light
              eyebrow="Transparency"
              title="See a Sample Report"
            />
            <p className="-mt-6 font-body text-base leading-relaxed text-shine-lightblue">
              Every inspection concludes with a structured, photograph-backed report.
              Preview an illustrative example below — it is clearly marked as a sample
              and contains no real client data.
            </p>
            <a
              href="/sample-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-shine-gold px-7 py-4 font-accent text-sm font-700 uppercase tracking-wide text-shine-navy transition-all hover:shadow-gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold focus-visible:ring-offset-2 focus-visible:ring-offset-shine-navy"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Sample PDF
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-lg border border-shine-gold/30 bg-white p-8 shadow-luxe">
              <div className="flex items-center justify-between border-b border-shine-cream pb-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-shine-gold" aria-hidden="true" />
                  <span className="font-display text-lg font-600 text-shine-navy">
                    Inspection Report
                  </span>
                </div>
                <span className="rounded bg-shine-gold/20 px-2 py-1 font-accent text-[10px] font-700 uppercase tracking-widest text-shine-blue">
                  Sample
                </span>
              </div>
              <div className="mt-5 space-y-3" aria-hidden="true">
                <div className="h-3 w-3/4 rounded bg-shine-cream" />
                <div className="h-3 w-1/2 rounded bg-shine-cream" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-16 rounded bg-shine-lightblue/30" />
                  <div className="h-16 rounded bg-shine-lightblue/30" />
                  <div className="h-16 rounded bg-shine-lightblue/30" />
                </div>
                <div className="h-3 w-full rounded bg-shine-cream" />
                <div className="h-3 w-5/6 rounded bg-shine-cream" />
                <div className="h-3 w-2/3 rounded bg-shine-cream" />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 rotate-12 rounded bg-shine-gold px-3 py-1 font-accent text-xs font-700 uppercase tracking-widest text-shine-navy shadow-gold-glow"
            >
              Sample
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
