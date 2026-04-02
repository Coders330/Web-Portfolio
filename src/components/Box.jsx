import React from "react";

const Box = ({ title, children, icon, color = "blue" }) => {
  return (
    <div className={`w-56 bg-white/5 border border-white/10 rounded-xl p-5 text-center 
    backdrop-blur-lg 
    shadow-[0_0_20px_rgba(59,130,246,0.2)] 
    hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] 
    hover:-translate-y-2 transition duration-300`}>
      
      <div className={`flex justify-center mb-3 text-2xl text-${color}-400`}>
        {icon}
      </div>

      <h3 className="text-white font-semibold text-lg">{title}</h3>

      <p className="text-gray-400 text-sm mt-2">
        {children}
      </p>
    </div>
  );
};

export default Box;