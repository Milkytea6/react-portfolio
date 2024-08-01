import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mb-2 mb-lg-0" id="navbarSupportedContent">
              {links.map((link) => link)}
            </ul>
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
              Resume
            </Link>,
          ]}
        />
      );
}

export default Navigation;