import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

// TODO: Replace with your own EmailJS credentials from https://www.emailjs.com/
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setSent(true);
      formRef.current.reset();
      toast.success("Message sent! We'll be in touch shortly.");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send message. Please call us instead or check EmailJS credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Let's get the job done." subtitle="Tell us about your project and we'll get back with a free quote — usually within 24 hours." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-5 gap-10">
        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-xl bg-brand-navy text-white p-6">
            <h3 className="font-display font-bold text-xl">Get in touch</h3>
            <p className="mt-1 text-sm text-white/70">We're here to help with any trade service in Bulawayo.</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><Phone className="size-5 text-brand-orange mt-0.5" />
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Phone</div>
                  <a href="tel:+263787517314" className="block hover:text-brand-orange">+263 787 517 314</a>
                  <a href="tel:+26371378298" className="block hover:text-brand-orange">+263 71 378 298</a>
                </div>
              </li>
              <li className="flex items-start gap-3"><Mail className="size-5 text-brand-orange mt-0.5" />
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Email</div>
                  <a href="mailto:pipepioneerssales@gmail.com" className="hover:text-brand-orange break-all">pipepioneerssales@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3"><MapPin className="size-5 text-brand-orange mt-0.5" />
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Visit</div>
                  No 27 Bon Accord<br />Westondale, Bulawayo
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <form ref={formRef} onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-5 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="from_name" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="reply_to" type="email" required />
            <Field label="Service needed" name="service" placeholder="Plumbing, Electrical, Tiling..." />
            <div>
              <label className="text-sm font-medium text-brand-navy">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-accent)] hover:brightness-105 disabled:opacity-70 w-full sm:w-auto"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : sent ? <CheckCircle2 className="size-4" /> : <Send className="size-4" />}
              {loading ? "Sending..." : sent ? "Sent!" : "Send message"}
            </button>
            <p className="text-xs text-muted-foreground">
              The form uses EmailJS. Add your Service ID, Template ID and Public Key in <code className="text-brand-navy">src/pages/Contact.tsx</code> to enable delivery.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-brand-navy">{label}{required && <span className="text-brand-orange"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
      />
    </div>
  );
}
