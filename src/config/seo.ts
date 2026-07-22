import { company } from "./company";

export const seo = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.adpf.ae",
  defaultTitle: `${company.name} | Composite Pipe Systems UAE`,
  titleTemplate: `%s | ${company.shortName}`,
  description:
    "Abu Dhabi Pipe Factory manufactures GRP, GRV, GRE and pre-insulated composite pipe systems for water, energy, industrial, and utility infrastructure.",
  keywords: [
    "Abu Dhabi Pipe Factory",
    "ADPF",
    "GRP pipes UAE",
    "GRE pipes Abu Dhabi",
    "GRV pipe fittings",
    "composite pipe manufacturer"
  ]
};
