"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/config/company";
import { navigation } from "@/config/navigation";
import { assets } from "@/config/assets";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/92 text-white backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <Image
            src={assets.logo}
            alt={`${company.name} logo`}
            width={196}
            height={50}
            priority
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-[var(--radius)] px-3 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white",
                    active && "bg-white/10 text-white"
                  )}
                >
                  {item.label}
                  {"children" in item && item.children ? <ChevronDown aria-hidden size={15} /> : null}
                </Link>
                {"children" in item && item.children ? (
                  <div className="invisible absolute left-0 top-full w-72 translate-y-3 rounded-[var(--radius)] border border-white/12 bg-primary p-2 opacity-0 shadow-[var(--shadow)] transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block rounded-[var(--radius)] px-3 py-3 text-sm text-white/76 hover:bg-white/10 hover:text-white">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <Link href="/contact" className="hidden rounded-[var(--radius)] bg-accent px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-white lg:inline-flex">
          Request a Quote
        </Link>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[var(--radius)] border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-primary px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-[var(--radius)] px-3 py-3 font-semibold text-white/84 hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
