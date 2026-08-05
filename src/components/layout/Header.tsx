"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { company } from "@/config/company";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { BrandWordmark } from "@/components/ui/BrandWordmark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solidHeader, setSolidHeader] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeDisclosures = () => {
    headerRef.current?.querySelectorAll("details[open]").forEach((details) => details.removeAttribute("open"));
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        headerRef.current?.querySelectorAll("details[open]").forEach((details) => details.removeAttribute("open"));
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      const header = headerRef.current;
      if (!(target instanceof Node) || !header) return;
      if (!header.contains(target)) {
        setOpen(false);
        header.querySelectorAll("details[open]").forEach((details) => details.removeAttribute("open"));
        return;
      }
      header.querySelectorAll("details[open]").forEach((details) => {
        if (!details.contains(target)) details.removeAttribute("open");
      });
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    const updateHeader = () => setSolidHeader(window.scrollY > 4);

    const frame = window.requestAnimationFrame(updateHeader);
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
    };
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,box-shadow] duration-300",
        solidHeader || open
          ? "border-b border-white/10 bg-logo-bg shadow-[0_8px_32px_rgba(7,20,35,.12)]"
          : "border-b border-transparent bg-transparent shadow-none"
      )}
    >
      <nav className="section-shell relative z-10 flex h-[72px] items-center justify-between gap-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <BrandWordmark size="compact" />
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const childActive = "children" in item && item.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`) || childActive;
            if ("children" in item && item.children) {
              return (
                <details key={item.href} className="group relative">
                  <summary className={cn("flex cursor-pointer list-none items-center gap-1 rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-accent hover:bg-white/10 hover:text-white [&::-webkit-details-marker]:hidden", active && "bg-white/10 text-white")}>
                    {item.label}<ChevronDown aria-hidden className="transition group-open:rotate-180" size={15} />
                  </summary>
                  <div className="absolute left-0 top-full z-20 mt-3 w-72 rounded-[var(--radius)] bg-logo-bg p-2 shadow-[var(--shadow)] ring-1 ring-white/12">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={closeDisclosures} className="block rounded-[10px] border border-transparent px-4 py-3 text-sm text-white/76 transition hover:border-accent hover:bg-white/10 hover:text-white">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              );
            }
            return <Link key={item.href} href={item.href} className={cn("rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-accent hover:bg-white/10 hover:text-white", active && "bg-white/10 text-white")}>{item.label}</Link>;
          })}
        </div>
        <Link href="/contact" className="cta-button cta-button--dark group hidden min-h-12 items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-bold lg:inline-flex">
          <span>Request a Quote</span><span className="cta-button__icon inline-flex size-9 items-center justify-center rounded-full"><ArrowRight aria-hidden size={16} /></span>
        </Link>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[var(--radius)] border border-white/20 transition hover:border-accent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>
      {open ? (
        <div id="mobile-menu" className="relative z-10 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-logo-bg px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => "children" in item && item.children ? (
              <details key={item.href} className="rounded-[var(--radius)] border border-transparent bg-white/5 px-3 transition hover:border-accent">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between font-semibold text-white/90 [&::-webkit-details-marker]:hidden">{item.label}<ChevronDown aria-hidden size={17} /></summary>
                <div className="border-t border-white/10 py-2">
                  {item.children.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="block rounded-[10px] border border-transparent px-3 py-3 text-sm text-white/72 transition hover:border-accent hover:bg-white/10 hover:text-white">{child.label}</Link>)}
                </div>
              </details>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-[var(--radius)] border border-transparent px-3 font-semibold text-white/88 transition hover:border-accent hover:bg-white/10">{item.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="cta-button cta-button--dark group mt-3 flex min-h-12 items-center justify-between rounded-full py-1.5 pl-6 pr-1.5 font-bold"><span>Request a Quote</span><span className="cta-button__icon inline-flex size-9 items-center justify-center rounded-full"><ArrowRight aria-hidden size={16} /></span></Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
