import React from 'react';
import Typewriter from 'typewriter-effect';

const Roles = () => {
  return (
    <div className="typewriter-container">
      <div className="typewriter-text">
        <Typewriter 
          options={{
            strings: [
              "Software Engineer Intern",
              "Full Stack Developer Intern",
              "Machine Learning/AI Intern",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 45,
          }}
        />
      </div>
    </div>
  );
}

const Profile: React.FC = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./profile-pic-3.png" alt="Gigi's profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Gigi Kuffa</h1>
        <p className="section__text__p2">
          <div className="typewriter">
            <Roles />
          </div>
        </p>
        <div className="button-container">
          <a 
            href="https://www.resume.lol/share/3a03uxo"
            className="button button-color-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Resume
          </a>
          <a href="#contact" className="button button-color-1">
            Contact Me
          </a>
        </div>
        <div id="socials-container">
          <a
            href="https://linkedin.com/in/kuffa"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img
              src="/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a
            href="https://github.com/jdkuffa"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img
              src="/github.png"
              alt="My Github profile"
              className="icon"
            />
          </a>
          <a
            href="mailto:jdkuffa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img
              src="/email.png"
              alt="My email"
              className="email-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;