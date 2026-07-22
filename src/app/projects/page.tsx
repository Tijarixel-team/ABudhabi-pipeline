import { ProjectGrid } from "@/components/sections/CardGrids";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assets } from "@/config/assets";
import { projects } from "@/content/projects";

export const metadata = { title: "Projects", description: "Reusable ADPF project portfolio architecture pending verified project records." };

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Experience" title="Project portfolio structure ready for verified references." description="Detailed client, project, scope and year claims are not invented. Placeholder records are clearly marked until ADPF approves public case studies." breadcrumbs={[{ label: "Projects", href: "/projects" }]} image={{ src: assets.fieldInstallation, alt: "Composite pipeline installation in a UAE industrial facility" }} />
      <section className="py-20"><div className="section-shell"><SectionHeader eyebrow="Portfolio" title="Launch-ready interface, review-needed records." text="Replace placeholder records in src/content/projects.ts with verified project names, images, scopes and permissions." /><div className="mt-10"><ProjectGrid projects={projects} /></div></div></section>
    </>
  );
}
