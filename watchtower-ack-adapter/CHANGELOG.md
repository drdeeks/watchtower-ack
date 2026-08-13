# CHANGELOG — character-kit-watchtower-bridge

> Append-only. Newest entry on top. One line per meaningful change.
> Update this on EVERY change, in lockstep with `AGENTS.md` §8 and `README.md`.

## Cadence rule

- **Every commit that changes behavior, contracts, or structure** → add an entry.
- **Every session that touches this repo** → add a dated status line even if
  only docs changed.
- Format: `- YYYY-MM-DD — <what changed> — <verified outcome>`
- Never edit or delete past entries. If a prior entry was wrong, append a
  correction entry. Drift starts when this file stops being updated.

---

## Entries

- 2026-08-10 — Initial scaffold + Phase 0/1/4 complete — 12/12 unit tests pass,
  `tsc --noEmit` clean. Repo `git init` + first commit `ba52050`. Tarball
  `character-kit-watchtower-bridge.tar.gz` placed in `federation-repo/`.
- 2026-08-10 — `README.md` / `AGENTS.md` / `CHANGELOG.md` refreshed with
  proven-vs-not-proven status split, boundary rules, and maintenance cadence.
- 2026-08-10 — Phase 2 (Character Kit client) left as boundary stub by design;
  real socket/Python transport deferred. Phase 3 (Watchtower client) uses real
  SDK surface but unexercised against live endpoint in tests.
