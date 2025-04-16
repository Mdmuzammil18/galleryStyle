import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portfolio from './components/Portfolio/Portfolio';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const projectGridRef = useRef<HTMLDivElement>(null);

  // Smooth scroll helper
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <>
      {/* Global Hamburger Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col"
          >
            <button
              className="text-3xl text-white m-6 self-end"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            <div className="flex-1 flex flex-col justify-center items-center w-full">
              <nav className="flex flex-col gap-10 items-center">
                <a
                  href="#"
                  className="text-white text-3xl font-bold hover:underline transition-all"
                  onClick={e => {
                    e.preventDefault();
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
                <a
                  href="#portfolio-grid"
                  className="text-white text-3xl font-bold hover:underline transition-all"
                  onClick={e => {
                    e.preventDefault();
                    setMenuOpen(false);
                    scrollToSection(projectGridRef);
                  }}
                >
                  Portfolio
                </a>
                <a
                  href="#contact-modal"
                  className="text-white text-3xl font-bold hover:underline transition-all"
                  onClick={e => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setContactModalOpen(true);
                  }}
                >
                  Contact
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Portfolio
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        projectGridRef={projectGridRef}
        onContactClick={() => setContactModalOpen(true)}
      />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default App;
