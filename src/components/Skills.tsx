import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = {
    languages: ['Java', 'C#', 'JavaScript', 'TypeScript', 'SQL'],
    tools: ['Git', 'Node.js', 'Shell Scripting', 'VS Code', 'GitHub'],
    frameworks: ['.NET', 'JavaFX', 'React', 'HTML & CSS', 'Express']
  };

  const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
    <div className="mb-16">
      <h4 className="text-lg font-bold text-primary mb-3">{title}</h4>
      <div className="grid grid-cols-5 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="card text-center py-3 px-2 hover-lift"
          >
            <span className="text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-6">What I Work With</h2>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Here are the technologies and tools I've been working with. I'm always learning something new!
      </p>

      <div className="max-w-5xl mx-auto">
        <SkillCategory title="Languages" skills={skillCategories.languages} />
        <SkillCategory title="Tools & Platforms" skills={skillCategories.tools} />
        <SkillCategory title="Frameworks & Libraries" skills={skillCategories.frameworks} />
      </div>
    </section>
  );
};

export default Skills;
