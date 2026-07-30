function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">

        <p className="welcome-text">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Saher Khurshid</span>
        </h1>

        <h2>
          Graduate Software Engineer
        </h2>

        <p className="home-description">
          I am a passionate Web Developer who creates modern, responsive,
          and user-friendly websites. I enjoy transforming creative ideas
          into meaningful digital experiences through clean and efficient code.
        </p>

        <div className="home-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Contact Me
          </a>

        </div>

        

      </div>
    </section>
  );
}

export default Home;