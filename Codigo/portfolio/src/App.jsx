import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Music from './components/Music';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="relative font-sans min-h-screen selection:bg-neon-cyan/30 selection:text-white text-slate-200">
      
      {/* 🌌 FUNDO GLOBAL FIXO (Aceternity Grid) 🌌 */}
      {/* Este container fica travado no fundo (z-0) e não interfere nos cliques (pointer-events-none) */}
      <div className="fixed inset-0 z-0 bg-cosmic-dark pointer-events-none">
        
        {/* A Grade Cibernética */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_32px]"></div>
        
        {/* Máscara radial para a grade sumir nas bordas e dar uma sensação de profundidade/holofote */}
        <div className="absolute inset-0 bg-cosmic-dark [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)]"></div>
        
      </div>

      {/* 🚀 CONTEÚDO DO SITE (z-10) rolando suavemente por cima do fundo 🚀 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        
        <main className="flex-grow">
          <Hero language={language} />
          <About language={language} />
          <Projects language={language} />
          <Experience language={language} />
          <Music language={language} />
          <Contact language={language} />
        </main>
        
        <Footer />
      </div>

    </div>
  );
}

export default App;