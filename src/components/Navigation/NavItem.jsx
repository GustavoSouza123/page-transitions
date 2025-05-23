import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'motion/react';
import gsap from 'gsap';

export default function NavItem({ children, href, onMenuClick }) {
  const MotionNavLink = motion.create(NavLink);

  const transition = {
    duration: 0.25,
    // ease: [0, 0.70, 0.4, 1],
    ease: [0.33, 0.71, 0.4, 0.99],
  };

  const handleLinkClick = () => {
    onMenuClick();
  };

  return (
    <div className="item">
      <MotionNavLink to={href} onClick={handleLinkClick} initial="initial" whileHover="hover" animate="animate">
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: '-100%', transition },
            animate: { y: 0, transition },
          }}
        >
          {children}
        </motion.div>
        <motion.div
          style={{ position: 'absolute', top: '0' }}
          variants={{
            initial: { y: '100%' },
            hover: { y: 0, transition },
            animate: { y: '100%', transition },
          }}
        >
          {children}
        </motion.div>
      </MotionNavLink>
    </div>
  );
}
