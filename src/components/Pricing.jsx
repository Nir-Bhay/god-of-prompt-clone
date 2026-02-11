import React, { useState } from 'react';

const Pricing = () => {
  const [isLifetime, setIsLifetime] = useState(false);

  return (
    <section className="py-24 px-6 bg-brand-dark/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">One Bundle. Infinite Superpowers.</h2>
        <p className="text-gray-400 mb-12">Get full access the way you prefer, flexible monthly or one-time lifetime.</p>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold ${!isLifetime ? 'text-brand-gold' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsLifetime(!isLifetime)}
            className="w-14 h-7 bg-brand-card rounded-full p-1 relative border border-white/10"
          >
            <div className={`w-5 h-5 bg-brand-gold rounded-full transition-all duration-300 ${isLifetime ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-bold ${isLifetime ? 'text-brand-gold' : 'text-gray-500'}`}>Lifetime</span>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-brand-card rounded-[40px] p-10 border border-brand-gold/30 shadow-[0_0_50px_-12px_rgba(255,215,0,0.15)] relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            Best Value
          </div>
          
          <p className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2">Premium</p>
          <h3 className="text-2xl font-bold mb-6">Complete AI Bundle</h3>
          
          <div className="flex items-baseline justify-center gap-1 mb-10">
            <span className="text-5xl font-black">${isLifetime ? '197' : '25'}</span>
            <span className="text-gray-500 font-medium">{isLifetime ? '' : '/month'}</span>
          </div>

          <ul className="text-left space-y-4 mb-10">
            {[
              "30K+ text & image AI prompts",
              "All premium AI prompts in one",
              "All add-ons included",
              "Weekly updates",
              "Access in Prompt Library & Notion"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full py-4 bg-brand-gold text-black font-black rounded-2xl hover:scale-[1.02] transition-transform mb-4 shadow-lg shadow-brand-gold/20">
            Get Instant Access
          </button>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">7-Day Risk-Free Guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
