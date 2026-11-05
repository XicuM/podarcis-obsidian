import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/main.ts'],
  outfile: 'main.js',
  bundle: true,
  format: 'cjs',
  platform: 'node',
  target: 'es2021',
  external: ['obsidian', 'electron'],
  logLevel: 'info',
});
