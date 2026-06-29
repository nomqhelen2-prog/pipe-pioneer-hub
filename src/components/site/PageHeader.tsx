export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 text-white" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute -top-20 -right-20 size-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-10 size-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {eyebrow && (
          <div className="w-fit rounded-full border border-brand-orange px-4 py-1 text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase mb-6">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight uppercase tracking-wide max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/75 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
