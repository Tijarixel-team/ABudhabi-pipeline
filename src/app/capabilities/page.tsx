import Image from "next/image";
import { CapabilityList } from "@/components/sections/CardGrids";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { capabilities } from "@/content/capabilities";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata = { title: "Capabilities", description: "Manufacturing, engineering and quality capabilities for ADPF pipe systems." };

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Manufacturing" title="Filament winding, engineering review and in-house quality control." description="A connected process from application review through production, testing, delivery and installation support." breadcrumbs={[{ label: "Capabilities", href: "/capabilities" }]} image={{ src: assets.manufacturing, alt: "Composite pipe inspection and manufacturing equipment" }} />
      <section className="py-24 lg:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div><SectionHeader animate title="Manufacturing with control at every stage." text="ADPF uses dual helical and continuous filament winding methods, supported by in-house quality control laboratories for short- and long-term testing." /><ScrollReveal variant="fadeLeft" className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[var(--radius)]"><Image src={assets.facilityYard} alt="Modern composite pipe facility and organized pipe yard" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></ScrollReveal></div>
        <CapabilityList capabilities={capabilities} />
      </div></section>
    </>
  );
}
