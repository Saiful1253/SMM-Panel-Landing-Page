import ScrollReveal from '../components/ScrollReveal'

export default function Advantages() {
  const advantages = [
    {
      icon: '🔒',
      title: 'We Never Ask for Your Password',
      desc: 'You give us your username or profile link. That\'s it. We can\'t access your account. When you buy followers from us, we\'re accessing your public profile. The same profile millions of people can already see.',
      link: 'Zero security risk.',
    },
    {
      icon: '🤖',
      title: 'We Use Real Users, Not Bots',
      desc: 'This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That\'s when bans happen.',
    },
    {
      icon: '📈',
      title: 'We Deliver Gradually',
      desc: 'Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.',
    },
    {
      icon: '🏆',
      title: 'Our Track Record',
      desc: '321,879 completed orders. Not a single customer has reported an account ban caused by our services. That\'s not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.',
    },
  ]

  return (
    <section className="advantages-section" id="advantages-section">
      <ScrollReveal className="reveal">
        <div className="section-header">
          <div className="section-label">ADVANTAGES</div>
          <h2 className="section-title">
            Advantages of using <span className="highlight">our panel services</span>
          </h2>
          <p className="section-description">
            Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
          </p>
        </div>
      </ScrollReveal>

      <div className="advantages-grid">
        {advantages.map((item, index) => (
          <ScrollReveal key={index} className="reveal" delay={`reveal-delay-${index + 1}`}>
            <div className="advantage-card">
              <div className="advantage-icon">{item.icon}</div>
              <h3 className="advantage-title">{item.title}</h3>
              <p className="advantage-desc">{item.desc}</p>
              {item.link && <a href="#" className="advantage-link">{item.link}</a>}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
