import React from 'react';
import { motion } from 'framer-motion';

const contentItems = [
  {
    id: '01',
    title: 'About',
    subtitle: 'Core Philosophy',
    meta: 'Principal AI/ML Architect',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2670&auto=format&fit=crop',
    href: '#about',
    span: 'md:col-span-8 md:row-span-2'
  },
  {
    id: '02',
    title: 'Projects',
    subtitle: 'Masterworks 2022-2024',
    meta: 'Projects',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    href: '#projects',
    span: 'md:col-span-4 md:row-span-1'
  },
  {
    id: '03',
    title: 'Skills',
    subtitle: 'Architecture & Scale',
    meta: 'Technical Intelligence',
    image: 'https://images.unsplash.com/photo-1451187534559-997a76156b4d?q=80&w=2670&auto=format&fit=crop',
    href: '#skills',
    span: 'md:col-span-4 md:row-span-1'
  },
  {
    id: '04',
    title: 'Resume',
    subtitle: 'Professional Log',
    meta: 'Executive Summary',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop',
    href: '#',
    span: 'md:col-span-12 md:row-span-1'
  }
];

export const FeaturedArtifacts: React.FC = () => {
  return (
    <section className="section-spacing bg-background px-6 overflow-hidden relative" id="content">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col mb-20">
          <span className="eyebrow-pill text-primary border-primary/20 bg-primary/5">Directory</span>
          <h2 className="display-lg text-foreground">System <br /> <span className="text-primary/80 italic">Architecture</span></h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {contentItems.map((item, i) => (
            <motion.a 
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, transform: 'translateY(30px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.32, 0.72, 0, 1] }}
              viewport={{ once: true }}
              style={{ willChange: 'transform' }}
              className={`group flex flex-col ${item.span} relative tactile-press`}
            >
              <div className="double-bezel-outer h-full flex flex-col transition-all duration-700 group-hover:scale-[0.99] group-active:scale-[0.97]">
                <div className="double-bezel-inner h-full flex flex-col p-0 overflow-hidden relative">
                  
                  {/* Background Image with Hover Effect */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                      whileHover={{ transform: 'scale(1.1)', filter: 'grayscale(0) brightness(0.6)' }}
                      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                      className="w-full h-full object-cover brightness-[0.5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 flex flex-col h-full p-10 justify-between">
                    <div className="flex justify-between items-start">
                      <span className="font-sans text-xs font-medium tracking-widest text-white/40 uppercase">{item.id}</span>
                      <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-45">
                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="font-sans text-xs font-medium tracking-[0.2em] text-primary uppercase">{item.meta}</span>
                      <h3 className="font-caslon text-4xl font-semibold text-white tracking-tight">{item.title}</h3>
                      <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs">{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Glass Border Hover Effect */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-700 rounded-[calc(2.5rem-0.375rem)] pointer-events-none" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
