import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Main Footer Content */}
      <div className="footer-container">

        {/* LEFT - BRAND */}
        <div className="footer-brand">

          <h2>
            Saher <span>Khurshid</span>
          </h2>

          <p>
            A passionate web developer focused on creating modern,
            responsive, and user-friendly digital experiences.
          </p>

        </div>


        {/* CENTER - QUICK LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <div className="footer-link-list">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

          </div>

        </div>


        {/* RIGHT - LET'S CONNECT */}
        <div className="footer-connect">

          <h3>Let's Connect</h3>

          <p>
            Have a project in mind or want to work together?
            Feel free to get in touch.
          </p>


          {/* SOCIAL ICONS */}
          <div className="social-icons">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

          </div>


          {/* CONTACT BUTTON */}
          <a href="#contact" className="footer-contact-btn">
            Contact Me
          </a>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          Copyright© 2026 <span>Saher Khurshid</span>. All Rights Reserved.
        </p>

        <a
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
        >
          ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;