import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useMotionTemplate } from 'framer-motion';
import proteinImg from '../assets/protein.png';
import esmImg from '../assets/distilESM-2-AMP.png';
import keycapImg from '../assets/keycap.png';

const projects = [
  {
    id: '01',
    category: 'Bioinformatics & AI',
    title: 'DistilESM-2-AMP',
    description: 'Pioneering research in generative models for high-fidelity style transfer and latent manifold navigation. This project explores the intersection of biological pattern recognition and synthetic intelligence, creating a bridge between organic and digital aesthetics.',
    tags: ['PyTorch', 'GANs', 'StyleTransfer', 'Research'],
    image: esmImg
  },
  {
    id: '02',
    category: 'AI & ML System',
    title: 'JobPulse',
    description: 'Developing robust predictive architectures for high-frequency market analysis and volatility modeling. By leveraging transformer-based models and attention mechanisms, we achieved unprecedented accuracy in predicting non-linear market shifts.',
    tags: ['RAG', 'Airflow', 'LLM', 'ML System', 'Vector Database'],
    image: proteinImg
  },
];

const ProjectCard = ({ 
  i, 
  project, 
  progress, 
  range, 
  targetScale 
}: { 
  i: number, 
  project: typeof projects[0], 
  progress: MotionValue<number>, 
  range: number[], 
  targetScale: number 
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale], {
    ease: (v) => 1 - Math.pow(1 - v, 4)
  });
  const transform = useMotionTemplate`scale(${scale})`;

  return (
    <div ref={container} className="h-[80vh] flex items-center justify-center sticky top-16 md:top-20 px-4">
      <motion.div 
        style={{ 
          transform, 
          top: `${i * 28}px`,
          willChange: 'transform'
        }} 
        className="relative w-full h-full bg-[#0C0C0C] rounded-[3rem] md:rounded-[4rem] border border-white/10 p-8 md:p-12 lg:p-16 pb-20 md:pb-24 lg:pb-32 flex flex-col md:flex-row gap-12 overflow-hidden shadow-2xl"
      >
        {/* Background Decorative ID */}
        <span className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-[35vw] md:text-[25vw] font-bold text-white/[0.08] md:text-white/[0.05] select-none pointer-events-none leading-none">
          {project.id}
        </span>

        {/* Left Column: Content */}
        <div className="relative z-10 flex flex-col flex-1 gap-8 md:gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{project.category}</span>
              <div className="h-px w-12 bg-white/20" />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tighter leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/40 font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pb-10 md:pb-0">
            <button className="w-fit px-8 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 tactile-press">
              Live Project
            </button>
          </div>
        </div>

        {/* Right Column: Image (Optional) */}
        {project.image && (
          <div className="relative flex-1 h-full min-h-[240px] md:min-h-0 hidden md:block">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02]">
              <img 
                src={project.image} 
                loading="lazy" 
                className="w-full h-full object-cover transition-all duration-1000 ease-out-expo scale-105 hover:scale-100" 
                alt={project.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      ref={container} 
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-0 pb-[30vh]" 
      id="projects"
    >
      <div className="max-w-[1400px] mx-auto pt-24 md:pt-32">
        <header className="mb-20 px-4 md:px-12 lg:px-20 flex flex-col">
          <span className="eyebrow-pill text-primary border-primary/20 bg-primary/5">Masterworks</span>
          <h2 className="display-lg text-white">
            Projects
          </h2>
        </header>

        <div className="flex flex-col gap-0">
          {projects.map((project, index) => {
            const targetScale = 1 - ( (projects.length - 1 - index) * 0.03 );
            return (
              <ProjectCard 
                key={project.id} 
                i={index} 
                project={project} 
                progress={scrollYProgress} 
                range={[index * 0.25, 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
