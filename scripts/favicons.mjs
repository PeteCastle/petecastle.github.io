#!/usr/bin/env node
/**
 * Renders the favicon set from the crimson FM tile (src/assets/brand/fm-tile.svg):
 *   public/favicon.svg            the tile itself
 *   public/favicon-32.png         32x32 tile, full bleed
 *   public/favicon.ico            16 + 32
 *   public/apple-touch-icon.png   180x180, tile on the Night canvas
 *   public/icon-192.png           192x192, same (manifest, any + maskable)
 *   public/icon-512.png           512x512, same
 *
 * Usage: npm run favicons
 */
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import pngToIco from 'png-to-ico';
import sharp from 'sharp';

const SRC = path.resolve('src/assets/brand/fm-tile.svg');
const OUT = path.resolve('public');
const NIGHT = '#141414';

const svg = await readFile(SRC);

/** The tile rendered at n x n, full bleed, transparent corners. */
const tile = (n) => sharp(svg, { density: 72 * (n / 48) * 4 }).resize(n, n).png().toBuffer();

/** The tile at 80% centred on the Night canvas (safe for maskable icons). */
async function onCanvas(n) {
  const inner = Math.round(n * 0.8);
  const tilePng = await tile(inner);
  return sharp({ create: { width: n, height: n, channels: 4, background: NIGHT } })
    .composite([{ input: tilePng, gravity: 'centre' }])
    .png()
    .toBuffer();
}

const png16 = await tile(16);
const png32 = await tile(32);

await copyFile(SRC, path.join(OUT, 'favicon.svg'));
await writeFile(path.join(OUT, 'favicon-32.png'), png32);
await writeFile(path.join(OUT, 'favicon.ico'), await pngToIco([png16, png32]));
await writeFile(path.join(OUT, 'apple-touch-icon.png'), await onCanvas(180));
await writeFile(path.join(OUT, 'icon-192.png'), await onCanvas(192));
await writeFile(path.join(OUT, 'icon-512.png'), await onCanvas(512));

for (const f of ['favicon.svg', 'favicon-32.png', 'favicon.ico', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) {
  const { size } = await import('node:fs').then((fs) => fs.statSync(path.join(OUT, f)));
  console.log(`${f}  ${(size / 1024).toFixed(1)} KB`);
}
