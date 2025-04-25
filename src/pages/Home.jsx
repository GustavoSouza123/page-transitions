import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { span } from 'motion/react-client';

export default function Home() {
  // const subtitle =
  //   "I'm a web developer and tech enthusiast with a deep passion for both human and programming languages.".split(' ');
  const subtitle =
    "I'm a freelance UI/UX designer and began my career in web and front-end development in 2015. I later transitioned into the design field, driven by a passion for web design, UI/UX, branding, and mobile application projects.".split(
      ' '
    );

  const paragraph =
    'Combining expertise in UX/UI design and front-end development, I craft adaptable websites that seamlessly integrate motion, interaction, and design to deliver compelling user experiences. My work prioritizes simplicity and clarity, ensuring every detail is thoughtfully designed and precisely implemented.'.split(
      ' '
    );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      defaults: {
        ease: 'expo.out',
        duration: 0.5,
      },
    });

    tl1
      .to(
        '.title .line .text',
        {
          y: 0,
          // stagger: 0.1,
          rotate: '0',
          delay: 0.5,
          ease: 'expo.out',
        },
        '<'
      )
      .to(
        '.subtitle .line .text',
        {
          y: 0,
          stagger: 0.01,
          rotate: '0',
          ease: 'expo.out',
        },
        '<0.3'
      );

    const tl2 = gsap.timeline({
      defaults: {
        ease: 'expo.out',
        duration: 0.5,
      },
      scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
				// scrub: 1
      },
    });

    tl2.to(
      '.paragraph .line .text',
      {
        y: 0,
        stagger: 0.005,
        rotate: '0',
        // delay: 0.2,
        ease: 'expo.out',
      },
      '<'
    );
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

      <div className="section section1">
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

      <div className="section section2">
        <div className="box paragraph">
          {paragraph.map((word, index) => (
            <div className="line" key={index}>
              <div className="text">{word}&nbsp;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
