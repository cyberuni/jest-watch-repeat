---
'jest-watch-repeat': patch
---

Rebuild with tsdown (rolldown) instead of `tsc`.

No API change. The published entry keeps its exact contract —
`require('jest-watch-repeat')` still returns the `RepeatPlugin` class itself, and
`dist/index.d.ts` still declares `export =` — but the emitted JavaScript is
produced by a different compiler, so the bytes in `dist/` differ. `dist/` also
gains declaration maps and one rolldown interop helper. No published path is
removed.
