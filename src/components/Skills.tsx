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
    { name: 'TypeScript', level: 75, icon: '🔷', color: 'from-blue-400 to-indigo-500' },
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
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium mb-4" style={{
            fontSize: '1rem' // Increased from text-sm
          }}>
            🛠️ Meine Skills
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technische{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meine Fähigkeiten in verschiedenen Programmiersprachen, Frameworks und Tools
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              💻 Programmiersprachen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} categoryDelay={0} />
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🌐 Web-Technologien
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {webTechnologies.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} categoryDelay={200} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🔧 Tools & Technologien
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} categoryDelay={400} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            🚀 Projekte ansehen
          </button>
        </div>
      </div>
    </section>
  )
}

export default Skills
