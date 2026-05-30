import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      {/* HERO */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[8px] text-pink-300 text-sm mb-3">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-serif mb-5">
            Let's Build Something Beautiful
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-3xl mx-auto">
            Looking for a professional website for your wedding, engagement,
            birthday, baptism, holy communion, anniversary or special event?
          </p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="px-6 py-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#171717] to-[#1f1f1f] border border-white/10 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Get In Touch</h2>

          <p className="text-gray-400">WhatsApp</p>

          <p className="text-2xl md:text-3xl font-bold text-green-400 mt-2 mb-6">
            +91 9061014915
          </p>

          <a
            href="https://wa.me/919061014915"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold transition">
              Chat on WhatsApp
            </button>
          </a>

          <div className="flex justify-center gap-6 mt-8 text-2xl">
            <a
              href="https://wa.me/919061014915"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.linkedin.com/in/eldrin-johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/_e_ldrin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-6">
        <div className="max-w-5xl mx-auto bg-[#171717] border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">About Us</h2>

          <p className="text-gray-300 leading-8">
            We are a creative team specializing in modern event websites for
            weddings, engagements, birthdays, baptisms, holy communions,
            anniversaries, and other special celebrations.
          </p>

          <p className="text-gray-400 leading-8 mt-3">
            Our goal is to create elegant, memorable, and user-friendly digital
            experiences that help showcase life's most important moments.
          </p>

          <p className="text-pink-300 mt-5 font-medium">
            Eldrin Johnson — Senior Developer
          </p>
        </div>
      </section>
      
      {/* SERVICES */}
      <section className="px-6 py-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center">
            Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Wedding Websites",
              "Engagement Websites",
              "Birthday Websites",
              "Baptism Websites",
              "Holy Communion Websites",
              "Custom Event Websites",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-center hover:border-pink-300/30 transition"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
