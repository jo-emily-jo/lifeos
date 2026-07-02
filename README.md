# Life OS — Analyzer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A production-ready Next.js port of the Life OS Analyzer prototype — a
**private judgment file** that co-authors an interpretation of a life's
operating system. Not a personality test, not coaching: an intelligent mirror.

## Contents

- [Stack](#stack)
- [Setup](#setup)
- [Architecture](#architecture)
- [Report taxonomy](#report-taxonomy-case-file-ai-then-the-constitution)
- [Design law](#design-law)
- [Live AI](#live-ai)
- [Contributing](#contributing)
- [License](#license)

## Stack
- **Next.js 15** App Router · **React 19** · **TypeScript**
- **Tailwind CSS v3** with the Life OS "Taste Bible" tokens
- **shadcn/ui** conventions (`components/ui`, `components.json`, `cn()`)
- Dark-mode-first, responsive (sidebar collapses to a drawer under `lg`)

## Setup
```bash
pnpm install        # or npm install
pnpm dev            # http://localhost:3000
```
shadcn is pre-wired (`components.json`); add more primitives with
`pnpm dlx shadcn@latest add <component>`.

## Architecture
```
app/
  layout.tsx        # fonts (Newsreader/Archivo/IBM Plex Mono), dark class, grain
  page.tsx          # holds active SectionId, renders <AppShell> + <ReportRouter>
  globals.css       # tokens, grain overlay, scrollbar, .meta utility
components/
  shell/            # AppShell, Masthead, CaseFileNav (mobile drawer built in)
  reports/          # one component per report A–H + ReportRouter + ReportSection
  charts/           # RadarChart, SaysDoesBar, TrajectoryChart (props-driven SVG)
  reflection/       # PhilosophicalMirror + MirrorCard (live Claude follow-up)
  constitution/     # LifeConstitution + EditableItem (7 editable articles)
  ui/               # shadcn primitives restyled to tokens (button, card, …)
lib/
  tokens.ts         # signal/ink colour constants
  nav.ts            # case-file table of contents
  persona.ts        # OPERATOR-04F demo data (the shape an AI step returns)
  claude.ts         # window.claude bridge + graceful fallback
  utils.ts          # cn()
types/
  index.ts          # SectionId, Hypothesis, all report + constitution types
```

### Report taxonomy (case file A–I, then the Constitution)
A Repeated Patterns · B Decision Architecture · C Motivation System ·
D Stress System · E Shadow of Strength · F Environmental Origins ·
G Contradiction Map · H Future Trajectory · I Philosophical Mirror ·
**§ Life Constitution** (Core Drivers · Non-Negotiables · Failure Modes ·
Decision Rules · Relationship Patterns · Growth Edges · Future Commitments).

Add a report by dropping a component in `components/reports`, exporting it from
`index.ts`, registering it in `ReportRouter`, and adding a `NavItem` in `lib/nav.ts`.

### Design law
Warm ink canvas (`#14110D`), ivory paper, three meaning-only signals —
**umber** (decision), **dust** (evidence/reflection), **oxblood** (contradiction).
No green, neon, gradient, or glow. Serif titles, sans UI, mono metadata. Tokens
live in `tailwind.config.ts`; full rationale in the project's Taste Bible.

### Live AI
`lib/claude.ts` calls `window.claude.complete` when present (artifact host) and
otherwise returns an authored fallback, so the Mirror's follow-up question always
resolves. For your own deployment, swap its body for a `fetch('/api/complete')`
route handler that keeps `ANTHROPIC_API_KEY` server-side.

### Full flow (built)
`app/page.tsx` wraps everything in `AnalyzerProvider` (`lib/store.tsx` — a
`useReducer` state machine) and switches screens:
`intro → intake → analyzing → report`.

```
components/
  screens/   IntroScreen · IntakeScreen · AnalyzingScreen · ReportScreen
  intake/    TranscriptThread (interlocutor Q + chips + dock) ·
             EmergingPanel (Hypotheses / Timeline tabs) · HypothesisCard
lib/
  intake.ts  QUESTIONS, HYPOTHESES_BY_Q, ANALYSIS_STAGES, colour maps
  store.tsx  AnalyzerProvider + useAnalyzer() — transcript, live-AI reflections,
             emerging hypotheses (Resonates / Refine / Not me), synth → reports
```
Co-interpretation is the heart: as you answer, evidence-backed **hypotheses**
surface in the right rail, each one yours to agree with, refine in your own
words, or reject — every response updates confidence. The two AI questions use
`lib/claude.ts` (live `window.claude` with authored fallback).

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for
development setup, conventions, and the pull-request process. Bug reports and
feature requests go through the [issue templates](.github/ISSUE_TEMPLATE).

## License

Released under the [MIT License](LICENSE). © 2026 Emily Jo.
