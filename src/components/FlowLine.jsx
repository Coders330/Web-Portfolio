import React from 'react'

const FlowLine = ({ direction = "right" }) => {
  return (
    <div className={`relative ${direction === "right" ? "w-24 h-[2px]" : "h-24 w-[2px]"}`}>
      
      {/* Base line */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Glow line */}
      <div className="absolute inset-0 bg-blue-400/40 blur-sm"></div>

      {/* Moving dot */}
      <div
        className={`absolute w-3 h-3 bg-blue-400 rounded-full blur-[2px]`}
        style={{
          animation:
            direction === "right"
              ? "flow-right 1.5s linear infinite"
              : "flow-down 1.5s linear infinite",
        }}
      ></div>
    </div>
  );
};

export default FlowLine
