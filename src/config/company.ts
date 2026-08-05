import type { ContactLocation, Stat } from "@/types/site";

export const company = {
  name: "Abu Dhabi Pipe Factory",
  nameArabic: "مصنع أبوظبي للأنابيب ذ.م.م.",
  shortName: "ADPF",
  legalName: "Abu Dhabi Pipe Factory L.L.C.",
  productDescriptor: "Filament Wound Reinforced Thermosetting Resin Pipes",
  established: 1981,
  tagline: "Composite pipe systems for demanding infrastructure",
  description:
    "Abu Dhabi Pipe Factory manufactures glass-reinforced composite pipes and fittings for utility, industrial, water, and energy infrastructure.",
  website: "https://www.adpf.ae",
  email: "info@adpf.ae",
  contactCta: "Contact Engineering Team",
  catalogueCta: "Request Catalogue",
  locations: [
    {
      label: "Abu Dhabi Head Office and Factory",
      address: "P.O. Box 4526, Al Mafraq Industrial Area, Abu Dhabi, United Arab Emirates",
      phone: "+971 2 5821600",
      fax: "+971 2 5823289",
      email: "info@adpf.ae",
      mapQuery: "Abu Dhabi Pipe Factory Mafraq Industrial Area Abu Dhabi",
      verificationStatus: "verified"
    },
    {
      label: "Dubai Manufacturing Location",
      address: "Dubai Investment Park, Dubai, United Arab Emirates",
      phone: "+971 4 8851430",
      mapQuery: "Abu Dhabi Pipe Factory Dubai Investment Park",
      verificationStatus: "third-party"
    }
  ] satisfies ContactLocation[],
  stats: [
    {
      label: "Established",
      value: 1981,
      note: "Company foundation year from public ADPF profile.",
      verificationStatus: "verified"
    },
    {
      label: "Production Area",
      value: 40000,
      suffix: " m2",
      note: "Abu Dhabi and Dubai production area from ADPF public site.",
      verificationStatus: "verified"
    },
    {
      label: "Annual Capacity",
      value: 50000,
      suffix: " tons",
      note: "Current site states 50,000 tons per annum; LinkedIn states a different figure and requires confirmation.",
      verificationStatus: "verified"
    },
    {
      label: "Production Lines",
      value: 15,
      note: "10 dual helical and 5 continuous winding lines from the public ADPF site.",
      verificationStatus: "verified"
    }
  ] satisfies Stat[]
};
