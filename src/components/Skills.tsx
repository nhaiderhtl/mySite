import React from 'react'

interface Skill {
  name: string
  level: number
  icon: string
  color: string
}

const Skills: React.FC = () => {
  const programmingLanguages: Skill[] = [
    { name: 'C#', level: 90, icon: '🔷', color: 'from-purple-500 to-blue-500' },
    { name: 'Java', level: 85, icon: '☕', color: 'from-red-500 to-orange-500' },
    { name: 'JavaScript', level: 88, icon: '🟡', color: 'from-yellow-400 to-orange-400' },
    { name: 'Node.js', level: 82, icon: '🟢', color: 'from-green-500 to-emerald-500' },
  ]

  const webTechnologies: Skill[] = [
    { name: 'HTML', level: 92, icon: '📄', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, icon: '🎨', color: 'from-blue-500 to-purple-500' },
    { name: 'React', level: 80, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Vue.js', level: 75, icon: '💚', color: 'from-green-400 to-emerald-500' },
  ]

  const tools: Skill[] = [
    { name: 'Git', level: 88, icon: '📦', color: 'from-orange-500 to-red-500' },
    { name: 'GitHub', level: 90, icon: '🐙', color: 'from-gray-700 to-gray-900' },
    { name: 'VS Code', level: 95, icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { name: 'Databases', level: 78, icon: '🗄️', color: 'from-indigo-500 to-purple-500' },
  ]

  const SkillCard = ({ skill, index, categoryDelay = 0 }: { skill: Skill, index: number, categoryDelay?: number }) => (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up border border-gray-100"
      style={{ animationDelay: `${(categoryDelay + index * 100)}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
            {skill.icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{skill.name}</h3>
            <p className="text-sm text-gray-500">{skill.level}% Expertise</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700">Skill Level</span>
          <span className="font-bold text-gray-900">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🛠️ Meine Skills
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technische{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meine Leidenschaft für Technologie spiegelt sich in meiner vielfältigen Skill-Set wider
          </p>
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Programmiersprachen</h3>
            <p className="text-gray-600">Meine Hauptprogrammiersprachen für verschiedene Projekte</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} categoryDelay={0} />
            ))}
          </div>
        </div>

        {/* Web Technologies */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Web-Technologien</h3>
            <p className="text-gray-600">Frontend-Technologien für moderne Webanwendungen</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webTechnologies.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} categoryDelay={200} />
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Development Tools</h3>
            <p className="text-gray-600">Tools und Technologien die ich täglich verwende</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} categoryDelay={400} />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interessiert an meinen Projekten?
            </h3>
            <p className="text-gray-600 mb-6">
              Besuche mein GitHub-Profil um meine aktuellen Projekte und Code-Beispiele zu sehen
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
              GitHub Profil ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
