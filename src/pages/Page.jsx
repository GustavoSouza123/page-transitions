import React from 'react';
import { Outlet } from 'react-router';
import Inner from '../components/inner';
import Stairs from '../components/stairs';

// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

export default function Page() {
  return (
    // <motion.div
    //   variants={pageVariants}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   transition={{ duration: 0.5 }}
    // ></motion.div>

    <Inner>
      <Outlet />
    </Inner>
  );
}
