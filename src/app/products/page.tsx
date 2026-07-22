import { ProductGrid } from "@/components/sections/ProductGrid";
import { PageHero } from "@/components/ui/PageHero";
import { assets } from "@/config/assets";
import { products } from "@/content/products";

export const metadata = { title: "Products", description: "Filterable ADPF product listing for GRP, GRV, GRE and pre-insulated pipe systems." };

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Composite pipe systems and fittings." description="A reusable, typed product catalogue prepared for current ADPF catalogue data and technical documents." breadcrumbs={[{ label: "Products", href: "/products" }]} image={{ src: assets.grpPipesFittings, alt: "GRP composite pipes and fittings displayed in an industrial yard" }} />
      <section className="py-20"><div className="section-shell"><ProductGrid products={products} /></div></section>
    </>
  );
}
