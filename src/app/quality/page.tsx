import { CertificationGrid } from "@/components/sections/CardGrids";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { certifications } from "@/content/certifications";

export const metadata = { title: "Quality", description: "Quality control, testing and approval information for ADPF." };

export default function QualityPage() {
  return (
    <>
      <PageHero eyebrow="Quality" title="Quality control embedded in manufacturing." description="In-house inspection and testing support consistent production across ADPF composite pipe systems." breadcrumbs={[{ label: "Quality", href: "/quality" }]} image={{ src: assets.qualityLab, alt: "Composite pipe sample inspected with quality-control equipment" }} />
      <section className="py-24 lg:py-32"><div className="section-shell"><SectionHeader animate title="Management systems and product approvals." text="Review the standards and approvals referenced for ADPF systems. Contact our team for current certificates and the scope relevant to your application." /><div className="mt-14"><CertificationGrid certifications={certifications} /></div></div></section>
    </>
  );
}
