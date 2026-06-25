import React from 'react';
import { skillGroups, type Tech } from '../data/tech';

const TechIcon: React.FC<{ tech: Tech }> = ({ tech }) => (
  <div
    className="tech"
    style={{ '--accent': tech.color } as React.CSSProperties}
    title={tech.name}
  >
    {tech.path ? (
      <svg className="tech__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d={tech.path} fill={tech.color} />
      </svg>
    ) : (
      <span className="tech__mono">{tech.name.replace(' IDEs', '')}</span>
    )}
    <span className="tech__name">{tech.name}</span>
  </div>
);

const Stack: React.FC = () => (
  <section id="stack" className="section">
    <h2 className="section__title">My <span className="grad">stack</span></h2>
    <div className="stack">
      {skillGroups.map((group) => (
        <div key={group.title} className="stack__group">
          <h3 className="stack__label">{group.title}</h3>
          <div className="stack__grid">
            {group.items.map((tech) => (
              <TechIcon key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
