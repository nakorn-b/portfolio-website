import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import profileImg from '../assets/profile.png';
import AnimatedTextCycle from './ui/animated-text-cycle';

const WordReveal = ({ text, delay = 0, isMobile = false }: { text: string; delay?: number; isMobile?: boolean }) => {
  const words = text.split(' ');
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: isMobile ? 'none' : 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: isMobile ? 'none' : 'blur(8px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p 
      className="font-sans text-lg md:text-xl font-medium text-foreground/90 leading-relaxed flex flex-wrap gap-x-[0.3em]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} style={{ willChange: isMobile ? 'auto' : 'transform, opacity' }}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px) or (hover: none)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="section-spacing bg-background px-4 md:px-6 overflow-hidden relative border-b border-foreground/5" id="about">
      <div className="max-w-[1400px] mx-auto min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Left Column: Huge Title & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-10 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col"
            >
              <span className="eyebrow-pill text-primary border-primary/20 bg-primary/5">Background</span>
              <h2 className="text-[12vw] lg:text-[10vw] font-caslon font-bold text-primary leading-[0.85] tracking-tighter uppercase select-none">
                About <br /> <AnimatedTextCycle words={["Me", "Nemo", "Nakorn"]} interval={3000} />
              </h2>
            </motion.div>

            <div className="flex flex-col gap-8 max-w-xl">
              <WordReveal 
                text="Hello! I'm Nemo, a Computer Science graduate of Kasetsart University. I'm currently a Data Scientist based in Thailand with experience in LLM research. In my free time, I enjoy studying Japanese, deep diving to neural network architectures, and building AI projects." 
                delay={0.3}
                isMobile={isMobile}
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col gap-4"
              >
                <p className="font-sans text-sm md:text-base text-foreground/50 leading-relaxed italic border-l-2 border-primary/20 pl-6">
                  Deploy now, pray later.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Portrait without clipping path issues */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end py-10 lg:py-0"
          >
            {/* @ts-ignore - Custom attributes for string-tune library */}
            <div 
              {...(isMobile ? {} : {
                string: "magnetic",
                "string-radius": "600",
                "string-strength": "0.1"
              } as any)}
              style={{
                transform: isMobile ? 'none' : 'translate(calc(var(--magnetic-x) * 0.3%), calc(var(--magnetic-y) * 0.3%))',
                willChange: isMobile ? 'auto' : 'transform',
              }}
              className="bg-muted-surface p-2 rounded-[3rem] border border-foreground/5 shadow-2xl shadow-primary/5 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[480px] relative z-10"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2.8rem] border border-foreground/10 bg-black relative">
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
      </div>
    </section>
  );
};
