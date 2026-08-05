"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/config/assets";
import { company } from "@/config/company";
import { BrandWordmark } from "@/components/ui/BrandWordmark";

export function LoadingVisual({ leaving = false }: { leaving?: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          window.clearInterval(timer);
          return 100;
        }
        return Math.min(100, value + 4);
      });
    }, 32);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-logo-bg px-8 transition-opacity duration-500 ${leaving ? "pointer-events-none opacity-0" : "opacity-100"}`} role="status" aria-label={`Loading ${company.name}`}>
      <Image src={assets.blueprintPipes} alt="" fill priority sizes="100vw" className="pointer-events-none object-cover opacity-[0.14] mix-blend-screen" aria-hidden />
      <div className="absolute inset-0 bg-logo-bg/35" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 transition-[clip-path] duration-100 ease-out will-change-[clip-path]"
        style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
        aria-hidden
      >
        <Image src={assets.blueprintPipes} alt="" fill priority sizes="100vw" className="object-cover opacity-75 mix-blend-screen" />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80 shadow-[0_0_22px_5px_rgba(160,221,255,0.42)] transition-[left] duration-100 ease-out"
        style={{ left: `${progress}%` }}
        aria-hidden
      />
      <div className="relative w-full max-w-sm text-center">
        <BrandWordmark size="display" align="center" />
        <div className="mt-10 flex items-end justify-between text-white">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/68">Loading</span>
          <span className="font-serif text-4xl tabular-nums" aria-hidden>{progress}%</span>
        </div>
        <div className="mt-4 h-px w-full overflow-hidden bg-white/24" aria-hidden>
          <span className="block h-full bg-white transition-[width] duration-100 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
