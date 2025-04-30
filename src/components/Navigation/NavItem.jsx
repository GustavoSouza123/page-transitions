import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'motion/react';

export default function NavItem({ children, href }) {
  const MotionNavLink = motion(NavLink);

  /* to do: delay navigation to close menu and scroll up */
  const handleMenuClick = () => {
    toggleOpen();
  };

  return (
    <div className="item">
      <MotionNavLink to={href} onClick={handleMenuClick} initial="initial" whileHover="hover">
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: '-100%' },
          }}
        >
          {children}
        </motion.div>
        <motion.div
          style={{ position: 'absolute', top: '0' }}
          variants={{
            initial: { y: '100%' },
            hover: { y: 0 },
          }}
        >
          {children}
        </motion.div>
      </MotionNavLink>
    </div>
  );
}
