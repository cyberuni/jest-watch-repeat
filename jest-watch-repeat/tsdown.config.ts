import { defineConfig } from 'tsdown'

/**
 * One output, matching exactly what the package has always published: `dist/*.js`
 * CommonJS, one file per source module (`unbundle`), alongside `.d.ts` and source
 * maps that resolve against the `ts/` sources the package also ships.
 *
 * CommonJS is not a legacy detail here — jest `require`s a watch plugin's `main` and
 * uses the export directly, and `ts/index.ts` uses `export =` so that
 * `require('jest-watch-repeat')` yields the class itself rather than a namespace.
 * rolldown preserves that: the emitted entry is `module.exports = RepeatPlugin`,
 * the same contract tsc emitted.
 */
export default defineConfig({
	entry: ['ts/**/*.ts', '!ts/**/*.spec.ts'],
	format: 'cjs',
	outDir: 'dist',
	platform: 'node',
	unbundle: true,
	sourcemap: true,
	dts: { sourcemap: true },
	outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
	clean: ['dist']
})
