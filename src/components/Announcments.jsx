const Announcement = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 my-16">
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-2xl"></div>

      {/* BORDER LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

      {/* SCROLL CONTAINER */}
      <div className="relative flex whitespace-nowrap animate-marquee">
        {/* TEXT (REPEATED FOR LOOP EFFECT) */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 mx-8">
            <span className="text-blue-300 font-medium text-sm md:text-base tracking-wide">
              🚀 Live project demos are currently under deployment — will be
              available shortly
            </span>

            <span className="text-cyan-400 text-lg">•</span>

            <span className="text-gray-400 text-sm md:text-base">
              Stay tuned for full interactive experience
            </span>

            <span className="text-cyan-400 text-lg">•</span>
          </div>
        ))}
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Announcement;
