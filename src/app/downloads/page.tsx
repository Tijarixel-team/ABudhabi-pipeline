import { DownloadsList } from "@/components/sections/DownloadsList";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { downloads } from "@/content/downloads";

export const metadata = { title: "Downloads", description: "ADPF catalogue, brochure, technical and certification document download area." };

export default function DownloadsPage() {
  return (
    <>
      <PageHero eyebrow="Downloads" title="Catalogues and technical documents." description="The structure is ready for approved local PDFs. Placeholder links are present so the interface can be reviewed without implying current document approval." breadcrumbs={[{ label: "Downloads", href: "/downloads" }]} />
      <section className="py-20"><div className="section-shell"><SectionHeader eyebrow="Documents" title="Replace placeholders with approved files." text="Store PDFs in public/documents and update src/content/downloads.ts with file type, size and verification status." /><div className="mt-10"><DownloadsList items={downloads} /></div></div></section>
    </>
  );
}
