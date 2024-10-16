import React from 'react';
import { Tooltip } from 'react-tooltip';

interface Skill {
  name: string;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: "Java", icon: "java.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "HTML", icon: "html.svg" },
  { name: "CSS", icon: "css.svg" },
  { name: "Tailwind", icon: "tailwind.svg" },
  { name: "Next JS", icon: "nextjs.svg" },
];

const backendSkills: Skill[] = [
  { name: "Git", icon: "git.svg" },
  { name: "Node JS", icon: "nodejs.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "Django", icon: "django.svg" },
  { name: "Express JS", icon: "express.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "Go", icon: "go.svg" },
];

const mlAiSkills: Skill[] = [
  { name: "TensorFlow", icon: "tensorflow.svg" },
  { name: "PyTorch", icon: "pytorch.svg" },
  { name: "Scikit-learn", icon: "scikitlearn.svg" },
  { name: "Keras", icon: "keras.svg" },
  { name: "NumPy", icon: "numpy.svg" },
  { name: "Pandas", icon: "pandas.svg" },
  { name: "Matplotlib", icon: "matplotlib.svg" },
  { name: "Jupyter", icon: "jupyter.svg" }
];

const devOpsSkills: Skill[] = [
  { name: "Git", icon: "git.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "Kubernetes", icon: "kubernetes.svg" },
  { name: "Netlify", icon: "netlify.svg" },
  { name: "Vercel", icon: "vercel.svg" },
  { name: "Visual Studio Code", icon: "vscode.svg" },
  { name: "IntelliJ", icon: "intellij.svg" },
  { name: "PyCharm", icon: "pycharm.svg" },
  { name: "Jira", icon: "jira.svg" },
  { name: "Confluence", icon: "confluence.svg" },
  { name: "Slack", icon: "slack.svg" },
];

const SkillButton: React.FC<Skill> = ({ name, icon }) => (
  <div>
    <img
      src={`./icons/${icon}`}
      alt={name}
      className="skill-icon"
      data-tooltip-id={name}
      data-tooltip-content={name}
    />
    <Tooltip id={name} />
  </div>
);

const Background: React.FC = () => {
  return (
    <section id="stack">
      <p className="section__text__p1">Explore My</p>
      <h2 className="title">Tech Stack</h2>
      <div className="stack-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="stack-sub-title">Frontend Development</h2>
            <div className="skill-button-container">
              {frontendSkills.map((skill, index) => (
                <SkillButton key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="stack-sub-title">Backend Development</h2>
            <div className="skill-button-container">
              {backendSkills.map((skill, index) => (
                <SkillButton key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="stack-sub-title">Machine Learning + Artificial Intelligence</h2>
            <div className="skill-button-container">
              {mlAiSkills.map((skill, index) => (
                <SkillButton key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="stack-sub-title">Dev Ops + Cloud + Dev Tools</h2>
            <div className="skill-button-container">
              {devOpsSkills.map((skill, index) => (
                <SkillButton key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="./arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = '#projects'}
      />
    </section>
  );
}

export default Background;