import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/main.ts',
  outDir: 'scripts',
  target: 'ES2024',
  external: /^@minecraft\/(?!vanilla-data|math)/,
  outExtensions: () => ({ js: '.js' }),
});
