import React, { useEffect, useState } from 'react'
import profile_pic from '../assets/photo-removebg-preview.png'
import resume from '../../public/Pranshu_Resume.pdf'
const Hero = () => {
  const words = ['MERN Stack Developer', 'Data Analytics', 'Machine Learning', 'Competitive Programming', 'Open Source Contributor' , 'Deep Learning' , 'Innovator' ]
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout
    const currentWord = words?.[index] ?? ''

    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => setDisplayText(currentWord.slice(0, displayText.length + 1)), 120)
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 800)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(currentWord.slice(0, displayText.length - 1)), 70)
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % (words.length || 1))
      }, 300)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, index, words])

  return (
    <div className="hero relative px-6 py-16 sm:px-10 lg:px-20">
      <section id="about" className="pt-20 md:pt-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-start text-white min-h-[560px] self-start">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                PRANSHU
              </span>
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-semibold text-yellow-300">
              B.Tech @ IIIT Sonepat 2023-27
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              I build production-grade web apps with React, Node.js, and modern
              UX, integrated with Machine Learning and Deep Learning. Clean architecture, performance, and polished visuals are my
              core focus.
            </p>

            <div className="mt-6 text-lg md:text-xl text-cyan-200">
              <span>{displayText}</span>
              <span className="inline-block w-1 h-7 bg-cyan-300 animate-pulse align-middle ml-2" />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pranshu.work24@gmail.com&su=Let's%20Connect&body=Hi%20Pranshu,%20I%20visited%20your%20portfolio..."
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg"
              >
                Contact Me
              </a>
              <a
                href={resume}
                download="Pranshu_Kumar_Resume.pdf"
                className="px-8 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "DSA Problems", value: "570+" },
                { label: "Projects", value: "6+" },

                { label: "Technologies", value: "10+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-blue-500/40 bg-blue-950/70 p-4 text-center shadow-lg"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">
                    {item.value}
                  </h2>
                  <p className="text-gray-200 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center md:justify-end items-start self-start min-h-[560px]">
            <div className="relative w-[360px] h-[460px] md:w-[420px] md:h-[520px] rounded-full overflow-hidden">
              <div className="absolute inset-0 m-auto w-76 h-76 rounded-full bg-blue-950/90 blur-3xl" />
              <div className="absolute inset-0 m-auto w-72 h-72 rounded-full border-4 border-cyan-300/50 shadow-[0_0_80px_rgba(56,189,248,0.35)] animate-pulse" />
              <div className="absolute inset-0 m-auto w-68 h-68 rounded-full bg-blue-900/75" />
              <div className="absolute inset-0 m-auto w-64 h-64 rounded-full  border-blue-300/50 backdrop-blur-md" />
              <img
                src={profile_pic}
                alt="Pranshu profile"
                className="relative h-full w-full object-cover rounded-full shadow-[0_0_30px_rgba(0,0,0,0.45)]"
              />
              <div className="absolute bottom-2 left-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-800/70 px-3 py-1 rounded-lg border border-cyan-200/40">
                Blitz-Ready Dev
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero
