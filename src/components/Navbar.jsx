import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const location = useLocation();
  const isDemoPage = location.pathname === "/wedding-demo";

  useEffect(() => {
    setMobileMenuOpen(false);
    setCollapsed(isDemoPage);
  }, [location.pathname, isDemoPage]);

  // ---------- COLLAPSED FLOATING BUTTON (DEMO PAGE) ----------
  if (isDemoPage && collapsed) {
    return (
      <div className="fixed top-5 right-5 z-[99999]">
        <button
          onClick={() => setCollapsed(false)}
          style={{ color: "#000000" }}
          className="w-12 h-12 rounded-2xl !bg-white border border-slate-200 !text-black flex items-center justify-center shadow-2xl hover:!bg-slate-200 transition-all hover:scale-105 cursor-pointer font-bold"
          aria-label="Expand Navigation"
        >
          <span style={{ color: "#000000" }} className="text-xl !text-black font-bold">
            ☰
          </span>
        </button>
      </div>
    );
  }

  return (
    <header
      className={`${
        isDemoPage ? "fixed top-0 left-0 right-0" : "sticky top-0"
      } z-[99999] bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300`}
    >
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

          {/* <Link
            to="/wedding-demo"
            style={{ color: "#000000" }}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold !bg-white !text-black hover:!bg-slate-200 hover:scale-105 transition-all shadow-sm flex items-center gap-1"
          >
            ✨ Wedding Demo
          </Link> */}

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
          {isDemoPage && (
            <button
              onClick={() => setCollapsed(true)}
              style={{ color: "#000000" }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl !bg-white !text-black text-xs font-bold tracking-wider uppercase hover:!bg-slate-200 transition-all cursor-pointer"
            >
              <span>Collapse Bar</span>
            </button>
          )}

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
{/* 
          <Link
            to="/wedding-demo"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#000000" }}
            className="block px-4 py-3 rounded-xl text-sm font-bold !bg-white !text-black text-center shadow-sm"
          >
            ✨ Wedding Demo
          </Link> */}

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