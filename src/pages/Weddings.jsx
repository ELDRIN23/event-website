

import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Gem, ArrowLeft } from "lucide-react";

export default function Weddings() {
  return (
    <div className="bg-[#fafbfc] text-slate-900 min-h-screen overflow-x-hidden font-sans">
      
      {/* TOP HEADER BAR WITH BACK LINK */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <span className="text-xs uppercase tracking-[3px] text-slate-400 font-medium">
          Collection 01
        </span>
      </div>

      {/* MINIMALIST HEADING SECTION (REPLACED HERO) */}
      <section className="pt-8 pb-16 px-6 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[4px] text-slate-500 text-xs md:text-sm mb-3 font-semibold flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-amber-500" />
          Wedding Collection
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif mb-4 text-slate-900 tracking-tight">
          Wedding Websites
        </h1>

        <p className="text-slate-600 text-base md:text-lg font-normal max-w-xl mx-auto">
          Elegant, modern, and memorable digital invitation websites crafted for your special day.
        </p>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-slate-500 text-xs font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Gem size={14} /> Transparent Rates
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">
            Wedding Packages
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* PREMIUM */}
          <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-10 border border-slate-300/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif mb-2 text-slate-900 font-bold">
                Premium
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Essential features for a beautiful wedding announcement.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-slate-900">₹1499</span>
              </div>

              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base mb-8">
                <p className="flex items-center gap-3">✓ Countdown Timer</p>
                <p className="flex items-center gap-3">✓ Photo Gallery</p>
                <p className="flex items-center gap-3">✓ Couple Story</p>
                <p className="flex items-center gap-3">✓ Google Maps Integration</p>
                <p className="flex items-center gap-3">✓ WhatsApp RSVP</p>
                <p className="flex items-center gap-3">✓ Mobile Responsive</p>
                <p className="flex items-center gap-3">✓ 30 Days Hosting</p>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all shadow-sm">
              View Premium Demo
            </button>
          </div>

          {/* LUXURY */}
          <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-10 border border-slate-400/80 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:shadow-md">
            <div className="absolute top-6 right-6">
              <span className="bg-black text-white text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif mb-2 text-slate-900 font-bold">
                Luxury
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                The ultimate high-end web experience for grand celebrations.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-slate-900">₹2999</span>
              </div>

              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base mb-8">
                <p className="flex items-center gap-3">✓ Everything In Premium</p>
                <p className="flex items-center gap-3">✓ Backend Support</p>
                <p className="flex items-center gap-3">✓ Multiple Galleries</p>
                <p className="flex items-center gap-3">✓ Wedding Timeline</p>
                <p className="flex items-center gap-3">✓ Guest Wishes Section</p>
                <p className="flex items-center gap-3">✓ Custom Music</p>
                <p className="flex items-center gap-3">✓ Custom Domain Support (Paid)</p>
                <p className="flex items-center gap-3">✓ Priority Support</p>
              </div>
            </div>

            <Link to="/wedding-demo" className="block">
              <button className="w-full bg-black text-white py-4 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all shadow-sm">
                View Luxury Demo
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center px-6 border-t border-slate-200/60 bg-white">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
          Ready For Your Wedding Website?
        </h2>

        <p className="text-slate-600 mb-8 text-base">
          Choose your package and contact us today.
        </p>

        <a
          href="https://wa.me/919061014915"
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          <button 
            style={{ backgroundColor: "#15803d", color: "#ffffff" }}
            className="!bg-green-700 hover:!bg-green-800 !text-white px-9 py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5 fill-white text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-.981z" />
            </svg>
            <span style={{ color: "#ffffff" }} className="!text-white font-bold">
              Contact On WhatsApp
            </span>
          </button>
        </a>
      </section>

    </div>
  );
}