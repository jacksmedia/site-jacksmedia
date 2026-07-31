# Jacks Media — Income Strategy Playbook
*Prepared July 14, 2026 · Based on a full audit of ~16 projects across Desktop, Documents, and session history*

---

## 1. What the audit found

You described Jacks Media as chaotic, but the portfolio isn't random — it's **three product lines plus two pieces of infrastructure**, most of it already built:

### Product Line A: Retro-gaming tools & mods (your deepest moat)
| Project | State | Notes |
|---|---|---|
| FF4 Ultima Patcher (`ultima`) | **Live** at ultima-plus.vercel.app | Next.js ROM patcher; serves an existing community |
| FF4 Ultima Plus mod packs (`4`) | Shipped assets | Patch archives, style packs, changelogs — distributable products |
| SaGa 2 companion (`haniwa`) | Built | Second patcher-style webapp, same stack as ultima |
| FFV workspace (`crawler`) | Active research | ff6tools fork, Wounded Wardrobe ASM hack, decomp, SPC-700 audio |
| C2ASM | Prototype | SNES C-to-ASM toolchain — rare, teachable expertise |
| midi-hex-translator | Built | MIDI tooling; pairs with your SPC-700 research |

### Product Line B: AI-assisted creative tools & content
| Project | State | Notes |
|---|---|---|
| jacks.media (this repo) | **Live** | Tutorials (AI art, custom AI, Discord, Notion, InVideo), free tools (CoverLetter, DocReview, SprSheetGen), portfolio |
| j4cks-flux / find-the-words | Demos | HuggingFace Flux inference, pixel-art LoRA workflows |
| CCGS (`secret`) | Architecture done | 49-subagent Claude Code game-studio framework — a genuinely novel meta-asset |

### Product Line C: Consumer apps
| Project | State | Notes |
|---|---|---|
| **kcal.you** | **Live, Stripe already wired** | Supabase auth, PWA, checkout + customer portal + webhook routes all exist |
| Skjoldsaga (`a3`) | **Fully playable** | Original browser tactics RPG, Three.js, 100 quests |

### Infrastructure (the passive-income enablers)
| Project | State | Why it matters |
|---|---|---|
| **onblast** | In progress | "Your message everywhere at once" — cross-posting to Bluesky, Mastodon, etc. This *is* the automated distribution pipeline you said you need |
| cadence | Empty Turborepo starter | Park it |

