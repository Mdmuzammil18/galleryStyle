import React from 'react';
import Marquee from 'react-fast-marquee';

interface TechItem {
  name: string;
  icon?: string;
  category: string[];
}

interface TechMarqueeProps {
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const techStack: TechItem[] = [
  { name: 'React', icon: '⚛️', category: ['Frontend', 'React'] },
  { name: 'TypeScript', icon: '📘', category: ['Frontend', 'Backend'] },
  { name: 'TailwindCSS', icon: '🎨', category: ['Frontend'] },
  { name: 'Firebase', icon: '🔥', category: ['Backend', 'Firebase'] },
  { name: 'Node.js', icon: '🟢', category: ['Backend'] },
  { name: 'MongoDB', icon: '🍃', category: ['Backend'] },
  { name: 'Redux', icon: '💫', category: ['Frontend', 'React'] },
  { name: 'Next.js', icon: '▲', category: ['Frontend', 'React'] },
  { name: 'GraphQL', icon: '📊', category: ['Backend', 'API'] },
  { name: 'Docker', icon: '🐳', category: ['DevOps'] },
  { name: 'AWS', icon: '☁️', category: ['Cloud', 'Backend'] },
  { name: 'ChatGPT API', icon: '🤖', category: ['AI'] },
  { name: 'TensorFlow', icon: '🧠', category: ['AI'] },
  { name: 'Figma', icon: '🎯', category: ['Design'] }
];

const TechMarquee: React.FC<TechMarqueeProps> = ({ 
  speed = 50, 
  direction = 'left',
  className = ''
}) => {
  return (
    <div className={`backdrop-blur-sm py-8 relative ${className}`}>
      <Marquee
        speed={speed}
        direction={direction}
        gradient={false}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        <div className="flex space-x-12 px-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-white/80 hover:text-white 
                transform hover:scale-110 transition-all duration-300 ease-out
                hover:rotate-[2deg] group cursor-pointer"
            >
              <span className="text-2xl group-hover:animate-bounce">{tech.icon}</span>
              <span className="text-lg font-serif relative">
                {tech.name}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent 
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </span>
              {tech.category.map((cat, idx) => (
                <span
                  key={idx}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100
                    absolute top-full left-1/2 -translate-x-1/2 text-xs text-purple-400
                    transform translate-y-1 pointer-events-none"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  #{cat}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Marquee>
      
      {/* Gradient overlays with subtle pulse animation */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent animate-pulse" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent animate-pulse" />
    </div>
  );
};

export default TechMarquee;