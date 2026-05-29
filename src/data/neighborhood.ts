// Wrigleyville + Lakeview neighborhood guide
// Hand-curated by us, your hosts. Updated regularly.
// All distances measured from our building in Wrigleyville.

export type Spot = {
  name: string
  category: 'pre-game' | 'sit-down' | 'late-night' | 'coffee' | 'brunch' | 'date-night' | 'family' | 'transit' | 'shopping' | 'park'
  distance: string
  description: string
  ourPick?: string // why we send guests here specifically
  goodFor?: string[] // tags
  hoursNote?: string
  priceLevel?: 1 | 2 | 3 // $, $$, $$$
  hostPick?: boolean // shown with HOST PICK badge
  photoLabel?: string // monospace placeholder label until real photo
}

// ============ HERO STATS PANEL (top of /neighborhood) ============
export type HeroStat = { label: string; value: string; highlight?: boolean }
export const heroStats: HeroStat[] = [
  { label: 'Wrigley Field', value: 'Across the street', highlight: true },
  { label: 'Red Line · Addison', value: 'Across the street' },
  { label: 'Lakefront Trail', value: '15 min walk east' },
  { label: 'Downtown Chicago', value: '15 min by train' },
  { label: 'Divvy Bikes', value: 'Station at our door' },
  { label: "O'Hare Airport", value: '60 min · Blue Line' },
]

// ============ QUICK FACTS SIDEBAR (overview section) ============
export type QuickFact = { label: string; value: string; sub: string }
export const quickFacts: QuickFact[] = [
  { label: 'Our building', value: 'Wilton Avenue', sub: 'Directly across from Wrigley' },
  { label: 'Train', value: 'Addison Red Line', sub: 'Across the street · 24/7 service' },
  { label: 'Bike share', value: 'Divvy Station', sub: 'At our front door' },
  { label: 'Parking', value: 'Skip it', sub: '$40–60/day on game days' },
  { label: 'Nearest beach', value: 'Montrose Beach', sub: '15 min walk north' },
  { label: 'Deep dish (best)', value: "Pequod's Pizza", sub: '15 min by rideshare' },
]

