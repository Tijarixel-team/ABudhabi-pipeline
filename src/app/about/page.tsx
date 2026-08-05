import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CapabilityList } from "@/components/sections/CardGrids";
import { company } from "@/config/company";
import { assets } from "@/config/assets";
import { capabilities } from "@/content/capabilities";

export const metadata = { title: "About", description: "Company history and manufacturing footprint for Abu Dhabi Pipe Factory." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A UAE composite pipe manufacturer established in 1981." description="ADPF manufactures glass-reinforced pipes and fittings for water, energy, municipal and industrial infrastructure." breadcrumbs={[{ label: "About", href: "/about" }]} image={{ src: assets.facilityYard, alt: "Modern UAE composite pipe facility and organized pipe yard" }} />
      <section className="py-24 lg:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeader title="Four decades of manufacturing in the UAE." text={`${company.name} was established in ${company.established}. Its systems serve applications including desalination, potable water, sewerage, drainage, cooling water, fire protection and industrial infrastructure.`} />
            <div className="mt-10 border-t border-secondary/20">
              <div className="grid gap-3 border-b border-secondary/20 py-6 sm:grid-cols-[120px_1fr]"><p className="font-serif text-3xl text-accent">1981</p><p className="leading-7 text-muted">Abu Dhabi Pipe Factory established in Abu Dhabi.</p></div>
              <div className="grid gap-3 border-b border-secondary/20 py-6 sm:grid-cols-[120px_1fr]"><p className="font-serif text-3xl text-accent">Today</p><p className="leading-7 text-muted">Manufacturing presence in Abu Dhabi and Dubai serving regional infrastructure applications.</p></div>
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-[var(--radius)] lg:min-h-[620px]"><Image src={assets.facilityYard} alt="Composite pipe manufacturing facility and organized pipe yard" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="bg-white py-24 lg:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20"><SectionHeader title="A connected manufacturing capability." text="Engineering review, filament winding, quality control, delivery coordination and field support work as one project-focused process." /><CapabilityList capabilities={capabilities} /></div></section>
    </>
  );
}
