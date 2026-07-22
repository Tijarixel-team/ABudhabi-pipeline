export type VerificationStatus = "verified" | "third-party" | "needs-confirmation" | "placeholder";

export type Asset = {
  src: string;
  alt: string;
  status?: VerificationStatus;
};

export type ContactLocation = {
  label: string;
  address: string;
  phone?: string;
  fax?: string;
  email?: string;
  mapQuery: string;
  verificationStatus: VerificationStatus;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  note?: string;
  verificationStatus: VerificationStatus;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  applications: string[];
  advantages: string[];
  specifications: string[];
  downloads: string[];
  image: Asset;
  verificationStatus: VerificationStatus;
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  applications: string[];
  image: Asset;
  verificationStatus: VerificationStatus;
};

export type Capability = {
  title: string;
  description: string;
  steps?: string[];
  verificationStatus: VerificationStatus;
};

export type Certification = {
  title: string;
  description: string;
  issuer?: string;
  verificationStatus: VerificationStatus;
};

export type Project = {
  title: string;
  industry: string;
  location: string;
  scope: string;
  products: string[];
  year?: string;
  image: Asset;
  verificationStatus: VerificationStatus;
};

export type DownloadItem = {
  title: string;
  type: "Catalogue" | "Brochure" | "Technical" | "Certification";
  fileType: string;
  size: string;
  href: string;
  verificationStatus: VerificationStatus;
};
