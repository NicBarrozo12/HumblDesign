import { AlertCircle, Clock, FileWarning, TrendingDown } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: <TrendingDown className="h-6 w-6 text-red-400" />,
      text: "You're running ads to a page converting at 1%. Every click bounces."
    },
    {
      icon: <FileWarning className="h-6 w-6 text-orange-400" />,
      text: "Visitors land, scroll once, and leave. They don't understand your value."
    },
    {
      icon: <Clock className="h-6 w-6 text-slate-400" />,
      text: "You hired an agency 3 months ago. The design file is still pending."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-yellow-400" />,
      text: "Your product is live, but the website still looks like a rushed V1."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-900/40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:w-2/3">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Most common problems that show up on every audit.
          </h2>
          <p className="text-lg text-slate-400">
            I've audited over 50+ pages for funded startups. The same four issues keep appearing:
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((prob, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                {prob.icon}
              </div>
              <p className="text-lg font-medium text-slate-300 leading-relaxed">
                {prob.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
