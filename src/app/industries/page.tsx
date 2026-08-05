import { IndustryGrid } from "@/components/sections/CardGrids";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { industries } from "@/content/industries";

export const metadata = { title: "Industries", description: "Infrastructure applications served by ADPF composite pipe systems." };

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Applications across water, energy and industrial infrastructure." description="ADPF composite pipe systems serve water, desalination, utility, municipal and industrial networks across demanding operating environments." breadcrumbs={[{ label: "Industries", href: "/industries" }]} image={{ src: assets.waterDesalination, alt: "Composite pipelines serving coastal water infrastructure" }} />
      <section className="py-24 lg:py-32"><div className="section-shell"><SectionHeader title="Designed around the application." text="Start with the environment and service conditions. Our team can help identify the product system and technical information relevant to your project." /><div className="mt-14"><IndustryGrid industries={industries} /></div></div></section>
    </>
  );
}
