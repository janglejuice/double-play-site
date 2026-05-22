export type FAQItem = {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available — message us in advance.',
  },
  {
    question: 'Is parking available near the property?',
    answer: 'Street parking in Wrigleyville is very limited on game days. We recommend using the Addison Red Line station (3 min walk) or booking a spot at one of the nearby parking garages in advance.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Full refund if cancelled more than 7 days before check-in. 50% refund if cancelled 3–7 days before. No refund within 3 days of check-in.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Sorry, no pets.',
  },
  {
    question: 'How do I check in?',
    answer: "All three units have self check-in via a keypad lock. You'll receive the access code in your booking confirmation and a reminder message before arrival.",
  },
  {
    question: 'Is there a noise policy?',
    answer: 'We ask guests to keep noise levels down after 10 PM out of respect for neighbors. This is a residential building.',
  },
  {
    question: 'What is the minimum stay?',
    answer: 'The minimum stay is 2 nights. During peak Cubs weekends and special events, a 3-night minimum may apply.',
  },
  {
    question: 'Can I book more than one unit?',
    answer: 'Yes — if you have a larger group, you can book multiple units. Contact us directly for group bookings.',
  },
]
