export const SITE = {
  name: "Naoufal Elouahabi",
  role: "5th-year student at EMSI (IIR) — Data Science & Artificial Intelligence",
  school: "École Marocaine des Sciences de l'Ingénieur · Tanger",
  email: "naoufal.elouahabi@emsi-edu.ma",
  github: "https://github.com/Elouahabi-Naoufal",
  linkedin: "https://www.linkedin.com/in/naoufal-elouahabi-53939",
};

export type ProjectCategory =
  | "Data Engineering"
  | "AI / ML"
  | "Big Data"
  | "Full-Stack"
  | "Mobile & Desktop"
  | "Dev Tooling"
  | "Obsidian"
  | "Infrastructure";

export type CoverColor = "blue" | "steel" | "paper" | "amber" | "coral" | "green" | "violet" | "ink";

export type Project = {
  slug: string;
  num: string;
  title: string;
  org: string;
  summary: string;
  tags: string[];
  cover: CoverColor;
  context: string;
  approach: { title: string; body: string }[];
  stack: string[];
  github: string;
  githubPlanned?: boolean;
  photo?: string;
  category?: ProjectCategory;
  featured?: boolean;
  upcoming?: boolean;
};

const gh = (name: string, planned = false) => ({
  github: `https://github.com/Elouahabi-Naoufal/${name}`,
  githubPlanned: planned,
  photo: `/photos/${name}.png`,
});

