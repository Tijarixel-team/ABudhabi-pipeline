import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { getProduct, products } from "@/content/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.summary, alternates: { canonical: `/products/${product.slug}` } };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero eyebrow={product.category} title={product.name} description={product.summary} breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.name, href: `/products/${product.slug}` }]} image={{ src: product.image.src, alt: product.image.alt }} />
      <section className="py-20"><div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)]"><Image src={product.image.src} alt={product.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
        <div>
          <p className="leading-8 text-muted">{product.description}</p>
          <h2 className="mt-8 text-2xl font-semibold text-primary">Applications</h2>
          <ul className="mt-4 grid gap-2">{product.applications.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 aria-hidden className="mt-1 shrink-0 text-secondary" size={17} />{item}</li>)}</ul>
          <h2 className="mt-8 text-2xl font-semibold text-primary">Technical Notes</h2>
          <ul className="mt-4 grid gap-2 text-muted">{product.specifications.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="mt-8"><Button href="/contact">Enquire about {product.name}</Button></div>
        </div>
      </div></section>
    </>
  );
}
