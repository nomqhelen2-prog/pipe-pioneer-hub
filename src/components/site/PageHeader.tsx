export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute -top-20 -right-20 size-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-10 size-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28 text-white">
        {eyebrow && <div className="text-xs tracking-[0.25em] font-semibold text-brand-orange uppercase">{eyebrow}</div>}
        <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-white/80 max-w-2xl text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
