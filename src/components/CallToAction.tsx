import React from "react";
import { FiCalendar } from "react-icons/fi";

const CallToAction: React.FC = () => (
  <section className="relative z-30 py-12 md:py-16 flex items-center justify-center overflow-hidden">
    <div className="max-w-2xl mx-auto text-center px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Ready to see how <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI</span> can transform your business?
      </h2>
      <ul className="mb-4 flex flex-col sm:items-start items-center gap-2 text-base text-white/90 font-medium max-w-xs mx-auto">
        <li className="flex items-center gap-2 w-full">
          <span className="text-green-400 text-lg">✓</span>
          <span>Automate repetitive tasks</span>
        </li>
        <li className="flex items-center gap-2 w-full">
          <span className="text-green-400 text-lg">✓</span>
          <span>Save up to 40% operational time</span>
        </li>
      </ul>
      <a
        href="#contact"
        className="inline-block relative px-8 py-3 rounded-full text-lg font-semibold shadow-lg animate-fade-in delay-300 bg-[linear-gradient(90deg,_#6C63FF,_#1FC2BE)] hover:scale-105 transition-transform duration-300 group overflow-hidden text-white animate-float"
        style={{ background: 'linear-gradient(90deg, #6C63FF, #1FC2BE)' }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <FiCalendar className="inline-block text-xl mb-[2px] animate-float-slow" />
          Book a Free Consultation
        </span>
        {/* Animated underline */}
        <span className="absolute left-1/2 bottom-2 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        {/* Glowing effect on hover */}
        <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      </a>
    </div>
  </section>
);

export default CallToAction;
