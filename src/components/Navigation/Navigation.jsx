import React from 'react';
import HeaderItem from './HeaderItem';
import NavItem from './NavItem';

export default function Navigation({ parent, onMenuClick }) {
  return parent === 'header' ? (
    <nav>
      <HeaderItem href="/">Home</HeaderItem>
      <HeaderItem href="/about">About</HeaderItem>
      <HeaderItem href="/projects">Projects</HeaderItem>
      <HeaderItem href="/contact">Contact</HeaderItem>
    </nav>
  ) : parent === 'menu' ? (
    <nav>
      <NavItem onMenuClick={onMenuClick} href="/">
        Home
      </NavItem>
      <NavItem onMenuClick={onMenuClick} href="/about">
        About
      </NavItem>
      <NavItem onMenuClick={onMenuClick} href="/projects">
        Projects
      </NavItem>
      <NavItem onMenuClick={onMenuClick} href="/contact">
        Contact
      </NavItem>
    </nav>
  ) : (
    <div>Error</div>
  );
}
