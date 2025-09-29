import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            👨‍💻 Über mich
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leidenschaftlicher{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Entwickler
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ich verwandle Ideen in funktionale, benutzerfreundliche Software-Lösungen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Visual Elements */}
          <div className="relative">
            <div className="relative">
              {/* Main Profile Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-4xl font-bold text-gray-700 mx-auto mb-6">
                    NH
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Nico Haider</h3>
                  <p className="text-blue-600 font-semibold mb-4">Full Stack Developer</p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">3+</div>
                      <div className="text-sm text-gray-600">Jahre</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Projekte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">6+</div>
                      <div className="text-sm text-gray-600">Technologien</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg animate-float">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🔷
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg animate-bounce-slow">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                  ☕
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 bg-white rounded-2xl p-3 shadow-lg animate-pulse-slow">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg">
                  🟡
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Hi! Ich bin ein{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Software-Entwickler
                </span>
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Als leidenschaftlicher Full Stack Developer bringe ich Ideen zum Leben.
                Mit über 3 Jahren Erfahrung in der Softwareentwicklung spezialisiere ich mich
                auf moderne Technologien wie <span className="font-semibold text-blue-600">C#, Java, JavaScript</span> und <span className="font-semibold text-purple-600">Node.js</span>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Mein Fokus liegt auf der Entwicklung skalierbarer, wartbarer und benutzerfreundlicher
                Anwendungen. Ich arbeite gerne mit agilen Methoden und lege großen Wert auf
                sauberen, gut dokumentierten Code.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Frontend</h4>
                <div className="space-y-2">
                  {['JavaScript', 'HTML/CSS', 'React', 'Vue.js'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Backend</h4>
                <div className="space-y-2">
                  {['C#', 'Java', 'Node.js', 'Databases'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="pt-6">
              <a
                href="https://github.com/nhaiderhtl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub besuchen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
