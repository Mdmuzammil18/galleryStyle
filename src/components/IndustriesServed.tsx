import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChartLine, FaHeartbeat, FaShoppingCart, FaIndustry, FaEllipsisH } from "react-icons/fa";

const industries = [
  { icon: <FaLaptopCode className="text-blue-400 text-3xl mb-2" />, name: "Tech" },
  { icon: <FaChartLine className="text-purple-400 text-3xl mb-2" />, name: "Finance" },
  { icon: <FaHeartbeat className="text-pink-400 text-3xl mb-2" />, name: "Healthcare" },
  { icon: <FaShoppingCart className="text-green-400 text-3xl mb-2" />, name: "Retail" },
  { icon: <FaIndustry className="text-yellow-400 text-3xl mb-2" />, name: "Manufacturing" },
  { icon: <FaEllipsisH className="text-white/60 text-3xl mb-2" />, name: "and more" },
];

const IndustriesServed: React.FC = () => (
  <section className="relative z-20 py-12 md:py-16 overflow-hidden">
  {/* Top divider */}
  {/* <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-400/20 via-purple-400/40 to-blue-400/20 rounded-full blur-sm opacity-80" /> */}
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
        Industries <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Served</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="flex flex-col items-center bg-black/40 border border-blue-900/30 rounded-xl p-5 shadow-md hover:scale-105 transition-transform duration-300 w-full"
          >
            {ind.icon}
            <span className="text-white/90 text-base font-medium">{ind.name}</span>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default IndustriesServed;
