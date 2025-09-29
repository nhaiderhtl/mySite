import React, { useState } from 'react'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: string
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and TypeScript. Features real-time updates, drag-and-drop functionality, and team collaboration tools.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
      liveUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/yourusername/task-manager',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts. Built with React and integrates with multiple weather APIs for accurate data.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'REST API Server',
      description: 'A robust REST API built with Node.js and Express, featuring authentication, data validation, rate limiting, and comprehensive documentation.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      liveUrl: 'https://api-example.com/docs',
      githubUrl: 'https://github.com/yourusername/rest-api',
      category: 'backend'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration capabilities.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'Redis', 'Docker', 'AWS'],
      liveUrl: 'https://example-social.com',
      githubUrl: 'https://github.com/yourusername/social-dashboard',
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'Mobile App Backend',
      description: 'A scalable backend service for mobile applications with real-time messaging, push notifications, and cloud storage integration.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'Socket.io', 'Firebase', 'MongoDB', 'AWS S3'],
      liveUrl: 'https://mobile-api.example.com',
      githubUrl: 'https://github.com/yourusername/mobile-backend',
      category: 'backend'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on recently</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project Image</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
