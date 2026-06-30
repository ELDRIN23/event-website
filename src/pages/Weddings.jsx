import React from "react";

export default function Weddings() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[6px] text-pink-300 text-sm mb-4">
            Wedding Collection
          </p>

          <h1 className="text-5xl md:text-8xl font-serif mb-6">
            Wedding
            <br />
            Websites
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl">
            Elegant, Modern & Memorable Wedding Websites
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6 bg-[#111111]">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-serif">
            Wedding Packages
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* PREMIUM */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10">

            <h3 className="text-3xl font-serif mb-4">
              Premium
            </h3>

            <p className="text-5xl font-bold text-pink-300 mb-8">
              ₹2999
            </p>

            <div className="space-y-4 text-gray-300">
              <p>✓ Countdown Timer</p>
              <p>✓ Photo Gallery</p>
              <p>✓ Couple Story</p>
              <p>✓ Google Maps</p>
              <p>✓ WhatsApp RSVP</p>
              <p>✓ Mobile Responsive</p>
              <p>✓ 30 days Hosting</p>
            </div>

            <a
              href="YOUR_PREMIUM_DEMO_LINK"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-8 w-full bg-gradient-to-r from-pink-200 to-pink-400 text-black py-4 rounded-full font-semibold hover:scale-105 transition">
                View Premium Demo
              </button>
            </a>

          </div>

          {/* LUXURY */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-pink-300/30">

            <div className="inline-block px-4 py-1 bg-pink-300 text-black rounded-full text-sm font-semibold mb-5">
              Most Popular
            </div>

            <h3 className="text-3xl font-serif mb-4">
              Luxury
            </h3>

            <p className="text-5xl font-bold text-pink-300 mb-8">
              ₹4499
            </p>

            <div className="space-y-4 text-gray-300">
              <p>✓ Everything In Premium</p>
              <p>✓ Premium Animations</p>
              <p>✓ Multiple Galleries</p>
              <p>✓ Wedding Timeline</p>
              <p>✓ Guest Wishes Section</p>
              <p>✓ Custom Music</p>
              <p>✓ Custom Domain Support</p>
              <p>✓ Priority Support</p>
            </div>

            <a
              href="YOUR_LUXURY_DEMO_LINK"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-8 w-full bg-gradient-to-r from-pink-200 to-pink-400 text-black py-4 rounded-full font-semibold hover:scale-105 transition">
                View Luxury Demo
              </button>
            </a>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">

        <h2 className="text-4xl md:text-6xl font-serif mb-6">
          Ready For Your Wedding Website?
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          Choose your package and contact us today.
        </p>

        <a
          href="https://wa.me/9061014915"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Contact On WhatsApp
          </button>
        </a>

      </section>

    </div>
  );
}