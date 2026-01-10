import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

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

/* ---------------- VIEWPORT ---------------- */

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        {/* ================= BASIC META ================= */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />

        {/* ================= SECURITY META ================= */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ================= PERFORMANCE ================= */}
        {/* DNS prefetch for official government resources */}
        <link rel="dns-prefetch" href="https://echallan.psca.gop.pk" />
        <link rel="dns-prefetch" href="https://www.nadra.gov.pk" />

        {/* ================= GOOGLE ADSENSE ================= */}
        {/* Correct placement & strategy (required for AdSense approval) */}
        <Script
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
        />

        {/* ================= STRUCTURED DATA ================= */}

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
                "Check and understand E-Challan in Pakistan. Informational guide for traffic challans.",
              publisher: {
                "@type": "Organization",
                name: "E-Challan Pakistan",
                logo: {
                  "@type": "ImageObject",
                  url: "https://echallan-pakistan.com/logo.webp",
                },
              },
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
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                areaServed: "PK",
                availableLanguage: ["en", "ur"],
              },
              sameAs: [],
            }),
          }}
        />
      </head>

      <body className="bg-white text-gray-900 antialiased">
        {/* Header must NOT be lazy-loaded for SEO */}
        <Header />

        <main className="min-h-screen">{children}</main>

        {/* Footer should remain SSR for trust & internal linking */}
        <Footer />
      </body>
    </html>
  );
}
