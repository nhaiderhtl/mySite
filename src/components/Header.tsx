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

  const logoStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
    fontWeight: '900',
    color: 'var(--gray-900)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)'
  }

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-8)',
    listStyle: 'none'
  }

  const navLinkStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    color: 'var(--gray-700)',
    transition: 'var(--transition)',
    padding: 'var(--space-2) var(--space-4)',
    borderRadius: 'var(--radius-lg)',
    fontSize: '1rem' // Increased from 0.9rem
  }

  const mobileMenuStyle: React.CSSProperties = {
    display: isMenuOpen ? 'flex' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    flexDirection: 'column',
    padding: 'var(--space-6)',
    boxShadow: 'var(--shadow-xl)',
    borderTop: '1px solid var(--gray-200)'
  }

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          style={logoStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-900)'}
        >
          <span style={{
            background: 'linear-gradient(135deg, var(--primary-blue), var(--purple))',
            padding: 'var(--space-2)',
            borderRadius: 'var(--radius-lg)',
            color: 'white'
          }}>
            NH
          </span>
          Nico Haider
        </button>

        {/* Desktop Navigation */}
        <ul style={{ ...navLinksStyle, display: 'none' }} className="md:flex">
          {[
            { name: 'Start', id: 'hero' },
            { name: 'Über mich', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projekte', id: 'projects' },
            { name: 'Kontakt', id: 'contact' }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-blue)'
                  e.currentTarget.style.background = 'var(--gray-50)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-700)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 'var(--space-2)'
          }}
          className="md:hidden"
        >
          <span style={{
            width: '24px',
            height: '2px',
            background: 'var(--gray-700)',
            transition: 'var(--transition)',
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            background: 'var(--gray-700)',
            transition: 'var(--transition)',
            opacity: isMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            background: 'var(--gray-700)',
            transition: 'var(--transition)',
            transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></span>
        </button>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          {[
            { name: 'Start', id: 'hero' },
            { name: 'Über mich', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projekte', id: 'projects' },
            { name: 'Kontakt', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--space-4)',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--gray-700)',
                textAlign: 'left',
                borderRadius: 'var(--radius-lg)',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gray-50)'
                e.currentTarget.style.color = 'var(--primary-blue)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--gray-700)'
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
