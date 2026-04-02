import { FaLongArrowAltDown } from "react-icons/fa";

const ArrowLabel = ({ text }) => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center my-4">
      {/* LABEL */}
      <div
        className="px-4 py-1 mb-2 text-xs font-semibold tracking-wider
        rounded-full bg-white/5 text-blue-300
        border border-blue-400/30 backdrop-blur-xl
        shadow-[0_0_15px_rgba(59,130,246,0.6)]
        animate-pulse"
      >
        {text}
      </div>

      {/* ARROW */}
      <FaLongArrowAltDown
        className="text-4xl text-blue-400
        drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]
        animate-bounce"
      />
    </div>
  );
};

export default ArrowLabel;
