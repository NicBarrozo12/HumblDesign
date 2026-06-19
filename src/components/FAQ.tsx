import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "How fast do we actually start?",
      a: "Same day you're ready. First version in 72 hours."
    },
    {
      q: "What exactly do I get?",
      a: "Strategy, full design, and a live build. Copy structure included."
    },
    {
      q: "Do you use templates?",
      a: "No. Everything is custom-built for your brand."
    },
    {
      q: "Who am I working with?",
      a: "Me directly. No project managers or handoffs."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white p-2">
                {faq.q}
                <ChevronDown className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 px-2 text-slate-400 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
