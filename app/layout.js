import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Suspense } from "react";

/* ---------------- SEO METADATA ---------------- */

export const metadata = {
  metadataBase: new URL("https://echallan-pakistan.com"),

  title: {
    default: "E-Challan Pakistan – Check & Pay Traffic Challan Online",
    template: "%s | E-Challan Pakistan",
  },

  description:
    "Check and pay your E-Challan online in Pakistan. Learn how to check traffic challan using CNIC, vehicle number, or SMS and pay via JazzCash, Easypaisa, or bank.",

  authors: [{ name: "Sami Ullah" }],
  creator: "E-Challan Pakistan",
  publisher: "E-Challan Pakistan",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.webp",
  },

  openGraph: {
    title: "E-Challan Pakistan – Check & Pay Traffic Challan Online",
    description:
      "Check traffic E-Challan online in Pakistan using CNIC or vehicle number. Complete guide with official resources.",
    url: "https://echallan-pakistan.com",
    siteName: "E-Challan Pakistan",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "E-Challan Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "E-Challan Pakistan – Check & Pay Traffic Challan Online",
    description:
      "Check and pay your E-Challan online in Pakistan. CNIC & vehicle challan check guide.",
    images: ["/logo.webp"],
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

  verification: {
    google: "PASTE_REAL_GSC_CODE_HERE",
  },
};

/* ---------------- VIEWPORT (CORRECT WAY) ---------------- */

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK" style={{ colorScheme: "light only" }}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light only" />

        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="https://echallan.psca.gop.pk" />
        <link rel="dns-prefetch" href="https://www.nadra.gov.pk" />

        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
      </head>

      <body className="bg-white text-gray-900 antialiased">
        {/* Header should NOT be lazy for SEO */}
        <Header />

        <main className="min-h-screen">{children}</main>

        {/* Footer with SSR (important for internal links & trust) */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* -------- STRUCTURED DATA -------- */}

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "E-Challan Pakistan",
              url: "https://echallan-pakistan.com",
              description:
                "Check and pay your E-Challan online in Pakistan. Informational guide for traffic challans.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://echallan-pakistan.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "E-Challan Pakistan",
              url: "https://echallan-pakistan.com",
              logo: "https://echallan-pakistan.com/logo.webp",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
