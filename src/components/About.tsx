import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

export const About: React.FC = () => {
  return (
    <section className="section-spacing bg-background px-4 md:px-6 overflow-hidden relative border-b border-foreground/5" id="about">
      <div className="max-w-[1400px] mx-auto min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Huge Title & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col"
            >
              <span className="eyebrow-pill text-primary border-primary/20 bg-primary/5">Philosophy</span>
              <h2 className="text-[12vw] lg:text-[10vw] font-caslon font-bold text-primary leading-[0.8] tracking-tighter uppercase select-none">
                About <br /> Me
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col gap-6 max-w-xl"
            >
              <p className="font-sans text-xl md:text-2xl font-medium text-foreground/80 leading-tight">
                AI/ML Architect dedicated to building robust, scalable models that bridge the gap between theory and real-world impact.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-sans text-sm md:text-base text-foreground/50 leading-relaxed italic">
                  Tactile Minimal. Engineering the next epoch of intelligence through surgical precision and creative intuition.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Colored Portrait in sophistication container */}
          <motion.div 
            initial={{ opacity: 0, transform: 'scale(0.95)', clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, transform: 'scale(1)', clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            style={{ willChange: 'transform, clip-path' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="bg-muted-surface p-2 rounded-[3rem] border border-foreground/5 shadow-2xl shadow-primary/5 w-full max-w-[240px] sm:max-w-[300px] md:max-w-[480px]">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.8rem] border border-foreground/10 bg-black">
                <img 
                  src={profileImg} 
                  alt="Portrait of Nakorn"
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[1.05] contrast-[1.02] hover:scale-105 transition-transform duration-1000 ease-vanguard"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Left: Meta Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-20 flex flex-col gap-1"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] text-foreground font-bold uppercase">Nakorn Boonprasong</span>
          <span className="font-sans italic text-[11px] text-foreground tracking-tight">AI/ML Architect — Japan/Int</span>
        </motion.div>

      </div>
    </section>
  );
};
