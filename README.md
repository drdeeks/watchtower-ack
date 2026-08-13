# Federation Adapters

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&logoColor=white)](watchtower-ack-adapter/package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](watchtower-ack-adapter/tsconfig.json)
[![Status](https://img.shields.io/badge/status-early%20scaffolding-yellow)](watchtower-ack-adapter/docs/ADAPTER_SPEC_SHEET.md)

Home for the translator/bridge layer between independent primitives in The
Federation ecosystem. An adapter here owns no policy of its own — it
normalizes one system's activity into another's event model, nothing more.
Each is disposable: remove it and both primitives it bridges still work
independently. That's the correctness test for anything living in this repo.

## Packages

| Package | Bridges | Status |
|---|---|---|
| [`watchtower-ack-adapter/`](watchtower-ack-adapter/) | [Agent Character Kit](https://github.com/drdeeks/character-kit) (local behavioral enforcement) ⇄ [Federation Watchtower](https://github.com/drdeeks/federation-watchtower) (federation/observability) | Scaffolded, not yet functional end-to-end — see its own `docs/ADAPTER_SPEC_SHEET.md` and `AGENTS.md` §8 for real phase-by-phase status |

More adapters land here over time as The Federation grows — this repo is
the shared home for all of them, not a single-purpose package.

## Ground rules for anything added here

- An adapter must not depend on the internals of the systems it bridges
  beyond their published/intended integration surface.
- An adapter owns no identity, no policy, no habits, no federation rules —
  those belong to the systems it connects, never duplicated here.
- Fail-closed: a bridge that can't reach one side never grants permission
  it can't verify from the other.
- Each package is independently removable. A shared root `.gitignore`
  covers common Node/TS/Python patterns for every package; package-specific
  config (tsconfig, package.json, etc.) stays inside that package's own
  directory.
