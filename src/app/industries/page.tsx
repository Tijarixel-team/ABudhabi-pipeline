import { IndustryGrid } from "@/components/sections/CardGrids";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { industries } from "@/content/industries";

export const metadata = { title: "Industries", description: "Infrastructure applications served by ADPF composite pipe systems." };

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Applications across water, energy and industrial infrastructure." description="Public ADPF content references product usage in oil and gas, desalination, power, pumping stations, fire protection, irrigation, potable water, sewerage and drainage." breadcrumbs={[{ label: "Industries", href: "/industries" }]} image={{ src: assets.waterDesalination, alt: "Composite pipelines serving coastal water infrastructure" }} />
      <section className="py-20"><div className="section-shell"><SectionHeader eyebrow="Applications" title="Verified public application areas." text="Each card is rendered from content data and can be expanded into individual application pages when ADPF supplies project-specific proof points." /><div className="mt-10"><IndustryGrid industries={industries} /></div></div></section>
    </>
  );
}
