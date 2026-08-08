/**
 * @authors Eldrin Johnson, Merin Joy
 * @copyright Copyright (c) 2026 Eldrin Johnson and Merin Joy. All Rights Reserved.
 * 
 * PROPRIETARY & CONFIDENTIAL
 * This source code, component logic, and UI design are the exclusive property 
 * of Eldrin Johnson and Merin Joy. Unauthorized copying, duplication, distribution, or 
 * modification of this file via any medium is strictly prohibited by law.
 */
import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowLeft, Sparkles, Gem } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden font-sans selection:bg-black selection:text-white">
      
      {/* TOP HEADER BAR WITH BACK LINK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <span className="text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-neutral-400 font-medium">
          Get In Touch
        </span>
      </div>

      {/* HERO SECTION */}
      <section className="pt-2 pb-8 sm:pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[3px] sm:tracking-[4px] text-neutral-500 text-[11px] sm:text-sm mb-3 font-semibold flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-neutral-900" />
          Contact Us
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-4 text-black tracking-tight leading-tight">
          Let's Build Something Beautiful
        </h1>

        <p className="text-neutral-600 text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto px-2">
          Looking for a professional website for your wedding, engagement, birthday, baptism, holy communion, anniversary or special event?
        </p>
      </section>

      {/* CONTACT CARD SECTION */}
      <section className="px-4 sm:px-6 py-4 sm:py-6 max-w-4xl mx-auto">
        <div className="bg-[#f1f3f5] rounded-3xl p-6 sm:p-10 md:p-12 border border-neutral-300 shadow-sm text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-2 text-black font-bold">Connect With Us</h2>
          <p className="text-neutral-600 text-xs sm:text-sm mb-6 px-2">We're available directly on WhatsApp for quick responses.</p>

          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1">WhatsApp Support</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-6 sm:mb-8 tracking-tight">
            +91 9061014915
          </p>

          <a
            href="https://wa.me/919061014915"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <button 
              style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
              className="!bg-green-600 hover:!bg-green-700 !text-white w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-white text-white shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-.981z" />
              </svg>
              <span style={{ color: "#ffffff" }} className="!text-white font-bold">
                Chat on WhatsApp
              </span>
            </button>
          </a>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-xl sm:text-2xl">
            <a
              href="https://wa.me/919061014915"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
              title="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/eldrin-johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/_e_ldrin/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-5xl mx-auto">
        <div className="bg-[#f1f3f5] rounded-3xl p-6 sm:p-10 md:p-12 border border-neutral-300 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 text-black font-bold">About Us</h2>

          <p className="text-neutral-600 leading-relaxed text-sm sm:text-base mb-4">
            We are a creative team specializing in modern event websites for
            weddings, engagements, birthdays, baptisms, holy communions,
            anniversaries, and other special celebrations.
          </p>

          <p className="text-neutral-600 leading-relaxed text-sm sm:text-base mb-6">
            Our goal is to create elegant, memorable, and user-friendly digital
            experiences that help showcase life's most important moments.
          </p>

          <div className="inline-block px-4 py-2.5 bg-white rounded-xl border border-neutral-300 shadow-sm">
            <span className="text-black font-semibold text-xs sm:text-sm">Eldrin Johnson & Merin Joy</span>
            <span className="text-neutral-500 text-[11px] sm:text-xs block">Lead Developers & Founders</span>
          </div>
        </div>
      </section>
      
      {/* SERVICES */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 pb-16 sm:pb-20 max-w-5xl mx-auto border-t border-neutral-200">
        <div className="text-center mb-8 sm:mb-10">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-neutral-500 text-xs font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Gem size={14} /> What We Offer
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {[
            "Wedding Websites",
            "Engagement Websites",
            "Birthday Websites",
            "Baptism Websites",
            "Holy Communion Websites",
            "Custom Event Websites",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#f1f3f5] border border-neutral-300 rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:border-black transition-all font-serif text-base sm:text-lg text-black font-medium"
            >
              {service}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}