# Raw Event Archive

Untouched event exports, one directory per points event. The dashboard (`index.html`) never reads these directly — it only reads `data.js`. These files exist so summary stats in `data.js` can be recomputed across the full season whenever a new event is ingested.

## Directory convention

```
raw/
  pts-NN-slug/
    fullResults.json   # required — per-driver results with all runs
    eventInfo.json     # required — event metadata (FTD, totals, etc.)
    <optional extras>  # original CSVs or HTML from the export zip
```

- `NN` is the zero-padded event number in the season (01, 02, …).
- `slug` is a short kebab-case name for the course (`colbert`, `bakers-dozen`).

## Ingesting a new event

1. Extract the event zip.
2. Create `raw/pts-NN-slug/` and copy `fullResults.json` + `eventInfo.json` (plus any CSV/HTML you want archived).
3. Ask Claude to "ingest event N" — it will recompute standings, PAX top 10s, movers, retention, category counts, and the narrative from **all** raw events and rewrite `data.js`.
4. Review the diff, commit, push.

## Schema notes

`fullResults.json` → `.Results[]` — each entry has:
- `FullName`, `Number`, `Car`, `BumpClass`, `Category`
- `BestTime`, `BestUnadjustedTime`, `PAXindex`, `PAXTime`
- `Times` (JSON string of 12 run times) and `Ps` (parallel array of penalties: `OC`, `DNF`, `1`/`2`/… cone count, or `""`)
- `Place`, `ClassFinish`, `Points`

`eventInfo.json` → `.PageHeader` — event-level summary: `FTD1Driver/Time`, `NumberOfDrivers`, `TotalRuns`, `AvgTime`, `OC`, `DNF`, `Pylons`, `FCO`/`LCO`, etc.
