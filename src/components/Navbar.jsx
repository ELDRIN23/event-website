import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const menuRef = useRef(null);
  const location = useLocation();

  const isDemoPage = location.pathname === "/wedding-demo";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        if (isDemoPage) setCollapsed(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDemoPage]);

  // Reset collapsed state when navigating away from demo
  useEffect(() => {
    if (!isDemoPage) setCollapsed(false);
    else setCollapsed(true);
  }, [isDemoPage]);

  // ---------- COLLAPSED ICON MODE (demo page only) ----------
  if (isDemoPage && collapsed) {
    return (
      <div
        ref={menuRef}
        className="fixed top-4 right-4 z-50"
        style={{ position: "fixed" }}
      >
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/70 backdrop-blur-xl border border-white/20 text-white shadow-2xl hover:bg-black/90 hover:scale-110 transition-all duration-300"
          aria-label="Open navigation"
          title="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    );
  }

  // ---------- FULL NAVBAR (normal pages + expanded demo) ----------
  return (
    <nav
      className={`${
        isDemoPage ? "fixed top-0 left-0 right-0" : "sticky top-0"
      } z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3">
        <Link to="/" className="text-pink-300 text-lg sm:text-xl font-serif tracking-wide">
          EventWebsite
        </Link>

        <div className="flex items-center gap-2">
          {/* Collapse button – only on demo page */}
          {isDemoPage && (
            <button
              onClick={() => {
                setOpen(false);
                setCollapsed(true);
              }}
              className="flex items-center gap-1.5 bg-pink-300/15 hover:bg-pink-300/25 px-3 py-2.5 rounded-xl transition border border-pink-300/20 text-pink-300 text-sm"
              aria-label="Collapse navigation"
              title="Collapse to icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              <span className="hidden sm:inline">Collapse</span>
            </button>
          )}

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((value) => !value)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 sm:px-4 py-2.5 rounded-xl transition border border-white/10 text-sm sm:text-base"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <span>Menu</span>
              <span className="text-base">☰</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-[calc(100vw-1.5rem)] max-w-[18rem] sm:w-72 bg-[#181818] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <span className="text-sm uppercase tracking-[0.25em] text-pink-300">Navigate</span>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-white text-xl leading-none"
                    aria-label="Close menu"
                  >
                    ×
                  </button>
                </div>

                <Link
                  to="/family-events"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 hover:bg-white/5 transition"
                >
                  Family Events
                </Link>

                <Link
                  to="/love-celebrations"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 hover:bg-white/5 transition"
                >
                  Love & Celebrations
                </Link>

                <Link
                  to="/weddings"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 hover:bg-white/5 transition"
                >
                  Weddings
                </Link>

                <Link
                  to="/wedding-demo"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 hover:bg-white/5 transition text-pink-300"
                >
                  ✨ Wedding Demo
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 hover:bg-white/5 transition text-pink-300"
                >
                  📞 Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}