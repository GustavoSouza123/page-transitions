import React from 'react';
import { NavLink } from 'react-router';

export default function Navigation({ onClick }) {
  return (
    <nav>
      <NavLink to="/" onClick={onclick}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={onclick}>
        About
      </NavLink>
      <NavLink to="/projects" onClick={onclick}>
        Projects
      </NavLink>
      <NavLink to="/contact" onClick={onclick}>
        Contact
      </NavLink>
    </nav>
  );
}
