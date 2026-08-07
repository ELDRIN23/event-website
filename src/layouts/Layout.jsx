/**
 * @authors Eldrin Johnson, Merin Joy
 * @copyright Copyright (c) 2026 Eldrin Johnson and Merin Joy. All Rights Reserved.
 */

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import ScrollToTop from "../components/ScrollToTop";
// import BackgroundParticles from "../components/BackgroundParticles";

export default function Layout() {
  const location = useLocation();
  const isDemoPage = location.pathname === "/wedding-demo";

  return (
    <div className="bg-[#000000] text-white min-h-screen relative selection:bg-pink-500 selection:text-black overflow-x-hidden">
      {/* 🌟 GLOBAL 3D BACKGROUND PARTICLES (PERSISTS ACROSS ALL ROUTES) */}
      {/* <BackgroundParticles /> */}

      {/* HEADER & NAVIGATION */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* MAIN ROUTE PAGE CONTENT */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* FOOTER & UTILITIES */}
      <div className="relative z-10">
        {!isDemoPage && <Footer />}
        <BottomNav />
        <ScrollToTop />
      </div>
    </div>
  );
}