import type { MetadataRoute } from "next";
import { seo } from "@/config/seo";
import { products } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/products", "/industries", "/capabilities", "/quality", "/projects", "/downloads", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${seo.siteUrl}${route}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${seo.siteUrl}/products/${product.slug}`, lastModified: new Date() }))
  ];
}
