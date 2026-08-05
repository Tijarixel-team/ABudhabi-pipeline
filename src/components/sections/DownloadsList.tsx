"use client";

import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { DownloadItem } from "@/types/site";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/animations/ScrollReveal";

export function DownloadsList({ items }: { items: DownloadItem[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase())), [items, query]);

  return (
    <div>
      <ScrollReveal variant="softFade">
        <label className="relative mb-8 block max-w-xl">
          <span className="sr-only">Search downloads</span>
          <Search aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search catalogues, brochures, certifications" className="h-12 w-full rounded-[var(--radius)] border border-secondary/20 bg-white pl-10 pr-3" />
        </label>
      </ScrollReveal>
      <StaggerReveal className="grid gap-4">
        {filtered.map((item) => (
          <StaggerItem key={item.title}>
            <a href={item.href} className="grid gap-4 rounded-[var(--radius)] border border-secondary/15 bg-white p-5 shadow-sm transition hover:border-secondary/40 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">{item.type}</p>
                <h2 className="mt-2 text-xl font-semibold text-primary">{item.title}</h2>
                <p className="mt-1 text-sm text-muted">{item.fileType} · {item.size} · {item.verificationStatus}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-bold text-secondary"><Download aria-hidden size={18} /> Download</span>
            </a>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </div>
  );
}
