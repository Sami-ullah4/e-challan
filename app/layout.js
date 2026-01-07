import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "E-Challan Pakistan - Check & Pay Traffic Challan Online",
  description: "Check and pay your E-Challan online in Pakistan. Complete guide on how to check challan using CNIC, vehicle number, or SMS. Pay via JazzCash, Easypaisa, or bank accounts.",
  keywords: "e-challan, echallan, traffic challan, challan check, pay challan online, pakistan challan, psca challan",
  authors: [{ name: "E-Challan Pakistan" }],
  openGraph: {
    title: "E-Challan Pakistan - Check & Pay Traffic Challan Online",
    description: "Check and pay your E-Challan online in Pakistan. Complete guide on checking and paying traffic challans.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ colorScheme: "light only" }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#f3f3f3" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
