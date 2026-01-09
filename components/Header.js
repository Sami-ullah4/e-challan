import Link from "next/link";
import Image from "next/image";
import NavButton from "./navButton";

const Header = () => {
  return (
    <header className="fixed py-1 w-full shadow bg-white z-50">
      <nav className="px-3 lg:px-30 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-black"
          prefetch={true}
          aria-label="E-Challan Home"
        >
          <figure className="relative w-10.5 h-10.5 bg-pink-800">
            <Image
              src="/logo.webp"
              alt="e-Challan Logo"
              width={42}
              height={42}
              className="object-contain"
              priority
              fetchPriority="high"
              sizes="42px"
            />
          </figure>

          <div className="leading-tight">
            <div className="font-semibold text-lg">e-Challan</div>
            <div className="text-xs text-black/70">Search &amp; Pay</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden sm:flex items-center gap-8 text-lg font-semibold"
          aria-label="Main navigation"
        >
          <Link
            href="/about"
            className="text-black/90 hover:text-green-700 transition-colors"
            prefetch={false}
          >
            about{" "}
          </Link>
          <Link
            href="/contect"
            className="text-black/90 hover:text-green-700 transition-colors"
            prefetch={false}
          >
            contect{" "}
          </Link>

          <NavButton />
        </nav>

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
