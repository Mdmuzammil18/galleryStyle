import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectGrid from './ImageGrid';
import TechMarquee from './TechMarquee';
import { useAnimationOnLoad } from '../../hooks/useAnimationOnLoad';
import { useTypewriter } from '../../hooks/useTypewriter';
import ParticleBackground from '../Background/ParticleBackground';


interface PortfolioProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectGridRef: React.RefObject<HTMLDivElement>;
  onContactClick: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ menuOpen, setMenuOpen, projectGridRef, onContactClick }) => {

  const bgVisible = useAnimationOnLoad(100);
  const contentVisible = useAnimationOnLoad(500);

  const { displayText, isComplete } = useTypewriter({
    text: "Contact Me →",
    delay: 150,
    startDelay: 1200,
    loop: false
  });

  return (
    <div className="relative overflow-hidden">
      {/* Particle Background with Gradient */}
      <div className={`transition-opacity duration-1000 ${bgVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
      </div>
      {/* Dark overlay for better content readability */}
      <div className={`fixed inset-0 bg-black/30 z-[1] transition-opacity duration-700 
        ${bgVisible ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export default Portfolio;
