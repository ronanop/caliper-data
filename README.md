# Calipers

Marketing site for Calipers, built with React, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm start          # serve dist/ with server.js on http://localhost:3000
```

Requires Node.js `^20.19.0 || >=22.12.0` (Node 22 recommended, see `.nvmrc`).

## Deploying to Hostinger (Node.js Web App)

In hPanel go to **Websites → Add Website → Node.js web app**, then either
**Import Git repository** (connect GitHub and pick this repo, every push to
`main` redeploys) or **Upload archive** (run `npm run zip` and upload
`calipers-hostinger.zip`; it contains the last commit, so commit first).

Hostinger auto-detects the settings from `package.json`. Confirm they match
one of the options below.

### Option A: static (recommended)

Hostinger builds the site and serves `dist/` directly.

| Field            | Value          |
| ---------------- | -------------- |
| Framework preset | `React`        |
| Node.js version  | `22`           |
| Root directory   | `/`            |
| Build command    | `build`        |
| Output directory | `dist`         |
| Entry file       | leave empty    |

### Option B: Node server

Runs `server.js`, which serves `dist/` with gzip, cache headers, and a
`/healthz` endpoint. Use this if you need server-side behaviour later.

| Field            | Value          |
| ---------------- | -------------- |
| Framework preset | `Other`        |
| Node.js version  | `22`           |
| Root directory   | `/`            |
| Build command    | `build`        |
| Output directory | leave empty    |
| Entry file       | `server.js`    |

`server.js` listens on the `PORT` Hostinger provides. If `dist/` is missing at
startup it runs the Vite build itself, so the app still boots if the build
step is skipped.

No environment variables are required.
