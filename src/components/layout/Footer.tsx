import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-shine-gold/20 bg-shine-navy text-shine-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-600 text-white">
            ShineOne <span className="text-shine-gold">Estate</span>
          </p>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-shine-lightblue">
            Independent, professional home inspection services for homebuyers across
            Gurgaon and NCR.
          </p>
        </div>

        <div>
          <h3 className="font-accent text-xs font-700 uppercase tracking-[0.25em] text-shine-gold">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li><Link href="/" className="hover:text-shine-gold">Home</Link></li>
            <li><Link href="/#what-we-inspect" className="hover:text-shine-gold">What We Inspect</Link></li>
            <li><Link href="/#process" className="hover:text-shine-gold">Inspection Process</Link></li>
            <li><Link href="/book-inspection" className="hover:text-shine-gold">Book Inspection</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-accent text-xs font-700 uppercase tracking-[0.25em] text-shine-gold">
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-shine-lightblue">
            <li>
              <a href="mailto:parveen@shineoneestate.co.in" className="hover:text-shine-gold">
                parveen@shineoneestate.co.in
              </a>
            </li>
            <li>Gurgaon, Haryana, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-7xl font-body text-xs text-shine-lightblue/80">
          © {year} ShineOne Estate. All observations and assessments are based on
          visible conditions at the time of inspection.
        </p>
      </div>
    </footer>
  );
}
