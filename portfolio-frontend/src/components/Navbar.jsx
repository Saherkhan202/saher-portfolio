import { useState } from "react";
import "./Header.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          Saher Khurshid
        </a>

        {/* Hamburger Button - Only Mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Profile Image */}
        <a href="#home" className="nav-profile" onClick={closeMenu}>
          <img src="/profile.webp" alt="Saher Khurshid" />
        </a>

      </div>
    </header>
  );
}

export default Navbar;
