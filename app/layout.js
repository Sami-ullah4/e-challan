import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports with loading states for better performance
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => (
    <header className="fixed py-1 w-full shadow bg-white z-50 h-16 animate-pulse" />
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <footer className="h-64 bg-[#f3f3f3] animate-pulse" />,
  // ssr: false, 
});

export const metadata = {
  title: {
    default: "E-Challan Pakistan - Check & Pay Traffic Challan Online",
    template: "%s | E-Challan Pakistan",
  },
  description:
    "Check and pay your E-Challan online in Pakistan. Complete guide on how to check challan using CNIC, vehicle number, or SMS. Pay via JazzCash, Easypaisa, or bank accounts.",
  keywords: [
    "e-challan",
    "echallan",
    "traffic challan",
    "challan check",
    "pay challan online",
    "pakistan challan",
    "psca challan",
    "traffic violation",
    "digital challan",
    "online challan payment",
  ],
  authors: [{ name: "E-Challan Pakistan" }],
  creator: "E-Challan Pakistan",
  publisher: "E-Challan Pakistan",
  metadataBase: new URL("https://echallan-pakistan.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "E-Challan Pakistan - Check & Pay Traffic Challan Online",
    description:
      "Check and pay your E-Challan online in Pakistan. Complete guide on checking and paying traffic challans.",
    type: "website",
    locale: "en_US",
    siteName: "E-Challan Pakistan",
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
    title: "E-Challan Pakistan - Check & Pay Traffic Challan Online",
    description:
      "Check and pay your E-Challan online in Pakistan. Complete guide on checking and paying traffic challans.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ colorScheme: "light only" }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#f3f3f3" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://echallan.psca.gop.pk" />
        <link rel="dns-prefetch" href="https://www.nadra.gov.pk" />
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
      </head>
      <body>
        <Suspense fallback={<header className="fixed py-1 w-full shadow bg-white z-50 h-16" />}>
          <Header />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "E-Challan Pakistan",
              description:
                "Check and pay your E-Challan online in Pakistan. Complete guide on checking and paying traffic challans.",
              url: "https://echallan-pakistan.com", // Update with your actual domain
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://echallan-pakistan.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "E-Challan Pakistan",
              url: "https://echallan-pakistan.com", // Update with your actual domain
              logo: "https://echallan-pakistan.com/logo.webp",
              sameAs: [
                // Add your social media links here
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
