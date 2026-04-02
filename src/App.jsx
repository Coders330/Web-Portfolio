
import './App.css'
import Achievments from './components/Achievments'
import Announcement from './components/Announcments'
import CHtbot from './components/CHtbot'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Stats from './components/Stats'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-black relative overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* all glow + particles */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-125 bg-blue-500/20 rounded-full blur-3xl filter animate-pulse"></div>
        <div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl filter animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute -bottom-1/4 left-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl filter"></div>

        {/* Spotlight effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl filter"></div>

        {/* Vignette edge shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 pointer-events-none"></div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
          }}
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/40 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + i}s infinite linear`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* Animated radial glow layers */}

      {/* Content wrapper */}
      <div className="relative z-10">
        <Navbar></Navbar>

        <section id="about" className="scroll-mt-24">
          <Hero></Hero>
        </section>

        <section id="achievements" className="scroll-mt-24">
          <Achievments></Achievments>
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects></Projects>
        </section>
        <Announcement></Announcement>
        <section id="tech" className="scroll-mt-24">
          <TechStack></TechStack>
        </section>
        <Footer></Footer>

        {/* <Navbar /> */}
        {/* <Hero />
        <TechStack />
        <Projects />
        <Stats />
        <Achievments />
        <CHtbot />
        <Footer /> */}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App;
