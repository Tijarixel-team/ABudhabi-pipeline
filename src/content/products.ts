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
    specifications: ["Share the required diameter, pressure class, liner, resin and service conditions for technical review."],
    downloads: ["Request the current product catalogue from the engineering team."],
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
    specifications: ["Share operating temperature, pipe size and installation conditions for technical review."],
    downloads: ["Request current pre-insulated system information from the engineering team."],
    image: { src: assets.waterDesalination, alt: "Composite pipelines serving coastal utility infrastructure", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "fittings-and-joint-systems",
    name: "Fittings and Joint Systems",
    category: "Accessories",
    summary: "Composite fittings and joint systems supporting ADPF pipe networks.",
    description:
      "ADPF fittings and joint systems support composite pipe networks across plant, water and utility applications. Selection is reviewed at system level for each project.",
    applications: ["Pipe network connections", "Plant piping", "Water and utility corridors", "Installation support"],
    advantages: ["System-level compatibility", "Project-specific engineering review", "Factory and field installation support"],
    specifications: ["Share the pipe system, dimensions and installation conditions for joint-system review."],
    downloads: ["Request relevant joint-system information from the engineering team."],
    image: { src: assets.grpPipesFittings, alt: "Composite pipe fittings and large-diameter pipe sections", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "gre-pipes",
    name: "GRE Pipes",
    category: "Composite Pipes",
    summary: "Glass-reinforced epoxy pipe systems referenced in ADPF public company profiles.",
    description:
      "GRE is one of the glass-reinforced pipe systems associated with ADPF manufacturing. Product selection is reviewed against the intended application and service conditions.",
    applications: ["Oil and gas", "Industrial infrastructure", "Water service where approved"],
    advantages: ["Epoxy resin system option", "Composite pipe construction", "Designed for technical review by application"],
    specifications: ["Share pressure, temperature, media and approval requirements for technical review."],
    downloads: ["Request current GRE technical information from the engineering team."],
    image: { src: assets.fieldInstallation, alt: "Composite pipeline installation with flanges and industrial supports", status: "placeholder" },
    verificationStatus: "third-party"
  }
];

export const productCategories = Array.from(new Set(products.map((product) => product.category)));

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
