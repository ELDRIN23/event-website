import React, { useState, useEffect } from "react";

export default function Splash() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // Exactly 2 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);

      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

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
          <div
            className="absolute top-0 bottom-0 left-0 bg-black rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage and Note */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-mono font-bold text-black">
            {progress}%
          </span>
          <p className="text-[10px] text-zinc-500 tracking-wider uppercase font-mono font-bold">
            Loading experience...
          </p>
        </div>
      </div>
    </div>
  );
}