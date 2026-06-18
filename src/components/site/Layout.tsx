import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin, Wrench } from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="size-10 rounded-md grid place-items-center bg-brand-navy text-white shadow-[var(--shadow-brand)] group-hover:scale-105 transition-transform">
        <Wrench className="size-5 text-brand-orange" />
      </div>
      <div className="leading-tight">
        <div className="font-display font-bold text-brand-navy text-lg">PipePioneers</div>
        <div className="text-[10px] tracking-[0.18em] text-brand-orange font-semibold">WINNING IS THE NORM</div>
      </div>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-accent)] hover:brightness-105"
          >
            Get a Quote
          </Link>
        </nav>
        <button className="md:hidden p-2 text-brand-navy" onClick={() => setOpen((v) => !v)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
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
    <footer className="bg-brand-navy text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-md grid place-items-center bg-white/10">
              <Wrench className="size-5 text-brand-orange" />
            </div>
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
          <h4 className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Pages</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-brand-orange">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 text-brand-orange" /> +263 787 517 314<br />+263 71 378 298</li>
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 text-brand-orange" /> pipepioneerssales@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-brand-orange" /> No 27 Bon Accord, Westondale, Bulawayo</li>
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
