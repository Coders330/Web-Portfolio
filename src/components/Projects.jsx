import React from 'react'


import HMS from "../assets/hms.png";
import Google_Cloud from "../assets/Google_Cloud.jpg";
import IIT from "../assets/IIT_Bombay.jpg";
import IIIT from "../assets/IIIT_Gwalior.jpg";
import iiit_2 from "../assets/iiit_2.png";
import image from "../assets/image.png";
const projects = [
  {
    title: "AI Driven Civic Issue Reporting and Resolving Platform",
    image: iiit_2,
    desc: "A comprehensive platform that empowers citizens to report civic issues and facilitates efficient resolution by local authorities. The platform leverages AI for issue categorization and prioritization, ensuring timely responses. It features a user-friendly interface for seamless reporting and real-time updates on issue status, fostering enhanced civic engagement and improved responsiveness from local authorities.",
    tech: ["MERN Stack", "Flutter", "NLP", "Gemini API"],
    github:
      "https://github.com/nikzdev04/Samadhanam-Civic-Issue-Reporting-Platform",
    demo: "#",
  },
  {
    title: "AI-IOT Smart Farmers Insurance and MSP Portal",
    image: image,
    desc: "An innovative platform designed to support farmers by providing real-time assistance with crop selling, access to government schemes, and insurance claims. The system integrates AI and IoT technologies to offer personalized recommendations for crop selling, streamline access to government schemes, and facilitate efficient insurance claim processing.",
    tech: ["Scikit Learn", "React.js", "Node.js", "MongoDB"],
    github:
      "https://github.com/Coders330/AI-IoT-Crop-Insurance-schemes-and-selling-Portal",
    demo: "#",
  },
  {
    title: "Hospital Management System ",
    image: HMS,
    desc: "A comprehensive web application designed to streamline hospital operations and enhance patient care. The system includes features for patient registration, appointment scheduling, medical record management, billing, and inventory control. It provides an intuitive interface for healthcare professionals to efficiently manage patient information and hospital resources.",
    tech: [
      "React",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Docker",
      "Google Clouds",
    ],
    github: "https://github.com/Coders330/Hospital-Management-System",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-20 mt-28">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-h-[325px] bg-gradient-to-br from-[#091524] via-[#0d1f3a] to-[#05132a] border border-cyan-500/20 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,15,45,0.55)] backdrop-blur-xl overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(18,175,255,0.4)]"
          >
            {/* Title */}
            <h3 className="text-2xl md:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>

            {/* Image */}
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 shadow-[0_8px_22px_rgba(2,17,45,0.6)]">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-36 w-full object-fit transition duration-500 hover:scale-105"
              />
            </div>

            {/* Description */}
            <p className="text-slate-300 mt-4 text-sm md:text-base leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-100 border border-cyan-300/30"
                >
                   {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900/70 border border-cyan-400/40 text-sm font-medium text-white hover:bg-slate-800 transition"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-300/40 text-sm font-medium text-cyan-100 hover:bg-cyan-500/30 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;