import { useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import SEO from "@/components/site/SEO";
import ScrollZoomImage from "@/components/site/ScrollZoomImage";
import { ArrowRight, ArrowLeft } from "lucide-react";
const garageImg = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/garage.webp";
const buildersImg = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/builders.webp";

const heroBgImg = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/hero%20background%20image.webp";
const ladyImg = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/ladyfixing.webp";
const imgPlumbing = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/piping.webp";
const imgElectrical = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/electrical.webp";
const imgTiling = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/tiling.webp";
const imgPainting = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/painting.webp";
const imgRenovations = "https://lonx0peeyem81byq.public.blob.vercel-storage.com/building.webp";

const services = [
  { img: imgPlumbing, title: "Plumbing", desc: "Installations, repairs, leak detection and full pipework." },
  { img: imgElectrical, title: "Electrical", desc: "Wiring, fault finding, panel installs and certifications." },
  { img: imgTiling, title: "Tiling", desc: "Floor and wall tiling with precision and lasting finishes." },
  { img: imgPainting, title: "Painting", desc: "Interior and exterior paintwork that lifts every room." },
  { img: imgRenovations, title: "Building Renovations", desc: "Turn old spaces into modern, functional homes." },
];

function ServiceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 500 : -500, behavior: "smooth" });
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.25em] font-semibold text-brand-orange uppercase">What We Do</div>
            <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl text-brand-navy">Services built to last</h2>
            <p className="mt-3 text-muted-foreground">A complete trade service offering under one trusted roof.</p>
          </div>
          {/* Arrow controls */}
          <div className="hidden sm:flex items-center gap-2 mb-1">
            <button
              onClick={() => scroll("left")}
              className="size-11 rounded-full border-2 border-brand-navy text-brand-navy flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="size-11 rounded-full border-2 border-brand-navy text-brand-navy flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-10 px-4 sm:px-6 flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {services.slice(0, 4).map(({ title, desc }, i) => (
          <div
            key={title}
            className="group relative flex-shrink-0 w-[85vw] sm:w-[480px] border border-brand-navy/20 snap-start p-8 sm:p-12 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] hover:border-brand-orange transition-colors bg-brand-navy"
          >
            <span className="absolute bottom-6 right-8 font-display font-extrabold text-[6rem] sm:text-[9rem] text-white/20 select-none leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display font-extrabold text-4xl sm:text-5xl uppercase leading-tight text-white">{title}</h3>
              <p className="mt-6 text-base text-white/70 leading-relaxed max-w-sm">{desc}</p>
            </div>
            <Link
              to="/services"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange uppercase tracking-wider hover:gap-4 transition-all"
            >
              Learn more <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
        {/* See all card */}
        <div className="flex-shrink-0 w-[85vw] sm:w-[480px] border border-dashed border-brand-orange snap-start p-8 sm:p-12 flex flex-col items-center justify-center min-h-[420px] sm:min-h-[460px] bg-brand-orange/5">
          <span className="font-display font-extrabold text-7xl text-brand-orange">+1</span>
          <p className="mt-4 text-base text-muted-foreground text-center">More services available</p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 border border-brand-navy text-brand-navy px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors"
          >
            View All <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <SEO
        title="PipePioneers — Plumbing, Electrical & Renovations in Bulawayo"
        description="Trusted trade service experts in Bulawayo: plumbing, electrical, tiling, painting and full home renovations. Get a free quote today."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.pipepioneersinfra.com/#business",
          name: "PipePioneers",
          alternateName: "Pipe Pioneers",
          description: "Trusted trade service experts in Bulawayo delivering plumbing, electrical, tiling, painting and full home renovations.",
          url: "https://www.pipepioneersinfra.com",
          logo: "https://www.pipepioneersinfra.com/logo.png",
          image: "https://www.pipepioneersinfra.com/og-image.jpg",
          telephone: ["+263787517314", "+26371378298"],
          email: "pipepioneerssales@gmail.com",
          slogan: "Winning Is The Norm",
          priceRange: "$$",
          currenciesAccepted: "ZWL, USD",
          paymentAccepted: "Cash, Bank Transfer",
          address: {
            "@type": "PostalAddress",
            streetAddress: "27 Bon Accord",
            addressLocality: "Westondale, Bulawayo",
            addressCountry: "ZW",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -20.1534,
            longitude: 28.5787,
          },
          areaServed: [
            { "@type": "City", name: "Bulawayo" },
            { "@type": "State", name: "Matabeleland South" },
            { "@type": "Country", name: "Zimbabwe" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Trade Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tiling" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building Renovations" } },
            ],
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+263787517314",
            contactType: "customer service",
            availableLanguage: ["English", "Ndebele"],
          },
        }}
      />
      <section className="relative overflow-hidden h-screen flex flex-col items-center justify-center text-center">
        <img
          src={heroBgImg}
          alt="PipePioneers background"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenburns-top"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 sm:px-8 flex flex-col items-center">
          <h1 className="font-display font-extrabold uppercase leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            PIPE<br />PIONEERS
          </h1>
          <p className="mt-6 text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Bulawayo's trusted trade team. Plumbing, electrical, tiling, painting and full renovations. Done right, first time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition-all">
              Get a Free Quote <ArrowRight className="size-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Our Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <ServiceSection />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-navy uppercase leading-tight">
              Building Bulawayo, One Project<br className="hidden sm:block" /> at a Time :{" "}
              <span className="text-brand-orange">Our Story</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 items-stretch min-h-[460px]">
            {/* Left navy card */}
            <div className="bg-brand-navy rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <p className="text-white/85 leading-relaxed text-sm">
                  PipePioneers started with a simple belief that great trade work begins with respect for the client, the craft and the community. From humble beginnings we've grown into a multi-disciplinary team trusted across Bulawayo.
                </p>
                <p className="mt-5 text-white/85 leading-relaxed text-sm">
                  Whether it's a plumbing repair, an electrical fit-out or a full building renovation, we bring the same standard every time: skilled workmanship, honest pricing and a job done right, first time.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 self-start inline-flex items-center gap-2 border border-white text-white px-5 py-2.5 text-sm font-semibold rounded-md hover:bg-white hover:text-brand-navy transition-colors"
              >
                About Us <ArrowRight className="size-4" />
              </Link>
            </div>
            {/* Center image */}
            <div className="rounded-2xl overflow-hidden">
              <ScrollZoomImage src={garageImg} alt="PipePioneers at work" className="w-full h-full object-cover min-h-[340px]" />
            </div>
            {/* Right image */}
            <div className="rounded-2xl overflow-hidden">
              <ScrollZoomImage src={buildersImg} alt="PipePioneers builders" className="w-full h-full object-cover min-h-[340px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-brand-navy">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.08]">
              Ready to Get <span className="text-brand-orange">Started?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Get in touch with Bulawayo's most trusted trade team. We'll give you a free quote, no obligation, no surprises. Just honest work done right.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition-all"
            >
              Get In Touch <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden w-full max-w-[560px] shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <ScrollZoomImage
                src={ladyImg}
                alt="PipePioneers tradesperson at work"
                className="object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
