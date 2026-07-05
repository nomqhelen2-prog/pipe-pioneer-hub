import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SEO from "@/components/site/SEO";
import ScrollZoomImage from "@/components/site/ScrollZoomImage";
import { ArrowRight, CornerDownRight } from "lucide-react";
const poster = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/roof%20fixes.webp";

const coreValues = [
  { name: "Integrity", desc: "We do what we promise." },
  { name: "Excellence", desc: "We aim for quality in every project." },
  { name: "Innovation", desc: "We embrace better ways of building." },
  { name: "Safety", desc: "People and projects come first." },
  { name: "Accountability", desc: "We take ownership of results." },
  { name: "Sustainability", desc: "Building responsibly for future generations." },
];

const mvv: { label: string; content: ReactNode }[] = [
  {
    label: "Our Mission",
    content: (
      <p className="text-muted-foreground leading-relaxed text-base">
        PipePioneers exists to provide reliable, efficient and professional construction and maintenance services through skilled workmanship, integrity, safety and innovation. We are committed to creating long-term value for our clients by delivering projects that improve communities, support economic growth and build lasting impact.
      </p>
    ),
  },
  {
    label: "Our Vision",
    content: (
      <p className="text-muted-foreground leading-relaxed text-base">
        To become a leading infrastructure and construction company delivering sustainable, innovative and high-quality solutions across Africa in construction, maintenance, civil works, roads and public infrastructure development.
      </p>
    ),
  },
  {
    label: "Core Values",
    content: (
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
        {coreValues.map(({ name, desc }) => (
          <li key={name} className="flex items-start gap-2 text-base text-muted-foreground">
            <span className="mt-1 size-2 rounded-full bg-brand-orange flex-shrink-0" />
            <span><span className="font-semibold text-brand-navy">{name}</span> — {desc}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About PipePioneers — Bulawayo's Trusted Trade Team"
        description="PipePioneers is a leading infrastructure and construction company delivering sustainable, innovative and high-quality trade solutions across Africa."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About PipePioneers",
          url: "https://www.pipepioneers.co.zw/about",
          description: "PipePioneers provides reliable, efficient and professional construction and maintenance services through skilled workmanship, integrity, safety and innovation.",
          mainEntity: {
            "@type": "Organization",
            name: "PipePioneers",
            foundingLocation: "Bulawayo, Zimbabwe",
            slogan: "Winning Is The Norm",
            numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
            knowsAbout: ["Plumbing", "Electrical work", "Tiling", "Painting", "Building Renovations", "Civil Works", "Roads"],
          },
        }}
      />
      <PageHeader
        eyebrow="About Us"
        title="Built on Craft. Driven by Results."
        subtitle="PipePioneers is committed to delivering reliable professional construction and maintenance services — built on integrity, innovation and a passion for lasting impact."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-brand)]">
          <ScrollZoomImage src={poster} alt="PipePioneers team poster" loading="lazy" className="object-cover w-full aspect-[4/5]" />
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] font-semibold text-brand-orange uppercase">Our Story</div>
          <h2 className="mt-2 font-display font-bold text-3xl text-brand-navy">A team that takes pride in the work</h2>
          <p className="mt-4 text-muted-foreground">
            PipePioneers started with a simple belief: that great trade work begins with respect — for the client, the craft and the community. From humble beginnings, we've grown into a multi-disciplinary team delivering construction, maintenance and infrastructure solutions across Bulawayo and beyond.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether it's a leaking pipe, a road project or a full renovation, we bring the same commitment every time: do it right, do it safely and build something that lasts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl text-brand-navy">What We Stand For</h2>
          <p className="mt-3 text-muted-foreground">The principles that guide every project we take on.</p>
        </div>
        <div className="divide-y divide-border">
          {mvv.map(({ label, content }) => (
            <div key={label} className="grid md:grid-cols-[260px_1fr] gap-6 py-10 items-start">
              <div className="flex items-center gap-3">
                <CornerDownRight className="size-6 text-brand-orange flex-shrink-0" strokeWidth={2.5} />
                <span className="font-display font-bold text-xl text-brand-navy">{label}</span>
              </div>
              {content}
            </div>
          ))}
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
