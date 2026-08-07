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
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Gem,
  GlassWater,
  Gift,
  Music,
  Camera,
  PartyPopper,
} from "lucide-react";

export default function App() {
  const collections = [
    {
      title: "Luxury Weddings",
      description: "Premium wedding invitation websites.",
      route: "/weddings",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Family Celebrations",
      description: "Birthday, Baptism and Holy Communion websites.",
      route: "/family-events",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Love & Celebrations",
      description: "Engagements, Anniversaries and Small Weddings.",
      route: "/love-celebrations",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const plans = [
    {
      title: "Starter",
      originalPrice: "₹1249",
      price: "₹999",
      discount: "20% OFF",
      description: "A beautiful event website for smaller celebrations.",
    },
    {
      title: "Premium",
      originalPrice: "₹1899",
      price: "₹1499",
      discount: "20% OFF",
      description:
        "Includes the premium wedding demo preview for luxury celebrations.",
      highlight: true,
    },
    {
      title: "Luxury",
      originalPrice: "₹2499",
      price: "₹1999",
      discount: "20% OFF",
      description:
        "A high-end website experience with custom styling and support.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      phase: "Phase 1: Discovery & Content Gathering",
      title: "Select Theme & Share Details",
      description:
        "Choose your favorite design template from our collections. Share event details such as couple/host names, venue location, schedule timings, photo gallery media, and background music preferences.",
    },
    {
      step: "02",
      phase: "Phase 2: Custom Development",
      title: "Building & Interactive Feature Integration",
      description:
        "We build your custom single-page React web application. We configure dynamic countdown timers, interactive Google Maps venue directions, live WhatsApp RSVP forms, photo galleries, and audio play controls.",
    },
    {
      step: "03",
      phase: "Phase 3: Review & Testing",
      title: "Live Preview & Refinements",
      description:
        "Receive a live staging link to review on mobile and desktop screens. Test RSVP functionality, check copy accuracy, and request any styling or text tweaks before final launch.",
    },
    {
      step: "04",
      phase: "Phase 4: Deployment & Launch",
      title: "Go Live & Share Invitations",
      description:
        "Your event website is deployed live on high-speed cloud hosting with an easy link or custom domain. Easily share via WhatsApp, Instagram bio, or print QR codes on physical invite cards.",
    },
  ];

  const launchOfferText =
    "!! 🎉 LAUNCH OFFER — GET FLAT 20% OFF ON ALL EVENT WEBSITE CATEGORIES • WEDDINGS • ENGAGEMENTS • BIRTHDAYS • BAPTISMS • HOLY COMMUNIONS • ANNIVERSARIES • BOOK NOW & SAVE • LIMITED TIME OFFER • GRAB IT NOW • !!";

  // Path to your image inside public/ folder
  const heroIllustrationUrl = "/images/illustration.png";

  return (
    <div className="bg-[#fafbfc] text-slate-900 min-h-screen relative selection:bg-black selection:text-white overflow-x-hidden font-sans">
      <style>{`
        @keyframes smoothMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-smooth-marquee {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: smoothMarquee 22s linear infinite;
        }

        @keyframes drawStrike {
          0% { width: 0%; }
          100% { width: 105%; }
        }
        .animated-strike {
          position: relative;
          display: inline-block;
        }
        .animated-strike::after {
          content: "";
          position: absolute;
          left: -2.5%;
          top: 50%;
          height: 2px;
          background: #ef4444;
          animation: drawStrike 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          transform: translateY(-50%) rotate(-3deg);
        }
      `}</style>

      {/* --- FLOATING DECORATIVE BACKGROUND ICONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[8%] left-[5%] text-slate-800">
          <Heart size={36} />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[18%] right-[8%] text-slate-800">
          <Sparkles size={40} />
        </motion.div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute top-[35%] left-[3%] text-slate-800">
          <Gem size={32} />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute top-[48%] right-[4%] text-slate-800">
          <GlassWater size={36} />
        </motion.div>
        <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 6.5, repeat: Infinity }} className="absolute top-[65%] left-[6%] text-slate-800">
          <Music size={34} />
        </motion.div>
        <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 4.8, repeat: Infinity }} className="absolute top-[78%] right-[5%] text-slate-800">
          <PartyPopper size={38} />
        </motion.div>
        <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 5.2, repeat: Infinity }} className="absolute top-[90%] left-[8%] text-slate-800">
          <Gift size={32} />
        </motion.div>
      </div>

      {/* HERO SECTION */}
      <div className="relative z-10 bg-white w-full border-b border-slate-200/60 overflow-hidden">
        <section className="min-h-[80vh] md:min-h-[85vh] flex items-center justify-between px-6 md:px-16 py-12 md:py-20 max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <p className="uppercase tracking-[4px] sm:tracking-[6px] text-slate-500 text-xs md:text-sm mb-4 font-semibold flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              Make Your Presence Online
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif mb-6 leading-tight tracking-tight text-slate-900">
              Beautiful Websites
              <br />
              <span className="text-black font-semibold flex items-center gap-3">
                For Every Celebration
                <Heart className="inline text-rose-500 fill-rose-500" size={40} />
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal tracking-wide max-w-xl mb-10">
              Weddings • Birthdays • Baptisms • Holy Communion • Anniversaries •
              All religious festivals & functions
            </p>

            <div className="flex justify-start">
              <a
                href="https://wa.me/919061014915"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: "#15803d", color: "#ffffff" }}
                className="inline-flex items-center gap-2.5 !bg-green-700 hover:!bg-green-800 !text-white font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base cursor-pointer pointer-events-auto"
              >
                <svg className="w-5 h-5 fill-white text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-.981z" />
                </svg>
                <span style={{ color: "#ffffff" }} className="!text-white font-bold">
                  WhatsApp Enquiry
                </span>
              </a>
            </div>
          </div>

          {/* SEAMLESSLY BLENDED HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center w-1/2 pl-12 relative"
          >
            {/* Soft Ambient Radial Glow Behind Image */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-amber-200/30 via-rose-100/40 to-slate-100/50 blur-3xl rounded-full scale-110 pointer-events-none" />

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={heroIllustrationUrl}
              alt="Bride and Groom Illustration"
              className="w-full max-w-lg h-auto object-contain mix-blend-multiply opacity-95 [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]"
            />
          </motion.div>
        </section>
      </div>

      {/* LAUNCH OFFER MARQUEE */}
      <section className="bg-black text-white py-3.5 relative z-10 border-b border-slate-800 overflow-hidden">
        <div className="animate-smooth-marquee">
          <span className="text-white font-bold uppercase text-xs md:text-sm tracking-widest whitespace-nowrap pr-8">
            {launchOfferText}
          </span>
          <span className="text-white font-bold uppercase text-xs md:text-sm tracking-widest whitespace-nowrap pr-8">
            {launchOfferText}
          </span>
        </div>
      </section>

      {/* DEMO COLLECTIONS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-16 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] text-slate-500 text-xs font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Camera size={14} /> Curated Themes
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">Demo Collections</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-md sm:max-w-7xl mx-auto">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.12), 0 10px 15px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#f3f4f6] rounded-2xl overflow-hidden border border-slate-300/70 shadow-sm transition-all duration-300 flex flex-col relative"
            >
              <div className="overflow-hidden relative aspect-[16/10] sm:aspect-auto sm:h-64 bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-8 relative flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-serif mb-2 text-slate-900 font-bold flex items-center justify-between">
                    {item.title}
                    <Heart size={18} className="text-slate-400 hover:text-rose-500 cursor-pointer transition-colors" />
                  </h3>
                  <p className="text-slate-600 mb-6 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <Link to={item.route} className="block mt-auto">
                  <button className="w-full bg-black text-white px-6 py-3 rounded-xl font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-sm">
                    View Collection
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 border-t border-slate-200/60 bg-white">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] text-slate-500 text-xs font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Gem size={14} /> Transparent Rates
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">Pricing Plans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 35px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.05)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full rounded-2xl overflow-hidden"
            >
              <div className="relative h-full flex flex-col bg-[#f3f4f6] border border-slate-300/80 rounded-2xl p-6 sm:p-8 pt-10 sm:pt-12 shadow-sm transition-all duration-300">
                <div className="absolute top-4 left-0 bg-black text-white font-bold text-[11px] sm:text-xs px-3.5 py-1 rounded-r-full shadow-sm tracking-wider z-20 flex items-center gap-1">
                  <Gift size={12} /> {plan.discount}
                </div>

                {plan.highlight && (
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full font-semibold mb-4 inline-block w-fit self-end">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl sm:text-2xl font-serif mb-3 text-slate-900 font-bold mt-2">
                  {plan.title}
                </h3>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="animated-strike text-slate-400 text-lg sm:text-xl font-medium">
                    {plan.originalPrice}
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-grow">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-[#f3f4f6] border border-slate-300/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="text-xl font-serif font-bold text-slate-900 mb-1 flex items-center gap-2">
              <GlassWater size={20} className="text-amber-600" />
              Customized Design Options
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Looking for tailored custom features or specific design theme options?
            </p>
          </div>
          <div className="w-40 h-28 bg-white border border-slate-300/60 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop"
              alt="Standing Bride and Groom"
              className="w-full h-full object-cover grayscale opacity-90 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* PROCEDURE & TIMELINE SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 border-t border-slate-200/60">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] text-slate-500 text-xs font-semibold mb-2">
            Simple & Seamless Process
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">How It Works</h2>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto text-xs sm:text-base">
            From initial idea to live website launch in 4 clear, hassle-free steps.
          </p>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <li key={idx}>
                {idx !== 0 && <hr className="bg-slate-200" />}

                <div className="timeline-middle z-10 my-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-md border-2 border-white">
                    {step.step}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${
                    isEven
                      ? "timeline-start md:text-end mb-8 md:mb-12"
                      : "timeline-end mb-8 md:mb-12"
                  } p-6 sm:p-8 bg-[#f3f4f6] border border-slate-300/80 rounded-2xl shadow-sm transition-all duration-300 max-w-lg`}
                >
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
                    {step.phase}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-normal">
                    {step.description}
                  </p>
                </motion.div>

                {idx !== processSteps.length - 1 && (
                  <hr className="bg-slate-200" />
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* REFER & EARN SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 border-t border-slate-200/60 bg-white">
        <motion.div 
          whileHover={{ boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
          className="max-w-5xl mx-auto text-center bg-[#f3f4f6] border border-slate-300/80 rounded-3xl p-6 sm:p-14 shadow-sm transition-all duration-300 relative overflow-hidden"
        >
          <div className="hidden md:block absolute -right-6 -bottom-6 w-44 h-36 bg-white border border-slate-300/70 rounded-2xl p-2 shadow-sm rotate-6 opacity-85">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop"
              alt="Groom carrying bride"
              className="w-full h-full object-cover grayscale rounded-lg"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 flex items-center justify-center gap-3">
            <PartyPopper className="text-amber-600" /> Refer & Earn
          </h2>

          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Know someone planning a wedding, birthday, baptism, holy communion,
            anniversary, or any special event? Refer them to us and earn a
            commission when their website project is successfully completed.
          </p>

          <div className="mt-8">
            <span className="inline-block bg-black text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold shadow-md hover:bg-slate-800 transition-all">
              Earn 10% Referral Commission
            </span>
          </div>

          <p className="text-slate-400 mt-6 text-[10px] sm:text-xs tracking-wider uppercase font-medium">
            Referral rewards are provided after successful project confirmation
            and payment completion.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24 text-center px-4 sm:px-6 relative z-10 border-t border-slate-200/60">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
          Let's Build Something Beautiful
        </h2>

        <p className="text-slate-600 mb-8 text-xs sm:text-base">
          Contact us to start creating your custom event website.
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
              WhatsApp Enquiry
            </span>
          </button>
        </a>
      </section>
    </div>
  );
}