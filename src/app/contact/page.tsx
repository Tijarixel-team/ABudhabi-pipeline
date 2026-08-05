import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/config/company";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/animations/ScrollReveal";

export const metadata = { title: "Contact", description: "Contact Abu Dhabi Pipe Factory for product, catalogue and engineering enquiries." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start a product or project enquiry." description="Share your application, location and service conditions. Our team will use that context to direct your request." breadcrumbs={[{ label: "Contact", href: "/contact" }]} />
      <section className="py-24 lg:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <StaggerReveal className="grid content-start gap-8">
          {company.locations.map((location) => (
            <StaggerItem key={location.label}>
              <article className="border-t border-secondary/20 pt-6">
                <h2 className="text-2xl font-normal text-primary">{location.label}</h2>
                <p className="mt-4 flex gap-3 leading-7 text-muted"><MapPin aria-hidden className="mt-1 shrink-0 text-secondary" size={18} />{location.address}</p>
                {location.phone ? <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="mt-3 flex gap-3 text-muted transition hover:text-primary"><Phone aria-hidden className="shrink-0 text-secondary" size={18} />{location.phone}</a> : null}
                {location.email ? <a href={`mailto:${location.email}`} className="mt-3 flex gap-3 text-muted transition hover:text-primary"><Mail aria-hidden className="shrink-0 text-secondary" size={18} />{location.email}</a> : null}
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <ScrollReveal variant="fadeScale"><ContactForm /></ScrollReveal>
      </div></section>
    </>
  );
}
