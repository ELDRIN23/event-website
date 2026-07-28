import { useRef } from "react";

export default function HolyCommunion() {
  const inviteRef = useRef(null);

  return (
    <div className="bg-base-100 text-base-content">

      {/* Hero */}
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="hero-overlay bg-black/55"></div>

        <div className="hero-content text-center text-white">
          <div>
            <p className="uppercase tracking-[5px]">First Holy Communion</p>

            <h1 className="text-5xl md:text-7xl font-serif my-5">
              Anna Maria
            </h1>

            <button
              onClick={() =>
                inviteRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-warning rounded-full"
            >
              View Invitation
            </button>
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section ref={inviteRef} className="py-16 px-5">
        <div className="card bg-base-200 shadow-xl max-w-xl mx-auto">
          <div className="card-body text-center">

            <h2 className="text-3xl font-serif">
              You're Invited
            </h2>

            <p>
              Join us as our daughter receives
              <br />
              <span className="font-bold text-warning">
                First Holy Communion
              </span>
            </p>

            <div className="divider"></div>

            <p>📅 18 October 2026</p>
            <p>⛪ St. Mary's Church</p>
            <p>⏰ Holy Mass - 9:30 AM</p>
            <p>🍽 Reception - 12:30 PM</p>

            <blockquote className="italic mt-4">
              "I am the Bread of Life."
              <br />
              <span className="text-sm">John 6:35</span>
            </blockquote>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning mt-5"
            >
              View Location
            </a>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/500/40${i}`}
              alt=""
              className="rounded-xl h-44 w-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 text-center">
        <a
          href="https://wa.me/919061014915"
          className="btn btn-success rounded-full"
        >
          Contact on WhatsApp
        </a>
      </section>

    </div>
  );
}