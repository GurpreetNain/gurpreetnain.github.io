import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/jayeshpadhiar/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
          LinkedIn: linkedin.com/in/jayeshpadhiar
        </a>
        <a href="mailto:jayeshpadhiar20@gmail.com">
          <i className="fas fa-envelope"></i>
          Primary email: jayeshpadhiar20@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact; 