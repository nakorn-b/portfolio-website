import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, type Variants } from 'framer-motion';
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

const ChromaticHeading = ({ children, progress }: { children: React.ReactNode, progress: any }) => {
  const offset = useTransform(progress, [0, 0.5], [0, 15]);
  const opacity = useTransform(progress, [0, 0.2], [0, 1]);
  
  const redOffset = useMotionTemplate`${offset}px`;
  const blueOffset = useMotionTemplate`-${offset}px`;

  return (
    <div className="relative">
      {/* Red Layer */}
      <motion.div 
        style={{ x: redOffset, opacity, filter: 'blur(1px)' }}
        className="absolute inset-0 text-primary mix-blend-screen pointer-events-none select-none z-0"
      >
        {children}
      </motion.div>
      
      {/* Blue Layer */}
      <motion.div 
        style={{ x: blueOffset, opacity, filter: 'blur(1px)' }}
        className="absolute inset-0 text-[#0000ff] mix-blend-screen pointer-events-none select-none z-0"
      >
        {children}
      </motion.div>

      {/* Base Layer */}
      <div className="relative z-10 text-white">
        {children}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px) or (hover: none)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Lens Effect transforms
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.5], ["2rem", "10rem"]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, transform: 'translateY(20px)' },
    show: { 
      opacity: 1, 
      transform: 'translateY(0px)',
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-[150dvh] flex flex-col items-center bg-[#000000] overflow-hidden px-4 md:px-6 py-12 md:py-20">
      
      {/* Sticky Content Layer */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center">
        
        {/* Top: Typography Stack */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-20 w-full max-w-[1400px] flex flex-col items-center text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-caslon font-semibold text-[10vw] md:text-[6vw] leading-[0.9] md:leading-[0.85] tracking-tighter uppercase flex flex-col md:block items-center"
          >
            <ChromaticHeading progress={scrollYProgress}>
              <span className="block md:inline">Nakorn</span> <span className="italic font-light block md:inline">Boonprasong</span>
            </ChromaticHeading>
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

        {/* Center: Interactive Keycap Video (The Lens) */}
        <motion.div
          initial={{ opacity: 0, transform: 'scale(0.95)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex flex-col items-center mt-12"
        >
          <div 
            {...(isMobile ? {} : {
              string: "magnetic",
              "string-radius": "800",
              "string-strength": "0.15"
            } as any)}
            style={{ 
              transform: isMobile ? 'none' : 'translate(calc(var(--magnetic-x) * 0.3%), calc(var(--magnetic-y) * 0.3%)) rotateX(calc(var(--magnetic-y) * -0.3deg)) rotateY(calc(var(--magnetic-x) * 0.3deg))',
              willChange: 'transform',
            }}
            className="relative"
          >
            <motion.div 
              style={{ 
                scale: videoScale, 
                borderRadius: videoRadius,
                rotateZ: videoRotate,
                willChange: 'transform, border-radius'
              }}
              className="relative w-[260px] h-[280px] md:w-[480px] md:h-[480px] group overflow-hidden"
            >
              <div className="w-full h-full">
                <HeroVideo />
              </div>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
