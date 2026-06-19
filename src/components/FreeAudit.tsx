import { Linkedin } from "lucide-react";

export function FreeAudit() {
  return (
    <section className="py-24 px-6 bg-indigo-900/10 border-y border-indigo-500/10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Get a free landing page audit in your DMs
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-indigo-200/70">
          Send me your URL. I will record a video teardown showing you exactly what is killing your conversions and what to fix first.
        </p>
        <button className="inline-flex items-center justify-center rounded-full bg-[#0A66C2] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#004182]">
          <Linkedin className="mr-3 h-5 w-5" />
          DM me 'Audit' on LinkedIn
        </button>
      </div>
    </section>
  );
}
