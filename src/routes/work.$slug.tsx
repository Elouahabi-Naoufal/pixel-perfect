import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProjectCover } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — case study · Naoufal Elouahabi` : "Project not found";
    return {
      meta: [
        { title },
        { name: "description", content: p?.summary ?? "Project not found" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.summary ?? "Project not found" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(p ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-5xl font-bold">No such project.</h1>
      <Link to="/" className="btn mt-6 bg-pink">Back to work</Link>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length] ?? p;
  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link to="/" hash="work" className="font-mono text-sm hover:underline">← all work</Link>
      <div className="mt-6 border-2 border-ink hard-shadow-lg"><ProjectCover p={p} big /></div>
      <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-mono text-sm text-muted-foreground">{p.org}</p>
          <h1 className="mt-2 text-6xl font-bold md:text-7xl">{p.title}</h1>
          <p className="mt-6 text-lg leading-relaxed">{p.context}</p>
        </div>
        <aside className="h-fit border-2 border-ink bg-paper p-5">
          <p className="font-mono text-xs uppercase">Tags</p>
          <div className="mt-3 flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className="tag bg-pink">{t}</span>)}</div>
          {p.stack.length > 0 && (<>
            <p className="mt-5 font-mono text-xs uppercase">Stack</p>
            <ul className="mt-2 space-y-1 font-display font-semibold">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </>)}
        </aside>
      </div>
      {p.approach.length > 0 && (
        <section className="mt-16">
          <h2 className="text-4xl font-bold md:text-5xl">How it works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {p.approach.map((s, i) => (
              <li key={s.title} className={`border-2 border-ink p-6 ${i % 2 ? "bg-peach md:translate-y-6" : "bg-paper"}`}>
                <span className="font-mono text-xs">step {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>
      )}
      <div className="mt-20 flex justify-end">
        <Link to="/work/$slug" params={{ slug: next.slug }} className="btn bg-pink">Next: {next.title} →</Link>
      </div>
    </article>
  );
}
