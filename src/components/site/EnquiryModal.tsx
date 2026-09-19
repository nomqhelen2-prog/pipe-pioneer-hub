import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { X, Send, Loader2, CheckCircle2, MessageSquareText } from "lucide-react";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/emailjs";

const services = [
  "Plumbing",
  "Electrical",
  "Tiling",
  "Painting",
  "Building Renovations",
  "Other / Not sure",
];

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageBodyRef = useRef<HTMLTextAreaElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Reset "sent" state whenever the modal is reopened
  useEffect(() => {
    if (open) setSent(false);
  }, [open]);

  if (!open) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    if (timeRef.current) {
      timeRef.current.value = new Date().toLocaleString();
    }
    if (messageRef.current) {
      const service = serviceRef.current?.value ?? "";
      const body = messageBodyRef.current?.value ?? "";
      messageRef.current.value = `Service requested: ${service}${body ? `\n\n${body}` : ""}`;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setSent(true);
      formRef.current.reset();
      toast.success("Enquiry sent! We'll be in touch shortly.");
      setTimeout(onClose, 1400);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send your enquiry. Please try calling us instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Card */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-secondary text-brand-navy hover:bg-secondary/70 transition-colors"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-start gap-3 pr-10">
          <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
            <MessageSquareText className="size-5 text-brand-orange" />
          </span>
          <div>
            <h2 id="enquiry-modal-title" className="font-display font-bold text-xl text-brand-navy">
              Make an Enquiry
            </h2>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Tell us what you need and we'll get back to you with a free quote, usually within 24 hours.
            </p>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-brand-navy">
              Full Name <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-brand-navy">
                Mobile Number <span className="text-brand-orange">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+263 ..."
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-navy">
                Email Address <span className="text-brand-orange">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-brand-navy">
              Service Needed <span className="text-brand-orange">*</span>
            </label>
            <select
              ref={serviceRef}
              required
              defaultValue=""
              className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-brand-navy">Message</label>
            <textarea
              ref={messageBodyRef}
              rows={4}
              placeholder="Tell us a bit more about what you need"
              className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
            />
          </div>

          <input ref={timeRef} type="hidden" name="time" />
          <input ref={messageRef} type="hidden" name="message" />
          <input type="hidden" name="title" value="New Enquiry (Website Popup)" />

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition-all disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : sent ? (
              <CheckCircle2 className="size-4" />
            ) : (
              <Send className="size-4" />
            )}
            {loading ? "Sending..." : sent ? "Sent!" : "Send Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
