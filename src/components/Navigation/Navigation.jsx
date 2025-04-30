import React from 'react';
import { NavLink } from 'react-router';
import NavItem from './NavItem';

export default function Navigation({ parent }) {
  return parent === 'header' ? (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  ) : parent === 'menu' ? (
    <nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </nav>
  ) : (
    <div>Error</div>
  );
}
