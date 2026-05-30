import { Link } from "react-router-dom";

export default function App() {
  const collections = [
    {
      title: "Family Celebrations",
      description:
        "Birthday, Baptism and Holy Communion websites.",
      route: "/family-events",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Love & Celebrations",
      description:
        "Engagements, Anniversaries and Small Weddings.",
      route: "/love-celebrations",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Luxury Weddings",
      description:
        "Premium wedding invitation websites.",
      route: "/weddings",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">

        <div className="max-w-5xl">

          <p className="uppercase tracking-[8px] text-pink-300 text-sm mb-5">
            Event Website Portfolio
          </p>

          <h1 className="text-5xl md:text-8xl font-serif mb-8">
            Beautiful Websites
            <br />
            For Every Celebration
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl">
            Weddings • Birthdays • Baptisms • Holy Communion • Anniversaries
          </p>

        </div>

      </section>

      {/* COLLECTIONS */}
      <section className="py-24 px-6 md:px-16">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif">
            Demo Collections
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-[#171717] rounded-3xl overflow-hidden border border-white/10 hover:border-pink-300/30 transition"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-serif mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {item.description}
                </p>

                <Link to={item.route}>
                  <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-6 py-3 rounded-full font-semibold">
                    View Collection
                  </button>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* PRICING */}
      <section className="py-24 bg-[#111111] px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif">
            Pricing
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {[
            {
              title: "Starter",
              price: "₹1499",
            },
            {
              title: "Premium",
              price: "₹2999",
            },
            {
              title: "Luxury",
              price: "₹4499",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-3xl font-serif mb-4">
                {plan.title}
              </h3>

              <p className="text-5xl font-bold text-pink-300">
                {plan.price}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-24 text-center px-6">

        <h2 className="text-4xl md:text-6xl font-serif mb-6">
          Let's Build Something Beautiful
        </h2>

        <p className="text-gray-400 mb-10">
          Contact for custom event websites.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-10 py-4 rounded-full font-semibold">
            WhatsApp Enquiry
          </button>
        </a>

      </section>

    </div>
  );
}