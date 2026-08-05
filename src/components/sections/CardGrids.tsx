import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Capability, Certification, Industry, Project } from "@/types/site";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/animations/ScrollReveal";

export function IndustryGrid({ industries }: { industries: Industry[] }) {
  return (
    <StaggerReveal className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <StaggerItem key={industry.slug}>
          <article className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] bg-logo-bg">
              <Image src={industry.image.src} alt={industry.image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="pt-5">
              <h2 className="text-2xl font-normal text-primary">{industry.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{industry.summary}</p>
              <ul className="mt-5 grid gap-2 border-t border-secondary/15 pt-4 text-sm text-foreground">
                {industry.applications.slice(0, 3).map((item) => <li key={item} className="flex gap-2"><CheckCircle2 aria-hidden className="mt-0.5 shrink-0 text-secondary" size={16} />{item}</li>)}
              </ul>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}

export function CapabilityList({ capabilities }: { capabilities: Capability[] }) {
  return (
    <StaggerReveal className="border-t border-secondary/20">
      {capabilities.map((capability, index) => (
        <StaggerItem key={capability.title}>
          <article className="grid gap-4 border-b border-secondary/20 py-7 md:grid-cols-[48px_1fr] md:gap-6">
            <div className="pt-1 text-sm font-bold text-secondary">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h2 className="text-2xl font-normal text-primary">{capability.title}</h2>
              <p className="mt-3 leading-7 text-muted">{capability.description}</p>
              {capability.steps ? <p className="mt-4 text-sm font-semibold leading-6 text-secondary">{capability.steps.join(" · ")}</p> : null}
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}

export function CertificationGrid({ certifications }: { certifications: Certification[] }) {
  return (
    <StaggerReveal className="grid border-t border-secondary/20 md:grid-cols-2">
      {certifications.map((certification) => (
        <StaggerItem key={certification.title} className="border-b border-secondary/20 md:px-7 md:odd:border-r md:odd:pl-0">
          <article className="py-8">
            <p className="text-sm font-semibold text-secondary">{certification.issuer}</p>
            <h2 className="mt-3 text-2xl font-normal text-primary">{certification.title}</h2>
            <p className="mt-3 leading-7 text-muted">{certification.description}</p>
          </article>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <StaggerReveal className="grid gap-10 md:grid-cols-2">
      {projects.map((project) => (
        <StaggerItem key={project.title}>
          <article>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] bg-logo-bg">
              <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="pt-5">
              <p className="text-sm font-semibold text-secondary">{project.industry} · {project.location}</p>
              <h2 className="mt-3 text-2xl font-normal text-primary">{project.title}</h2>
              <p className="mt-3 leading-7 text-muted">{project.scope}</p>
              <p className="mt-4 border-t border-secondary/15 pt-4 text-sm font-semibold text-primary">{project.products.join(" · ")}</p>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}

export function ProductPreview({ title, href, image, summary, delay = 0 }: { title: string; href: string; image: string; summary: string; delay?: number }) {
  return (
    <ScrollReveal delay={delay}>
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] bg-logo-bg">
          <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
        </div>
        <div className="pt-5">
          <h3 className="text-2xl font-normal text-primary">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{summary}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-secondary transition group-hover:gap-3">View system <ArrowRight aria-hidden size={16} /></span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
