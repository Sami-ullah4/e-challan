
const Footer = () => {
  return (
    <footer
      className="bg-background text-foreground border-t border-foreground/10 mt-16"
      aria-label="Site footer"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Brand & description */}
        <div className="space-y-3 max-w-md">
          <h2 className="text-lg font-semibold tracking-tight">
            E-Challan Awareness Portal
          </h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            Simplifying traffic fine management with clear, step-by-step
            guidance to check, pay, and avoid e-challans while staying compliant
            with traffic rules.
          </p>
        </div>

        {/* Quick links */}
        <nav
          className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:grid-cols-3"
          aria-label="Footer navigation"
        >
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/component/CheckE-Chalan"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Check E-Challan
                </a>
              </li>
              <li>
                <a
                  href="/component/payChallan"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Pay Challan Online
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
              Learn
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/component/whatIaEchallan"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  What is an E-Challan?
                </a>
              </li>
              <li>
                <a
                  href="/component/avoidChallan"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  How to Avoid Challans
                </a>
              </li>
              <li>
                <a
                  href="/midContent"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Detailed Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Help &amp; FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/90 hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 text-xs text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} E-Challan Awareness Portal. All
            rights reserved.
          </p>
          <p className="leading-relaxed">
            This site is for informational and awareness purposes only and does
            not represent any official government authority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
