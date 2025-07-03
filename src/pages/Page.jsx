import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Lenis from 'lenis';
import Inner from '../components/Transitions/inner';
import Stairs from '../components/Transitions/stairs';
import Curve from '../components/Transitions/curve';
import Header from '../components/Navigation/Header';
import Menu from '../components/Navigation/Menu';
import SmoothScroll from '../components/SmoothScroll';
import { getLenis } from '../utils/lenis';

// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Page() {
  useEffect(() => {
    // ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,
    //   smoothTouch: 0.1,
    // });

    const lenis = getLenis();
    lenis.scrollTo(0, { immediate: true });

    // menu toggle button

    ScrollTrigger.create({
      trigger: '.section2',
      start: 'top 70%',
      end: 'bottom 70%',

      onEnter: () => {
        gsap.to('.menu-toggle', {
          x: 0,
          ease: 'expo.out',
          duration: 0.5,
        });
      },

      onLeaveBack: () => {
        gsap.to('.menu-toggle', {
          x: 100,
          duration: 0.5,
        });
      },
    });

    return () => {
      // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    // <motion.div
    //   variants={pageVariants}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   transition={{ duration: 0.5 }}
    // ></motion.div>

    <>
      <Menu />
      <Inner>
        <Header />
        <Outlet />
      </Inner>
    </>
  );
}
