# MaxwellAI

Replit-built full-stack web chat application presenting an AI chatbot themed around researcher Jordan Maxwell. (Repository for https://replit.com/@jclarkagain/MaxwellAI.)

## Features

- **Chat UI** — dark-first Claude/ChatGPT-inspired chat interface: message list, input box, welcome screen with suggested questions, theme toggle, typing indicator, new-chat reset (`client/src/pages/chat.tsx`, `components/`)
- **Design system** — documented color palette, typography (Inter + Playfair Display), and component guidelines (`design_guidelines.md`); shadcn/ui component library wired via `components.json`
- **Express backend** — Vite-integrated Express server with request logging for `/api` routes (`server/index.ts`, `server/vite.ts`)
- **Database schema** — Drizzle ORM `users` table (username/password) targeting Postgres (`shared/schema.ts`, `drizzle.config.ts`)
- **Anthropic SDK declared** — `@anthropic-ai/sdk` is a dependency and a Replit Anthropic integration is declared in `.replit`, but it is **not wired up**: the chat currently returns mock responses from a hardcoded list (`getMockResponse` in `chat.tsx`, marked `// TODO: remove mock functionality`), and `server/routes.ts` registers no API routes
- **Project archive** — `project-source.zip` bundled in the repo

## Tech stack

React, Vite, TypeScript, Tailwind CSS, shadcn/ui (Radix), Express, Drizzle ORM, Neon Postgres, Replit (Node 20, autoscale deployment per `.replit`).

## Getting started

Replit workflow: `npm run dev` serves client + server on port 5000. Scripts from `package.json`:

```bash
npm run dev     # tsx server/index.ts (development)
npm run build   # vite build + esbuild server bundle
npm start       # node dist/index.js (production)
npm run check   # tsc
npm run db:push # drizzle-kit push
```

## Project structure

```
client/src/        # App.tsx, pages/chat.tsx, components (chat + ui), hooks, lib
server/            # index.ts, routes.ts (stub), storage.ts, vite.ts
shared/            # schema.ts (Drizzle + zod)
design_guidelines.md
project-source.zip
.replit            # Replit config (modules, deployment, workflows)
```

## Status

Real scaffold, unfinished wiring. The chat UI is complete and renders, but AI responses are currently hardcoded mocks — no live model call exists yet, and the API layer is a stub.
