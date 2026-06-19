export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          Aura Design
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#timelines" className="hover:text-white transition-colors">Timelines</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Free Video Audit
          </button>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-slate-200 transition-colors">
            Fix My Landing Page
          </button>
        </div>
      </div>
    </header>
  );
}
