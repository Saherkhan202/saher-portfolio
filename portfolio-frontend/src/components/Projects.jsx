function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">
          <span className="projects-label">MY WORK</span>

          <h2>
            Featured <span>Project</span>
          </h2>

          <p>
            A selection of my recent work showcasing my skills in web
            development, responsive design, and modern digital experiences.
          </p>
        </div>


        {/* Project Card */}
        <div className="featured-project">

          {/* Image Side */}
          <div className="project-image">
            <img
              src="/ecommerce-website-development-500x500.webp"
              alt="E-Commerce Clothing Website"
            />
          </div>


          {/* Content Side */}
          <div className="project-details">

            <span className="project-category">
              WORDPRESS & WOOCOMMERCE
            </span>

            <h3>
              E-Commerce Clothing Website
            </h3>

            <p>
              A modern and professional e-commerce clothing website
              designed to provide customers with a smooth and engaging
              online shopping experience.
            </p>

            <p>
              The website includes a clean interface, responsive design,
              product management, shopping cart, checkout functionality,
              and easy navigation.
            </p>


            {/* Technologies */}
            <div className="project-technologies">
              <span>WordPress</span>
              <span>WooCommerce</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>


            {/* Buttons */}
            <div className="project-actions">

              <a
                href="#"
                className="project-live-button"
              >
                View on linkdin →
              </a>


            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;