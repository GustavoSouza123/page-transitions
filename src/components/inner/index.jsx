import React from 'react';
import { motion } from 'motion/react';
import { opacity, perspective, slide } from './anim';
import Nav from '../Nav';

const anim = (variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

export default function Inner({ children }) {
  return (
    <div className="inner">
      <motion.div className="slide" {...anim(slide)} />
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <Nav />
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
