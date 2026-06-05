'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#what-we-inspect', label: 'What We Inspect' },
  { href: '/#process', label: 'Process' },
  { href: '/#sample-report', label: 'Sample Report' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-shine-navy/90 backdrop-blur-md shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-600 text-white">
            ShineOne <span className="text-shine-gold">Estate</span>
          </span>
          <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-shine-lightblue">
            Home Inspection
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-accent text-sm font-600 text-shine-cream/90 transition-colors hover:text-shine-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-inspection"
            className="rounded-lg bg-shine-gold px-5 py-2.5 font-accent text-sm font-700 text-shine-navy transition-all hover:shadow-gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold focus-visible:ring-offset-2 focus-visible:ring-offset-shine-navy"
          >
            Book Inspection
          </Link>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-shine-gold/20 bg-shine-navy/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-accent text-sm font-600 text-shine-cream/90 hover:text-shine-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-inspection"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-shine-gold px-5 py-3 text-center font-accent text-sm font-700 text-shine-navy"
            >
              Book Inspection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
