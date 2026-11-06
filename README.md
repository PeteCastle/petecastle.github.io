# franciscayco.com

Francis Mark Cayco's portfolio, built with [Astro](https://astro.build) and Tailwind CSS on
**Kiko's Design System** (cut corners, one crimson signal, one gold accent, Night and Day themes),
deployed to GitHub Pages by GitHub Actions.

## Develop

Requires Node 22.23.4 or newer (`.nvmrc`).

```bash
nvm use
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build into dist/
npm run preview   # serve dist/
```

## Edit the content

Everything on the site is read from `src/content/` and every number shown (projects, roles,
tools, per-area and per-year counts) is computed from it at build time.

| What | Where |
|---|---|
| Name, lead sentence, contact, social links, bio, SEO | `src/content/profile/main.md` |
| Jobs (one file each, bullets in the body) | `src/content/jobs/*.md` |
| Featured projects (cover image beside each) | `src/content/featured/*/index.md` |
| All other projects | `src/content/projects/*.md` |
| Tools by category | `src/content/skills.yaml` |
| Certifications (scan beside each) | `src/content/certifications/*.yaml` |
| Education | `src/content/education/*.yaml` |

Each project needs an `area` (`ml`, `de`, `software`, `analytics`, `cv` or `nlp`); it drives the
filter on `/projects/`. The schemas live in `src/content.config.ts`, and `npm run build` fails on
a missing or misspelled field.

The résumé is `public/Francis Mark Cayco - Resume Latest.pdf`; replace the file and keep the name.

## Design system

- `src/styles/tokens.css`: colour, type, spacing, chamfer and motion tokens for Night (default)
  and Day.
- `src/styles/components.css`: the `ch-*` components (button, link, card, tag, switch, table,
  stats, dialog, tabs) and the type scale.
- `src/styles/layout.css`: page layout and sections.
- `src/styles/global.css`: layer order and the Tailwind setup. Tailwind's stock palette, radii,
  shadows and blurs are removed, so utilities can only reach the system's own tokens.

## Assets

```bash
npm run sync-fonts                              # copy the 9 woff2 files from @fontsource
npm run favicons                                # favicon set from src/assets/brand/fm-tile.svg
python3 scripts/og.py <dir-with-ttf-fonts>      # public/og_image.png (1200x630)
python3 scripts/headshot.py                     # one-time square crop of the headshot
```

Fonts are self-hosted through Astro's Fonts API; the built site makes no third-party requests.

## Deploy

Pushing to `source` runs `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages. Pull requests into `source` run a build check (`.github/workflows/ci.yml`).

One-time repository settings for the switch from the old Gatsby deploy:

1. **Settings → Environments → github-pages → Deployment branches and tags**: add `source`.
2. **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.

The custom domain (`www.franciscayco.com`) and HTTPS stay as configured in the Pages settings.
