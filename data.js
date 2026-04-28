// NHSCC Season Dashboard — data
// Update this file after each event. Loaded before the main React script.

window.NHSCC_DATA = {

  // ─── SEASON CONFIG ─────────────────────────────────────────────────────────
  SEASON: {
    year: 2026,
    seriesName: "2026 Points Series",
    location: "North Park Pool Lot",
    totalEvents: 10,
    dataThrough: "Points 3 (Apr 26)",
    totals: {
      uniqueDrivers: 201,
      totalRuns: 2218,
      returning: 108,    // drivers who ran 2+ events
      oneEventOnly: 93,  // ran exactly one event so far
      newInLatest: 29,   // first-timers at event 3
    },
  },

  // ─── EVENTS ────────────────────────────────────────────────────────────────
  EVENTS: [
    { id:1, name:"The Colbert Course",       subtitle:"Points 1", date:"Mar 29", drivers:113, runs:715, ftdDriver:"Eric Coffman",  ftdTime:20.473, paxFtdDriver:"Eric Coffman",   paxFtdTime:17.197, avgTime:23.445, cleanRate:84.8, pylons:48,  dnf:23, oc:37, ocPct:5.2 },
    { id:2, name:"Baker's Dozen",            subtitle:"Points 2", date:"Apr 12", drivers:133, runs:785, ftdDriver:"Eric Coffman",  ftdTime:27.047, paxFtdDriver:"Chad Englert",   paxFtdTime:22.344, avgTime:30.468, cleanRate:90.1, pylons:60,  dnf:1,  oc:17, ocPct:2.2 },
    { id:3, name:"Stay Calm and Dave On",    subtitle:"Points 3", date:"Apr 26", drivers:119, runs:718, ftdDriver:"Peter Schnore", ftdTime:30.870, paxFtdDriver:"Randy Pearson",  paxFtdTime:25.579, avgTime:34.795, cleanRate:76.2, pylons:142, dnf:1,  oc:51, ocPct:7.1 },
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
  E3_PAX_TOP: [
    {name:"Randy Pearson",   pax:25.579, cls:"DS",   car:"Honda Civic Type R"},
    {name:"Kevin Duque",     pax:25.642, cls:"STB",  car:"Subaru WRX"},
    {name:"Peter Schnore",   pax:25.869, cls:"STB",  car:"Porsche Boxster S"},
    {name:"Chris Zavolta",   pax:26.046, cls:"UB",   car:"Chevy Camaro SS"},
    {name:"Bob Smith",       pax:26.177, cls:"SB",   car:"Porsche Cayman S"},
    {name:"Eric Coffman",    pax:26.187, cls:"SS",   car:"Acura NSX"},
    {name:"David Schneider", pax:26.191, cls:"GS",   car:"Hyundai Elantra N"},
    {name:"Adam Olah",       pax:26.237, cls:"ES",   car:"Toyota MR2 Spyder"},
    {name:"Sean ODonnell",   pax:26.311, cls:"BST",  car:"Volkswagen Golf R"},
    {name:"Ryan Koleno",     pax:26.312, cls:"CAMS", car:"Chevy Corvette"},
  ],

  // ─── POINTS STANDINGS (event points only) ─────────────────────────────────
  STANDINGS: [
    {name:"David Schneider",   cls:"GS",   p1:10, p2:10, p3:10, total:30, events:3},
    {name:"Chris Zavolta",     cls:"UB",   p1:10, p2:10, p3:10, total:30, events:3},
    {name:"Ryan Koleno",       cls:"CAMS", p1:10, p2:10, p3:10, total:30, events:3},
    {name:"Eric Coffman",      cls:"SS",   p1:10, p2:10, p3:10, total:30, events:3},
    {name:"Derek McMillen",    cls:"UB",   p1:10, p2:10, p3:10, total:30, events:3},
    {name:"Kevin Duque",       cls:"STB",  p1:10, p2:10, p3:10, total:30, events:3},
    {name:"Sean ODonnell",     cls:"BST",  p1:10, p2:10, p3:10, total:30, events:3},
    {name:"David Stoner",      cls:"SSM",  p1:7,  p2:10, p3:10, total:27, events:3},
    {name:"Jay Gyger",         cls:"HB",   p1:10, p2:7,  p3:10, total:27, events:3},
    {name:"Robert Killmer",    cls:"EVX",  p1:10, p2:10, p3:7,  total:27, events:3},
    {name:"Mark Sanner",       cls:"HS",   p1:10, p2:10, p3:7,  total:27, events:3},
    {name:"Bob Smith",         cls:"SB",   p1:10, p2:7,  p3:10, total:27, events:3},
    {name:"Thomas Roberts",    cls:"CAMC", p1:10, p2:10, p3:7,  total:27, events:3},
    {name:"Roberto Redondo",   cls:"BS",   p1:7,  p2:10, p3:10, total:27, events:3},
    {name:"Kurt Emigh",        cls:"XP",   p1:7,  p2:7,  p3:10, total:24, events:3},
    {name:"Steve Blough",      cls:"SSM",  p1:10, p2:7,  p3:7,  total:24, events:3},
    {name:"Jon Lauer",         cls:"CS",   p1:10, p2:5,  p3:10, total:25, events:3},
    {name:"Zac Lakenan",       cls:"XA",   p1:10, p2:10, p3:5,  total:25, events:3},
    {name:"Chris Yoder",       cls:"EVX",  p1:0,  p2:10, p3:10, total:20, events:2},
    {name:"David Lang",        cls:"VIN",  p1:10, p2:7,  p3:5,  total:22, events:3},
  ],

  // ─── MOVERS & SHAKERS (E2 → E3) ───────────────────────────────────────────
  MOVERS_UP: [
    {name:"Michael Bushko",  r1:"118/133", r2:"54/119",  pct:"+45%"},
    {name:"Kurt Emigh",      r1:"108/133", r2:"64/119",  pct:"+30%"},
    {name:"Ross Ivey",       r1:"54/133",  r2:"20/119",  pct:"+24%"},
    {name:"Owen Black",      r1:"53/133",  r2:"21/119",  pct:"+23%"},
    {name:"Greg Darroch",    r1:"121/133", r2:"85/119",  pct:"+22%"},
  ],
  MOVERS_DOWN: [
    {name:"Luis Sastre",     r1:"91/133",  r2:"123/119", pct:"-31%"},
    {name:"Aaron Rankin",    r1:"94/133",  r2:"121/119", pct:"-27%"},
    {name:"Franco Galvan",   r1:"81/133",  r2:"106/119", pct:"-25%"},
    {name:"Robert Bush",     r1:"52/133",  r2:"70/119",  pct:"-17%"},
    {name:"Matt Simmons",    r1:"15/133",  r2:"33/119",  pct:"-15%"},
  ],

  // ─── CLASS BATTLES BY EVENT (sorted tightest → widest class gaps) ──────────
  CLASS_BATTLES_E1: [
    {cls:"SSM",  p1:{name:"Steve Blough",     time:19.392}, p2:{name:"David Stoner",     time:19.623}, gap:0.231, gapPct:1.19},
    {cls:"CAMS", p1:{name:"Ryan Koleno",      time:17.530}, p2:{name:"Albert Wurst",     time:17.768}, gap:0.239, gapPct:1.36},
    {cls:"VIN",  p1:{name:"David Lang",       time:19.434}, p2:{name:"Franco Galvan",    time:19.823}, gap:0.389, gapPct:2.00},
    {cls:"GS",   p1:{name:"David Schneider",  time:17.516}, p2:{name:"Ross Ivey",        time:18.042}, gap:0.525, gapPct:3.00},
    {cls:"EVX",  p1:{name:"Robert Killmer",   time:17.721}, p2:{name:"Matt Simmons",     time:18.275}, gap:0.555, gapPct:3.13},
    {cls:"EST",  p1:{name:"Matt Fallat",      time:18.072}, p2:{name:"Chris Carlisle",   time:18.642}, gap:0.570, gapPct:3.16},
    {cls:"DS",   p1:{name:"Justin LaBarge",   time:17.775}, p2:{name:"Joe Montuoro",     time:18.360}, gap:0.586, gapPct:3.29},
    {cls:"SS",   p1:{name:"Eric Coffman",     time:17.197}, p2:{name:"Sean Peck",        time:18.026}, gap:0.828, gapPct:4.82},
  ],
  CLASS_BATTLES_E2: [
    {cls:"CSP",  p1:{name:"Mark Albers",      time:26.686}, p2:{name:"Kevin Carlins",    time:26.689}, gap:0.003, gapPct:0.01},
    {cls:"BST",  p1:{name:"Sean ODonnell",    time:23.603}, p2:{name:"Zach Chicko",      time:23.696}, gap:0.094, gapPct:0.40},
    {cls:"VIN",  p1:{name:"David Heinbaugh",  time:25.396}, p2:{name:"David Lang",       time:25.534}, gap:0.138, gapPct:0.54},
    {cls:"SSM",  p1:{name:"David Stoner",     time:25.058}, p2:{name:"Steve Blough",     time:25.296}, gap:0.238, gapPct:0.95},
    {cls:"EST",  p1:{name:"Matt Fallat",      time:23.853}, p2:{name:"Chris Carlisle",   time:24.154}, gap:0.302, gapPct:1.26},
    {cls:"SSC",  p1:{name:"Caleb Pardus",     time:23.324}, p2:{name:"Sean Mchugo",      time:23.638}, gap:0.314, gapPct:1.35},
    {cls:"XA",   p1:{name:"Zac Lakenan",      time:24.428}, p2:{name:"Nick Patterson",   time:24.780}, gap:0.352, gapPct:1.44},
    {cls:"CAMS", p1:{name:"Ryan Koleno",      time:22.911}, p2:{name:"Albert Wurst",     time:23.311}, gap:0.400, gapPct:1.74},
  ],
  CLASS_BATTLES_E3: [
    {cls:"CAMC", p1:{name:"Jared Lubbert",    time:32.885}, p2:{name:"Thomas Roberts",   time:32.969}, gap:0.084, gapPct:0.26},
    {cls:"CSP",  p1:{name:"Kevin Carlins",    time:35.772}, p2:{name:"Mark Albers",      time:35.877}, gap:0.105, gapPct:0.29},
    {cls:"EVX",  p1:{name:"Chris Yoder",      time:31.412}, p2:{name:"Robert Killmer",   time:31.529}, gap:0.117, gapPct:0.37},
    {cls:"SSM",  p1:{name:"David Stoner",     time:32.600}, p2:{name:"Steve Blough",     time:32.763}, gap:0.163, gapPct:0.50},
    {cls:"GS",   p1:{name:"David Schneider",  time:32.374}, p2:{name:"Calvin Owens",     time:32.708}, gap:0.334, gapPct:1.03},
    {cls:"BS",   p1:{name:"Roberto Redondo",  time:34.287}, p2:{name:"Chris Logsdon",    time:34.687}, gap:0.400, gapPct:1.17},
    {cls:"CAMS", p1:{name:"Ryan Koleno",      time:31.065}, p2:{name:"Justin Lee",       time:31.475}, gap:0.410, gapPct:1.32},
    {cls:"XA",   p1:{name:"Nick Patterson",   time:31.922}, p2:{name:"Justin Evanitsky", time:32.408}, gap:0.486, gapPct:1.52},
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
  IMPROVEMENT_E3: [
    {name:"David Heinbaugh",  firstClean:52.098, bestClean:36.937, delta:15.161, pct:29.10},
    {name:"David Lang",       firstClean:48.067, bestClean:35.249, delta:12.818, pct:26.67},
    {name:"Devon Mcghen",     firstClean:49.991, bestClean:40.657, delta:9.334,  pct:18.67},
    {name:"Sean Peck",        firstClean:40.457, bestClean:33.581, delta:6.876,  pct:17.00},
    {name:"Larry Steckel",    firstClean:46.931, bestClean:39.944, delta:6.987,  pct:14.89},
    {name:"Ben Elsenheimer",  firstClean:44.178, bestClean:38.064, delta:6.114,  pct:13.84},
    {name:"John Swanson",     firstClean:39.775, bestClean:34.446, delta:5.329,  pct:13.40},
    {name:"Anna Snyder",      firstClean:43.111, bestClean:37.396, delta:5.715,  pct:13.26},
    {name:"Kathy Lang",       firstClean:45.831, bestClean:40.743, delta:5.088,  pct:11.10},
    {name:"Mike Ancas",       firstClean:37.333, bestClean:33.524, delta:3.809,  pct:10.20},
  ],

  // ─── CLEAN / CONEY LEADERBOARDS (season-wide, min 15 runs) ─────────────────
  CLEAN_RATE_CLEANEST: [
    {name:"Albert Troiani",    runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Chad Arndt",        runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Ethan Hall",        runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Jay Gyger",         runs:17, clean:17, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Mark Sanner",       runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Mark Szymanski",    runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Matt Simmons",      runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Michael Laskowski", runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Ross Ivey",         runs:18, clean:18, cones:0, ocdnf:0, cleanPct:100.0},
    {name:"Bob Smith",         runs:18, clean:17, cones:0, ocdnf:1,  cleanPct:94.4},
  ],
  CLEAN_RATE_CONIEST: [
    {name:"Robert Killmer",    runs:18, clean:11, cones:5, ocdnf:2, cleanPct:61.1},
    {name:"John Low",          runs:16, clean:10, cones:3, ocdnf:3, cleanPct:62.5},
    {name:"Justin LaBarge",    runs:18, clean:12, cones:4, ocdnf:2, cleanPct:66.7},
    {name:"Eric Coffman",      runs:18, clean:13, cones:5, ocdnf:0, cleanPct:72.2},
    {name:"Al Randall",        runs:18, clean:13, cones:5, ocdnf:0, cleanPct:72.2},
    {name:"Dave Ruble",        runs:18, clean:13, cones:2, ocdnf:3, cleanPct:72.2},
    {name:"Charles Stunkard",  runs:18, clean:13, cones:5, ocdnf:0, cleanPct:72.2},
    {name:"Thomas Roberts",    runs:17, clean:13, cones:3, ocdnf:1, cleanPct:76.5},
    {name:"David Schneider",   runs:18, clean:14, cones:3, ocdnf:1, cleanPct:77.8},
    {name:"Derek McMillen",    runs:18, clean:14, cones:4, ocdnf:0, cleanPct:77.8},
  ],

  // ─── CATEGORY DRIVER COUNTS BY EVENT ───────────────────────────────────────
  CAT_DATA_E1: {Street:30,"Street Touring":9,"Classic American Muscle":19,"Electric Vehicle":3,"Hoosier Bump":9,Novice:18,"Street Bump":5,"Street Modified":5,"Street Touring Bump":5,Vintage:3,"Xtreme Street":7},
  CAT_DATA_E2: {Street:46,"Street Touring":19,"Classic American Muscle":21,"Electric Vehicle":5,"Hoosier Bump":2,Novice:4,"Street Bump":5,"Street Modified":6,"Street Touring Bump":5,Vintage:6,"Xtreme Street":6,Prepared:3,"Street Prepared":3,"Unlimited Bump":2},
  CAT_DATA_E3: {Street:45,"Street Touring":5,"Classic American Muscle":15,"Electric Vehicle":4,"Hoosier Bump":6,"Street Bump":2,"Street Modified":12,"Street Touring Bump":9,Vintage:7,"Xtreme Street":10,"Street Prepared":3,"Unlimited Bump":1},

  // ─── PARTICIPATION TRANSITIONS ─────────────────────────────────────────────
  // retained: ran both consecutive events; newToSeason: first-ever event
  PARTICIPATION: [
    { from:1, to:2, retained:74, newToSeason:59, fromDropped:39 },
    { from:2, to:3, retained:78, newToSeason:29, fromDropped:55 },
  ],

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
    e3: {
      count: 0,
      top: [],
    },
    graduates: ["Noah Snyder","Chad Arndt","Devon Mcghen"],
  },

  // ─── SEASON NARRATIVE ──────────────────────────────────────────────────────
  NARRATIVE: [
    {icon:"🏆", title:"Coffman's FTD Streak Ends",    desc:"Peter Schnore's 30.87 in his Porsche Boxster S snapped Eric Coffman's back-to-back FTD streak. Coffman finished 6th on PAX — a reminder that even the benchmark driver has off days."},
    {icon:"🎯", title:"Pearson's PAX Debut",          desc:"Randy Pearson (Honda Civic Type R, DS) posted the best indexed time of 25.579 — the first non-Coffman PAX win of the season. Kevin Duque was 0.063s back in 2nd."},
    {icon:"📉", title:"Toughest Course Yet",          desc:"Clean rate dropped to 76.2% — the season's lowest. 142 cones hit, 51 off-courses (7.1%). Stay Calm and Dave On was anything but calm."},
    {icon:"🔄", title:"Seven-Way Perfect Score",      desc:"Seven drivers hold perfect 30 event points through 3 rounds: Schneider, Zavolta, Koleno, Coffman, McMillen, Duque, and ODonnell. Meetings points separate the standings at the top."},
    {icon:"⚡", title:"EVX Battle Heats Up",          desc:"Chris Yoder entered the EVX fight with a 31.412, just 0.117s behind Robert Killmer — the 3rd-tightest class gap of the day. Killmer drops to 7 pts for E3; Yoder takes 10."},
    {icon:"🆕", title:"Field Rotation Continues",     desc:"29 new drivers made their season debut at E3, while 37 E2 regulars sat out. With 201 unique drivers across 3 events, the series keeps reaching new competitors each round."},
  ],
};
