# Project Rebirth — Sustainable Community Development Project

Marketing website for **Project Rebirth**, a 501(c)(3) initiative engineering the
systemic eradication of housing insecurity through scalable, 3D‑printed
infrastructure and high‑impact vocational training. Fiscally sponsored by The Way
of Yeshua Ministries.

- **Live site:** https://rebirthsdc.org
- **Hosting:** GitHub Pages (static export), deployed via GitHub Actions
- **Repository:** https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org

> Built and maintained by [Free For Charity](https://freeforcharity.org), which
> provides free websites and domain management for nonprofits.

## Tech stack

- **Next.js (App Router, TypeScript)** with `output: 'export'` — fully static
- **Tailwind CSS v4** for styling (design tokens in `src/app/globals.css`)
- **next/font** (self‑hosted Google fonts): Cinzel (display), Montserrat (nav/labels), Open Sans (body)
- **framer-motion** (nav/menu animation), **lucide-react** / **react-icons** (icons)
- Tooling: ESLint, Prettier, Jest + Testing Library (+ jest‑axe), Playwright, Husky, Commitlint, Lighthouse CI

## Site structure

Multi‑page site (each section is its own kebab‑case route):

| Route                | Section                                           |
| -------------------- | ------------------------------------------------- |
| `/`                  | Home — hero, feature cards                        |
| `/mission`           | The Core Mission + The Mandate                    |
| `/director`          | Founder & Managing Director                       |
| `/technology`        | Additive technology, Forge Mix                    |
| `/partnerships`      | Multidisciplinary partnership pillars             |
| `/resources`         | Resource links                                    |
| `/community`         | Registration / community links                    |
| `/portal`            | "Coming Soon" innovation portal + updates sign‑up |
| `/privacy-policy`    | Privacy Policy                                    |
| `/terms-of-use`      | Terms of Use                                      |
| `/legal-disclosures` | Legal Disclosures & 501(c)(3)                     |
| `/fair-housing`      | Fair Housing                                      |

Navigation (with Resources/Community dropdowns) and the footer are global,
defined in `src/components/header` and `src/components/footer`.

> When you add or remove a route, update `src/app/sitemap.ts` and the route list
> in `tests/test.config.ts` (the e2e smoke test iterates it).

## Content & data

Section copy and links live in data files so text can be edited without touching JSX:

- `src/data/project-rebirth/site.ts` — org info, contact, nav, external links (Zeffy, Google Form)
- `src/data/project-rebirth/content.ts` — per‑section copy
- `src/data/project-rebirth/legal.ts` — legal/policy page content

## Project structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Header, Footer, GTM, cookie consent, fonts, metadata)
│   ├── page.tsx                  # Home (renders app/home-page)
│   ├── home-page/                # Home composition (Hero + FeatureCards)
│   ├── globals.css               # Theme tokens + utilities (maroon/ink/phoenix palette)
│   ├── mission/  director/  technology/  partnerships/      # section routes
│   ├── resources/  community/  portal/                      # section routes
│   ├── privacy-policy/  terms-of-use/  legal-disclosures/  fair-housing/   # legal routes
│   ├── robots.ts                 # robots.txt
│   └── sitemap.ts                # sitemap.xml
├── components/
│   ├── header/                   # route-based nav with dropdowns
│   ├── footer/                   # contact, legal links, Fair Housing, fiscal sponsor
│   ├── cookie-consent/           # GDPR cookie banner
│   ├── google-tag-manager/       # GTM (lazyOnload) + noscript
│   └── project-rebirth/          # Logo, PartnerButton, Primitives, PolicyDoc, sections/
├── data/project-rebirth/         # site.ts, content.ts, legal.ts
└── lib/
    ├── assetPath.ts              # prefixes NEXT_PUBLIC_BASE_PATH for assets
    └── fonts.ts                  # next/font config
public/
├── Images/project-rebirth/       # logo, photos (self-hosted)
└── videos/                       # hero background video
```

## Local development

Requires Node.js 20+.

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000 (Turbopack)
```

### Build & preview the static export

```bash
npm run build      # static export to ./out
npm run preview    # serve ./out at http://localhost:3000
```

### Quality checks

```bash
npm run format         # Prettier (write)
npm run lint           # ESLint
npm test               # Jest unit tests
npm run test:e2e       # Playwright e2e (builds + serves ./out; needs `npx playwright install chromium` once)
npm run check-links    # Linkinator over ./out
```

A Husky pre‑commit hook runs `format:check` + `lint`, and Commitlint enforces
[Conventional Commits](https://www.conventionalcommits.org/).

## Media & assets

All images, the hero video, and the phoenix logo are **self‑hosted** under
`public/` and referenced via `assetPath()` (so they work under a GitHub Pages
basePath as well as the custom domain). Some current photos/video are interim
stock with watermarks pending licensed/high‑res originals — tracked in the repo
issues.

## External dependencies (runtime)

Intentional third‑party integrations only:

- **Google Tag Manager** — analytics (`GTM-…`), loaded on consent
- **Zeffy** — donation form ("Partner With Us" buttons)
- **Google Forms** — "Sign Up for Updates" on `/portal`

Fonts are downloaded at build time and served from the site; there are no other
runtime external asset dependencies.

## Deployment

Static export deployed to **GitHub Pages** via GitHub Actions:

1. `CI - Build and Test` (`.github/workflows/ci.yml`) runs format, lint, unit tests, build, and e2e on PRs and pushes to `main`.
2. `Deploy to GitHub Pages` (`.github/workflows/deploy.yml`) runs after CI succeeds on `main`, builds, and publishes `./out`.
3. The custom domain `rebirthsdc.org` is set via `public/CNAME`; the project Pages URL `https://freeforcharity.github.io/FFC-EX-rebirthsdc.org/` redirects to it.

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for details.

## Documentation

- **[QUICK_START.md](./QUICK_START.md)** — fast setup
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** — how to contribute
- **[TESTING.md](./TESTING.md)** — unit + e2e + accessibility testing
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — GitHub Pages deployment
- **[CODE_QUALITY.md](./CODE_QUALITY.md)** · **[RESPONSIVE_DESIGN.md](./RESPONSIVE_DESIGN.md)** · **[LIGHTHOUSE.md](./LIGHTHOUSE.md)**

### Governance & community health

- **[LICENSE](./LICENSE)** · **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)** · **[GOVERNANCE.md](./GOVERNANCE.md)** · **[MAINTAINERS.md](./MAINTAINERS.md)**
- **[SECURITY.md](./SECURITY.md)** · **[THREAT-MODEL.md](./THREAT-MODEL.md)** · **[DEPENDABOT.md](./DEPENDABOT.md)** · **[SUPPORT.md](./SUPPORT.md)**

> Note: this repository began as the Free For Charity single‑page template. Some
> remaining docs (e.g. template/Facebook‑events/content‑replacement guides) are
> legacy template artifacts being retired; see the repo issues for the
> documentation cleanup.

## License

Apache 2.0 — see [LICENSE](./LICENSE).
