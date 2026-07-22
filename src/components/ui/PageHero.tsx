import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { assets } from "@/config/assets";
import { Badge } from "./Badge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
  image?: {
    src: string;
    alt: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  image = {
    src: assets.manufacturing,
    alt: "Composite pipe manufacturing and quality inspection"
  }
}: PageHeroProps) {
  return (
    <section className="technical-grid relative overflow-hidden bg-primary pt-32 text-white">
      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden>
        <Image src={image.src} alt="" fill priority sizes="48vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--primary))_0%,rgba(8,33,59,.78)_36%,rgba(8,33,59,.24)_100%)]" />
      </div>
      <div className="section-shell relative grid gap-10 pb-16 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
        <div>
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/64">
            <Link href="/">Home</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight aria-hidden size={15} />
                <Link href={crumb.href}>{crumb.label}</Link>
              </span>
            ))}
          </nav>
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">{description}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-white/12 shadow-[var(--shadow)] lg:hidden">
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
