import { FileText } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata = { title: "Technical Resources", description: "Request ADPF catalogues and technical product information." };

export default function DownloadsPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Technical information for project decisions." description="Request the product catalogue and technical information relevant to your application and service conditions." breadcrumbs={[{ label: "Resources", href: "/downloads" }]} />
      <section className="py-24 lg:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
          <ScrollReveal variant="fadeScale" className="flex size-20 items-center justify-center rounded-full bg-secondary/10 text-secondary"><FileText aria-hidden size={32} /></ScrollReveal>
          <div>
            <ScrollReveal variant="fadeRight"><h2 className="max-w-3xl text-4xl font-normal leading-[1.08] text-primary sm:text-5xl">Get the right document for the right application.</h2></ScrollReveal>
            <ScrollReveal variant="softFade" delay={0.08}><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Tell us which product system or application you are evaluating. Our team can direct your request to the relevant catalogue or technical information.</p></ScrollReveal>
            <ScrollReveal variant="softFade" delay={0.12} className="mt-9"><Button href="/contact">Request technical information</Button></ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
