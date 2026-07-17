export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 text-white" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute -top-20 -right-20 size-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-10 size-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 text-center">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight uppercase tracking-wide max-w-3xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/75 text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
