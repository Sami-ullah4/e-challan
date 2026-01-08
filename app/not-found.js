"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiErrorWarningLine, RiArrowLeftLine, RiHomeLine } from "react-icons/ri";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative bg-red-50 p-8 rounded-full border-4 border-red-200">
              <RiErrorWarningLine className="w-24 h-24 text-red-600" />
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-slate-900 leading-none">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
            Oops! The page you're looking for doesn't exist or has been moved.
            It might have been removed, renamed, or the URL might be incorrect.
          </p>
        </div>

        {/* Helpful Information */}
        <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            What can you do?
          </h3>
          <ul className="text-left text-sm text-slate-700 space-y-2 max-w-md mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-sky-600 font-bold mt-0.5">•</span>
              <span>Check the URL for typos or errors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 font-bold mt-0.5">•</span>
              <span>Go back to the previous page you visited</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 font-bold mt-0.5">•</span>
              <span>Return to our home page to find what you need</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={handleGoBack}
            className="group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <RiArrowLeftLine className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold transition-all hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <RiHomeLine className="w-5 h-5" />
            Go to Home Page
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/pay-challan"
              className="px-4 py-2 text-sm font-medium text-sky-600 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
            >
              Pay E-Challan
            </Link>
            <Link
              href="/how-avoid-challan"
              className="px-4 py-2 text-sm font-medium text-sky-600 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
            >
              Avoid Challan
            </Link>
            <Link
              href="/pay-challan-bank"
              className="px-4 py-2 text-sm font-medium text-sky-600 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
            >
              Bank Payment
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-sky-600 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
