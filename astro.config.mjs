// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

const font = (/** @type {string} */ file) => `./src/assets/fonts/${file}`;

export default defineConfig({
  site: 'https://www.franciscayco.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  // Self-hosted fonts (copied from @fontsource by `npm run sync-fonts`).
  // Astro emits the @font-face rules, hashed files and metric-adjusted fallbacks.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Big Shoulders Display',
      cssVariable: '--ff-display',
      fallbacks: ['Impact', 'sans-serif'],
      options: {
        variants: [
          { src: [font('big-shoulders-display-latin-700-normal.woff2')], weight: 700, style: 'normal' },
          { src: [font('big-shoulders-display-latin-800-normal.woff2')], weight: 800, style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Barlow',
      cssVariable: '--ff-text',
      fallbacks: ['Helvetica Neue', 'sans-serif'],
      options: {
        variants: [
          { src: [font('barlow-latin-400-normal.woff2')], weight: 400, style: 'normal' },
          { src: [font('barlow-latin-400-italic.woff2')], weight: 400, style: 'italic' },
          { src: [font('barlow-latin-500-normal.woff2')], weight: 500, style: 'normal' },
          { src: [font('barlow-latin-600-normal.woff2')], weight: 600, style: 'normal' },
          { src: [font('barlow-latin-700-normal.woff2')], weight: 700, style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Mono',
      cssVariable: '--ff-mono',
      fallbacks: ['Menlo', 'monospace'],
      options: {
        variants: [
          { src: [font('ibm-plex-mono-latin-400-normal.woff2')], weight: 400, style: 'normal' },
          { src: [font('ibm-plex-mono-latin-500-normal.woff2')], weight: 500, style: 'normal' },
        ],
      },
    },
  ],
});
