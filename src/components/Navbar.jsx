import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Aayush's Portfolio</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/targeting-companies" className="nav-link">Targeting Companies</Link>
      </div>
    </nav>
  );
}

export default Navbar;
