import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portfolio from './components/Portfolio/Portfolio';
import ContactModal from './components/ContactModal';
import Header from "./components/Header";
import LandingHero from "./components/LandingHero";
import HowWeHelp from "./components/HowWeHelp";
import WhyChooseUs from "./components/WhyChooseUs";
import OurProcess from "./components/OurProcess";

import CallToAction from "./components/CallToAction";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutomatedCodeReview from "./services/AutomatedCodeReview";
import IntelligentBugTriage from "./services/IntelligentBugTriage";
import PredictiveSprintPlanning from "./services/PredictiveSprintPlanning";
import ContextualDocumentation from "./services/ContextualDocumentation";
import AIPoweredChatbots from "./services/AIPoweredChatbots";
import CodeQualityDashboard from "./services/CodeQualityDashboard";
import EnhancedTesting from "./services/EnhancedTesting";
import PersonalizedLearning from "./services/PersonalizedLearning";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
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
            <Header />
            <LandingHero />
            <HowWeHelp />
            <WhyChooseUs />
            <OurProcess />
            <CallToAction />
            <ContactSection />
            <Portfolio
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              projectGridRef={projectGridRef}
              onContactClick={() => setContactModalOpen(true)}
            />
            <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
            <Footer />
          </>
        } />
        <Route path="/services/automated-code-review" element={<AutomatedCodeReview />} />
        <Route path="/services/intelligent-bug-triage" element={<IntelligentBugTriage />} />
        <Route path="/services/predictive-sprint-planning" element={<PredictiveSprintPlanning />} />
        <Route path="/services/contextual-documentation" element={<ContextualDocumentation />} />
        <Route path="/services/ai-powered-chatbots" element={<AIPoweredChatbots />} />
        <Route path="/services/code-quality-dashboard" element={<CodeQualityDashboard />} />
        <Route path="/services/enhanced-testing" element={<EnhancedTesting />} />
        <Route path="/services/personalized-learning" element={<PersonalizedLearning />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
