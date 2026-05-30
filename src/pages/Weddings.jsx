import { useEffect, useState } from "react";

export default function Weddings() {
  const weddingDate = new Date("2026-08-30T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (distance % (1000 * 60 * 60)) /
              (1000 * 60)
          ),
          seconds: Math.floor(
            (distance % (1000 * 60)) / 1000
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[8px] text-pink-300 text-sm mb-5">
            Luxury Wedding Collection
          </p>

          <h1 className="text-5xl md:text-8xl font-serif mb-8">
            Crafted For
            <br />
            Your Forever Story
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl">
            Premium Wedding Websites Designed
            To Impress Your Guests
          </p>

        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-24 px-6 md:px-16">

        <div className="text-center mb-16">

          <p className="text-pink-300 uppercase tracking-[5px] mb-3">
            Featured Demo
          </p>

          <h2 className="text-4xl md:text-6xl font-serif">
            Sara & Joel
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="rounded-3xl h-[500px] w-full object-cover"
          />

          <div className="flex flex-col justify-center">

            <h3 className="text-3xl md:text-5xl font-serif mb-6">
              Premium Wedding Experience
            </h3>

            <p className="text-gray-400 leading-8">
              Elegant layouts, countdowns,
              gallery sections, RSVP,
              WhatsApp integration and
              venue maps designed specifically
              for modern weddings.
            </p>

          </div>

        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="py-24 bg-[#111111] px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-6xl font-serif">
            Countdown Demo
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            {
              value: timeLeft.days,
              label: "Days",
            },
            {
              value: timeLeft.hours,
              label: "Hours",
            },
            {
              value: timeLeft.minutes,
              label: "Minutes",
            },
            {
              value: timeLeft.seconds,
              label: "Seconds",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-3xl p-8 text-center border border-white/10"
            >
              <h3 className="text-5xl font-bold text-pink-300">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif">
            Included Features
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {[
            "Countdown Timer",
            "Photo Gallery",
            "Google Maps",
            "WhatsApp RSVP",
            "Couple Story",
            "Save The Date",
            "Mobile Friendly",
            "Custom Domain",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#161616] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-serif">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-[#111111] px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif">
            Gallery Preview
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {[
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-3xl h-[400px] object-cover w-full hover:scale-105 transition duration-500"
            />
          ))}
        </div>

      </section>

      {/* MAP */}
      <section className="py-24 px-6 md:px-16">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif">
            Venue Location
          </h2>

        </div>

        <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-white/10">

          <iframe
            title="venue"
            src="https://www.google.com/maps?q=Lulu+International+Convention+Centre+Thrissur&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 bg-[#111111]">

        <h2 className="text-4xl md:text-6xl font-serif mb-6">
          Ready For Your Wedding Website?
        </h2>

        <p className="text-gray-400 mb-10">
          Get a custom wedding website built
          for your special day.
        </p>

        <a
          href="https://wa.me/919876543210"
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