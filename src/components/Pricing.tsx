export function Pricing() {
  const services = [
    {
      name: "CRO Audit",
      desc: "3 biggest conversion leaks on your site.",
      time: "24–72 hours",
    },
    {
      name: "UI/UX Design",
      desc: "Strategy + full UI design. No coding.",
      time: "1–2 weeks",
    },
    {
      name: "Design + Build",
      desc: "Full delivery from design to live code.",
      time: "2–3 weeks",
    },
    {
      name: "Premium Retainer",
      desc: "Ongoing design partnership. Starts at $6k/mo.",
      time: "Ongoing",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Transparent Pricing & Scope
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="pb-4 font-medium px-4">Item</th>
                <th className="pb-4 font-medium px-4">Description</th>
                <th className="pb-4 font-medium px-4 text-right">Timeframe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {services.map((s, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-6 px-4 font-semibold text-white whitespace-nowrap">{s.name}</td>
                  <td className="py-6 px-4 text-slate-400 min-w-[250px]">{s.desc}</td>
                  <td className="py-6 px-4 text-slate-300 text-right whitespace-nowrap">{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
