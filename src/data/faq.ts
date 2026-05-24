export type FAQItem = {
  question: string
  answer: string
  category: 'Booking' | 'Check-in' | 'The Apartments' | 'Groups & Stays' | 'Local & Logistics' | 'Game Day'
}

export const faqItems: FAQItem[] = [
  // Booking
  {
    question: 'What is the minimum stay?',
    answer: 'The minimum stay is 2 nights. During peak Cubs weekends and special events, a 3-night minimum may apply.',
    category: 'Booking',
  },
  {
    question: 'Can I book all 3 apartments for a group?',
    answer: "Absolutely. Whether you're bringing 20 friends for a weekend or need all three units for a family reunion, we can make it work. Just contact us directly and we'll coordinate pricing, check-in logistics, and make sure everyone has a great time.",
    category: 'Booking',
  },
  {
    question: 'Do you offer discounts for weekday stays?',
    answer: 'We do offer special pricing on weekday bookings, especially outside Cubs season. During the off-season, rates are lower anyway. Message us about your dates and we can see what we can do.',
    category: 'Booking',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Full refund if cancelled more than 7 days before check-in. 50% refund if cancelled 3–7 days before. No refund within 3 days of check-in.',
    category: 'Booking',
  },
  {
    question: 'Can I get a refund if a Cubs game is cancelled?',
    answer: "Cubs games are rarely cancelled, but if one is postponed due to weather or other unforeseen circumstances, we can work with you on rescheduling or a partial refund. Get in touch and we'll figure it out together.",
    category: 'Booking',
  },

  // Check-in
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available — message us in advance.',
    category: 'Check-in',
  },
  {
    question: 'How do I check in?',
    answer: "All three units have self check-in via a keypad lock. You'll receive the access code in your booking confirmation and a reminder message before arrival.",
    category: 'Check-in',
  },
  {
    question: 'Is early check-in available?',
    answer: "Early check-in is often available depending on the time and what's happening at the property. We recommend requesting it at least 24 hours in advance. If you're arriving early on a game day, let us know and we'll do our best to accommodate you.",
    category: 'Check-in',
  },
  {
    question: 'Do you have luggage storage on game days?',
    answer: "Yes. If you're checking out in the morning but want to stay longer on game day, we can store your bags. Just let us know and we'll keep them safe at the apartment or building lobby until after the game.",
    category: 'Check-in',
  },

  // The Apartments
  {
    question: 'Is there a noise policy?',
    answer: 'We ask guests to keep noise levels down after 10 PM out of respect for neighbors. This is a residential building.',
    category: 'The Apartments',
  },
  {
    question: 'Is there elevator access?',
    answer: 'The building has an elevator, so no need to worry about climbing stairs with luggage. All three units are accessible by elevator.',
    category: 'The Apartments',
  },
  {
    question: 'Are the apartments wheelchair accessible?',
    answer: "One of our units has wheelchair accessibility with a ground-floor layout and accessible bathroom features. Contact us for details and we can make sure it's the right fit for your needs.",
    category: 'The Apartments',
  },
  {
    question: 'Is there air conditioning?',
    answer: "All three units have central air conditioning. Chicago summers can get hot, especially with a crowd on game day, so you'll be comfortable.",
    category: 'The Apartments',
  },
  {
    question: 'Do you provide travel cribs or pack-and-plays?',
    answer: "Yes, we can provide a travel crib or pack-and-play for families with infants or toddlers. Just request it when you book and we'll have it ready.",
    category: 'The Apartments',
  },
  {
    question: 'Can I receive packages at the apartment?',
    answer: "We can accept small packages if you give us a heads-up in advance. For larger deliveries, coordinate with us so we can make sure someone\\'s available to receive them.",
    category: 'The Apartments',
  },
  {
    question: 'Can I see Wrigley Field from any of the apartments?',
    answer: "Two of our three units have views or partial views of Wrigley Field and the neighborhood. The third is also directly across the street, so you're literally steps away even if the view isn't directly into the stadium.",
    category: 'The Apartments',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Sorry, no pets.',
    category: 'The Apartments',
  },

  // Groups & Stays
  {
    question: 'Can I book more than one unit?',
    answer: 'Yes — if you have a larger group, you can book multiple units. Contact us directly for group bookings.',
    category: 'Groups & Stays',
  },
  {
    question: 'How loud is it on game nights?',
    answer: "It's lively. Wrigleyville fills with fans heading to and from the stadium on game days — you'll hear the energy of the neighborhood. Inside the apartment with windows closed, it's manageable. If you're sensitive to noise, a non-game-day visit might be better for you.",
    category: 'Groups & Stays',
  },
  {
    question: 'Do you allow bachelor/bachelorette parties?',
    answer: "We love celebrations. We just ask that you keep noise reasonable after 10 PM and be respectful of neighbors. If you're planning a big party, let us know in advance so we can give you tips on how to have an amazing time without issues.",
    category: 'Groups & Stays',
  },

  // Local & Logistics
  {
    question: 'Is parking available near the property?',
    answer: 'Street parking in Wrigleyville is very limited on game days. We recommend using the Addison Red Line station (3 min walk) or booking a spot at one of the nearby parking garages in advance.',
    category: 'Local & Logistics',
  },
  {
    question: 'Do you offer airport pickup?',
    answer: "We don't offer airport pickup directly, but we can recommend reliable rideshare options and point you to the easiest transit routes from O'Hare or Midway. The Red Line is quick and inexpensive.",
    category: 'Local & Logistics',
  },
  {
    question: 'Where can I store luggage between check-out and a late flight?',
    answer: 'After you check out, we can store your bags at the apartment until you head to the airport. Just let us know your flight time. Alternatively, there are luggage storage services near the Red Line if you want to explore the neighborhood first.',
    category: 'Local & Logistics',
  },

  // Game Day
  {
    question: 'What is the best apartment for Cubs game weekends?',
    answer: 'All three units are equally close to the stadium, but our units with Wrigley views or partial views give you that extra buzz of the game-day atmosphere. If you want the full experience, ask about these when booking.',
    category: 'Game Day',
  },
  {
    question: 'What is the best apartment for concerts at Wrigley?',
    answer: 'Our units with Wrigley views are perfect for concerts — you might even catch glimpses of the stage or hear the music from the apartment. Any of the three puts you steps away, so you can easily pop back to freshen up between opening acts.',
    category: 'Game Day',
  },
  {
    question: 'What time should we arrive on game day?',
    answer: 'Arrive early if possible. Game-day traffic and crowds build quickly as the afternoon goes on. Getting to the apartment by 1–2 PM gives you time to settle in, grab food, and enjoy the neighborhood vibe before heading to the stadium.',
    category: 'Game Day',
  },
]
