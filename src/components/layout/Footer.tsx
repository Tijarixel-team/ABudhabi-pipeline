import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/config/company";
import { Button } from "@/components/ui/Button";
import { BrandWordmark } from "@/components/ui/BrandWordmark";

export function Footer() {
  const primaryLocation = company.locations[0];

  return (
    <footer className="relative z-10 overflow-hidden bg-logo-bg text-white">
      <div className="section-shell relative grid gap-12 py-16 lg:grid-cols-[1.15fr_0.65fr_1fr] lg:py-20">
        <div>
          <BrandWordmark />
          <p className="mt-6 max-w-md text-base leading-7 text-white/68">{company.description}</p>
          <div className="mt-7"><Button href="/contact" variant="inverted">Request a Quote</Button></div>
        </div>
        <div>
          <h2 className="font-sans text-sm font-bold text-white">Explore</h2>
          <div className="mt-5 grid gap-3">
            {[{ label: "Products", href: "/products" }, { label: "Applications", href: "/industries" }, { label: "Capabilities", href: "/capabilities" }, { label: "Quality", href: "/quality" }, { label: "Company", href: "/about" }, { label: "Resources", href: "/downloads" }].map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/66 transition hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-sans text-sm font-bold text-white">Abu Dhabi head office</h2>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-white/68">
            <p className="flex gap-3"><MapPin aria-hidden className="mt-1 shrink-0 text-accent" size={18} />{primaryLocation.address}</p>
            <a href={`tel:${primaryLocation.phone.replace(/\s/g, "")}`} className="flex gap-3 transition hover:text-white"><Phone aria-hidden className="shrink-0 text-accent" size={18} />{primaryLocation.phone}</a>
            <a href={`mailto:${primaryLocation.email}`} className="flex gap-3 transition hover:text-white"><Mail aria-hidden className="shrink-0 text-accent" size={18} />{primaryLocation.email}</a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <div className="section-shell flex flex-col justify-between gap-3 text-xs text-white/58 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/contact" className="hover:text-white">Contact</Link><Link href="/downloads" className="hover:text-white">Technical resources</Link></div>
        </div>
      </div>
    </footer>
  );
}
