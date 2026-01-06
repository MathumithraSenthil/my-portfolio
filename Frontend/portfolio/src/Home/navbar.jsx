import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { name: 'Home', id: 'header' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Internship', id: 'internship' },
    { name: 'Education', id: 'education' },
    { name: 'Contact me', id: 'contact' }
  ];

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(78, 48, 29, 0.3)' }}>
      <div className="container-fluid">
        {/* Logo - Left */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand">
            <img src={logo} alt="Logo" width="70" height="70" />
          </a>
        </div>

       
        {/* Social Buttons - Right (visible on all screens) */}
        <div className="d-flex align-items-center order-lg-5">
          <button className="btn btn-outline-dark" onClick={() => window.open("https://github.com/MathumithraSenthil", "_blank")} type="button">
            <i className="bi bi-github"></i>
          </button>&nbsp;
          <button className="btn btn-outline-dark" onClick={() => window.open("https://www.linkedin.com/in/mathumithrasenthil/", "_blank")} type="button">
            <i className="bi bi-linkedin"></i>
          </button>
        </div>

        {/* Nav Links - Center (collapsible on mobile) */}
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''} order-lg-2`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4" style={{ fontFamily: 'Cormorant' }}>
            {navItems.map((item, index) => (
              <li className="nav-item text-center text-dark" key={index}>
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