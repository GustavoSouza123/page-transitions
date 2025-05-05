import React from 'react';
import { motion, useTransform } from 'motion/react';
import Phrase from './Phrase';

export default function Slide({ direction, left, progress }) {
  const dir = direction === 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * dir, -150 * dir]);

  return (
    <motion.div className="slide" style={{ x: translateX, left: left }}>
      <Phrase>Front End Developer</Phrase>
      <Phrase>Front End Developer</Phrase>
      <Phrase>Front End Developer</Phrase>
      <Phrase>Front End Developer</Phrase>
      <Phrase>Front End Developer</Phrase>
    </motion.div>
  );
}
