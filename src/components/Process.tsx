export function Process() {
  return (
    <section id="timelines" className="py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            First designs land in 72 hours.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Book a call, I send a brief, work starts immediately. Daily updates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative flex flex-col items-start rounded-3xl border border-white/5 bg-black p-8 px-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-bold text-white">
              1
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Day 1: We get on a call</h3>
            <p className="text-slate-400">
              We review your broken page, goals, and competitors. We define the core message and the exact conversion path.
            </p>
          </div>
          <div className="relative flex flex-col items-start rounded-3xl border border-white/5 bg-black p-8 px-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-lg font-bold text-indigo-400">
              2
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Day 2: I'm in the design file</h3>
            <p className="text-slate-400">
              Work starts immediately on layout and hierarchy. No unnecessary kickoff rituals or bloated discovery phases.
            </p>
          </div>
          <div className="relative flex flex-col items-start rounded-3xl border border-white/5 bg-black p-8 px-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-lg font-bold text-green-400">
              3
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Day 3: First visuals land</h3>
            <p className="text-slate-400">
              Real designs hit your inbox within 72 hours. We iterate rapidly until the UI is perfectly dialed in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
