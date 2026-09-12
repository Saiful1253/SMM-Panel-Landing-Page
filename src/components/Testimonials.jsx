import ScrollReveal from '../components/ScrollReveal'

const testimonials = [
  {
    name: 'Rahim Ahmed',
    role: 'Small Business Owner',
    avatar: 'RA',
    rating: '★★★★★',
    text: 'SMM helped me grow my Dhaka-based clothing store from 200 to 12K followers in just 2 months. The delivery was gradual and natural. No bots, no fake accounts. My sales have increased by 3x!',
  },
  {
    name: 'Fatima Khan',
    role: 'Digital Creator',
    avatar: 'FK',
    rating: '★★★★★',
    text: 'I was skeptical at first, but the retention guarantee convinced me. I bought 5K Instagram followers 4 months ago and still have 92% of them. The engagement on my posts has actually improved.',
  },
  {
    name: 'Arif Hasan',
    role: 'Marketing Agency Owner',
    avatar: 'AH',
    rating: '★★★★★',
    text: 'Managing 15 client accounts requires reliable services. This panel has never let me down. The API integration is seamless, and bulk pricing saves me thousands monthly. Highly recommended for agencies.',
  },
  {
    name: 'Nasrin Akter',
    role: 'Restaurant Owner',
    avatar: 'NA',
    rating: '★★★★★',
    text: 'My restaurant in Chittagong was struggling with online visibility. After using their Facebook marketing services, our page went from 500 to 8K followers. Customers now find us easily on social media.',
  },
  {
    name: 'Imran Hossain',
    role: 'YouTube Creator',
    avatar: 'IH',
    rating: '★★★★★',
    text: 'The YouTube views service is legit. My videos started getting organic traction after the initial boost. The algorithm actually favored my content. Monetization approval came 3 weeks earlier than expected.',
  },
  {
    name: 'Taslima Begum',
    role: 'E-commerce Seller',
    avatar: 'TB',
    rating: '★★★★★',
    text: 'Running a Facebook shop requires trust signals. Having real followers and genuine engagement made my shop look established overnight. Orders started flowing in within a week of using their services.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials-section">
      <ScrollReveal className="reveal">
        <div className="section-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">
            What Our <span className="highlight">Clients</span> Say
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what real customers from Bangladesh have to say about our SMM services.
          </p>
        </div>
      </ScrollReveal>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={index} className="reveal" delay={`reveal-delay-${index % 3 + 1}`}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
