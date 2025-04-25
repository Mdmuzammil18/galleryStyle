import React from "react";

// Placeholder SVGs or icons for popular AI tools
const tools = [
  {
    name: "ChatGPT",
    logo: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none"><circle cx="20" cy="20" r="20" fill="#10A37F"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" dy=".3em">G</text></svg>
    ),
  },
  {
    name: "Midjourney",
    logo: (
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/midjourney.svg" alt="Midjourney" width={36} height={36} style={{ background: '#fff', borderRadius: '50%', padding: 4 }} />
    ),
  },
  {
    name: "DALL-E",
    logo: (
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openaidalle.svg" alt="DALL-E" width={36} height={36} style={{ background: '#fff', borderRadius: '50%', padding: 4 }} />
    ),
  },
  {
    name: "Gemini",
    logo: (
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" alt="Gemini" width={36} height={36} style={{ background: '#fff', borderRadius: '50%', padding: 4 }} />
    ),
  },
  {
    name: "Claude",
    logo: (
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" alt="Claude" width={36} height={36} style={{ background: '#fff', borderRadius: '50%', padding: 4 }} />
    ),
  },
  {
    name: "Copilot",
    logo: (
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/githubcopilot.svg" alt="Copilot" width={36} height={36} style={{ background: '#fff', borderRadius: '50%', padding: 4 }} />
    ),
  },
  {
    name: "Bard",
    logo: (
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlebard.svg" alt="Bard" width={36} height={36} style={{ background: '#fff', borderRadius: '50%', padding: 4 }} />
    ),
  },
  {
    name: "Stable Diffusion",
    logo: (
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stablediffusion.svg" alt="Stable Diffusion" width={36} height={36} style={{ background: '#fff', borderRadius: '50%', padding: 4 }} />
    ),
  },
];

const AIToolsMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden py-4 z-20 relative">
      <div className="flex whitespace-nowrap animate-marquee gap-8">
        {tools.map((tool, idx) => (
          <div key={tool.name} className="flex flex-col items-center min-w-[80px]">
            <div
              className="rounded-full shadow-lg border border-white/30 flex items-center justify-center mb-1"
              style={{ width: 44, height: 44 }}
              title={tool.name}
            >
              {tool.logo}
            </div>
            <span className="text-xs text-white/80 font-medium">{tool.name}</span>
          </div>
        ))}
        <a
          href="#tools"
          className="flex flex-col items-center min-w-[80px] justify-center text-xs text-blue-300 underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity font-medium mt-2"
        >
          View All Tools
        </a>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AIToolsMarquee;
