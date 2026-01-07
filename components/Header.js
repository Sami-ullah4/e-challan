import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed py-1 w-full shadow bg-white z-50">
      <nav className="px-3 lg:px-30 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-black ">
          <figure className="relative w-10.5 h-10.5 bg-pink-800">
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
            <div className="text-xs text-black/70">Search &amp; Pay</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-8 text-lg font-semibold ">
          <Link
            href="/"
            className="text-black/90 hover:text-green-700 transition"
          >
            PSCE E-Challan{" "}
          </Link>
          <Link
            href="/"
            className="text-black/90 hover:text-green-700 transition"
          >
            E-Challan Punjab{" "}
          </Link>
          <Link
            href="/"
            className="text-black/90 hover:text-green-700 transition"
          >
            E-Challan Sindh{" "}
          </Link>
          <Link
            href="/#challan-form"
            className="text-black hover:text-green-700 transition"
          >
            Search Challan
          </Link>
          <Link
            href="/about"
            className="text-black/90 hover:text-green-700 transition"
          >
            About
          </Link>
        </nav>
        <div className="flex gap-3">
          <div className="hidden sm:block">
            <Link
              href="#"
              className="  text-white bg-blue-500 px-5 py-2 rounded-md text-base "
            >
              Sing in
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-black text-2xl"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
