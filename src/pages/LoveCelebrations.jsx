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
    {
      title: "Small Wedding Website",
      description:
        "Perfect for intimate weddings with modern design, RSVP and event management features.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#101010] via-[#141414] to-black"></div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[8px] text-pink-300 text-sm mb-5">
            Love & Celebrations
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            Beautiful Websites
            <br />
            For Every Love Story
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Elegant websites for engagements, anniversaries and intimate weddings.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-16">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Love Celebration Collection
          </h2>

          <p className="text-gray-400 leading-8">
            Designed for couples who want a modern and memorable way to
            invite guests and share their special moments online.
          </p>

        </div>

      </section>

      {/* DEMOS */}
      <section className="pb-24 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#171717] rounded-3xl overflow-hidden border border-white/10 hover:border-pink-300/30 transition duration-500 hover:-translate-y-2"
            >

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-serif mb-4">
                  {event.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {event.description}
                </p>

                <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                  View Demo
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#111111] px-6 md:px-16">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-serif">
            Included Features
          </h2>

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
              className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-serif">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* SHOWCASE */}
      <section className="py-24 px-6 md:px-16">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-serif">
            Featured Design
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="rounded-3xl h-[500px] object-cover w-full"
          />

          <div>

            <h3 className="text-4xl font-serif mb-6">
              Crafted For Modern Couples
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Our websites blend elegance and functionality,
              helping couples share their story and manage their
              special day beautifully.
            </p>

            <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-8 py-4 rounded-full font-semibold">
              View Premium Demo
            </button>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#111111] px-6 md:px-16">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-serif">
            What Clients Love
          </h2>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10">
            <p className="text-gray-300 leading-8">
              "The website looked beautiful and our guests loved the RSVP feature."
            </p>

            <p className="text-pink-300 mt-6">
              ★★★★★
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10">
            <p className="text-gray-300 leading-8">
              "Everything was simple, elegant and worked perfectly on mobile."
            </p>

            <p className="text-pink-300 mt-6">
              ★★★★★
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">

        <h2 className="text-4xl md:text-6xl font-serif mb-6">
          Let's Build Your Celebration Website
        </h2>

        <p className="text-gray-400 mb-10">
          Perfect for engagements, anniversaries and intimate weddings.
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