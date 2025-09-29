import React from 'react'

const Hero: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f8fafc 0%, rgba(37, 99, 235, 0.05) 100%)',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '80px'
  }

  return (
    <section id="hero" style={heroStyle}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-20%',
        width: '40%',
        height: '140%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} className="animate-float"></div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <div style={{
                display: 'inline-block',
                padding: 'var(--space-2) var(--space-4)',
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1))',
                color: 'var(--primary-blue)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                👋 Hallo, ich bin
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                color: 'var(--gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Nico{' '}
                <span className="bg-gradient-text">Haider</span>
              </h1>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-2)',
                fontSize: '1.25rem',
                color: 'var(--gray-600)',
                fontWeight: '500'
              }}>
                <span className="bg-gradient-text">Full Stack Developer</span>
                <span>•</span>
                <span style={{ color: 'var(--purple)' }}>Software Engineer</span>
              </div>
            </div>

            <p style={{
              fontSize: '1.125rem',
              color: 'var(--gray-700)',
              lineHeight: '1.7',
              maxWidth: '600px'
            }}>
              Ich entwickle moderne Webanwendungen und Software-Lösungen mit{' '}
              <span style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>C#, Java, JavaScript</span> und{' '}
              <span style={{ fontWeight: '600', color: 'var(--purple)' }}>Node.js</span>.
              Spezialisiert auf sauberen Code, benutzerfreundliche Interfaces und skalierbare Architekturen.
            </p>

            {/* Tech Stack Icons */}
            <div className="space-y-4">
              <p style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: 'var(--gray-600)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Meine Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                {[
                  { name: 'C#', icon: '🔷', bg: 'rgba(139, 92, 246, 0.1)', text: 'var(--purple)' },
                  { name: 'Java', icon: '☕', bg: 'rgba(239, 68, 68, 0.1)', text: 'var(--red)' },
                  { name: 'JavaScript', icon: '🟡', bg: 'rgba(245, 158, 11, 0.1)', text: 'var(--orange)' },
                  { name: 'Node.js', icon: '🟢', bg: 'rgba(16, 185, 129, 0.1)', text: 'var(--green)' },
                  { name: 'Git', icon: '📦', bg: 'rgba(245, 158, 11, 0.1)', text: 'var(--orange)' },
                  { name: 'HTML/CSS', icon: '🎨', bg: 'rgba(37, 99, 235, 0.1)', text: 'var(--primary-blue)' }
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-3) var(--space-4)',
                      background: tech.bg,
                      color: tech.text,
                      borderRadius: 'var(--radius-lg)',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      transition: 'var(--transition)',
                      cursor: 'pointer',
                      animationDelay: `${index * 100}ms`
                    }}
                    className="animate-fade-in-up"
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <span style={{ fontSize: '1.125rem' }}>{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }} className="sm:flex-row">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                🚀 Meine Projekte
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
              >
                💬 Kontakt aufnehmen
              </button>
            </div>
          </div>

          {/* Visual Section */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="animate-fade-in-right">
            <div style={{ position: 'relative', width: '350px', height: '350px' }}>
              {/* Main Avatar */}
              <div style={{
                width: '300px',
                height: '300px',
                background: 'linear-gradient(135deg, var(--primary-blue), var(--purple))',
                borderRadius: 'var(--radius-3xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontSize: '4rem',
                fontWeight: '900',
                boxShadow: 'var(--shadow-2xl)',
                border: '4px solid var(--white)',
                margin: '0 auto'
              }}>
                NH
              </div>

              {/* Floating Elements */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: 'var(--white)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-3)',
                boxShadow: 'var(--shadow-lg)'
              }} className="animate-float">
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, var(--green), var(--primary-blue))',
                  borderRadius: 'var(--radius-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  fontSize: '1.25rem',
                  fontWeight: '700'
                }}>
                  ✓
                </div>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '-16px',
                left: '-16px',
                background: 'var(--white)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-3)',
                boxShadow: 'var(--shadow-lg)',
                animationDelay: '1s'
              }} className="animate-float">
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, var(--purple), var(--primary-blue))',
                  borderRadius: 'var(--radius-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  fontSize: '1.25rem',
                  fontWeight: '700'
                }}>
                  💻
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{
              position: 'absolute',
              bottom: '-60px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-4)',
              width: '100%',
              maxWidth: '350px'
            }}>
              {[
                { number: '15+', label: 'Projekte', gradient: 'linear-gradient(135deg, var(--primary-blue), var(--purple))' },
                { number: '3+', label: 'Jahre', gradient: 'linear-gradient(135deg, var(--purple), var(--primary-blue))' },
                { number: '6+', label: 'Sprachen', gradient: 'linear-gradient(135deg, var(--green), var(--primary-blue))' }
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-4)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow)',
                  border: '1px solid rgba(255, 255, 255, 0.5)'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    background: stat.gradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--gray-600)',
                    fontWeight: '600'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }} className="animate-pulse">
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid var(--gray-600)',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 'var(--space-2)'
          }}>
            <div style={{
              width: '4px',
              height: '12px',
              background: 'var(--gray-600)',
              borderRadius: 'var(--radius-full)'
            }} className="animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
