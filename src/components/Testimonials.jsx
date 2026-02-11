import React from 'react';

const testimonials = [
  {
    name: "Misel",
    handle: "@MiselGPT",
    content: "Huge value for the money! Subscribed 10+ months ago and never really questioned my decision.",
    date: "May 10, 2025"
  },
  {
    name: "MJ Miller",
    handle: "@Persist_Change",
    content: "Your bundle is mind bending. So good. I’m leaving for Costa Rica next week and have 2 days set aside to just dive in.",
    date: "Feb 04, 2026"
  },
  {
    name: "Ihtesham Haider",
    handle: "@ihteshamit",
    content: "This is the only prompt library you need. These prompts have helped me finish tasks I've been putting off for months.",
    date: "Sep 17, 2025"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-white/90">
          17,060+ satisfied customers love our services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-brand-card p-8 rounded-3xl border border-white/5 hover:border-brand-gold/20 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.handle}</p>
                </div>
                <div className="text-brand-gold">
                  {/* Star Icons */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4 italic">"{item.content}"</p>
              <p className="text-xs text-gray-600 font-medium">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
