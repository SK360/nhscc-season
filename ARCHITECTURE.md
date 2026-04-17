# Architecture

One-page orientation for a fresh chat. Read this first.

## What this is

A single-page React dashboard for the **North Hills Sports Car Club 2026 autocross points series** (10 events). Deployed via GitHub Pages from `main`. No build step — React + Babel load from CDN and transform JSX in-browser.

## File layout

```
index.html          React app (JSX inside <script type="text/babel">). All UI lives here.
data.js             Summarized data the dashboard renders. Sets window.NHSCC_DATA. Loaded BEFORE index.html's script.
raw/                Untouched event exports. Dashboard never reads these.
  README.md         Directory convention + schema notes.
  pts-NN-slug/
    fullResults.json   Per-driver results w/ all runs + penalty codes.
    eventInfo.json     Event-level summary (FTD, totals, OC/DNF/pylons).
    *.csv              Original CSVs from the zip, archived.
ARCHITECTURE.md     This file.
.claude/launch.json python3 -m http.server 8765 preview config.
```

## Data flow

```
event zip → raw/pts-NN-slug/  (archive, never mutated after commit)
              │
              └─► recompute from ALL raw events ─► data.js  ─► index.html renders
```

Dashboard only reads `data.js`. Raw files exist so stats can be recomputed across full season history when a new event lands.

## `window.NHSCC_DATA` shape

Destructured at the top of `index.html`'s script:

```
SEASON        { year, seriesName, location, totalEvents:10, dataThrough, totals:{uniqueDrivers, totalRuns, returning, oneEventOnly, newInLatest} }
EVENTS        [{ id, name, subtitle, date, drivers, runs, ftdDriver, ftdTime, avgTime, cleanRate, pylons, dnf, oc, ocPct }]
E1_PAX_TOP    top 10 PAX: [{name, pax, cls, car}]
E2_PAX_TOP    (per-event; add E3_PAX_TOP etc. as events land)
STANDINGS     [{name, cls, p1, p2, …, total, events}]
MOVERS_UP     [{name, r1:"96/113", r2:"78/133", pct:"+26%"}]   // PAX percentile deltas
MOVERS_DOWN   same shape
CAT_DATA_E1   { "Street":30, "Street Touring":9, … }  // category → driver count
CAT_DATA_E2
NOVICE        { e1:{count, top:[{name,time,car,pos}]}, e2:{…}, graduates:[names] }
NARRATIVE     [{icon, title, desc}]  // 6-ish season story bullets
```

## Ingesting a new event (the main recurring task)

1. User drops a zip. Extract `fullResults.json` + `eventInfo.json` into `raw/pts-NN-<slug>/` (also archive original CSVs if present).
2. Recompute from **all** `raw/pts-*/fullResults.json`:
   - `EVENTS[]` — append new event from `eventInfo.json` (`.PageHeader`).
   - `E{N}_PAX_TOP` — sort `.Results[]` by `float(PAXTime)` ascending, take 10.
   - `CAT_DATA_E{N}` — `Counter(r.Category for r in Results)`.
   - `STANDINGS` — aggregate per-driver `Points` across all events; add new `p{N}` column; `total` = sum; `events` = count of events participated.
   - `MOVERS_UP/DOWN` — PAX-percentile change from prior event to new event. Percentile = rank / field_size where rank is 1-indexed ascending PAXTime.
   - `SEASON.totals` — recompute `uniqueDrivers`, `returning` (drivers in ≥2 events), `oneEventOnly`, `newInLatest` from name sets across events.
   - `SEASON.dataThrough` — update.
   - `NOVICE` — pull `Category == "Novice"` subset; track graduates (in novice prior event but classed in new event).
   - `NARRATIVE` — rewrite bullets to reflect the new story (trends that emerged, surprises, class battles).
3. Name normalization: `FullName` field from raw is the source of truth. It has trailing HTML entities in some fields (`&#91;`/`&#93;` for `[`/`]`) — strip when needed. Driver identity across events is by exact `FullName` match.
4. Commit `data.js` (and the new `raw/pts-NN-*/`). Push. GitHub Pages redeploys.

## Raw schema cheatsheet

`fullResults.json` → `.Results[]`:
- Identity: `FullName`, `Number`, `Car`, `BumpClass` (e.g. `SS`, `CAMS`), `Category` (e.g. `Street`, `Novice`)
- Times: `BestTime`, `BestUnadjustedTime`, `PAXindex`, `PAXTime` (all strings; parse to float)
- Runs: `Times` (JSON-encoded string, 12-slot array of run times), `Ps` (parallel penalty array: `""` clean, `"1"`/`"2"` cone count, `"OC"` off-course, `"DNF"`)
- Results: `Place`, `ClassFinish`, `Points` (class-based: 10 for 1st, 7 for 2nd, 5 for 3rd, …)

`eventInfo.json` → `.PageHeader`: `EventName`, `FTD1Driver`/`FTD1Time`, `NumberOfDrivers`, `TotalRuns`, `AvgTime`, `OC` (e.g. `"37 (5.17%)"`), `DNF`, `Pylons`, `FCO`/`LCO`.

Clean-rate derivation: `cleanRate = 100 * (TotalRuns - OC_count - DNF_count - pylon_runs) / TotalRuns`. For current data we've used `(runs - OC - DNF) / runs * 100`, matching what the club displays.

## UI conventions (if touching index.html)

- All styles are inline React style objects; a tiny `<style>` block at lines ~11–23 holds responsive grid classes (`.grid-season`, `.grid-compare`, `.grid-two-col`) with a `@media (max-width:720px)` breakpoint that collapses to 1 column.
- Root wrapper is full-viewport-width: `padding:"24px clamp(16px, 3vw, 80px)"`, no `maxWidth`.
- Theme: `t.bg`, `t.text`, etc. — light/dark toggle lives in header.
- Charts are hand-rolled divs with hover tooltips (no chart library). `CategoryBreakdown` uses `BAR_AREA=240` px-based bar heights; `EventComparison` bars use `flex:1` to fill card width.

## Verification

Local preview: `python3 -m http.server 8765` in repo root, open `http://localhost:8765/`. Or use the Claude Preview MCP (`.claude/launch.json` is configured).

When ingesting a new event, **always diff the regenerated `data.js` against the prior version and sanity-check**: top-10 PAX ordering looks right, point totals add up, retention totals sum correctly (`returning + oneEventOnly = prior event driver count`).

## Current state

- 2 events ingested: `pts-01-colbert` (Mar 29), `pts-02-bakers-dozen` (Apr 12).
- Season is 10 events total; dashboard shows "2 of 10 events".
- `data.js` verified to match raw exports exactly as of commit `f79c310`.
