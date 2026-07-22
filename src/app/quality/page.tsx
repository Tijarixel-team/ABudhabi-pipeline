import { CertificationGrid } from "@/components/sections/CardGrids";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { certifications } from "@/content/certifications";

export const metadata = { title: "Quality", description: "Quality control, testing and approval information for ADPF." };

export default function QualityPage() {
  return (
    <>
      <PageHero eyebrow="Quality" title="Quality-control information with explicit verification status." description="The site only displays standards and approvals found in public ADPF or reputable third-party sources, with scope requiring launch review where necessary." breadcrumbs={[{ label: "Quality", href: "/quality" }]} image={{ src: assets.qualityLab, alt: "Composite pipe sample inspected with quality-control equipment" }} />
      <section className="py-20"><div className="section-shell"><SectionHeader eyebrow="Standards" title="No unsupported certification logos." text="Certification cards are intentionally text-based until current certificates, validity dates, scope and logo usage permissions are supplied." /><div className="mt-10"><CertificationGrid certifications={certifications} /></div></div></section>
    </>
  );
}
