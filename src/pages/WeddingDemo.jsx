import { Link } from "react-router-dom";

export default function WeddingDemo() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="pt-20 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[6px] text-pink-300 text-sm mb-4">
            Premium Demo Preview
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Explore the Premium Wedding Website
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            This preview is loaded from the generated wedding demo bundle so it stays consistent with the site build.
          </p>

          <div className="mt-8 flex flex-col gap-4 items-center justify-center sm:flex-row">
            <Link to="/weddings">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Back to Weddings
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-pink-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-200 transition">
                Contact for Premium Plan
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111111]">
          <div className="border-b border-white/10 bg-[#0f0f0f] px-6 py-4">
            <p className="text-sm uppercase tracking-[4px] text-pink-300">
              Live Demo
            </p>
            <p className="text-gray-400 text-sm mt-1">
              The preview is now loaded from the generated demo assets in the public folder.
            </p>
          </div>

          <div className="min-h-[420px] h-[70vh] sm:h-[80vh] md:min-h-[620px]">
            <iframe
              src="/demo/index.html"
              title="Wedding Demo"
              className="w-full h-full min-h-[420px] border-0"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>

          <div className="px-6 py-6 text-gray-300 bg-[#111111]">
            <p className="text-sm">
              This page uses the built wedding demo bundle rather than importing the nested app into the main site, which avoids the React hook conflict and keeps the preview stable.
            </p>
            <a
              href="/demo/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-pink-300 hover:text-pink-100"
            >
              Open demo in a new tab
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
