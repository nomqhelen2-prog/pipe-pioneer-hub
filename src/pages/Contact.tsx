import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SEO from "@/components/site/SEO";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const SERVICE_ID = "service_za94e2e";
const TEMPLATE_ID = "template_ofk8nxg";
const PUBLIC_KEY = "8Y3im7Y8EigRNpRNd";

const infoCards = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "No 27 Bon Accord, Westondale, Bulawayo",
  },
  {
    icon: Phone,
    label: "Contact Phone Number",
    value: "+263 787 517 314 / +263 71 378 298",
    href: "tel:+263787517314",
  },
  {
    icon: Mail,
    label: "Mail Address",
    value: "pipepioneerssales@gmail.com",
    href: "mailto:pipepioneerssales@gmail.com",
  },
];

function Field({
  label, name, type = "text", required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-brand-navy">
        {label}{required && <span className="text-brand-orange"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder ?? `Enter Your ${label}`}
        className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
      />
    </div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    if (timeRef.current) {
      timeRef.current.value = new Date().toLocaleString();
    }
    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setSent(true);
      formRef.current.reset();
      toast.success("Message sent! We'll be in touch shortly.");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send message. Please try calling us instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <SEO
        title="Contact PipePioneers — Free Quotes for Bulawayo Trade Work"
        description="Get in touch with PipePioneers for free plumbing, electrical, tiling, painting or renovation quotes in Bulawayo. Replies within 24 hours."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact PipePioneers",
          url: "https://www.pipepioneersinfra.com/contact",
          description: "Contact PipePioneers for free trade service quotes in Bulawayo, Zimbabwe.",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "PipePioneers",
            telephone: ["+263787517314", "+26371378298"],
            email: "pipepioneerssales@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "27 Bon Accord",
              addressLocality: "Westondale, Bulawayo",
              addressCountry: "ZW",
            },
          },
        }}
      />
      <section className="relative overflow-hidden pt-40 pb-24 text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-brand-navy/60" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="w-fit rounded-full border border-brand-orange px-4 py-1 text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase mb-6">
            Contact Us
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight uppercase tracking-wide max-w-3xl">
            Your Dream, Our Vision — Let's Connect
          </h1>
          <p className="mt-5 text-white/75 text-base md:text-lg max-w-2xl leading-relaxed">
            We're here to turn your trade goals into reality. Whether you have a question, need a quote, or want to discuss a project — reach out to us. Let's build something remarkable together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-3 gap-8 items-start">

        {/* Form — takes 2 cols */}
        <div className="lg:col-span-2">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-secondary/40 p-8 space-y-5 shadow-sm"
          >
            <Field label="Full Name" name="name" required />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Mobile Number" name="phone" type="tel" required />
              <Field label="Email Address" name="email" type="email" required />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-navy">
                Messages <span className="text-brand-orange">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Enter Your Message"
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
              />
            </div>
            <input ref={timeRef} type="hidden" name="time" />
            <input type="hidden" name="title" value="New Contact Form Submission" />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-lg border border-brand-navy px-8 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors disabled:opacity-60"
              >
                {loading ? <Loader2 className="size-4 animate-spin" /> : sent ? <CheckCircle2 className="size-4" /> : <Send className="size-4" />}
                {loading ? "Sending..." : sent ? "Sent!" : "Submit Your Form"}
              </button>
            </div>
          </form>
        </div>

        {/* Info cards — 1 col */}
        <div className="space-y-4">
          {infoCards.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="rounded-2xl bg-brand-orange p-6 text-white"
            >
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy">
                {label}
              </span>
              {href ? (
                <a href={href} className="mt-3 block text-sm leading-relaxed hover:text-white/80">
                  {value}
                </a>
              ) : (
                <p className="mt-3 text-sm leading-relaxed">{value}</p>
              )}
            </div>
          ))}
        </div>

      </section>
    </Layout>
  );
}
