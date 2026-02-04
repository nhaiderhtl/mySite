import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto py-24 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fadeInUp">About Me</h2>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12 animate-fadeInUp">
            <h3 className="text-4xl font-bold text-primary mb-8">Hey, I'm Nico!</h3>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm 17 years old and currently in my third year at HTL Leonding, where I'm diving deep into software development.
                What started as curiosity about how apps and websites work has turned into a genuine passion for creating stuff that actually works.
              </p>
              <p>
                Most of my free time goes into personal projects, it's honestly the best way to learn. Every project teaches me something new,
                whether it's a new language, framework, or just a better way to solve problems. I'm particularly into full-stack development
                because I love seeing a project through from the backend logic all the way to the user interface.
              </p>
              <p>
                I'm always eager to learn new technologies and improve my skills. My goal? To become a versatile developer who can tackle
                any challenge thrown my way, and maybe build something that makes a real difference along the way 😄 .
              </p>
            </div>
          </div>

          {/* Quick Facts Bar */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="card text-center animate-fadeInUp hover-lift p-6">
              <div className="text-3xl font-bold text-primary mb-2">17</div>
              <div className="text-sm text-body uppercase tracking-wide">Years Old</div>
            </div>
            <div className="card text-center animate-fadeInUp hover-lift p-6">
              <div className="text-3xl font-bold text-primary mb-2">3rd Year</div>
              <div className="text-sm text-body uppercase tracking-wide">HTL Leonding</div>
            </div>
            <div className="card text-center animate-fadeInUp hover-lift p-6">
              <div className="text-3xl font-bold text-primary mb-2">Full Stack</div>
              <div className="text-sm text-body uppercase tracking-wide">Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
