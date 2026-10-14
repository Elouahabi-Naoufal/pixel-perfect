import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Naoufal Elouahabi" },
      { name: "description", content: "Reach out about PFE internships or junior data, AI and MLOps roles." },
      { property: "og:title", content: "Contact Naoufal Elouahabi" },
      { property: "og:description", content: "Email, GitHub, LinkedIn and CV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = [
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, c: "bg-pink" },
    { label: "GitHub", value: "github.com", href: SITE.github, c: "bg-paper", ext: true },
    { label: "LinkedIn", value: "linkedin.com", href: SITE.linkedin, c: "bg-peach", ext: true },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-6xl font-bold md:text-8xl">Let's talk.</h1>
      <p className="mt-5 max-w-lg text-lg text-muted-foreground">Open to PFE internships and junior engineering roles in Morocco and France.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {links.map((l) => (
          <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noreferrer" : undefined} className={`lift block border-2 border-ink p-6 hard-shadow ${l.c}`}>
            <p className="font-mono text-xs uppercase">{l.label}</p>
            <p className="mt-2 font-display text-3xl font-bold break-all">{l.value} ↗</p>
          </a>
        ))}
        <Link to="/cv" className="lift block border-2 border-ink bg-ink p-6 text-paper hard-shadow">
          <p className="font-mono text-xs uppercase">CV</p>
          <p className="mt-2 font-display text-3xl font-bold">View & download →</p>
        </Link>
      </div>
    </section>
  );
}
