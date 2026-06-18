import "./style.css";
import Skills from "./Skills";
import GitHubProjects from "./GitHubProjects";
import SkillsProgress from "./SkillsProgress";
import ContactSection from "./ContactSection";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2>NK Portfolio</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content fade-up">
          <p className="hello">Hello, I'm</p>
          <h1>Nivedha Kulothungan</h1>
          <h3>Frontend Developer</h3>

          <p className="hero-text">
            I create modern, responsive, and user-friendly websites using React,
            JavaScript, and clean UI/UX design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="floating-icon html">
            <FaHtml5 />
          </div>

          <div className="floating-icon css">
            <FaCss3Alt />
          </div>

          <div className="floating-icon js">
            <FaJs />
          </div>

          <div className="floating-icon react">
            <FaReact />
          </div>

          <div className="floating-icon github">
            <FaGithub />
          </div>

          <div className="hero-image-box">
            <img src="/profile.png" alt="Nivedha Kulothungan" />
          </div>
        </div>
      </section>

      <section id="about" className="section fade-up">
       <h2>About Me</h2>

<p>
  Hi, I'm <strong>Nivedha Kulothungan</strong>, a Frontend Developer passionate about building elegant, responsive, and user-focused web experiences.
</p>

<p>
  I specialize in modern frontend technologies including HTML, CSS, JavaScript, and React, with a strong understanding of responsive design and UI/UX best practices. I enjoy transforming ideas into interactive digital products that are both visually appealing and highly functional.
</p>

<p>
  Driven by curiosity and continuous learning, I am committed to improving my skills, embracing new technologies, and delivering solutions that make a positive impact. I am currently seeking opportunities to contribute to innovative projects while growing as a software development professional.
</p>
      </section>

      <Skills />

      <div id="projects">
        <GitHubProjects />
      </div>

      <SkillsProgress />

      <ContactSection />

      <footer>
        <p>© 2026 Nivedha Kulothungan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;