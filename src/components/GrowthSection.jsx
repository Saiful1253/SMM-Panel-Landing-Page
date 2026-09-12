import ScrollReveal from '../components/ScrollReveal'

export default function GrowthSection() {
  const timelines = [
    {
      period: 'Weeks 1-2',
      steps: [
        { title: 'What You Do', desc: 'Use SMM services to build initial followers and engagement' },
        { title: 'Why it Works', desc: 'Creates baseline credibility and improves first impression' },
        { title: 'Estimated Cost/Time', desc: '৳2,000-5,000' },
      ],
    },
    {
      period: 'Weeks 3-4',
      steps: [
        { title: 'What You Do', desc: 'Start posting consistent, high-quality content' },
        { title: 'Why it Works', desc: 'Larger follower base increases organic engagement' },
        { title: 'Estimated Cost/Time', desc: 'Mostly content effort' },
      ],
    },
    {
      period: 'Months 2-3',
      steps: [
        { title: 'What You Do', desc: 'Continue content + light support if needed' },
        { title: 'Why it Works', desc: 'Faster reach, better algorithm response' },
        { title: 'Estimated Cost/Time', desc: 'Reduced SMM usage' },
      ],
    },
    {
      period: 'Months 3-6',
      steps: [
        { title: 'What You Do', desc: 'Focus mainly on organic growth' },
        { title: 'Why it Works', desc: 'Strong engagement pushes content naturally' },
        { title: 'Estimated Cost/Time', desc: 'Minimal or no SMM needed' },
      ],
    },
  ]

  return (
    <section className="growth-section" id="growth-section">
      <ScrollReveal className="reveal">
        <div className="section-header">
          <div className="section-label">GROWTH</div>
          <h2 className="section-title">
            Growing on Social Media in <span className="highlight">Bangladesh</span>
          </h2>
          <p className="section-description">
            The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning for momentum, then let organic growth take over.
          </p>
        </div>
      </ScrollReveal>

      <div className="timeline-grid">
        {timelines.map((timeline, index) => (
          <ScrollReveal key={index} className="reveal" delay={`reveal-delay-${index + 1}`}>
            <div className="timeline-card">
              <div className="timeline-header">{timeline.period}</div>
              <div className="timeline-steps">
                {timeline.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="timeline-step">
                    <div className="step-indicator">{stepIndex + 1}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
