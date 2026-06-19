import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-32 pb-12 px-6 text-center mt-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Landing pages that convert, <br className="hidden md:block" />
          <span className="text-slate-400">starting at $3K.</span>
        </h2>
        <p className="mx-auto mb-12 text-xl text-slate-400">
          From a broken landing page to live in 2 weeks.
        </p>
        <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-colors hover:bg-slate-200">
          Book an intro call
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      <div className="mt-32 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-sm text-slate-500 max-w-7xl mx-auto">
        <div>&copy; 2025 Aura Design. All rights reserved.</div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
