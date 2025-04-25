import React, { useState, useEffect } from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import AIToolsMarquee from "./AIToolsMarquee";

const LandingHero: React.FC = () => {
  const dynamicWords = ["identify", "select"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] px-4 pt-16 sm:pt-24 antialiased">
        {/* Background overlay for blending with your site's style */}

        {/* Content */}
        {/* Premium layered background visuals */}
        {/* Abstract SVG pattern (tech/AI themed) */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-0 blur-xl opacity-40 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] pointer-events-none" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="heroGradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#1FC2BE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="circuitGradient" x1="0" y1="0" x2="700" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6C63FF" stopOpacity="0.25" />
              <stop offset="1" stopColor="#1FC2BE" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <ellipse cx="350" cy="350" rx="320" ry="220" fill="url(#heroGradient)" />
          {/* Subtle tech lines/pattern */}
          <g stroke="url(#circuitGradient)" strokeWidth="2">
            <rect x="120" y="120" width="460" height="460" rx="60" fill="none" />
            <path d="M350 120V580M120 350H580" opacity="0.4" />
            <circle cx="350" cy="350" r="200" fill="none" opacity="0.3" />
            <circle cx="350" cy="350" r="120" fill="none" opacity="0.2" />
          </g>
        </svg>
        {/* Blurred geometric accent shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500/30 blur-2xl opacity-30 z-0 pointer-events-none" />
        <div className="absolute bottom-10 right-16 w-32 h-32 rounded-full bg-purple-400/30 blur-2xl opacity-30 z-0 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rotate-12 bg-gradient-to-br from-blue-400/40 to-teal-400/30 blur-2xl opacity-20 z-0 pointer-events-none" />
        {/* Gentle, angled gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-transparent to-purple-900/60 opacity-60 pointer-events-none z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="relative mb-6 flex flex-col items-center">
            <span className="text-lg sm:text-xl font-light text-blue-200 mb-8 tracking-wide font-sans animate-fade-in z-10 opacity-70">
              Trusted AI Automation Partner for Modern Teams
            </span>
            {/* Glowing blurred accent behind headline */}
            <div className="absolute -inset-x-8 -top-6 h-20 bg-gradient-to-r from-blue-500/30 via-blue-400/10 to-purple-500/30 rounded-full blur-2xl z-0 animate-pulse" />
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-0 mb-0 drop-shadow-xl tracking-tighter subpixel-antialiased font-sans animate-fade-in z-10">
              SuperCharge Your Business with <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x font-black">AI</span>
            </h1>
          </div>
          {/* Animated subheadline */}
          <p className="text-xl sm:text-2xl md:text-2xl text-white/90 font-extralight leading-relaxed max-w-xl mx-auto mb-4 drop-shadow-lg animate-fade-in-up delay-200 font-sans tracking-wide">
            We help companies select and seamlessly integrate the right AI tools to supercharge their business...
          </p>
          <a
            href="#contact"
            className="inline-block relative px-8 py-3 rounded-full text-lg font-semibold shadow-lg animate-fade-in delay-300 bg-[linear-gradient(90deg,_#6C63FF,_#1FC2BE)] hover:scale-105 hover:shadow-lg transition-transform duration-300 group overflow-hidden text-white animate-float focus-visible:ring-2 focus-visible:ring-blue-400 font-sans"
            style={{ background: 'linear-gradient(90deg, #6C63FF, #1FC2BE)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiCalendar className="inline-block text-xl mb-[2px] animate-float-slow" />
              Book a Free Consultation
              <FiArrowRight className="inline-block text-lg ml-1" />
            </span>
            {/* Animated underline */}
            <span className="absolute left-1/2 bottom-2 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            {/* Glowing effect on hover */}
            <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </a>
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            @keyframes float-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
            .animate-float-slow {
              animation: float-slow 3.6s ease-in-out infinite;
            }
          `}</style>
        </div>
        <div>
          <AIToolsMarquee />
        </div>
      </section>
    </>
  );
};

export default LandingHero;
