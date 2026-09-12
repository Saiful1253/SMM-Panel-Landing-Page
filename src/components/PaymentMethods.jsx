import ScrollReveal from '../components/ScrollReveal'

export default function PaymentMethods() {
  return (
    <section className="payment-section">
      <ScrollReveal className="reveal">
        <div className="section-header">
          <div className="section-label">Payment Methods</div>
          <h2 className="section-title">
            Multiple Payment <span className="highlight">Methods</span>
          </h2>
          <p className="section-description">
            We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and more, so you are never stuck at checkout. Deposits are instant, and you can start with as little as $1, which means there is no reason to wait before placing your first order.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="reveal-scale" delay="reveal-delay-1">
        <div className="payment-visual">
          <div className="world-map">
            <div className="map-placeholder">🌍</div>
          </div>
          <div className="payment-arc">
            {[
              { label: 'VISA', color: '#1a1f71' },
              { label: 'SEPA', color: '#004485' },
              { label: 'G Pay', color: '#4285f4' },
              { label: 'PayPal', color: '#003087' },
              { label: 'Mastercard', color: '#eb001b' },
              { label: 'Apple Pay', color: '#000' },
            ].map((method, index) => (
              <div key={index} className="payment-icon-circle" style={{ borderColor: method.color }}>
                <span className="payment-icon-label" style={{ color: method.color }}>{method.label}</span>
              </div>
            ))}
          </div>
          <div className="payment-watermark">MULTIPLE PAYMENTS</div>
        </div>
      </ScrollReveal>
    </section>
  )
}
