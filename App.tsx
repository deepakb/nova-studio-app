
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Manifesto from './components/Manifesto';
import ClientProof from './components/ClientProof';
import Team from './components/Team';
import ProcessTimeline from './components/ProcessTimeline';
import Contact from './components/Contact';

const App: React.FC = () => {
  
  // Initialize Smooth Scroll or Global GSAP settings if needed
  useEffect(() => {
    // Force scroll to top on reload
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <main className="w-full relative bg-brutal-bg min-h-screen selection:bg-brutal-green selection:text-black overflow-x-hidden">
      {/* Minimalist Floating Nav - Mobile Optimized */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
        <div className="font-display font-bold text-xl md:text-2xl tracking-tighter pointer-events-auto cursor-pointer hover:text-brutal-green transition-colors">
          NOVA STUDIO©
        </div>
        <a href="#contact" className="pointer-events-auto border border-white/20 bg-black/50 backdrop-blur-md px-4 md:px-6 py-2 rounded-none hover:bg-brutal-green hover:text-black hover:border-transparent transition-all font-mono text-xs md:text-sm uppercase tracking-widest">
          Start Project
        </a>
      </nav>

      <Hero />
      <Manifesto />
      <ProjectGrid />
      <ProcessTimeline />
      <ClientProof />
      <Team />
      <Contact />
      
      {/* Footer Fix:
          pb-24 applies to mobile default.
          md:pb-24 applies to tablet (fixing the visibility issue).
          lg:pb-12 applies only to large desktops.
      */}
      <footer className="bg-brutal-green text-black py-12 pb-24 md:pb-32 lg:pb-12 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter mb-8">
            NOVA<br/>STUDIO
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-black pt-6">
            <div className="font-mono text-sm mb-6 md:mb-0">
              © 2024 ANTI-DESIGN SYSTEMS<br/>
              SAN FRANCISCO / TOKYO
            </div>
            <div className="flex gap-4 md:gap-8 font-bold text-sm md:text-lg uppercase tracking-wide w-full md:w-auto justify-between md:justify-end">
              <a href="#" className="hover:underline decoration-2 underline-offset-4">Instagram</a>
              <a href="#" className="hover:underline decoration-2 underline-offset-4">Twitter</a>
              <a href="#" className="hover:underline decoration-2 underline-offset-4">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;