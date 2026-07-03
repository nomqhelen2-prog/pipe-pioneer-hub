import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SEO from "@/components/site/SEO";
import { ArrowRight, Check } from "lucide-react";
const electrical = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/electrical.webp";
const painting = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/painting.webp";
const tiling = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/tiling.webp";
const piping = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/piping.webp";
const building = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/building.webp";

const services = [
  {
    title: "Plumbing",
    img: piping,
    points: [
      "Installation of new pipe systems for residential and commercial properties.",
      "Repair of damaged, burst or leaking pipes using durable, code-compliant materials.",
      "Leak detection using pressure testing and inspection techniques to pinpoint hidden faults.",
      "Geyser and hot water system supply, installation, and commissioning.",
      "Tap, shower and basin fixture fitting to manufacturer specifications.",
      "Blocked drain diagnosis, clearing and long-term drainage solutions.",
    ],
  },
  {
    title: "Electrical",
    img: electrical,
    points: [
      "Full house wiring for new builds and rewiring for older properties.",
      "Distribution board supply, installation and upgrades from outdated fuse boxes.",
      "Fault finding and repair — tripping breakers, dead sockets and flickering lights.",
      "Outdoor and security lighting installation.",
      "Lighting design and installation for residential and commercial spaces.",
      "All electrical work is certified and compliant with Zimbabwe standards.",
    ],
  },
  {
    title: "Tiling",
    img: tiling,
    points: [
      "Floor and wall tiling with meticulous levelling and alignment.",
      "Bathroom and kitchen tiling with correct waterproofing and adhesive application.",
      "Precision cutting to handle any tile size, shape, border or feature pattern.",
      "Clean, even grouting and sealing in all wet areas to prevent staining and moisture ingress.",
      "Tiling for living areas, entertainment spaces, driveways and commercial floors.",
    ],
  },
  {
    title: "Painting",
    img: painting,
    points: [
      "Interior and exterior painting for residential and commercial properties.",
      "Full surface preparation — crack filling, sanding and priming before any colour is applied.",
      "Decorative finishes, textured coatings and feature wall treatments.",
      "Premium paint application suited to Bulawayo's climate for lasting results.",
      "Clean, efficient work with minimal disruption to your space.",
    ],
  },
  {
    title: "Building Renovations",
    img: building,
    points: [
      "End-to-end home renovations covering structural changes and all finishing work.",
      "Room additions, garage builds, boundary walls and outbuilding construction.",
      "Single point of contact project management with clear timelines and reporting.",
      "Material sourcing from trusted suppliers — no corners cut, ever.",
      "Compliance with local building regulations and council inspection facilitation.",
      "Post-completion inspections to ensure every detail meets our standard.",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Services — Plumbing, Electrical, Tiling, Painting & Renovations | PipePioneers"
        description="Full-service trades in Bulawayo: plumbing, electrical, tiling, painting and building renovations. Quality workmanship from PipePioneers."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "PipePioneers Trade Services",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Plumbing", url: "https://www.pipepioneers.co.zw/services#plumbing" },
            { "@type": "ListItem", position: 2, name: "Electrical", url: "https://www.pipepioneers.co.zw/services#electrical" },
            { "@type": "ListItem", position: 3, name: "Tiling", url: "https://www.pipepioneers.co.zw/services#tiling" },
            { "@type": "ListItem", position: 4, name: "Painting", url: "https://www.pipepioneers.co.zw/services#painting" },
            { "@type": "ListItem", position: 5, name: "Building Renovations", url: "https://www.pipepioneers.co.zw/services#renovations" },
          ],
        }}
      />
      <PageHeader
        eyebrow="Our Services"
        title="What We Do, We Do Right"
        subtitle="From a leaking pipe to a full renovation — one team, five trades, zero compromises. Quality workmanship delivered across Bulawayo and beyond."
      />

      <div className="divide-y divide-border">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 min-h-[480px] ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text panel */}
              <div
                className="flex flex-col justify-start pt-14 pb-14"
                style={
                  reverse
                    ? { paddingLeft: "2rem", paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))" }
                    : { paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))", paddingRight: "2rem" }
                }
              >
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy leading-snug mb-6">
                  {s.title}
                </h2>
                <ul className="space-y-3">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0 size-5 rounded-full bg-brand-orange/10 flex items-center justify-center">
                        <Check className="size-3 text-brand-orange" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors group"
                >
                  Request a quote
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Image panel */}
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover min-h-[360px] lg:min-h-[480px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
