import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Thank You — ShineOne Estate',
    description: 'Your inspection request has been received.',
    path: '/thank-you',
  }),
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-navy-gradient px-5 py-32">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-shine-gold/15 ring-1 ring-shine-gold/40">
          <CheckCircle2 className="h-10 w-10 text-shine-gold" aria-hidden="true" />
        </div>
        <h1 className="font-display text-4xl font-700 leading-tight text-white sm:text-5xl">
          Thank You
        </h1>
        <div className="mx-auto my-6 h-px w-24 bg-gold-line" aria-hidden="true" />
        <p className="mx-auto max-w-md font-body text-base leading-relaxed text-shine-lightblue">
          Your inspection request has been received. Our team will contact you
          shortly to confirm the details of your visit.
        </p>
        <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-shine-lightblue/80">
          Pricing is discussed based on property type, size, and inspection
          requirements. Our team will contact you to confirm the details.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex rounded-lg bg-shine-gold px-8 py-4 font-accent text-sm font-700 uppercase tracking-wide text-shine-navy transition-all hover:shadow-gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold focus-visible:ring-offset-2 focus-visible:ring-offset-shine-navy"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
