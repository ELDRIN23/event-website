import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  const location = useLocation();
  const isDemoPage = location.pathname === "/wedding-demo";

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">

      <Navbar />

      <Outlet />

      {!isDemoPage && <Footer />}

      <BottomNav />

      <ScrollToTop />

    </div>
  );
}