"use client";

import Link from "next/link";
import { useCallback } from "react";

const NavButton = () => {
  const scrollToForm = useCallback(() => {
    const formElement = document.getElementById("challan-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <Link
      href="/#challan-form"
      onClick={scrollToForm}
      className="text-white bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-md font-medium text-base transition-colors shadow-lg 2"
      aria-label="Scroll to challan search form"
    >
      Check Challan
    </Link>
  );
};
export default NavButton;
