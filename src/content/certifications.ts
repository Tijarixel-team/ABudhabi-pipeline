import type { Certification } from "@/types/site";

export const certifications: Certification[] = [
  {
    title: "ISO 9001",
    issuer: "ISO quality management system",
    description:
      "The public ADPF website states certification to ISO 9001 for quality assurance in design, development, production, installation and servicing.",
    verificationStatus: "verified"
  },
  {
    title: "ISO 14001",
    issuer: "Environmental management system",
    description: "The public ADPF website states certification to ISO 14001.",
    verificationStatus: "verified"
  },
  {
    title: "Factory Mutual Research (FM)",
    issuer: "FM",
    description:
      "ADPF materials reference FM approval for use in fire-fighting systems. Request the current certificate and applicable scope for project review.",
    verificationStatus: "needs-confirmation"
  },
  {
    title: "API 15LR and 15HR",
    issuer: "American Petroleum Institute",
    description:
      "ADPF materials reference API 15LR and 15HR approval for oil and gas applications. Request the current certificate and applicable scope for project review.",
    verificationStatus: "needs-confirmation"
  },
  {
    title: "WRc / WRAS potable-water approval",
    issuer: "WRc / WRAS",
    description:
      "ADPF materials reference potable-water approval for relevant pipe systems. Request the current certificate and applicable scope for project review.",
    verificationStatus: "third-party"
  }
];