export const PROJECTS: Project[] = [
  // ── FLAGSHIP 7 ────────────────────────────────────────────────
  {
    slug: "entity-resolution",
    num: "01",
    title: "Entity Resolution Platform",
    org: "Office des Changes · Internship",
    summary:
      "A production ML platform that finds duplicate operator records in national banking transaction data — 12-step probabilistic pipeline with a web control plane for non-technical reviewers.",
    tags: ["Python", "Splink 4", "Flask", "React", "PostgreSQL"],
    cover: "blue",
    context:
      "At the Office des Changes (Morocco's foreign-exchange authority), the same operator appears many times under different spellings, formats, and partial identifiers. Exact matching can't solve this — the platform needed probabilistic record linkage that analysts could trust, review, and correct.",
    approach: [
      { title: "12-step ML pipeline", body: "Loading → cleaning → normalization → blocking → Fellegi–Sunter EM training → prediction → clustering → thresholding → golden-record materialization → persistence → human review. Each step is independently testable and observable." },
      { title: "Probabilistic matching with Splink 4", body: "Field-level agreement terms feed a Fellegi–Sunter model. Blocking keys reduce the comparison space from billions of pairs to millions — the difference between 'tractable' and 'impossible'." },
      { title: "Web control plane", body: "Flask + React UI lets analysts review ambiguous pairs side-by-side, score match confidence, and feed corrections back as training signal. No code required." },
      { title: "Deployment", body: "Docker/Dokploy with PostgreSQL and SQL Server backends. Runs on the office network; the same compose file deploys anywhere." },
    ],
    stack: ["Python", "Splink 4", "DuckDB", "Flask", "React", "PostgreSQL", "SQL Server", "Docker"],
    featured: true,
    ...gh("entity-resolution-OC"),
  },
  {
    slug: "dataops-platform",
    num: "02",
    title: "DataOps Platform",
    org: "EXPLEO · Internship",
    summary:
      "15 Airflow DAGs orchestrating ETL on a 70+ table AdventureWorks database into a layered Snowflake warehouse — 97.8% DAG success rate, fully reproducible with Docker Compose.",
    tags: ["Python", "Apache Airflow", "Snowflake", "Docker", "SQL"],
    cover: "steel",
    context:
      "EXPLEO needed a reliable, observable batch pipeline over the AdventureWorks dataset. Manual extracts and ad-hoc SQL didn't scale — the platform had to survive schema changes, partial failures, and re-runs without duplicating data.",
    approach: [
      { title: "15 DAGs, clear dependencies", body: "Extract, load, transform, test, and mart-loading DAGs with explicit dependencies, retry policies, and idempotent writes. Re-running a failed DAG can't duplicate rows." },
      { title: "5-layer architecture", body: "Source → Airflow → Docker → Snowflake → BI. Each layer has one job, one contract, and one place to look when something breaks." },
      { title: "Snowflake warehouse", body: "25 tables across raw, staging, and mart schemas. Dimensional models feed BI dashboards directly." },
      { title: "Docker Compose everywhere", body: "Webserver, scheduler, worker, Postgres metadata, and Redis — one `docker compose up` gives every developer the identical environment." },
    ],
    stack: ["Python", "Apache Airflow", "Snowflake", "Docker Compose", "PostgreSQL", "Redis", "SQL"],
    featured: true,
    ...gh("AdventureWorks-DataOps-Platform"),
  },
  {
    slug: "nids-cic-ids2017",
    num: "03",
    title: "Real-Time Intrusion Detection",
    org: "EMSI · PFA Capstone",
    summary:
      "End-to-end network intrusion detection on 3M+ CIC-IDS2017 records: three model families, Kafka streaming, Spark Structured Streaming, and a live dashboard.",
    tags: ["Python", "Kafka", "Spark", "XGBoost", "CNN-BiLSTM"],
    cover: "steel",
    context:
      "Final-year capstone (PFA). The goal: detect network attacks in real time, not after the breach. The dataset — 8 daily PCAP-derived CSVs, 44 features, 15 classes (benign + 14 attack types) — demanded both accurate models and a streaming architecture.",
    approach: [
      { title: "Three-stage feature selection", body: "Variance threshold → correlation analysis → feature importance, reducing 44 raw features to the most discriminative subset before training." },
      { title: "Three model families", body: "Random Forest for robust multiclass baselines, XGBoost with Optuna hyperparameter search for tabular accuracy, CNN-BiLSTM for sequential flow patterns. SHAP for interpretability." },
      { title: "Real-time streaming", body: "Kafka producer → 'network-flows' topic → Spark Structured Streaming → trained model → live dashboard. Detection latency measured in seconds, not hours." },
      { title: "Full pipeline ownership", body: "From cahier des charges through EDA, preprocessing, training, integration, and dashboard — a complete ML system lifecycle in one semester." },
    ],
    stack: ["Python", "Apache Kafka", "Spark Structured Streaming", "scikit-learn", "XGBoost", "PyTorch", "Flask", "Docker"],
    featured: true,
    ...gh("nids-cic-ids2017-kafka-spark", true),
  },
  {
    slug: "data-warehouse-etl",
    num: "04",
    title: "Data Warehouse & BI",
    org: "EMSI · Decisional SI Module",
    summary:
      "27 messy Excel sheets → cleaned, modeled, and served as a star-schema warehouse with 10 Power BI dashboards and 50+ DAX KPIs.",
    tags: ["SQL", "Snowflake", "dbt", "Power BI", "DAX"],
    cover: "blue",
    context:
      "A higher-education dataset (students, grades, attendance, funding) lived in 27 disconnected Excel sheets. The project: turn it into a trustworthy decisional system — from raw cells to executive dashboards.",
    approach: [
      { title: "EDA & cleaning", body: "Google Colab notebook: type fixes, grade-range validation (0–20), attendance coherence checks, satisfaction-weight normalization. Output: 27 clean CSVs." },
      { title: "Snowflake + dbt", body: "Raw upload → 26 staging views → 10 dbt mart models (~45 tables total). Star schema with fact tables surrounded by dimension tables." },
      { title: "Power BI dashboards", body: "10 interactive pages: enrollment KPIs, grade distributions, attendance heatmaps, funding breakdowns. 50+ DAX measures." },
      { title: "Quality gates", body: "Automated checks on grade ranges, session-time coherence, and row-count assertions between layers — catch bad data where it enters, not where it's consumed." },
    ],
    stack: ["SQL", "Snowflake", "dbt", "Power BI", "DAX", "Python", "Pandas"],
    featured: true,
    ...gh("data-warehouse-etl-star-schema", true),
  },
  {
    slug: "chatsphere",
    num: "05",
    title: "ChatSphere",
    org: "Product · Self-hosted",
    summary:
      "Embed a context-aware AI chatbot on any website with one <script> tag. Pluggable LLM backend (Ollama local or OpenRouter), WebSocket streaming, page-context injection.",
    tags: ["Node.js", "React", "WebSocket", "Ollama", "OpenRouter"],
    cover: "paper",
    context:
      "Generic chatbots answer generic questions. ChatSphere injects the hosting page's URL, title, and DOM content into the prompt — so a bot on a pricing page knows about pricing. Self-hosted, so page content never leaves your server.",
    approach: [
      { title: "One-line embed", body: "Ship a single <script src='chatsphere.js'>. The widget loads, connects over WebSocket, and renders — no build step, no framework required on the host site." },
      { title: "Page-context injection", body: "Server extracts URL, title, and visible DOM content, prepends it to the conversation context. The model answers about the page it's embedded on." },
      { title: "Pluggable LLM backend", body: "Ollama for fully-local inference (privacy), OpenRouter for frontier models (quality). Swap via one env var." },
      { title: "Streaming responses", body: "WebSocket keeps the round-trip alive; tokens stream as they're generated. Feels instant even on slower models." },
    ],
    stack: ["Node.js", "Express", "WebSocket", "React", "Ollama", "OpenRouter", "Docker"],
    featured: true,
    ...gh("chatsphere-ai-chatbot", true),
  },
  {
    slug: "homelab",
    num: "06",
    title: "3-Server Homelab",
    org: "Infrastructure · Self-hosted",
    summary:
      "Three physical servers running 15+ services: Nextcloud, Jellyfin, Matrix, Mailu, n8n, Pi-hole, Traefik, Dokploy, Uptime Kuma — all self-hosted, all monitored.",
    tags: ["Docker", "Traefik", "Dokploy", "WireGuard", "Linux"],
    cover: "ink",
    context:
      "Running your own infrastructure teaches you what the cloud does — because now you do it yourself. Three servers (Homeserver, Monitor, Contabo VPS) form a WireGuard mesh with Traefik as the public edge.",
    approach: [
      { title: "WireGuard mesh", body: "Contabo is the hub (10.20.0.1), Homeserver and Monitor are spokes. Tailscale as fallback. All internal traffic stays on the private mesh." },
      { title: "Traefik + Let's Encrypt", body: "One reverse proxy, automatic TLS, host-based routing to every service. Add a service = add a label, not an nginx config." },
      { title: "Dokploy PaaS", body: "Git-push deployments, compose management, and a dashboard for everything. The same workflow as Vercel, on my own metal." },
      { title: "Mail, DNS, monitoring", body: "Mailu for self-hosted email (SPF/DKIM/DMARC configured), Pi-hole for network-wide DNS, Uptime Kuma + Beszel for health and metrics." },
    ],
    stack: ["Docker", "Docker Compose", "Traefik", "Dokploy", "WireGuard", "Tailscale", "Linux", "Mailu", "Pi-hole"],
    featured: true,
    ...gh("homelab-private"),
  },
  {
    slug: "obsidian-plugins",
    num: "07",
    title: "Obsidian Plugins ×4",
    org: "Open Source",
    summary:
      "Four published Obsidian plugins — one on the Community registry. TypeScript, Obsidian API, built for real daily use.",
    tags: ["TypeScript", "Obsidian API", "Open Source", "JavaScript"],
    cover: "steel",
    context:
      "I use Obsidian as my primary knowledge tool. When the workflow broke, I didn't switch apps — I wrote plugins. Building for someone else's workflow (you can't control how they use it) taught me API design, documentation, and review discipline.",
    approach: [
      { title: "Wordlist Autocomplete", body: "Smart vocabulary autocomplete from JSON wordlists with metadata and contextual learning. Published on the Obsidian Community Plugins registry — passed review, documented API, real README." },
      { title: "Folder Focus", body: "Hide/show folders in the file explorer. Commands: hide all, unhide all, keep specific, bulk operations. For deep vaults with hundreds of folders." },
      { title: "Subject Manager", body: "Organize academic subjects, exams, and todos per course. Built for the EMSI workload." },
      { title: "Islam Plugin", body: "Salah (missed/active) and Quran tracking with a dashboard. Personal devotional tooling." },
    ],
    stack: ["TypeScript", "JavaScript", "Obsidian API", "esbuild"],
    ...gh("obsidian-wordlist-autocomplete"),
  },

  // ── DATA ENGINEERING & BIG DATA ───────────────────────────────
  {
    slug: "airbyte-minio-airflow",
    num: "08",
    title: "EL Pipeline — Airbyte · MinIO · Airflow",
    org: "EMSI · Data Architectures",
    summary:
      "Containerized EL pipeline: Airbyte extracts CSVs, lands raw data in MinIO (S3-compatible), Airflow orchestrates downstream transforms. Zero custom ingestion code.",
    tags: ["Airbyte", "MinIO", "Airflow", "Docker"],
    cover: "paper",
    context:
      "Hand-rolled Python extractors break when schemas change. This pipeline uses managed connectors (Airbyte) for EL and object storage (MinIO) as the raw zone — the pattern every data team converges on.",
    approach: [
      { title: "Airbyte for EL", body: "Connector-based extraction with incremental sync and schema-drift detection. No custom connector code to maintain." },
      { title: "MinIO as data lake", body: "S3-compatible object storage for the raw zone. Same API as AWS S3 — swap the endpoint for cloud." },
      { title: "Airflow orchestration", body: "Python DAG triggers Airbyte syncs and downstream transforms. Three UIs (Airbyte :8000, MinIO :9001, Airflow :8080) for monitoring." },
      { title: "Docker Compose", body: "Multi-container environment, fully reproducible. Ports documented; `docker compose up` and the pipeline is live." },
    ],
    stack: ["Airbyte", "MinIO", "Apache Airflow", "Docker", "Python"],
    ...gh("airbyte-minio-airflow-pipeline", true),
  },
  {
    slug: "dna-mapreduce",
    num: "09",
    title: "Distributed DNA Analysis",
    org: "EMSI · Big Data Ecosystem",
    summary:
      "End-to-end distributed analysis of Human Microbiome Project FASTA sequences: k-mer extraction, Smith-Waterman alignment, LSH similarity, KMeans clustering — all on MapReduce + Spark.",
    tags: ["Hadoop", "MapReduce", "Spark", "MLlib", "Docker"],
    cover: "violet",
    context:
      "5.7 GB of FASTA sequences from the Human Microbiome Project, processed by a 5-member team with sequential dependencies. Each member owned a pipeline stage; the orchestration script chained them.",
    approach: [
      { title: "FASTA parsing → HDFS", body: "parse_fasta.py cleans raw FASTA, load_hdfs.sh pushes 5.7 GB of sequences into HDFS. Stage 1 of 5." },
      { title: "k-mer MapReduce", body: "Hadoop Streaming mappers emit (kmer, 1) per sequence; reducers aggregate global k-mer frequency vectors." },
      { title: "Spark LSH + Smith-Waterman", body: "Locality-Sensitive Hashing finds candidate similar pairs; distributed Smith-Waterman computes alignment scores." },
      { title: "MLlib clustering & classification", body: "KMeans clusters sequence vectors; RandomForest classifies. Results written back to HDFS, visualized in Python." },
    ],
    stack: ["Python", "Hadoop Streaming", "HDFS", "Spark", "Spark MLlib", "Docker"],
    ...gh("dna-sequence-mapreduce", true),
  },
  {
    slug: "pagerank-hdfs",
    num: "10",
    title: "PageRank on HDFS",
    org: "EMSI · Data Architectures",
    summary:
      "PageRank implemented from scratch as an iterative MapReduce pipeline on YARN — not a library call, the actual algorithm, distributed.",
    tags: ["Hadoop", "MapReduce", "HDFS", "YARN", "Python"],
    cover: "violet",
    context:
      "Two complementary labs: HDFS administration (upload, replication, permissions via CLI) and PageRank as a distributed iterative computation. The insight: PageRank is a sum-by-key operation — MapReduce falls out naturally.",
    approach: [
      { title: "HDFS administration", body: "put/get/cat/cp/mv/rm/chmod on a live cluster. Understanding the storage layer before writing jobs against it." },
      { title: "Map phase", body: "For each page, emit (target, rank/numOutLinks) for every outgoing link." },
      { title: "Shuffle + Reduce", body: "Group by target page, sum contributions, apply PR = (1-d)/N + d·Σ. Write new ranks." },
      { title: "Iterate to convergence", body: "Loop until rank deltas fall below epsilon. Damping factor 0.85; convergence tracked across iterations." },
    ],
    stack: ["Hadoop", "HDFS", "YARN", "MapReduce", "Python"],
    ...gh("pagerank-hdfs-mapreduce", true),
  },
  {
    slug: "bibliometrics-mapreduce",
    num: "11",
    title: "Healthcare Bibliometrics",
    org: "EMSI · Big Data",
    summary:
      "Text-mining 3M+ healthcare research documents on a Dockerized Hadoop cluster via Hadoop Streaming with custom Python mapper/reducer scripts.",
    tags: ["Hadoop", "Streaming", "NLP", "Python", "Docker"],
    cover: "violet",
    context:
      "Classic bibliometrics at scale: extract and rank the most significant terms across millions of documents. Ran on a 4-node Docker cluster (NameNode, DataNode, ResourceManager, NodeManager).",
    approach: [
      { title: "Dockerized Hadoop cluster", body: "Four-node cluster in Docker: NameNode + DataNode for storage, ResourceManager + NodeManager for compute. Real distributed-systems debugging." },
      { title: "Hadoop Streaming", body: "Python mapper.py tokenizes documents and emits (term, 1); reducer.py aggregates and ranks. No JVM code — just Unix-filter philosophy at scale." },
      { title: "Real document messiness", body: "HTML remnants, encoding issues, multilingual abstracts. The reducer was easy; making the mapper robust against real text was not." },
      { title: "Ranked term extraction", body: "Output: global term-frequency table with significance ranking across the full corpus." },
    ],
    stack: ["Hadoop Streaming", "HDFS", "Python", "Docker"],
    ...gh("healthcare-bibliometrics-mapreduce", true),
  },
  {
    slug: "sentiment-imdb",
    num: "12",
    title: "Sentiment Analysis — IMDB",
    org: "EMSI · Data Mining (with Alae Moussa Laachiri)",
    summary:
      "NLP pipeline on 50,000 IMDB reviews comparing Bag-of-Words vs TF-IDF. TF-IDF won on every metric — and the preprocessing mattered more than the vectorizer.",
    tags: ["Python", "scikit-learn", "NLTK", "TF-IDF", "NLP"],
    cover: "coral",
    context:
      "Binôme project: build a text-classification pipeline and understand what actually drives performance. The dataset is balanced (25k positive / 25k negative), so accuracy is meaningful — unlike most real-world sentiment data.",
    approach: [
      { title: "NLP preprocessing", body: "HTML tag removal, punctuation stripping, stopword removal, stemming. Each step ablated to measure its contribution." },
      { title: "BoW vs TF-IDF", body: "Both vectorizers at 5,000 features. TF-IDF's IDF weighting down-weights common words, boosting discriminative terms." },
      { title: "Dimensionality reduction", body: "Truncated SVD from 5,000 → 100 dimensions. Captures latent topics, speeds training, reduces overfitting." },
      { title: "Logistic Regression + evaluation", body: "Trained on both vectorizations; compared Accuracy, Precision, Recall, F1. TF-IDF won across the board." },
    ],
    stack: ["Python", "pandas", "scikit-learn", "NLTK", "matplotlib", "seaborn"],
    ...gh("sentiment-analysis-imdb", true),
  },
  {
    slug: "excel-extractor",
    num: "13",
    title: "Excel/CSV Extractor Pipeline",
    org: "Personal · Data Engineering",
    summary:
      "Apache Airflow pipeline automating extraction from Excel and CSV files — scheduled, monitored, reliable tabular ingestion.",
    tags: ["Airflow", "Python", "Excel", "ETL"],
    cover: "steel",
    context:
      "I kept writing the same 'parse spreadsheet → clean → load' code. This pipeline extracts that pattern into a scheduled, observable Airflow DAG.",
    approach: [
      { title: "Automated extraction", body: "DAG parses Excel/CSV uploads, handles mixed types and locale-dependent date formats." },
      { title: "Scheduling & monitoring", body: "Airflow handles retries, alerting, and run history. Failed runs are visible, not silent." },
      { title: "Repeatable ingestion", body: "Idempotent loads — re-running a DAG can't duplicate rows." },
    ],
    stack: ["Apache Airflow", "Python", "pandas", "Excel"],
    ...gh("Excel_csv_data_extractor_Airflow"),
  },

  // ── AI / ML ───────────────────────────────────────────────────
  {
    slug: "sma-hospital",
    num: "14",
    title: "Intelligent Hospital Simulator",
    org: "EMSI · Distributed AI (JADE)",
    summary:
      "Multi-agent hospital simulation: Patients, Doctors, Nurses, Admin, and Scheduler as autonomous agents coordinating through FIPA ACL messages — no central controller.",
    tags: ["Java", "JADE", "Multi-Agent Systems", "FIPA ACL"],
    cover: "coral",
    context:
      "The mental shift: stop programming control flow, start programming behaviors. Nobody tells the nurse what to do — the nurse reacts to messages and its own state. Decentralized coordination through message passing.",
    approach: [
      { title: "Five agent types", body: "Patient (requests appointments), Doctor (accepts/defer), Nurse (gets assigned), Admin (oversees capacity), Scheduler (resolves conflicts). Each with goals, knowledge, and behavior rules." },
      { title: "FIPA ACL messaging", body: "request, inform, agree, refuse, propose — standardized agent communication. No shared state, no global scheduler." },
      { title: "Reactive + proactive behaviors", body: "JADE behaviors: CyclicBehaviour for message loops, TickerBehaviour for periodic actions, WakerBehaviour for timeouts." },
      { title: "Emergent coordination", body: "Conflict resolution, capacity limits, and scheduling emerge from local agent interactions — not a top-level algorithm." },
    ],
    stack: ["Java", "JADE", "FIPA ACL"],
    ...gh("sma-hospital-jade", true),
  },
  {
    slug: "sma-room-booking",
    num: "15",
    title: "Room Booking Multi-Agent System",
    org: "EMSI · Distributed AI (JADE)",
    summary:
      "Five-agent room-booking negotiation: BookingAgent, RoomAgent, SchedulerAgent, UserAgent, DBagent — propose/counter-propose instead of a CRUD endpoint.",
    tags: ["Java", "JADE", "Multi-Agent Systems"],
    cover: "coral",
    context:
      "Booking is a negotiation: multiple users competing for limited rooms, preferences on both sides. The agent model handles that natively with propose/counter-propose semantics — a REST API would need a central scheduler doing the same thing.",
    approach: [
      { title: "Negotiation flow", body: "UserAgent → request → BookingAgent → query → RoomAgent → consult → SchedulerAgent. Propose/refuse until agreement or exhaustion." },
      { title: "Conflict resolution", body: "SchedulerAgent checks availability and priorities; no double-booking emerges from the protocol, not a WHERE clause." },
      { title: "Persistence", body: "DBagent handles all database writes — agents stay stateless regarding storage." },
    ],
    stack: ["Java", "JADE", "SQLite"],
    ...gh("sma-room-booking-jade", true),
  },
  {
    slug: "personal-assistant",
    num: "16",
    title: "Local AI Assistant",
    org: "Personal · AI/ML",
    summary:
      "Local-first AI assistant with long-term memory and tool use: Ollama for inference, SQLite for memory, shell execution and Obsidian read/write as tools. No API keys, no data leaves the laptop.",
    tags: ["Python", "Ollama", "Flask", "SQLite", "AI Agents"],
    cover: "coral",
    context:
      "I wanted an assistant that sees my notes and can run commands — without any of that crossing a network. Local-first isn't about avoiding cloud costs; it's about keeping private data private.",
    approach: [
      { title: "Local LLM via Ollama", body: "Inference runs entirely on-device. No API keys, no rate limits, no telemetry." },
      { title: "Persistent memory", body: "SQLite-backed conversation history. Ask about something from last week; it recalls." },
      { title: "Tool layer", body: "Shell execution and Obsidian read/write exposed as tools. The model decides when to call them — it's an agent, not a chatbot." },
      { title: "Flask API", body: "Simple HTTP interface. Curl-able, scriptable, testable." },
    ],
    stack: ["Python", "Ollama", "Flask", "SQLite"],
    ...gh("personal-assistant-ollama", true),
  },

  // ── FULL-STACK ────────────────────────────────────────────────
  {
    slug: "toolmesh",
    num: "17",
    title: "ToolMesh",
    org: "Personal · Product",
    summary:
      "Dozens of web utilities (QR, converters, hashers, encoders, diff tools) behind one self-hosted platform: shared auth, Docker per tool, Traefik routing, zero ads.",
    tags: ["React", "Node.js", "Docker", "Traefik", "Self-hosted"],
    cover: "green",
    context:
      "The utilities you open ten times a week, minus the three popups you close to generate a QR code. The real engineering challenge wasn't the tools — it was deployment: separate repos, containers, and configs for each.",
    approach: [
      { title: "Platform, not pile", body: "Shared auth (one login), consistent UI system, admin panel with usage metrics. Each tool is a container; the platform is the product." },
      { title: "Docker + Traefik", body: "One reverse proxy routes by host. Adding a tool = adding a compose service and a label." },
      { title: "Self-hosted, ad-free", body: "Runs on my homelab. No data leaves my servers; no ads interrupt the workflow." },
    ],
    stack: ["React", "Node.js", "Docker", "Traefik", "PostgreSQL"],
    ...gh("ToolMesh"),
  },
  {
    slug: "invoice-platform",
    num: "18",
    title: "Invoice Platform",
    org: "Personal · Product",
    summary:
      "Invoicing with a reusable product catalog, MAD currency + TVA, PDF export — built for Moroccan small businesses in Next.js.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    cover: "green",
    context:
      "Small businesses re-invoice the same products constantly. So the catalog comes first — invoices are selections from it, not blank forms. Deployed at invoice.naoufalelouahabi.com.",
    approach: [
      { title: "Catalog-first design", body: "Products and services with saved pricing. Line items pull from the catalog; invoices become fast, consistent transactions." },
      { title: "MAD + TVA handling", body: "Line-level vs invoice-level TVA changes the total. Moroccan invoice formatting requirements implemented explicitly." },
      { title: "Lifecycle tracking", body: "Draft → sent → paid. Client management with history. PDF export." },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    ...gh("invoice-platform"),
  },
  {
    slug: "poolsplit",
    num: "19",
    title: "PoolSplit",
    org: "Personal · Product",
    summary:
      "Group expense splitting with debt-graph simplification: 15 pairwise transfers become 3. Full RTL support and Arabic/French/English i18n.",
    tags: ["React", "TypeScript", "Algorithms", "i18n", "RTL"],
    cover: "paper",
    context:
      "6 friends, a messy spreadsheet, and 15 transfers to settle up. PoolSplit builds the debt graph from all pairwise balances, then simplifies it to the minimum number of transfers. Nobody wants to owe four people four dirhams each.",
    approach: [
      { title: "Debt graph simplification", body: "Build a directed graph of pairwise balances; find the minimum set of transfers that zeroes every node. Classic graph algorithm, real-world impact." },
      { title: "RTL + i18n", body: "Full right-to-left layout and Arabic/French/English — built for how people actually talk about money in Morocco." },
      { title: "Deployed as hesab.naoufalelouahabi.com", body: "Live on the homelab, Cloudflare-fronted." },
    ],
    stack: ["React", "TypeScript", "Next.js"],
    ...gh("poolsplit"),
  },
  {
    slug: "pearl-gleam",
    num: "20",
    title: "Pearl Gleam Inventory",
    org: "Personal · Product",
    summary:
      "Inventory flow modeling the real warehouse lifecycle: PTM → OTM → RTS state machine with Excel import and sales reporting.",
    tags: ["React", "TypeScript", "State Machines", "Supply Chain"],
    cover: "green",
    context:
      "Most inventory demos model 'products in a box.' Real warehouses move stock through states: Préparé → En Transit → Reçu. Each transition has guards (can't receive what wasn't shipped) and side effects (stock increases only on RTS).",
    approach: [
      { title: "State-machine lifecycle", body: "PTM → OTM → RTS with guarded transitions. Illegal transitions are impossible, not just discouraged." },
      { title: "Excel bulk import", body: "Because that's how the data arrives. Parser handles messy exports." },
      { title: "Sales reporting", body: "Period rollups, stock movement audit trail." },
    ],
    stack: ["React", "TypeScript", "Node.js"],
    ...gh("pearl-gleam-inventory"),
  },
  {
    slug: "habitflow",
    num: "21",
    title: "HabitFlow",
    org: "Personal · Product",
    summary:
      "Habit tracking with real analytics: completion heatmaps, per-habit trend lines, streak tracking, and time-of-day analysis — not just checkboxes.",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    cover: "amber",
    context:
      "A checkbox says 'did you do it.' Analytics says 'is it working.' Those are different questions, and only one of them helps you change behavior.",
    approach: [
      { title: "Completion heatmap", body: "GitHub-contributions-style visual for habit consistency over time." },
      { title: "Per-habit trends", body: "Is this habit getting easier or harder? Trend lines per habit, not just aggregate streaks." },
      { title: "Time-of-day analysis", body: "When do you actually do this? Patterns surface that streak counters hide." },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    ...gh("habitflow-analytics", true),
  },
  {
    slug: "riseup",
    num: "22",
    title: "RiseUp Daily Bloom",
    org: "Personal · Product",
    summary:
      "Streaks + weight progress + Pomodoro timer in one PWA. Three habits, one app — the design lesson: three features done well beat ten done poorly.",
    tags: ["React", "PWA", "Node.js", "Productivity"],
    cover: "paper",
    context:
      "I was tracking three habits in three different places. The design principle that guided the build: cut everything not used in week one.",
    approach: [
      { title: "Habit streaks", body: "Visual calendar, current + best streak tracking." },
      { title: "Weight trend ring", body: "Daily weight is noise; weekly moving average is signal. The app shows both." },
      { title: "Pomodoro + bloom score", body: "Focus timer feeds a daily 'bloom' score combining all three habits." },
    ],
    stack: ["React", "Node.js", "SQLite", "PWA"],
    ...gh("riseup-daily-bloom", true),
  },
  {
    slug: "format-fusion",
    num: "23",
    title: "FormatFusion",
    org: "Personal · Product",
    summary:
      "200+ file format conversions: browser-side via WASM for privacy, server-side for heavy jobs. Batch mode included.",
    tags: ["React", "WASM", "Node.js", "FFmpeg"],
    cover: "green",
    context:
      "Images, documents, audio, video, archives, e-books. The routing rule: if it fits in memory and isn't CPU-seconds of work, convert client-side (private, instant). Everything else goes to the server queue.",
    approach: [
      { title: "WASM client-side conversion", body: "No upload for supported formats. Privacy by architecture — the file never leaves the browser." },
      { title: "Server-side heavy jobs", body: "Video, large files → backend queue with FFmpeg and Sharp." },
      { title: "Batch processing", body: "Drop 50 files, get 50 converted files back." },
    ],
    stack: ["React", "WASM", "Node.js", "FFmpeg", "Sharp"],
    ...gh("format-fusion-web-app"),
  },
  {
    slug: "django-inventory",
    num: "24",
    title: "Inventory Management System",
    org: "Personal · Full-Stack",
    summary:
      "Django inventory with role-based access, supplier management, and a full AuditLog — every stock movement traceable to user, timestamp, and before/after values.",
    tags: ["Django", "PostgreSQL", "Python", "RBAC"],
    cover: "paper",
    context:
      "The piece I'm proudest of: AuditLog. When stock doesn't match reality, you can trace exactly when it diverged. Role-based access: warehouse staff see stock, managers see reports, admins see everything.",
    approach: [
      { title: "Full data model", body: "Product, Supplier, Stock, Sale, User (role), AuditLog — proper foreign keys, validation, and constraints." },
      { title: "AuditLog on every mutation", body: "Stock movements, sales, edits — all recorded with user, timestamp, and before/after values." },
      { title: "Django Admin", body: "The 'boring parts done properly' framework: validation, permissions, migrations, tests." },
    ],
    stack: ["Django", "PostgreSQL", "Python"],
    ...gh("Inventory-Management-System"),
  },
  {
    slug: "social-downloader",
    num: "25",
    title: "Social Media Downloader",
    org: "Personal · Product",
    summary:
      "Self-hosted downloader for 6 platforms (YouTube, TikTok, Instagram, X, Facebook, Reddit) with audio extraction. No ads, no captcha.",
    tags: ["Python", "yt-dlp", "FastAPI", "Docker"],
    cover: "green",
    context:
      "Paste a URL, pick a format, download. Self-hosted so usage patterns aren't anyone's business. Built for content with rights to it: own uploads, Creative Commons, offline access to streamable material.",
    approach: [
      { title: "yt-dlp backbone", body: "Six platforms via one library. Quality selection per platform." },
      { title: "Audio extraction", body: "MP3/FLAC extraction via FFmpeg. Toggle in the UI." },
      { title: "Batch queue", body: "Queue multiple URLs; process sequentially with progress." },
    ],
    stack: ["Python", "yt-dlp", "FastAPI", "Docker"],
    ...gh("Social-Media-Downloader"),
  },
  {
    slug: "budgetly",
    num: "26",
    title: "Budgetly",
    org: "Personal · Product",
    summary:
      "Offline-first budget tracking: local-first writes, incremental sync to Postgres/Supabase, field-level conflict merge. Works on the metro, syncs when connected.",
    tags: ["TypeScript", "TanStack", "SQLite", "Supabase"],
    cover: "amber",
    context:
      "Budgeting happens on the metro, in cafés, everywhere there's no signal. An app that requires connectivity to log an expense is useless. Local-first was the requirement, not a feature.",
    approach: [
      { title: "Local-first writes", body: "TanStack Query + IndexedDB/SQLite. Every write lands locally first; the UI never waits on the network." },
      { title: "Incremental sync", body: "Only changed records go up. Full-state sync is trivial but wasteful; delta sync is what works." },
      { title: "Conflict merge", body: "Field-level merge on sync. Two devices editing between syncs get combined, not overwritten." },
    ],
    stack: ["TypeScript", "TanStack Query", "React", "SQLite", "Supabase"],
    ...gh("Budgetly"),
  },
  {
    slug: "stockmaster",
    num: "27",
    title: "StockMaster",
    org: "EMSI · 3rd Year PFM",
    summary:
      "First full-stack app: stock & supplier management with low-stock alerts and monthly analytics. The app I actually used to track my own purchases.",
    tags: ["React", "Node.js", "MongoDB"],
    cover: "green",
    context:
      "Every senior engineer has a project like this. The value isn't the code quality — it's that you shipped something people (including you) used. Looking back at the code is humbling; the product still works.",
    approach: [
      { title: "Dashboard with alerts", body: "Low-stock notifications before you run out. Monthly analytics charts." },
      { title: "Supplier management", body: "Directory with ordering history." },
      { title: "What I'd do differently", body: "Proper API layer separation, real auth, tests. What I'd keep: the analytics view." },
    ],
    stack: ["React", "Node.js", "MongoDB"],
    ...gh("stockmaster-python", true),
  },
  {
    slug: "emsi-share-learn",
    num: "28",
    title: "EMSI Share-Learn",
    org: "EMSI · PFA Capstone",
    summary:
      "Collaborative LMS for EMSI: courses centralized, quizzes auto-graded, forums per course, role-based access for professors and students.",
    tags: ["React", "FastAPI", "PostgreSQL", "EdTech"],
    cover: "paper",
    context:
      "Course materials scattered across WhatsApp groups, email threads, and USB drives. Nothing searchable, nothing versioned. The biggest group project I've led — real users (classmates), a real deadline (semester start), real feature creep.",
    approach: [
      { title: "Course centralization", body: "Structured modules replacing WhatsApp chaos. Versioned, searchable, always current." },
      { title: "Quiz engine", body: "Auto-graded quizzes per course. Professors create; students take; grades aggregate." },
      { title: "Forums + RBAC", body: "Per-course discussion threads. Professor publishes, student consumes, admin moderates." },
    ],
    stack: ["React", "FastAPI", "PostgreSQL"],
    ...gh("EMSI-SHARE"),
  },
  {
    slug: "medical-microservices",
    num: "29",
    title: "Medical Appointments Microservices",
    org: "EMSI · Distributed Systems",
    summary:
      "5-service microservices architecture: patient, doctor, appointments, notification, medical records. Triple-validation before appointment creation, graceful degradation.",
    tags: ["Java", "Spring Boot", "MariaDB", "React", "Microservices"],
    cover: "green",
    context:
      "A distributed-systems course project taken seriously: independent services, inter-service communication, and the hard part — what happens when one service goes down.",
    approach: [
      { title: "5 independent services", body: "Each owns its data, exposes a REST API, deploys separately. No shared database." },
      { title: "Triple validation", body: "Patient, doctor, and slot availability checked across services before an appointment is created." },
      { title: "Graceful degradation", body: "Notification service down? Appointment still succeeds; notification retries. Failure isolation, not failure propagation." },
    ],
    stack: ["Java", "Spring Boot", "MariaDB", "React"],
    ...gh("medical-appointments-microservices", true),
  },

  // ── MOBILE & DESKTOP ──────────────────────────────────────────
  {
    slug: "m-health",
    num: "30",
    title: "m-Health Android",
    org: "EMSI · Mobile Development",
    summary:
      "4-role patient portal in native Android: Patient, Doctor, Nurse, Admin — each with a different home screen, permissions enforced at UI, API, and data layers.",
    tags: ["Java", "Android", "Retrofit", "Room", "Material Design"],
    cover: "amber",
    context:
      "One codebase, four role-specific experiences. The architecture challenge: permissions enforced at every layer — a nurse can't see admin screens, and the API rejects it too.",
    approach: [
      { title: "Role-based UI", body: "Four home screens from one app. RecyclerViews, Material Design, Room persistence." },
      { title: "Retrofit API layer", body: "Type-safe network calls with role-scoped endpoints." },
      { title: "Android lifecycle traps", body: "The deep dive that makes Android development uniquely frustrating — and understanding it makes you better." },
    ],
    stack: ["Java", "Android SDK", "Retrofit", "Room", "Material Design"],
    ...gh("m-health-android", true),
  },
  {
    slug: "salah-android",
    num: "31",
    title: "Salah Android",
    org: "Personal · Mobile",
    summary:
      "Prayer times for 42+ Moroccan cities, fully offline, with a live per-second countdown that survives timezone boundaries and device sleep.",
    tags: ["Java", "Android", "SQLite", "Offline-first"],
    cover: "amber",
    context:
      "Prayer times shouldn't need signal. Full dataset bundled locally. The engineering detail: naive setInterval drifts — remaining time is computed from timestamps, not tick counts.",
    approach: [
      { title: "Offline by architecture", body: "42+ cities' prayer schedules bundled in the app. Zero network calls." },
      { title: "Accurate countdown", body: "Computed from timestamps, not interval ticks. Survives sleep, timezone changes, and DST." },
      { title: "Notifications", body: "Per-prayer reminders via AlarmManager." },
    ],
    stack: ["Java", "Android SDK", "SQLite", "AlarmManager"],
    ...gh("Salah_Android_App"),
  },
  {
    slug: "academic-assistant",
    num: "32",
    title: "Academic Assistant",
    org: "EMSI · Mobile",
    summary:
      "Student assistant app: event timeline, GPA calculator (20-point Moroccan scale), assignment tracking, deadline notifications.",
    tags: ["Java", "Android", "SQLite", "Room"],
    cover: "paper",
    context:
      "Built out of necessity — tracking assignments, grades, and deadlines across courses in my head wasn't working. The GPA calculator got more use than expected: weighted credits, retakes, and the Moroccan 20-point scale all needed handling.",
    approach: [
      { title: "Timeline view", body: "Upcoming events (exams, deadlines, classes) in chronological order." },
      { title: "GPA calculator", body: "Weighted credits, retakes, 20-point scale. Per-semester history." },
      { title: "Assignment tracking", body: "Status, priority, notifications before deadlines." },
    ],
    stack: ["Java", "Android SDK", "SQLite", "Room"],
    ...gh("Academic_Management_Assistant"),
  },
  {
    slug: "air-traffic-manager",
    num: "33",
    title: "Air Traffic Manager",
    org: "EMSI · Concurrency",
    summary:
      "Air-traffic simulation in JavaFX: 18+ threads, zero synchronized blocks — semaphores, priority queues, and atomic operations only.",
    tags: ["Java", "JavaFX", "Concurrency", "MongoDB"],
    cover: "amber",
    context:
      "Planes take off, land, and hold patterns concurrently. Get the concurrency wrong and they collide (in the simulation). Zero synchronized blocks: every coordination goes through semaphores, queues, and atomics — easier to audit when there are no locks to forget.",
    approach: [
      { title: "Thread pool + semaphores", body: "18+ aircraft threads; semaphores for runway access (one plane per runway)." },
      { title: "Priority-queue landing order", body: "Fuel level and distance determine landing priority. Priority inversion handled explicitly." },
      { title: "JavaFX + MongoDB", body: "UI updates via Platform.runLater; event logging to MongoDB." },
    ],
    stack: ["Java", "JavaFX", "MongoDB"],
    ...gh("air-traffic-manager-javafx", true),
  },
  {
    slug: "pdfforge",
    num: "34",
    title: "PDFForge",
    org: "Personal · Desktop",
    summary:
      "8 PDF tools, 100% client-side — then refactored from a monolith into a modular plugin architecture. Merge, split, compress, convert, rotate, watermark, extract, page-number.",
    tags: ["JavaScript", "PDF-lib", "WASM", "Web Workers"],
    cover: "paper",
    context:
      "Version 1: one giant file with 8 tools. It worked; it was unmaintainable. Version 2: each tool is an independent module with a shared interface — adding tool #9 is a new file, not a new if-branch in an 800-line function.",
    approach: [
      { title: "100% client-side", body: "No uploads. PDFs are processed in the browser via PDF-lib and Web Workers — privacy by architecture." },
      { title: "Modular refactor", body: "Monolith → plugin-style module registry. Shared I/O pipeline; tools only know their own logic." },
      { title: "8 tools", body: "Merge, split, compress, convert, rotate, watermark, extract, page numbering." },
    ],
    stack: ["JavaScript", "PDF-lib", "Web Workers"],
    ...gh("pdfforge", true),
  },
  {
    slug: "dbsentinel-dbgui",
    num: "35",
    title: "DbSentinel + dbgui",
    org: "Personal · Desktop",
    summary:
      "Two SQLite explorers packaged for Linux + Windows: BLOB preview, CRUD grids, query history, schema visualization, charts.",
    tags: ["Electron", "SQLite", "JavaScript"],
    cover: "amber",
    context:
      "Both built because I needed to look inside SQLite files and existing tools were bloated or paid. DbSentinel is the full-featured one; dbgui is the lighter quick-browser. BLOB preview was hardest — images, hex dumps, and truncated text for binary columns without crashing on a 50 MB blob.",
    approach: [
      { title: "BLOB preview", body: "Images, hex, truncated text for binary columns. Memory-safe on large blobs." },
      { title: "CRUD + query history", body: "Editable grids, saved queries, schema visualization." },
      { title: "Cross-platform packaging", body: "Electron + native installers for Linux and Windows." },
    ],
    stack: ["Electron", "SQLite", "JavaScript"],
    ...gh("DbSentinel"),
  },
  {
    slug: "salah-desktop",
    num: "36",
    title: "Salah Time Desktop",
    org: "Personal · Desktop",
    summary:
      "Prayer-time app that lives in your system tray: always there, one click, one glance. Starts with the OS, stays out of the way.",
    tags: ["Electron", "Python", "System Tray"],
    cover: "amber",
    context:
      "Prayer times are glanced at, not studied. That drove every decision: tray icon with countdown, popup on click, full window on demand. Fetches from yabiladi.com.",
    approach: [
      { title: "System tray UX", body: "Icon always visible; popup shows next prayer + countdown. No window to manage." },
      { title: "yabiladi.com source", body: "Moroccan prayer times via scraping/API from yabiladi." },
      { title: "Auto-start", body: "Launches with the OS; lives quietly until needed." },
    ],
    stack: ["Electron", "Python"],
    ...gh("Salah-Morocco"),
  },

  // ── DEV TOOLING ───────────────────────────────────────────────
  {
    slug: "comit",
    num: "37",
    title: "comit",
    org: "Personal · CLI",
    summary:
      "One Git command instead of 40. Wraps branch-start, sync, ship, and fixup workflows — not a Git wrapper, a workflow encoder.",
    tags: ["Bash", "Git", "CLI", "GitHub"],
    cover: "paper",
    context:
      "How many commands to switch branch, pull, rebase, run checks, push, and open a PR? Seven. Forget one and you're debugging why CI failed on a stale branch. comit knows the sequence, not just the commands.",
    approach: [
      { title: "comit start <name>", body: "Branch from main, pull latest, set upstream. One command." },
      { title: "comit ship", body: "Run checks, push, open PR via gh. Fails loudly if checks fail." },
      { title: "comit sync / fixup", body: "Pull + rebase + status. Amend + force-push-with-lease, safely." },
    ],
    stack: ["Bash", "Git", "GitHub CLI"],
    ...gh("comit"),
  },
  {
    slug: "pixel-perfect",
    num: "38",
    title: "This Portfolio",
    org: "Personal · Web",
    summary:
      "The site you're reading: TanStack Start + React 19 + Tailwind, SSR, deployed on my Contabo VPS via Dokploy with automatic TLS.",
    tags: ["React", "TanStack", "TypeScript", "Tailwind", "Docker"],
    cover: "steel",
    context:
      "A portfolio should be fast, self-hosted, and honest about what's real. Every project here links to its GitHub repo (or the planned name). Built with TanStack Start for SSR, containerized with Docker, served from naoufalelouahabi.com.",
    approach: [
      { title: "TanStack Start SSR", body: "Server-side rendering for SEO and first-paint speed. File-based routing with type-safe params." },
      { title: "Docker + Dokploy", body: "Multi-stage build → single container → Dokploy compose app on Contabo. Traefik handles TLS via Let's Encrypt." },
      { title: "Data-driven projects", body: "Every case study lives in one typed data file. Adding a project = adding an object." },
    ],
    stack: ["React 19", "TanStack Start", "TypeScript", "Tailwind CSS", "Docker", "Dokploy"],
    ...gh("pixel-perfect"),
  },
];

export const OBSIDIAN_PLUGINS: {
  name: string;
  blurb: string;
  status: "Published" | "Open source" | "In construction";
  github: string;
}[] = [
  {
    name: "Wordlist Autocomplete",
    blurb: "Domain-aware vocabulary autocomplete from JSON wordlists — prefix, shorthand and contains matching, with contextual learning that re-ranks suggestions from your own choices. On the Obsidian Community Plugins registry.",
    status: "Published",
    github: "https://github.com/Elouahabi-Naoufal/obsidian-wordlist-autocomplete",
  },
  {
    name: "Folder Focus",
    blurb: "Hide and show folders in the file explorer to cut visual noise — searchable pickers, bulk hide/unhide, and a keep-specific mode for deep vaults with hundreds of folders.",
    status: "Open source",
    github: "https://github.com/Elouahabi-Naoufal/obsidian-folder-focus",
  },
  {
    name: "Subject Manager",
    blurb: "Turns the vault into an academic management system: subjects, notes, projects, assignments and exams — each linked to its university course. Built around the EMSI workload.",
    status: "In construction",
    github: "https://github.com/Elouahabi-Naoufal/obsidian-subject-manager",
  },
  {
    name: "Islam Plugin",
    blurb: "Salah (missed/active prayer) accounting with a dashboard and period-based bulk calculation — persistent, quantified, and reviewable without leaving the notes.",
    status: "Open source",
    github: "https://github.com/Elouahabi-Naoufal/obsidian-islam-plugin",
  },
];

export const TOOLKIT: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "TypeScript", "Java", "C/C++", "JavaScript"] },
  { group: "Data engineering", items: ["Apache Airflow", "Snowflake", "dbt", "Kafka", "Spark", "DuckDB", "MinIO", "Hadoop"] },
  { group: "AI & ML", items: ["scikit-learn", "XGBoost", "PyTorch", "Splink", "NLP", "LLM APIs", "Ollama"] },
  { group: "MLOps & infra", items: ["Docker", "Docker Compose", "Traefik", "Dokploy", "Git", "CI/CD", "Linux"] },
  { group: "Web & product", items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Spring Boot", "PostgreSQL"] },
];

