export function Testimonials() {
  const testimonials = [
    {
      quote: "The speed is unmatched. We got a complete redesign of our pricing page in just 4 days, and conversions jumped 30%.",
      author: "Sarah Jenkins",
      role: "CEO, DataFlow AI"
    },
    {
      quote: "They actually understand SaaS UX. The resulting dashboard was clean, intuitive, and required zero handholding from our eng team.",
      author: "Marcus Chen",
      role: "Founder, SyncTech"
    },
    {
      quote: "Excellent communication throughout. I knew exactly what was happening every day. Highly recommend for any early-stage startup.",
      author: "Elena Rodriguez",
      role: "Head of Marketing, FinNest"
    },
    {
      quote: "Finally, an agency that doesn't waste 3 weeks on 'discovery'. They looked at the product, told us what was wrong, and fixed it.",
      author: "James Wilson",
      role: "VP Product, ScaleUp"
    },
    {
      quote: "The free audit video was brutally honest and exactly what we needed to hear. The full build was even better.",
      author: "Priya Patel",
      role: "Co-founder, HealthMetrics"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-900/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:w-2/3">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Don't just take my word for it.
          </h2>
          <p className="text-lg text-slate-400">
            Founders love the speed and the lack of agency BS.
          </p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-slate-300 transition-colors hover:bg-white/[0.04]">
              <p className="mb-6 text-lg leading-relaxed text-slate-200">"{t.quote}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mr-4"></div>
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
