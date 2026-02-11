import React from 'react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import BundlesGrid from './components/BundlesGrid';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter text-brand-gold uppercase italic">
          God Of Prompt
        </div>
        <button className="text-sm font-bold px-5 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
          Log In
        </button>
      </nav>

      <main>
        <Hero />
        <Testimonials />
        <BundlesGrid />
        
        {/* Footer Placeholder */}
        <footer className="py-20 px-6 text-center border-t border-white/5">
          <p className="text-gray-600 text-sm">© 2026 God of Prompt. Pixel-perfect clone by Rupa AI.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
