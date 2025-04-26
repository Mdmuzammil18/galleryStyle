import React from "react";
import { FaBrain, FaCheckCircle, FaBalanceScale, FaUserFriends } from "react-icons/fa";

const bullets = [
  {
    icon: <FaBrain className="text-blue-400 text-2xl mr-3" />,
    text: "Niche Expertise: 100% focused on AI for software development — no distractions.",
  },
  {
    icon: <FaCheckCircle className="text-purple-400 text-2xl mr-3" />,
    text: "Privacy First: Enterprise-grade security, no data leaks, no public training.",
  },
  {
    icon: <FaBalanceScale className="text-pink-400 text-2xl mr-3" />,
    text: "Real Implementation: We don't just consult — we integrate, automate, and deliver.",
  },
  {
    icon: <FaUserFriends className="text-green-400 text-2xl mr-3" />,
    text: "Customizable: Choose only the modules you need. Grow at your own pace.",
  },
];

const WhyChooseUs: React.FC = () => (
  <section className="relative z-20 py-12 md:py-16 overflow-hidden">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8">
        Why Partner <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">With Us?</span>
      </h2>
      <ul className="flex flex-col gap-6 mt-8">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center bg-black/40 rounded-xl px-6 py-5 hover:scale-105 transition-transform duration-300">
            {b.icon}
            <span className="text-white/90 text-lg font-medium">{b.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChooseUs;
