import React from 'react';
import { motion } from 'motion/react';
import { opacity, perspective, slide, slide2 } from './anim';

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
      {/* <motion.div className="slide2" {...anim(slide2)} /> */}
      <motion.div className="slide" {...anim(slide)} />
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
}
