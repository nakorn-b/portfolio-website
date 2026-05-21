import React from 'react';
import { motion } from 'framer-motion';
import sonyLogo from '../assets/sony.png';
import ritsumeikanLogo from '../assets/ritsumeikan.png';

export const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2026 - Present',
      role: 'Data Scientist',
      company: 'Sony Device Technology, Thailand',
      logo: sonyLogo,
      points: [
        
      ]
    },
    {
      period: '2025',
      role: 'Research Intern',
      company: 'Ritsumeikan University, Japan',
      logo: ritsumeikanLogo,
      points: [
        'Developed experimental LLM-based systems for interactive narrative generation using GPT-4o mini, focusing on prompt engineering and output quality assessment to support ongoing master\'s thesis research on interactive storytelling frameworks.'
      ]
    },
  ];

  return (
    <section className="section-spacing bg-background px-6 overflow-hidden border-y border-foreground/5" id="experience">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 md:mb-24 flex flex-col"
        >
          <span className="eyebrow-pill text-primary border-primary/20 bg-primary/5">Chronology</span>
          <h2 className="display-lg text-foreground">Experience</h2>
        </motion.div>

        <div className="relative flex flex-col gap-10 md:gap-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-[calc(25%-1.5rem)] top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.role}
              initial={{ opacity: 0, transform: i % 2 === 0 ? 'translateX(-40px)' : 'translateX(40px)' }}
              whileInView={{ opacity: 1, transform: 'translateX(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              style={{ willChange: 'transform' }}
              className={`grid md:grid-cols-12 gap-6 md:gap-8 items-start relative`}
            >
              {/* Desktop Timeline Dot */}
              <div className="absolute left-[calc(25%-1.5rem)] top-6 w-2 h-2 rounded-full bg-primary -translate-x-1/2 hidden md:block z-10 border-4 border-background" />

              {/* Desktop Period Tag */}
              <div className="hidden md:flex md:col-span-3 pt-4 justify-end pr-8">
                <span className="font-sans text-[10px] tracking-[0.3em] text-primary font-bold uppercase">{exp.period}</span>
              </div>

              <div className="md:col-span-9">
                <div className="bg-muted-surface p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-foreground/5 relative overflow-hidden group transition-vanguard hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="flex flex-col gap-2 relative">
                      {exp.logo && (
                        <div className="flex md:absolute md:right-0 md:top-0 mb-4 md:mb-0">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="h-8 sm:h-10 md:h-14 w-auto object-contain transition-all duration-700 pointer-events-none rounded-lg md:rounded-xl group-hover:scale-110 group-hover:brightness-110"
                          />
                        </div>
                      )}
                      <span className="md:hidden font-sans text-[10px] tracking-[0.3em] text-primary font-bold uppercase mb-2 block w-fit border-b border-primary/20 pb-1">{exp.period}</span>
                      <h3 className="font-sans text-2xl sm:text-3xl font-bold text-foreground tracking-tight md:pr-16">{exp.role}</h3>
                      <p className="font-sans text-lg sm:text-xl text-foreground/40 italic">{exp.company}</p>
                    </div>

                    <ul className="flex flex-col gap-4 sm:gap-6">
                      {exp.points.map((point, pi) => (
                        <li key={pi} className="flex gap-4 sm:gap-6 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0 transition-transform duration-300 group-hover/item:scale-125" />
                          <p className="font-sans text-base sm:text-lg text-foreground/70 leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
