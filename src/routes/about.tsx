import { createFileRoute } from "@tanstack/react-router";
import { TOOLKIT } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & toolkit — Naoufal Elouahabi" },
      { name: "description", content: "How I approach data and AI engineering, and the tools I work with." },
      { property: "og:title", content: "About Naoufal Elouahabi" },
      { property: "og:description", content: "Data & AI engineering student: approach, values and toolkit." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.3fr]">
        <h1 className="text-6xl font-bold md:text-8xl">Hi, I'm <span className="bg-blue px-2">Naoufal</span>.</h1>
        <div className="space-y-5 text-lg leading-relaxed">
          <p>I'm a 5th-year student at EMSI (École Marocaine des Sciences de l'Ingénieur) in Tanger, in the IIR program — Data Science &amp; Artificial Intelligence.</p>
          <p>I like the unglamorous parts of data work: figuring out which records are really the same thing, making pipelines that run the same way every time, and building the plumbing that lets models actually reach people.</p>
          <p>My approach is simple — understand the data first, keep systems boring and observable, and write things down so the next person can pick them up.</p>
          <p className="font-mono text-sm text-muted-foreground">Looking for: Data Engineering · AI Engineering · MLOps — Morocco & France.</p>
        </div>
      </section>
      <section className="border-y-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-5xl font-bold md:text-7xl">Toolkit</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOOLKIT.map((g, i) => {
              const bg = ["bg-blue text-paper", "bg-cream", "bg-amber", "bg-steel"][i % 4];
              return (
                <div key={g.group} className={`border-2 border-ink p-5 ${bg}`}>
                  <p className="font-mono text-xs uppercase">{String(i + 1).padStart(2, "0")} / {g.group}</p>
                  <ul className="mt-4 space-y-1.5 font-display text-xl font-semibold">
                    {g.items.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
