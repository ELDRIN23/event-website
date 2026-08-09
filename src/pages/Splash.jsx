import React from "react";

export default function Splash() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-white flex flex-col justify-center items-center z-[9999] font-sans">
      <div className="flex flex-col items-center gap-6">
        {/* Updated Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-[0.2em] uppercase">
            Event Website
          </h1>
          <p className="text-xs text-zinc-600 mt-2 tracking-[0.3em] uppercase font-bold">
            Luxury Events & Celebrations
          </p>
        </div>

        {/* Minimal Black & White Progress bar */}
        <div className="w-48 h-1 bg-zinc-200 rounded-full overflow-hidden relative mt-2 border border-zinc-300">
          <div className="absolute top-0 bottom-0 left-0 bg-black w-1/2 rounded-full animate-[loading_1.5s_infinite_linear]"></div>
        </div>

        {/* Small Note */}
        <p className="text-[10px] text-zinc-500 tracking-wider mt-1 uppercase font-mono font-bold">
          Loading experience...
        </p>
      </div>
      
      {/* Inline styles for custom loading animation keyframe */}
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}