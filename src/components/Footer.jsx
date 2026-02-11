import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-left">
          <div className="text-2xl font-black tracking-tighter text-brand-gold uppercase italic mb-4">
            God Of Prompt
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            The world's largest library of premium AI prompts and automations for business growth.
          </p>
        </div>
        
        <div className="flex gap-10 text-sm font-bold text-gray-400">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Support</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-600 text-xs mb-2">Copyright © 2026 God of Prompt. All Rights Reserved.</p>
          <p className="text-brand-gold/50 text-[10px] uppercase tracking-widest font-black">
            Pixel-Perfect Clone by Rupa AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
