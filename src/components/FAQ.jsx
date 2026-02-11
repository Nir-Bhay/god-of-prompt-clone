import React, { useState } from 'react';

const faqs = [
  {
    question: "What is The Complete AI Bundle?",
    answer: "Complete AI Bundle includes 30,000+ advanced AI Prompts for ChatGPT, Grok, Claude, Gemini & Midjourney AI. Additionally, you get all add-ons: n8n automations, custom GPTs toolkit, and more."
  },
  {
    question: "What can I do with The Complete AI Bundle?",
    answer: "You can automate business tasks, generate blog posts, create visuals, social media content, and business plans. It's a comprehensive toolkit to scale your productivity effortlessly."
  },
  {
    question: "Why should I pay for prompts when free ones are online?",
    answer: "Free doesn't mean good. We craft our prompts with expert prompt engineering practices to ensure highly personalized, high-quality outputs tailored to business needs."
  },
  {
    question: "Does the bundle include regular updates?",
    answer: "Yes, the bundle is continuously expanded to include new prompts, tools, and resources as AI technology evolves. You get lifetime access to all future updates."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-brand-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-500 font-medium">Have questions? We've got you!</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-brand-card rounded-2xl border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white/90">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
