import React, { useState, useEffect } from 'react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? 'var(--shadow-lg)' : 'none',
    borderBottom: isScrolled ? '1px solid var(--gray-200)' : 'none'
  }

  const navStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 var(--space-4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px'
  }

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          style={{
            fontSize: '1.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, var(--primary-blue), var(--purple))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          &lt;NH/&gt;
        </button>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: 'var(--space-8)' }} className="hidden md:flex">
          {['Über mich', 'Skills', 'Projekte', 'Kontakt'].map((item, index) => {
            const sectionIds = ['about', 'skills', 'projects', 'contact']
            return (
              <button
                key={item}
                onClick={() => scrollToSection(sectionIds[index])}
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--gray-700)',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'var(--transition)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-blue)'
                  e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-700)'
                  e.currentTarget.style.background = 'none'
                }}
              >
                {item}
              </button>
            )
          })}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="btn btn-primary hidden md:inline-flex"
        >
          Kontakt
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: 'var(--space-2)',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          className="md:hidden"
        >
          <span style={{
            width: '25px',
            height: '3px',
            background: 'var(--gray-700)',
            borderRadius: 'var(--radius-full)',
            transition: 'var(--transition)',
            transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            background: 'var(--gray-700)',
            borderRadius: 'var(--radius-full)',
            transition: 'var(--transition)',
            opacity: isMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            background: 'var(--gray-700)',
            borderRadius: 'var(--radius-full)',
            transition: 'var(--transition)',
            transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
          }}></span>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            margin: 'var(--space-2)',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--gray-200)'
          }} className="md:hidden">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {['Über mich', 'Skills', 'Projekte', 'Kontakt'].map((item, index) => {
                const sectionIds = ['about', 'skills', 'projects', 'contact']
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionIds[index])}
                    style={{
                      padding: 'var(--space-4)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'var(--transition)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)'
                      e.currentTarget.style.color = 'var(--primary-blue)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'none'
                      e.currentTarget.style.color = 'var(--gray-700)'
                    }}
                  >
                    {item}
                  </button>
                )
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-4)', width: '100%' }}
              >
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
