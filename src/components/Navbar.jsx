import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  const sections = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services-section', label: 'Services', href: '#services-section' },
    { id: 'growth-section', label: 'Blog', href: '#growth-section' },
    { id: 'advantages-section', label: 'About Us', href: '#advantages-section' },
    { id: 'faq-section', label: 'API', href: '#faq-section' },
    { id: 'contact-section', label: 'Contact Us', href: '#contact-section' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          )
          setActiveSection(mostVisible.target.id)
        }
      },
      {
        rootMargin: '-120px 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href, sectionId) => {
    setActiveSection(sectionId)
    setMenuOpen(false)

    if (sectionId === 'home') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const target = document.getElementById(sectionId)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav className="navbar" ref={navbarRef}>
      <a href="/" className="logo" onClick={(e) => handleClick(e, '/', 'home')}>LOGO</a>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {sections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            className={activeSection === section.id ? 'active' : ''}
            onClick={(e) => handleClick(e, section.href, section.id)}
          >
            {section.label}
          </a>
        ))}
      </div>

      <div className={`nav-buttons ${menuOpen ? 'mobile-visible' : ''}`}>
        <button className="btn btn-outline" onClick={() => setMenuOpen(false)}>Sign In</button>
        <button className="btn btn-primary" onClick={() => setMenuOpen(false)}>Sign Up</button>
      </div>

      <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen(prev => !prev)}>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
      </button>
    </nav>
  )
}
