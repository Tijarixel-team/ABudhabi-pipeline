import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { assets } from "@/config/assets";

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
  title,
  description,
  breadcrumbs = [],
  image = {
    src: assets.manufacturing,
    alt: "Composite pipe manufacturing and quality inspection"
  }
}: PageHeroProps) {
  return (
    <section data-no-blueprint className="relative z-30 overflow-hidden bg-logo-bg pt-32 text-white">
      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden>
        <Image src={image.src} alt="" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--logo-bg))_0%,hsl(var(--logo-bg)/.78)_36%,hsl(var(--logo-bg)/.24)_100%)]" />
      </div>
      <div className="section-shell relative grid gap-10 pb-20 lg:min-h-[480px] lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
        <div>
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/62">
            <Link href="/">Home</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight aria-hidden size={15} />
                <Link href={crumb.href}>{crumb.label}</Link>
              </span>
            ))}
          </nav>
          <h1 className="max-w-4xl text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-[64ch] text-lg leading-8 text-white/72">{description}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-white/12 shadow-[var(--shadow)] lg:hidden">
          <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 0vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
