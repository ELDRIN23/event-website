import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const menuRef = useRef(null);
  const location = useLocation();

  const isDemoPage = location.pathname === "/wedding-demo";

  // Handle clicking outside & Escape key press
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Reset dropdown & collapse state on route change
  useEffect(() => {
    setOpen(false);
    setCollapsed(isDemoPage);
  }, [location.pathname, isDemoPage]);

  // Prevent event bubbling on menu toggle
  const toggleMenu = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  // ---------- COLLAPSED ICON MODE (demo page only) ----------
  if (isDemoPage && collapsed) {
    return (
      <div className="fixed top-4 right-4 z-[99999]">
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/90 backdrop-blur-xl border border-white/20 text-white shadow-2xl hover:bg-black hover:scale-110 transition-all duration-300"
          aria-label="Open navigation"
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
      } z-[99998] bg-black/90 backdrop-blur-2xl border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3 relative">
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

          {/* Menu Dropdown Container */}
          <div className="relative" ref={menuRef}>
            {/* <button
              onClick={toggleMenu}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition border border-white/15 text-sm sm:text-base text-white font-medium cursor-pointer"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <span>Menu</span>
              <span className="text-base">☰</span>
            </button> */}

            {/* DROPDOWN MENU PANEL (FIXED VIEWPORT POSITIONING) */}
            {open && (
              <div className="fixed top-16 right-4 sm:right-6 w-[280px] max-w-[calc(100vw-2rem)] bg-[#121212] border border-white/20 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-[99999] backdrop-blur-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">
                    Navigate
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-white text-xl leading-none p-1"
                    aria-label="Close menu"
                  >
                    ×
                  </button>
                </div>

                <div className="py-1">
                  <Link
                    to="/family-events"
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3.5 text-gray-200 hover:text-white hover:bg-white/10 transition text-sm font-medium border-b border-white/5"
                  >
                    Family Events
                  </Link>

                  <Link
                    to="/love-celebrations"
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3.5 text-gray-200 hover:text-white hover:bg-white/10 transition text-sm font-medium border-b border-white/5"
                  >
                    Love & Celebrations
                  </Link>

                  <Link
                    to="/weddings"
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3.5 text-gray-200 hover:text-white hover:bg-white/10 transition text-sm font-medium border-b border-white/5"
                  >
                    Weddings
                  </Link>

                  <Link
                    to="/wedding-demo"
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3.5 text-pink-300 hover:bg-white/10 transition text-sm font-semibold border-b border-white/5"
                  >
                    ✨ Wedding Demo
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3.5 text-pink-300 hover:bg-white/10 transition text-sm font-semibold"
                  >
                    📞 Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}