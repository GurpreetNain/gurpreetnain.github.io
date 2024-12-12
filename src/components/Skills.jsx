import React from 'react';
import './Skills.scss';

const Skills = () => {
  const skillCategories = {
    'Languages': ['JavaScript', 'Python', 'HTML5', 'SQL'],
    'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'AWS', 'Azure DevOps', 'Postman', 'Figma'],
    'Frameworks & Libraries': ['AngularJs', 'React', 'Node.js', 'Express', 'MongoDB', 'Sockets.IO', 'Material UI', 'Bootstrap']
  };

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <>
            <h3>{category}:</h3>
            <div className="skill-list">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Skills; 