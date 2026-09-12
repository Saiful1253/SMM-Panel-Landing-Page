import ScrollReveal from '../components/ScrollReveal'

const stats = [
  {
    image: '/order.png',
    number: '321,879',
    label: 'Order Processed',
  },
  {
    image: '/cloud.png',
    number: '6,245',
    label: 'Available Services',
  },
  {
    image: '/people.png',
    number: '8,552',
    label: 'Registered User',
  },
  {
    image: '/trophy.png',
    number: '#1',
    label: 'Regional Rank',
  },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <ScrollReveal className="reveal">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} className="reveal-scale" delay={`reveal-delay-${index + 1}`}>
              <div className="stat-card">
                <img src={stat.image} alt={stat.label} className="stat-icon" loading="lazy" decoding="async" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
