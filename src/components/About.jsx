import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-surface-dark/30" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Why Join Wall Street?</h2>
            <h1 className="text-white text-4xl font-black leading-tight @[480px]:text-5xl max-w-[800px]">
              The Ultimate Trading Experience
            </h1>
            <p className="text-white/60 text-lg font-normal max-w-[720px]">Participate in the most prestigious college trading event designed to test your strategy and grit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {/* Feature 1 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="text-primary bg-primary/10 size-12 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-3xl">query_stats</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-xl font-bold">Real-time Trading</h2>
                <p className="text-white/50 text-sm leading-relaxed">Trade with live market data across multiple global exchanges with zero latency.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="text-primary bg-primary/10 size-12 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-xl font-bold">Learn & Earn</h2>
                <p className="text-white/50 text-sm leading-relaxed">Sharpen your financial skills with expert webinars while competing for cash rewards.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="text-primary bg-primary/10 size-12 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-xl font-bold">Networking</h2>
                <p className="text-white/50 text-sm leading-relaxed">Connect with top-tier industry experts and ambitious peers from elite colleges.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="text-primary bg-primary/10 size-12 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-3xl">emoji_events</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-xl font-bold">Grand Prizes</h2>
                <p className="text-white/50 text-sm leading-relaxed">Exciting rewards, internships, and trophies for the top 3 traders in the leaderboard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;