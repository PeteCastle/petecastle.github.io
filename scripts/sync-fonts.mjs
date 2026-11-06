#!/usr/bin/env node
/**
 * Copies the nine latin woff2 files the site uses from the @fontsource packages
 * into src/assets/fonts/, where the Astro Fonts API (local provider) picks them up.
 * The copies are committed, so the build never fetches fonts from a third party.
 *
 * Usage: npm run sync-fonts
 */
import { copyFile, mkdir, stat } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const outDir = path.resolve('src/assets/fonts');

const FILES = [
  ['@fontsource/big-shoulders-display', 'big-shoulders-display-latin-700-normal.woff2'],
  ['@fontsource/big-shoulders-display', 'big-shoulders-display-latin-800-normal.woff2'],
  ['@fontsource/barlow', 'barlow-latin-400-normal.woff2'],
  ['@fontsource/barlow', 'barlow-latin-400-italic.woff2'],
  ['@fontsource/barlow', 'barlow-latin-500-normal.woff2'],
  ['@fontsource/barlow', 'barlow-latin-600-normal.woff2'],
  ['@fontsource/barlow', 'barlow-latin-700-normal.woff2'],
  ['@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff2'],
  ['@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-500-normal.woff2'],
];

await mkdir(outDir, { recursive: true });
let total = 0;
for (const [pkg, file] of FILES) {
  const src = path.join(path.dirname(require.resolve(`${pkg}/package.json`)), 'files', file);
  const dest = path.join(outDir, file);
  await copyFile(src, dest);
  const { size } = await stat(dest);
  total += size;
  console.log(`${file}  ${(size / 1024).toFixed(1)} KB`);
}
console.log(`${FILES.length} files, ${(total / 1024).toFixed(0)} KB -> ${path.relative(process.cwd(), outDir)}`);
