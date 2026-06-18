import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import hero from "@/assets/hero.jpg";
import electrical from "@/assets/electrical.jpg";
import painting from "@/assets/painting.jpg";
import tiling from "@/assets/tiling.jpg";
import poster from "@/assets/poster.jpg";
import independence from "@/assets/independence.jpg";
import africa from "@/assets/africa-day.jpg";

const items = [
  { src: hero, label: "Plumbing install" },
  { src: electrical, label: "Electrical wiring" },
  { src: tiling, label: "Bathroom tiling" },
  { src: painting, label: "Interior repaint" },
  { src: poster, label: "Our crew on site" },
  { src: independence, label: "Community" },
  { src: africa, label: "Africa Day" },
];

export default function Gallery() {
  return (
    <Layout>
      <PageHeader eyebrow="Gallery" title="Recent work, real results." subtitle="A snapshot of projects we've delivered across Bulawayo — from quick fixes to full renovations." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {items.map((it, i) => (
            <figure key={i} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-[var(--shadow-brand)]">
              <img src={it.src} alt={it.label} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 to-transparent text-white p-4 text-sm font-medium">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
