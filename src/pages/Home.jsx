import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';
import { useScroll } from 'motion/react';
import Slide from '../components/Slide/Slide';

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function Home() {
  // const subtitle =
  //   "I'm a web developer and tech enthusiast with a deep passion for both human and programming languages.".split(' ');
  const subtitle =
    "I'm a freelance UI/UX designer and began my career in web and front-end development in 2015. I later transitioned into the design field, driven by a passion for web design, UI/UX, branding, and mobile application projects.".split(
      ' '
    );

  const paragraph1 =
    'Combining expertise in UX/UI design and front-end development, I craft adaptable websites that seamlessly integrate motion, interaction, and design to deliver compelling user experiences. My work prioritizes simplicity and clarity, ensuring every detail is thoughtfully designed and precisely implemented.'.split(
      ' '
    );

  const paragraph21 =
    'Our approach at OH Architecture is designed to make your journey from concept to completion as smooth and enjoyable as possible.'.split(
      ' '
    );
  const paragraph22 =
    'With our 6-stages plan, we prioritize clarity, collaboration, and your unique vision. Each stage is crafted to keep you informed, inspired, and involved.'.split(
      ' '
    );

  const section3 = useRef();

  const { scrollYProgress } = useScroll({
    target: section3,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    // change page background on scroll

    const darkSections = document.querySelectorAll('.section.dark');
    const whiteSections = document.querySelectorAll('.section.white');

    // const setDarkTheme = () => {
    //   gsap.to('.content', { backgroundColor: '#0a0a0a', color: '#fff', duration: 0.2 });
    //   gsap.to('.menu-toggle', { backgroundColor: '#fff' });
    //   gsap.to('.menu-toggle span', { backgroundColor: '#0a0a0a' });
    // };

    // const setLightTheme = () => {
    //   gsap.to('.content', { backgroundColor: '#fff', color: '#0a0a0a', duration: 0.2 });
    //   gsap.to('.menu-toggle', { backgroundColor: '#0a0a0a' });
    //   gsap.to('.menu-toggle span', { backgroundColor: '#fff' });
    // };

    // darkSections.forEach((section) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: 'top 35%',
    //     end: 'bottom 70%',
    //     onEnter: setDarkTheme,
    //     onLeaveBack: setLightTheme,
    //   });
    // });

    // whiteSections.forEach((section) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: 'top 35%',
    //     end: 'bottom 70%',
    //     onEnter: setLightTheme,
    //     onLeaveBack: setDarkTheme,
    //   });
    // });

    // first section

    const tl1 = gsap.timeline({
      defaults: {
        ease: 'expo.out',
        duration: 1,
      },
    });

    tl1
      .to('.title .line .text', {
        y: 0,
        // stagger: 0.1,
        rotate: '0',
        delay: 0.5,
      })
      .to(
        '.subtitle .line .text',
        {
          y: 0,
          stagger: 0.01,
          rotate: '0',
        },
        '>-0.7'
      )
      .to(
        '.header nav a',
        {
          y: 0,
          stagger: 0.05,
          duration: 0.7,
          ease: 'power3.inOut',
        },
        '>-1'
      );

    // second section

    const tl2 = gsap.timeline({
      defaults: {
        duration: 0.5,
      },
      scrollTrigger: {
        trigger: '.section2',
        start: 'top 35%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse',
      },
    });

    tl2.to('.section2 .paragraph .line .text', {
      y: 0,
      stagger: 0.01,
      rotate: '0',
      delay: 0.2,
      // ease: 'power2.out'
      // ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.146,0.676 0.304,0.824 0.496,1.004 0.818,1.001 1,1 "),
      ease: CustomEase.create('custom', 'M0,0 C0.126,0.382 0.063,0.623 0.221,0.771 0.413,0.951 0.818,1.001 1,1 '),
    });

    // other sections

    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      const paragraph = section.querySelectorAll('.paragraph .line .text');

      const sectionsTl = gsap.timeline({
        defaults: {
          ease: 'expo.out',
        },
        scrollTrigger: {
          trigger: section,
          start: 'top 35%',
          end: 'bottom 70%',
          // toggleActions: 'play reverse play reverse',
          toggleActions: 'play none none reverse',
        },
      });

      if (index !== 0 && index !== 1) {
        sectionsTl.to(
          paragraph,
          {
            y: 0,
            stagger: 0.005,
            rotate: '0',
            // delay: 0.2,
            ease: 'expo.out',
          },
          '<'
        );
      }
    });

    return () => {
      // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="content">
      {/* <h1>Home Page</h1>
      <div className="body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim in tellus gravida
          malesuada. Maecenas sed consequat mi. Morbi sem urna, ultrices ut convallis at, aliquet at
          risus. Integer at gravida tellus, vitae venenatis arcu. Maecenas rhoncus diam a lectus
          feugiat mollis. Ut at magna sed enim venenatis blandit. Nulla facilisi.
        </p>
      </div> */}

      <div className="section section1 dark">
        <h1 className="box title">
          <span className="line">
            <span className="text">Gustavo</span>
          </span>
          &nbsp;
          <span className="line">
            <span className="text">Souza</span>
          </span>
        </h1>

        <div className="box subtitle">
          {subtitle.map((word, index) => (
            <span className="line" key={index}>
              <span className="text">{word}&nbsp;</span>
            </span>
          ))}
        </div>
      </div>

      <div className="section section2 white">
        <div className="box paragraph">
          {paragraph21.map((word, index) => (
            <div className="line" key={index}>
              <div className="text">{word}&nbsp;</div>
            </div>
          ))}
        </div>
        <div className="box paragraph">
          {paragraph22.map((word, index) => (
            <div className="line" key={index}>
              <div className="text">{word}&nbsp;</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section section3 dark" ref={section3}>
        <Slide direction="left" left="-40%" progress={scrollYProgress} />
        <Slide direction="right" left="-25%" progress={scrollYProgress} />
        <Slide direction="left" left="-15%" progress={scrollYProgress} />
      </div>

      <div className="section section4 white">
        <div className="box paragraph">
          {paragraph1.map((word, index) => (
            <div className="line" key={index}>
              <div className="text">{word}&nbsp;</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section section5 dark">
        <div className="box paragraph">
          {paragraph1.map((word, index) => (
            <div className="line" key={index}>
              <div className="text">{word}&nbsp;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
