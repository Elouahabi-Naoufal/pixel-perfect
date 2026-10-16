# naoufalelouahabi.com

Personal portfolio — TanStack Start + React + Tailwind (neobrutalist design), content served from PocketBase with a static fallback baked into the repo.

## Stack

- **Frontend**: TanStack Start (SSR) · React · Tailwind · deployed on Dokploy as a git application
- **Content**: [PocketBase](https://pocketbase.io) (v0.40.x) running as a Dokploy compose app at `pb.naoufalelouahabi.com`
- **Repo**: <https://github.com/Elouahabi-Naoufal/portfolio>

## Local development

```sh
npm i
npm run dev
```

Without `VITE_POCKETBASE_URL` (or with PB unreachable) the site serves the static content from `src/lib/site.ts` + `src/lib/details.ts` — the full site always works offline.

## Content management (PocketBase)

Content lives in two collections in PocketBase:

| Collection | Visibility rule | Purpose |
|---|---|---|
| `projects` | `listRule/viewRule: published = true` | All case studies; drafts hidden from the public API |
| `articles` | `listRule/viewRule: status = "published"` | Future writing (empty for now) |

- **Writes** (`create/update/delete`) are **superuser-only** — the public API can never mutate content.
- The admin dashboard is at `https://pb.naoufalelouahabi.com/_/` (superuser email/password in Dokploy env + KeePass).
- The site fetches published projects server-side in route loaders (`src/lib/pb.ts`) with a 60s `staleTime`, falling back to the static files on any error.

### Environment variables

**Frontend app** (Dokploy → portfolio application → Environment):

| Var | Example | Purpose |
|---|---|---|
| `VITE_POCKETBASE_URL` | `https://pb.naoufalelouahabi.com` | PB base URL; runtime-resolved on the server |

**PocketBase compose app** (`portfolio-pocketbase` repo):

| Var | Purpose |
|---|---|
| `PB_SUPERUSER_EMAIL` | Bootstrap superuser email (entrypoint `upsert`) |
| `PB_SUPERUSER_PASSWORD` | Bootstrap superuser password |

Data persists in the `pb_data` named volume.

### Publishing workflow

1. Edit or create a record in the PocketBase dashboard (or via the API as superuser).
2. Set `published = true` (projects) or `status = "published"` (articles) to make it visible on the site.
3. Unpublish anytime — the record disappears from the public API and the site falls back gracefully.

### Re-sync from the static source files

The TypeScript files remain the canonical seed. To push them into PocketBase (idempotent, upserts by slug):

```sh
PB_EMAIL=... PB_PASSWORD=... npx tsx scripts/pb-sync.ts
# optional, when DNS is not set up locally:
#   PB_IP=169.58.140.151
# optional, for the current self-signed cert (until DNS → real LE cert):
#   NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Backup / restore

```sh
# backup (from any machine that can reach PB as superuser)
curl -X POST "https://pb.naoufalelouahabi.com/api/collections/backups" \
  -H "Authorization: Bearer $TOKEN"
# list: GET /api/backups  ·  download: GET /api/backups/download/<name>
# restore: POST /api/backups/<name>   (on the server, via the filesystem / admin UI)
```

On the Dokploy host the raw data lives in the `pb_data` volume under the compose app; an offline backup is just a tar of that directory.
