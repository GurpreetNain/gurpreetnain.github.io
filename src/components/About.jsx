import React from 'react';
import './About.scss';

const About = () => {
  const points = [
    '🎓 Bachelor of Engineering in Information Technology from Pune University, CGPA: 9.13.',
    '💼 Software Development Engineer 1 at Jio Platforms, optimizing web applications for millions of users.',
    '💼 Freelance Web Developer at Eshopbox, enhancing user experience with the MEAN Stack.',
    '🔬 Creator of an Applicant Tracking System Simulator and a Cowin Vaccination Scheduler.',
    '💡 Passionate about mountaineering, football, sports, and music.',
    '📫 Connect with me at jayeshpadhiar20@gmail.com or on LinkedIn.'
  ];

  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        {points.map((point, index) => (
          <div className="point" key={index}>
            <p key={index}>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About; 