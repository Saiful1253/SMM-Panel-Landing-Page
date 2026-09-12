import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const isScrollingProgrammatically = useRef(false)

  const sections = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services-section', label: 'Services', href: '#services-section' },
    { id: 'growth-section', label: 'Blog', href: '#growth-section' },
    { id: 'advantages-section', label: 'About Us', href: '#advantages-section' },
    { id: 'faq-section', label: 'API', href: '#faq-section' },
    { id: 'contact-section', label: 'Contact Us', href: '#contact-section' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return

      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href, sectionId) => {
    setActiveSection(sectionId)
    setMenuOpen(false)

    if (sectionId === 'home') {
      e.preventDefault()
      isScrollingProgrammatically.current = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => {
        isScrollingProgrammatically.current = false
      }, 800)
    } else {
      const target = document.getElementById(sectionId)
      if (target) {
        e.preventDefault()
        isScrollingProgrammatically.current = true
        target.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          isScrollingProgrammatically.current = false
        }, 800)
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
