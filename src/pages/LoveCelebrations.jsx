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
import { Link } from "react-router-dom";
import { Gem, ArrowLeft, Heart } from "lucide-react";

export default function LoveCelebrations() {
  const events = [
    {
      title: "Engagement Website",
      description:
        "Elegant engagement websites featuring countdowns, couple stories, galleries and RSVP.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Anniversary Website",
      description:
        "Celebrate milestones with beautiful anniversary websites showcasing memories and moments.",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    },
  ];

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
          Collection 03
        </span>
      </div>

      {/* DEMOS */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-slate-500 text-xs font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Heart size={14} className="text-rose-500 fill-rose-500" /> Love & Celebrations
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">Love Celebration Collection</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-[#f3f4f6] rounded-3xl overflow-hidden border border-slate-300/80 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
            >
              {/* CORNER RIBBON TAG (SOLID DARK RED, NO ANIMATION) */}
              <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden z-20 pointer-events-none">
                <div className="absolute top-5 -left-10 w-40 bg-red-800 text-white font-semibold text-[11px] tracking-wider uppercase text-center py-1.5 -rotate-45 shadow-md">
                  JUST ₹999
                </div>
              </div>

              <div className="overflow-hidden aspect-[16/10] bg-slate-200">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-slate-900 font-bold">{event.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-8">
                    {event.description}
                  </p>
                </div>

                <div className="block mt-auto">
                  {/* <button className="w-full bg-black text-white py-3.5 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all shadow-sm">
                    View Demo
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white px-6 md:px-16 border-t border-slate-200/60">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-slate-500 text-xs font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Gem size={14} /> Full Package
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">Included Features</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Countdown Timer",
            "Couple Story",
            "Photo Gallery",
            "Google Maps",
            "WhatsApp RSVP",
            "Guest Information",
            "Mobile Responsive",
            "Custom Design",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#f3f4f6] rounded-2xl p-6 border border-slate-300/80 shadow-sm text-center"
            >
              <h3 className="text-lg font-serif font-bold text-slate-900">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">
            Featured Design
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#f3f4f6] border border-slate-300/80 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="overflow-hidden rounded-2xl bg-slate-200 aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop"
              alt="Featured Design"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-serif mb-4 text-slate-900 font-bold">
              Crafted For Modern Couples
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our websites blend elegance and functionality,
              helping couples share their story and manage their
              special day beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white px-6 md:px-16 border-t border-slate-200/60">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">
            What Clients Love
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#f3f4f6] rounded-3xl p-8 border border-slate-300/80 shadow-sm flex flex-col justify-between">
            <p className="text-slate-700 leading-relaxed text-base italic mb-6">
              "The website looked beautiful and our guests loved the RSVP feature."
            </p>

            <p className="text-amber-500 font-bold tracking-widest text-sm">
              ★★★★★
            </p>
          </div>

          <div className="bg-[#f3f4f6] rounded-3xl p-8 border border-slate-300/80 shadow-sm flex flex-col justify-between">
            <p className="text-slate-700 leading-relaxed text-base italic mb-6">
              "Everything was simple, elegant and worked perfectly on mobile."
            </p>

            <p className="text-amber-500 font-bold tracking-widest text-sm">
              ★★★★★
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center px-6 border-t border-slate-200/60">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
          Let's Build Your Celebration Website
        </h2>

        <p className="text-slate-600 mb-8 text-base">
          Perfect for engagements, anniversaries and intimate weddings.
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