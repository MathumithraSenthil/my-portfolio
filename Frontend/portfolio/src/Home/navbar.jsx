import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { name: 'Home', id: 'header' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Internship', id: 'internship' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact me', id: 'contact' }
  ];

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(192, 182, 176, 0.86)' }}>
      <div className="container-fluid">
        {/* Logo - Left */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand">
            <img src={logo} alt="Logo" width="60" height="60" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler d-lg-none" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list" style={{ fontSize: '2rem' }}></i>
        </button>

        {/* Social Buttons - Right (visible on all screens) */}
        <div className="d-flex align-items-center order-lg-3">
          <button className="btn btn-outline-secondary me-2" onClick={() => window.open("https://github.com/MathumithraSenthil", "_blank")} type="button">
            <i className="bi bi-github"></i>
          </button>
          <button className="btn btn-outline-secondary" onClick={() => window.open("https://www.linkedin.com/in/mathumithrasenthil/", "_blank")} type="button">
            <i className="bi bi-linkedin"></i>
          </button>
        </div>

        {/* Nav Links - Center (collapsible on mobile) */}
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''} order-lg-2`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4" style={{ fontFamily: 'Cormorant' }}>
            {navItems.map((item, index) => (
              <li className="nav-item text-center" key={index}>
                <Link
                  activeClass="active"
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="nav-link fs-4 fw-light"
                  style={{ cursor: 'pointer' }}
                  onMouseOver={e => e.target.style.color = 'white'}
                  onMouseOut={e => e.target.style.color = ''}
                  spy={true}
                  offset={-80}
                  onClick={() => setExpanded(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;