import { assets } from "@/config/assets";
import type { Product } from "@/types/site";

export const products: Product[] = [
  {
    slug: "frp-pipes",
    name: "FRP Pipes",
    category: "Composite Pipes",
    summary: "Glass-reinforced plastic pipe systems manufactured for infrastructure and industrial service.",
    description:
      "ADPF publicly describes its core product as glass-reinforced plastic pipes and fittings, including GRP, GRV and GRE systems. The public site confirms dual helical filament winding and continuous filament winding manufacturing methods.",
    applications: ["Potable water", "Sewerage", "Drainage", "Cooling water", "Desalination", "Petrochemical plants"],
    advantages: ["Composite corrosion resistance", "Factory-produced fittings", "Manufactured through filament winding methods"],
    specifications: ["Detailed diameter, pressure, liner and resin specifications require confirmation from current catalogues."],
    downloads: ["Catalogue download requires a current approved document."],
    image: { src: assets.grpPipesFittings, alt: "GRP composite pipes and fittings arranged in an industrial yard", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "pre-insulated-pipes",
    name: "Pre-Insulated Pipes",
    category: "Thermal Distribution",
    summary: "Pre-insulated pipe systems described for district cooling chilled-water distribution.",
    description:
      "The public ADPF site states that ADPF pre-insulated pipes have been installed in district cooling projects for distribution of chilled water.",
    applications: ["District cooling", "Chilled-water distribution", "Utility infrastructure"],
    advantages: ["Factory-integrated insulation concept", "Infrastructure-focused supply", "Compatible enquiry flow for project review"],
    specifications: ["Insulation materials, jacket types and thermal values require catalogue confirmation."],
    downloads: ["Pre-insulated pipe brochure requires confirmation."],
    image: { src: assets.waterDesalination, alt: "Composite pipelines serving coastal utility infrastructure", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "fittings-and-joint-systems",
    name: "Fittings and Joint Systems",
    category: "Accessories",
    summary: "Composite fittings and joint systems supporting ADPF pipe networks.",
    description:
      "The source website presents fittings and joint systems as product areas. Detailed fitting ranges, joint types and limits should be checked against current engineering documents before publication.",
    applications: ["Pipe network connections", "Plant piping", "Water and utility corridors", "Installation support"],
    advantages: ["System-level compatibility", "Project-specific engineering review", "Factory and field installation support"],
    specifications: ["Specific joint types and dimensional tables require confirmation."],
    downloads: ["Joint system drawings require confirmation."],
    image: { src: assets.grpPipesFittings, alt: "Composite pipe fittings and large-diameter pipe sections", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "gre-pipes",
    name: "GRE Pipes",
    category: "Composite Pipes",
    summary: "Glass-reinforced epoxy pipe systems referenced in ADPF public company profiles.",
    description:
      "ADPF public profiles identify GRE as one of the glass-reinforced pipe types manufactured by the company. Current service conditions and approvals must be confirmed from the latest technical documents.",
    applications: ["Oil and gas", "Industrial infrastructure", "Water service where approved"],
    advantages: ["Epoxy resin system option", "Composite pipe construction", "Designed for technical review by application"],
    specifications: ["Pressure, temperature and approval data require current technical confirmation."],
    downloads: ["GRE product datasheet requires confirmation."],
    image: { src: assets.fieldInstallation, alt: "Composite pipeline installation with flanges and industrial supports", status: "placeholder" },
    verificationStatus: "third-party"
  }
];

export const productCategories = Array.from(new Set(products.map((product) => product.category)));

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
