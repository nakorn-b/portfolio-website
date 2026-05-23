import React from 'react';
import { motion, type Variants } from 'framer-motion';

export const Skills: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    show: { 
      opacity: 1, 
      transform: 'translateY(0px)', 
      transition: { duration: 1, ease: [0.32, 0.72, 0, 1] }
    }
  };

  const skillGroups = [
    {
      title: 'ML Frameworks',
      skills: ['PyTorch', 'Keras', 'Hugging Face🤗', 'Scikit-learn', 'MLflow']
    },
    {
      title: 'Data Stack',
      skills: ['PostgreSQL', 'PySpark', 'Airflow', 'BigQuery', 'Qdrant']
    },
    {
      title: 'Tools & Other Frameworks',
      skills: ['Docker', 'Git / GitHub', 'Vercel', 'FastAPI', 'Postman', 'Streamlit']
    }
  ];

  return (
    <section className="section-spacing bg-background px-4 md:px-6 overflow-hidden" id="skills">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="mb-24 flex flex-col"
        >
          <span className="eyebrow-pill text-primary border-primary/20 bg-primary/5">Stack</span>
          <h2 className="display-lg text-foreground">Technical <br /> <span className="text-primary italic font-light">Skills</span></h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div 
              key={group.title} 
              variants={item} 
              style={{ willChange: 'transform' }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm"
            >
              <div className="bg-muted-surface p-1.5 rounded-[2.8rem] border border-foreground/5 h-full transition-vanguard hover:shadow-xl hover:shadow-primary/5">
                <div className="bg-background h-full p-10 flex flex-col gap-10 group cursor-default rounded-[2.5rem] border border-foreground/5">
                  <h4 className="font-sans text-[10px] tracking-[0.3em] text-primary font-bold uppercase border-b border-foreground/5 pb-6">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-6">
                    {group.skills.map((skill) => (
                      <li key={skill} className="font-sans text-lg text-foreground/60 flex items-center gap-4 transition-all duration-300 group-hover:text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary transition-all duration-500 group-hover:scale-125" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
