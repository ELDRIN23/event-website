import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3">
        <Link to="/" className="text-pink-300 text-lg sm:text-xl font-serif tracking-wide">
          EventWebsite
        </Link>

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
    </nav>
  );
}