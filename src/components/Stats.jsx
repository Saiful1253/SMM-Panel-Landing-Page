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
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <img src={stat.image} alt={stat.label} className="stat-icon" loading="lazy" decoding="async" />
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
