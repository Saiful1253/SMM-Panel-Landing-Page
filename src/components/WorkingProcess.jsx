import ScrollReveal from '../components/ScrollReveal'

export default function WorkingProcess() {
  const steps = [
    {
      num: '01',
      title: 'Create Account',
      desc: 'Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.',
    },
    {
      num: '02',
      title: 'Add Funds',
      desc: 'Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.',
    },
    {
      num: '03',
      title: 'Select Service',
      desc: 'Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.',
    },
    {
      num: '04',
      title: 'Place your order',
      desc: 'Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.',
    },
  ]

  return (
    <section className="working-process-section">
      <ScrollReveal className="reveal">
        <div className="section-header">
          <div className="section-label">WORKING PROCESS</div>
          <h2 className="section-title">Grow Your <span className="highlight">Socials</span> in <span className="highlight">4</span> Simple Steps</h2>
          <p className="section-description">
            A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="reveal" delay="reveal-delay-1">
        <div className="steps-container">
          <div className="steps-circle">
            <div className="circle-center">K</div>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <ScrollReveal key={index} className="reveal" delay={`reveal-delay-${index + 1}`}>
                <div className="step-card">
                  <div className="step-number">{step.num}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                  <div className="step-dots step-dots-top-left"></div>
                  <div className="step-dots step-dots-bottom-right"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
