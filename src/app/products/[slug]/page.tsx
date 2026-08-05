import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { getProduct, products } from "@/content/products";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/animations/ScrollReveal";

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
      <section className="py-24 lg:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <ScrollReveal variant="fadeLeft" className="relative min-h-[440px] overflow-hidden rounded-[var(--radius)] lg:min-h-[620px]"><Image src={product.image.src} alt={product.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></ScrollReveal>
        <div>
          <ScrollReveal variant="fadeRight"><p className="leading-8 text-muted">{product.description}</p></ScrollReveal>
          <div className="mt-9 border-t border-secondary/20 pt-7"><ScrollReveal variant="fadeRight" delay={0.06}><h2 className="text-2xl font-normal text-primary">Applications</h2></ScrollReveal><StaggerReveal as="ul" className="mt-5 grid gap-3">{product.applications.map((item) => <StaggerItem as="li" key={item} className="flex gap-2"><CheckCircle2 aria-hidden className="mt-1 shrink-0 text-secondary" size={17} />{item}</StaggerItem>)}</StaggerReveal></div>
          <div className="mt-9 border-t border-secondary/20 pt-7"><ScrollReveal variant="fadeRight" delay={0.1}><h2 className="text-2xl font-normal text-primary">Project review</h2></ScrollReveal><StaggerReveal as="ul" className="mt-4 grid gap-2 leading-7 text-muted">{product.specifications.map((item) => <StaggerItem as="li" key={item}>{item}</StaggerItem>)}</StaggerReveal></div>
          <ScrollReveal variant="softFade" className="mt-9"><Button href="/contact">Request a Quote</Button></ScrollReveal>
        </div>
      </div></section>
    </>
  );
}
