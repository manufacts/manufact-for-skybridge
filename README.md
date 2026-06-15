[![Deploy to mcp-use](https://cdn.mcp-use.com/deploy.svg)](https://mcp-use.com/deploy/start?repository-url=https%3A%2F%2Fgithub.com%2Fmanufacts%2Fmanufact-for-skybridge&branch=main&project-name=manufact-for-skybridge&port=3000&runtime=node&base-image=node%3A24)

<div align="center">

# Skybridge MCP Apps example

**Reference server for the [Skybridge deploy guide](https://mcp-use.com/blog/mcp-app-with-skybridge)** — same `echo` + `greet_widget` example used in our [seven-framework comparison](https://mcp-use.com/blog/deploying-seven-mcp-frameworks).

Built with [`skybridge`](https://github.com/alpic-ai/skybridge) — React views with dual-runtime emission (MCP Apps + ChatGPT Apps SDK).

**Live demo:** [`calm-pulse-tt2fj.run.mcp-use.com/mcp`](https://calm-pulse-tt2fj.run.mcp-use.com/mcp)

</div>

---

## Deploy to Manufact Cloud

Click the badge above, or open the [one-click deploy flow](https://mcp-use.com/deploy/start?repository-url=https%3A%2F%2Fgithub.com%2Fmanufacts%2Fmanufact-for-skybridge&branch=main&project-name=manufact-for-skybridge&port=3000&runtime=node&base-image=node%3A24). Sign in, connect GitHub, and Manufact clones this repo into your account and deploys it.

If you deploy manually from the dashboard instead:

| Setting | Value |
| --- | --- |
| **Port** | `3000` |
| **Build command** | *(leave empty — use the repo's Dockerfile)* |
| **Start command** | *(leave empty — the Dockerfile runs `node dist/server.js`)* |

Manufact detects `skybridge` and uses this repo's **Dockerfile** (Node 24) instead of a generated image. The Dockerfile keeps the Vite manifest next to `dist/server.js` where Skybridge expects it.

Requires **Node 24+** (`engines.node` in `package.json`).

---

## What's in this repo

- An `echo` tool (text-only)
- A `greet_widget` tool with `view: { component: "greet" }` and matching `src/views/greet.tsx`
- Streamable HTTP at `/mcp` via Skybridge's production server
- Dual widget resources: MCP Apps (`ext-apps`) and OpenAI Apps SDK (`apps-sdk`)

---

## Getting started

```bash
npm install
npm run dev
```

For a production-style local run:

```bash
npm run build
npm start
```

Open `http://localhost:3000/mcp`.

Or build and run with Docker:

```bash
docker build -t manufact-for-skybridge .
docker run -p 3000:3000 manufact-for-skybridge
```

---

## Project layout

```
src/
  server.ts       # Tool registration
  views/
    greet.tsx     # React view (useToolInfo)
Dockerfile        # Production image (Node 24)
vite.config.ts
```

See the [deploy guide](https://mcp-use.com/blog/mcp-app-with-skybridge) for the full reference server walkthrough.
