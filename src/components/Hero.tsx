import React, { Suspense, lazy, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const TechCloud = lazy(() => import('../three/TechCloud'));

const Hero: React.FC = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__canvas" aria-hidden="true">
        <Suspense fallback={null}>
          <TechCloud paused={reduced} />
        </Suspense>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Full-Stack Developer</p>
        <h1 className="hero__title">
          Nico <span className="grad">Haider</span>
        </h1>
        <p className="hero__tagline">
          17 · 3rd year @ HTL Leonding · building things end-to-end
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
      </div>

      <a href="#stack" className="hero__scroll" aria-label="Scroll to content">
        <ArrowDown size={22} />
      </a>
    </section>
  );
};

export default Hero;
