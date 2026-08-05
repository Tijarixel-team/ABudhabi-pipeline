import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { company } from "@/config/company";
import { seo } from "@/config/seo";
import { InitialLoader } from "@/components/layout/InitialLoader";

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
        <InitialLoader />
        <a href="#main-content" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-white px-5 py-3 font-bold text-primary shadow-[var(--shadow)] transition focus:translate-y-0">Skip to content</a>
        <Header />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
