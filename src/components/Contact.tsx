import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get In Touch</p>
            <h2 className="title">Contact Me</h2>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src="./email.png"
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                    />
                    <p>
                        <a href="mailto:jdkuffa@gmail.com">
                            jdkuffa@<span style={{display: 'none'}}>ignoreme-</span>gmail.com
                        </a>
                    </p>
                </div>
                <div className="contact-info-container">
                    <img
                        src="./linkedin.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p>
                        <a href="https://linkedin.com/in/kuffa" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;