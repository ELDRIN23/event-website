import { useRef } from "react";

export default function Birthday() {
  const inviteRef = useRef(null);

  return (
    <div className="bg-base-100 text-base-content">

      {/* Hero */}
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="hero-overlay bg-black/50"></div>

        <div className="hero-content text-center text-white">
          <div>
            <h3 className="uppercase tracking-[6px]">Happy Birthday</h3>

            <h1 className="text-5xl md:text-7xl font-serif my-5">
              Emily Turns 5
            </h1>

            <button
              onClick={() =>
                inviteRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-primary rounded-full"
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
            <h2 className="text-3xl font-serif">Birthday Invitation</h2>

            <p>You are invited to celebrate</p>

            <h3 className="text-4xl font-bold text-primary">
              Emily's 5th Birthday
            </h3>

            <div className="divider"></div>

            <p>📅 20 September 2026</p>
            <p>⏰ 5:00 PM</p>
            <p>📍 Grand Party Hall</p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-4"
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
              src={`https://picsum.photos/400/40${i}`}
              alt=""
              className="rounded-xl h-40 w-full object-cover"
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
          WhatsApp
        </a>
      </section>
    </div>
  );
}