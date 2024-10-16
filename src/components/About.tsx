const About: React.FC = () => {
  return (
    <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h2 className="title">About Me</h2>
        <div className="section-container">
            <div className="section__pic-container">
                <img 
                    src="./about-pic.png" 
                    alt="Profile picture" 
                    className="about-pic"
                />
            </div>
            <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <img
                            src="./experience.png"
                            alt="Experience icon"
                            className="icon"
                        />
                        <h3>Most Recent Experience</h3>
                        <p>Technologist Intern <br /> <i>Black Cape</i></p>
                    </div>
                    <div className="details-container">
                        <img
                            src="./education.png"
                            alt="Education icon"
                            className="icon"
                        />
                        <h3>Education</h3>
                        <p>B.Sc. in Computer Science, <br /> Concentration in Machine Learning & AI, <br /> English Literature</p>
                    </div>
                </div>
                <div className="text-container">
                    Hey! I'm a <b>Computer Science</b> and <b>English</b> double major in my third year at the College of William and Mary.
                    With the Computer Science major, I'm doing a <b>concentration in Machine Learning & AI</b>. I'm looking for <b>Summer 2025 
                    internships</b> that involve <b>software development</b>, <b>full stack web development</b>, <b>mobile app development</b>, 
                    and/or <b>machine learning and AI</b>.
                </div>
            </div>
        </div>
        <img 
            src="./arrow.png" 
            alt="Arrow icon" 
            className="icon arrow" 
            onClick={() => window.location.href = '#stack'}
        />
    </section>
  );
}

export default About;