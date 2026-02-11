import React from 'react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-black">
      {/* Navigation Placeholder */}
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
        
        {/* Placeholder for next sections */}
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-10 italic">Bundles & Features arriving shortly...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
