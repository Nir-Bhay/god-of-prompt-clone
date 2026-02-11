import React from 'react';

const bundles = [
  { id: 1, title: "Text AI Prompt Bundle", value: "$700 Value", desc: "10,000+ premium AI prompts for ChatGPT, Claude, and Gemini." },
  { id: 2, title: "Image Prompt Bundle", value: "$500 Value", desc: "Expertly curated Midjourney Prompts for stunning visuals." },
  { id: 3, title: "ChatGPT Instructions Pack", value: "$100 Value", desc: "Twelve unique ChatGPT commands for task automation." },
  { id: 4, title: "Custom GPTs Toolkit", value: "$350 Value", desc: "100+ mega-instructions to build your own custom AI assistants." },
  { id: 5, title: "AI Tools Directory", value: "$100 Value", desc: "5,000+ top AI tools filtered by category and rating." },
  { id: 6, title: "Prompt Engineering Guide", value: "$200 Value", desc: "Master the art of prompting with 25 key principles." },
  { id: 7, title: "Midjourney Mastery Guide", value: "$100 Value", desc: "Step-by-step guide to creating product mockups and logos." },
  { id: 8, title: "Claude Mastery Guide", value: "$200 Value", desc: "Become a power user of Anthropic's Claude model." },
  { id: 9, title: "Gemini Mastery Guide", value: "$150 Value", desc: "Unlock the full potential of Google's Gemini AI." },
  { id: 10, title: "AI Agents Mastery Guide", value: "$100 Value", desc: "Learn how to build and deploy autonomous AI agents." },
  { id: 11, title: "Custom Prompt Generator", value: "$400 Value", desc: "Get detailed mega-prompts tailored to your specific goals." },
  { id: 12, title: "n8n Automations Bundle", value: "$700 Value", desc: "10+ pre-built workflows to automate your small business." }
];

const BundlesGrid = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">One Bundle. Infinite Superpowers.</h2>
          <p className="text-gray-400 text-lg">Access 30,000+ prompts to automate, create, and scale effortlessly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="group relative bg-brand-card p-8 rounded-3xl border border-white/5 hover:border-brand-gold/30 transition-all cursor-default">
              <div className="absolute top-6 right-8 text-brand-gold font-bold text-sm tracking-tight bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                {bundle.value}
              </div>
              <div className="mb-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-transparent flex items-center justify-center text-brand-gold font-bold text-xl border border-brand-gold/10">
                {bundle.id}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors">{bundle.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {bundle.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-xs font-bold uppercase tracking-widest text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesGrid;
