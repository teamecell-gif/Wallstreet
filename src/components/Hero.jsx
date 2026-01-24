import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      <div className="max-w-[1280px] w-full px-4 sm:px-10 py-12 md:py-24">
        <div className="@container">
          <div className="flex flex-col gap-10 @[864px]:flex-row items-center">
            
            {/* Left Content - Slide In from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-8 flex-1 @[864px]:justify-center"
            >
              <div className="flex flex-col gap-4 text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit"
                >
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">Season 2026 Now Open</span>
                </motion.div>
                
                <h1 className="text-white text-5xl font-black leading-[1.1] tracking-tight @[480px]:text-7xl">
                  Master the Market: <span className="text-primary">College Stock</span> Trading Challenge
                </h1>
                
                <p className="text-white/70 text-lg font-normal leading-relaxed max-w-[580px]">
                  Experience the thrill of real-time trading and compete for the top spot. High-stakes competition, real-world data, and massive prizes await the next generation of financial leaders.
                </p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a onClick={(e) => handleScroll(e, 'register')} className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-background-dark text-lg font-bold transition-all hover:bg-primary/90 glow-orange">
                  Get Started
                </a>
                <a onClick={(e) => handleScroll(e, 'about')} className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/5 border border-white/10 text-white text-lg font-bold transition-all hover:bg-white/10">
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image - Scale/Fade In */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full @[864px]:w-1/2 relative group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all"></div>
              {/* Note: I added a placeholder image URL here so it looks good immediately */}
              <div className="relative w-full aspect-square bg-center bg-no-repeat bg-cover rounded-2xl border border-white/10 shadow-2xl overflow-hidden" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsRpEeUkGZv0bqPNXRZUEayw1X9Q7W5aKxptSR90vo86EzZ0lg3JjQkNW_dJwC-T826p33Ve3vs7l4cXN90FnYWktKeoJtUdJQybajsHjJXHJMn0kUJDlRF7e2opw3x9i3sw73XsvqqrW_uw81L_pfRCWSVjjV0v-Enuc5vYcnhcrWZfciUaRTqFsaSjQHHR8wRtzCkVQbW9ZcrbjLWMU29IJn9gmUNDQa2Y6C10TQqF-0fZfGlOMZGZ5IZQEmLeebvK4fMed_Bw")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;