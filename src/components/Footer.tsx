import React from "react";

import { FiLinkedin, FiTwitter, FiGithub, FiSend } from "react-icons/fi";

const Footer: React.FC = () => (
  <footer className="w-full relative bg-gradient-to-b from-blue-950/90 to-black/95 text-white py-10 px-4 flex flex-col items-center justify-center text-center mt-0 border-t border-blue-900/60 font-sans antialiased">
    <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 mx-auto">
      {/* Company & Legal Links */}
      <div className="flex flex-col sm:flex-row gap-8 w-full md:w-auto justify-center md:justify-start">
        <div>
          <h3 className="text-base font-semibold mb-2 text-blue-300 tracking-wider">Company</h3>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:underline hover:text-blue-400 transition">About</a></li>
            <li><a href="#services" className="hover:underline hover:text-blue-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:underline hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-2 text-blue-300 tracking-wider">Legal</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-400 transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      {/* Newsletter Signup */}
      <form className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto max-w-xs" aria-label="Newsletter signup">
        <label htmlFor="newsletter" className="sr-only">Subscribe to our newsletter</label>
        <div className="flex w-full">
          <input id="newsletter" type="email" required placeholder="Your email address" className="px-4 py-2 rounded-l-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 w-full" />
          <button type="submit" className="px-4 py-2 rounded-r-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-bold hover:scale-105 transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-blue-400">
            <FiSend />
          </button>
        </div>
        <span className="text-xs text-blue-200 opacity-70">Get AI tips & updates. No spam.</span>
      </form>
      {/* Social Icons */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-400 transition text-2xl"><FiLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-blue-400 transition text-2xl"><FiTwitter /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-blue-400 transition text-2xl"><FiGithub /></a>
      </div>
    </div>
    <div className="mt-8 text-sm text-blue-200/80 tracking-wide">
      &copy; {new Date().getFullYear()} AI Integration Gallery. Empowering your business with seamless AI automation.
    </div>
  </footer>
);

export default Footer;
