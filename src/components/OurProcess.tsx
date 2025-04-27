import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaSearch, FaMap, FaRocket, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const steps = [
  {
    icon: <FaComments className="text-blue-400 text-2xl mr-3" />, // Consultation
    title: "Consultation",
    desc: "Understand your team, workflows, and goals."
  },
  {
    icon: <FaSearch className="text-purple-400 text-2xl mr-3" />, // AI Audit
    title: "AI Audit",
    desc: "Identify opportunities for automation and improvement."
  },
  {
    icon: <FaMap className="text-green-400 text-2xl mr-3" />, // Roadmap
    title: "Roadmap",
    desc: "Tailored AI integration plan."
  },
  {
    icon: <FaRocket className="text-pink-400 text-2xl mr-3" />, // Pilot
    title: "Pilot",
    desc: "Small-scale AI module deployment."
  },
  {
    icon: <FaUsers className="text-yellow-400 text-2xl mr-3" />, // Full Rollout
    title: "Full Rollout",
    desc: "Organization-wide implementation."
  },
  {
    icon: <FaChalkboardTeacher className="text-orange-400 text-2xl mr-3" />, // Training & Support
    title: "Training & Support",
    desc: "Developer training + full documentation."
  },
];

const OurProcess: React.FC = () => (
  <section id="process" className="relative z-20 py-12 md:py-16 overflow-hidden">
    <div className="relative max-w-5xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10">
        Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Process</span>
      </h2>
      <div className="relative">
        <ol className="flex flex-col md:flex-row md:flex-wrap md:justify-start gap-8 md:gap-5 mt-8 relative z-10">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              tabIndex={0}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-center bg-black/30 backdrop-blur-lg rounded-3xl px-4 py-6 md:px-8 md:py-10 shadow-2xl border border-blue-400/10 hover:scale-[1.04] focus:scale-[1.04] hover:shadow-[0_0_32px_0_rgba(108,99,255,0.25)] focus:shadow-[0_0_32px_0_rgba(108,99,255,0.25)] transition-transform duration-300 outline-none group relative z-10 cursor-pointer"
            >
              {/* Step number glowing dot */}
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl border-2 border-blue-200/60 mb-3 animate-pulse">
                <span className="text-white text-xl font-bold drop-shadow-lg">{i + 1}</span>
              </span>
              {/* Icon and title centered, no bubble */}
              <span className="flex flex-col items-center w-full">
                <span className="text-3xl text-white drop-shadow-lg mb-4">{step.icon}</span>
                <span className="text-white font-extrabold text-xl md:text-2xl leading-tight text-center mb-2 drop-shadow-sm">
                  {step.title}
                </span>
              </span>
              <p className="text-white/80 text-sm md:text-base font-medium text-center leading-snug mb-1">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </ol>
        {/* CTA button below steps */}
        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-[linear-gradient(90deg,#6C63FF,#1FC2BE)] text-white font-semibold text-lg shadow-lg border-none hover:scale-105 hover:shadow-xl transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 group relative overflow-hidden"
            style={{ background: 'linear-gradient(90deg,#6C63FF,#1FC2BE)' }}
          >
            <span className="relative z-10">Start Your AI Journey</span>
            <span className="absolute left-1/2 bottom-2 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default OurProcess;
