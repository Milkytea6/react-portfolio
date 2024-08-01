import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
function Navigation() {
    return (
        <Nav
          links={[
            <Link key={1} className="nav-link text-light" to="/about">
              About Me
            </Link>,
            <Link key={2} className="nav-link text-light" to="/portfolio">
              Portfolio
            </Link>,
            <Link key={3} className="nav-link text-light" to="/contact">
              Contact
            </Link>,
            <Link key={4} className="nav-link text-light" to="/resume">
              resume
            </Link>,
          ]}
        />
      );
}

export default Navigation;