import Image from "next/image";
import { HomeHero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProductPreview, IndustryGrid, CapabilityList } from "@/components/sections/CardGrids";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
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
      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader eyebrow="Company" title="Established composite pipe manufacturing in Abu Dhabi." text={`${company.name} was established in ${company.established} and publicly describes manufacturing facilities in Abu Dhabi and Dubai for glass-reinforced plastic pipes and fittings.`} />
            <div className="mt-8 flex flex-wrap gap-3"><Button href="/about">About ADPF</Button><Button href="/capabilities" variant="ghost">Manufacturing capability</Button></div>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)]">
              <Image src={assets.manufacturing} alt="Composite pipe manufacturing inspection placeholder" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeader eyebrow="Products" title="Pipe systems organized for technical enquiry." text="Product content is driven from typed data files so catalogues, images and specifications can be replaced without changing reusable components." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.slice(0, 3).map((product) => <ProductPreview key={product.slug} title={product.name} href={`/products/${product.slug}`} image={product.image.src} summary={product.summary} />)}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="section-shell">
          <SectionHeader eyebrow="Applications" title="Built around infrastructure applications." text="Public ADPF material references installations across water, energy, oil and gas, municipal and industrial infrastructure." />
          <div className="mt-10"><IndustryGrid industries={industries.slice(0, 6)} /></div>
        </div>
      </section>
      <section className="bg-primary py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Capability" title="From engineering review to testing and support." text="The manufacturing story is presented as a reusable process sequence, with each claim tied to a verification status in content data." />
          <div className="mt-10 text-foreground"><CapabilityList capabilities={capabilities.slice(0, 4)} /></div>
        </div>
      </section>
      <section className="py-20">
        <div className="section-shell rounded-[var(--radius)] bg-primary p-8 text-white sm:p-12">
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">Need catalogue data or an engineered quote?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/72">Send product interest, application, location and project conditions. The current demo API validates requests and marks where email delivery should be connected.</p>
          <div className="mt-8"><Button href="/contact">Start an enquiry</Button></div>
        </div>
      </section>
    </>
  );
}
