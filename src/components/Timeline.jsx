import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <section className="py-24 bg-background-dark" id="timeline">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 text-center"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Roadmap</h2>
            <h1 className="text-white text-4xl font-black">Competition Timeline</h1>
          </motion.div>

          <div className="relative w-full flex flex-col gap-0">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-border-dark md:-translate-x-1/2"></div>
            
            {/* Event 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-start md:justify-between w-full mb-12 pl-12 md:pl-0"
            >
              <div className="hidden md:block w-5/12 text-right pr-8">
                <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">29th January 2026</span>
              </div>
              <div className="absolute left-0 md:left-1/2 size-8 rounded-full border-4 border-background-dark bg-primary md:-translate-x-1/2 z-10 glow-orange"></div>
              <div className="md:w-5/12 bg-surface-dark border border-border-dark p-6 rounded-xl md:ml-8 hover:border-primary/50 transition-colors">
                <div className="md:hidden text-primary text-xs font-bold mb-2">4th February 2026</div>
                <h3 className="text-white font-bold text-lg mb-1">Registration Commences</h3>
                <p className="text-white/50 text-sm">Registration for the event commences</p>
              </div>
            </motion.div>

            {/* Event 2 (Reverse Layout) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-start md:justify-between w-full mb-12 flex-row-reverse pl-12 md:pl-0"
            >
              <div className="hidden md:block w-5/12 text-left pl-8">
                <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">9 February 2026</span>
              </div>
              <div className="absolute left-0 md:left-1/2 size-8 rounded-full border-4 border-background-dark bg-primary md:-translate-x-1/2 z-10 glow-orange"></div>
              <div className="md:w-5/12 bg-surface-dark border border-border-dark p-6 rounded-xl md:mr-8 hover:border-primary/50 transition-colors">
                <div className="md:hidden text-primary text-xs font-bold mb-2">9 February 2026</div>
                <h3 className="text-white font-bold text-lg mb-1">Gameplay Weekend Starts</h3>
                <p className="text-white/50 text-sm">Gameplay weekend starts for the registered participants</p>
              </div>
            </motion.div>

            {/* Event 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-start md:justify-between w-full mb-12 pl-12 md:pl-0"
            >
              <div className="hidden md:block w-5/12 text-right pr-8">
                <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">13 February 2026</span>
              </div>
              <div className="absolute left-0 md:left-1/2 size-8 rounded-full border-4 border-background-dark bg-primary md:-translate-x-1/2 z-10 glow-orange"></div>
              <div className="md:w-5/12 bg-surface-dark border border-border-dark p-6 rounded-xl md:ml-8 hover:border-primary/50 transition-colors">
                <div className="md:hidden text-primary text-xs font-bold mb-2">13 February 2026</div>
                <h3 className="text-white font-bold text-lg mb-1">Final Day of Gameplay</h3>
                <p className="text-white/50 text-sm">Final day of gameplay for the registered participants</p>
              </div>
            </motion.div>

            {/* Event 4 (Reverse) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-start md:justify-between w-full mb-0 flex-row-reverse pl-12 md:pl-0"
            >
              <div className="hidden md:block w-5/12 text-left pl-8">
                <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">15 February 2026</span>
              </div>
              <div className="absolute left-0 md:left-1/2 size-8 rounded-full border-4 border-background-dark bg-primary md:-translate-x-1/2 z-10 glow-orange"></div>
              <div className="md:w-5/12 bg-surface-dark border border-border-dark p-6 rounded-xl md:mr-8 hover:border-primary/50 transition-colors">
                <div className="md:hidden text-primary text-xs font-bold mb-2">15 February 2026</div>
                <h3 className="text-white font-bold text-lg mb-1">Results Announcement</h3>
                <p className="text-white/50 text-sm">Results are announced for the registered participants</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;