import {
  FaReact,
  FaServer,
  FaDatabase,
  FaBrain,
  FaCloud,
} from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaLongArrowAltDown, FaLongArrowAltLeft } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { SiNodedotjs, SiExpress } from "react-icons/si";
import { FaProjectDiagram} from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { MdSort } from "react-icons/md";


import { MdOutlineAnalytics } from "react-icons/md";
import { Bug } from "lucide-react";
import { FaTools } from "react-icons/fa";

import { SiMongodb, SiPostgresql, SiApachecassandra } from "react-icons/si";
import { SiPython, SiTensorflow, SiScikitlearn } from "react-icons/si";
import ArrowLabel from "./Arrow";
const TechStack = () => {
  return (
    <section className="mt-20 md:mt-32 px-4 md:px-6 text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl text-center mb-10 md:mb-14">
        <h2
          className="text-2xl md:text-4xl font-bold 
    bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 
    bg-clip-text text-transparent 
    drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          Tech Stack & Architecture
        </h2>

        <p className="text-gray-400 text-sm md:text-base mt-3">
          Visualizing the complete system design from frontend to deployment
        </p>

        {/* UNDERLINE GLOW */}
        <div className="flex justify-center mt-4">
          <div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 blur-[1px]"></div>
        </div>
      </div>
      <div className="relative w-full max-w-6xl">
        {/* BORDER */}
        <div
          className="absolute inset-0 rounded-3xl border border-blue-500/20 
        shadow-[0_0_80px_rgba(59,130,246,0.2)]"
        ></div>
        {/* MAIN GRID */}
        <div
          className="relative rounded-3xl p-6 md:p-10 bg-white/5 backdrop-blur-xl 
        border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4"
        >
          {/* LEFT SYSTEM */}
          {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-10"> */}
          {/* CORE SYSTEM WRAPPER */}
          <div className="relative col-span-1 md:col-span-2 p-13">
            {/* OUTER GLOW BORDER */}
            <div
              className="absolute inset-0 rounded-3xl 
  border border-blue-500/20 
  shadow-[0_0_80px_rgba(59,130,246,0.25)]"
            ></div>

            {/* CORE TITLE (TOP CENTER) */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div
                className="px-6 py-2 rounded-full 
    bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
    border border-blue-400/30 backdrop-blur-xl 
    shadow-[0_0_20px_rgba(59,130,246,0.4)] text-center"
              >
                <h3 className="text-2xl font-semibold text-blue-300 tracking-wide">
                  CORE SYSTEM
                </h3>
                <p className="text-1.5xl text-gray-400">
                  Application Logic & Data Flow
                </p>
              </div>
            </div>
            {/* FRONTEND */}
            {/* OUTER GLOW */}
            <div
              className="absolute -inset-[2px] rounded-2xl 
      bg-gradient-to-r"
            ></div>

            {/* CARD */}
            <div
              className="relative rounded-2xl p-6 
      bg-gradient-to-b from-[#1a1333]/90 to-[#0f0b1f]/90 
      border border-white/10 backdrop-blur-xl 
      shadow-[0_0_40px_rgba(168,85,247,0.25)] 
      hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] 
      transition-all duration-500 mt-12"
            >
              {/* TOP LABEL */}
              <div className="flex justify-center mb-4">
                <span
                  className="px-4 py-1 text-xs font-semibold tracking-wider 
          rounded-full bg-purple-500/20 text-purple-300 
          border border-purple-400/20"
                >
                  FRONTEND
                </span>
              </div>

              {/* ICON BOX */}
              <div className="flex justify-center mb-4">
                <div
                  className="p-4 rounded-xl 
          bg-gradient-to-br from-purple-500/20 to-pink-500/20 
          shadow-inner border border-white/10"
                >
                  <FaReact className="text-4xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </div>
              </div>

              {/* TITLE */}
              <p className="text-center text-sm text-gray-300 mb-4">
                User Interface & Experience
              </p>

              {/* DIVIDER */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent mb-4"></div>

              {/* STACK LIST */}
              <div className="flex flex-row items-center justify-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <FaReact className="text-lg" />
                  <span className="text-gray-300">React</span>
                </div>

                <div className="flex items-center gap-2 text-cyan-400">
                  <SiTailwindcss className="text-lg" />
                  <span className="text-gray-300">Tailwind CSS</span>
                </div>

                <div className="flex items-center gap-2 text-yellow-400">
                  <SiJavascript className="text-lg" />
                  <span className="text-gray-300">JavaScript</span>
                </div>
              </div>
            </div>

            {/* ARROW ↓ */}
            <ArrowLabel text="API Requests" />

            {/* BACKEND */}
            {/* OUTER GLOW */}
            <div
              className="-inset-[2px] rounded-2xl 
      bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 
      blur-md opacity-60 group-hover:opacity-100 transition duration-500"
            ></div>

            {/* CARD */}
            <div
              className="relative rounded-2xl p-6 
      bg-gradient-to-b from-[#0f2a22]/90 to-[#071612]/90 
      border border-white/10 backdrop-blur-xl 
      shadow-[0_0_40px_rgba(34,197,94,0.25)] 
      hover:shadow-[0_0_70px_rgba(34,197,94,0.5)] 
      transition-all duration-500"
            >
              {/* LABEL */}
              <div className="flex justify-center mb-4">
                <span
                  className="px-4 py-1 text-xs font-semibold tracking-wider 
          rounded-full bg-green-500/20 text-green-300 
          border border-green-400/20"
                >
                  BACKEND & DSA
                </span>
              </div>

              {/* ICON + TITLE */}
              <div className="flex flex-col items-center mb-4 gap-2">
                <FaServer className="text-4xl text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />

                <p className="text-sm text-gray-300 text-center">
                  Business Logic, APIs & Algorithms
                </p>
              </div>

              {/* DSA BOX */}
              <div
                className="mt-4 p-4 rounded-xl 
        border border-green-400/20 
        bg-green-500/5 
        shadow-inner"
              >
                <p className="text-xs text-green-300 text-center mb-3">
                  Data Structures & Algorithms
                </p>

                {/* DSA GRID */}
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                  <div className="flex flex-col items-center gap-1">
                    <FaDatabase className="text-green-400 text-lg" />
                    <span>Arrays & Strings</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <FaProjectDiagram className="text-green-400 text-lg" />
                    <span>Stacks & Queues</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <TbBinaryTree className="text-green-400 text-lg" />
                    <span>Trees & Graphs</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <MdSort className="text-green-400 text-lg" />
                    <span>Sorting & Search</span>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-400/40 to-transparent my-4"></div>

              {/* TECH STACK */}
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <SiNodedotjs className="text-lg" />
                  <span className="text-gray-300">Node.js</span>
                </div>

                <div className="flex items-center gap-2 text-green-400">
                  <SiExpress className="text-lg" />
                  <span className="text-gray-300">Express</span>
                </div>
              </div>
            </div>

            {/* ARROW ↓ */}
            <ArrowLabel text="Data Processing" />
            {/* AI/ML */}
            {/* OUTER GLOW */}
            <div
              className="-inset-[2px] rounded-2xl 
      bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 
      blur-md opacity-60 group-hover:opacity-100 transition duration-500"
            ></div>

            {/* CARD */}
            <div
              className="relative rounded-2xl p-6 
      bg-gradient-to-b from-[#2a160a]/90 to-[#120904]/90 
      border border-white/10 backdrop-blur-xl 
      shadow-[0_0_40px_rgba(251,146,60,0.25)] 
      hover:shadow-[0_0_70px_rgba(251,146,60,0.5)] 
      transition-all duration-500"
            >
              {/* LABEL */}
              <div className="flex justify-center mb-4">
                <span
                  className="px-4 py-1 text-xs font-semibold tracking-wider 
          rounded-full bg-orange-500/20 text-orange-300 
          border border-orange-400/20"
                >
                  AI / ML
                </span>
              </div>

              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div
                  className="p-4 rounded-xl 
          bg-gradient-to-br from-orange-500/20 to-yellow-500/20 
          border border-white/10 shadow-inner"
                >
                  <FaBrain
                    className="text-4xl text-orange-400 
            drop-shadow-[0_0_15px_rgba(251,146,60,0.9)]"
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-center text-sm text-gray-300 mb-4">
                Automation, Predictions & Intelligent Models
              </p>

              {/* DIVIDER */}
              <div
                className="h-[1px] w-full bg-gradient-to-r 
        from-transparent via-orange-400/40 to-transparent mb-4"
              ></div>

              {/* TECH STACK */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-yellow-400">
                  <SiPython className="text-lg" />
                  <span className="text-gray-300">Python</span>
                </div>

                <div className="flex items-center gap-2 text-orange-400">
                  <SiTensorflow className="text-lg" />
                  <span className="text-gray-300">TensorFlow</span>
                </div>

                <div className="flex items-center gap-2 text-orange-300">
                  <SiScikitlearn className="text-lg" />
                  <span className="text-gray-300">Scikit-learn</span>
                </div>
              </div>
            </div>
            <ArrowLabel text="Store & Retrieve Data" />
            {/* DATABASE */}
            {/* OUTER GLOW */}
            <div className="inset-0 rounded-2xl bg-blue-500/20 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

            {/* CARD */}
            <div
              className="relative rounded-2xl p-6 
      bg-gradient-to-br from-blue-500/20 to-indigo-500/10
      backdrop-blur-xl border border-blue-400/30 
      shadow-[0_0_40px_rgba(59,130,246,0.4)]
      hover:scale-105 transition-all duration-500"
            >
              {/* HEADER */}
              <h3 className="text-blue-300 font-semibold mb-4 text-center tracking-wide">
                DATABASE
              </h3>

              {/* MAIN ICON */}
              <div className="flex justify-center mb-4">
                <FaDatabase className="text-5xl text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
              </div>

              {/* DESCRIPTION */}
              <p className="text-center text-gray-300 text-sm mb-4">
                Data Storage & Management
              </p>

              {/* TECHNOLOGIES */}
              <div className="flex flex-row gap-3 text-sm text-gray-300 justify-center">
                <div className="flex items-center justify-center gap-2">
                  <SiMongodb className="text-green-400 text-lg" />
                  <span>MongoDB</span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <SiPostgresql className="text-blue-400 text-lg" />
                  <span>PostgreSQL</span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <SiApachecassandra className="text-purple-400 text-lg" />
                  <span>Cassandra</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* RIGHT SIDE RESPONSIVE */}
        <div
          className="
  flex flex-col gap-6 mt-10 md:mt-0
  md:absolute md:top-[55%] md:-translate-y-1/2 sm:right[-30px]
  md:right-[-20px] lg:right-[-50px]
"
        >
          {/* ARROW (ONLY DESKTOP) */}
          <div className="hidden md:flex flex-col items-center absolute left-[-135px] top-1/2 -translate-y-1/2">
            {/* TEXT */}
            <div
              className="px-3 py-1 mb-2 text-[10px] font-semibold tracking-wider
    rounded-full bg-blue-500/10 text-blue-300
    border border-blue-400/30 backdrop-blur-xl
    shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            >
              SYSTEM <br></br>DEPLOYMENT <br></br> AND MANAGEMENT
            </div>

            {/* ARROW */}
            <FaLongArrowAltLeft
              className="text-5xl text-blue-400
    drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]
    animate-pulse"
            />
          </div>

          {/* MONITORING */}
          {/* MONITORING & MAINTENANCE */}
          <div className="relative group">
            {/* OUTER GLOW */}
            <div
              className="absolute -inset-[2px] rounded-2xl 
    bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 
    blur-lg opacity-40 group-hover:opacity-80 
    transition duration-500"
            ></div>

            {/* CARD */}
            <div
              className="relative rounded-2xl p-6 
    bg-gradient-to-b from-[#0b1a2e]/90 to-[#050d18]/90 
    border border-blue-400/20 backdrop-blur-xl 
    
    shadow-[0_0_40px_rgba(59,130,246,0.25)] 
    hover:shadow-[0_0_70px_rgba(59,130,246,0.5)] 
    
    transition-all duration-500"
            >
              {/* HEADER */}
              <div className="flex justify-center mb-4">
                <span
                  className="px-4 py-1 text-xs font-semibold tracking-wider 
        rounded-full bg-blue-500/20 text-blue-300 
        border border-blue-400/30"
                >
                  MONITORING & MAINTENANCE
                </span>
              </div>

              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div
                  className="p-4 rounded-xl 
        bg-gradient-to-br from-blue-500/20 to-indigo-500/20 
        border border-white/10 shadow-inner"
                >
                  <FaServer
                    className="text-4xl text-blue-400 
          drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]"
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-center text-sm text-gray-300 mb-4">
                Observability, Debugging & System Optimization
              </p>

              {/* DIVIDER */}
              <div
                className="h-[1px] w-full bg-gradient-to-r 
    from-transparent via-blue-400/40 to-transparent mb-4"
              ></div>

              {/* FEATURES */}
              <div className="flex flex-col gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <MdOutlineAnalytics className="text-blue-400 text-xl" />
                  <span>Logging & Monitoring</span>
                </div>

                <div className="flex items-center gap-3">
                  <Bug className="text-blue-400 text-xl" />
                  <span>Error Tracking & Debugging</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaTools className="text-blue-400 text-lg" />
                  <span>Performance Optimization</span>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-5 flex justify-center text-xs text-gray-400">
                Ensures Stability & Reliability
              </div>
            </div>
          </div>

          {/* CLOUD */}
          {/* CLOUD & INFRA (ENHANCED) */}
          <div className="relative group">
            {/* OUTER GLOW AURA */}
            <div
              className="absolute -inset-[2px] rounded-2xl 
    bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 
    blur-lg opacity-40 group-hover:opacity-80 
    transition duration-500"
            ></div>

            {/* CARD */}
            <div
              className="relative rounded-2xl p-6 
    bg-gradient-to-b from-[#0b1f2e]/90 to-[#07121a]/90 
    border border-cyan-400/20 backdrop-blur-xl 
    
    shadow-[0_0_40px_rgba(34,211,238,0.25)] 
    hover:shadow-[0_0_70px_rgba(34,211,238,0.5)] 
    
    transition-all duration-500"
            >
              {/* HEADER LABEL */}
              <div className="flex justify-center mb-4">
                <span
                  className="px-4 py-1 text-xs font-semibold tracking-wider 
        rounded-full bg-cyan-500/20 text-cyan-300 
        border border-cyan-400/30"
                >
                  CLOUD & INFRASTRUCTURE
                </span>
              </div>

              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div
                  className="p-4 rounded-xl 
        bg-gradient-to-br from-cyan-500/20 to-blue-500/20 
        border border-white/10 shadow-inner"
                >
                  <FaCloud
                    className="text-4xl text-cyan-400 
          drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]"
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-center text-sm text-gray-300 mb-4">
                Hosts & Manages the Entire System
              </p>

              {/* DIVIDER */}
              <div
                className="h-[1px] w-full bg-gradient-to-r 
    from-transparent via-cyan-400/40 to-transparent mb-4"
              ></div>

              {/* TECH STACK */}
              <div className="flex flex-col items-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-lg">🐳</span>
                  <span className="text-gray-300">Docker</span>
                </div>

                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-lg">☁️</span>
                  <span className="text-gray-300">
                    Google Cloud Platform (GCP)
                  </span>
                </div>
              </div>

              {/* BOTTOM FEATURES (OPTIONAL BUT MATCHES IMAGE 🔥) */}
              <div className="flex justify-around mt-5 text-xs text-gray-400">
                <span className="flex items-center gap-1">⚡ Scalable</span>
                <span className="flex items-center gap-1">🔒 Secure</span>
                <span className="flex items-center gap-1">
                  🚀 High Performance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* core wrapper */}
    </section>
  );
};

export default TechStack;