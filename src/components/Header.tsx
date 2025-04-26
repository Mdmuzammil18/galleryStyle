import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('Home');

  React.useEffect(() => {
    const sectionIds = navLinks.map(link => link.href === '#' ? 'home' : link.href.replace('#', ''));
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i] === 'home' ? undefined : sectionIds[i];
        if (!id) {
          if (scrollY < 100) {
            setActiveLink('Home');
            found = true;
            break;
          }
        } else {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const offsetTop = rect.top + window.scrollY;
            if (scrollY + 120 >= offsetTop) {
              setActiveLink(navLinks[i].name);
              found = true;
              break;
            }
          }
        }
      }
      if (!found) setActiveLink('Home');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-b from-blue-950/90 to-black/95 shadow-xl transition-all duration-300 antialiased">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-5">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-1 text-2xl font-extrabold tracking-widest select-none">
          <span className="inline-block align-middle" style={{ width: '1.2em', height: '1.2em' }}>
            <svg width="32" height="32" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1em] h-[1em]">
              <defs>
                <linearGradient id="headerBoltGradient" x1="0" y1="0" x2="82" y2="82" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6C63FF" />
                  <stop offset="1" stopColor="#1FC2BE" />
                </linearGradient>
              </defs>
              <path d="M44 6L14 46H38L34 76L68 34H46L52 6Z" fill="url(#headerBoltGradient)" />
            </svg>
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">SuperCharge</span>
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">AI</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`relative uppercase tracking-wide tracking-wider font-semibold text-base transition px-1 py-0.5 font-sans focus-visible:ring-2 focus-visible:ring-blue-400 ${activeLink === link.name ? 'text-white underline underline-offset-8 decoration-4 decoration-gradient-to-r from-blue-400 via-purple-400 to-blue-600' : 'text-white/80 hover:text-white'}`}
              aria-label={link.name}
              tabIndex={0}
              onClick={e => {
                e.preventDefault();
                if (link.name === 'Home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  let targetId = link.href.replace('#', '');
                  if (targetId === 'about') targetId = 'about';
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-8 py-3 rounded-full bg-[linear-gradient(90deg,#6C63FF,#1FC2BE)] hover:scale-105 hover:shadow-lg transition-transform duration-300 text-white text-lg font-semibold shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400 font-sans"
            style={{ background: 'linear-gradient(90deg,#6C63FF,#1FC2BE)' }}
            aria-label="Book a Consultation"
            tabIndex={0}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book a Consultation
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(0,0,0,0.85)] backdrop-blur-xl shadow-xl border-b border-blue-900/40 px-4 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`relative uppercase tracking-wide tracking-wider font-semibold text-lg transition px-1 py-1 font-sans focus-visible:ring-2 focus-visible:ring-blue-400 ${activeLink === link.name ? 'text-white underline underline-offset-8 decoration-4 decoration-gradient-to-r from-blue-400 via-purple-400 to-blue-600' : 'text-white/90 hover:text-white'}`}
              aria-label={link.name}
              tabIndex={0}
              onClick={e => {
                e.preventDefault();
                setMenuOpen(false);
                if (link.name === 'Home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  let targetId = link.href.replace('#', '');
                  if (targetId === 'about') targetId = 'about';
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-8 py-3 rounded-full bg-[linear-gradient(90deg,#6C63FF,#1FC2BE)] hover:scale-105 hover:shadow-lg transition-transform duration-300 text-white text-lg font-semibold shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400 font-sans"
            style={{ background: 'linear-gradient(90deg,#6C63FF,#1FC2BE)' }}
            aria-label="Book a Consultation"
            tabIndex={0}
            onClick={e => {
              e.preventDefault();
              setMenuOpen(false);
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
