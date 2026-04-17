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
    { id:1, name:"The Colbert Course", subtitle:"Points 1", date:"Mar 29", drivers:113, runs:715, ftdDriver:"Eric Coffman", ftdTime:20.473, avgTime:23.445, cleanRate:84.8, pylons:48, dnf:23, oc:37, ocPct:5.2 },
    { id:2, name:"Baker's Dozen",      subtitle:"Points 2", date:"Apr 12", drivers:133, runs:785, ftdDriver:"Eric Coffman", ftdTime:27.047, avgTime:30.468, cleanRate:90.5, pylons:60, dnf:1,  oc:17, ocPct:2.2 },
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
