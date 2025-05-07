import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'motion/react';

export default function NavItem({ children, href, onMenuClick }) {
  const MotionNavLink = motion.create(NavLink);

  const transition = {
    duration: 0.5,
    ease: [0, 0.96, 0.4, 1],
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
