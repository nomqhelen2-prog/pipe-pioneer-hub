import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Award, Users, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import poster from "@/assets/poster.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PipePioneers" },
      { name: "description", content: "Meet PipePioneers — a passionate Bulawayo trade team built on craftsmanship, integrity and a winning attitude." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Craftsmanship", desc: "We obsess over the details so the work lasts." },
  { icon: ShieldCheck, title: "Integrity", desc: "Honest quotes, clear timelines, no surprises." },
  { icon: Users, title: "Teamwork", desc: "A tight crew that shows up and finishes strong." },
  { icon: Sparkles, title: "Excellence", desc: "Winning is the norm — never the exception." },
];

function About() {
  return (
    <Layout>
      <PageHeader eyebrow="About Us" title="Built on craft. Driven by results." subtitle="PipePioneers is a Bulawayo-based trade services company delivering quality plumbing, electrical and renovation work to homes and businesses across Zimbabwe." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <img src={poster} alt="PipePioneers team poster" loading="lazy" className="rounded-2xl shadow-[var(--shadow-brand)] object-cover w-full aspect-[4/5]" />
        <div>
          <div className="text-xs tracking-[0.25em] font-semibold text-brand-orange uppercase">Our Story</div>
          <h2 className="mt-2 font-display font-bold text-3xl text-brand-navy">A team that takes pride in the work</h2>
          <p className="mt-4 text-muted-foreground">
            PipePioneers started with a simple belief: that great trade work begins with respect — for the client, the craft and the home. From a single plumber with a toolbox, we've grown into a multi-disciplinary team trusted by hundreds of homeowners across Bulawayo.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether it's a leaking pipe at midnight or a full renovation, we bring the same commitment to every job: do it right, do it once, and do it with pride. Winning is the norm.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-brand-navy">What we stand for</h2>
            <p className="mt-3 text-muted-foreground">Four values that shape every job we take on.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-white p-6 border border-border hover:shadow-[var(--shadow-brand)] transition-shadow">
                <div className="size-11 rounded-lg bg-brand-orange/10 text-brand-orange grid place-items-center"><Icon className="size-5" /></div>
                <h3 className="mt-4 font-display font-semibold text-lg text-brand-navy">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 text-center">
        <h3 className="font-display font-bold text-2xl text-brand-navy">Have a project in mind?</h3>
        <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-accent)]">
          Get in touch <ArrowRight className="size-4" />
        </Link>
      </section>
    </Layout>
  );
}
