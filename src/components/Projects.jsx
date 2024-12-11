import React from 'react';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Applicant Tracking System Simulator',
      description: 'Built an interactive resume analyzing and ranking system with over 90% accuracy in keyword extraction.',
      technologies: ['TF-IDF', 'Cosine Similarity', 'Node.js', 'Express.js', 'React.js'],
      image: '/images/ats.png',
      url: 'https://github.com/Yashdew/Assessor'
    },
    {
      title: 'Cowin Vaccination Scheduler',
      description: 'Developed an automated vaccination slot booking bot using Python and CoWIN open APIs.',
      technologies: ['Python', 'CoWIN API'],
      image: '/images/cowin.png',
      url: 'https://github.com/jayeshpadhiar/CowinVaccineScheduler'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} className="project-card" href={project.url} target="_blank" rel="noopener noreferrer">
            {/* <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div> */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="cta-links">
        <a href="https://github.com/JayeshPadhiar?tab=repositories" target="_blank" rel="noopener noreferrer" className="">View More on Github</a>
      </div>
    </section>
  );
};

export default Projects; 