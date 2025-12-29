import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import "./styles/navbar.css";
import "./styles/animations.css";
import "./styles/global.css";
import "./app.css";
import "./index.css";
import portfolio1 from "./assets/portfolio1.jpg"
import portfolio2 from "./assets/portfolio2.jpg"

function App() {
  return (
    <>
      <header className="navbar">
        <h1  className="logo">Victor</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Crafting clean, modern <br /> 
          <span>frontend experiences</span>
          </h2>

          <p>
            I'm Victor, a frontend developer focused on building visually refined, user-centred interfaces using React.js and modern web technologies.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </section>

        <section id="projects" className="projects">
          <h3>Selected Projects</h3>

          <div className="projeccts-grid">
            <div className="project-card">
              <div className="project-image">
                <img 
                src={portfolio1} 
                alt="Professional Portfolio Website" 
                loading="lazy"
                />
              </div>
              <h4>Professional Portfolio Website</h4>
              <p>
                A modern personal professional portfolio built with React and clean CSS, focusing on layout, typography and performance.
              </p>
              <span>React+CSS+UI/UX</span>
            <div className="project-links">
              <a href="https://github.com/akinbodevictor02.github.io/professional-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Github 'n
                </a>
            </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img 
                src={portfolio2} 
                alt="My portfolio Website"
                loading="lazy" 
                />
              </div>
              <h4>A portfolio Website</h4>
              <p>
                Responsive portfolio website built with HTML, CSS and JavaScript to showcase my projects and skills.
              </p>
              <span>HTML+CSS+JavaScript</span> 
            </div>
             <div className="project-links">
              <a href="https://github.com/akinbodevictor02.github.io/My-portfolio-website/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Github 'n
                </a>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>UI/UX Design</div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h3>Contact Me</h3>
          <p>
            Email:{""} 
            <a href="mailto:oluwaseyiv47@gmail.com">
              oluwaseyiv47@gmail.com
            </a>
            </p>

          <p>
            Github:{""}
            <a href="github.com/akinbodevictor02"
            target="_blank"
            rel="noopener noreferrer"
            >
              github.com/akinbodevictor02 
              </a>
              </p>

          <p>
            LinkedIn:{""} 
            <a href="linkedin.com/in/victor-akinbode-019665211"
            target="_blank"
            rel="noopener noreferrer"
            >
              
              linkedin.com/in/victor-akinbode-019665211
              </a>
              </p>

        </section>
      </main>
    </>
  );
}

export default App;