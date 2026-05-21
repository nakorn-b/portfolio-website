import React from 'react';
import { FlipLinks } from './ui/flip-links';
import ShaderDemo_ATC from './ui/atc-shader';

export const Contact: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] px-4 md:px-6 py-12 md:py-40 flex flex-col justify-between overflow-hidden bg-[#0C0C0C]" id="contact">
      <ShaderDemo_ATC />
      
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center text-center gap-16 relative z-10 flex-grow justify-center">
        
        <div className="flex flex-col gap-8">
          <h2 className="display-lg text-white">Contact <br /> <span className="italic font-light">me</span></h2>
        </div>

        <div className="my-16">
          <FlipLinks />
        </div>

      </div>

      {/* Legal / Bottom Bar integrated into Contact */}
      <div className="max-w-[1400px] mx-auto w-full pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="font-caslon text-2xl font-bold text-white tracking-tight">
          NEMO
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
          <div className="text-white/40 font-sans text-[9px] tracking-[0.2em] font-bold uppercase">
            © 2026 Nakorn Boonprasong. Crafted with precision.
          </div>
          <div className="text-white/20 font-caslon italic text-xs">
            Handcrafted with precision, ink, and neural weights.
          </div>
        </div>
      </div>
    </section>
  );
};
