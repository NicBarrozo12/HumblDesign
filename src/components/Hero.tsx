import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
          Websites for Fintech, AI, & SaaS
        </div>
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-7xl leading-[1.1]">
          Your landing page is costing you signups. <br className="hidden md:block" />
          <span className="text-slate-400">I will fix it in 14 days.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
          You only get one shot with every visitor. I partner with B2B SaaS and AI founders to identify conversion killers and rebuild your site properly.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 text-center">
          <button className="flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-colors hover:bg-slate-200 sm:w-auto">
            Fix My Landing Page
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          First visuals in 72 hours • Full build in 2 weeks
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 border-y border-white/5 py-8 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            Trusted by 50+ founders
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            72 hrs to first visuals
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            $20M+ raised by clients
          </div>
        </div>
      </div>
    </section>
  );
}
