import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know more about who I am and what I do</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm a passionate developer</h3>
            <p>
              I'm a dedicated full-stack developer with a passion for creating
              innovative web applications. With expertise in modern technologies
              like React, TypeScript, Node.js, and more, I enjoy turning complex
              problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              always strive to stay updated with the latest industry trends.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-frame">
              <div className="about-photo">
                <span>Your Professional Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
