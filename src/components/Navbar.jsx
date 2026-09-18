/**
 * @authors Eldrin Johnson, Merin Joy
 * @copyright Copyright (c) 2026 Eldrin Johnson and Merin Joy. All Rights Reserved.
 * 
 * PROPRIETARY & CONFIDENTIAL
 * This source code, component logic, and UI design are the exclusive property 
 * of Eldrin Johnson and Merin Joy. Unauthorized copying, duplication, distribution, or 
 * modification of this file via any medium is strictly prohibited by law.
 */

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-[99999] bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-serif font-semibold tracking-wide text-white flex items-center gap-1 group"
        >
          <span className="text-white">Event</span>
          <span className="text-slate-400 font-light group-hover:text-white transition-colors">
            Website
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link
            to="/"
            style={{ color: "#000000" }}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold !bg-white !text-black hover:!bg-slate-200 hover:scale-105 transition-all shadow-sm"
          >
            Home
          </Link>

          <Link
            to="/family-events"
            style={{ color: "#000000" }}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold !bg-white !text-black hover:!bg-slate-200 hover:scale-105 transition-all shadow-sm"
          >
            Family Events
          </Link>

          <Link
            to="/love-celebrations"
            style={{ color: "#000000" }}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold !bg-white !text-black hover:!bg-slate-200 hover:scale-105 transition-all shadow-sm"
          >
            Love & Celebrations
          </Link>

          <Link
            to="/weddings"
            style={{ color: "#000000" }}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold !bg-white !text-black hover:!bg-slate-200 hover:scale-105 transition-all shadow-sm"
          >
            Weddings
          </Link>

          {/* LIGHT GREEN CONTACT BUTTON */}
          <Link
            to="/contact"
            style={{ color: "#000000", backgroundColor: "#86efac" }}
            className="ml-2 px-6 py-2 rounded-full text-xs sm:text-sm font-bold !bg-green-300 !text-black hover:!bg-green-400 hover:scale-105 transition-all shadow-md"
          >
            Contact
          </Link>
        </nav>

        {/* RIGHT SIDE (DESKTOP COLLAPSE + MOBILE TRIGGER) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "#000000" }}
            className="lg:hidden w-11 h-11 rounded-xl !bg-white !text-black font-bold flex items-center justify-center hover:!bg-slate-200 transition-all cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            <span style={{ color: "#000000" }} className="text-lg font-bold">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-5 py-6 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#000000" }}
            className="block px-4 py-3 rounded-xl text-sm font-bold !bg-white !text-black text-center shadow-sm"
          >
            Home
          </Link>

          <Link
            to="/family-events"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#000000" }}
            className="block px-4 py-3 rounded-xl text-sm font-bold !bg-white !text-black text-center shadow-sm"
          >
            Family Events
          </Link>

          <Link
            to="/love-celebrations"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#000000" }}
            className="block px-4 py-3 rounded-xl text-sm font-bold !bg-white !text-black text-center shadow-sm"
          >
            Love & Celebrations
          </Link>

          <Link
            to="/weddings"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#000000" }}
            className="block px-4 py-3 rounded-xl text-sm font-bold !bg-white !text-black text-center shadow-sm"
          >
            Weddings
          </Link>

          {/* LIGHT GREEN MOBILE CONTACT BUTTON */}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#000000", backgroundColor: "#86efac" }}
            className="block mt-4 text-center px-4 py-3.5 rounded-full text-sm font-bold !bg-green-300 !text-black shadow-lg hover:!bg-green-400 transition-all"
          >
            📞 Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}