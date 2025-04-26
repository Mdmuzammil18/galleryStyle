import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBug, FaChartLine, FaBook, FaComments, FaEye, FaVial, FaUserGraduate } from "react-icons/fa";

import { Link } from "react-router-dom";

const cards = [
  {
    icon: <FaRobot className="text-3xl text-blue-400 mb-3" />,
    title: "Automated Code Review",
    desc: "AI analyzes PRs for best practices, standards, and bugs—speeding up reviews and providing consistent feedback.",
    link: "/services/automated-code-review"
  },
  {
    icon: <FaBug className="text-3xl text-red-400 mb-3" />,
    title: "Intelligent Bug Triage",
    desc: "AI categorizes and prioritizes bug reports by severity and context, streamlining your team's workflow.",
    link: "/services/intelligent-bug-triage"
  },
  {
    icon: <FaChartLine className="text-3xl text-yellow-400 mb-3" />,
    title: "Predictive Sprint Planning",
    desc: "AI forecasts sprint outcomes by analyzing historical data and team performance for better planning.",
    link: "/services/predictive-sprint-planning"
  },
  {
    icon: <FaBook className="text-3xl text-green-400 mb-3" />,
    title: "Contextual Documentation Generation",
    desc: "Automatically generate and update docs from code, PRs, and stories using GPT-4.",
    link: "/services/contextual-documentation"
  },
  {
    icon: <FaComments className="text-3xl text-blue-300 mb-3" />,
    title: "AI-Powered Chatbots",
    desc: "Chatbots answer developer queries on codebase, processes, and standards—24/7.",
    link: "/services/ai-powered-chatbots"
  },
  {
    icon: <FaEye className="text-3xl text-purple-400 mb-3" />,
    title: "Code Quality Insights Dashboard",
    desc: "Visualize code quality, vulnerabilities, and tech debt with AI-powered dashboards.",
    link: "/services/code-quality-dashboard"
  },
  {
    icon: <FaVial className="text-3xl text-pink-400 mb-3" />,
    title: "Enhanced Testing Automation",
    desc: "AI suggests and generates new test cases based on code changes, boosting coverage.",
    link: "/services/enhanced-testing"
  },
  {
    icon: <FaUserGraduate className="text-3xl text-orange-400 mb-3" />,
    title: "Personalized Learning & Development",
    desc: "AI recommends tailored learning resources to upskill your developers based on real performance.",
    link: "/services/personalized-learning"
  },
];

const HowWeHelp: React.FC = () => (
  <section id="services" className="relative z-20 py-12 md:py-16 overflow-hidden scroll-mt-32">
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
            className="flex-1 min-w-[220px] max-w-xs flex flex-col items-center md:items-center bg-black/30 backdrop-blur-lg rounded-3xl px-8 py-10 shadow-2xl border border-blue-400/10 hover:scale-[1.04] focus:scale-[1.04] hover:shadow-[0_0_32px_0_rgba(108,99,255,0.25)] focus:shadow-[0_0_32px_0_rgba(108,99,255,0.25)] transition-transform duration-300 outline-none group relative z-10 cursor-pointer"
          >
            {card.icon}
            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-white/80 text-base">{card.desc}</p>
            <Link
              to={card.link}
              className="mt-4 inline-block px-8 py-3 rounded-full bg-[linear-gradient(90deg,#6C63FF,#1FC2BE)] text-white font-semibold text-base shadow-lg border-none hover:scale-105 hover:shadow-xl transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 group relative overflow-hidden"
              style={{ background: 'linear-gradient(90deg,#6C63FF,#1FC2BE)' }}
            >
              <span className="relative z-10">Learn More</span>
              {/* Animated underline */}
              <span className="absolute left-1/2 bottom-2 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              {/* Glowing effect on hover */}
              <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default HowWeHelp;
