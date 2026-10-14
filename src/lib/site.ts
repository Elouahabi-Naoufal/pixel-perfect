export const SITE = {
  name: "Naoufal Elouahabi",
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  org: string;
  summary: string;
  tags: string[];
  cover: "pink" | "peach" | "paper";
  context: string;
  approach: { title: string; body: string }[];
  stack: string[];
  upcoming?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "entity-resolution",
    num: "01",
    title: "Entity Resolution",
    org: "Office des Changes",
    summary:
      "Linking records that describe the same real-world entity across messy, heterogeneous datasets — so downstream analysis works on one trustworthy view.",
    tags: ["Python", "Splink", "DuckDB", "Entity Resolution", "Data Quality"],
    cover: "pink",
    context:
      "Large administrative datasets rarely share clean identifiers. The same company or person can appear under different spellings, formats and partial fields. This project builds a pipeline that recognises those duplicates and consolidates them.",
    approach: [
      { title: "Record linkage", body: "Standardise and block candidate pairs so comparisons stay tractable on large tables." },
      { title: "Probabilistic matching", body: "Use Splink's Fellegi–Sunter model to weigh field-level agreement and estimate match probabilities." },
      { title: "Clustering", body: "Group pairwise matches into entity clusters, turning links into coherent identities." },
      { title: "Survivorship", body: "Apply explicit rules to choose the best value per attribute and build a golden record." },
    ],
    stack: ["Python", "Splink", "DuckDB", "SQL"],
  },
  {
    slug: "dataops-platform",
    num: "02",
    title: "DataOps Platform",
    org: "Expleo",
    summary:
      "A batch data platform orchestrating 15 Airflow DAGs over distributed workers, feeding layered Snowflake warehouse models — all reproducible with Docker Compose.",
    tags: ["Python", "Airflow", "Snowflake", "Docker", "Data Engineering"],
    cover: "peach",
    context:
      "Batch pipelines grow fast and become fragile without structure. This platform gives ingestion, transformation and loading a consistent, observable, reproducible home.",
    approach: [
      { title: "Orchestration", body: "15 Airflow DAGs schedule and coordinate batch workflows with clear dependencies." },
      { title: "Distributed workers", body: "Tasks run across multiple workers so heavy jobs don't block the rest of the pipeline." },
      { title: "Warehouse layers", body: "Data moves through structured Snowflake layers, from raw ingestion to curated models." },
      { title: "Infrastructure", body: "The whole stack is defined in Docker Compose for consistent local and shared environments." },
    ],
    stack: ["Python", "Apache Airflow", "Snowflake", "Docker Compose", "SQL"],
  },
  {
    slug: "next-ai",
    num: "03",
    title: "Next: AI project",
    org: "In the workshop",
    summary: "A slot reserved for an upcoming AI engineering project. Case study coming soon.",
    tags: ["AI", "LLMs", "MLOps"],
    cover: "paper",
    context: "This project is still being built. Details will be published once it is ready.",
    approach: [],
    stack: [],
    upcoming: true,
  },
  {
    slug: "next-fullstack",
    num: "04",
    title: "Next: Full-stack build",
    org: "In the workshop",
    summary: "A slot reserved for an upcoming full-stack / data product. Case study coming soon.",
    tags: ["Full-stack", "APIs", "Data"],
    cover: "paper",
    context: "This project is still being built. Details will be published once it is ready.",
    approach: [],
    stack: [],
    upcoming: true,
  },
];

export const TOOLKIT: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "TypeScript", "Java", "C/C++"] },
  { group: "Data engineering", items: ["Apache Airflow", "Snowflake", "DuckDB", "dbt", "Spark"] },
  { group: "AI & ML", items: ["scikit-learn", "PyTorch", "Pandas", "Splink", "LLM APIs"] },
  { group: "MLOps & infra", items: ["Docker", "Docker Compose", "Git", "CI/CD", "Linux"] },
];

export const EXPLORING = [
  { label: "MLOps", text: "Model versioning, monitoring and reproducible training pipelines." },
  { label: "LLM systems", text: "Retrieval, evaluation and making LLM apps reliable in production." },
  { label: "Data contracts", text: "Catching data quality issues before they hit the warehouse." },
];
