import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="profile">
        <img 
          src="profile-logo.png" 
          alt="Profile"
          className="profile-image"
        />
        <h1>Jayesh Padhiar</h1>
        <p className="title">Fullstack Web Developer</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jayeshpadhiar" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/JayeshPadhiar" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="JayeshPadhiar_Resume.pdf" target="_blank" className="resume-button">Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 