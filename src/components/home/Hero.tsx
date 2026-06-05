import Image from 'next/image';
import Link from 'next/link';

// 1. Hero — luxury residential image, Deep Navy overlay at 70%.
export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=75"
        alt="Elegant luxury residential interior of a new home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Deep Navy overlay at 70% */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(12, 15, 26, 0.7)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-shine-navy via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-4 font-accent text-xs font-600 uppercase tracking-[0.3em] text-shine-gold">
            ShineOne Estate · Gurgaon & NCR
          </p>
          <h1 className="font-display text-4xl font-700 leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Know Your Home Before You Take Possession
          </h1>
          <div className="my-7 h-px w-28 bg-gold-line" aria-hidden="true" />
          <p className="max-w-xl font-body text-lg leading-relaxed text-shine-cream/90">
            Professional Home Inspection Services by ShineOne Estate
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book-inspection"
              className="rounded-lg bg-shine-gold px-8 py-4 text-center font-accent text-sm font-700 uppercase tracking-wide text-shine-navy transition-all hover:shadow-gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold focus-visible:ring-offset-2 focus-visible:ring-offset-shine-navy"
            >
              Book Inspection
            </Link>
            <Link
              href="/#process"
              className="rounded-lg border border-shine-cream/40 px-8 py-4 text-center font-accent text-sm font-600 uppercase tracking-wide text-shine-cream transition-all hover:border-shine-gold hover:text-shine-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold"
            >
              View Inspection Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
