import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { assets } from "@/config/assets";
import { company } from "@/config/company";
import { navigation } from "@/config/navigation";
import { products } from "@/content/products";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const primaryLocation = company.locations[0];

  return (
    <footer className="bg-primary text-white">
      <div className="section-shell grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Image
            src={assets.logo}
            alt={`${company.name} logo`}
            width={220}
            height={56}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">{company.description}</p>
          <div className="mt-6">
            <Button href="/contact">Request a Quote</Button>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Navigation</h2>
          <div className="mt-4 grid gap-2">
            {navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Products</h2>
          <div className="mt-4 grid gap-2">
            {products.slice(0, 4).map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="text-sm text-white/70 hover:text-white">
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Contact</h2>
          <div className="mt-4 grid gap-4 text-sm text-white/72">
            <p className="flex gap-3"><MapPin aria-hidden className="mt-1 shrink-0 text-accent" size={18} />{primaryLocation.address}</p>
            <p className="flex gap-3"><Phone aria-hidden className="shrink-0 text-accent" size={18} />{primaryLocation.phone}</p>
            <p className="flex gap-3"><Mail aria-hidden className="shrink-0 text-accent" size={18} />{primaryLocation.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col justify-between gap-3 text-xs text-white/58 sm:flex-row">
          <p>Copyright {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Content pending final company approval before launch.</p>
        </div>
      </div>
    </footer>
  );
}
