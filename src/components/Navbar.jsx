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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-pink-300 text-xl font-serif">
          EventWebsite
        </Link>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition"
          >
            Menu ☰
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-64 bg-[#181818] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <Link
                to="/family-events"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 hover:bg-white/5"
              >
                Family Events
              </Link>

              <Link
                to="/love-celebrations"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 hover:bg-white/5"
              >
                Love & Celebrations
              </Link>

              <Link
                to="/weddings"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 hover:bg-white/5"
              >
                Weddings
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 hover:bg-white/5 text-pink-300"
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