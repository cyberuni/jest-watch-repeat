---
'jest-watch-repeat': patch
---

Stop shipping test files in the published tarball, and restore `LICENSE`.

`files` listed the whole `ts` source directory, so `ts/RepeatPlugin.spec.ts` and
`ts/RepeatPrompt.spec.ts` went out in 3.0.2. `LICENSE` only existed at the monorepo
root, where npm cannot pick it up, so the package had quietly lost it.
