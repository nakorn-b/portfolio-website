import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import ClickSpark from './components/ui/click-spark';

function App() {
  return (
    <ClickSpark sparkColor='#B12B16'>
      <div className="bg-background text-foreground selection:bg-primary selection:text-white">
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </ClickSpark>
  );
}

export default App;
