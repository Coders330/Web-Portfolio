import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaCode, FaBrain } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 px-6 text-white flex justify-center w-full">
      <div className="w-full max-w-6xl relative">
        {/* OUTER GLOW BORDER */}
        <div
          className="absolute inset-0 rounded-3xl border border-blue-500/20 
        shadow-[0_0_80px_rgba(59,130,246,0.25)]"
        ></div>

        {/* MAIN CONTAINER */}
        <div
          className="relative rounded-3xl p-8 md:p-10 
        bg-white/5 backdrop-blur-xl border border-white/10"
        >
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT - BRAND */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-300 mb-3">
                PRANSHU KUMAR
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {/* pranshu.work24@gmail.com */}
                pranshu.work24@gmail.com
              </p>
            </div>

            {/* CENTER - QUICK LINKS */}
            <div
              className="relative w-full max-w-4xl p-6 md:p-8 rounded-2xl 
        bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/90 
        border border-white/10 backdrop-blur-xl 
        shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              {/* Glow Border */}
              <div
                className="absolute inset-0 rounded-2xl 
          border border-blue-500/20 
          shadow-[0_0_60px_rgba(59,130,246,0.2)]"
              ></div>

              {/* Title */}
              <h3
                className="text-lg md:text-xl font-semibold mb-4 
          bg-gradient-to-r from-blue-400 to-cyan-300 
          bg-clip-text text-transparent"
              >
                Currently Working On:
              </h3>

              {/* Points */}
              <div className="flex flex-col gap-4 text-sm md:text-base text-gray-300">
                {/* Line 1 */}
                <div className="flex items-center gap-3 group">
                  <FaCode
                    className="text-blue-400 text-lg 
              group-hover:scale-110 transition 
              drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  />
                  <p className="group-hover:text-white transition">
                    Building scalable full-stack web applications with modern
                    UI/UX
                  </p>
                </div>

                {/* Line 2 */}
                <div className="flex items-center gap-3 group">
                  <FaBrain
                    className="text-cyan-400 text-lg 
              group-hover:scale-110 transition 
              drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  />
                  <p className="group-hover:text-white transition">
                    Developing AI/ML solutions for real-time prediction and
                    automation
                  </p>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
            </div>

            {/* RIGHT - CONTACT */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider mb-3">
                CONNECT
              </h3>

              <div className="flex gap-4">
                {/* GITHUB */}
                <a
                  href="https://github.com/Coders330"
                  className="p-3 rounded-xl bg-white/5 border border-white/10
                  hover:border-blue-400/40 transition
                  shadow-[0_0_15px_rgba(59,130,246,0.2)]
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                >
                  <FaGithub className="text-xl text-gray-300" />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/pranshu-kumar-117870289/"
                  className="p-3 rounded-xl bg-white/5 border border-white/10
                  hover:border-blue-400/40 transition
                  shadow-[0_0_15px_rgba(59,130,246,0.2)]
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                >
                  <FaLinkedin className="text-xl text-blue-400" />
                </a>

                {/* LEETCODE */}
                <a
                  href="https://leetcode.com/u/Pranshu_Kumar24/"
                  className="p-3 rounded-xl bg-white/5 border border-white/10
                  hover:border-yellow-400/40 transition
                  shadow-[0_0_15px_rgba(250,204,21,0.2)]
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
                >
                  <SiLeetcode className="text-xl text-yellow-400" />
                </a>

                {/* EMAIL */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pranshu.work24@gmail.com&su=Let's%20Connect&body=Hi%20Pranshu,%20I%20visited%20your%20portfolio..."
                  className="p-3 rounded-xl bg-white/5 border border-white/10
                  hover:border-green-400/40 transition
                  shadow-[0_0_15px_rgba(34,197,94,0.2)]
                  hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
                >
                  <FaEnvelope className="text-xl text-green-400" />
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div
            className="my-6 h-[1px] w-full bg-gradient-to-r 
          from-transparent via-blue-400/40 to-transparent"
          ></div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-3">
            <span>
              © {new Date().getFullYear()} Pranshu Kumar — All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
