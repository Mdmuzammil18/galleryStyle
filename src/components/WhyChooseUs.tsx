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
  <section className="relative z-20 py-12 md:py-16 bg-[#181C23] border-t border-blue-900/30 overflow-hidden">
  {/* Ultra-faint noise overlay for premium depth */}
  <div className="absolute inset-0 pointer-events-none opacity-5" style={{backgroundImage: "url('/noise.png')", backgroundRepeat: "repeat"}} />
  {/* Abstract blurred blobs for modern effect */}
  <div className="absolute -top-24 -left-32 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30 pointer-events-none" />
  <div className="absolute -bottom-24 -right-32 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-30 pointer-events-none" />
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
