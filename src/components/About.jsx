import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variant for the cards to stagger them (appear one by one)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delay between each card appearing
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-surface-dark/30" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col gap-12">
          
          {/* Header Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 text-center items-center"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Why Join Wall Street?</h2>
            <h1 className="text-white text-4xl font-black leading-tight @[480px]:text-5xl max-w-[800px]">
              The Ultimate Trading Experience
            </h1>
            <p className="text-white/60 text-lg font-normal max-w-[720px]">
              Participate in the most prestigious college trading event designed to test your strategy and grit.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto"
          >
            {[
              { icon: "query_stats", title: "Real-time Trading", desc: "Trade with live market data across multiple global exchanges with zero latency." },
              { icon: "school", title: "Learn & Earn", desc: "Sharpen your financial skills with expert webinars while competing for cash rewards." },
              { icon: "hub", title: "Networking", desc: "Connect with top-tier industry experts and ambitious peers from elite colleges." },
              { icon: "emoji_events", title: "Grand Prizes", desc: "Exciting rewards, internships, and trophies for the top 3 traders in the leaderboard." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="text-primary bg-primary/10 size-12 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-xl font-bold">{feature.title}</h2>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;