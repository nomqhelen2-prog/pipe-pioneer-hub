import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 py-32 text-center">
        <div className="font-display font-extrabold text-7xl text-brand-orange">404</div>
        <h1 className="mt-4 font-display font-bold text-2xl text-brand-navy">Page not found</h1>
        <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-brand-navy text-white px-5 py-3 text-sm font-semibold">Back home</Link>
      </section>
    </Layout>
  );
}
