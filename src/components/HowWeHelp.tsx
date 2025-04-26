import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCogs, FaRocket, FaHandsHelping } from "react-icons/fa";

const cards = [
  {
    icon: <FaSearch className="text-3xl text-blue-400 mb-3" />,
    title: "AI Needs Assessment",
    desc: "We analyze your business processes and identify the best opportunities for AI integration.",
  },
  {
    icon: <FaCogs className="text-3xl text-purple-400 mb-3" />,
    title: "Tool Selection",
    desc: "Get unbiased recommendations on the most effective AI tools for your unique needs.",
  },
  {
    icon: <FaRocket className="text-3xl text-pink-400 mb-3" />,
    title: "Seamless Integration",
    desc: "We handle implementation and ensure smooth adoption within your team.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-green-400 mb-3" />,
    title: "Ongoing Support",
    desc: "Training, troubleshooting, and optimization for lasting results.",
  },
];

const HowWeHelp: React.FC = () => (
  <section id="services" className="relative z-20 py-12 md:py-16 bg-[#181C23] border-t border-blue-900/30 overflow-hidden">
  {/* Ultra-faint noise overlay for premium depth */}
  <div className="absolute inset-0 pointer-events-none opacity-5" style={{backgroundImage: "url('/noise.png')", backgroundRepeat: "repeat"}} />
  {/* Abstract blurred blobs for modern effect */}
  <div className="absolute -top-24 -left-32 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30 pointer-events-none" />
  <div className="absolute -bottom-24 -right-32 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-30 pointer-events-none" />
  {/* Top divider */}
  {/* <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-400/20 via-purple-400/40 to-blue-400/20 rounded-full blur-sm opacity-80" /> */}
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Unlock the Power of <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI</span> for Your Workflow
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.18 }}
            className="from-blue-900/60 to-black/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-blue-800/30 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            {card.icon}
            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-white/80 text-base">{card.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default HowWeHelp;
