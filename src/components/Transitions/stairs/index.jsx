import React from 'react';
import { motion } from 'motion/react';
import { expand, opacity } from './anim';

const anim = (variants, custom = null) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    custom,
    variants,
  };
};

const numOfColumns = 6;

export default function Stairs({ children, backgroundColor }) {
  return (
    <div className="page stairs" style={{ backgroundColor }}>
      <motion.div className="transition-background" {...anim(opacity)} />
      <div className="transition-container">
        {[...Array(numOfColumns)].map((_column, i) => {
          return <motion.div key={i} {...anim(expand, numOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
}
