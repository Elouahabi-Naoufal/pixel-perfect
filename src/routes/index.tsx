import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectCard } from "@/components/ProjectCard";
import { EXPLORING, PROJECTS, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naoufal Elouahabi — Data, AI & MLOps engineer" },
      { name: "description", content: "Computer engineering student in AI & Data Science building data pipelines, entity resolution and AI systems. Open to PFE and junior roles." },
      { property: "og:title", content: "Naoufal Elouahabi — I build things with data, AI, and code" },
      { property: "og:description", content: "Portfolio of a data & AI engineering student in Morocco. Selected work and case studies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FLOATERS = [
  { t: "SELECT * FROM truth;", c: "bg-paper", pos: "left-[4%] top-[8%]", r: "-6deg" },
  { t: "airflow.dag(15)", c: "bg-peach", pos: "right-[6%] top-[4%]", r: "5deg" },
  { t: "p(match) = 0.97?", c: "bg-paper", pos: "right-[2%] top-[46%]", r: "-3deg" },
  { t: "docker compose up", c: "bg-ink text-paper", pos: "left-[8%] bottom-[10%]", r: "4deg" },
  { t: "# TODO: ship it", c: "bg-paper", pos: "right-[18%] bottom-[4%]", r: "-8deg" },
];

function Index() {
  const [a, b, ...rest] = PROJECTS;
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink bg-pink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <p className="font-mono text-sm">{SITE.name} · Morocco</p>
            <h1 className="mt-5 text-6xl font-bold sm:text-7xl lg:text-8xl">
              I build things with <span className="bg-paper px-2">data</span>, AI, and code.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Computer engineering student specializing in AI &amp; Data Science. I turn messy data, complex workflows, and technical ideas into useful, reliable systems.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1.5 font-mono text-xs">
              <span className="h-2.5 w-2.5 rounded-full bg-ink" aria-hidden /> Open to PFE / junior engineering opportunities
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn bg-ink text-paper">Explore my projects →</a>
              <Link to="/cv" className="btn bg-paper">Download my CV</Link>
            </div>
          </div>
          <div className="relative hidden min-h-[380px] md:block" aria-hidden>
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-peach" />
            <div className="absolute left-[30%] top-[22%] h-24 w-24 rotate-12 border-2 border-ink bg-paper dot-grid" />
            <div className="absolute bottom-[22%] right-[26%] h-0 w-0 border-x-[40px] border-b-[70px] border-x-transparent border-b-ink" />
            {FLOATERS.map((f, i) => (
              <span key={f.t} className={`bob absolute border-2 border-ink px-2.5 py-1 font-mono text-xs hard-shadow ${f.c} ${f.pos}`} style={{ ["--r" as string]: f.r, animationDelay: `${i * 0.8}s` }}>
                {f.t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-5xl font-bold md:text-7xl">Selected work</h2>
          <p className="hidden font-mono text-sm text-muted-foreground md:block">{PROJECTS.length} listings</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><ProjectCard p={a} big /></div>
          <div className="md:col-span-2 md:mt-16"><ProjectCard p={b} /></div>
          {rest.map((p, i) => (
            <div key={p.slug} className={i === 0 ? "md:col-span-2" : "md:col-span-3 md:-mt-10"}><ProjectCard p={p} /></div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-ink bg-peach">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-mono text-sm">/currently-exploring</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {EXPLORING.map((e, i) => (
              <div key={e.label} className={`border-2 border-ink bg-paper p-5 hard-shadow ${i === 1 ? "md:translate-y-4" : ""}`}>
                <h3 className="text-2xl font-bold">{e.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="text-5xl font-bold md:text-7xl">Got messy data?</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">I'm looking for a PFE internship or junior role in data, AI or MLOps — in Morocco or France.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn bg-pink">Get in touch</Link>
          <Link to="/about" className="btn bg-paper">More about me</Link>
        </div>
      </section>
    </>
  );
}
