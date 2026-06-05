import { MessageCircle } from 'lucide-react';

// Floating WhatsApp button — visible on all pages, bottom-right.
export default function WhatsAppButton() {
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
      aria-label="Chat with ShineOne Estate on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-luxe transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7 text-white" aria-hidden="true" />
    </a>
  );
}
