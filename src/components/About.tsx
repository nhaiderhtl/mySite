import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium mb-4" style={{
            fontSize: '1rem' // Increased from text-sm
          }}>
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
                  {['React', 'TypeScript', 'HTML/CSS', 'JavaScript'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Backend</h4>
                <div className="space-y-2">
                  {['C#', 'Java', 'Node.js', 'Git'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                🚀 Meine Arbeiten ansehen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
