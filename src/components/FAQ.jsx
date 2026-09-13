import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Is buying followers legal in Bangladesh?',
      answer: 'Yes, buying followers or likes is not illegal in Bangladesh. It\'s considered a marketing strategy to improve social proof. Just make sure you don\'t violate any platform rules, and your account stays safe.',
      isOpen: true,
    },
    {
      question: 'What if service is not delivered?',
      answer: 'If your service is not delivered within the promised timeframe, please contact our support team. We offer a full refund or free replacement for any undelivered orders.',
      isOpen: false,
    },
    {
      question: 'Is Drip feed safer?',
      answer: 'Yes, Drip feed is much safer than bulk delivery. It spreads likes, views, or followers over a period of time, making the growth look natural and avoiding algorithm detection.',
      isOpen: false,
    },
    {
      question: 'Can agencies resell services?',
      answer: 'Yes, agencies can resell our services. We offer special bulk pricing and API access for agencies and resellers. Contact us for partnership opportunities.',
      isOpen: false,
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times vary by service. Most orders start within 1-2 hours and complete within 24-48 hours. You can check estimated delivery time on each service page.',
      isOpen: false,
    },
    {
      question: 'Which platform is best for business in BD?',
      answer: 'For businesses in Bangladesh, Facebook and Instagram are the most effective platforms. Facebook has the largest user base, while Instagram is great for visual brands and younger audiences.',
      isOpen: false,
    },
    {
      question: 'Can I order daily?',
      answer: 'Yes, you can place orders daily. We recommend spacing out orders for organic-looking growth, but there\'s no limit to how often you can order.',
      isOpen: false,
    },
    {
      question: 'Will engagement drop?',
      answer: 'Our real-user services maintain engagement over time. Unlike bot services, real followers stay engaged. We also offer retention guarantees on most services.',
      isOpen: false,
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle(index)
    }
  }

  return (
    <section className="faq-section" id="faq-section">
      <ScrollReveal className="reveal">
        <div className="section-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="section-description">
            Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
          </p>
        </div>
      </ScrollReveal>

      <div className="faq-grid">
        <ScrollReveal className="reveal" delay="reveal-delay-1">
          <div className="faq-left">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-arrow" aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
                  </div>
                  {isOpen && (
                    <div className="faq-answer" id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </ScrollReveal>
        <ScrollReveal className="reveal" delay="reveal-delay-1">
          <div className="faq-right">
            <div className="faq-image-placeholder" aria-hidden="true">👩‍💼</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
