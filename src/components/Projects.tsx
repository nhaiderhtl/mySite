import React, { useState } from 'react'

interface Project {
  id: number
  name: string
  description: string
  language: string
  githubUrl: string
  liveUrl?: string
  image: string
  tags: string[]
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const projects: Project[] = [
    {
      id: 1,
      name: 'register',
      description: 'Ein JavaScript-Projekt zur Registrierung von `.is-a.dev` Subdomains. Ermöglicht es Entwicklern, kostenlose Subdomains für ihre Projekte zu erhalten.',
      language: 'JavaScript',
      githubUrl: 'https://github.com/nhaiderhtl/register',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      tags: ['JavaScript', 'Web', 'Domain', 'Open Source']
    },
    {
      id: 2,
      name: 'mySite',
      description: 'Meine persönliche Portfolio-Website, entwickelt mit React, TypeScript und Tailwind CSS. Vollständig responsiv mit modernen Animationen.',
      language: 'TypeScript',
      githubUrl: 'https://github.com/nhaiderhtl/mySite',
      liveUrl: 'https://nhaiderhtl.github.io/mySite',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio']
    },
    {
      id: 3,
      name: 'hugo-quickstart',
      description: 'Ein statisches Website-Projekt mit Hugo Framework. Schnelle und SEO-optimierte Lösung für Content-Management und Blog-Systeme.',
      language: 'HTML',
      githubUrl: 'https://github.com/nhaiderhtl/hugo-quickstart',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c4b324?w=400&h=300&fit=crop',
      tags: ['Hugo', 'HTML', 'Static Site', 'SEO']
    },
    {
      id: 4,
      name: 'syp-static-website-test',
      description: 'Testprojekt für statische Website-Entwicklung. Experimenteller Ansatz für moderne Web-Technologien und Performance-Optimierung.',
      language: 'HTML',
      githubUrl: 'https://github.com/nhaiderhtl/syp-static-website-test',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'Testing', 'Performance']
    }
  ]

  const categories = ['all', 'JavaScript', 'HTML', 'TypeScript']

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.language === activeFilter)

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'JavaScript': return 'from-yellow-400 to-orange-500'
      case 'TypeScript': return 'from-blue-500 to-blue-600'
      case 'HTML': return 'from-orange-500 to-red-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getLanguageIcon = (language: string) => {
    switch (language) {
      case 'JavaScript': return '🟡'
      case 'TypeScript': return '🔷'
      case 'HTML': return '📄'
      default: return '💻'
    }
  }

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🚀 Meine Projekte
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Aktuelle{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Arbeiten
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eine Auswahl meiner GitHub-Repositories und persönlichen Projekte
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category === 'all' ? 'Alle Projekte' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 bg-gradient-to-r ${getLanguageColor(project.language)} rounded-full text-white text-sm font-medium flex items-center gap-2`}>
                    <span>{getLanguageIcon(project.language)}</span>
                    {project.language}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      🌐 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mehr Projekte auf GitHub
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Entdecke weitere Projekte, Code-Beispiele und Open-Source-Beiträge auf meinem GitHub-Profil
            </p>
            <a
              href="https://github.com/nhaiderhtl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Alle GitHub Repos ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
