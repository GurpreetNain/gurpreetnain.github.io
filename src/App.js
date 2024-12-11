import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import './App.scss';
import React, { useState } from 'react';


const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  document.documentElement.classList.toggle('light-mode', isLightMode);


  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode', !isLightMode);
  };

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} isLightMode={isLightMode} />
      <Header />
      <main className="main-content">

        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
