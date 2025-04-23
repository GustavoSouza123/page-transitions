import React from 'react';
import { NavLink } from 'react-router';

export default function Nav() {
  return (
    <div className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}
