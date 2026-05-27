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
      'Pet owners',
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
          'Direct entry on the Sheffield Avenue side',
          'Pets welcome (message us first)',
        ],
      },
    ],
    floorPlan:
      'Enter from the building into the garden-level apartment, the closest unit to street level. Open-concept living flows into the kitchen on the right. Both bedrooms branch off the main living space. One full bathroom serves the unit. The washer and dryer are in-building.',
    versusOthers:
      'The Slugger\'s Suite is the middle ground—same size and comfort as the Loft, but at a lower price point, with the most direct field view without the top-floor climb. Compared to the Bleacher Flat, you get the field view and full privacy indoors, trading the outdoor balcony for unobstructed sightlines from inside.',
    unitFAQ: [
      {
        question: 'Are pets allowed?',
        answer:
          "Yes, pets are welcome. We do ask you to message us about your specific pet before booking so we can confirm fit. Assistance animals are always allowed.",
      },
      {
        question: "What floor is this unit on?",
        answer:
          "Garden Level, the half-basement floor of our 3-unit building. It is the closest unit to the sidewalk and the bleacher entrance. The other two apartments sit above.",
      },
      {
        question: "Is there parking included?",
        answer:
          "Yes. We provide a free residential street-parking pass (1 per night) for resident-only streets. Spots are not 100% guaranteed since it is street parking. Honestly, we recommend skipping the car. The Red Line is right next to the building.",
      },
      {
        question: "What is the noise level during games?",
        answer:
          "Wrigleyville is energetic, especially around games and concerts. You will hear the crowd and the marquee from the living room, which most guests love. If you are a very light sleeper, this apartment may not be ideal.",
      },
      {
        question: "Can we cook full meals?",
        answer:
          "Yes. Full kitchen with stove, oven, dishwasher, and all cookware included. Coffee maker in the morning, prep dinner at night.",
      },
      {
        question: "How do we check in?",
        answer:
          "Self check-in with a smart lock. You will get your own personal code in your booking confirmation. No keys, no waiting, no front desk.",
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
    heroHeadline: 'First-floor classic. New floors. Bay windows.',
    heroSubhead:
      'Our 2-bedroom first-floor apartment in Wrigleyville. Sleeps 5 in 780 sqft, 10-foot ceilings, Walk Score 98. Refloored in 2022. 4.68 stars across 117 guest reviews.',
    whatYouLove: [
      {
        title: 'Game day energy from the dining room corner',
        body:
          "Tall 10-foot ceilings and huge bay-like windows in the living room, with big wraparound windows in the dining area. The corner lot puts you in the middle of the action: you watch Cubs fans stream toward the stadium on game day from inside the apartment, no need to leave the couch.",
      },
      {
        title: 'Central AC and heat. New floors in 2022.',
        body:
          "Real central air and central heat, not window units. We refloored the living and dining rooms in 2022. The apartment looks and feels updated, but the building still has the classic Wrigleyville bones.",
      },
      {
        title: 'Sleeps 5 with a real bed for everyone',
        body:
          "Two queen beds (one per bedroom), a roll-out twin, and a convertible sleeper couch in the living room. Four real sleeping surfaces for up to 5 guests, so nobody is stuck on a floor mattress.",
      },
      {
        title: 'Where guests come back, and bring the dog',
        body:
          "4.68 stars across 117 guest reviews. Pets are welcome here. Bring them along (assistance animals are always welcome). We ask you to message us about your specific pet before booking so we can confirm fit.",
      },
    ],
    idealFor: [
      'Cubs series weekends',
      'Pet owners (dogs welcome)',
      'Groups of 4 or 5',
      'Anyone who hates window-unit AC',
      'Concerts at Wrigley Field',
      'Skipping the rental car',
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
          'Dishes, silverware, bowls, cups',
        ],
      },
      {
        category: 'Sleeping (sleeps 5)',
        items: [
          '2 queen beds, one in each bedroom',
          'Roll-out twin bed',
          'Convertible sleeper couch in living room',
          'Fresh bed linens and towels',
          'Extra pillows and blankets',
          'Hangers in both bedrooms',
        ],
      },
      {
        category: 'Bath',
        items: [
          'Multi-setting rainfall shower head',
          'Shampoo and body soap provided',
          'Hot water',
          'Hair dryer',
          'Bath towels, hand towels, face cloths',
        ],
      },
      {
        category: 'Comfort & tech',
        items: [
          'Central air conditioning (not a window unit)',
          'Central heating',
          'Portable fans on request',
          '300 Mbps WiFi throughout',
          '4K Smart TV with standard cable',
          'Dedicated workspace',
          'Iron',
        ],
      },
      {
        category: 'Building & access',
        items: [
          'Self check-in with smart lock (your own personal code)',
          'No physical key handoff',
          'Private entrance (separate apartment door inside the building)',
          'First floor of a 3-unit building (middle apartment)',
          'In-building washer and dryer',
          'Free street parking, plus residential parking pass (1 per night)',
          'Pets allowed (message us first)',
        ],
      },
      {
        category: 'Home safety',
        items: [
          'Exterior security cameras (front and back of building)',
          'Outdoor doorbell cameras at both entrances',
          'Noise decibel monitor on property',
          'Carbon monoxide detector',
          'Smoke detector',
          'Fire extinguisher',
          'First aid kit',
        ],
      },
    ],
    floorPlan:
      "Enter from the main building door, then through your own apartment door (the middle of three apartment doors inside the building). You walk into an open living and dining space with the corner-lot bay windows opening onto Sheffield Avenue. The kitchen sits at the back. Both bedrooms are off the main space on the quieter side, each with a queen bed. One full bathroom with a multi-setting rainfall shower. 780 sqft total, with 10-foot ceilings that make the rooms feel taller than the footprint suggests.",
    versusOthers:
      "Bleacher Balcony Flat is the first-floor (middle) apartment in our 3-unit building. Slightly smaller than the Top Floor's 900 sqft, with the same bay-window views but a different vantage. The classic raised first-floor feel, with new floors in 2022 and real central AC and heat (not window units). It is the most-reviewed unit of the three: 117 stays at 4.68 stars. All three apartments welcome pets.",
    unitFAQ: [
      {
        question: 'Are pets really allowed?',
        answer:
          "Yes. We welcome dogs (and other household pets) here, and assistance animals are always allowed. We do ask you to message us about your specific pet before booking so we can confirm fit. All three units in our building allow pets.",
      },
      {
        question: 'How close exactly is the apartment to Wrigley Field?',
        answer:
          "About a 1-minute walk. We are in Wrigleyville, one block from the bleacher entrance. You see Cubs fans streaming toward the stadium from the dining room windows on game day.",
      },
      {
        question: 'What floor is it on?',
        answer:
          "First floor of a 3-unit building, the middle apartment. There is a Garden Level apartment below and a Top Floor apartment above. You enter from the main building door, then through your own apartment door (the middle of three apartment doors inside).",
      },
      {
        question: 'How many people can sleep here?',
        answer:
          "Sleeps 5 comfortably with two queen beds (one per bedroom), a roll-out twin, and a convertible sleeper couch in the living room. That is four real sleeping surfaces for up to 5 guests.",
      },
      {
        question: 'How is the noise situation? Wrigleyville sounds loud.',
        answer:
          "Honest answer: the neighborhood is vibrant, especially around games and concerts. The living room catches some of that energy, which most guests love. The bedrooms have double-pane windows for soundproofing, so sleep is quieter than you would expect. That said, this apartment may not be ideal for the very lightest sleepers. We also have noise decibel monitors on property as a courtesy to neighbors.",
      },
      {
        question: 'Is parking available?',
        answer:
          "Yes. We provide a free residential street-parking pass (1 per night) for resident-only streets, plus free street parking around the building. Honestly, we recommend skipping the car. The Red Line is right next to the building and a 3-day CTA pass is about $15.",
      },
      {
        question: 'How do we get in?',
        answer:
          "Keyless self check-in with a smart lock. You will get your own personal code in your booking confirmation. Main building door first, then your apartment door (the middle of three doors inside). No physical key, no key handoff required.",
      },
      {
        question: 'Is there fast WiFi for working remotely?',
        answer:
          "Yes, 300 Mbps WiFi throughout the apartment. Plenty fast for video calls, streaming, and remote work. There is also a dedicated workspace if you need a real desk.",
      },
      {
        question: 'How does this compare to the other two units?',
        answer:
          "Same building, same 1-minute walk to Wrigley. The Top Floor (Catbird Seat) is the highest and brightest at 900 sqft. The Garden Level (Slugger's Suite) is the closest to street level. This First Floor unit is the most-reviewed of the three (4.68 stars across 117 stays), has the classic raised first-floor feel, and got new floors in 2022. 780 sqft. All three units allow pets.",
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
  {
    slug: 'catbird-seat',
    heroHeadline: '1-minute walk to Wrigley. Top floor. Corner-lot bay windows.',
    heroSubhead:
      'Our 2-bedroom top-floor apartment in Wrigleyville. Sleeps 5, 900 sqft, 10-foot ceilings, Walk Score 98. The Red Line is literally next door.',
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
      'Pet owners',
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
          'Pets welcome (message us first)',
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
          "About a 1-minute walk. We're in Wrigleyville, one block from the bleacher entrance. You can see the crowd streaming toward the stadium from the living room and dining room windows.",
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
      {
        question: 'Are pets allowed?',
        answer:
          "Yes, pets are welcome. We ask you to message us about your specific pet before booking so we can confirm fit. Assistance animals are always allowed.",
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
