import React from 'react';
import { NavLink } from 'react-router';

export default function Nav() {
  return (
    <>
      <div className="header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
      <div className="menu-toggle">
        <div className="icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="menu"></div>
    </>
  );
}
