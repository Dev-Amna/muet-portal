import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close sidebar automatically when screen is larger than 600px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header>
      <nav className="nav-container">
        <h2>MUET Portal</h2>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Sidebar Menu */}
        <div className={`sidebar ${menuOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            &times;
          </div>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/research" onClick={() => setMenuOpen(false)}>Research & Innovation</NavLink>
          <NavLink to="/news" onClick={() => setMenuOpen(false)}>News & Events</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research & Innovation</NavLink>
          <NavLink to="/news">News & Events</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
