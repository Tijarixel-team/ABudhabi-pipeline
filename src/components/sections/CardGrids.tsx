import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Capability, Certification, Industry, Project } from "@/types/site";

export function IndustryGrid({ industries }: { industries: Industry[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <article key={industry.slug} className="overflow-hidden rounded-[var(--radius)] border border-secondary/15 bg-white shadow-sm">
          <div className="relative aspect-[16/10]">
            <Image src={industry.image.src} alt={industry.image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-primary">{industry.name}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{industry.summary}</p>
            <ul className="mt-5 grid gap-2 text-sm text-foreground">
              {industry.applications.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 aria-hidden className="mt-0.5 shrink-0 text-secondary" size={16} />{item}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CapabilityList({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="grid gap-5">
      {capabilities.map((capability, index) => (
        <article key={capability.title} className="grid gap-5 rounded-[var(--radius)] border border-secondary/15 bg-white p-6 shadow-sm md:grid-cols-[80px_1fr]">
          <div className="text-4xl font-semibold text-accent">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <h2 className="text-2xl font-semibold text-primary">{capability.title}</h2>
            <p className="mt-3 leading-7 text-muted">{capability.description}</p>
            {capability.steps ? <div className="mt-5 flex flex-wrap gap-2">{capability.steps.map((step) => <span key={step} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">{step}</span>)}</div> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function CertificationGrid({ certifications }: { certifications: Certification[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certifications.map((certification) => (
        <article key={certification.title} className="rounded-[var(--radius)] border border-secondary/15 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">{certification.issuer}</p>
          <h2 className="mt-3 text-2xl font-semibold text-primary">{certification.title}</h2>
          <p className="mt-3 leading-7 text-muted">{certification.description}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Status: {certification.verificationStatus}</p>
        </article>
      ))}
    </div>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.title} className="overflow-hidden rounded-[var(--radius)] border border-secondary/15 bg-white shadow-sm">
          <div className="relative aspect-[16/9]">
            <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">{project.industry} · {project.location}</p>
            <h2 className="mt-3 text-2xl font-semibold text-primary">{project.title}</h2>
            <p className="mt-3 leading-7 text-muted">{project.scope}</p>
            <p className="mt-4 text-sm font-semibold text-primary">Products: {project.products.join(", ")}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProductPreview({ title, href, image, summary }: { title: string; href: string; image: string; summary: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[var(--radius)] border border-secondary/15 bg-white shadow-sm">
      <div className="relative aspect-[4/3]"><Image src={image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-secondary">View product <ArrowRight aria-hidden size={16} /></span>
      </div>
    </Link>
  );
}
