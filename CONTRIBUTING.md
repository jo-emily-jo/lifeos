# Contributing to Life OS

Thanks for your interest in contributing! Life OS is an early-stage prototype,
and contributions of all kinds are welcome — bug reports, features, docs, and
design feedback.

## Code of Conduct

Be respectful and constructive. We aim for a welcoming, harassment-free
environment for everyone. By participating, you agree to uphold this standard.

## Getting started

```bash
git clone https://github.com/jo-emily-jo/lifeos.git
cd lifeos
pnpm install        # or npm install
pnpm dev            # http://localhost:3000
```

## Development workflow

1. **Fork** the repo and create a branch from `main`:
   ```bash
   git checkout -b feat/your-feature
   ```
2. Make your changes, keeping them focused and small where possible.
3. Run the checks locally before pushing:
   ```bash
   pnpm lint
   pnpm build
   ```
4. Commit with a clear message (see below) and open a pull request.

## Branch & commit conventions

- Branch names: `feat/…`, `fix/…`, `docs/…`, `chore/…`, `refactor/…`
- Commit messages: imperative mood, present tense
  (e.g. `Add contradiction map export`, not `Added…`).
- Keep unrelated changes in separate PRs.

## Project conventions

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v3 · shadcn/ui.
- **Design law:** warm ink canvas, ivory paper, three meaning-only signals
  (umber = decision, dust = evidence/reflection, oxblood = contradiction).
  No green, neon, gradient, or glow. Serif titles, sans UI, mono metadata.
  Tokens live in `tailwind.config.ts`.
- **Adding a report:** drop a component in `components/reports`, export it from
  `index.ts`, register it in `ReportRouter`, and add a `NavItem` in `lib/nav.ts`.
- Prefer existing UI primitives in `components/ui` over new dependencies.

## Pull requests

- Fill out the PR template.
- Link any related issue (`Closes #123`).
- Ensure `pnpm lint` and `pnpm build` pass.
- Screenshots or short clips are hugely appreciated for UI changes.

## Reporting bugs & requesting features

Use the [issue templates](.github/ISSUE_TEMPLATE). Please search existing
issues first to avoid duplicates.

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](LICENSE).
