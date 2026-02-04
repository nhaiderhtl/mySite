import React from 'react';

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Avalonia Rpn Calculator',
    description: 'A little C#/Avalonia Project we did in school. Basic Calc Functions + List Calculations',
    link: 'https://github.com/nhaiderhtl/avaloniaRpnCalc',
  },
  {
    name: 'Html Forge',
    description: 'Open Source kotlin (started as java) library to generate html sites with style in kotlin with classes. Small group project a friend of mine started and I contributed to.',
    link: 'https://github.com/htmlforge-team/HtmlForge',
  },
  {
    name: 'Incremental',
    description: 'A little incremental game in TS/Vue.js, WOP',
    link: 'https://github.com/nhaiderhtl/web-incremental',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-6">Stuff I've Built</h2>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        These are some projects I've worked on in my free time. Each one taught me something new!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="btn">
              Check it out
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
