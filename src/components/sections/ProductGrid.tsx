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
      <div className="mb-12 grid gap-5 border-b border-secondary/20 pb-8 md:grid-cols-[1fr_auto] md:items-center">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by product or application" className="h-12 w-full rounded-full border border-secondary/25 bg-white pl-10 pr-4 transition focus:border-secondary focus:outline-none focus:ring-4 focus:ring-secondary/10" />
        </label>
        <div className="flex flex-wrap gap-2" role="list" aria-label="Product categories">
          {["All", ...productCategories].map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-logo-bg text-white" : "bg-white text-primary hover:bg-secondary/10"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="mb-7 text-sm font-semibold text-muted" role="status">{filtered.length} {filtered.length === 1 ? "system" : "systems"}</p>
      {filtered.length === 0 ? <div className="border-y border-secondary/20 py-14"><h2 className="text-2xl font-normal text-primary">No matching systems.</h2><p className="mt-3 text-muted">Try a broader search or select another category.</p></div> : null}
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] bg-logo-bg">
              <Image src={product.image.src} alt={product.image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="pt-5">
              <p className="text-sm font-semibold text-secondary">{product.category}</p>
              <h2 className="mt-2 text-2xl font-normal text-primary">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{product.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
