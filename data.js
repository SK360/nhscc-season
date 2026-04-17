// NHSCC Season Dashboard — data
// Update this file after each event. Loaded before the main React script.

window.NHSCC_DATA = {

  // ─── SEASON CONFIG ─────────────────────────────────────────────────────────
  SEASON: {
    year: 2026,
    seriesName: "2026 Points Series",
    location: "North Park Pool Lot",
    totalEvents: 10,
    dataThrough: "Points 2 (Apr 12)",
    totals: {
      uniqueDrivers: 172,
      totalRuns: 1500,
      returning: 74,     // drivers who ran both events so far
      oneEventOnly: 39,  // ran event 1 but not event 2
      newInLatest: 59,   // first-timers at event 2
    },
  },

  // ─── EVENTS ────────────────────────────────────────────────────────────────
  EVENTS: [
    { id:1, name:"The Colbert Course", subtitle:"Points 1", date:"Mar 29", drivers:113, runs:715, ftdDriver:"Eric Coffman", ftdTime:20.473, paxFtdDriver:"Eric Coffman",  paxFtdTime:17.197, avgTime:23.445, cleanRate:84.8, pylons:48, dnf:23, oc:37, ocPct:5.2 },
    { id:2, name:"Baker's Dozen",      subtitle:"Points 2", date:"Apr 12", drivers:133, runs:785, ftdDriver:"Eric Coffman", ftdTime:27.047, paxFtdDriver:"Chad Englert", paxFtdTime:22.344, avgTime:30.468, cleanRate:90.5, pylons:60, dnf:1,  oc:17, ocPct:2.2 },
  ],

  // ─── PAX TOP 10 BY EVENT ───────────────────────────────────────────────────
  E1_PAX_TOP: [
    {name:"Eric Coffman",    pax:17.197, cls:"SS",   car:"Acura NSX"},
    {name:"Sean ODonnell",   pax:17.391, cls:"BST",  car:"VW Golf R"},
    {name:"David Schneider", pax:17.516, cls:"GS",   car:"Hyundai Elantra N"},
    {name:"Ryan Koleno",     pax:17.530, cls:"CAMS", car:"Chevy Corvette"},
    {name:"Bob Smith",       pax:17.555, cls:"SB",   car:"Porsche Cayman S"},
    {name:"Chris Zavolta",   pax:17.574, cls:"CAMT", car:"Chevy Camaro SS"},
    {name:"Kevin Duque",     pax:17.701, cls:"STB",  car:"Subaru WRX"},
    {name:"Robert Killmer",  pax:17.721, cls:"EVX",  car:"Tesla Midnight"},
    {name:"Albert Wurst",    pax:17.768, cls:"CAMS", car:"Chevy Corvette"},
    {name:"Justin LaBarge",  pax:17.775, cls:"DS",   car:"VW Golf R"},
  ],
  E2_PAX_TOP: [
    {name:"Chad Englert",    pax:22.344, cls:"SB",   car:"Chevy Camaro"},
    {name:"Randy Pearson",   pax:22.655, cls:"DS",   car:"Honda Civic Type R"},
    {name:"Eric Coffman",    pax:22.719, cls:"SS",   car:"Acura NSX"},
    {name:"Steven Matchett", pax:22.812, cls:"CS",   car:"Mazda MX-5"},
    {name:"David Schneider", pax:22.849, cls:"GS",   car:"Hyundai Elantra N"},
    {name:"Jake Glover",     pax:22.879, cls:"STB",  car:"Toyota GR86"},
    {name:"Ryan Koleno",     pax:22.911, cls:"CAMS", car:"Chevy Corvette"},
    {name:"Robert Killmer",  pax:23.020, cls:"EVX",  car:"Tesla Midnight"},
    {name:"Chris Zavolta",   pax:23.022, cls:"CAMT", car:"Chevy Camaro SS"},
    {name:"Albert Wurst",    pax:23.311, cls:"CAMS", car:"Chevy Corvette"},
  ],

  // ─── POINTS STANDINGS ──────────────────────────────────────────────────────
  STANDINGS: [
    {name:"Eric Coffman",      cls:"SS",   p1:10, p2:10, total:20, events:2},
    {name:"Ryan Koleno",       cls:"CAMS", p1:10, p2:10, total:20, events:2},
    {name:"Matt Fallat",       cls:"EST",  p1:10, p2:10, total:20, events:2},
    {name:"Sean ODonnell",     cls:"BST",  p1:10, p2:10, total:20, events:2},
    {name:"Kevin Duque",       cls:"GST",  p1:10, p2:10, total:20, events:2},
    {name:"Robert Killmer",    cls:"EVX",  p1:10, p2:10, total:20, events:2},
    {name:"Chris Zavolta",     cls:"CAMT", p1:10, p2:10, total:20, events:2},
    {name:"Mark Sanner",       cls:"HS",   p1:10, p2:10, total:20, events:2},
    {name:"Thomas Roberts",    cls:"CAMC", p1:10, p2:10, total:20, events:2},
    {name:"Derek McMillen",    cls:"UB",   p1:10, p2:10, total:20, events:2},
    {name:"Zac Lakenan",       cls:"XA",   p1:10, p2:10, total:20, events:2},
    {name:"David Schneider",   cls:"GS",   p1:10, p2:10, total:20, events:2},
    {name:"Jay Gyger",         cls:"HB",   p1:10, p2:7,  total:17, events:2},
    {name:"Bob Smith",         cls:"SB",   p1:10, p2:7,  total:17, events:2},
    {name:"Roberto Redondo",   cls:"BS",   p1:7,  p2:10, total:17, events:2},
    {name:"David Lang",        cls:"VIN",  p1:10, p2:7,  total:17, events:2},
    {name:"Steve Blough",      cls:"SSM",  p1:10, p2:7,  total:17, events:2},
    {name:"David Stoner",      cls:"SSM",  p1:7,  p2:10, total:17, events:2},
    {name:"Jon Lauer",         cls:"CS",   p1:10, p2:5,  total:15, events:2},
    {name:"Cade Corey",        cls:"UB",   p1:7,  p2:7,  total:14, events:2},
  ],

  // ─── MOVERS & SHAKERS ──────────────────────────────────────────────────────
  MOVERS_UP: [
    {name:"Noah Snyder",       r1:"96/113",  r2:"78/133",  pct:"+26%"},
    {name:"Brian Pearson",     r1:"100/113", r2:"87/133",  pct:"+23%"},
    {name:"Jimmy Craig",       r1:"75/113",  r2:"66/133",  pct:"+17%"},
    {name:"Brian Banas",       r1:"77/113",  r2:"71/133",  pct:"+15%"},
    {name:"Chad Arndt",        r1:"110/113", r2:"111/133", pct:"+14%"},
  ],
  MOVERS_DOWN: [
    {name:"Kurt Emigh",         r1:"48/113", r2:"108/133", pct:"-39%"},
    {name:"Charles Stunkard",   r1:"45/113", r2:"99/133",  pct:"-35%"},
    {name:"Armand Engelbrecht", r1:"71/113", r2:"125/133", pct:"-31%"},
    {name:"Ross Ivey",          r1:"16/113", r2:"54/133",  pct:"-26%"},
    {name:"Sean Peck",          r1:"14/113", r2:"47/133",  pct:"-23%"},
  ],

  // ─── CLASS BATTLES BY EVENT (sorted tightest → widest class gaps) ──────────
  CLASS_BATTLES_E1: [
    {cls:"SSM",  p1:{name:"Steve Blough",     time:19.392}, p2:{name:"David Stoner",    time:19.623}, gap:0.231, gapPct:1.19},
    {cls:"CAMS", p1:{name:"Ryan Koleno",      time:17.530}, p2:{name:"Albert Wurst",    time:17.768}, gap:0.239, gapPct:1.36},
    {cls:"VIN",  p1:{name:"David Lang",       time:19.434}, p2:{name:"Franco Galvan",   time:19.823}, gap:0.389, gapPct:2.00},
    {cls:"GS",   p1:{name:"David Schneider",  time:17.516}, p2:{name:"Ross Ivey",       time:18.042}, gap:0.525, gapPct:3.00},
    {cls:"EVX",  p1:{name:"Robert Killmer",   time:17.721}, p2:{name:"Matt Simmons",    time:18.275}, gap:0.555, gapPct:3.13},
    {cls:"EST",  p1:{name:"Matt Fallat",      time:18.072}, p2:{name:"Chris Carlisle",  time:18.642}, gap:0.570, gapPct:3.16},
    {cls:"DS",   p1:{name:"Justin LaBarge",   time:17.775}, p2:{name:"Joe Montuoro",    time:18.360}, gap:0.586, gapPct:3.29},
    {cls:"SS",   p1:{name:"Eric Coffman",     time:17.197}, p2:{name:"Sean Peck",       time:18.026}, gap:0.828, gapPct:4.82},
  ],
  CLASS_BATTLES_E2: [
    {cls:"CSP",  p1:{name:"Mark Albers",      time:26.686}, p2:{name:"Kevin Carlins",   time:26.689}, gap:0.003, gapPct:0.01},
    {cls:"BST",  p1:{name:"Sean ODonnell",    time:23.603}, p2:{name:"Zach Chicko",     time:23.696}, gap:0.094, gapPct:0.40},
    {cls:"VIN",  p1:{name:"David Heinbaugh",  time:25.396}, p2:{name:"David Lang",      time:25.534}, gap:0.138, gapPct:0.54},
    {cls:"SSM",  p1:{name:"David Stoner",     time:25.058}, p2:{name:"Steve Blough",    time:25.296}, gap:0.238, gapPct:0.95},
    {cls:"EST",  p1:{name:"Matt Fallat",      time:23.853}, p2:{name:"Chris Carlisle",  time:24.154}, gap:0.302, gapPct:1.26},
    {cls:"SSC",  p1:{name:"Caleb Pardus",     time:23.324}, p2:{name:"Sean Mchugo",     time:23.638}, gap:0.314, gapPct:1.35},
    {cls:"XA",   p1:{name:"Zac Lakenan",      time:24.428}, p2:{name:"Nick Patterson",  time:24.780}, gap:0.352, gapPct:1.44},
    {cls:"CAMS", p1:{name:"Ryan Koleno",      time:22.911}, p2:{name:"Albert Wurst",    time:23.311}, gap:0.400, gapPct:1.74},
  ],

  // ─── IMPROVEMENT: first clean run vs best clean run (top 10 per event) ─────
  IMPROVEMENT_E1: [
    {name:"Nicholas Asturi",    firstClean:33.222, bestClean:27.043, delta:6.179, pct:18.60},
    {name:"Jeff Ferguson",      firstClean:24.651, bestClean:21.286, delta:3.365, pct:13.65},
    {name:"Luis Sastre",        firstClean:26.376, bestClean:23.048, delta:3.328, pct:12.62},
    {name:"Jimmy Craig",        firstClean:26.716, bestClean:23.467, delta:3.249, pct:12.16},
    {name:"Noah Snyder",        firstClean:28.616, bestClean:25.210, delta:3.406, pct:11.90},
    {name:"Sean Peck",          firstClean:24.215, bestClean:21.459, delta:2.756, pct:11.38},
    {name:"Devon Mcghen",       firstClean:29.912, bestClean:26.641, delta:3.271, pct:10.94},
    {name:"Craig Carr",         firstClean:28.209, bestClean:25.158, delta:3.051, pct:10.82},
    {name:"Armand Engelbrecht", firstClean:26.925, bestClean:24.070, delta:2.855, pct:10.60},
    {name:"Mark Brodnicki",     firstClean:32.447, bestClean:29.348, delta:3.099, pct:9.55},
  ],
  IMPROVEMENT_E2: [
    {name:"Charles Stunkard",   firstClean:39.703, bestClean:31.256, delta:8.447, pct:21.28},
    {name:"Danielle Coles",     firstClean:42.820, bestClean:34.862, delta:7.958, pct:18.58},
    {name:"Jake Glover",        firstClean:33.723, bestClean:27.598, delta:6.125, pct:18.16},
    {name:"Matthew Toro",       firstClean:38.357, bestClean:33.111, delta:5.246, pct:13.68},
    {name:"Ben Lizak",          firstClean:36.722, bestClean:31.739, delta:4.983, pct:13.57},
    {name:"Ken Bartholomew",    firstClean:36.281, bestClean:31.785, delta:4.496, pct:12.39},
    {name:"Brian Jesteadt",     firstClean:36.731, bestClean:32.374, delta:4.357, pct:11.86},
    {name:"Chad Arndt",         firstClean:35.764, bestClean:31.683, delta:4.081, pct:11.41},
    {name:"Noah Snyder",        firstClean:35.002, bestClean:31.177, delta:3.825, pct:10.93},
    {name:"Nick Dipasquale",    firstClean:33.894, bestClean:30.544, delta:3.350, pct:9.88},
  ],

  // ─── CLEAN / CONEY LEADERBOARDS (season-wide, min 10 runs) ─────────────────
  CLEAN_RATE_CLEANEST: [
    {name:"Jeff Swanson",   runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Tom Labuda",     runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Ethan Hall",     runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Jeff Labuda",    runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Justin Lee",     runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Max Henderson",  runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Mark Szymanski", runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Jon Lauer",      runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Matt Fallat",    runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Chris Carlisle", runs:12, clean:12, cones:0, ocdnf:0, cleanPct:100.0},
  ],
  CLEAN_RATE_CONIEST: [
    {name:"Justin LaBarge",    runs:12, clean:6,  cones:8, ocdnf:2, cleanPct:50.0},
    {name:"David Schneider",   runs:12, clean:7,  cones:5, ocdnf:0, cleanPct:58.3},
    {name:"John Swanson",      runs:12, clean:7,  cones:5, ocdnf:0, cleanPct:58.3},
    {name:"Charles Stunkard",  runs:12, clean:9,  cones:4, ocdnf:0, cleanPct:75.0},
    {name:"Al Randall",        runs:12, clean:8,  cones:4, ocdnf:0, cleanPct:66.7},
    {name:"Thomas Roberts",    runs:12, clean:8,  cones:3, ocdnf:1, cleanPct:66.7},
    {name:"Luke Shockley",     runs:12, clean:10, cones:3, ocdnf:0, cleanPct:83.3},
    {name:"Eric Coffman",      runs:12, clean:10, cones:3, ocdnf:0, cleanPct:83.3},
    {name:"Derek McMillen",    runs:12, clean:9,  cones:3, ocdnf:0, cleanPct:75.0},
    {name:"Anton Ovchinnikov", runs:12, clean:8,  cones:2, ocdnf:2, cleanPct:66.7},
  ],

  // ─── CATEGORY DRIVER COUNTS BY EVENT ───────────────────────────────────────
  CAT_DATA_E1: {Street:30,"Street Touring":9,"Classic American Muscle":19,"Electric Vehicle":3,"Hoosier Bump":9,Novice:18,"Street Bump":5,"Street Modified":5,"Street Touring Bump":5,Vintage:3,"Xtreme Street":7},
  CAT_DATA_E2: {Street:46,"Street Touring":19,"Classic American Muscle":21,"Electric Vehicle":5,"Hoosier Bump":2,Novice:4,"Street Bump":5,"Street Modified":6,"Street Touring Bump":5,Vintage:6,"Xtreme Street":6,Prepared:3,"Street Prepared":3,"Unlimited Bump":2},

  // ─── NOVICE SPOTLIGHT ──────────────────────────────────────────────────────
  NOVICE: {
    e1: {
      count: 18,
      top: [
        {name:"Jeff Ferguson",   time:21.286, car:"Acura NSX",          pos:1},
        {name:"Larry Spector",   time:22.732, car:"Chevy Camaro SS 1LE", pos:2},
        {name:"Colin Longmore",  time:23.075, car:"Scion FRS",          pos:3},
      ],
    },
    e2: {
      count: 4,
      top: [
        {name:"Brandon Bufalini", time:30.881, car:"Ford Focus ST",       pos:1},
        {name:"Michael Bushko",   time:31.124, car:"Hyundai Elantra N",   pos:2},
        {name:"Aaron Rankin",     time:31.238, car:"Subaru Forester XT",  pos:3},
      ],
    },
    graduates: ["Noah Snyder","Chad Arndt","Devon Mcghen"],
  },

  // ─── SEASON NARRATIVE ──────────────────────────────────────────────────────
  NARRATIVE: [
    {icon:"🏆", title:"Eric Coffman's FTD Streak", desc:"Back-to-back fastest time of day in the NSX. His PAX consistency across different course designs is the benchmark right now."},
    {icon:"📈", title:"Field Growth: +18%",        desc:"133 drivers at Points 2, up from 113. The season is building momentum. 59 brand-new faces showed up for the second event."},
    {icon:"🎯", title:"Cleaner Driving",           desc:"Clean run rate jumped from 84.8% to 90.5%. Off courses dropped from 37 to 17, DNFs from 23 to just 1. The field is dialing in."},
    {icon:"🔄", title:"12-Way Tie at the Top",     desc:"A dozen class winners sit at a perfect 20 points. The next few events will separate the contenders from the pretenders."},
    {icon:"🆕", title:"Novice Class Shift",        desc:"18 novices in Pts 1 vs only 4 in Pts 2. Several graduated to classed competition — a healthy sign of driver development."},
    {icon:"⚡", title:"EV Category Growing",       desc:"Electric Vehicle class grew from 3 to 5 entries. Robert Killmer's Tesla Midnight remains dominant with back-to-back class wins."},
  ],
};
