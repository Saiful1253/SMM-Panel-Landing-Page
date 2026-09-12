import ScrollReveal from '../components/ScrollReveal'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-map-bg">🌍</div>
      <div className="cta-content">
        <ScrollReveal className="reveal-left">
          <div className="cta-text">
            <h2 className="cta-title">
              Ready to Grow Your Social <br />
              Media <span className="highlight">in Bangladesh?</span>
            </h2>
            <p className="cta-desc">
              Join over 68,000 users who are already using SMM to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 60 seconds.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-outline">See All Services</button>
              <button className="btn btn-primary">Create Free Account</button>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal className="reveal-right" delay="reveal-delay-1">
          <div className="cta-image">
            <img src="/people.png" alt="Grow with us" className="cta-img" loading="lazy" decoding="async" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
