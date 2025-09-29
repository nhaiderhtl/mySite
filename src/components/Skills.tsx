import React from 'react'
import './Skills.css'

interface Skill {
  name: string
  level: number
  category: string
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'Vue.js', level: 75, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 75, category: 'backend' },
    { name: 'REST APIs', level: 90, category: 'backend' },

    // Tools & Others
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
    { name: 'Jest', level: 80, category: 'tools' },
    { name: 'Webpack', level: 70, category: 'tools' }
  ]

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Technologies'
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Here are the technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3>{categories[category as keyof typeof categories]}</h3>
              <div className="skills-list">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
