import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { company } from "@/config/company";
import { seo } from "@/config/seo";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: { default: seo.defaultTitle, template: seo.titleTemplate },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/" },
  openGraph: { title: seo.defaultTitle, description: seo.description, url: seo.siteUrl, siteName: company.name, type: "website" },
  twitter: { card: "summary_large_image", title: seo.defaultTitle, description: seo.description }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.shortName,
    url: company.website,
    foundingDate: String(company.established),
    email: company.email,
    telephone: company.locations[0].phone,
    address: company.locations[0].address
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
