import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
//   FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center bg-black">

      <p className="text-pink-200 text-lg font-serif mb-2">
        Beautiful Event Websites
      </p>

      <p className="text-gray-400 text-sm mb-4">
        Contact Developer • +91 9061014915
      </p>

      <div className="flex justify-center gap-5 items-center">

        <a
          href="https://wa.me/919061014915"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition duration-300"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* <a
          href="https://www.linkedin.com/in/eldrin-johnson"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin size={20} />
        </a> */}

        {/* <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition duration-300"
        >
          <FaInstagram size={20} />
        </a> */}

        {/* <a
          href="https://github.com/ELDRIN23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaGithub size={20} />
        </a> */}

      </div>

      <p className="text-xs text-gray-600 mt-6">
        © {new Date().getFullYear()} Beautiful Event Websites. All rights reserved.
      </p>

    </footer>
  );
}