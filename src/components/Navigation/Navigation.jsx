import React from 'react';
import HeaderItem from './HeaderItem';
import NavItem from './NavItem';

export default function Navigation({ parent }) {
  return parent === 'header' ? (
    <nav>
			<HeaderItem href="/">Home</HeaderItem>
      <HeaderItem href="/about">About</HeaderItem>
      <HeaderItem href="/projects">Projects</HeaderItem>
      <HeaderItem href="/contact">Contact</HeaderItem>
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
