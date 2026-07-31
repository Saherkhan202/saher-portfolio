
import resume from "../assets/SAHER KHURSHID CV 111.pdf";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Side */}
        <div className="about-content">
          <p className="section-subtitle">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <h3>I'm a Graduate Software Engineer</h3>

          <p>
            I am a Graduate Software Engineer with a strong interest in
            web development. I enjoy creating modern, responsive, and
            user-friendly websites using modern web technologies.
          </p>

          <p>
            I have experience working with HTML, CSS, JavaScript, React JS,
            PHP, MySQL, WordPress, and WooCommerce. I enjoy learning new
            technologies and solving problems through clean and efficient code.
          </p>

          <a
            href={resume}
            className="cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>

        </div>


        {/* Right Side */}
        <div className="about-skills">
          <h3>My Skills</h3>

          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React JS</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>WordPress</span>
            <span>WooCommerce</span>
            <span>Node JS</span>
            <span>MongoDB</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;