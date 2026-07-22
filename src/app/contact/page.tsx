import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/config/company";

export const metadata = { title: "Contact", description: "Contact Abu Dhabi Pipe Factory for product, catalogue and engineering enquiries." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Send a product or project enquiry." description="Share product interest, location, service conditions and project context. The form validates client-side and server-side before any email integration is connected." breadcrumbs={[{ label: "Contact", href: "/contact" }]} />
      <section className="py-20"><div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-5">
          {company.locations.map((location) => (
            <article key={location.label} className="rounded-[var(--radius)] border border-secondary/15 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-primary">{location.label}</h2>
              <p className="mt-4 flex gap-3 leading-7 text-muted"><MapPin aria-hidden className="mt-1 shrink-0 text-secondary" size={18} />{location.address}</p>
              {location.phone ? <p className="mt-3 flex gap-3 text-muted"><Phone aria-hidden className="shrink-0 text-secondary" size={18} />{location.phone}</p> : null}
              {location.email ? <p className="mt-3 flex gap-3 text-muted"><Mail aria-hidden className="shrink-0 text-secondary" size={18} />{location.email}</p> : null}
              <iframe title={`${location.label} map`} className="mt-5 aspect-[16/9] w-full rounded-[var(--radius)] border-0" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`} />
            </article>
          ))}
        </div>
        <ContactForm />
      </div></section>
    </>
  );
}
