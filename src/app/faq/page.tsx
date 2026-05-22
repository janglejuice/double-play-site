import { faqItems } from '@/data/faq'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata = {
  title: 'FAQ — Double Play Wrigleyville',
  description: 'Answers to common questions about staying at Double Play.',
}

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">Got Questions</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">FAQ</h1>
      <div>
        {faqItems.map((item, i) => <FAQAccordion key={i} item={item} />)}
      </div>
    </div>
  )
}
