import { assets } from "@/config/assets";
import type { Industry } from "@/types/site";

export const industries: Industry[] = [
  {
    slug: "oil-and-gas",
    name: "Oil and Gas",
    summary: "Composite pipe systems for oil and gas infrastructure where the approved service envelope is confirmed.",
    applications: ["Oil and gas industry", "Refineries", "Petrochemical plants"],
    image: { src: assets.fieldInstallation, alt: "Composite pipeline installed in an industrial oil and gas style facility", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "water-and-desalination",
    name: "Water and Desalination",
    summary: "Pipe systems for potable water supply, seawater intake, desalination and cooling-water networks.",
    applications: ["Desalination plants", "Potable water supply", "Seawater intake", "Cooling water"],
    image: { src: assets.waterDesalination, alt: "Composite pipelines at a coastal water and desalination facility", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "power-and-utilities",
    name: "Power and Utilities",
    summary: "Composite piping for utility corridors, power plants, pumping stations and district cooling.",
    applications: ["Power plants", "Pumping stations", "District cooling", "Fire-fighting systems"],
    image: { src: assets.facilityYard, alt: "Composite pipes stored beside a modern UAE industrial facility", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "sewerage-and-drainage",
    name: "Sewerage and Drainage",
    summary: "GRP pipe applications referenced for sewerage, drainage and municipal networks.",
    applications: ["Sewerage lines", "Drainage lines", "Municipal infrastructure"],
    image: { src: assets.grpPipesFittings, alt: "Large composite pipe sections for municipal infrastructure", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "irrigation",
    name: "Irrigation",
    summary: "Composite pipe networks for irrigation and cross-country water distribution applications.",
    applications: ["Irrigation", "Cross-country water lines", "Brackish water"],
    image: { src: assets.waterDesalination, alt: "Long composite pipe runs for water distribution infrastructure", status: "placeholder" },
    verificationStatus: "verified"
  },
  {
    slug: "industrial-infrastructure",
    name: "Industrial Infrastructure",
    summary: "Industrial plant and infrastructure piping where corrosion resistance and engineered fit are required.",
    applications: ["Industrial plants", "Utility networks", "Plant distribution systems"],
    image: { src: assets.fieldInstallation, alt: "Composite pipeline and industrial plant piping installation", status: "placeholder" },
    verificationStatus: "verified"
  }
];
