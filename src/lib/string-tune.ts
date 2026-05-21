import { StringTune, StringMagnetic } from '@fiddle-digital/string-tune';

export const initStringTune = () => {
  if (typeof window === 'undefined') return;

  const init = () => {
    console.log('🚀 StringTune: Attempting initialization...');
    
    try {
      const st = StringTune.getInstance();
      
      if (!st) {
        console.error('❌ StringTune: Failed to get instance');
        return;
      }

      // Configure global settings
      st.setupSettings({
        'magnetic-strength': 1.0,
        'magnetic-radius': 300,
        'magnetic-lerp': 0.15
      });

      // Register module
      st.use(StringMagnetic);
      console.log('📦 StringTune: Magnetic module registered');

      // Start the engine
      st.start(60);
      
      // Explicitly disable any scroll event interference
      if ((st as any).scrollManager) {
        (st as any).scrollManager.stop();
        if ((st as any).scrollManager.activeController) {
          (st as any).scrollManager.activeController.disableScrollEvents();
        }
        console.log('🚫 StringTune: Scroll management completely stopped');
      }
      const scan = () => {
        const elements = document.querySelectorAll('[data-string="magnetic"], [string="magnetic"]');
        console.log(`🔍 StringTune: Found ${elements.length} elements to register`);
        
        elements.forEach((el) => {
          // Check if already registered to avoid duplicates
          if (!(el as any)._stringTuneRegistered) {
            (st as any).objectManager.add(el);
            (el as any)._stringTuneRegistered = true;
          }
        });
        
        st.onResize(true);
      };

      // Run scan with increasing delays to catch React mount cycles
      [0, 100, 500, 1000, 2000, 5000].forEach(delay => setTimeout(scan, delay));

      (window as any).stringTune = st;
      console.log('💎 StringTune: System fully started');

    } catch (error) {
      console.error('❌ StringTune: Initialization error', error);
    }
  };

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }
};
