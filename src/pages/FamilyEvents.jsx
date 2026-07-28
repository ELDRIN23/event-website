import { Link } from "react-router-dom";

export default function FamilyEvents() {
  const events = [
    {
      title: "Birthday Celebration",
      description:
        "Colorful and modern birthday invitation websites with gallery, location and RSVP.",
      route: "/birthday",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Baptism Ceremony",
      description:
        "Elegant baptism websites with church details, family message and guest information.",
      route: "/baptism",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Holy Communion",
      description:
        "Premium Holy Communion invitation websites designed with grace and simplicity.",
      route: "/HolyCommunion",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#101010] via-[#141414] to-black"></div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[8px] text-pink-300 text-sm mb-5">
            Family Celebrations
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            Celebrate Life's
            <br />
            Beautiful Moments
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Beautiful websites for birthdays, baptisms and holy communions.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Family Event Collection
          </h2>

          <p className="text-gray-400 leading-8">
            Every special family occasion deserves a beautiful digital
            invitation. Browse our collection of modern event websites designed
            to make your celebration memorable.
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
                <h3 className="text-3xl font-serif mb-4">{event.title}</h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {event.description}
                </p>

                <Link to={event.route}>
                  <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                    View Demo
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#111111] px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">Included Features</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Photo Gallery",
            "Event Details",
            "Google Maps",
            "WhatsApp RSVP",
            "Mobile Responsive",
            "Custom Design",
            "Guest Information",
            "Fast Delivery",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-serif">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE PREVIEW */}
      <section className="py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">Sample Gallery</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="rounded-3xl h-[350px] object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="rounded-3xl h-[350px] object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="rounded-3xl h-[350px] object-cover w-full"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111] text-center px-6">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">
          Let's Create Your Event Website
        </h2>

        <p className="text-gray-400 mb-10">
          Perfect for birthdays, baptisms and holy communions.
        </p>

        <a href="https://wa.me/9061014915" target="_blank" rel="noreferrer">
          <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Contact On WhatsApp
          </button>
        </a>
      </section>
    </div>
  );
}
