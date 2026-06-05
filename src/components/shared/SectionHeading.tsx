import GoldDivider from './GoldDivider';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 font-accent text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? 'text-shine-gold' : 'text-shine-blue'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-600 leading-tight sm:text-4xl md:text-5xl ${
          light ? 'text-white' : 'text-shine-navy'
        }`}
      >
        {title}
      </h2>
      <GoldDivider className="my-5" />
      {subtitle && (
        <p
          className={`font-body text-base leading-relaxed ${
            light ? 'text-shine-lightblue' : 'text-shine-navy/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
