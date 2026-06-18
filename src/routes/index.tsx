import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/site/Layout";
import { Wrench, Zap, Grid3x3, PaintRoller, Hammer, Phone, CheckCircle2, ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import posterImg from "@/assets/poster.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PipePioneers — Trusted Trade Service Experts in Bulawayo" },
      { name: "description", content: "Plumbing, electrical, tiling, painting and building renovations done right the first time. Call PipePioneers in Bulawayo." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Wrench, title: "Plumbing", desc: "Installations, repairs, leak detection and full pipework." },
  { icon: Zap, title: "Electrical", desc: "Wiring, fault finding, panel installs and certifications." },
  { icon: Grid3x3, title: "Tiling", desc: "Floor and wall tiling with precision and lasting finishes." },
  { icon: PaintRoller, title: "Painting", desc: "Interior and exterior paintwork that lifts every room." },
  { icon: Hammer, title: "Building Renovations", desc: "Turn old spaces into modern, functional homes." },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute -top-40 -right-20 size-[480px] rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wider text-brand-orange uppercase">
              <Star className="size-3.5" /> Winning Is The Norm
            </div>
            <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Your Trusted <span className="text-brand-orange">Trade Service</span> Experts
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              From plumbing to renovations, PipePioneers delivers quality workmanship across Bulawayo and beyond — on time, on budget, every time.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 max-w-md">
              {["Plumbing", "Electrical", "Tiling", "Painting", "Renovations", "Free Quotes"].map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="size-4 text-brand-orange" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-accent)] hover:brightness-105">
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
              <a href="tel:+263787517314" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                <Phone className="size-4" /> +263 787 517 314
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-orange/30 blur-2xl" />
            <img
              src={heroImg}
              alt="PipePioneers tradesman at work"
              width={1600}
              height={1100}
              className="relative rounded-2xl shadow-2xl object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.25em] font-semibold text-brand-orange uppercase">What We Do</div>
          <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl text-brand-navy">Services built to last</h2>
          <p className="mt-3 text-muted-foreground">A complete trade service offering under one trusted roof.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-border bg-card p-6 hover:shadow-[var(--shadow-brand)] hover:-translate-y-1 transition-all">
              <div className="size-12 rounded-lg bg-brand-navy text-white grid place-items-center group-hover:bg-brand-orange transition-colors">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange">
            See all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <img src={posterImg} alt="PipePioneers team" loading="lazy" className="rounded-2xl shadow-[var(--shadow-brand)] object-cover w-full aspect-[4/5]" />
          <div>
            <div className="text-xs tracking-[0.25em] font-semibold text-brand-orange uppercase">Why PipePioneers</div>
            <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl text-brand-navy">Craftsmanship you can count on</h2>
            <p className="mt-4 text-muted-foreground">We're a small, passionate crew built on integrity, skill and pride in the work. From a leaky tap to a full home renovation, we treat every job like it matters — because it does.</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[{ k: "10+", v: "Years experience" }, { k: "500+", v: "Jobs completed" }, { k: "100%", v: "Satisfaction" }].map((s) => (
                <div key={s.v}>
                  <div className="font-display font-extrabold text-3xl text-brand-orange">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-navy px-5 py-3 text-sm font-semibold text-white hover:bg-brand-navy/90">
              About our team <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden" style={{ background: "var(--gradient-accent)" }}>
          <div className="absolute -top-10 -right-10 size-60 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl">Ready to start your project?</h3>
              <p className="mt-2 text-white/90">Get a free, no-obligation quote today.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:brightness-110">
              Request a Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
