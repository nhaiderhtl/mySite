import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  // lightweight pointer-follow tilt (no extra deps)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project"
      style={{ '--accent': project.accent ?? '#BB86FC' } as React.CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <div className="project__head">
        <h3 className="project__name">{project.name}</h3>
        <ArrowUpRight className="project__arrow" size={22} />
      </div>
      <p className="project__desc">{project.description}</p>
      <div className="project__tags">
        {project.tags.map((t) => (
          <span key={t} className="project__tag">{t}</span>
        ))}
      </div>
    </a>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="section">
    <h2 className="section__title">Stuff I've <span className="grad">built</span></h2>
    <div className="projects">
      {projects.map((p) => (
        <ProjectCard key={p.name} project={p} />
      ))}
    </div>
  </section>
);

export default Projects;
