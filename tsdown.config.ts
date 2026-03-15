import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/main.ts',
  outDir: 'scripts',
  target: 'ES2024',
  deps: {
    neverBundle: /^@minecraft\/(?!vanilla-data|math)/,
    alwaysBundle: ['**/*'],
    onlyBundle: false,
  },
  outExtensions: () => ({ js: '.js' }),
  sourcemap: true,
});
