import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full shadow bg-white">
      <nav className="px-3 lg:px-30">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-black ">
            <figure className="relative w-[42px] h-[42px] bg-pink-800">
              <Image
                src="/logo.webp"
                alt="e-Challan Logo"
                width={42}
                height={42}
                className="object-contain"
                priority
              />
            </figure>

            <div className="leading-tight">
              <div className="font-semibold text-lg">e-Challan</div>
              <div className="text-xs text-black/70">Search & Pay</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8 text-lg font-semibold">
            <Link
              href="/"
              className="text-black/90 hover:text-black transition"
            >
              PSCE E-Challan{" "}
            </Link>
            <Link
              href="/"
              className="text-black/90 hover:text-black transition"
            >
              E-Challan Punjab{" "}
            </Link>
            <Link
              href="/"
              className="text-black/90 hover:text-black transition"
            >
              E-Challan Sindh{" "}
            </Link>
            <Link
              href="/e-challan-forn"
              className="text-black/90 hover:text-black transition"
            >
              Search Challan
            </Link>
            <Link
              href="#contact"
              className="text-black/90 hover:text-black transition"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden sm:block">
            <Link
              href="/e-challan-forn"
              className="bg-blue-500
                         text-white px-5 py-2 rounded-md text-base font-semibold"
            >
              Search
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-black text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
