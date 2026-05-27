export type UnitDetail = {
  slug: string
  heroHeadline: string
  heroSubhead: string
  whatYouLove: { title: string; body: string }[]
  idealFor: string[]
  amenityGroups: { category: string; items: string[] }[]
  floorPlan: string
  versusOthers: string
  unitFAQ: { question: string; answer: string }[]
  localProximity: { name: string; time: string }[]
}

export const unitDetails: UnitDetail[] = [
  {
    slug: 'sluggers-suite',
    heroHeadline: 'Second-floor apartment with a direct window view of Wrigley Field',
    heroSubhead: 'Two bedrooms, one bath, sleeps four. Ground-level game day energy, perfect for Cubs series weekends.',
    whatYouLove: [
      {
        title: 'Direct Field View from Your Living Room',
        body: 'Watch the action without leaving the apartment. Whether it\'s a day game or night game, you\'ve got a front-row seat from the living room window. See the field, hear the crowd, feel the energy.',
      },
      {
        title: 'Second Floor Convenience',
        body: 'High enough to catch the view and avoid street noise, low enough to be at the ballpark gates in 30 seconds. This floor hits the sweet spot for both atmosphere and walkability to everything on Sheffield.',
      },
      {
        title: 'Two Separate Bedrooms',
        body: 'Sleep four comfortably with separate spaces. The master has a queen, the guest room has a queen. Everyone gets their own bed, their own space, their own morning routine.',
      },
      {
        title: 'Full Kitchen, Full Freedom',
        body: 'Cook breakfast before the game, prep dinner after. Washer and dryer in unit. You\'re not staying in a hotel—you\'re living in our neighborhood for a few days.',
      },
    ],
    idealFor: [
      'Cubs game weekends',
      'Groups of 4',
      'Couples seeking view + privacy',
      'First-time Chicago visitors',
      'Multi-day series trips',
      'Friends splitting a place',
    ],
    amenityGroups: [
      {
        category: 'Kitchen',
        items: [
          'Full kitchen with stove, oven, dishwasher',
          'Coffee maker and tea service',
          'Cookware and utensils',
          'Dishes and glassware',
        ],
      },
      {
        category: 'Bedrooms & Bath',
        items: [
          'Master bedroom: queen bed, ensuite bathroom',
          'Guest bedroom: queen bed',
          'Washer and dryer in unit',
          'Fresh linens and towels',
          'Hairdryer and bath essentials',
        ],
      },
      {
        category: 'Entertainment & Comfort',
        items: [
          'Smart TV with streaming apps',
          'Fast WiFi (100+ Mbps)',
          'Central air conditioning',
          'Heat (gas, included)',
          'Sound system',
        ],
      },
      {
        category: 'Building & Access',
        items: [
          'Self check-in (keypad code)',
          'No front desk, no keys to carry',
          'Elevator access',
          'Ground-floor entrance directly on Sheffield',
        ],
      },
    ],
    floorPlan:
      'Enter directly from Sheffield Ave into the living room where the field view awaits. Open-concept living flows into the kitchen on the right. Both bedrooms branch off the main living space, with the master bath ensuite and a guest bath serving the second bedroom. The washer and dryer are tucked near the kitchen.',
    versusOthers:
      'The Slugger\'s Suite is the middle ground—same size and comfort as the Loft, but at a lower price point, with the most direct field view without the top-floor climb. Compared to the Bleacher Flat, you get the field view and full privacy indoors, trading the outdoor balcony for unobstructed sightlines from inside.',
    unitFAQ: [
      {
        question: 'Can I see Wrigley Field from the window?',
        answer:
          'Yes, directly. From the living room window on the second floor, you have a clear, unobstructed view of the field. You can watch gameplay, see the scoreboard, and catch the energy of game day without stepping outside.',
      },
      {
        question: 'Is there parking included?',
        answer:
          'There\'s no dedicated parking, but street parking is available on Sheffield and nearby residential streets. A garage is a 2-minute walk. During game days, arrive early or use a paid lot—street parking fills up quick.',
      },
      {
        question: 'What\'s the noise level during games?',
        answer:
          'You\'re directly across from Wrigley, so yes, you\'ll hear the crowd, the announcements, and the energy. It\'s part of the experience. If quiet is critical, the Field View Loft on the third floor is a bit quieter.',
      },
      {
        question: 'Can we cook full meals?',
        answer:
          'Absolutely. Full kitchen with stove, oven, dishwasher, and all cookware included. Coffee maker in the morning, prep dinner at night. You have complete freedom to cook what and when you want.',
      },
      {
        question: 'Do you provide towels, linens, and toiletries?',
        answer:
          'Yes. Fresh linens on both beds, towels in both bathrooms, plus basic bath essentials (shampoo, soap, etc.). If you need extra towels or anything else, message us anytime.',
      },
      {
        question: 'How do we check in?',
        answer:
          'Self check-in via keypad code. No keys, no waiting, no front desk. We\'ll text you the code before arrival. You unlock the building door and take the elevator up. Super simple.',
      },
    ],
    localProximity: [
      { name: 'Wrigley Field bleacher entrance', time: '30 sec walk' },
      { name: 'Murphy\'s Bleachers', time: '1 min walk' },
      { name: 'Gallagher Way (food & drinks)', time: '1 min walk' },
      { name: 'Cubby Bear (bar)', time: '2 min walk' },
      { name: 'Addison Red Line station', time: '3 min walk' },
      { name: 'Mariano\'s grocery store', time: '5 min walk' },
      { name: 'Lake Michigan shoreline', time: '12 min walk' },
      { name: 'Lincoln Park neighborhood', time: '15 min walk' },
    ],
  },
  {
    slug: 'bleacher-balcony-flat',
    heroHeadline: 'First-floor apartment with a private balcony and partial Wrigley view',
    heroSubhead: 'Two bedrooms, one bath, sleeps four. Your own outdoor space, steps from the ballpark.',
    whatYouLove: [
      {
        title: 'Private Balcony With Partial Field View',
        body: 'Your own outdoor space overlooking Sheffield, with a sliver of the field visible. Sit outside with a drink before the game, feel the neighborhood energy, watch fans walk by on their way to the park.',
      },
      {
        title: 'Ground Floor, Walkability That Can\'t Be Beat',
        body: 'Step out your door and be at the bleacher gates in under two minutes. No elevator wait, no stairs to climb when you\'re tired after a long day. Convenience is built in.',
      },
      {
        title: 'Best Price, Same Comfort',
        body: 'Two full bedrooms, full kitchen, washer and dryer. You\'re not giving up on amenities—you\'re just being smart about your dollar. Great for groups splitting costs.',
      },
      {
        title: 'Outdoor Living Space',
        body: 'The balcony is a game-day tradition. Use it for morning coffee, evening drinks, or just stepping outside to feel the pulse of the neighborhood. It\'s extra square footage that matters.',
      },
    ],
    idealFor: [
      'Budget-conscious groups',
      'Game day parties',
      'First-time visitors',
      'Friends sharing costs',
      'Outdoor-loving guests',
      'Walking distance seekers',
    ],
    amenityGroups: [
      {
        category: 'Kitchen',
        items: [
          'Full kitchen with stove, oven, dishwasher',
          'Coffee maker and tea service',
          'Cookware and utensils',
          'Dishes and glassware',
        ],
      },
      {
        category: 'Bedrooms & Bath',
        items: [
          'Master bedroom: queen bed',
          'Guest bedroom: queen bed',
          'Washer and dryer in unit',
          'Fresh linens and towels',
          'Hairdryer and bath essentials',
        ],
      },
      {
        category: 'Entertainment & Comfort',
        items: [
          'Smart TV with streaming apps',
          'Fast WiFi (100+ Mbps)',
          'Central air conditioning',
          'Heat (gas, included)',
          'Private balcony with seating',
        ],
      },
      {
        category: 'Building & Access',
        items: [
          'Self check-in (keypad code)',
          'Ground-floor location',
          'No elevator needed',
          'Direct building access from Sheffield',
        ],
      },
    ],
    floorPlan:
      'Enter from Sheffield directly into the living room. Kitchen sits to the right of the living space. Both bedrooms branch off the main area, each with its own vibe. The balcony opens from the living room, your outdoor extension. Guest bath serves the main space, ensuite in the master bedroom.',
    versusOthers:
      'The Bleacher Flat is the most accessible and affordable option. You trade the direct field view indoors for a private balcony and the best walkability to the ballpark. It\'s the same two-bedroom layout as the Slugger\'s Suite, but ground-floor convenience and outdoor space make it a different experience.',
    unitFAQ: [
      {
        question: 'Can we see the field from the balcony?',
        answer:
          'You get a partial view—a sliver of the field from one corner of the balcony. It\'s enough to catch the crowd energy and know game time, but the main attraction is the street-level view of Sheffield and the neighborhood vibe.',
      },
      {
        question: 'How long is the walk to the ballpark?',
        answer:
          'Under two minutes to the bleacher gates. You\'re on the same side of the street, same block practically. Grab a coffee, leave the apartment, you\'re in the bleachers 90 seconds later.',
      },
      {
        question: 'Is the balcony furnished?',
        answer:
          'Yes. Chairs and a small table. Perfect for morning coffee, game-day drinks, or just watching Sheffield wake up. We\'ll note any seasonal furniture updates when you book.',
      },
      {
        question: 'What about noise and street activity?',
        answer:
          'Ground floor means you hear neighborhood energy, especially on game days. It\'s part of the charm. If that doesn\'t appeal, the higher floors are quieter.',
      },
      {
        question: 'Is there a washer and dryer?',
        answer:
          'Yes, full washer and dryer in unit. No laundromat trips. You can do laundry whenever you want.',
      },
      {
        question: 'How many people can comfortably stay here?',
        answer:
          'Four, maximum. Two queens, sleeping four. Sofa in the living room if someone needs a third bed, but tight. We recommend four as the sweet spot.',
      },
    ],
    localProximity: [
      { name: 'Wrigley Field bleacher entrance', time: '2 min walk' },
      { name: 'Murphy\'s Bleachers', time: '1 min walk' },
      { name: 'Gallagher Way (food & drinks)', time: '1 min walk' },
      { name: 'Cubby Bear (bar)', time: '2 min walk' },
      { name: 'Addison Red Line station', time: '3 min walk' },
      { name: 'Mariano\'s grocery store', time: '5 min walk' },
      { name: 'Small Corner Park', time: '2 min walk' },
      { name: 'Lake Michigan shoreline', time: '12 min walk' },
    ],
  },
  {
    slug: 'catbird-seat',
    heroHeadline: '1-minute walk to Wrigley. Top floor. Corner-lot bay windows.',
    heroSubhead:
      'Our 2-bedroom top-floor apartment at 3601 N Sheffield. Sleeps 5, 900 sqft, 10-foot ceilings, Walk Score 98. The Red Line is literally next door.',
    whatYouLove: [
      {
        title: 'You can see the whole neighborhood from your living room',
        body:
          "The living room has huge bay-like windows, and the dining area wraps the corner with more large windows. Because we're on a corner lot, you get the full Wrigleyville scene from inside the apartment. On game days, you watch the crowd stream toward the stadium without leaving the couch. Plenty of natural light all day.",
      },
      {
        title: 'Top-floor quiet, with bedrooms double-windowed for sleep',
        body:
          "You're on the top floor (2nd) with no neighbors above you. The bedrooms have double-pane windows we added specifically for soundproofing. Wrigleyville is a vibrant block, and we want you to actually sleep. The living room keeps the energy. The bedrooms keep the peace.",
      },
      {
        title: 'Transit at your front door',
        body:
          "The Addison Red Line station and a CTA bus stop are literally next to the building. You can be in downtown Chicago in 15 to 20 minutes, at Lake Michigan in 15, or at O'Hare in under an hour, all without a car. We give every guest the same advice: skip the rental.",
      },
      {
        title: 'A real apartment, not a hotel room',
        body:
          "Fully equipped kitchen with a dishwasher, 300 Mbps WiFi (fast enough to actually work from), 4K HD smart TV with live TV, multi-setting rainfall shower, washer/dryer in the building, and a dedicated workspace. We provide shampoo, conditioner, and body wash so you don't have to pack toiletries.",
      },
    ],
    idealFor: [
      'Cubs series weekends',
      'Wrigley Field concert nights',
      'Groups of 4 or 5',
      'Couples plus a guest',
      'Game-day scene from your window',
      'Anyone who wants to skip a rental car',
    ],
    amenityGroups: [
      {
        category: 'Kitchen & dining',
        items: [
          'Full kitchen with dishwasher',
          'Stove, oven, microwave',
          'Refrigerator and freezer',
          'Coffee maker',
          'Cooking basics (pots, pans, oil, salt, pepper)',
          'Dishes, silverware, glassware',
        ],
      },
      {
        category: 'Sleeping (sleeps 5)',
        items: [
          '2 queen beds, one in each bedroom',
          'Roll-out twin bed',
          'Folding floor mattress',
          'Fresh bed linens (fitted plus flat sheets)',
          'Extra pillows and blankets',
          'Hangers in both bedrooms',
        ],
      },
      {
        category: 'Bath',
        items: [
          'Multi-setting rainfall shower head',
          'Shampoo and conditioner provided',
          'Body soap and shower gel provided',
          'Hot water',
          'Hair dryer',
          'Bath towels, hand towels, face cloths',
        ],
      },
      {
        category: 'Comfort & tech',
        items: [
          'Central air conditioning',
          'Central heating',
          'Ceiling fan and portable fans',
          '300 Mbps WiFi throughout',
          '4K HD Smart TV with live TV',
          'Soundproofed double-pane bedroom windows',
          'Dedicated workspace',
          'Iron',
        ],
      },
      {
        category: 'Building & access',
        items: [
          'Smart-lock keyless self check-in (your own personal code)',
          'No physical key handoff required',
          'Top floor (2nd) of a 3-unit building',
          'In-building washer and dryer',
          'Free residential street-parking pass (1 per night)',
        ],
      },
      {
        category: 'Home safety',
        items: [
          'Carbon monoxide detector',
          'Smoke detector',
          'Fire extinguisher',
          'First aid kit',
        ],
      },
    ],
    floorPlan:
      "You enter into a generous open living and dining space along the corner of the building. Bay-like windows on one side, wraparound windows in the dining area on the other. The kitchen is at the back with full appliances and counter space. Two bedrooms sit on the quieter interior side, both with soundproofed double-pane windows. One full bathroom with a multi-setting rainfall shower. 10-foot ceilings throughout make the 900 sqft feel substantially larger than the number suggests.",
    versusOthers:
      "The Catbird Seat is the top-floor apartment in our 3-unit building. The highest, brightest, and quietest of the three. If you want the corner-lot views and the elevated quiet, this is your unit. The other two apartments (Garden Level and First Floor) are equally close to Wrigley but sit lower in the building. All three are 2-bed, 1-bath.",
    unitFAQ: [
      {
        question: 'How close exactly is the apartment to Wrigley Field?',
        answer:
          "About a 1-minute walk. We're at 3601 N Sheffield Ave, one block from the bleacher entrance. You can see the crowd streaming toward the stadium from the living room and dining room windows.",
      },
      {
        question: 'What floor is it on, and is there an elevator?',
        answer:
          "Top floor (2nd) of a 3-unit building. There is no elevator, you take the stairs from the main entrance up to the apartment. The Garden Level unit sits below, and there is a First Floor unit in between (which is about 12 steps up from the sidewalk).",
      },
      {
        question: 'How many people can sleep here?',
        answer:
          "Sleeps 5 comfortably with two queen beds (one in each bedroom), a roll-out twin, and a folding floor mattress. Maximum guest count is 5.",
      },
      {
        question: 'How is the noise situation? Wrigleyville sounds loud.',
        answer:
          "Honest answer: the neighborhood is vibrant, especially around games and concerts. The living room will catch some of that energy, which most guests love. The bedrooms have double-pane windows we added specifically for soundproofing, so sleep is much quieter than you would expect. That said, this apartment may not be ideal for the very lightest sleepers.",
      },
      {
        question: 'Is parking available?',
        answer:
          "We provide a free residential street-parking pass (1 per night) that lets you park on resident-only streets. Spots are not 100% guaranteed since it is street parking. Honestly, we recommend skipping the car. The Red Line is right next to the building and a 3-day CTA pass is about $15.",
      },
      {
        question: 'How do we get in?',
        answer:
          "Keyless self check-in with a smart lock. You will get your own personal code in your booking confirmation. Main building door first, then your apartment door (the second of three doors inside). No physical key, no key handoff required.",
      },
      {
        question: 'Is there fast WiFi for working remotely?',
        answer:
          "Yes, 300 Mbps WiFi throughout the apartment. Plenty fast for video calls, streaming, and remote work. There is also a dedicated workspace if you need a real desk.",
      },
      {
        question: 'What is the kitchen like? Can we actually cook?',
        answer:
          "Fully equipped. Full stove, oven, microwave, dishwasher, pots and pans, dishes, silverware, oil, salt, and pepper. You can absolutely cook here. Mariano's grocery is a 5-minute walk for everything else.",
      },
    ],
    localProximity: [
      { name: 'Wrigley Field', time: '1 min walk' },
      { name: 'Addison Red Line', time: 'Right next door' },
      { name: 'CTA bus stop', time: 'Right next door' },
      { name: 'Gallagher Way', time: '1 min walk' },
      { name: "Murphy's Bleachers", time: '2 min walk' },
      { name: 'The Cubby Bear', time: '2 min walk' },
      { name: 'CVS', time: '3 min walk' },
      { name: "Mariano's grocery", time: '5 min walk' },
      { name: 'Starbucks / Subway / Chipotle', time: 'Under 5 min walk' },
      { name: 'Lake Michigan trail', time: '15 min walk' },
      { name: 'Downtown Chicago (Loop)', time: '15 to 20 min on Red Line' },
      { name: "O'Hare Airport", time: 'About 60 min via Blue Line transfer' },
    ],
  },
]

export function getUnitDetail(slug: string): UnitDetail | undefined {
  return unitDetails.find(u => u.slug === slug)
}
