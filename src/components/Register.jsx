import React from 'react';
import { motion } from 'framer-motion';

const Register = () => {
  return (
    <section className="py-24 bg-surface-dark/20 relative overflow-hidden" id="register">
      {/* Background Blur Effect */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-[600px] bg-primary/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-[800px] mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface-dark border border-border-dark rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black text-white">Join Wall Street</h2>
              <p className="text-white/60">Fill out the form below to register for the competition.</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white/80">Full Name</label>
                <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white/80">Email Address</label>
                <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@university.edu" type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white/80">Contact Number</label>
                <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white/80">College Name</label>
                <input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Harvard University" type="text" />
              </div>
              
              <div className="md:col-span-2 flex items-start gap-3 pt-2">
                <input className="mt-1 size-5 rounded border-border-dark bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark" id="declare" type="checkbox" />
                <label className="text-sm text-white/60 leading-normal select-none" htmlFor="declare">
                  I hereby declare that the information provided is correct and I agree to the terms and conditions of the Wall Street Trading Competition.
                </label>
              </div>
              
              <div className="md:col-span-2 pt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 bg-primary text-background-dark font-black text-lg rounded-lg hover:bg-primary/90 transition-all glow-orange" type="submit"
                >
                  Submit Registration
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;