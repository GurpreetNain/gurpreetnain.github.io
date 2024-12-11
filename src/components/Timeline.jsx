import React from 'react';
import './Timeline.scss';

const Timeline = () => {
  const timelineItems = [
    {
      year: '2022 - Present',
      position: 'Software Development Engineer 1',
      company: 'Jio Platforms',
      details: 'Engineered and optimized 20+ scalable web applications, increasing user retention by 35%.'
    },
    {
      year: '2022',
      position: 'Freelance Web Developer',
      company: 'Eshopbox',
      details: 'Developed a customer portal using MEAN Stack, enhancing system performance by 20%.'
    },
    {
      year: '2018 - 2022',
      position: "Bachelor of Engineering in Information Technology",
      company: 'Pune University',
      details: 'CGPA: 9.13'
    }
  ];

  return (
    <section className="timeline" id="experience">
      <h2>Timeline</h2>
      <div className="timeline-container">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="year">{item.year}</div>
              <h3>{item.position}</h3>
              <div className="company">{item.company}</div>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline; 