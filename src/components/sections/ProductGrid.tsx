"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/types/site";
import { productCategories } from "@/content/products";

export function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || `${product.name} ${product.summary} ${product.applications.join(" ")}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, products, query]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-[var(--radius)] border border-secondary/15 bg-white p-4 shadow-sm md:grid-cols-[1fr_auto]">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by product or application" className="h-12 w-full rounded-[var(--radius)] border border-secondary/20 pl-10 pr-3" />
        </label>
        <div className="flex flex-wrap gap-2" role="list" aria-label="Product categories">
          {["All", ...productCategories].map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-[var(--radius)] px-4 py-2 text-sm font-semibold ${category === item ? "bg-primary text-white" : "bg-surface text-primary"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group overflow-hidden rounded-[var(--radius)] border border-secondary/15 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
            <div className="relative aspect-[4/3]">
              <Image src={product.image.src} alt={product.image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">{product.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-primary">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{product.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
