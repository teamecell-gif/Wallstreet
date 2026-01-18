import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="max-w-[1280px] w-full px-4 sm:px-10 py-12 md:py-24">
        <div className="@container">
          <div className="flex flex-col gap-10 @[864px]:flex-row items-center">
            <div className="flex flex-col gap-8 flex-1 @[864px]:justify-center">
              <div className="flex flex-col gap-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">Season 2025 Now Open</span>
                </div>
                <h1 className="text-white text-5xl font-black leading-[1.1] tracking-tight @[480px]:text-7xl">
                  Master the Market: <span className="text-primary">College Stock</span> Trading Challenge
                </h1>
                <p className="text-white/70 text-lg font-normal leading-relaxed max-w-[580px]">
                  Experience the thrill of real-time trading and compete for the top spot. High-stakes competition, real-world data, and massive prizes await the next generation of financial leaders.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-background-dark text-lg font-bold transition-all hover:bg-primary/90 glow-orange" href="#register">
                  Get Started
                </a>
                <a className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/5 border border-white/10 text-white text-lg font-bold transition-all hover:bg-white/10" href="#about">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full @[864px]:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all"></div>
              <div className="relative w-full aspect-square bg-center bg-no-repeat bg-cover rounded-2xl border border-white/10 shadow-2xl overflow-hidden" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsRpEeUkGZv0bqPNXRZUEayw1X9Q7W5aKxptSR90vo86EzZ0lg3JjQkNW_dJwC-T826p33Ve3vs7l4cXN90FnYWktKeoJtUdJQybajsHjJXHJMn0kUJDlRF7e2opw3x9i3sw73XsvqqrW_uw81L_pfRCWSVjjV0v-Enuc5vYcnhcrWZfciUaRTqFsaSjQHHR8wRtzCkVQbW9ZcrbjLWMU29IJn9gmUNDQa2Y6C10TQqF-0fZfGlOMZGZ5IZQEmLeebvK4fMed_Bw")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;