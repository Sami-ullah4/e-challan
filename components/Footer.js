"use client";

import Link from "next/link";

const Footer = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-[#102247] text-gray-100 border-t  mt-16"
      aria-label="Site footer"
      role="contentinfo"
      style={{ colorScheme: "light only" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">e-Challan</h3>
            <p className="text-sm ">
              Search and pay your traffic challan online. Quick, secure, and
              convenient.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <nav aria-label="Footer navigation" className="space-y-2">
              <button
                type="button"
                onClick={() => handleScrollToSection("hero")}
                className="block text-sm  "
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleScrollToSection("check-challan")}
                className="block text-sm  "
              >
                Check Challan
              </button>
              <button
                type="button"
                onClick={() => handleScrollToSection("pay-challan")}
                className="block text-sm  "
              >
                Pay Challan
              </button>
            </nav>
          </div>

          {/* Learn */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Learn
            </h4>
            <nav aria-label="Learn navigation" className="space-y-2">
              <button
                type="button"
                onClick={() => handleScrollToSection("what-is-echallan")}
                className="block text-sm  "
              >
                What is E-Challan
              </button>
              <button
                type="button"
                onClick={() => handleScrollToSection("avoid-challan")}
                className="block text-sm  "
              >
                Avoid Challan
              </button>
              <button
                type="button"
                onClick={() => handleScrollToSection("guide-content")}
                className="block text-sm  "
              >
                Guide
              </button>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Support
            </h4>
            <nav aria-label="Support navigation" className="space-y-2">
             
              <Link href="/about" className="block text-sm  ">
                About
              </Link>
              <Link href="/privacy-policy" className="block text-sm  ">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="block text-sm  ">
                Disclaimer
              </Link>
              <a
                href="https://echallan.psca.gop.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm  "
              >
                Official Portal
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-[#171717]/10 pt-8 text-center text-sm ">
          <p>
            &copy; {new Date().getFullYear()} e-Challan. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            This is an informational website. For official challan payments,
            visit the government portal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
