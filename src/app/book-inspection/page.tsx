import type { Metadata } from 'next';
import BookingForm from '@/components/booking/BookingForm';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Book a Home Inspection — ShineOne Estate',
  description:
    'Schedule a professional, independent home inspection in Gurgaon & NCR. Share your property details and preferred slot — our team will confirm the visit.',
  path: '/book-inspection',
});

export default function BookInspectionPage() {
  return (
    <section className="bg-cream-fade pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="mb-3 font-accent text-xs font-600 uppercase tracking-[0.25em] text-shine-blue">
            Schedule Your Visit
          </p>
          <h1 className="font-display text-4xl font-700 leading-tight text-shine-navy sm:text-5xl">
            Book Your Inspection
          </h1>
          <div className="mx-auto my-5 h-px w-24 bg-gold-line" aria-hidden="true" />
          <p className="mx-auto max-w-xl font-body text-base leading-relaxed text-shine-navy/70">
            Tell us about your property and choose a preferred slot. Our team will
            reach out to confirm the details.
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-shine-gold/20 bg-white/80 p-7 shadow-luxe backdrop-blur-md sm:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
