import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SEO from "@/components/site/SEO";
import { ArrowRight, Check } from "lucide-react";
// Vercel Blob Storage URLs — regenerate in Vercel Dashboard if images stop loading
const electrical = "https://3rcrzj7nthpwvvqa.private.blob.vercel-storage.com/electrical.webp?vercel-blob-valid-until=1783071129032&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfM3JjUnpqN05UaHB3dnZxYSIsIm93bmVySWQiOiJ0ZWFtX1FmdVhOaHV4WlhXMmJXdGFjWkhHajNyRSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMTE0MDg3NjAzLCJpYXQiOjE3ODMwNzA4ODQzOTZ9.JVlwnKy3iOZ1HlDBbsst8lrr2CON7X0YwBWsDCLl1NU&vercel-blob-signature=9odN53dm7dykvC1e5L5XrRr2Hu0Eh2nQPvl7WOgYcHo";
const painting = "https://3rcrzj7nthpwvvqa.private.blob.vercel-storage.com/painting.webp?vercel-blob-valid-until=1783071142833&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfM3JjUnpqN05UaHB3dnZxYSIsIm93bmVySWQiOiJ0ZWFtX1FmdVhOaHV4WlhXMmJXdGFjWkhGajNyRSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMTE0MDg3NjAzLCJpYXQiOjE3ODMwNzA4ODQzOTZ9.JVlwnKy3iOZ1HlDBbsst8lrr2CON7X0YwBWsDCLl1NU&vercel-blob-signature=O3uDQsyR-0NFQ_nVKd9PIiR8hWD2K6NDoQwxACzK_is";
const tiling = "https://3rcrzj7nthpwvvqa.private.blob.vercel-storage.com/tiling.webp?vercel-blob-valid-until=1783071163720&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfM3JjUnpqN05UaHB3dnZxYSIsIm93bmVySWQiOiJ0ZWFtX1FmdVhOaHV4WlhXMmJXdGFjWkhHajNyRSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMTE0MDg3NjAzLCJpYXQiOjE3ODMwNzA4ODQzOTZ9.JVlwnKy3iOZ1HlDBbsst8lrr2CON7X0YwBWsDCLl1NU&vercel-blob-signature=RyYPT9hIWj0pcUP7Ef4HCTKZg7KH90RuLPeU9TSw4CM";
const piping = "https://3rcrzj7nthpwvvqa.private.blob.vercel-storage.com/piping.webp?vercel-blob-valid-until=1783071145392&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfM3JjUnpqN05UaHB3dnZxYSIsIm93bmVySWQiOiJ0ZWFtX1FmdVhOaHV4WlhXMmJXdGFjWkhHajNyRSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMTE0MDg3NjAzLCJpYXQiOjE3ODMwNzA4ODQzOTZ9.JVlwnKy3iOZ1HlDBbsst8lrr2CON7X0YwBWsDCLl1NU&vercel-blob-signature=SA5SxrU7bLN7uWRYrNXj5oS0U88aPcT1Ov5DjmlENn4";
const building = "https://3rcrzj7nthpwvvqa.private.blob.vercel-storage.com/building.webp?vercel-blob-valid-until=1783071123460&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfM3JjUnpqN05UaHB3dnZxYSIsIm93bmVySWQiOiJ0ZWFtX1FmdVhOaHV4WlhXMmJXdGFjWkhHajNyRSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMTE0MDg3NjAzLCJpYXQiOjE3ODMwNzA4ODQzOTZ9.JVlwnKy3iOZ1HlDBbsst8lrr2CON7X0YwBWsDCLl1NU&vercel-blob-signature=b8EHffMbpNbINM6MGMDiX7ipIlBau338-eNM3wR2TsE";

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
        subtitle="From a leaking pipe to a full renovation — one team, five trades, zero compromises. Quality workmanship delivered across Bulawa