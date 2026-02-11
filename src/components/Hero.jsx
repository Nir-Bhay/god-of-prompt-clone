import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-gray-800" />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-400">
            <span className="text-brand-gold">4.9</span> Trusted by 20K+ Entrepreneurs
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          5915+ business owners turned <span className="text-brand-gold">prompts into profits.</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          They cut hours of work, landed more clients, and some finally quit their 9-5s.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-brand-gold text-black font-bold rounded-full text-lg hover:scale-105 transition-transform w-full sm:w-auto">
            Get The Complete Bundle
          </button>
          <p className="text-sm text-gray-500 italic">Join 17,060+ satisfied customers</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
