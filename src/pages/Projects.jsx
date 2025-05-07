import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Picture4 from '../assets/landscape4.jpg';
import Picture5 from '../assets/landscape5.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const section1Ref = useRef(null);
  const section3Ref = useRef(null);
  const section5Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const tl1 = gsap.timeline({
      defaults: {
        ease: 'expo.out',
        duration: 1,
      },
    });

    tl1.to(
      '.header nav a',
      {
        y: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: 'power3.inOut',
      },
      '>'
    );

    const tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to(image1Ref.current, { y: 400, ease: 'none' });

    const tl3 = gsap
      .timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to(image2Ref.current, { y: -400, ease: 'none' });

    const tl4 = gsap
      .timeline({
        scrollTrigger: {
          trigger: section5Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to(image3Ref.current, { y: 200, ease: 'none' });

    return () => {
      // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="content projects">
      <div className="section section1" ref={section1Ref}>
        {/* <h1>Projects Page</h1>
        <div className="body">
          Curabitur porttitor nisi ipsum, et tincidunt ex molestie non. Maecenas suscipit, est at dignissim accumsan,
          leo lorem imperdiet neque, quis facilisis dui erat eu velit. Maecenas dictum eu velit eu porttitor.
          Pellentesque convallis nunc quis neque pretium, sed vehicula massa faucibus. Donec accumsan tortor et aliquam
          consequat. Fusce imperdiet ac nisi a consectetur. Etiam sed odio lorem. Pellentesque et tortor accumsan,
          ornare enim quis, cursus nisl. Aenean ac justo ex. Sed mattis cursus arcu ut feugiat. Morbi lobortis, sem non
          porta viverra, magna massa condimentum enim, tempor tempor velit odio in metus. Sed cursus egestas magna eu
          dapibus. In hac habitasse platea dictumst. Integer sed orci eget erat feugiat facilisis sit amet nec ligula.
          Ut vitae porttitor nunc, vitae tempor eros. Nullam bibendum, est vel iaculis dapibus, erat lorem pharetra
          nulla, eu bibendum sapien dolor a neque.
        </div> */}
        <div className="image" ref={image1Ref}>
          <img src={Picture4} alt="Image" />
        </div>
      </div>

      <div className="section section2">
        <div className="body">
          Pellentesque convallis nunc quis neque pretium, sed vehicula massa faucibus. Donec accumsan tortor et aliquam
          consequat. Fusce imperdiet ac nisi a consectetur. Etiam sed odio lorem. Pellentesque et tortor accumsan,
          ornare enim quis, cursus nisl. Aenean ac justo ex. Sed mattis cursus arcu ut feugiat. Morbi lobortis, sem non
          porta viverra, magna massa condimentum enim, tempor tempor velit odio in metus. Sed cursus egestas magna eu
          dapibus.
        </div>
      </div>

      <div className="section section3" ref={section3Ref}>
        <div className="image" ref={image2Ref}>
          <img src={Picture5} alt="Image" />
        </div>
      </div>

      <div className="section section4"></div>

      <div className="section section5" ref={section5Ref}>
        <div className="image" ref={image3Ref}>
          <img src={Picture4} alt="Image" />
        </div>
      </div>

      <div className="section section6"></div>
    </div>
  );
}