**The big pattern:** you build finished, deployable things in niches with devoted communities (retro modding), you already own billing rails (kcal's Stripe integration), and you're already building the syndication engine (onblast). The missing piece isn't skill or product — it's **connecting distribution to the things you've already made, then letting automation run the loop**.

---

## 2. Strategy portfolio, ranked by passivity × leverage

Ranked with your constraints front and center: maximum automation, minimum repetition, tolerable learning curves.

### 🥇 Strategy 1 — Activate kcal.you's freemium tier (recurring revenue, rails already built)
**Effort to first dollar: days, not weeks. Passivity once running: very high.**

The Stripe routes exist (`create-checkout`, `portal`, `webhook`). What's left is product/packaging work, not plumbing:

1. Pick the free/pro line (e.g., free = manual logging; pro = Excel export via your existing `exceljs`, history beyond 30 days, PWA offline sync).
2. Price at $3–5/mo or $24–36/yr — nutrition trackers are commodity, so win on simplicity and privacy ("no ads, your data is yours").
3. **Automated acquisition:** you already have a `recipes` section on jacks.media. Generate a programmatic-SEO recipe/nutrition library (hundreds of pages from a structured dataset — a build-time pipeline, exactly your skillset) with kcal.you CTAs on every page. This is a one-time pipeline that compounds forever.

Why this is #1: it's the only project where *every* hard part is done and the revenue is recurring.

### 🥈 Strategy 2 — Retro Tools Hub + patronage (monetize the audience you already have)
**Effort: 2–4 weeks of consolidation. Passivity: very high — the community does the marketing.**

Romhacking communities are small but *fiercely* loyal, and you serve three of them (FF4, FF5, SaGa 2).

1. Unify ultima + haniwa + future FFV patcher under one "Jacks Media Retro Tools" umbrella (shared Next.js patcher core — you've essentially written it twice already; extract it once, never write it again).
2. Add **Ko-fi/GitHub Sponsors** to every patcher page (zero maintenance) and a **Patreon/Ko-fi membership** tier: early access to patch releases, WIP screenshots from the Wounded Wardrobe log you already keep, voting on next features. Your `_WIP.txt` work log is literally pre-written Patreon content.
3. Sell **mod asset packs on itch.io** (the FF4 style packs, sprite work, the 110-NPC image archive if licensing is clean — see §5). itch.io handles delivery; zero marginal cost.

Realistic ceiling is modest ($100–500/mo), but it's nearly 100% passive and it feeds Strategy 4's content flywheel.

### 🥉 Strategy 3 — Sell your infrastructure as products (build once, sell forever)
**Effort: 1–2 weeks each. Passivity: total after launch.**

You've built two things developers pay for:

- **The kcal stack as a paid starter template** — Next.js 15 + Supabase auth + Stripe subscriptions + PWA is one of the most-searched starter combos. Strip kcal to a skeleton, document it, sell at $49–99 on Gumroad/Lemon Squeezy. Comparable templates (ShipFast et al.) prove the market.
- **CCGS as a product** — a 49-agent Claude Code game-studio architecture is *timely and rare*. Package as a template + guide ($29–79), or open-source the core and sell the workflow guide/support. This also positions Jacks Media in the "AI-native development" wave, which raises the value of everything else you do.

### Strategy 4 — Finish onblast *for yourself first*, then run the content flywheel
**Effort: the biggest build on this list. Passivity: this is what makes everything else passive.**

Don't build onblast as a SaaS-for-others yet — build it as **Jacks Media's own syndication engine**:

1. Every jacks.media tutorial, blog post, patch release note, and devlog auto-posts to Bluesky/Mastodon/etc. on publish (webhook from your deploy → onblast).
2. Your existing tutorial content (AI art, Notion, InVideo, Discord) becomes an **affiliate surface** — InVideo, Notion, and most AI tools have affiliate programs. Retrofit links into existing tutorials: one afternoon, then passive.
3. Once it runs your own feeds reliably for a few months, *then* evaluate opening it as a paid product — you'll have the best possible demo: your own automated media presence.

### Strategy 5 — Skjoldsaga on itch.io (low effort, real upside, feeds the flywheel)
Fully playable is 90% of the battle. Ship it pay-what-you-want on itch.io, post the devlog through onblast, and let it be a live portfolio piece for both the game and CCGS. Browser tactics RPGs have a real itch.io audience. If it gets traction, a Steam wrapper (Electron/Tauri) is a later, optional step.

### ❌ Park / kill
- **cadence** — empty starter; archive it.
- **speedreader, find-the-words, midi-hex-translator** — keep as free demos/portfolio; don't invest monetization effort.
- **New client work** — nothing in this plan requires it, and it's the least passive income there is. Take it only when it's overpriced in your favor.

---

## 3. The unifying architecture (chaos → structure)

Everything above snaps into one loop:

```
  BUILD (once)                 DISTRIBUTE (automated)          MONETIZE (passive)
┌─────────────────┐          ┌──────────────────────┐        ┌──────────────────┐
│ kcal.you        │──deploy──│                      │───────▶│ Stripe subs      │
│ Retro Tools Hub │──publish─│   onblast pipeline    │───────▶│ Ko-fi / Patreon  │
│ jacks.media     │──posts──▶│  (webhook-triggered   │───────▶│ Affiliate links  │
│ Skjoldsaga      │──devlog──│   cross-posting)      │───────▶│ itch.io sales    │
│ Templates/CCGS  │──launch──│                      │───────▶│ Gumroad sales    │
└─────────────────┘          └──────────────────────┘        └──────────────────┘
        ▲                                                            │
        └────────────── analytics tell you what to build next ◀─────┘
```

Structural moves to make this real:

1. **One shared patcher core** (extract from ultima/haniwa) — never rebuild a patcher again.
2. **One shared billing core** (extract from kcal) — every future paid thing gets Stripe for free; it's also the template you sell in Strategy 3.
3. **One distribution pipeline** (onblast) — publish anywhere once, appear everywhere.
4. **One analytics view** — even just Vercel Analytics + Stripe dashboard + a monthly 30-minute review. Kill what nobody uses; double down on what converts.

---

## 4. Suggested 90-day sequence

**Weeks 1–2 · Cash rails on.** Define kcal.you's pro tier, flip Stripe live, add Ko-fi links to ultima + haniwa pages, retrofit affiliate links into existing jacks.media tutorials. *(Every item here is hours, not days.)*

**Weeks 3–6 · First products.** Ship Skjoldsaga to itch.io. Package the FF4 asset packs on itch.io. Start the kcal-starter template extraction.

**Weeks 7–10 · The flywheel.** Get onblast posting your own content automatically. Launch the programmatic recipe/nutrition SEO pipeline on jacks.media.

**Weeks 11–13 · The rare asset.** Package and launch CCGS (template + guide). Announce it through onblast — this launch is also onblast's proof-of-concept.

By day 90: 5 income streams (subscriptions, patronage, itch.io, Gumroad, affiliates), all with automated distribution, none requiring repetitive labor.

---

## 5. Honest caveats

- **ROM-hacking IP:** patchers and original patches are community-standard and fine; *selling* packs containing Square Enix-derived assets (e.g., the FF4-PR NPC archive) is riskier than giving them away. Keep paid items to your original work (sprites, tools, guides) and keep Nintendo/SE-derived content free + donation-supported.
- **kcal.you ceiling:** nutrition tracking is crowded. Treat it as a $200–1,000/mo appliance, not a rocket — its bigger value may be as the template (Strategy 3).
- **onblast scope risk:** social APIs churn constantly (that's *why* the product is valuable, and why "build for yourself first" is the right scoping fence).
- **Passivity is earned, not free:** every stream above needs a setup sprint. The plan's promise is that nothing needs *repetition* — pipelines, not chores.

---

*Sources: local project audit (Desktop + Documents/5work), Claude Code session history across 10 project workspaces, and memory files from prior jacks.media sessions.*
