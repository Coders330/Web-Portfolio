import React from 'react'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


import { useState } from 'react';
import { HiTrophy } from "react-icons/hi2";
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
import AchievmentsModal from './AchievmentsModal';





const Achievements = () => {
  const achievements = [
    {
      title: "Techfest IIT Bombay 2025 Hackathon",
      image: [IIT],
      desc: "Participated as top 30 finalists in the prestigious Techfest IIT Bombay 2025 Hackathon, showcasing innovative solutions. We developed a project that aided farmers with their crop selling, government schemes access and insurance claims using AI and IoT technologies. This project proves to be valuable for farmers in rural areas helping them to get better prices for their crops and access government schemes and insurance claims with ease.",
      type: "Hackathon",
      location: "IIT Bombay",
    },
    {
      title: "Infotsav IIIT Gwalior Hackathon 2025",
      image: [IIIT_1, IIIT_2],
      desc: "Participated in the Infotsav IIIT Gwalior Hackathon 2025, where we developed a solution for citizens to report civic issues and get them resolved efficiently. Our project utilized AI for issue categorization and prioritization, and a user-friendly interface for seamless reporting. This initiative aimed to enhance civic engagement and improve the responsiveness of local authorities in addressing community concerns.",
      type: "Hackathon",
      location: "IIIT Gwalior",
    },
    {
      title: "Google Cloud Archade",
      image: [Google_Cloud],
      desc: "Completed the Google Cloud Architecture course, gaining expertise in designing and managing cloud solutions. Also learnt many new concepts of cloud computing.",
      type: "Certification Course",
      location: "Online",
    },
    {
      title: "Global Startups Club Meet",
      image: [GSC_1, GSC_2, GSC_3],
      desc: "Attended the Global Startups Club Meet, where I had the opportunity to network with industry leaders, entrepreneurs, and innovators. The event provided insights into the latest trends in technology and startups, fostering connections that could lead to future collaborations and opportunities in the tech ecosystem.",
      type: "Workshop",
      location: "Gurugram",
    },
    {
      title: "AI with Computer Vision",
      image: [IIT_1, IIT_2, IIT_3],
      desc: "Attended a workshop on AI with Computer Vision, where I learned about the fundamentals of computer vision, including image processing, object detection. The workshop provided hands-on experience with popular libraries and frameworks, enabling me to develop practical skills in building AI-powered computer vision applications.",
      type: "Workshop",
      location: "IIT Delhi Technopark",
    },
  ];
  const scrollRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState([]);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="achievements" className="px-6 md:px-12 lg:px-20 mt-15">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white ">
          Highlights
        </h2>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar"
        style={{
          overscrollBehaviorX: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {achievements.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-gradient-to-br from-[#0a1026] via-[#091529] to-[#04192f] border border-cyan-500/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(23,166,255,0.35)] animate-slide-from-right"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={item.image[0]}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 px-3 py-1 rounded-full bg-cyan-500/25 border border-cyan-300/40 text-xs font-semibold text-cyan-100 backdrop-blur">
                {item.location}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-[#04142b] border-t border-cyan-400/20">
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2 mb-4">
                {item.desc}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-300/30 text-xs md:text-sm text-cyan-100">
                <HiTrophy className="h-4 w-4" />
                {item.type}
              </div>
              <div>
                <button
                  onClick={() => {
                    setSelectedAchievement(item);
                    setOpenModal(true);
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-300/40 text-sm font-medium transition"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(80px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-slide-from-right {
          animation: slideFromRight 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
      `}</style>
      <AchievmentsModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        images={selectedAchievement.image || []}
        description={selectedAchievement.desc || ""}
      ></AchievmentsModal>
      
    </section>
  );
};

export default Achievements;
