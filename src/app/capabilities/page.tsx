import Image from "next/image";
import { CapabilityList } from "@/components/sections/CardGrids";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { capabilities } from "@/content/capabilities";

export const metadata = { title: "Capabilities", description: "Manufacturing, engineering and quality capabilities for ADPF pipe systems." };

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Manufacturing" title="Filament winding, engineering review and in-house quality control." description="The process journey is structured for a scroll story from engineering through manufacturing, testing, delivery and installation support." breadcrumbs={[{ label: "Capabilities", href: "/capabilities" }]} image={{ src: assets.manufacturing, alt: "Composite pipe inspection and manufacturing equipment" }} />
      <section className="py-20"><div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div><SectionHeader eyebrow="Process" title="A practical manufacturing story." text="ADPF public sources identify dual helical filament winding and continuous filament winding methods, plus in-house QC laboratories for short- and long-term tests." /><div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)]"><Image src={assets.facilityYard} alt="Modern composite pipe facility and organized pipe yard" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" /></div></div>
        <CapabilityList capabilities={capabilities} />
      </div></section>
    </>
  );
}