export const spots: Spot[] = [
  // ==================== PRE-GAME + GAME-DAY BARS ====================
  {
    name: "Murphy's Bleachers",
    category: 'pre-game',
    distance: '1 min walk',
    description:
      "The Wrigleyville classic. Right at the corner of Sheffield and Waveland, directly across from the bleacher entrance. Cold beer, an enormous outdoor patio, and a crowd that swells two hours before first pitch.",
    ourPick: 'Get there 90 minutes before first pitch on weekends. After that the line wraps around the block.',
    goodFor: ['game day', 'big groups', 'outdoor seating'],
    priceLevel: 2,
    hostPick: true,
    photoLabel: "photo · Murphy's patio",
  },
  {
    name: 'The Cubby Bear',
    category: 'pre-game',
    distance: '2 min walk',
    description:
      "A Wrigleyville institution since 1953, sitting right across from the marquee on Clark and Addison. Two floors, multiple bars, and live music on weekend nights. As iconic to the neighborhood as the ballpark itself.",
    ourPick: 'Best people-watching in Wrigleyville is from the upstairs windows looking down at the marquee.',
    goodFor: ['game day', 'live music', 'late night'],
    priceLevel: 2,
    photoLabel: 'photo · Cubby Bear marquee view',
  },
  {
    name: 'HVAC Pub',
    category: 'pre-game',
    distance: '3 min walk',
    description:
      "Quieter than the Clark Street giants. A neighborhood favorite with a great patio and a deep beer list. Good pre-game spot if you want conversation, not chaos.",
    ourPick: 'Order the wings. Locals know.',
    goodFor: ['quieter pre-game', 'beer selection'],
  },
  {
    name: 'Sluggers World Class Sports Bar',
    category: 'pre-game',
    distance: '2 min walk',
    description:
      "Two-story sports bar with batting cages upstairs (yes, really) and a famous dueling-piano bar called The Piano Lounge. A Wrigleyville rite of passage.",
    ourPick: 'After the game, head upstairs for batting cages before the piano lounge gets packed.',
    goodFor: ['game day', 'late night', 'unique'],
    priceLevel: 2,
    photoLabel: 'photo · Sluggers batting cages',
  },

  // ==================== SIT-DOWN RESTAURANTS ====================
  {
    name: 'Big Star Wrigleyville',
    category: 'sit-down',
    distance: '3 min walk',
    description:
      "Wood-fired tacos al pastor, a serious tequila list, and a sunny outdoor patio. The Wrigleyville outpost of one of Chicago's most beloved taquerias.",
    ourPick: "The al pastor tacos and a margarita on the patio is our perfect pre-game order.",
    goodFor: ['date night', 'patio', 'pre-game'],
    priceLevel: 2,
    hostPick: true,
    photoLabel: 'photo · Big Star tacos al pastor',
  },
  {
    name: 'Mordecai',
    category: 'date-night',
    distance: '2 min walk',
    description:
      "Hidden inside Hotel Zachary, just steps from the ballpark. A craft cocktail bar and steakhouse with one of the deepest whiskey lists in the city. Quiet, dark, and elevated.",
    ourPick: "Reserve the chef's counter — they pour rare whiskeys you won't see on the menu.",
    goodFor: ['date night', 'cocktails', 'special occasion'],
    hoursNote: 'Dinner only, reservations strongly recommended',
    priceLevel: 3,
    photoLabel: 'photo · Mordecai whiskey bar',
  },
  {
    name: 'Mia Francesca',
    category: 'sit-down',
    distance: '4 min walk',
    description:
      "Neighborhood Italian on Clark. Rustic, warm, and consistent for 30 years. Big plates of handmade pasta, perfect for groups coming back from a game.",
    ourPick: 'The bolognese is the order. Get the bottle of Chianti and split.',
    goodFor: ['family', 'groups', 'comfort food'],
  },
  {
    name: 'Happy Camper',
    category: 'sit-down',
    distance: '5 min walk',
    description:
      "Wood-fired pizza in a charming, slightly kitschy space (yes, there's a real Airstream trailer inside). Friendly, fun, and great for groups.",
    ourPick: 'The honey-drizzled pepperoni pizza is unreal.',
    goodFor: ['groups', 'family', 'casual'],
  },
  {
    name: 'Cozy Noodles & Rice',
    category: 'sit-down',
    distance: '3 min walk',
    description:
      "A Wrigleyville hidden gem — Thai comfort food in a tiny, packed-with-knick-knacks dining room. Cash-friendly, fast, and exactly what you want after a long game day.",
    ourPick: "Get the pad see ew. It's been the same recipe for 20+ years.",
    goodFor: ['quick bite', 'late night', 'affordable'],
  },

  // ==================== LATE-NIGHT EATS ====================
  {
    name: 'Wrigleyville Dogs',
    category: 'late-night',
    distance: '2 min walk',
    description:
      "Open absurdly late. The classic Chicago hot dog (dragged through the garden — never ketchup) plus Italian beef, gyros, and Polish sausages. Walk-up window perfect for the post-bar pilgrimage.",
    ourPick: 'Order the Maxwell Street Polish with grilled onions and sport peppers. Trust us.',
    goodFor: ['late night', 'cheap eats', 'Chicago classic'],
    hoursNote: 'Open until 4-5 AM on weekends',
  },
  {
    name: "Jimmy's Pizza Café",
    category: 'late-night',
    distance: '4 min walk',
    description:
      "Late-night thin crust by the slice. Crispy, garlic-buttery crust that makes more sense at 2 AM than it has any right to.",
    ourPick: "Sausage and giardiniera slice. Don't skip the giardiniera.",
    goodFor: ['late night', 'cheap eats'],
  },

  // ==================== BRUNCH ====================
  {
    name: 'The Pony Inn',
    category: 'brunch',
    distance: '6 min walk',
    description:
      "Brunch with a giant patio that fills up the second the weather turns. American comfort plates, strong bloody marys, and a vibe that says \"we have nowhere to be today.\"",
    ourPick: 'Get the chicken and waffles and ask for the bloody mary spicy.',
    goodFor: ['brunch', 'patio', 'groups'],
    priceLevel: 2,
    photoLabel: 'photo · Pony Inn brunch patio',
  },
  {
    name: 'Yolk',
    category: 'brunch',
    distance: '8 min walk',
    description:
      "Chicago breakfast institution with a Lakeview location two short blocks from us. Massive omelets, fluffy pancakes, and the best benedicts in the neighborhood. Expect a wait on Saturdays.",
    ourPick: 'Skip the wait — go on a weekday or get there before 9 AM Saturday.',
    goodFor: ['brunch', 'family', 'big appetites'],
  },

  // ==================== COFFEE ====================
  {
    name: 'Intelligentsia Coffee',
    category: 'coffee',
    distance: '8 min walk',
    description:
      "Chicago-born specialty coffee. Their Lakeview location on Broadway is a serious-coffee spot — perfect single-origin pour-overs, beautiful lattes, and laptop-friendly tables in the back.",
    ourPick: 'The Black Cat Espresso is their signature for a reason.',
    goodFor: ['serious coffee', 'work-friendly'],
    priceLevel: 2,
    hostPick: true,
    photoLabel: 'photo · Intelligentsia café bar',
  },
  {
    name: 'Dollop Coffee',
    category: 'coffee',
    distance: '6 min walk',
    description:
      "Friendly neighborhood coffee shop. Great espresso, good pastries, and reliable Wi-Fi. The kind of place where the baristas remember your order.",
    ourPick: 'The breakfast burrito + cortado is our go-to morning combo.',
    goodFor: ['casual coffee', 'pastries'],
  },

  // ==================== GROCERY + DAILY ====================
  {
    name: "Mariano's",
    category: 'shopping',
    distance: '5 min walk',
    description:
      "Full-service grocery store on Clark Street with a hot food bar, prepared meals, and a wine selection that's better than most liquor stores. Perfect for stocking the apartment kitchen on day one.",
    ourPick: 'Their olive bar and the in-store sushi counter are underrated.',
    goodFor: ['groceries', 'wine', 'prepared food'],
  },
  {
    name: 'CVS Pharmacy',
    category: 'shopping',
    distance: '3 min walk',
    description:
      "Right on Clark for anything you forgot to pack — toiletries, snacks, sunscreen, Cubs t-shirts (yes, they have them).",
    goodFor: ['essentials', 'forgot-to-pack runs'],
  },

  // ==================== PARKS + OUTDOOR ====================
  {
    name: 'Gallagher Way',
    category: 'park',
    distance: '1 min walk',
    description:
      "The open-air plaza right next to Wrigley Field. Free concerts, outdoor yoga, movie nights in summer, and a Christkindlmarket in December. Always something happening, game day or not.",
    ourPick: 'Check the Gallagher Way event calendar before you arrive — even non-game days often have something free and great.',
    goodFor: ['families', 'free events', 'all ages'],
  },
  {
    name: 'Lakefront Trail at Belmont Harbor',
    category: 'park',
    distance: '15 min walk',
    description:
      "Chicago's 18-mile lakefront path runs right past Belmont Harbor, a short walk east of us. Perfect for a morning jog, bike ride, or just sitting and watching the sailboats with Lake Michigan stretching to the horizon.",
    ourPick: 'Rent a Divvy bike from the station two blocks away and ride north to Montrose Beach. The skyline view going back is unreal.',
    goodFor: ['running', 'biking', 'lake views', 'families'],
  },

  // ==================== TRANSIT ====================
  {
    name: 'Addison Red Line Station',
    category: 'transit',
    distance: '3 min walk',
    description:
      "Our magic carpet to the rest of Chicago. The Red Line runs 24/7 — about 15-20 minutes south to the Loop (downtown), and direct trains to both O'Hare (via transfer) and Midway. The single best reason you don't need a rental car here.",
    ourPick: "Buy a 3-day or 7-day CTA Ventra pass on day one. Way cheaper than per-ride for the trips you'll actually take.",
    goodFor: ['downtown trips', 'airport access', 'museums', 'shopping'],
    hoursNote: '24/7 service',
  },
  {
    name: 'Clark Street Bus (CTA #22)',
    category: 'transit',
    distance: '2 min walk',
    description:
      "Runs along Clark Street, connecting Wrigleyville to Old Town, Lincoln Park, and downtown. A scenic alternative to the L if you prefer street-level views.",
    goodFor: ['scenic route to downtown', 'Lincoln Park trips'],
  },
  {
    name: 'Divvy Bike Station',
    category: 'transit',
    distance: '1 min walk',
    description:
      "Chicago's bike-share. There's a station right on Sheffield with always-available bikes. Day passes are cheap, the lakefront trail is gorgeous, and Chicago is dead flat — perfect for biking.",
    ourPick: 'Day pass is $16.50 and includes unlimited 3-hour rides. The lakefront path is the move.',
    goodFor: ['exploring', 'lakefront rides', 'short trips'],
  },
]

