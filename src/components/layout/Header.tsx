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
  const [hideLogoText, setHideLogoText] = useState(false);
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
    const updateHeader = () => {
      setSolidHeader(window.scrollY > 4);
      setHideLogoText(window.scrollY > 120);
    };

    const frame = window.requestAnimationFrame(updateHeader);
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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
      <nav className="section-shell relative z-30 flex h-[72px] items-center justify-between gap-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <BrandWordmark size="compact" hideText={hideLogoText} />
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const childActive = "children" in item && item.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`) || childActive;
            if ("children" in item && item.children) {
              return (
                <details key={item.href} className="group relative">
                  <summary className={cn("nav-hover-outline flex cursor-pointer list-none items-center gap-1 rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-accent hover:bg-white/10 hover:text-white [&::-webkit-details-marker]:hidden", active && "bg-white/10 text-white")}>
                    {item.label}<ChevronDown aria-hidden className="transition group-open:rotate-180" size={15} />
                  </summary>
                  <div className="absolute left-0 top-full z-20 mt-3 w-72 rounded-[var(--radius)] bg-logo-bg p-2 shadow-[var(--shadow)] ring-1 ring-white/12">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={closeDisclosures} className="nav-hover-outline block rounded-[10px] border border-transparent px-4 py-3 text-sm text-white/76 transition hover:border-accent hover:bg-white/10 hover:text-white">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              );
            }
            return <Link key={item.href} href={item.href} className={cn("nav-hover-outline rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-accent hover:bg-white/10 hover:text-white", active && "bg-white/10 text-white")}>{item.label}</Link>;
          })}
        </div>
        <Link href="/contact" className="cta-button cta-button--dark group hidden min-h-12 items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-bold lg:inline-flex">
          <span>Request a Quote</span><span className="cta-button__icon inline-flex size-9 items-center justify-center rounded-full"><ArrowRight aria-hidden size={16} /></span>
        </Link>
        <button
          type="button"
          className="nav-hover-outline inline-flex size-11 items-center justify-center rounded-[var(--radius)] border border-white/20 transition hover:border-accent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>
      {open ? (
        <nav id="mobile-menu" className="mobile-menu-panel fixed inset-0 z-20 min-h-[100dvh] overflow-y-auto bg-logo-bg px-5 pb-[max(28px,env(safe-area-inset-bottom))] pt-[calc(96px+env(safe-area-inset-top))] text-white lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex min-h-[calc(100dvh-124px)] max-w-lg flex-col">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.16em] text-accent">Navigate ADPF</p>
            <div className="flex flex-col gap-2">
            {navigation.map((item) => "children" in item && item.children ? (
              <details key={item.href} className="group/mobile border-b border-white/14">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between font-serif text-[1.7rem] leading-none text-white [&::-webkit-details-marker]:hidden">{item.label}<ChevronDown aria-hidden className="text-accent transition group-open/mobile:rotate-180" size={19} /></summary>
                <div className="grid gap-1 pb-5">
                  {item.children.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-[10px] border border-transparent px-3 text-sm text-white/68 transition active:border-accent active:bg-white/10">{child.label}</Link>)}
                </div>
              </details>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-16 items-center border-b border-white/14 font-serif text-[1.7rem] leading-none text-white transition active:border-accent active:text-accent">{item.label}</Link>
            ))}
            </div>
            <div className="mt-auto pt-10">
              <Link href="/contact" onClick={() => setOpen(false)} className="cta-button cta-button--dark group flex min-h-12 items-center justify-between rounded-full py-1.5 pl-6 pr-1.5 font-bold"><span>Request a Quote</span><span className="cta-button__icon inline-flex size-9 items-center justify-center rounded-full"><ArrowRight aria-hidden size={16} /></span></Link>
              <div className="mt-6 flex items-center justify-between border-t border-white/12 pt-5 text-xs text-white/50">
                <span>Abu Dhabi · Dubai</span>
                <span>Since {company.established}</span>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
