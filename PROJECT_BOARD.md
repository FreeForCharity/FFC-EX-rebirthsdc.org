# 📋 Project Rebirth — Project Board

**Live site:** https://rebirthsdc.org · **Repo:** FreeForCharity/FFC-EX-rebirthsdc.org
**Last updated:** 2026-05-31

A single-page kanban view of all tracked work. This board is maintained alongside
the GitHub Issues/PRs it links to — issue numbers are the source of truth; this file
is the visualization. (GitHub's native Projects board is not available via automation
for this repo, so this committed board serves as the durable project tracker.)

## Status legend

| Status                 | Meaning                                         |
| ---------------------- | ----------------------------------------------- |
| 🟢 **Done**            | Merged / closed / shipped to `main` and live    |
| 🔵 **In Review**       | PR open, in CI / awaiting merge                 |
| 🟡 **In Progress**     | Actively being worked                           |
| ⚪ **Ready**           | Scoped, unblocked, ready to pick up             |
| 🟣 **Blocked**         | Waiting on client input (IDs, assets, accounts) |
| 🔴 **Won't do / Held** | Intentionally not proceeding right now          |

---

## 🗂️ Kanban board

### 🟢 Done

| #                                                                        | Item                                                                                             | Type  | Notes                        |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ----- | ---------------------------- |
| [#44](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/pull/44)   | Docs accuracy pass — repo refs + integration docs                                                | PR    | Merged → `main`              |
| [#29](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/29) | Website review: full site + repo/docs accuracy                                                   | Issue | Closed (delivered via #44)   |
| [#32](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/32) | Cookie banner re-themed to Project Rebirth                                                       | Issue | Closed                       |
| [#31](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/31) | Consent-gate Google Tag Manager                                                                  | Issue | Closed                       |
| [#13](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/13) | Production deployment failed (stale incident)                                                    | Issue | Closed — site live, CI green |
| [#42](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/pull/42)   | Production deps group (react/react-dom 19.2.6, framer-motion 12.40, swiper 12.2, postcss 8.5.15) | PR    | Merged                       |
| [#12](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/pull/12)   | @commitlint/cli 20→21 (major)                                                                    | PR    | Merged                       |
| [#10](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/pull/10)   | @commitlint/config-conventional 20→21 (major)                                                    | PR    | Merged                       |
| [#9](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/pull/9)     | typescript 5→6 (major)                                                                           | PR    | Merged                       |
| [#7](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/pull/7)     | lucide-react 0.555→1.17 (major)                                                                  | PR    | Merged                       |
| #24                                                                      | dev-dependencies group (9 updates)                                                               | PR    | Merged                       |
| #1–#5, #11, #15–#21                                                      | Earlier Dependabot updates (incl. `next` 16.2.6 security)                                        | PR    | Merged (14 total)            |

> See **[Dependency upgrade log](#-dependency-upgrade-log)** for the full Dependabot detail.

### 🔴 Held (intentional)

| #                                                                    | Item                  | Reason                                                                                                                                                                                                                             |
| -------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [#8](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/pull/8) | eslint 9 → 10 (major) | Incompatible with `eslint-config-next@16.2.6` (bundled `eslint-plugin-react` calls `context.getFilename()`, removed in ESLint 10 → CI fails). Reproduced locally. Holding for an upstream Next.js release that supports ESLint 10. |

### 🟣 Blocked — awaiting client input

| #                                                                        | Item                                                 | Needs from you                                               |
| ------------------------------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------ |
| [#38](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/38) | Set up Google Analytics 4                            | Real Measurement ID (`G-XXXX…`) — code already consent-gated |
| [#39](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/39) | Set up Google Tag Manager                            | Real container ID (currently template's `GTM-TQ5H8HPR`)      |
| [#40](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/40) | Facebook & LinkedIn pages + social tracking          | Page URLs + Meta Pixel ID                                    |
| [#27](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/27) | Replace placeholder/stock media with licensed assets | Licensed hero video + high-res photos                        |

### ⚪ Ready — UX review backlog (scoped, unblocked)

Grouped by epic — see **[Epics](#-epics--sub-issues)** below for the full breakdown.
All 18 are ready to pick up; suggested priority is marked per item.

| #                                                                        | Item                                                     | Epic | Priority        |
| ------------------------------------------------------------------------ | -------------------------------------------------------- | ---- | --------------- |
| [#50](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/50) | Fix dead-end Resources/Community links (all → `/portal`) | #45  | 🔥 High         |
| [#51](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/51) | Page-appropriate CTA on every content page               | #45  | 🔥 High         |
| [#52](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/52) | Persistent "Donate" button in header                     | #45  | 🔥 High         |
| [#53](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/53) | Contact / partnership inquiry form                       | #45  | Medium          |
| [#54](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/54) | Email/newsletter capture beyond `/portal`                | #45  | Medium          |
| [#55](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/55) | Expand home page (stats, how-it-works, proof)            | #46  | 🔥 High         |
| [#56](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/56) | 501(c)(3) transparency & credibility signals             | #46  | High            |
| [#57](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/57) | Readability of long-form pages                           | #46  | Medium          |
| [#58](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/58) | Give Innovation Portal interim value                     | #46  | Medium          |
| [#59](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/59) | Alt text on all images (a11y/ADA/SEO)                    | #47  | 🔥 High         |
| [#60](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/60) | Color-contrast audit → WCAG AA                           | #47  | Medium          |
| [#61](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/61) | Keyboard nav: focus, skip link, dropdowns                | #47  | Medium          |
| [#62](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/62) | Resolve header hooks lint warning                        | #47  | Low             |
| [#63](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/63) | Replace watermarked/unlicensed stock media               | #48  | 🔥 High (legal) |
| [#64](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/64) | Optimize 7.3 MB hero video                               | #48  | Medium          |
| [#65](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/65) | Responsive images (srcset/lazy-load)                     | #48  | Low-Med         |
| [#66](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/66) | Redesign cookie banner (covers mobile page)              | #49  | 🔥 High         |
| [#67](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/67) | Proper 1200×630 social share card                        | #49  | High            |
| [#68](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/68) | Navigation & IA refinements                              | #49  | Low-Med         |
| [#69](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/69) | Mobile responsiveness verification pass                  | #49  | Medium          |

### 🧹 Triage

| #                                                                        | Item                                       | Suggested action                         |
| ------------------------------------------------------------------------ | ------------------------------------------ | ---------------------------------------- |
| [#41](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/41) | "Test Issue: Workspace Setup Verification" | Close — scratch/test issue, no real work |

---

## 🎯 Epics & sub-issues

Five epics from the full-site UX review, each framed with value/risk for the site owner.

### [#45] Conversion & Calls-to-Action 🔥

_Turn visits into donors, partners, registrants. Highest-leverage epic._

- [ ] [#50](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/50) Fix dead-end Resources/Community links — **High**
- [ ] [#51](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/51) Page-appropriate CTA on every content page — **High**
- [ ] [#52](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/52) Persistent "Donate" button in header — **High**
- [ ] [#53](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/53) Contact / partnership inquiry form — Medium
- [ ] [#54](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/54) Email/newsletter capture — Medium

### [#46] Content Depth & Trust Signals

_Make the case for support: proof, specificity, transparency._

- [ ] [#55](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/55) Expand the home page — **High**
- [ ] [#56](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/56) 501(c)(3) transparency & credibility signals — High
- [ ] [#57](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/57) Readability of long-form pages — Medium
- [ ] [#58](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/58) Give Innovation Portal interim value — Medium

### [#47] Accessibility & Inclusive Design (WCAG 2.1 AA)

_Mission imperative + ADA legal exposure._

- [ ] [#59](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/59) Alt text on all images — **High**
- [ ] [#60](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/60) Color-contrast audit — Medium
- [ ] [#61](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/61) Keyboard navigation — Medium
- [ ] [#62](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/62) Resolve header hooks lint warning — Low

### [#48] Performance, Media & Core Web Vitals

_Widen access for low-bandwidth users; remove licensing risk._

- [ ] [#63](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/63) Replace watermarked/unlicensed stock media — **High (legal)**
- [ ] [#64](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/64) Optimize 7.3 MB hero video — Medium
- [ ] [#65](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/65) Responsive images / lazy-load — Low-Med

### [#49] Consent UX, SEO Sharing & Navigation Polish

_Remove compounding friction across every visit._

- [ ] [#66](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/66) Redesign cookie banner — **High**
- [ ] [#67](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/67) Proper social share card — High
- [ ] [#68](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/68) Navigation & IA refinements — Low-Med
- [ ] [#69](https://github.com/FreeForCharity/FFC-EX-rebirthsdc.org/issues/69) Mobile responsiveness pass — Medium

---

## 🚦 Suggested execution phases

A pragmatic order that front-loads trust/credibility and quick wins.

### Phase 1 — Trust & credibility (do first)

Stop actively hurting conversions and credibility.

- #50 dead-end links · #66 cookie banner · #63 watermarked media · #59 alt text

### Phase 2 — Conversion paths

Give every visitor a next step.

- #52 Donate in header · #51 per-page CTAs · #67 social share card · #54 email capture

### Phase 3 — Depth & proof

Make the case for support.

- #55 home page expansion · #56 transparency signals · #57 readability · #58 portal value · #53 contact form

### Phase 4 — Polish & hardening

- #60 contrast · #61 keyboard nav · #64 video optimization · #65 responsive images · #68 IA · #69 mobile pass · #62 lint cleanup

### Ongoing / external

- #38 GA4 · #39 GTM · #40 social accounts · #27 licensed media — **start whenever the inputs arrive** (see Blocked).

---

## 📦 Dependency upgrade log

All Dependabot work from the security/update pass (merged individually with green CI):

| PR                  | Update                                                                                           | Kind    | Status                            |
| ------------------- | ------------------------------------------------------------------------------------------------ | ------- | --------------------------------- |
| #7                  | lucide-react 0.555 → 1.17                                                                        | major   | 🟢 Merged                         |
| #9                  | typescript 5 → 6                                                                                 | major   | 🟢 Merged                         |
| #10                 | @commitlint/config-conventional 20 → 21                                                          | major   | 🟢 Merged                         |
| #12                 | @commitlint/cli 20 → 21                                                                          | major   | 🟢 Merged                         |
| #24                 | dev-dependencies group (9 updates)                                                               | grouped | 🟢 Merged                         |
| #42                 | production deps group (react/react-dom 19.2.6, framer-motion 12.40, swiper 12.2, postcss 8.5.15) | grouped | 🟢 Merged                         |
| #1–#5, #11, #15–#21 | earlier updates incl. `next` 16.2.6 (High security)                                              | various | 🟢 Merged (14)                    |
| #8                  | eslint 9 → 10                                                                                    | major   | 🔴 Held (Next.js incompatibility) |

**Security posture:** `npm audit` reports 14 advisories, **all in dev/build tooling**
(`@lhci/cli`, jest/jsdom, eslint chains) — none reach the production static bundle, and
the only available fixes are breaking. Tracked in TECHNICAL_DEBT.md.

**Verified on `main`:** `npm run build` ✅ · `npm test` (25 tests) ✅ · `npm run lint`
0 errors ✅ · all 12 routes live (HTTP 200) with no console errors.

---

## 📊 Snapshot (2026-05-31)

- **Done:** 4 issues closed · ~20 PRs merged (docs + 19 dependency)
- **Held:** 1 PR (#8 eslint 10)
- **Blocked on input:** 4 issues (#27, #38, #39, #40)
- **Ready backlog:** 5 epics + 18 sub-issues (UX review)
- **Triage:** 1 (#41 test issue)

> **Maintenance:** update the status tables when an issue/PR changes state. Keep issue
> numbers as the source of truth; this file mirrors them for at-a-glance tracking.
