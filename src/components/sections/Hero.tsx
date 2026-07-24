import { Factory, ShieldCheck } from "lucide-react";
import { assets } from "@/config/assets";
import { company } from "@/config/company";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary pt-28 text-white">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assets.hero}
        aria-hidden="true"
      >
        <source src={assets.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,33,59,.94),rgba(8,33,59,.66)_42%,rgba(8,33,59,.18))]" />
      <div className="section-shell relative flex min-h-[calc(100vh-7rem)] items-center py-20">
        <Reveal className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/76">
            <Factory aria-hidden size={18} />
            Established {company.established} in Abu Dhabi
          </div>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Composite pipe systems for critical UAE infrastructure.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            {company.name} manufactures GRP, GRV, GRE and pre-insulated pipe systems for water, energy, industrial and utility applications.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/products">Explore Products</Button>
            <Button href="/contact" variant="secondary">{company.contactCta}</Button>
          </div>
          <div className="mt-10 flex max-w-xl items-start gap-3 border-l-2 border-accent pl-4 text-sm leading-6 text-white/68">
            <ShieldCheck aria-hidden className="mt-1 shrink-0 text-accent" size={18} />
            Public ADPF materials reference ISO 9001, ISO 14001, FM, API and WRc approvals. Current certificate scope should be verified before launch.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
