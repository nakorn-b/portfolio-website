import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue, useMotionTemplate } from 'framer-motion';
import jobpulseImg from '../assets/jobppulse.png';
import esmImg from '../assets/distilESM-2-AMP.png';

const projects = [
  {
    id: '01',
    category: 'Bioinformatics & AI',
    title: 'DistilESM-2-AMP',
    description: 'Pioneering computational efficiency in bioinformatics, this project centered on distilling the massive ESM-2 transformer into a specialized 4M parameter student model. The process began by filtering 8 million UniProt sequences using PySpark, feeding a high-throughput training pipeline on a SLURM-managed GPU cluster. Through precise knowledge distillation and fine-tuning on curated AMP datasets, the student model eventually surpassed its teacher’s accuracy in domain-specific classification. The project culminated in a production-ready deployment on GCP Cloud Run and HuggingFace, serving batch peptide classification with real-time confidence scores.',
    tags: ['PyTorch', 'PySpark', 'GCP', 'Knowledge Distillation', 'Hugging Face'],
    image: esmImg,
    link: ""
    },
  {
    id: '02',
    category: 'AI & ML System',
    title: 'JobPulse',
    description: 'I built a RAG-powered chatbot for jobs query with market insight analysis chart. The pipeline starts from fetching API for job postings data, stores them in cloud datalake such as GCP bucket, then transform raw fetched data to BigQuery as a curated cloud data warehouse, then vectorize transformed data and store them to Qdrant for serving RAG query. I used Airflow to orchrestate whole pipeline to make everything running smoothly.',
    tags: ['RAG', 'Airflow', 'LLM', 'ML System', 'Vector Database'],
    image: jobpulseImg,
    link: "https://github.com/nakorn-b/jobpulse"
  },
];

const MagneticButton = ({ children, href }: { children: React.ReactNode, href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    // Skip magnetic effect on touch devices even if mouse-like events trigger
    if (window.matchMedia('(hover: none)').matches) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-fit"
    >
      <button 
        onClick={() => href && window.open(href, '_blank')}
        className="w-fit px-8 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 tactile-press relative group overflow-hidden"
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </button>
    </motion.div>
  );
};

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
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-caslon font-semibold text-white tracking-tight leading-tight">
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
            <MagneticButton href={project.link}>
              Live Project
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: Image (Standard Stacking) */}
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
