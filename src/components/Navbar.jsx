import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle smooth scroll without adding # to URL
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Nav Links Data
  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Timeline', href: 'timeline' },
    { name: 'Register', href: 'register' },
    { name: 'Contact Us', href: 'contact' },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-solid border-border-dark bg-background-dark/80 backdrop-blur-md"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
        <header className="flex items-center justify-between whitespace-nowrap relative">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
            </div>
            <h2 className="text-white text-xl font-extrabold leading-tight tracking-tight">Wall Street</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium leading-normal"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <a 
              href="#register"
              onClick={(e) => handleScroll(e, 'register')}
              className="flex min-w-[110px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95 glow-orange"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div 
            className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-white select-none">
              {isOpen ? 'close' : 'menu'}
            </span>
          </div>

        </header>
      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background-dark border-t border-border-dark"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all font-medium text-center"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <a
                href="#register"
                onClick={(e) => handleScroll(e, 'register')}
                className="w-full flex items-center justify-center rounded-lg h-12 bg-primary text-background-dark font-bold active:scale-95 glow-orange"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;