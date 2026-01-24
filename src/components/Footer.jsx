import React from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import logo from '../assets/logo.png'; // Make sure this path matches your logo file!

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-background-dark border-t border-border-dark pt-20 pb-10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 mb-20 items-start text-center md:text-left">
          
          <div className="md:col-span-4 flex flex-col gap-6 items-center md:items-start">
            {/* Logo Image */}
            <img 
              src={logo} 
              alt="Organization Logo" 
              className="w-48 h-auto object-contain" 
            />
            <p className="text-white/60 text-lg leading-relaxed max-w-[320px]">
              Fostering innovation and entrepreneurship among students.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 items-center md:items-center">
            <div className="flex flex-col gap-6 items-center md:items-start">
              <h3 className="text-primary text-2xl font-black uppercase tracking-tight">Contact Us</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-white/80 font-bold text-xs mb-2 uppercase tracking-widest">For Public Affairs & Communications:</p>
                  <a className="text-white/60 hover:text-primary transition-colors text-base break-all" href="mailto:publicrelations@ecellvnit.co.in">publicrelations@ecellvnit.co.in</a>
                </div>
                <div>
                  <p className="text-white/80 font-bold text-xs mb-2 uppercase tracking-widest">For Association and Sponsorship:</p>
                  <a className="text-white/60 hover:text-primary transition-colors text-base break-all" href="mailto:corporateaffairs@ecellvnit.co.in">corporateaffairs@ecellvnit.co.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 items-center md:items-end">
            <div className="flex flex-col gap-6 items-center md:items-start">
              <h3 className="text-primary text-2xl font-black uppercase tracking-tight">Follow Us</h3>
              <div className="flex items-center gap-5">
                {/* Social Icons - Kept simpler SVG for cleanliness */}
                <a aria-label="Instagram" className="text-primary hover:scale-125 transition-all p-2 rounded-lg bg-primary/5 hover:bg-primary/10" href="https://www.instagram.com/ecellvnit/">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
                <a aria-label="LinkedIn" className="text-primary hover:scale-125 transition-all p-2 rounded-lg bg-primary/5 hover:bg-primary/10" href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                <a aria-label="YouTube" className="text-primary hover:scale-125 transition-all p-2 rounded-lg bg-primary/5 hover:bg-primary/10" href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186c-.273-1.018-1.066-1.812-2.081-2.085-1.838-.493-9.417-.493-9.417-.493s-7.58 0-9.417.493c-1.015.273-1.808 1.067-2.081 2.085-.492 1.839-.492 5.672-.492 5.672s0 3.834.492 5.672c.273 1.018 1.066 1.812 2.081 2.085 1.838.493 9.417.493 9.417.493s7.58 0 9.417-.493c1.015-.273 1.808-1.067 2.081-2.085.492-1.839.492-5.672.492-5.672s0-3.834-.492-5.672zm-14.164 7.558v-6.938l6.046 3.472-6.046 3.466z"></path></svg>
                </a>
                <a aria-label="X / Twitter" className="text-primary hover:scale-125 transition-all p-2 rounded-lg bg-primary/5 hover:bg-primary/10" href="https://x.com/ecell_vnit">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-dark pt-10 flex flex-col items-center gap-6">
          <p className="text-white/40 text-sm text-center max-w-[800px] leading-relaxed">
            E-Cell office, 1st Floor VNIT Canteen, Visvesvaraya National Institute Of Technology, South Ambazari Road, Abhyankar Nagar, Nagpur-440010
          </p>
          <p className="text-white/30 text-xs font-medium tracking-wide">
            © 2025 The Entrepreneurship Cell, VNIT. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;