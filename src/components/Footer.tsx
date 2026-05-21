import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0C0C] pt-32 pb-12 px-6 overflow-hidden relative border-t border-white/5">
      {/* Dark Footer */}
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col gap-8"
        >
          <h2 className="display-lg text-white">Contact <br /> <span className="text-primary italic font-light">me</span></h2>
        </motion.div>

        {/* Social Connections */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {[
            { name: 'Instagram', icon: 'auto_awesome' },
            { name: 'GitHub', icon: 'code' },
            { name: 'LinkedIn', icon: 'share' }
          ].map((social) => (
            <a 
              key={social.name}
              href="#"
              className="group flex flex-col items-center gap-4 text-white/60 hover:text-white transition-all duration-500"
              aria-label={social.name}
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white/10 group-hover:scale-110">
                <span className="material-symbols-outlined text-[24px]">{social.icon}</span>
              </div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]">{social.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Legal / Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="w-full pt-16 mt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="font-caslon text-2xl font-bold text-white tracking-tight">
            NEMO
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="text-white/40 font-sans text-[9px] tracking-[0.2em] font-bold uppercase">
              © 2026 Nakorn Boonprasong. Crafted with precision.
            </div>
            <div className="text-white/20 font-caslon italic text-xs">
              Handcrafted with precision, ink, and neural weights.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
      </div>
    </footer>
  );
};
