import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-24 bg-background-dark" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col gap-12 text-center items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Contact Us</h2>
            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight">
              GET IN <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-white/60 text-lg font-normal max-w-[600px] mx-auto">
              Have questions or want to learn more? Reach out to one of our organizing heads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">
            {/* Contact Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-6 p-8 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all group hover:bg-surface-dark/80"
            >
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all shrink-0">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Alex Johnson</h3>
                <a className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-semibold" href="tel:+15551234567">
                  <span className="material-symbols-outlined text-xl">call</span>
                  +1 (555) 123-4567
                </a>
              </div>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 p-8 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all group hover:bg-surface-dark/80"
            >
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all shrink-0">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Sarah Smith</h3>
                <a className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-semibold" href="tel:+15559876543">
                  <span className="material-symbols-outlined text-xl">call</span>
                  +1 (555) 987-6543
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;