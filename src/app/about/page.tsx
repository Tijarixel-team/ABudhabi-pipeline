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
      <PageHero eyebrow="About" title="A UAE composite pipe manufacturer established in 1981." description="ADPF public information describes glass-reinforced pipe and fitting manufacturing in Abu Dhabi and Dubai, with infrastructure applications across the Gulf and beyond." breadcrumbs={[{ label: "About", href: "/about" }]} image={{ src: assets.facilityYard, alt: "Modern UAE composite pipe facility and organized pipe yard" }} />
      <section className="py-20"><div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="History" title="From technical collaboration to regional infrastructure supply." text={`Abu Dhabi Pipe Factory was established in ${company.established} in technical collaboration with Cord International, a French company. Public materials reference thousands of kilometres of ADPF pipes installed in applications including petrochemical plants, desalination, potable water, sewerage, drainage, cooling water and fire-fighting systems.`} />
        <div className="grid gap-4">
          {[1981, 2000, 2026].map((year, index) => <article key={year} className="rounded-[var(--radius)] border border-secondary/15 bg-white p-6 shadow-sm"><p className="text-2xl font-semibold text-accent">{year}</p><p className="mt-2 text-muted">{index === 0 ? "ADPF established in Abu Dhabi." : index === 1 ? "Public source references more than 25 years of composite pipe manufacturing experience." : "Current launch content requires final company review for capacities, approvals and project records."}</p></article>)}
        </div>
      </div></section>
      <section className="bg-white py-20"><div className="section-shell"><SectionHeader eyebrow="Footprint" title="Abu Dhabi and Dubai manufacturing presence." text="The public ADPF website references facilities in Abu Dhabi and Dubai; third-party profiles identify Mafraq Industrial Area and Dubai Investment Park." /><div className="mt-10"><CapabilityList capabilities={capabilities} /></div></div></section>
    </>
  );
}
