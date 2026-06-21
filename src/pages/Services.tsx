import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SEO from "@/components/site/SEO";
import { Wrench, Zap, Grid3x3, PaintRoller, Hammer, CheckCircle2, ArrowRight } from "lucide-react";
import electrical from "@/assets/electrical.jpg";
import painting from "@/assets/painting.jpg";
import tiling from "@/assets/tiling.jpg";
import hero from "@/assets/hero.jpg";

const services = [
  { icon: Wrench, title: "Plumbing", img: hero, points: ["Pipe installation & repair", "Leak detection", "Geyser & fixture installs", "Drainage solutions"] },
  { icon: Zap, title: "Electrical", img: electrical, points: ["Full house wiring", "DB board installs", "Fault finding & repair", "Lighting design"] },
  { icon: Grid3x3, title: "Tiling", img: tiling, points: ["Floor & wall tiling", "Bathroom & kitchen", "Precision cutting", "Grouting & sealing"] },
  { icon: PaintRoller, title: "Painting", img: painting, points: ["Interior & exterior", "Surface preparation", "Decorative finishes", "Durable, clean coats"] },
  { icon: Hammer, title: "Building Renovations", img: hero, points: ["Full home renovations", "Extensions & additions", "Project management", "Quality materials"] },
];

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Services — Plumbing, Electrical, Tiling, Painting & Renovations"
        description="Full-service trades in Bulawayo: plumbing, electrical, tiling, painting and building renovations. Quality workmanship from PipePioneers."
        path="/services"
      />
      <PageHeader eyebrow="Our Services" title="Trade services done right, the first time." subtitle="One team, five trades — built around quality, safety and pride in the craft." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 space-y-16">
        {services.map((s, i) => {
          const Icon = s.icon;
          const reverse = i % 2 === 1;
          return (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <img src={s.img} alt={s.title} loading="lazy" className="rounded-2xl shadow-[var(--shadow-brand)] object-cover w-full aspect-[4/3]" />
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 text-brand-orange px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  <Icon className="size-3.5" /> {s.title}
                </div>
                <h2 className="mt-4 font-display font-bold text-3xl text-brand-navy">{s.title} services</h2>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm"><CheckCircle2 className="size-5 text-brand-orange mt-0.5" /> {p}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-navy text-white px-5 py-3 text-sm font-semibold hover:bg-brand-navy/90">
                  Request a quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
