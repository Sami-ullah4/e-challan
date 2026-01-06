import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className=" w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-black">
            {/* <Image
              src={"./logo.webp"}
              alt="Hero Background"
              width={1200} // desired width
              height={600} // desired height
              className="rounded-xl shadow-lg"
            />{" "} */}
            <div className="leading-tight">
              <div className="font-semibold text-lg">e-Challan</div>
              <div className="text-xs text-black/70">Search & Pay</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className="text-black/90 hover:text-black transition"
            >
              Home
            </Link>
            <a
              href="/e-challan-forn"
              className="text-black/90 hover:text-black transition"
            >
              Search Challan
            </a>
            <a
              href="#contact"
              className="text-black/90 hover:text-black transition"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden sm:block">
            <a
              href="/e-challan-forn"
              className="bg-blue-600 hover:bg-blue-700 transition
                         text-black px-5 py-2 rounded-md text-sm font-medium"
            >
              Search
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-black text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
