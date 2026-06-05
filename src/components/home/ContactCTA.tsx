import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';

// 10. Contact CTA Banner.
function WhatsAppCTA() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const message = encodeURIComponent(
    'Hello, I am interested in a Home Inspection for my property.'
  );
  const href = `https://wa.me/${number}?text=${message}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-shine-cream/40 px-8 py-4 font-accent text-sm font-600 uppercase tracking-wide text-shine-cream transition-all hover:border-shine-gold hover:text-shine-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Chat on WhatsApp
    </a>
  );
}

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gold-line"
      />
      <Reveal>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-700 leading-tight text-white sm:text-5xl">
            Ready to Inspect Your Property?
          </h2>
          <div className="mx-auto my-6 h-px w-24 bg-gold-line" aria-hidden="true" />
          <p className="mx-auto max-w-xl font-body text-base leading-relaxed text-shine-lightblue">
            Pricing is discussed based on property type, size, and inspection
            requirements. Our team will contact you to confirm the details.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-inspection"
              className="rounded-lg bg-shine-gold px-8 py-4 font-accent text-sm font-700 uppercase tracking-wide text-shine-navy transition-all hover:shadow-gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold focus-visible:ring-offset-2 focus-visible:ring-offset-shine-navy"
            >
              Book Inspection
            </Link>
            <WhatsAppCTA />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
