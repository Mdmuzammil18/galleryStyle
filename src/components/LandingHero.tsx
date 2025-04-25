// NOTE: You must run `npm install @calcom/embed-react` for the Cal.com modal to work!
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import CalBookingModal from "./CalBookingModal"; // New portal-based modal
// IMPORTANT: Add <div id="modal-root"></div> to your public/index.html before </body>.
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import AIToolsMarquee from "./AIToolsMarquee";
import CodingTemplate from "./CodingTemplate";

const testimonials = [
  {
    quote: "Integrating AI with our workflow was seamless and transformative. We saw results in weeks.",
    author: "—Murali Krishna C V, CTO, FocusedSolutions"
  },
  {
    quote: "The AI Opportunity Audit opened our eyes to new efficiencies. We saved hours every week!",
    author: "—Samantha Lee, Operations Lead, InnovateX"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mt-6 bg-blue-900/40 border border-blue-800/30 rounded-lg px-5 py-4 text-sm md:text-base text-blue-100 shadow-sm max-w-md mx-auto md:mx-0 min-h-[110px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="inline-block w-6 h-6 mr-2 -mt-1 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5 5 0 002 11v7a1 1 0 001 1h7a1 1 0 001-1v-7a5 5 0 00-4.83-5zM4 18v-7a3 3 0 016 0v7zm10.17-12A5 5 0 0014 11v7a1 1 0 001 1h7a1 1 0 001-1v-7a5 5 0 00-4.83-5zM16 18v-7a3 3 0 016 0v7z"/></svg>
          “{testimonials[index].quote}”<br />
          <span className="block mt-2 text-blue-300 font-semibold">{testimonials[index].author}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const LandingHero: React.FC = () => {
  const dynamicWords = ["identify", "select"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCalModal, setShowCalModal] = useState(false);

  const subheadline = "From strategy to deployment, we guide your software team to AI success—no guesswork, just results.";
  const { displayText } = useTypewriter({ text: subheadline, delay: 18, startDelay: 600 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 pt-16 sm:pt-24 antialiased">


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
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left: Hero Text */}
          <motion.div
  className="flex-1 flex flex-col gap-6 items-start text-left max-w-xl"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7 }}
>
            <motion.div
  className="relative mb-6 flex flex-col items-center md:items-start"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
>
              <span className="text-lg sm:text-xl font-light text-blue-200 tracking-wide font-sans animate-fade-in z-10 opacity-70">
              Trusted AI Automation Partner for Modern Teams.
</span>
              {/* Glowing blurred accent behind headline */}
              <div className="absolute -inset-x-8 -top-6 h-20 bg-gradient-to-r from-blue-500/30 via-blue-400/10 to-purple-500/30 rounded-full blur-2xl z-0 animate-pulse" />
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl tracking-tighter subpixel-antialiased font-sans animate-fade-in z-10">
  Unlock 10x Productivity with <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x font-black">Tailored AI Integrations</span>
</h1>
            </motion.div>
            {/* Animated subheadline */}
            <div className="relative w-full max-w-xl min-h-[3.5rem]">
              <motion.p
                className="text-xl sm:text-2xl md:text-2xl text-white/40 font-extralight leading-relaxed drop-shadow-lg font-sans tracking-wide select-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                aria-hidden="true"
              >
                {subheadline}
              </motion.p>
              <motion.p
                className="absolute inset-0 text-xl sm:text-2xl md:text-2xl text-white font-extralight leading-relaxed drop-shadow-lg font-sans tracking-wide whitespace-pre-line pointer-events-none"
                style={{ maskImage: 'linear-gradient(90deg, #fff 90%, transparent 100%)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {displayText}
              </motion.p>
            </div>
            <motion.button
              className="inline-block relative px-8 py-3 rounded-full text-lg font-semibold shadow-lg bg-[linear-gradient(90deg,_#6C63FF,_#1FC2BE)] hover:scale-105 hover:shadow-lg transition-transform duration-300 group overflow-hidden text-white animate-float focus-visible:ring-2 focus-visible:ring-blue-400 font-sans"
              style={{ background: 'linear-gradient(90deg, #6C63FF, #1FC2BE)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              onClick={() => setShowCalModal(true)}
            >
              <FiCalendar className="inline-block mr-2 mb-1 text-xl" />
              Book a Free Consultation
              <FiArrowRight className="inline-block ml-2 mb-1 text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            {/* Cal.com Modal */}
            <CalBookingModal open={showCalModal} onClose={() => setShowCalModal(false)} />
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
            {/* CodingTemplate only on mobile below hero text */}
            <motion.div
              className="w-full max-w-md block md:hidden mt-8 mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CodingTemplate />
              {/* Testimonial carousel below code template (mobile) */}
              <TestimonialCarousel />
            </motion.div>
          </motion.div>
          {/* Right: Coding Template (desktop only) */}
          <motion.div
            className="flex-1 w-full max-w-md hidden md:block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CodingTemplate />
              {/* Testimonial carousel below code template (desktop) */}
              <TestimonialCarousel />
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default LandingHero;
