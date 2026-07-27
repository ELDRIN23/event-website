import { Link } from "react-router-dom";

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
      price: "₹1499",
      description: "A beautiful event website for smaller celebrations.",
      button: "Contact Now",
      route: "/contact",
    },
    {
      title: "Premium",
      price: "₹2999",
      description:
        "Includes the premium wedding demo preview for luxury celebrations.",
      button: "Preview Demo",
      route: "/wedding-demo",
      highlight: true,
    },
    {
      title: "Luxury",
      price: "₹4499",
      description:
        "A high-end website experience with custom styling and support.",
      button: "Contact Now",
      route: "/contact",
    },
  ];

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      {/* HERO */}
      <section className="min-h-[75vh] flex items-center justify-center text-center px-6 py-16">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[6px] text-pink-300 text-sm mb-4">
            Make Your Presence Online
          </p>

          <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
            Beautiful Websites
            <br />
            For Every Celebration
          </h1>

          <p className="text-gray-300 text-base md:text-xl">
            Weddings • Birthdays • Baptisms • Holy Communion • Anniversaries
          </p>
        </div>
      </section>

      {/* LAUNCH OFFER MARQUEE */}
      <section className="bg-yellow-500 py-3">
        <marquee scrollamount="3" className="text-black font-bold">
          !! 🎉 LAUNCH OFFER — GET 10% OFF ON ALL EVENT WEBSITE CATEGORIES •
          WEDDINGS • ENGAGEMENTS • BIRTHDAYS • BAPTISMS • HOLY COMMUNIONS •
          ANNIVERSARIES • BOOK NOW & SAVE • LIMITED TIME OFFER • GRAB IT NOW •
          !!
        </marquee>
      </section>

      {/* COLLECTIONS */}
      <section className="py-16 px-6 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif">Demo Collections</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-[#171717] rounded-3xl overflow-hidden border border-white/10 hover:border-pink-300/30 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>

                <p className="text-gray-400 mb-5">{item.description}</p>

                <Link to={item.route}>
                  <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                    View Collection
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-[#111111] px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif">Pricing</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 border border-white/10 bg-[#1a1a1a]"
            >
              <h3 className="text-2xl font-serif mb-3">{plan.title}</h3>

              <p className="text-4xl font-bold text-pink-300 mb-4">
                {plan.price}
              </p>

              <p className="text-gray-400 mb-6">{plan.description}</p>

              <Link to={plan.route}>
                <button className="w-full bg-gradient-to-r from-pink-200 to-pink-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                  {plan.button}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Let's Build Something Beautiful
        </h2>

        <p className="text-gray-400 mb-6">Contact for custom event websites.</p>

        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
          <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            WhatsApp Enquiry
          </button>
        </a>
      </section>

      {/* REFER & EARN */}
      <section className="py-16 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto text-center bg-[#171717] border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Refer & Earn</h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Know someone planning a wedding, birthday, baptism, holy communion,
            anniversary, or any special event? Refer them to us and earn a
            commission when their website project is successfully completed.
          </p>

          <div className="mt-8">
            <span className="inline-block bg-gradient-to-r from-pink-200 to-pink-400 text-black px-8 py-4 rounded-full text-xl font-bold">
              Earn 10% Referral Commission
            </span>
          </div>

          <p className="text-gray-400 mt-6 text-sm">
            Referral rewards are provided after successful project confirmation
            and payment completion.
          </p>
        </div>
      </section>
    </div>
  );
}
