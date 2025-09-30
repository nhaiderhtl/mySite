import React from 'react'

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, rgba(37, 99, 235, 0.05) 100%)',
      paddingTop: '80px'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute animate-float" style={{
        top: '-20%',
        right: '-20%',
        width: '40%',
        height: '140%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full font-semibold" style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1))',
                color: 'var(--primary-blue)',
                fontSize: '1rem' // Increased from text-sm
              }}>
                👋 Hallo, ich bin
              </div>

              <h1 className="font-bold text-gray-900 mb-4" style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1'
              }}>
                Nico{' '}
                <span className="bg-gradient-text">Haider</span>
              </h1>

              <div className="flex flex-wrap gap-2 text-xl font-medium">
                <span className="bg-gradient-text">Full Stack Developer</span>
                <span className="text-gray-600">•</span>
                <span style={{ color: 'var(--purple)' }}>Software Engineer</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Ich entwickle moderne Webanwendungen und Software-Lösungen mit{' '}
              <span className="font-semibold" style={{ color: 'var(--primary-blue)' }}>C#, Java, JavaScript</span> und{' '}
              <span className="font-semibold" style={{ color: 'var(--purple)' }}>Node.js</span>.
              Spezialisiert auf sauberen Code, benutzerfreundliche Interfaces und skalierbare Architekturen.
            </p>

            {/* Tech Stack Icons */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Meine Tech Stack
              </p>
              <div className="flex flex-wrap gap-4">
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
                    className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm cursor-pointer animate-fade-in-up"
                    style={{
                      background: tech.bg,
                      color: tech.text,
                      transition: 'var(--transition)',
                      animationDelay: `${index * 100}ms`
                    }}
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                🚀 Meine Projekte
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                💬 Kontakt aufnehmen
              </button>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative flex justify-center animate-fade-in-right">
            <div className="relative w-80 h-80">
              {/* Main Avatar */}
              <div className="absolute inset-0 rounded-3xl flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, var(--primary-blue), var(--purple))',
                boxShadow: 'var(--shadow-2xl)'
              }}>
                <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-2xl flex items-center justify-center text-4xl font-bold text-gray-700" style={{
                      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1))'
                    }}>
                      NH
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Nico Haider</h3>
                      <p className="text-sm" style={{ color: 'var(--primary-blue)' }}>Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute top-1/4 -left-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-lg">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
