import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="rounded-2xl shadow-xl p-7 w-full max-w-md relative bg-white/10 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/20"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-3 right-3 text-2xl text-neutral-400 hover:text-neutral-700 dark:hover:text-white focus:outline-none"
              aria-label="Close contact modal"
              onClick={onClose}
            >
              ×
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-md">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8m-19 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-wide font-serif">Contact Me</h2>
            </div>
            <p className="mb-6 text-neutral-600 dark:text-neutral-300 text-base">I'd love to hear from you! Fill out the form below or email me directly at <a href="mailto:md.muzammil18@gmail.com" className="underline text-blue-400 hover:text-blue-600 transition-colors">md.muzammil18@gmail.com</a>.</p>
            <form className="flex flex-col gap-4 mt-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V7a4 4 0 00-8 0v0a4 4 0 008 0zm-8 8a8 8 0 0116 0v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1z"/></svg>
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/15 dark:bg-neutral-800/50 text-white placeholder-white/60 dark:placeholder-neutral-300 border border-white/20 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 font-medium text-base"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4m-4 0a2 2 0 114 0m-4 0V6a2 2 0 012-2 2 2 0 012 2v2"/></svg>
                </span>
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/15 dark:bg-neutral-800/50 text-white placeholder-white/60 dark:placeholder-neutral-300 border border-white/20 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 font-medium text-base"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  aria-label="Your Message"
                  rows={4}
                  className="w-full pl-4 pr-4 py-2.5 rounded-lg bg-white/15 dark:bg-neutral-800/50 text-white placeholder-white/60 dark:placeholder-neutral-300 border border-white/20 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 font-medium text-base resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full mt-1 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow hover:scale-[1.025] hover:shadow-lg transition-all duration-200 border-0 text-base flex items-center justify-center gap-2"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.025 }}
                aria-label="Send Message"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-4.5m-5-1.5l-3 3m0 0l-3-3m3 3V4"/></svg>
                Send Message
              </motion.button>
              {/* Success message placeholder */}
              <div className="h-5 mt-1 text-center text-green-400 text-sm font-medium animate-fade-in"></div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
