import React from "react";

const Projects = () => {
    const projectList = [
        {
            name: "Portfolio Website",
            description: "A personal portfolio website to showcase my projects and skills built using HTML, CSS & JavaScript.",
            link: "https://github.com/akinbodevictor02/portfolio-website"
        },
        {
            name: "A professional-portfolio",
            description: "A professional portfolio website built with React.js.",
            link: "https://github.com/akinbodevictor02/professional-portfolio"
        }
    ]
    return (
        <section>
            <h2>Projects</h2>

            {projectList.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link}>View Project</a>
                </div>
            ))}
        </section>
    );
};

export default Projects;