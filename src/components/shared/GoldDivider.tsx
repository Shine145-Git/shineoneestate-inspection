export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto h-px w-24 bg-gold-line ${className}`}
    />
  );
}
