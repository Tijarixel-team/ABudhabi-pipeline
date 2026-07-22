import { assets } from "@/config/assets";
import type { Project } from "@/types/site";

export const projects: Project[] = [
  {
    title: "Project record pending client approval",
    industry: "Water and desalination",
    location: "United Arab Emirates",
    scope: "Reusable portfolio card ready for verified project title, scope, products, year and imagery.",
    products: ["GRP pipes", "Fittings"],
    image: { src: assets.fieldInstallation, alt: "Composite pipeline installed in a UAE industrial facility", status: "placeholder" },
    verificationStatus: "placeholder"
  },
  {
    title: "District cooling reference pending confirmation",
    industry: "Power and utilities",
    location: "UAE",
    scope: "The ADPF public site states pre-insulated pipes have been installed for district cooling projects, but project names are not published in the crawled source.",
    products: ["Pre-insulated pipes"],
    image: { src: assets.waterDesalination, alt: "Utility pipeline corridor beside a coastal infrastructure plant", status: "placeholder" },
    verificationStatus: "placeholder"
  }
];
