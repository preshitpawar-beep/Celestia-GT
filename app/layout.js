import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SITE_URL = "https://engineering.celestiagt.com";
const DEFAULT_TITLE = "Celestia GT | Cast and Machined Components from India";
const DEFAULT_DESCRIPTION =
  "Celestia GT supplies cast, machined and fabricated components from vetted Indian foundries to UK manufacturers, with full quality documentation.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Celestia GT",
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Celestia GT",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Celestia GT",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: "en_GB",
    images: [{ url: "/logo1.webp", width: 160, height: 40, alt: "Celestia GT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo1.webp"],
  },
};

// Organization structured data. Helps Google understand the entity and
// distinguish Celestia GT from similarly named companies (Celestica, etc.).
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Celestia GT",
  legalName: "Celestia GT, Engineering Exports Division of the Devraj Group",
  url: SITE_URL,
  logo: `${SITE_URL}/logo1.webp`,
  description: DEFAULT_DESCRIPTION,
  email: "harsh.jaiswal@celestiagt.com",
  telephone: "+91 7755997122",
  parentOrganization: { "@type": "Organization", name: "Devraj Group" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-4 N-5 Shreenagar CIDCO",
    addressLocality: "Aurangabad",
    addressRegion: "Maharashtra",
    postalCode: "431003",
    addressCountry: "IN",
  },
  areaServed: ["GB", "EU", "AE", "US"],
  knowsAbout: [
    "Iron castings",
    "Ductile iron castings",
    "Machined components",
    "Fabricated assemblies",
    "Engineering exports",
  ],
  founder: {
    "@type": "Person",
    name: "Harsh Jaiswal",
    url: "https://www.linkedin.com/in/harsh-jaiswal-4918b3287",
  },
  sameAs: ["https://www.linkedin.com/company/celestia-global-trade"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
