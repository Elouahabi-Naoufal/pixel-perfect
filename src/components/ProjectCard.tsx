import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/site";

const coverBg = { pink: "bg-pink", peach: "bg-peach", paper: "bg-paper dot-grid" };

export function ProjectCover({ p, big }: { p: Project; big?: boolean }) {
  return (
    <div className={`relative overflow-hidden border-b-2 border-ink ${coverBg[p.cover]} ${big ? "h-72 md:h-96" : "h-56"}`}>
      <span className="absolute left-4 top-3 font-display text-7xl font-bold md:text-8xl">{p.num}</span>
      {p.slug === "entity-resolution" && (
        <svg viewBox="0 0 200 120" className="absolute bottom-3 right-3 h-3/4" aria-hidden>
          {[[30, 30], [60, 80], [40, 100], [150, 30], [170, 70], [130, 90]].map(([x, y], i) => (
            <line key={i} x1={x} y1={y} x2={i < 3 ? 90 : 120} y2={60} stroke="currentColor" strokeWidth="2" />
          ))}
          <circle cx="90" cy="60" r="10" className="fill-ink" />
          <circle cx="120" cy="60" r="10" className="fill-paper" stroke="currentColor" strokeWidth="2" />
          {[[30, 30], [60, 80], [40, 100], [150, 30], [170, 70], [130, 90]].map(([x, y], i) => (
            <rect key={i} x={x - 6} y={y - 6} width="12" height="12" className="fill-paper" stroke="currentColor" strokeWidth="2" />
          ))}
        </svg>
      )}
      {p.slug === "dataops-platform" && (
        <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2 font-mono text-xs" aria-hidden>
          {["raw", "staging", "marts"].map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <span className="border-2 border-ink bg-paper px-2 py-1" style={{ width: 70 + i * 30 }}>{l}</span>
            </div>
          ))}
          <span className="border-2 border-ink bg-ink px-2 py-1 text-paper">15 DAGs →</span>
        </div>
      )}
      {p.upcoming && (
        <span className="absolute bottom-4 right-4 rotate-[-6deg] border-2 border-ink bg-peach px-3 py-1 font-mono text-xs">coming soon</span>
      )}
    </div>
  );
}

export function ProjectCard({ p, big }: { p: Project; big?: boolean }) {
  return (
    <Link to="/work/$slug" params={{ slug: p.slug }} className="lift group block border-2 border-ink bg-card hard-shadow">
      <ProjectCover p={p} big={big} />
      <div className="p-5">
        <p className="font-mono text-xs uppercase text-muted-foreground">{p.org}</p>
        <h3 className="mt-1 text-3xl font-bold">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <p className="mt-5 font-display font-bold group-hover:underline">{p.upcoming ? "Peek at the slot →" : "Read case study →"}</p>
      </div>
    </Link>
  );
}
