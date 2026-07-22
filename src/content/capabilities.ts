import type { Capability } from "@/types/site";

export const capabilities: Capability[] = [
  {
    title: "Engineering Review",
    description:
      "Project enquiries can be reviewed against product type, application, service conditions and installation requirements before commercial response.",
    steps: ["Application", "Service conditions", "Product selection", "Installation review"],
    verificationStatus: "verified"
  },
  {
    title: "Dual Helical Filament Winding",
    description:
      "The ADPF public website identifies dual helical filament winding as one manufacturing method used for GRP pipe production.",
    steps: ["Mandrel preparation", "Resin and reinforcement control", "Helical winding", "Curing and finishing"],
    verificationStatus: "verified"
  },
  {
    title: "Continuous Filament Winding",
    description:
      "The public website also references continuous filament winding, described as the Drostholm process.",
    steps: ["Continuous forming", "Layer build-up", "Curing", "Cutting and finishing"],
    verificationStatus: "verified"
  },
  {
    title: "Quality Control Laboratory",
    description:
      "ADPF states that both units have in-house quality control laboratories for short-term and long-term tests specified for GRP, GRV and GRE pipes.",
    steps: ["Incoming checks", "In-process control", "Short-term testing", "Long-term test capability"],
    verificationStatus: "verified"
  },
  {
    title: "Delivery and Installation Support",
    description:
      "Public ADPF materials reference design, development, production, installation and servicing in the quality-system scope language.",
    steps: ["Packing", "Delivery coordination", "Field guidance", "Hydro-test support where contracted"],
    verificationStatus: "verified"
  }
];
