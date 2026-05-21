import { StringTune, StringMagnetic, StringImpulse } from '@fiddle-digital/string-tune';

export const initStringTune = () => {
  if (typeof window === 'undefined') return;

  const init = () => {
    // Check if it's a touch device (no hover capability)
    if (window.matchMedia('(hover: none)').matches) {
      console.log('📱 StringTune: Touch device detected, skipping for performance.');
      return;
    }

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

      // Register modules
      st.use(StringMagnetic);
      st.use(StringImpulse);
      console.log('📦 StringTune: Modules registered');

      // Start the engine
      st.start(60);
      
      // Explicitly disable any scroll event interference
      if ((st as any).scrollManager) {
        // (st as any).scrollManager.stop();
        // if ((st as any).scrollManager.activeController) {
        //   (st as any).scrollManager.activeController.disableScrollEvents();
        // }
        // console.log('🚫 StringTune: Scroll management completely stopped');
      }
      const scan = () => {
        const elements = document.querySelectorAll('[string="magnetic"], [string="impulse"]');
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
