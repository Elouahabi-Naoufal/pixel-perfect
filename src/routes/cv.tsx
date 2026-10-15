import { createFileRoute, Link } from "@tanstack/react-router";
import { PROJECTS, SITE, TOOLKIT } from "@/lib/site";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Naoufal Elouahabi" },
      { name: "description", content: "Résumé of Naoufal Elouahabi, 5th-year student at EMSI (IIR) — Data Science & Artificial Intelligence." },
      { property: "og:title", content: "CV — Naoufal Elouahabi" },
      { property: "og:description", content: "Experience, projects and skills in data and AI engineering." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CV,
});

function CV() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link to="/" className="font-mono text-sm hover:underline">← back</Link>
        <button onClick={() => window.print()} className="btn bg-blue">Download as PDF</button>
      </div>
      <article className="mt-8 border-2 border-ink bg-paper p-8 hard-shadow print:border-0 print:shadow-none">
        <h1 className="text-5xl font-bold">{SITE.name}</h1>
        <p className="mt-2 font-mono text-sm text-muted-foreground">EMSI · IIR — Data Science &amp; AI · Morocco · {SITE.email}</p>
        <h2 className="mt-8 text-2xl font-bold">Experience & projects</h2>
        {PROJECTS.filter((p) => !p.upcoming).map((p) => (
          <div key={p.slug} className="mt-4">
            <p className="font-display text-lg font-bold">{p.title} — {p.org}</p>
            <p className="text-sm text-muted-foreground">{p.summary}</p>
          </div>
        ))}
        <h2 className="mt-8 text-2xl font-bold">Skills</h2>
        {TOOLKIT.map((g) => (
          <p key={g.group} className="mt-2 text-sm"><span className="font-semibold">{g.group}:</span> {g.items.join(", ")}</p>
        ))}
      </article>
    </section>
  );
}
