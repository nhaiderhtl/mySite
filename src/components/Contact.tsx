import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => (
  <section id="contact" className="section section--contact">
    <h2 className="section__title">Let's <span className="grad">connect</span></h2>
    <p className="contact__lead">Got an idea or just want to talk tech? Reach out.</p>

    <div className="contact__links">
      <a href="mailto:nicohaider2008@gmail.com" className="contact__link">
        <Mail size={20} /> nicohaider2008@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/nico-haider-976a96393/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__link"
      >
        <Linkedin size={20} /> LinkedIn
      </a>
      <a
        href="https://github.com/nhaiderhtl"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__link"
      >
        <Github size={20} /> GitHub
      </a>
    </div>
  </section>
);

export default Contact;
