import React, { useRef, useState, useEffect } from 'react';
import { FilterType } from './Portfolio';

interface FilterBarProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, setActiveFilter }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);

  // Available filters based on the image
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

  // Check if scrolling is needed
  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftScroll(scrollLeft > 0);
        setShowRightScroll(scrollLeft + clientWidth < scrollWidth - 10);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
    }

    return () => {
      window.removeEventListener('resize', checkScroll);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Left scroll button */}
      <button 
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white/80 shadow-lg transition-opacity duration-300 ${
          showLeftScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => scroll('left')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Filter scroll area */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-2 py-2 px-2 mx-auto max-w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-white/20 text-white font-medium shadow-glow'
                : 'bg-black/20 backdrop-blur-sm text-white/70 hover:bg-white/10'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      <button 
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white/80 shadow-lg transition-opacity duration-300 ${
          showRightScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => scroll('right')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default FilterBar;
