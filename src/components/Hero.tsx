import React from 'react';
import { motion } from 'framer-motion';
import keycapVid from '../assets/3D-keycap.mp4';

const HeroVideo: React.FC = () => {
  return (
    <video 
      autoPlay 
      muted 
      loop
      playsInline 
      className="w-full h-full object-cover"
    >
      <source src={keycapVid} type="video/mp4" />
    </video>
  );
};

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, transform: 'translateY(20px)' },
    show: { 
      opacity: 1, 
      transform: 'translateY(0px)',
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-[#000000] overflow-hidden px-4 md:px-6 py-12 md:py-20">
      
      {/* Top: Typography Stack */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 w-full max-w-[1400px] flex flex-col items-center text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-caslon font-semibold text-white text-[12vw] md:text-[6vw] leading-[0.85] tracking-tighter uppercase flex flex-col md:block items-center"
        >
          <span>Nakorn</span>
          <span className="italic font-light">Boonprasong</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-1 mt-6">
          <div className="flex items-center gap-3">
             <span className="font-sans text-sm md:text-base text-white/30 tracking-[0.2em] font-bold">(α)</span>
             <span className="font-sans text-base md:text-xl text-white font-medium tracking-tight">Architecting Neural Foundations</span>
          </div>
          <div className="flex items-center gap-3">
             <span className="font-sans text-sm md:text-base text-white/30 tracking-[0.2em] font-bold">(β)</span>
             <span className="font-sans text-base md:text-xl text-white font-medium tracking-tight">Orchestrating ML Systems</span>
          </div>
          <div className="flex items-center gap-3">
             <span className="font-sans text-sm md:text-base text-white/30 tracking-[0.2em] font-bold">(γ)</span>
             <span className="font-sans text-base md:text-xl text-white font-medium tracking-tight">Deep Research</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Center: Interactive Keycap Video */}
      <motion.div
        initial={{ opacity: 0, transform: 'scale(0.95)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 flex flex-col items-center mt-12"
      >
        <div 
          string="magnetic"
          string-radius="800"
          string-strength="0.1"
          style={{
            transform: 'translate(calc(var(--magnetic-x) * 0.5%), calc(var(--magnetic-y) * 0.5%)) rotateX(calc(var(--magnetic-y) * -0.5deg)) rotateY(calc(var(--magnetic-x) * 0.5deg))',
            willChange: 'transform',
          }}
          className="relative w-[260px] h-[280px] md:w-[480px] md:h-[480px] group rounded-[2rem] overflow-hidden"
        >
          <HeroVideo />
        </div>

        {/* Abstract floating text under video */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="max-w-md text-center font-sans text-[10px] md:text-xs text-white leading-relaxed mt-4 px-8"
        >
          Pioneering high-fidelity neural architectures, focusing on structural integrity and textural nuance. Engineering the next epoch of intelligence.
        </motion.p>
      </motion.div>

    </section>
  );
};
