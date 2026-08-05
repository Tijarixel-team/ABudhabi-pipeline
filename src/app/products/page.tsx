import { ProductGrid } from "@/components/sections/ProductGrid";
import { PageHero } from "@/components/ui/PageHero";
import { assets } from "@/config/assets";
import { products } from "@/content/products";

export const metadata = { title: "Products", description: "Filterable ADPF product listing for GRP, GRV, GRE and pre-insulated pipe systems." };

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Composite pipe systems and fittings." description="Explore ADPF pipe systems by product family and application, then share your service conditions for project-specific review." breadcrumbs={[{ label: "Products", href: "/products" }]} image={{ src: assets.grpPipesFittings, alt: "GRP composite pipes and fittings displayed in an industrial yard" }} />
      <section className="py-24 lg:py-32"><div className="section-shell"><ProductGrid products={products} /></div></section>
    </>
  );
}
