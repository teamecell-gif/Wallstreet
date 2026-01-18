import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-solid border-border-dark bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
        <header className="flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
            </div>
            <h2 className="text-white text-xl font-extrabold leading-tight tracking-tight">Wall Street</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
            <nav className="flex items-center gap-8">
              <a className="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#about">About</a>
              <a className="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#timeline">Timeline</a>
              <a className="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#register">Register</a>
              <a className="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#contact">Contact Us</a>
            </nav>
            <a className="flex min-w-[110px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95 glow-orange" href="#register">
              Join Now
            </a>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-white">menu</span>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;