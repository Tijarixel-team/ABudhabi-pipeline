import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/animations/ScrollReveal";

export const metadata = { title: "Projects", description: "Infrastructure applications supported by ADPF composite pipe systems." };

const applicationExperience = [
  { title: "Water and desalination", text: "Potable water, seawater intake, desalination and cooling-water networks." },
  { title: "Municipal infrastructure", text: "Sewerage, drainage, irrigation and cross-country water distribution." },
  { title: "Energy and industry", text: "Power, district cooling, petrochemical and industrial utility applications." }
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Experience" title="Composite systems for essential infrastructure." description="Explore the application environments associated with ADPF pipe systems, from water networks to energy and industrial facilities." breadcrumbs={[{ label: "Projects", href: "/projects" }]} image={{ src: assets.fieldInstallation, alt: "Composite pipeline installation in a UAE industrial facility" }} />
      <section className="py-24 lg:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <ScrollReveal variant="fadeLeft" className="relative min-h-[480px] overflow-hidden rounded-[var(--radius)] lg:min-h-[640px]"><Image src={assets.fieldInstallation} alt="Composite pipeline installed in an industrial facility" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></ScrollReveal>
          <div>
            <SectionHeader animate title="Experience across demanding applications." text="Application requirements vary by environment. Speak with our team about relevant product systems, service conditions and supporting technical information." />
            <StaggerReveal className="mt-10 border-t border-secondary/20">
              {applicationExperience.map((item) => <StaggerItem key={item.title}><div className="border-b border-secondary/20 py-6"><h2 className="text-2xl font-normal text-primary">{item.title}</h2><p className="mt-2 leading-7 text-muted">{item.text}</p></div></StaggerItem>)}
            </StaggerReveal>
            <ScrollReveal variant="softFade"><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:gap-3 hover:text-primary">Discuss your application <ArrowRight aria-hidden size={17} /></Link></ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