export const EXPLORING = [
  { label: "MLOps", text: "Model versioning, drift monitoring, and reproducible training pipelines — building the lifecycle platform." },
  { label: "LLM systems", text: "Retrieval, evaluation, and making LLM apps reliable in production — RAG done right, not demoed right." },
  { label: "Streaming", text: "Kafka + Spark Streaming for real-time pipelines — the batch-to-streaming shift is the interesting part." },
];

export const ARCHIVE: { category: ProjectCategory; blurb: string; accent: CoverColor; slugs: string[] }[] = [
  {
    category: "Data Engineering",
    blurb: "Pipelines, warehouses, orchestration — turning raw data into trustworthy tables.",
    accent: "blue",
    slugs: ["dataops-platform", "data-warehouse-etl", "airbyte-minio-airflow", "excel-extractor"],
  },
  {
    category: "Big Data",
    blurb: "Distributed computation on Hadoop and Spark — where single machines give up.",
    accent: "violet",
    slugs: ["dna-mapreduce", "pagerank-hdfs", "bibliometrics-mapreduce"],
  },
  {
    category: "AI / ML",
    blurb: "Models, agents, and systems that learn — from probabilistic matching to multi-agent negotiation.",
    accent: "coral",
    slugs: ["entity-resolution", "nids-cic-ids2017", "chatsphere", "sentiment-imdb", "sma-hospital", "sma-room-booking", "personal-assistant"],
  },
  {
    category: "Full-Stack",
    blurb: "Products people (actually) use — invoicing, budgets, inventory, conversion.",
    accent: "green",
    slugs: ["toolmesh", "invoice-platform", "poolsplit", "pearl-gleam", "habitflow", "riseup", "format-fusion", "django-inventory", "social-downloader", "budgetly", "stockmaster", "emsi-share-learn", "medical-microservices"],
  },
  {
    category: "Mobile & Desktop",
    blurb: "Native Android, JavaFX simulations, Electron utilities — where the pixels live.",
    accent: "amber",
    slugs: ["m-health", "salah-android", "academic-assistant", "air-traffic-manager", "pdfforge", "dbsentinel-dbgui", "salah-desktop"],
  },
  {
    category: "Dev Tooling",
    blurb: "CLI workflows, plugins, and scripts — making the tools fit the way I work.",
    accent: "steel",
    slugs: ["comit", "pixel-perfect"],
  },
  {
    category: "Obsidian",
    blurb: "Plugins I wrote for my own knowledge workflow — one published on the Community registry.",
    accent: "steel",
    slugs: ["obsidian-plugins"],
  },
  {
    category: "Infrastructure",
    blurb: "Homelab, self-hosting, reverse proxies — running my own cloud.",
    accent: "ink",
    slugs: ["homelab"],
  },
];
