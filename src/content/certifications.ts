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
      "The public ADPF website references FM approval for use in fire-fighting systems. Current certificate scope should be confirmed before using logos.",
    verificationStatus: "needs-confirmation"
  },
  {
    title: "API 15LR and 15HR",
    issuer: "American Petroleum Institute",
    description:
      "The public ADPF website references API 15LR and 15HR approval for oil and gas usage. Current validity and exact scope require confirmation.",
    verificationStatus: "needs-confirmation"
  },
  {
    title: "WRc / WRAS potable-water approval",
    issuer: "WRc / WRAS",
    description:
      "ADPF public materials reference WRc approval for potable water. A current WRAS directory listing for ADPF GRE pipe was found and should be reviewed against launch scope.",
    verificationStatus: "third-party"
  }
];
