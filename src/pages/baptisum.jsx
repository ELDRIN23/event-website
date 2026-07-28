import { useRef } from "react";
import { FaMapMarkerAlt, FaWhatsapp, FaMusic } from "react-icons/fa";

export default function Baptism() {
  const inviteRef = useRef(null);

  const scrollToInvite = () => {
    inviteRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-base-100 text-base-content">

      {/* Hero */}
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="hero-overlay bg-black/50"></div>

        <div className="hero-content text-center text-white">
          <div className="max-w-xl">
            <h3 className="text-lg tracking-widest uppercase">
              You're Invited
            </h3>

            <h1 className="text-5xl font-serif my-4">
              Baby Aaron's Baptism
            </h1>

            <p className="mb-8">
              Join us as we celebrate this special blessing.
            </p>

            <button
              onClick={scrollToInvite}
              className="btn btn-primary rounded-full"
            >
              View Invitation
            </button>
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section ref={inviteRef} className="py-16 px-5">
        <div className="card bg-base-200 shadow-xl max-w-3xl mx-auto">
          <div className="card-body text-center">

            <h2 className="text-4xl font-serif">
              Holy Baptism
            </h2>

            <p className="text-lg mt-4">
              We warmly invite you to celebrate the Baptism of
            </p>

            <h3 className="text-3xl font-bold text-primary">
              Baby Aaron
            </h3>

            <div className="divider"></div>

            <p>📅 Sunday, 20 September 2026</p>
            <p>⏰ 10:30 AM</p>
            <p>⛪ St. Mary's Church</p>
            <p>🍽 Reception follows after the ceremony</p>

          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-10 px-5">
        <h2 className="text-3xl font-serif text-center mb-8">
          Location
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="card-title">
                <FaMapMarkerAlt />
                Church
              </h3>

              <p>St. Mary's Church</p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm mt-3"
              >
                Open Maps
              </a>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="card-title">
                <FaMapMarkerAlt />
                Reception
              </h3>

              <p>ABC Auditorium</p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm mt-3"
              >
                Open Maps
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 px-5">
        <h2 className="text-3xl text-center font-serif mb-8">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">

          {[1,2,3,4].map((i)=>(
            <img
              key={i}
              src={`https://picsum.photos/400/40${i}`}
              className="rounded-xl h-44 object-cover w-full"
              alt=""
            />
          ))}

        </div>
      </section>

      {/* Contact */}
      <section className="py-16 text-center">

        <h2 className="text-3xl font-serif mb-4">
          We Look Forward to Seeing You
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="https://wa.me/919876543210"
            className="btn btn-success rounded-full"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <button className="btn btn-outline rounded-full">
            <FaMusic />
            Music
          </button>

        </div>

      </section>

    </div>
  );
}