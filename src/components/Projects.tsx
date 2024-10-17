import React from 'react';

interface Project {
  image: string;
  title: string;
  githubLink: string;
  demoLink: string;
  technologies: string[];
  description: string;
}

const projects: Project[] = [
  {
    image: "../src/assets/project-1.png",
    title: "Portfolio",
    githubLink: "https://github.com/jdkuffa/Portfolio",
    demoLink: "https://gigikuffa.netlify.app",
    technologies: ["TypeScript", "CSS", "React"],
    description: "My portfolio website."
  },
  {
    image: "../src/assets/project-2.png",
    title: "Pomohero",
    githubLink: "https://github.com/jdkuffa/Pomohero",
    demoLink: "https://pomohero.netlify.app",
    technologies: ["JavaScript", "CSS", "React"],
    description: "Productivity tool with a single dashboard."
  },
  {
    image: "../src/assets/project-3.png",
    title: "Chatterbox",
    githubLink: "https://github.com/gdscwm/real-time-chat-app",
    demoLink: "https://go-chat-krf0.onrender.com/",
    technologies: ["Go", "Fiber", "HTMX"],
    description: "A real-time chat application."
  }
];

const ProjectCard: React.FC<Project> = ({ image, title, githubLink, demoLink, technologies, description }) => (
  <div className="details-container color-container">
    <div className="article-container">
      <img src={image} alt={title} className="project-img" />
    </div>
    <h3 className="stack-sub-title project-title">{title}</h3>
    <div className="technologies-container">
      {technologies.map((tech, index) => (
        <span key={index} className="technology-button">
          {tech.toLowerCase()}
        </span>
      ))}
    </div>
    <div className="project-description-text">{description}</div>
    <div className="button-container">
      <a 
        href={githubLink}
        className="button button-color-2 project-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a 
        href={demoLink}
        className="button button-color-2 project-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h2 className="title">Projects</h2>
      <div className="stack-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <img 
        src="./arrow.png" 
        alt="Arrow icon" 
        className="icon arrow" 
        onClick={() => window.location.href = '#contact'}
      />
    </section>
  );
}

export default Projects;