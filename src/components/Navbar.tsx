import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Editorial Island Nav */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] md:w-max max-w-[1400px]"
      >
        <nav className="bg-white/80 backdrop-blur-lg border border-foreground/5 rounded-full px-6 md:px-10 py-4 flex items-center justify-between md:justify-start gap-12 shadow-xl shadow-primary/5">
          <a href="/" className="font-sans font-bold text-2xl tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer">
            NEMO
          </a>
          
          <div className="hidden md:flex gap-10 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                className="text-foreground/40 hover:text-foreground transition-colors font-sans text-[11px] font-bold uppercase tracking-[0.2em] tactile-press px-2 py-1" 
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50 tactile-press"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-foreground rounded-full transition-transform origin-center" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-foreground rounded-full" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-foreground rounded-full transition-transform origin-center" 
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-background/90 backdrop-blur-xl flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col gap-12 text-center">
              {menuItems.map((item, i) => (
                <motion.a
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-sans font-bold text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
