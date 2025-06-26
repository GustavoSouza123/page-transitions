import React, { useState } from 'react';
import gsap from 'gsap';
import Navigation from './Navigation';

export default function Menu() {
  const [isOpen, setIsOpen] = useState();

  const toggleMenuBtnColors = (isOpen) => {
    if (document.querySelector('.content').style.backgroundColor.includes('255')) {
      if (!isOpen) setDarkTheme();
      else setLightTheme(isOpen);
    } else {
      if (!isOpen) setLightTheme();
      else setDarkTheme(isOpen);
    }
  };

  const setDarkTheme = (isOpen) => {
    if (!isOpen) {
      gsap.to('.menu', { backgroundColor: '#2a2a2a' });
      gsap.to('.menu nav a', { color: '#fff' });
    }
    gsap.to('.menu-toggle', { backgroundColor: '#fff' });
    gsap.to('.menu-toggle span', { backgroundColor: '#2a2a2a' });
  };

  const setLightTheme = (isOpen) => {
    if (!isOpen) {
      gsap.to('.menu', { backgroundColor: '#fff' });
      gsap.to('.menu nav a', { color: '#2a2a2a' });
    }
    gsap.to('.menu-toggle', { backgroundColor: '#2a2a2a' });
    gsap.to('.menu-toggle span', { backgroundColor: '#fff' });
  };

  const toggleMenuOpen = () => {
    setIsOpen(!isOpen);

    toggleMenuBtnColors(isOpen);

    if (!isOpen) {
      /* todo: disable scrolling is not working */
      // document.body.setAttribute('data-lenis-prevent', 'true');
      gsap.to('.menu', { x: 0, duration: 0.7, ease: 'power3.inOut' });
      gsap.to('.menu nav .item', { x: 0, stagger: 0.05, duration: 0.7, delay: 0.1, ease: 'power3.inOut' });
    } else {
      // document.body.removeAttribute('data-lenis-prevent');
      gsap.to('.menu', { x: 650, duration: 0.7, delay: 0.2, ease: 'power3.inOut' });
      gsap.to('.menu nav .item', { x: 150, stagger: 0.05, duration: 0.7, ease: 'power3.inOut' });
    }
  };

  return (
    <>
      <div className="menu-toggle" onClick={toggleMenuOpen}>
        <div className="icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="menu">
        <Navigation parent="menu" onMenuClick={toggleMenuOpen} />
      </div>
    </>
  );
}
