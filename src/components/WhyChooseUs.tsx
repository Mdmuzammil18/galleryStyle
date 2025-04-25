import React from "react";
import { FaBrain, FaCheckCircle, FaBalanceScale, FaUserFriends } from "react-icons/fa";

const bullets = [
  {
    icon: <FaBrain className="text-blue-400 text-2xl mr-3" />,
    text: "Deep expertise in AI and business transformation",
  },
  {
    icon: <FaCheckCircle className="text-purple-400 text-2xl mr-3" />,
    text: "Proven track record of successful integrations",
  },
  {
    icon: <FaBalanceScale className="text-pink-400 text-2xl mr-3" />,
    text: "Vendor-agnostic, always focused on your ROI",
  },
  {
    icon: <FaUserFriends className="text-green-400 text-2xl mr-3" />,
    text: "Personalized, hands-on approach",
  },
];

const WhyChooseUs: React.FC = () => (
  <section className="relative z-20 py-12 md:py-16 from-black/90 via-blue-950/90 to-black/90">
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
