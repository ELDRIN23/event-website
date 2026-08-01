/**
 * @authors Eldrin Johnson, Merin Joy
 * @copyright Copyright (c) 2026 Eldrin Johnson and Merin Joy. All Rights Reserved.
 *
 * PROPRIETARY & CONFIDENTIAL
 * This source code, component logic, and UI design are the exclusive property
 * of Eldrin Johnson and Merin Joy. Unauthorized copying, duplication, distribution, or
 * modification of this file via any medium is strictly prohibited by law.
 */

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BackgroundLines } from "./components/ui/background-lines";

// --- CONTINUOUS AMBIENT BACKGROUND PARTICLES COMPONENT ---
function BackgroundParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    const particleCount = 60;
    let particles = [];

    const colors = ["#f472b6", "#fbbf24", "#fef08a", "#ffffff", "#ec4899"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize floating background particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5 - 0.15, // gentle upward floating drift
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Continuous Animation Loop (Independent of Scrolling)
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen edges seamlessly
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}

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
      price: "₹999",
      description: "A beautiful event website for smaller celebrations.",
    },
    {
      title: "Premium",
      price: "₹1499",
      description:
        "Includes the premium wedding demo preview for luxury celebrations.",
      highlight: true,
    },
    {
      title: "Luxury",
      price: "₹1999",
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

  return (
    <div className="bg-[#000000] text-white min-h-screen relative selection:bg-pink-500 selection:text-black overflow-x-hidden">
      {/* GLOBAL BACKGROUND PARTICLES (Fixed in background, hidden under Hero due to solid bg) */}
      <BackgroundParticlesCanvas />

      {/* HERO SECTION ONLY WITH BACKGROUND LINES & SOLID BG (NO PARTICLES HERE) */}
      <div className="relative z-10 bg-[#000000] w-full">
        <BackgroundLines className="min-h-[80vh] md:min-h-[85vh] bg-[#000000] w-full flex items-center justify-center">
          <section className="min-h-[80vh] md:min-h-[85vh] flex items-center justify-center text-center px-4 sm:px-6 py-12 md:py-20 relative z-10 w-full">
            <div className="max-w-5xl group [perspective:1000px]">
              <p className="uppercase tracking-[5px] sm:tracking-[8px] text-pink-300 text-xs md:text-sm mb-4 font-semibold animate-pulse">
                Make Your Presence Online
              </p>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight tracking-tight drop-shadow-[0_10px_20px_rgba(244,114,182,0.15)] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(4deg)_translateZ(10px)]">
                Beautiful Websites
                <br />
                <span className="bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
                  For Every Celebration
                </span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto px-2">
                Weddings • Birthdays • Baptisms • Holy Communion • Anniversaries •
                All religious festivals & functions
              </p>
            </div>
          </section>
        </BackgroundLines>
      </div>

      {/* LAUNCH OFFER MARQUEE */}
      <section className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 py-3 relative z-10 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
        <marquee
          scrollamount="4"
          className="text-black font-black uppercase text-xs md:text-sm tracking-wider"
        >
          !! 🎉 LAUNCH OFFER — GET 10% OFF ON ALL EVENT WEBSITE CATEGORIES •
          WEDDINGS • ENGAGEMENTS • BIRTHDAYS • BAPTISMS • HOLY COMMUNIONS •
          ANNIVERSARIES • BOOK NOW & SAVE • LIMITED TIME OFFER • GRAB IT NOW •
          !!
        </marquee>
      </section>

      {/* DEMO COLLECTIONS (TRANSPARENT BG - SHOWS PARTICLES) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-16 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] text-pink-300 text-xs font-semibold mb-2">
            Curated Themes
          </p>
          <h2 className="text-3xl md:text-5xl font-serif">Demo Collections</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group [perspective:1000px] cursor-pointer"
            >
              <div className="bg-[#050505]/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(8deg)_rotateY(-4deg)_translateZ(20px)] group-hover:border-pink-300/50 group-hover:shadow-[0_20px_50px_rgba(244,114,182,0.2)]">
                <div className="overflow-hidden relative h-56 sm:h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 sm:p-8 relative">
                  <h3 className="text-xl sm:text-2xl font-serif mb-3 text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <Link to={item.route}>
                    <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-6 py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg hover:shadow-pink-500/25">
                      View Collection
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION (TRANSPARENT BG - SHOWS PARTICLES) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 border-t border-white/5">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] text-pink-300 text-xs font-semibold mb-2">
            Transparent Rates
          </p>

          <h2 className="text-3xl md:text-5xl font-serif">Pricing Plans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div key={index} className="group [perspective:1000px] h-full">
              <div className="h-full flex flex-col bg-[#050505]/90 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(6deg)_translateZ(20px)] group-hover:border-pink-300/40 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                {plan.highlight && (
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-pink-400 text-black px-3 py-1 rounded-full font-bold mb-4 inline-block w-fit">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl sm:text-2xl font-serif mb-3 text-white">
                  {plan.title}
                </h3>

                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-200 to-pink-400 bg-clip-text text-transparent mb-4">
                  {plan.price}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCEDURE & TIMELINE SECTION (TRANSPARENT BG - SHOWS PARTICLES) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] text-pink-300 text-xs font-semibold mb-2">
            Simple & Seamless Process
          </p>
          <h2 className="text-3xl md:text-5xl font-serif">How It Works</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-xs sm:text-base">
            From initial idea to live website launch in 4 clear, hassle-free
            steps.
          </p>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <li key={idx} className="group [perspective:1000px]">
                {idx !== 0 && <hr className="bg-pink-300/20" />}

                {/* Timeline Icon Node */}
                <div className="timeline-middle z-10 my-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-pink-300 to-pink-500 text-black font-black flex items-center justify-center text-xs sm:text-sm shadow-[0_0_20px_rgba(244,114,182,0.5)] border-2 border-black group-hover:scale-125 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>

                {/* Timeline Card Content */}
                <div
                  className={`${
                    isEven
                      ? "timeline-start md:text-end mb-8 md:mb-12"
                      : "timeline-end mb-8 md:mb-12"
                  } p-6 sm:p-8 bg-[#050505]/90 backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(4deg)_rotateY(-2deg)_translateZ(15px)] group-hover:border-pink-300/40 group-hover:shadow-[0_20px_40px_rgba(244,114,182,0.15)] max-w-lg`}
                >
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-pink-300 bg-pink-950/40 border border-pink-500/30 px-3 py-1 rounded-full inline-block mb-3">
                    {step.phase}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {idx !== processSteps.length - 1 && (
                  <hr className="bg-pink-300/20" />
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* REFER & EARN SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center bg-[#050505]/90 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-14 group [perspective:1000px] hover:border-pink-300/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Refer & Earn</h2>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Know someone planning a wedding, birthday, baptism, holy communion,
            anniversary, or any special event? Refer them to us and earn a
            commission when their website project is successfully completed.
          </p>

          <div className="mt-8">
            <span className="inline-block bg-gradient-to-r from-pink-200 to-pink-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-xl font-bold shadow-[0_10px_25px_rgba(244,114,182,0.3)] hover:scale-105 transition-transform">
              Earn 10% Referral Commission
            </span>
          </div>

          <p className="text-gray-500 mt-6 text-[10px] sm:text-xs tracking-wider uppercase">
            Referral rewards are provided after successful project confirmation
            and payment completion.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24 text-center px-4 sm:px-6 relative z-10 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">
          Let's Build Something Beautiful
        </h2>

        <p className="text-gray-400 mb-8 text-xs sm:text-base">
          Contact us to start creating your custom event website.
        </p>

        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
          <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(244,114,182,0.3)]">
            WhatsApp Enquiry
          </button>
        </a>
      </section>
    </div>
  );
}