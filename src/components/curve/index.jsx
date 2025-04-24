import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { curve, text, translate } from './anim';
import { useLocation } from 'react-router';

const anim = (variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

export default function Curve({ children, backgroundColor }) {
  const location = useLocation();

  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  const routes = {
    '/': 'Home',
    '/about': 'About',
    '/contact': 'Contact',
  };

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div className="background" style={{ opacity: dimensions.width == null ? 1 : 0 }}></div>
      {/* <motion.p className="route" {...anim(text)}>
        {routes[location.pathname]}
      </motion.p> */}
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ width, height }) => {
  const initialPath = `
		M0 300 
		Q${width / 2} 0 ${width} 300
		L${width} ${height + 300}
		Q${width / 2} ${height + 600} 0 ${height + 300}
		L0 0
	`;

  const targetPath = `
		M0 300
		Q${width / 2} 0 ${width} 300
		L${width} ${height}
		Q${width / 2} ${height} 0 ${height}
		L0 0
	`;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
