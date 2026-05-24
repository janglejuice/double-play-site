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
    slug: 'field-view-loft',
    heroHeadline: 'Top-floor loft with panoramic views of Wrigley Field and the Chicago skyline',
    heroSubhead: 'Two bedrooms, one bath, sleeps four. The best vantage point of all three units.',
    whatYouLove: [
      {
        title: 'Panoramic Field and Skyline Views',
        body: 'From the third floor, you see the entire ballpark, the Chicago skyline, and the neighborhoods stretching north. It\'s not just a view—it\'s a vista. Every window opens onto the city.',
      },
      {
        title: 'Top-Floor Quiet and Privacy',
        body: 'Higher means quieter. You\'re above most of the street noise, above the ground-level hustle. Game days are festive, not overwhelming. A peaceful retreat after a long day downtown.',
      },
      {
        title: 'Natural Light and Air',
        body: 'Top-floor apartments catch light and breeze that lower floors miss. The space feels bigger, brighter, more open. It\'s not just windows—it\'s atmosphere.',
      },
      {
        title: 'Premium Experience, Fair Price',
        body: 'You\'re paying a bit more than the Bleacher Flat but less than the average Chicago hotel. The panoramic view justifies it. This is where memories happen.',
      },
    ],
    idealFor: [
      'Couples wanting premium experience',
      'Skyline photography enthusiasts',
      'Sunset and skyline lovers',
      'Quiet game-day seekers',
      'Instagram-worthy moments',
      'Special occasions and romantic getaways',
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
          'Master bedroom: queen bed with skyline views',
          'Guest bedroom: queen bed',
          'Washer and dryer in unit',
          'Fresh linens and premium towels',
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
          'Floor-to-ceiling windows',
        ],
      },
      {
        category: 'Building & Access',
        items: [
          'Self check-in (keypad code)',
          'Elevator access to third floor',
          'Panoramic windows throughout',
          'Premium finishes and aesthetic',
        ],
      },
    ],
    floorPlan:
      'The third floor opens into an expansive living room with floor-to-ceiling windows framing the field and skyline. The kitchen flows seamlessly from the living space. Two bedrooms—the master with its own skyline view, the guest bedroom with equal comfort. Washer and dryer tucked near the kitchen, guest bath off the main space, ensuite in the master.',
    versusOthers:
      'The Field View Loft is the premium option. You get more space, more light, more view, and more quiet than either the Slugger\'s or the Bleacher Flat. It\'s the same two-bedroom layout, but the third-floor elevation and panoramic windows make it feel like a different class of experience.',
    unitFAQ: [
      {
        question: 'What exactly can you see from the windows?',
        answer:
          'The entire Wrigley Field ballpark is visible. The field, scoreboard, bleachers. Beyond that, the Chicago skyline stretches north and west. On clear days, you can see the John Hancock Building and beyond. It\'s genuinely panoramic.',
      },
      {
        question: 'Is it quieter than the other units?',
        answer:
          'Yes, noticeably quieter. You\'re above street level and away from the ground-floor energy. Game days are festive, not chaotic. You catch the atmosphere without the constant foot traffic and noise.',
      },
      {
        question: 'Is the third floor accessible?',
        answer:
          'Yes, there\'s an elevator in the building. It\'s an easy ride up. Once you\'re in the loft, everything is one floor, no stairs to navigate within the unit.',
      },
      {
        question: 'How big is this unit compared to the others?',
        answer:
          'Same two-bedroom, one-bath layout as the Slugger\'s Suite and Bleacher Flat. What\'s different is the ceiling height, the number and size of windows, and the light. It feels bigger because of the vista.',
      },
      {
        question: 'Can we cook and do laundry?',
        answer:
          'Full kitchen with everything you need to cook. Washer and dryer in unit. Same comfort level as the other apartments, just a better view and quieter experience.',
      },
      {
        question: 'Is this good for game-day parties?',
        answer:
          'It works for both: intimate gatherings with a skyline backdrop, or group celebrations with the best view in the building. The three-floor elevation means your party doesn\'t disturb neighbors below, and you\'re not overwhelmed by street-level chaos.',
      },
    ],
    localProximity: [
      { name: 'Wrigley Field', time: '1 min walk' },
      { name: 'Murphy\'s Bleachers', time: '2 min walk' },
      { name: 'Gallagher Way (food & drinks)', time: '1 min walk' },
      { name: 'Cubby Bear (bar)', time: '2 min walk' },
      { name: 'Addison Red Line station', time: '3 min walk' },
      { name: 'Mariano\'s grocery store', time: '5 min walk' },
      { name: 'Lake Michigan shoreline', time: '12 min walk' },
      { name: 'Downtown Chicago', time: '15 min drive' },
    ],
  },
]

export function getUnitDetail(slug: string): UnitDetail | undefined {
  return unitDetails.find(u => u.slug === slug)
}
