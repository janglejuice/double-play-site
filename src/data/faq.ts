export type FAQItem = {
  question: string
  answer: string
  category: 'Booking' | 'Check-In' | 'The Apartments' | 'House Rules' | 'Location & Transit' | 'Game Day'
  link?: { text: string; url: string }
}

export const faqItems: FAQItem[] = [
  // ─── BOOKING ────────────────────────────────────────────────────────────────
  {
    question: 'What is the minimum stay?',
    answer: 'The minimum stay is 2 nights. During peak Cubs weekends, major concerts, and holiday periods, a 3-night minimum may apply. Check availability for your specific dates.',
    category: 'Booking',
  },
  {
    question: 'Is there a minimum age to book?',
    answer: 'Yes. The guest who books and checks in must be at least 20 years old, and the booking guest needs to be staying in the apartment for the duration of the reservation. This helps us keep the building calm for our permanent neighbors.',
    category: 'Booking',
  },
  {
    question: 'Can I book all three apartments for a large group?',
    answer: 'Yes. With all three units booked together, the building sleeps up to 13 across three private apartments on three separate floors. Message us directly to coordinate pricing, staggered check-in times, and to make sure the full group has a seamless experience.',
    category: 'Booking',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Full refund if cancelled more than 7 days before check-in. 50% refund if cancelled 3 to 7 days before. No refund within 3 days of check-in. For concert and postseason bookings, we recommend travel insurance.',
    category: 'Booking',
  },
  {
    question: 'Do you offer weekday or extended-stay discounts?',
    answer: 'Weekday rates are generally lower than weekend rates, especially outside Cubs season. Off-season rates (roughly October through March) are also reduced. Message us with your dates and we can see what works.',
    category: 'Booking',
  },
  {
    question: 'What happens if a Cubs game is postponed or cancelled?',
    answer: 'Cubs games are rarely cancelled outright. If a game is postponed due to weather, reach out and we will do our best to work with you on rescheduling. Game postponements do not automatically trigger a refund, but we are fair hosts and will work with you on a case-by-case basis.',
    category: 'Booking',
  },
  {
    question: 'Why should I book direct instead of Airbnb or VRBO?',
    answer: 'When you book direct, you skip the platform service fees (typically 15 to 20% of your total on Airbnb or VRBO) and communicate directly with us. Same property, same host, no middleman cut. We also have more flexibility on special requests when you come to us directly.',
    category: 'Booking',
  },
  {
    question: 'Do you accommodate bachelor or bachelorette groups?',
    answer: 'We welcome celebrations. We just ask that you keep noise below quiet-hour thresholds, be respectful of permanent building neighbors, and understand that parties and large gatherings are not permitted. If you are planning something low-key, message us in advance so we can give you tips for having a great time without issues.',
    category: 'Booking',
  },

  // ─── CHECK-IN ───────────────────────────────────────────────────────────────
  {
    question: 'What time is check-in?',
    answer: 'Check-in is after 4:00 PM. Please respect this window so we have adequate time to properly prepare the apartment for you.',
    category: 'Check-In',
  },
  {
    question: 'What time is check-out?',
    answer: 'Check-out is at 11:00 AM.',
    category: 'Check-In',
  },
  {
    question: 'Is early check-in available?',
    answer: 'Generally not. Our apartments are larger than typical hotel rooms, and thorough cleaning and preparation takes time after a checkout. We would not want you arriving to a space that is not fully ready — clean bedding, fresh towels, and everything in order is non-negotiable for us. If you have a specific situation, message us well in advance and we will see what is possible, but please do not count on it.',
    category: 'Check-In',
  },
  {
    question: 'Is late check-out available?',
    answer: 'Late check-out is generally not available. We need that time to prepare the apartment for the next arrival. We are happy to store your luggage at the property after check-out so you can enjoy the neighborhood, catch a game, or explore the city before your departure.',
    category: 'Check-In',
  },
  {
    question: 'How does self check-in work?',
    answer: 'Fully self check-in via a smart keypad lock. You will receive your personal access code 2 to 3 days before arrival. No physical key, no lockbox, no key handoff, no waiting around. Your code is unique to your booking and will be deactivated at check-out.',
    category: 'Check-In',
  },
  {
    question: 'How do I find the property?',
    answer: 'The building is at the corner of Wilton Avenue and Addison Street, directly across from Wrigley Field in the heart of Wrigleyville. The Addison Red Line station is across the street. Once inside the building, look for three apartment doors. Your code works on your specific apartment door. Your unit number is in your booking confirmation.',
    category: 'Check-In',
  },
  {
    question: 'Where do I pick up the parking pass?',
    answer: 'The residential street parking pass is located in a small box on the window sill near the main stairwell inside the building. You can retrieve it using the same keypad code as your apartment. One pass is included per night of stay.',
    category: 'Check-In',
  },
  {
    question: 'What should I do before checking out?',
    answer: 'Tidy up, collect all dirty dishes, and leave the apartment in a reasonably clean condition. You do not need to take out trash — we handle that. Just make sure all personal belongings are packed and the apartment is left as you found it. Check-out is at 11:00 AM.',
    category: 'Check-In',
  },
  {
    question: 'What if my access code does not work?',
    answer: 'Contact us immediately by text. We are available and responsive, and will resolve it quickly. Make sure you are at the correct apartment door for your unit (the unit number is in your booking confirmation). If you arrive before 11:00 AM, the previous guest may still be checking out — please wait.',
    category: 'Check-In',
  },

  // ─── THE APARTMENTS ─────────────────────────────────────────────────────────
  {
    question: 'What are the three apartments?',
    answer: 'The Ivy (Garden Level, half-basement, 850 sqft, sleeps 4), The Addison (First Floor, middle apartment, 850 sqft, sleeps 5), and The Marquee (Top Floor, 900 sqft, sleeps 5). All three are 2-bedroom, 1-bathroom apartments in the same building on Wilton Avenue, directly across from Wrigley Field.',
    category: 'The Apartments',
  },
  {
    question: 'How many stairs are there to each unit?',
    answer: 'The Ivy (Garden Level): 12 steps up to the front porch, then 15 steps down to the half-basement unit. The Addison (First Floor): approximately 12 steps up from the sidewalk. The Marquee (Top Floor): two flights of stairs. There is no elevator in the building.',
    category: 'The Apartments',
  },
  {
    question: 'Is there air conditioning?',
    answer: 'Yes. All three units have central air conditioning and central heat. Not window units — actual central systems.',
    category: 'The Apartments',
  },
  {
    question: 'Are the bedrooms quiet?',
    answer: 'All bedrooms in all three units have double-pane windows specifically for noise reduction. The neighborhood gets lively on game days and concert nights, but the bedrooms handle it well. Guests who are very sensitive to noise generally do fine; if you are extremely light-sleepers, non-game-day trips may suit you better.',
    category: 'The Apartments',
  },
  {
    question: 'What is included in each apartment?',
    answer: 'Full kitchen with stove, oven, dishwasher, coffee maker, cookware, dishes, and cooking basics. Smart TV with live TV and streaming. 300 Mbps WiFi. Central A/C and heat. Hair dryer, shampoo, conditioner, and body wash. Iron. Bed linens, towels, extra pillows and blankets. Keypad self check-in.',
    category: 'The Apartments',
  },
  {
    question: 'Does the building have laundry?',
    answer: 'The Marquee (top floor) has access to in-building washer and dryer. The Ivy and The Addison do not have laundry access.',
    category: 'The Apartments',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Yes, all three units welcome pets. A pet fee applies and varies by stay length and pet. Please message us before booking with your pet details (size, breed, number) so we can confirm fit and share the exact fee. Only pets listed in the booking are permitted.',
    category: 'The Apartments',
  },
  {
    question: 'Do you provide cribs or pack-and-plays?',
    answer: 'Yes, we can provide a travel crib or pack-and-play for families with infants or toddlers. Request it at booking time and we will have it ready on arrival.',
    category: 'The Apartments',
  },

  // ─── HOUSE RULES ─────────────────────────────────────────────────────────────
  {
    question: 'Are parties or large gatherings allowed?',
    answer: 'No. Absolutely no parties, birthday parties, events, or large social gatherings of any kind. This is a residential building with permanent neighbors. Violations result in immediate access code revocation with no refund.',
    category: 'House Rules',
  },
  {
    question: 'Are decorations allowed?',
    answer: 'No decorations of any kind: no balloons, no confetti, no glitter, no streamers, no birthday or event decorations, and no temporary decorations of any type. These items are difficult to fully clean and can permanently damage surfaces.',
    category: 'House Rules',
  },
  {
    question: 'Is smoking allowed?',
    answer: 'No smoking anywhere inside the building. This applies to all three units and all common areas. No exceptions.',
    category: 'House Rules',
  },
  {
    question: 'Is there a shoe policy?',
    answer: 'Please remove shoes when entering the apartment. This is a firm rule we ask all guests to respect.',
    category: 'House Rules',
  },
  {
    question: 'Can I have additional guests visit beyond the booking count?',
    answer: 'No guests beyond the number listed in your booking are permitted inside the unit, including daytime visitors not listed in the reservation. If your plans change, contact us before arrival for approval. Unannounced additional guests are a violation.',
    category: 'House Rules',
  },
  {
    question: 'What is the NoiseAware device?',
    answer: 'Our apartments are equipped with NoiseAware, a sound-level monitoring device. It detects decibel levels only. It does not record audio, capture conversations, or listen to guests in any way. It alerts us if noise exceeds thresholds appropriate for a residential building. It is there to protect the neighbors.',
    category: 'House Rules',
  },
  {
    question: 'What are the quiet hours?',
    answer: 'We ask guests to observe quiet hours after 10:00 PM out of respect for building neighbors and other guests. The building has permanent residents. Loud music, raised voices, and disruptive activity after 10:00 PM are not acceptable.',
    category: 'House Rules',
  },
  {
    question: 'What happens if house rules are violated?',
    answer: 'Access codes will be immediately revoked for violations, and no refund will be issued. This applies to parties, unauthorized guests, undeclared pets, and misrepresentation of the stay. We are fair and reasonable hosts; these rules exist to protect neighbors and the building, not to restrict a normal, enjoyable stay.',
    category: 'House Rules',
  },

  // ─── LOCATION & TRANSIT ────────────────────────────────────────────────────
  {
    question: 'Where exactly is the property?',
    answer: 'The building sits at the corner of Wilton Avenue and Addison Street in the heart of Wrigleyville, directly across from Wrigley Field. The Addison Red Line station (CTA Red Line) is across the street. Walk Score 98. Exact unit address and apartment number are shared in your booking confirmation.',
    category: 'Location & Transit',
  },
  {
    question: 'Is parking available near the property?',
    answer: 'One free residential street parking pass is included per night (not 100% guaranteed since it is street parking). For additional vehicles, SpotHero is the easiest way to reserve a spot in advance. There is also parking available behind the building. On game days and concert nights, street parking fills quickly — we strongly recommend using the Red Line instead.',
    category: 'Location & Transit',
  },
  {
    question: 'Do I need a car in Wrigleyville?',
    answer: 'No, and we actively recommend skipping the rental car. The Addison Red Line runs 24/7 directly across the street. Walk Score is 98. A Divvy bike-share station is at the front door. The Red Line gets you to downtown Chicago in 15 to 20 minutes, and both airports are reachable by CTA. You can reach virtually everything on foot, bike, or transit.',
    category: 'Location & Transit',
  },
  {
    question: 'How do I get here from O\'Hare or Midway airport?',
    answer: 'From O\'Hare: take the Blue Line to Lake/State, transfer to the Red Line northbound, exit at Addison — about 60 minutes total. From Midway: take the Orange Line to Roosevelt, transfer to the Red Line northbound, exit at Addison — about 50 minutes total. Rideshare runs roughly $40 to 60 from O\'Hare and $30 to 45 from Midway depending on traffic.',
    category: 'Location & Transit',
  },
  {
    question: 'What everyday amenities are within walking distance?',
    answer: 'Whole Foods, Starbucks, Chipotle, McDonald\'s, Subway, and 7-Eleven are all within a short walk. For restaurants: Murphy\'s Bleachers, The Cubby Bear, Big Star Wrigleyville, Mordecai at Hotel Zachary, Mia Francesca, and dozens of bars on the Clark and Addison corridor. Wrigleyville Dogs and Jimmy\'s Pizza Café stay open late.',
    category: 'Location & Transit',
  },
  {
    question: 'How far is Lake Michigan and the Lakefront Trail?',
    answer: 'Belmont Harbor and the Lakefront Trail are about a 15-minute walk east on Addison. The trail runs 18 miles along Lake Michigan — flat, car-free, and one of Chicago\'s best features. The Divvy bike-share station at the front door makes the ride even faster.',
    category: 'Location & Transit',
  },
  {
    question: 'How do I get to downtown Chicago from Wrigleyville?',
    answer: 'Take the Red Line from the Addison station, which is directly across the street. The ride to the Loop takes about 15 to 20 minutes. From downtown you can walk to Millennium Park, The Bean, the Riverwalk, the Art Institute, and the Magnificent Mile.',
    category: 'Location & Transit',
  },

  // ─── GAME DAY ───────────────────────────────────────────────────────────────
  {
    question: 'How close is the apartment to the Wrigley Field entrance?',
    answer: 'About a 30-second to 1-minute walk from the front door. The building is directly across Wilton Avenue from Wrigley Field. You step outside, cross the street, and you are at the bleacher entrance.',
    category: 'Game Day',
  },
  {
    question: 'What time should we arrive on a game day?',
    answer: 'Arrive early if you can. Crowds and bar lines build fast from two to three hours before first pitch. Getting to the apartment by 1 to 2 PM on a day game lets you settle in, grab food, and soak up the neighborhood energy before heading to the stadium.',
    category: 'Game Day',
  },
  {
    question: 'How loud is it during games and concerts?',
    answer: 'Lively is the right word. Wrigleyville fills with fans, bars spill onto the street, and you can hear the crowd roar during big moments. Inside the apartment with windows closed and in the soundproofed bedrooms, it is manageable for most people. If you are extremely sensitive to noise, a non-game-day visit might suit you better.',
    category: 'Game Day',
  },
  {
    question: 'Which unit is best for a Cubs game weekend?',
    answer: 'All three are equally close to the stadium — about 30 seconds from any unit to the bleacher entrance. For neighborhood views and the most light, The Marquee is the flagship choice. For great value and the quietest bedrooms, The Ivy is the pick. For the classic first-floor feel and our most-reviewed, most-booked unit, The Addison.',
    category: 'Game Day',
  },
  {
    question: 'Do you host guests for Wrigley concerts and non-baseball events?',
    answer: 'Absolutely. Wrigley Field hosts major concerts, special outdoor games, and events throughout the year. The setup is the same as a baseball weekend: walk out the front door, cross the street, walk home when it\'s over. No rideshare, no parking, no stress.',
    category: 'Game Day',
  },
  {
    question: 'Can I store my luggage on check-out day if there is a game that evening?',
    answer: 'We are not able to store luggage at the property. Right next door, Bounce luggage storage starts at $4.25 per day. It is one of the cheapest and most convenient options in the neighborhood. Book a spot in advance at the link below.',
    link: { text: 'Book Bounce luggage storage', url: 'https://bounce.com/stores/chicago/Rg7rjp' },
    category: 'Game Day',
  },
]
