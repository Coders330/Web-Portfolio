import { useEffect, useState } from "react";
import IIT from "../assets/IIT_Bombay.jpg";
import Google_Cloud from "../assets/Google_Cloud.jpg";
import IIT_1 from "../assets/IIT_1.jpg";
import IIT_2 from "../assets/IIT_2.jpg";
import IIT_3 from "../assets/IIT_3.jpg";
import IIIT_1 from "../assets/IIIT_Gwalior.jpg";
import IIIT_2 from "../assets/IIIT_Gwalior_1.jpg";
import GSC_1 from "../assets/GSC_1.jpg";
import GSC_2 from "../assets/GSC_2.jpg";
import GSC_3 from "../assets/GSC_3.jpg";  
const AchievementModal = ({ isOpen, onClose, images, description }) => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      {/* MODAL BOX */}
      <div
        className="relative w-[90%] md:w-[700px] rounded-2xl p-6 
      bg-gradient-to-b from-[#0f172a]/90 to-[#020617]/90 
      border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
      >
        {/* SLIDER */}
        <div className="w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden 
bg-black flex items-center justify-center">
          <img
            src={images[current]}
            alt= "event"
            className="w-full h-full object-contain transition-all duration-700"
          />
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-blue-400" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-300 text-center mb-6">{description}</p>

        {/* CLOSE BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-red-400/30 
            text-red-300 hover:bg-red-500/10 transition
            shadow-[0_0_15px_rgba(248,113,113,0.4)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;
