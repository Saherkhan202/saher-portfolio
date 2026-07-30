function Skills() {
  const skills = [
    {
      icon: "🌐",
      title: "HTML5",
      level: "90%",
      text: "Semantic and well-structured web development",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: "🎨",
      title: "CSS3",
      level: "85%",
      text: "Responsive layouts and modern UI design",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: "⚡",
      title: "JavaScript",
      level: "80%",
      text: "Interactive and dynamic web experiences",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: "⚛️",
      title: "React JS",
      level: "75%",
      text: "Reusable components and modern interfaces",
      link: "https://react.dev/",
    },
    {
      icon: "🐘",
      title: "PHP",
      level: "80%",
      text: "Dynamic websites and backend development",
      link: "https://www.php.net/",
    },
    {
      icon: "🗄️",
      title: "MySQL",
      level: "80%",
      text: "Database design and data management",
      link: "https://www.mysql.com/",
    },
    {
      icon: "📝",
      title: "WordPress",
      level: "85%",
      text: "Professional websites and theme customization",
      link: "https://wordpress.org/",
    },
    {
      icon: "🛒",
      title: "WooCommerce",
      level: "85%",
      text: "E-commerce stores and online shopping solutions",
      link: "https://woocommerce.com/",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span className="skills-label">MY EXPERTISE</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            I specialize in creating modern, responsive, and user-friendly
            digital experiences using a combination of frontend, backend,
            and CMS technologies.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card"
              key={index}
            >

              <div className="skill-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span className="skill-percent">
                  {skill.level}
                </span>
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.text}</p>

              <div className="skill-progress">
                <div className="progress-bg">
                  <div
                    className="progress-fill"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;