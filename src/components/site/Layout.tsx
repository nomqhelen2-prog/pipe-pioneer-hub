import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Navigation } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { useState, useEffect, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        transparent ? "bg-transparent border-transparent" : "bg-white border-b border-border shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoImg}
            alt="PipePioneers logo"
            className={`h-10 w-auto group-hover:scale-105 transition-transform ${transparent ? "brightness-0 invert" : ""}`}
          />
          <div className="leading-tight">
            <div className={`font-display font-bold text-lg transition-colors ${transparent ? "text-white" : "text-brand-navy"}`}>
              PipePioneers
            </div>
            <div className="text-[10px] tracking-[0.18em] text-brand-orange font-semibold">WINNING IS THE NORM</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? "text-brand-orange"
                    : transparent
                    ? "text-white/90 hover:text-brand-orange"
                    : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${transparent ? "text-white" : "text-brand-navy"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  path === n.to ? "bg-secondary text-brand-orange" : "text-brand-navy"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="PipePioneers logo" className="h-10 w-auto brightness-0 invert" />
            <div>
              <div className="font-display font-bold text-lg">PipePioneers</div>
              <div className="text-[10px] tracking-[0.18em] text-brand-orange font-semibold">WINNING IS THE NORM</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-md">
            Your trusted trade service experts in Bulawayo. Plumbing, electrical, tiling, painting & building renovations — done right, first time.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="flex items-center gap-2 hover:text-brand-orange group">
                  <Navigation className="size-4 text-brand-orange fill-brand-orange flex-shrink-0" />
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 text-brand-orange flex-shrink-0" />
              <span>
                <a
                  href="https://api.whatsapp.com/send?phone=263787517314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange"
                >
                  +263 787 517 314
                </a>
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=26371378298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange"
                >
                  +263 71 378 298
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 text-brand-orange flex-shrink-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pipepioneerssales@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange"
              >
                pipepioneerssales@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 text-brand-orange flex-shrink-0" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=No+27+Bon+Accord%2C+Westondale%2C+Bulawayo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange"
              >
                No 27 Bon Accord, Westondale, Bulawayo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} PipePioneers. All rights reserved.
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
