import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectGrid from './ImageGrid';
import TechMarquee from './TechMarquee';
import { useAnimationOnLoad } from '../../hooks/useAnimationOnLoad';
import { useTypewriter } from '../../hooks/useTypewriter';
import ParticleBackground from '../Background/ParticleBackground';

// Define filter types
export type FilterType = 
  | 'All' 
  | 'React'
  | 'Next.js'
  | 'Express'
  | 'Firebase'
  | 'GPT-3'
  | 'GraphQL'
  | 'Material-UI'
  | 'Monaco Editor'
  | 'MongoDB'
  | 'Nest.js'
  | 'Node.js'
  | 'OpenAI'
  | 'PostgreSQL'
  | 'Prisma'
  | 'React Native'
  | 'Redux'
  | 'Socket.io'
  | 'Stripe'
  | 'Tailwind CSS'
  | 'Three.js'
  | 'TypeScript'
  | 'Vue.js'
  | 'Vite'
  | 'WebRTC'
  | 'WebSocket'
  | 'Weather API'
  | 'Tailwind'
  | 'TensorFlow'
  | 'Vuex'
  | 'Maps API'
  | 'D3.js'
  | 'Python'
  | 'HealthKit';

interface PortfolioProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectGridRef: React.RefObject<HTMLDivElement>;
  onContactClick: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ menuOpen, setMenuOpen, projectGridRef, onContactClick }) => {

  const bgVisible = useAnimationOnLoad(100);
  const contentVisible = useAnimationOnLoad(500);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  
  // Available filters
  const filters: FilterType[] = [
    'All',
    'React',
    'Next.js',
    'Express',
    'Firebase',
    'GPT-3',
    'GraphQL',
    'Material-UI',
    'Monaco Editor',
    'MongoDB',
    'Nest.js',
    'Node.js',
    'OpenAI',
    'PostgreSQL',
    'Prisma',
    'React Native',
    'Redux',
    'Socket.io',
    'Stripe',
    'Tailwind CSS',
    'Three.js',
    'TypeScript',
    'Vue.js',
    'Vite',
    'WebRTC',
    'WebSocket',
    'Weather API'
  ];
  
  const { displayText, isComplete } = useTypewriter({
    text: "Contact Me →",
    delay: 150,
    startDelay: 1200,
    loop: false
  });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Particle Background with Gradient */}
      <div className={`transition-opacity duration-1000 ${bgVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
      </div>
      
      {/* Dark overlay for better content readability */}
      <div className={`fixed inset-0 bg-black/30 z-[1] transition-opacity duration-700 
        ${bgVisible ? 'opacity-100' : 'opacity-0'}`} />

      {/* Navigation */}
      <nav className={`relative z-[60] flex justify-between items-center py-6 px-8 backdrop-blur-sm bg-black/10
        transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        {/* Hamburger */}
        <button
          className="text-2xl text-white/90 hover:scale-110 transition-transform duration-300 animate-fade-slide-up"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
        <div className="flex items-center gap-2 animate-fade-in">
          <span className="text-3xl text-white/90 animate-pulse duration-3000">✧</span>
          <h1 className="text-2xl font-light tracking-wider text-white/90 animate-slide-down">PORTFOLIO</h1>
        </div>
        {/* Contact Me */}
        <button
          className="px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 text-white/90 animate-fade-slide-up delay-300 min-w-[140px] text-left group"
          onClick={onContactClick}
        >
          <span className="inline-block">{displayText}</span>
          <span className={`inline-block w-[2px] h-4 bg-white/90 ml-1 transition-opacity duration-75 ${isComplete ? 'group-hover:opacity-100 opacity-0' : 'animate-pulse'}`}></span>
        </button>

      </nav>

      {/* Tech Stack Marquee */}
      <TechMarquee className="mb-4 z-20 relative animate-fade-in delay-500" />

      {/* Filters */}
      <div className={`relative z-20 container mx-auto px-4 mb-8 transition-all duration-700 
        ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="overflow-x-auto scrollbar-hide pb-2">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white/20 text-white font-medium shadow-glow'
                    : 'bg-black/20 backdrop-blur-sm text-white/70 hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className={`container mx-auto px-4 relative z-10 transition-all duration-1000
        ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="min-h-[calc(100vh-6rem)]">
          {/* Project Grid */}
          <div ref={projectGridRef} id="portfolio-grid" className="relative w-full max-w-7xl mx-auto pt-8 pb-48 animate-fade-in delay-700">
            <ProjectGrid filter={activeFilter} />
          </div>

          {/* Text Section */}
          <div className="relative z-10 -mt-20">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-end">
                <h2 className="text-5xl lg:text-6xl font-serif text-white/90 animate-fade-slide-up delay-500">
                  Discover<br />my work
                </h2>
                <div className="text-center max-w-md animate-fade-in delay-700">
                  <p className="text-lg mb-6 text-white/80">
                    Explore my projects and see how I bring<br />
                    ideas to life through code and design
                  </p>
                  <button
                    className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 text-white/90 animate-fade-slide-up delay-1000"
                    onClick={() => {
                      setActiveFilter('All');
                      if (projectGridRef.current) {
                        projectGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    View All Projects →
                  </button>
                </div>
                <h2 className="text-5xl lg:text-6xl font-serif text-right text-white/60 animate-fade-slide-up delay-700">
                  and creative<br />solutions
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
