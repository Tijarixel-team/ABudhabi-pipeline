import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HomeHero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CapabilityList, ProductPreview } from "@/components/sections/CardGrids";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { assets } from "@/config/assets";
import { company } from "@/config/company";
import { products } from "@/content/products";
import { industries } from "@/content/industries";
import { capabilities } from "@/content/capabilities";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Stats />

      <section className="py-24 lg:py-36">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <SectionHeader
              title="Built in the UAE for infrastructure that cannot compromise."
              text={`${company.name} has manufactured glass-reinforced pipe systems since ${company.established}, supporting water, energy, municipal and industrial applications from facilities in Abu Dhabi and Dubai.`}
            />
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href="/about" variant="ghost">Discover ADPF</Button>
              <Link href="/capabilities" className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:gap-3 hover:text-primary">How we manufacture <ArrowRight aria-hidden size={17} /></Link>
            </div>
          </Reveal>
          <Reveal>
            <figure className="relative min-h-[440px] overflow-hidden rounded-[var(--radius)] lg:min-h-[600px]">
              <Image src={assets.manufacturing} alt="Composite pipe manufacturing and inspection at an industrial facility" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
              <figcaption className="absolute inset-x-5 bottom-5 max-w-sm rounded-[12px] bg-logo-bg/92 p-5 text-sm leading-6 text-white/76 backdrop-blur-sm">
                Engineered production supported by in-house quality control and application review.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader animate title="A focused range of composite pipe systems." text="Explore pipe and fitting systems by application, then bring your service conditions to our engineering team for project review." />
            <ScrollReveal variant="softFade" delay={0.08}><Button href="/products" variant="ghost">View all products</Button></ScrollReveal>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {products.slice(0, 3).map((product, index) => <ProductPreview key={product.slug} title={product.name} href={`/products/${product.slug}`} image={product.image.src} summary={product.summary} delay={index * 0.08} />)}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-logo-bg py-24 text-white lg:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <ScrollReveal variant="fadeLeft">
            <SectionHeader inverse title="One material platform. Many demanding environments." text="Composite pipe systems support infrastructure where corrosion resistance, engineered fit and dependable lifecycle performance matter." />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
              <Image src={assets.waterDesalination} alt="Composite pipelines serving coastal water infrastructure" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </ScrollReveal>
          <div className="border-t border-white/18">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.slug} variant="fadeRight" delay={index * 0.06} className="grid gap-3 border-b border-white/18 py-6 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8">
                <h3 className="text-2xl font-normal text-white">{industry.name}</h3>
                <div>
                  <p className="text-sm leading-6 text-white/68">{industry.summary}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-accent">{industry.applications.slice(0, 2).join(" · ")}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal variant="softFade"><Link href="/industries" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:gap-3 hover:text-white">Explore applications <ArrowRight aria-hidden size={17} /></Link></ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <ScrollReveal variant="fadeLeft" className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader title="From project conditions to tested production." text="A connected process helps align product selection, manufacturing and quality control with the requirements of each application." />
            <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-muted">
              <CheckCircle2 aria-hidden className="mt-0.5 shrink-0 text-secondary" size={18} />
              Engineering review starts with application and service conditions.
            </div>
          </ScrollReveal>
          <CapabilityList capabilities={capabilities.slice(0, 4)} />
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <ScrollReveal>
            <h2 className="max-w-4xl text-4xl font-normal leading-[1.08] text-primary sm:text-5xl lg:text-6xl">Bring us the conditions. We’ll help identify the right system.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Share the application, location and service requirements for a focused technical and commercial response.</p>
          </ScrollReveal>
          <ScrollReveal variant="softFade" delay={0.1}><Button href="/contact">Request a Quote</Button></ScrollReveal>
        </div>
      </section>
    </>
  );
}
