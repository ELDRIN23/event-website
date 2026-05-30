import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (window.scrollY < 300) {
        setVisible(false);
        return;
      }

      setVisible(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hide on home page
  if (location.pathname === "/") return null;

  return (
    <div
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="flex gap-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl">

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-full text-sm font-medium transition"
        >
          🏠 Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-full text-sm font-medium transition"
        >
          ⬅ Back
        </button>

      </div>
    </div>
  );
}