// Chicago appeal — destinations beyond Wrigleyville
export type ChicagoDestination = {
  name: string
  redLineTime: string
  blurb: string
  whyYouShouldGo: string
  goodFor: string[]
}

export const chicagoDestinations: ChicagoDestination[] = [
  {
    name: 'The Loop & Millennium Park',
    redLineTime: '15-20 min on the Red Line',
    blurb:
      "Chicago's iconic downtown core. Cloud Gate (\"The Bean\"), Millennium Park, the Riverwalk, Chicago Theatre, Art Institute, and the architecturally jaw-dropping Chicago River corridor. Hop off at Lake or Monroe station.",
    whyYouShouldGo:
      "You haven't really seen Chicago until you've walked the Riverwalk at golden hour and stood under The Bean.",
    goodFor: ['first-time visitors', 'photos', 'architecture'],
  },
  {
    name: 'Magnificent Mile',
    redLineTime: '20 min on the Red Line (Chicago Ave stop)',
    blurb:
      "North Michigan Avenue's shopping corridor. Big flagship stores, the historic Water Tower, and a straight shot to Oak Street Beach.",
    whyYouShouldGo: 'Even if you don\'t shop, walking the Mag Mile is part of seeing Chicago.',
    goodFor: ['shopping', 'walking', 'lake views'],
  },
  {
    name: 'Lake Michigan & The Lakefront',
    redLineTime: '10 min walk east, or jump on a Divvy',
    blurb:
      "Chicago's best-kept open secret if you've never been. 26 miles of beaches, paths, and harbors right on the city's edge. North Avenue Beach and Oak Street Beach are both an easy Red Line ride south.",
    whyYouShouldGo:
      "Most cities would kill to have a freshwater coastline like this. Don't leave without spending an hour on the lakefront.",
    goodFor: ['running', 'biking', 'beach days', 'families'],
  },
  {
    name: 'The Museums',
    redLineTime: '20-30 min',
    blurb:
      "The Art Institute, Field Museum, Shedd Aquarium, and Adler Planetarium are all clustered together on the Museum Campus south of downtown. The Museum of Science and Industry sits a bit further south in Hyde Park.",
    whyYouShouldGo:
      "The Art Institute alone is one of the best art museums on the planet. The Field's Sue the T-Rex is non-negotiable for kids.",
    goodFor: ['families', 'rainy days', 'art lovers'],
  },
  {
    name: "Lincoln Park & Lincoln Park Zoo",
    redLineTime: '5 min on the Red Line (Fullerton stop)',
    blurb:
      "Massive lakefront park just south of us. Lincoln Park Zoo is one of the only free major zoos in the country. The Lincoln Park Conservatory and the Nature Boardwalk are perfect for a slow morning.",
    whyYouShouldGo: "Free zoo. Free conservatory. Beautiful park. Bring kids or just go yourself.",
    goodFor: ['families', 'free things', 'easy day trip'],
  },
  {
    name: "Deep-Dish Pizza Pilgrimage",
    redLineTime: 'Most are 15-20 min south',
    blurb:
      "You can't visit Chicago without eating deep dish. Pequod's (caramelized cheese crust) is closest — a 15-min walk south in Lincoln Park. Lou Malnati's, Giordano's, and Gino's East are the downtown classics. They're all worth the trip.",
    whyYouShouldGo: "It's the law.",
    goodFor: ['food tourists', 'first-timers'],
  },
  {
    name: 'Wicker Park & Bucktown',
    redLineTime: '20-25 min (Blue Line transfer)',
    blurb:
      "Chicago's hippest neighborhood. Independent record stores, vintage shopping, killer cocktail bars, and some of the city's best restaurants. Take the Red Line to the Loop, transfer to the Blue Line.",
    whyYouShouldGo: 'Worth a half-day for shopping and a great meal at Dove\'s Luncheonette or Big Star (the original).',
    goodFor: ['shopping', 'food', 'nightlife'],
  },
  {
    name: 'Navy Pier',
    redLineTime: '25-30 min',
    blurb:
      "Tourist-heavy, but the Centennial Wheel at sunset over Lake Michigan is hard to beat. Free fireworks Wednesday and Saturday nights in summer.",
    whyYouShouldGo: 'If you have kids or are here in summer, it earns a 2-hour visit.',
    goodFor: ['families', 'summer evenings', 'first-timers'],
  },
]
